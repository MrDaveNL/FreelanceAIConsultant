// Datamodel voor de RAG-ready contentblokken (zie docs/rag-inventarisatie.md, hoofdstuk 9).
// Elk blok en elke dienst wordt bij het laden gevalideerd: een ontbrekend of ongeldig veld laat de build falen.
import { z } from 'astro/zod';
import { begintMetAntwoord, begintMetBedrag, isKaalJaNee, splitsZinnen, vraagtNaarBedrag, celFout, schrijfregelFout, telZinnen } from '../../lib/rag-tekst.js';

const tekst = z
  .string()
  .trim()
  .min(1, 'mag niet leeg zijn')
  .superRefine((waarde, ctx) => {
    const fout = schrijfregelFout(waarde);
    if (fout) ctx.addIssue({ code: z.ZodIssueCode.custom, message: fout });
  });
// Interne URL zonder slash aan het eind, zoals overal op de site.
const pad = z.string().regex(/^\/(?:[a-z0-9-]+(?:\/[a-z0-9-]+)*)?(?:#[a-z0-9-]+)?$/, 'moet een intern pad zijn zonder slash aan het eind');
const datum = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'moet een datum zijn als jjjj-mm-dd');
const maand = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'moet een maand zijn als jjjj-mm');
const slug = z.string().regex(/^[a-z0-9-]+$/);

export const pakketSchema = z.object({
  naam: tekst,
  url: pad.optional(),
  resultaat: tekst,
  doorlooptijd: tekst,
  prijs: tekst,
  pastBij: tekst,
});

export const dienstSchema = z.object({
  slug,
  naam: tekst,
  url: pad,
  resultaat: tekst.refine((t) => telZinnen(t) === 1, 'moet precies 1 zin zijn'),
  doelgroep: tekst,
  doorlooptijd: tekst,
  // Vanaf-prijs of bandbreedte. Nooit een uur- of dagtarief.
  prijs: tekst.refine((t) => !/(per|\/)\s*(uur|dag)\b|uurtarief|dagtarief/i.test(t), 'mag geen uur- of dagtarief zijn'),
  pakketten: z.array(pakketSchema).optional(),
  laatstGecontroleerd: datum,
});

// Een cel is vaste tekst, een gelinkte tekst of een verwijzing naar een veld van een dienst.
// Prijs en doorlooptijd van een dienst komen altijd via zo'n verwijzing en worden nooit overgetypt.
const celTekst = tekst.superRefine((waarde, ctx) => {
  const fout = celFout(waarde);
  if (fout) ctx.addIssue({ code: z.ZodIssueCode.custom, message: `cel ${fout}` });
});
export const celSchema = z.union([
  celTekst,
  z.object({ tekst: celTekst, href: pad }).strict(),
  z.object({ dienst: slug, veld: z.enum(['naam', 'prijs', 'niveaus', 'doorlooptijd']) }).strict(),
]);

export const tabelSchema = z
  .object({
    bijschrift: tekst,
    kolommen: z.array(tekst).min(2),
    // De eerste cel van een rij is de rijkop (th scope="row"), de laatste het advies met link.
    rijen: z.array(z.array(celSchema).min(2)),
  })
  .superRefine((tabel, ctx) => {
    tabel.rijen.forEach((rij, i) => {
      if (rij.length !== tabel.kolommen.length)
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['rijen', i], message: `rij heeft ${rij.length} cellen, de tabel ${tabel.kolommen.length} kolommen` });
    });
  });

export const vervolgvraagSchema = z
  .object({
    vraag: tekst.refine((t) => t.endsWith('?'), 'moet op een vraagteken eindigen'),
    // De afzender staat alleen in de antwoordalinea en de bronregel; hier volstaat de volledige dienstnaam.
    antwoord: tekst.refine((t) => !/\{\{afzender\}\}(?! adviseert)/.test(t), 'mag de afzender alleen noemen als advies van de afzender ("{{afzender}} adviseert ...")'),
    // Stelligheid van de bron. Maakt de bron een voorbehoud ("vaak", "meestal", "minder geschikt"), dan staat dat
    // hier letterlijk en komt het terug in de eerste zin van het antwoord. Een kaal "Ja." of "Nee." mag alleen
    // met onvoorwaardelijk: true, als de bron zelf geen voorbehoud maakt.
    voorbehoud: tekst.optional(),
    onvoorwaardelijk: z.boolean().default(false),
  })
  .superRefine((v, ctx) => {
    const fout = (message) => ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['antwoord'], message });
    const eersteZin = splitsZinnen(v.antwoord)[0] ?? '';
    if (v.voorbehoud && v.onvoorwaardelijk) fout('heeft een voorbehoud en is tegelijk als onvoorwaardelijk gemarkeerd');
    if (v.voorbehoud && !eersteZin.toLowerCase().includes(v.voorbehoud.toLowerCase())) fout(`eerste zin neemt het voorbehoud "${v.voorbehoud}" niet letterlijk over`);
    if (isKaalJaNee(v.antwoord) && !v.onvoorwaardelijk) fout('begint met een kaal Ja of Nee; neem het voorbehoud van de bron over in de eerste zin, of zet onvoorwaardelijk: true als de bron geen voorbehoud maakt');
    if (!v.voorbehoud && !begintMetAntwoord(v.antwoord, [], v.vraag)) fout('moet beginnen met het antwoord op de vraag: ja of nee bij een ja-neevraag, anders het getal of de naam');
  });

export const blokSchema = z
  .object({
    // URL van de pagina waarop het blok staat.
    pagina: pad,
    type: z.enum(['dienst', 'dienstenoverzicht', 'case', 'kennisbank']),
    // De dienst of het onderwerp dat de vraagkop bij naam moet noemen.
    onderwerp: tekst,
    vraagkop: tekst.refine((t) => t.endsWith('?'), 'moet op een vraagteken eindigen'),
    // true: de vraagkop is de tekst van een bestaande H2 op de pagina. Het blok komt direct
    // onder die kop en rendert zelf geen h2, zodat dezelfde vraag niet twee keer als kop staat.
    onderBestaandeKop: z.boolean().default(false),
    antwoord: tekst.refine((t) => telZinnen(t) >= 2 && telZinnen(t) <= 3, 'moet 2 tot 3 zinnen zijn'),
    tabel: tabelSchema.optional(),
    vervolgvragen: z.array(vervolgvraagSchema).max(3),
    // true: uitzondering voor een pagina die de vraag zelf al volledig uitwerkt (zoals /tarieven).
    // Het blok bestaat dan alleen uit vraagkop, antwoordalinea en bronregel, zonder tabel en vervolgvragen.
    alleenAntwoord: z.boolean().default(false),
    // Feiten van buiten de eigen dienstverlening (wetgeving, prijzen van tools, salarissen, marktcijfers).
    // Een blok met zo'n feit blijft concept tot het feit apart is bevestigd.
    externeFeiten: z.array(z.object({ zin: z.string(), soort: z.string() })).optional(),
    // De bronregel mag de eigennaam van een externe bron bevatten, ook als daar het woord "gids" in zit.
    bron: z.object({ tekst: z.string().trim().min(1).refine((t) => !/—/.test(t), 'bevat een em dash'), href: z.union([pad, z.string().url()]).optional() }),
    bijgewerkt: maand,
    // true: de vraagkop met de antwoordalinea en de vervolgvragen staan ook als FAQPage in de structured data.
    markup: z.boolean().default(false),
    // true: de teksten zijn een concept en nog niet beoordeeld. check-rag.mjs meldt elk concept.
    concept: z.boolean().default(false),
  })
  .superRefine((blok, ctx) => {
    if (!blok.vraagkop.toLowerCase().includes(blok.onderwerp.toLowerCase()))
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['vraagkop'], message: `moet "${blok.onderwerp}" bij naam noemen` });
    if (blok.alleenAntwoord && (blok.vervolgvragen.length || blok.tabel))
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['alleenAntwoord'], message: 'een blok met alleenAntwoord heeft geen tabel en geen vervolgvragen' });
    // Afzender: bij dienstachtige blokken in de antwoordalinea en de bronregel, bij kennisbankblokken alleen in de bronregel.
    if (blok.type !== 'kennisbank' && !blok.antwoord.includes('{{afzender}}'))
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['antwoord'], message: 'moet de afzender noemen ({{afzender}})' });
    if (blok.type === 'kennisbank' && /\{\{afzender\}\}(?! adviseert)/.test(blok.antwoord))
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['antwoord'], message: 'kennisbankblok noemt de afzender alleen in de bronregel' });
    for (const [i, v] of blok.vervolgvragen.entries())
      if (begintMetBedrag(v.antwoord) && !vraagtNaarBedrag(v.vraag))
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['vervolgvragen', i, 'antwoord'], message: 'begint met een bedrag terwijl de vraag daar niet naar vraagt' });
    if (blok.externeFeiten?.length && /^tarieven en doorlooptijden van \{\{afzender\}\}$/.test(blok.bron.tekst.trim()))
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['bron', 'tekst'], message: 'blok bevat een extern feit; tarieven en doorlooptijden mag dan niet de enige bron zijn' });
    if (!blok.bron.tekst.includes('{{afzender}}'))
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['bron', 'tekst'], message: 'moet de afzender noemen ({{afzender}})' });
  });

export type Pakket = z.infer<typeof pakketSchema>;
export type Dienst = z.infer<typeof dienstSchema>;
export type Cel = z.infer<typeof celSchema>;
export type Blok = z.infer<typeof blokSchema>;

// Valideert een lijst en laat de build falen met het bestand, het veld en de reden.
export function valideer<T extends z.ZodTypeAny>(schema: T, items: unknown[], soort: string, sleutel: string): z.infer<T>[] {
  return items.map((item) => {
    const uitkomst = schema.safeParse(item);
    if (uitkomst.success) return uitkomst.data;
    const naam = (item as Record<string, unknown>)?.[sleutel] ?? '(onbekend)';
    const fouten = uitkomst.error.issues.map((i) => `  - ${i.path.join('.') || '(blok)'}: ${i.message}`).join('\n');
    throw new Error(`RAG-${soort} "${naam}" is ongeldig:\n${fouten}`);
  });
}
