# RAG-blok: werking, toevoegen en controles

Dit document beschrijft hoe de RAG-ready contentblokken op de site werken, hoe je een nieuw blok toevoegt en welke controles gelden. Het beschrijft de code zoals die in de repo staat. De oorspronkelijke eisen staan in `planning/Briefing Claude Code RAG-ready contentblokken op freelanceaiconsultant.com.md`.

## 1. Wat een blok is

Een blok is een stuk tekst dat op zichzelf een compleet en citeerbaar antwoord geeft op de vraag van de pagina. Het wordt bij de build als HTML in de pagina gezet, zonder JavaScript. Per pagina bestaat er hooguit één blok.

| Onderdeel | HTML | Regel |
|---|---|---|
| Vraagkop | `h2` | Eindigt op een vraagteken en noemt het onderwerp van het blok bij naam. |
| Antwoordalinea | `p.rag-blok__antwoord` | 2 tot 3 zinnen met de volledige conclusie. |
| Tabel | `div.rag-blok__tabel` met `table` | Optioneel. Wordt alleen getoond bij minstens twee complete rijen. De eerste cel is de rijkop (`th scope="row"`), de laatste cel bevat een link. |
| Vervolgvragen | `h3` met een `p` | 0 tot 3 vragen. Het antwoord begint met het antwoord zelf. |
| Bronregel | `p.rag-blok__bron` | `Bron: ... Bijgewerkt: <time datetime="jjjj-mm">maand jaar</time>.` |

Zonder vraagkop, antwoordalinea en bron rendert het blok niets.

Er zijn twee varianten, gestuurd door het veld `onderBestaandeKop`:

- **Met eigen vraagkop** (`onderBestaandeKop: false`, de standaard). Het blok is één `<section class="rag-blok">` met achtereenvolgens de `h2`, de antwoordalinea, de tabel, de vervolgvragen en de bronregel. Het komt vóór de eerste bestaande H2 van de pagina.
- **Gesplitst onder een bestaande kop** (`onderBestaandeKop: true`). De vraagkop is de tekst van een H2 die al op de pagina staat. Het blok rendert geen eigen `h2` en bestaat uit twee delen: `section.rag-blok.rag-blok--antwoord` met de antwoordalinea en de tabel, direct onder die kop, en `section.rag-blok.rag-blok--vervolg` met de vervolgvragen en de bronregel, aan het eind van die sectie. Zo staat dezelfde vraag niet twee keer als kop en komt bestaande tekst nooit onder een `h3` van het blok te staan.

Met `alleenAntwoord: true` bestaat een blok alleen uit vraagkop, antwoordalinea en bronregel. Dat is de uitzondering voor een pagina die de vraag zelf al volledig uitwerkt.

## 2. Waar de gegevens staan

| Bestand | Inhoud |
|---|---|
| `src/data/prijzen.ts` | Enige bron voor prijs, doorlooptijd, prijsnotitie en de prijsvoorwaarde (`prijsvoorwaarden`). |
| `src/data/services.js` | Naam (`title`) en slug van elke dienst. |
| `src/data/site.js` | De naam van de afzender (`site.name`). |
| `src/data/rag/schema.ts` | Het schema van blok en dienst, met validatie. |
| `src/data/rag/blokken/*.ts` | Eén bestand per geplaatst blok. |
| `src/data/rag/index.ts` | Registratie van alle blokken. |
| `src/data/rag/diensten.ts` | Aanvullende dienstfeiten: resultaat, doelgroep en laatst gecontroleerd. |
| `src/lib/rag-blok.js` | De renderfunctie, gedeeld door het component en de remark-plugin. |
| `src/lib/rag-prijzen.js` | Hoe prijs en doorlooptijd in een blok worden geschreven. |
| `src/lib/rag-tekst.js` | Tekstregels, gedeeld door schema, renderfunctie en controle. |
| `src/components/RagBlok.astro`, `src/lib/remark-rag-blok.js` | Plaatsing in een Astro-template en in een Markdown-pagina. |
| `src/styles/rag-blok.css` | Opmaak, met alleen bestaande designtokens. |

### Tokens

Prijs, doorlooptijd en prijsvoorwaarde worden nooit overgetypt in een blok. Je schrijft een token en de renderfunctie vult de waarde in. Een onbekend of onvervangen token laat de build falen.

| Token | Levert op |
|---|---|
| `{{price:slug}}` | De prijs uit `prijzen.ts`, bijvoorbeeld `€7.000`. Bij een dienst met prijsniveaus (nu alleen `fractional-ai-lead`) de bandbreedte met de omvang: `€2.600 - €10.400 per maand, voor 2, 4 of 8 dagen per maand`. |
| `{{pricelc:slug}}` | Dezelfde prijs met een kleine beginletter, voor midden in een zin. |
| `{{timing:slug}}` | De doorlooptijd: `timingVoluit` als die bestaat, anders `timing`. Bij een dienst met niveaus de omvang, bijvoorbeeld `2, 4 of 8 dagen per maand`. |
| `{{niveaus:slug}}` | Elk prijsniveau voluit: bedrag, periode, naam en omvang. Alleen voor een dienst met niveaus, en niet toegestaan in de antwoordalinea. |
| `{{dienst:slug}}` | De naam van de dienst. De renderfunctie bepaalt of die naam een link naar `/diensten/slug` wordt. |
| `{{title:slug}}` | De naam van de dienst, altijd zonder link. |
| `{{afzender}}` | De naam van de afzender uit `site.js`. |
| `{{voorwaarden}}` | De prijsvoorwaarde uit `prijzen.ts`: `exclusief btw en reiskosten`. |

Een link schrijf je als `[ankertekst](/pad)` of met een volledige `https://`-URL. De renderfunctie zet maximaal één link per doel-URL in een blok en nooit een link naar de eigen pagina. De tabel gaat voor: staat een doel in een tabelrij, dan staat de link daar. Zonder tabel staat de link bij de eerste vermelding.

In een tabelcel verwijs je naar een dienstveld met een object in plaats van een token: `{ dienst: 'slug', veld: 'naam' | 'prijs' | 'niveaus' | 'doorlooptijd' }`. Een cel kan ook vaste tekst zijn of `{ tekst, href }`.

### Velden van een blok

| Veld | Verplicht | Inhoud |
|---|---|---|
| `pagina` | Ja | Intern pad van de pagina, zonder slash aan het eind. |
| `type` | Ja | `dienst`, `dienstenoverzicht`, `case` of `kennisbank`. |
| `onderwerp` | Ja | De dienst of het onderwerp dat de vraagkop bij naam moet noemen. |
| `vraagkop` | Ja | Eindigt op een vraagteken en bevat `onderwerp`. |
| `antwoord` | Ja | 2 tot 3 zinnen. |
| `vervolgvragen` | Ja | Lijst van 0 tot 3 items met `vraag` en `antwoord`, en optioneel `voorbehoud` of `onvoorwaardelijk`. De lijst mag leeg zijn. |
| `bron` | Ja | `tekst` (bevat `{{afzender}}`) en optioneel `href` (intern pad of URL). |
| `bijgewerkt` | Ja | Maand als `jjjj-mm`. Pas die alleen aan bij een echte wijziging. |
| `onderBestaandeKop` | Nee | Standaard `false`. Zie hoofdstuk 1. |
| `tabel` | Nee | `bijschrift`, `kolommen` (minstens 2) en `rijen`. Elke rij heeft evenveel cellen als er kolommen zijn. |
| `alleenAntwoord` | Nee | Standaard `false`. Dan geen tabel en geen vervolgvragen. |
| `externeFeiten` | Nee | Lijst van `{ zin, soort }` voor feiten van buiten de eigen dienstverlening. |
| `concept` | Nee | Standaard `false`. Bij `true` meldt `check-rag.mjs` dat de teksten nog niet beoordeeld zijn. |
| `markup` | Nee | Standaard `false`. Bij `true` staan de vraagkop met de antwoordalinea en de vervolgvragen ook als `FAQPage` in de structured data van de pagina. De tabel en de bronregel niet. |

Elk blok en elke dienst wordt bij het laden gevalideerd. Een ontbrekend of ongeldig veld laat de build falen met het bestand, het veld en de reden.

## 3. Een nieuw blok toevoegen

1. **Schrijf het concept in `docs/rag-concepten.json`.** Een concept heeft dezelfde velden als een blok, zonder `bijgewerkt`. Daarnaast kent het werkvelden die niet bij het blok horen: `status`, `herkomst` (waar elke zin vandaan komt), `opmerking`, `wijzigingen`, `geschrapt` en `verificatie`.
2. **Controleer het concept.** Het script zet elk concept op zijn beoogde plek in een kopie van `dist/` en draait daar `check-rag.mjs` op. De site en de databron blijven ongemoeid. De map `<werkmap>/dist` wordt hierbij eerst geleegd.

   ```bash
   npm run build
   node planning/check-concepten.mjs docs/rag-concepten.json <werkmap>
   ```

   Het script meldt ook als de pagina niet bestaat, geen H2 heeft, de bestaande kop niet bevat of al een geplaatst blok heeft.
3. **Maak het leesdocument voor de beoordeling**, als dat nodig is: `node planning/concepten-doc.mjs docs/rag-concepten.json docs/rag-concepten.md planning/rag-concepten-kop.md`. Dit plaatst niets.
4. **Wacht op de status `akkoord`** (zie hoofdstuk 4).
5. **Maak het blokbestand** in `src/data/rag/blokken/`, met de inhoud van het concept zonder de werkvelden en met `bijgewerkt` erbij. De bestaande bestanden heten naar het pad van de pagina, bijvoorbeeld `diensten-ai-readiness-assessment.ts`.

   ```ts
   export default {
     pagina: '/diensten/ai-strategy-sprint',
     type: 'dienst',
     onderwerp: 'AI Strategy Sprint',
     vraagkop: 'Wat levert de AI Strategy Sprint op en wat kost die?',
     antwoord: 'De {{dienst:ai-strategy-sprint}} van {{afzender}} ... in {{timing:ai-strategy-sprint}} ... De prijs is {{pricelc:ai-strategy-sprint}}, {{voorwaarden}}.',
     vervolgvragen: [
       { vraag: 'Hoeveel werksessies telt de AI Strategy Sprint?', antwoord: 'Vijf werksessies. De {{dienst:ai-strategy-sprint}} ...' },
     ],
     bron: { tekst: 'tarieven en doorlooptijden van {{afzender}}', href: '/tarieven' },
     bijgewerkt: '2026-10',
   };
   ```

6. **Registreer het blok in `src/data/rag/index.ts`**: importeer het bestand en voeg het toe aan de lijst `bronnen`. Twee blokken voor dezelfde pagina laten de build falen.
7. **Dienstblok: vul eerst de dienstfeiten aan.** Een blok met `type: 'dienst'` vereist een regel voor die dienst in `aanvullingen` in `src/data/rag/diensten.ts`, met `resultaat` (precies één zin), `doelgroep` en `laatstGecontroleerd` (`jjjj-mm-dd`). Naam, URL, prijs en doorlooptijd komen uit `services.js` en worden daar niet overgetypt. Ontbreken de dienstfeiten, dan faalt de build.
8. **Zorg dat de pagina het blok toont.** Dat verschilt per soort pagina, zie hieronder.
9. **Draai `npm run build`** en los elke fout op voordat je verdergaat.
10. **Zet `markup: true` in het blokbestand** als de vragen van het blok ook in de structured data moeten staan, en draai de build opnieuw. Dat hoeft in geen enkele template: `src/layouts/BaseLayout.astro` zoekt het blok op via het pad van de pagina en voegt de vragen toe met `metRagVragen` uit `src/lib/rag-blok.js`. Heeft de pagina al een `FAQPage`, dan komen de vragen achter de bestaande items. Heeft ze één los object, dan wordt de JSON-LD een lijst van twee: het bestaande object, ongewijzigd, en de `FAQPage`. De tekst komt uit dezelfde renderfunctie als de zichtbare HTML en wordt nergens overgetypt.

### In een Astro-template

Een Astro-template heeft het component nodig, met het pad van de pagina:

```astro
---
import RagBlok from '../../components/RagBlok.astro';
---
<RagBlok pagina={`/diensten/${service.slug}`} />
```

Het component laadt `rag-blok.css`, zoekt het blok voor dat pad op en rendert niets als er geen blok is. Het staat nu alleen in `src/pages/diensten/[slug].astro`. In een andere template zet je het zelf op de juiste plek: vóór de sectie met de eerste bestaande H2. Het component rendert beide delen van een gesplitst blok direct na elkaar op die ene plek.

### In een Markdown-pagina

Voor pagina's uit `src/content/pages` hoeft er niets in het Markdown-bestand of de template te gebeuren. De remark-plugin `remarkRagBlok` (geregistreerd in `astro.config.mjs`) zoekt het blok op via het frontmatterveld `url` en voegt de HTML in:

- met eigen vraagkop: vóór de eerste H2. Heeft de pagina geen H2, dan faalt de build;
- onder een bestaande kop: de antwoordalinea direct na de H2 met dezelfde tekst als `vraagkop`, en de vervolgvragen met de bronregel vóór de volgende H2 of aan het eind van de content. Staat die kop niet op de pagina, dan faalt de build.

De template `src/pages/[...slug].astro` laadt `rag-blok.css` al.

## 4. Statussen in `docs/rag-concepten.json`

| Status | Betekenis | Wie zet hem |
|---|---|---|
| `concept` | Geschreven, maar nog niet volledig bevestigd: er is een voorgelegde zin, een open bevinding of een extern feit. | `planning/verificatie-verwerk.mjs` (stap `eind`). Een concept zonder `status` geldt ook als concept. |
| `geverifieerd` | Elke zin is bevestigd, er is geen open bevinding en geen extern feit. | `planning/verificatie-verwerk.mjs` (stap `eind`). |
| `akkoord` | De teksten zijn goedgekeurd voor plaatsing. | Alleen de eigenaar van de site, met de hand in de JSON. Geen script zet deze status. |
| `wacht op publicatie` | De pagina staat op `noindex`. Het concept is niet herzien en niet geverifieerd. | Met de hand in de JSON. `check-concepten.mjs`, `concepten-doc.mjs` en `verificatie-invoer.mjs` slaan deze concepten over. |

Alleen blokken met de status `akkoord` worden geplaatst. Die regel is een werkafspraak: het plaatsen zelf is handwerk (stap 5 en 6 hierboven) en geen script dwingt de status af. Zet de status dus nooit zelf op `akkoord`.

## 5. Controles

De controles lezen de ruwe HTML in `dist/`. Wat daar niet staat, staat niet in de respons. Een fout laat de build falen.

### Blokcontroles: `planning/check-rag.mjs`

| Controle | Wat er getoetst wordt |
|---|---|
| Aanwezigheid | Elk blok uit de databron staat op een bestaande pagina, in `<main>`, met het verwachte aantal delen (1, of 2 onder een bestaande kop). Een blok in de HTML dat niet in de databron staat is een fout. |
| Vraagkop | Met eigen kop: de `h2` is het eerste element van het blok. Onder een bestaande kop: geen eigen `h2`, het antwoorddeel staat direct onder de bestaande `h2`, beide delen staan in dezelfde sectie en het antwoorddeel bevat geen `h3`. De kop eindigt op een vraagteken en noemt het onderwerp. Na het deel met de vervolgvragen volgt een `h2` of het einde van de content. |
| Antwoordalinea | Staat direct na de vraagkop, telt 2 tot 3 zinnen en somt de prijsniveaus niet op. |
| Afzender | Bij dienstachtige blokken staat de afzender in de antwoordalinea. Bij een kennisbankblok staat hij daar niet. In een vervolgantwoord staat hij nooit. Uitzondering op beide verboden: de formulering "[afzender] adviseert". |
| Tabel | Minstens twee rijen, elke rij met `th scope="row"`, geen lege cel en geen cel met "zie", "n.v.t." of "volgt", de laatste cel bevat een link, en geen kolom met in elke rij dezelfde waarde. |
| Vervolgvragen en stelligheid | Hooguit 3 (geen bij `alleenAntwoord`), elke vraag eindigt op een vraagteken en heeft een antwoord. Het antwoord begint met het antwoord op de vraag, begint alleen met een bedrag als de vraag daarnaar vraagt en noemt een dienst of het onderwerp voluit. Een kaal "Ja." of "Nee." mag alleen met `onvoorwaardelijk: true`. Een opgegeven `voorbehoud` staat in de eerste zin en letterlijk op de eigen pagina of in `prijzen.ts`. |
| Links | Elke genoemde dienst met een eigen URL is gelinkt. Maximaal één link per doel-URL, in de tabelrij als het doel daar staat en anders bij de eerste vermelding. Geen link naar de eigen pagina, geen slash aan het eind, en elke interne link bestaat in `dist/`. |
| Bronregel | Begint met `Bron:`, noemt de afzender en bevat een `time` met `datetime`. |
| Zichtbaarheid | Het blok staat niet in `details`, een `hidden` of `aria-hidden` element, een tabpaneel of een element met een klasse als `accordion` of `collapse`, en bevat zelf geen `details`, `script` of verborgen element. |
| Schrijfregels | Geen em dash, het verboden woord uit hoofdstuk 6 komt niet voor (de bronregel is daarvan uitgezonderd), en geen bedrag of omvang met een schuine streep. |
| Consistentie met `prijzen.ts` | Elk bedrag hoort bij een dienst uit dezelfde zin, anders uit dezelfde alinea of rij, en staat bij die dienst in de databron. Elke doorlooptijd hoort bij een dienst uit dezelfde zin. Op een dienstpagina telt de eigen dienst altijd mee. |
| Getallen letterlijk in de bron | Elk bedrag, aantal en elke termijn buiten de bronregel staat letterlijk in `prijzen.ts` of in de bestaande tekst van de eigen pagina. Een bedrag, percentage of jaartal moet zelf voorkomen, elk ander getal samen met het inhoudswoord ervoor of erna. |
| Bedragen alleen als de pagina ze noemt | Een bedrag van een dienst staat alleen in het blok als de pagina zelf dat bedrag noemt, of als de vraagkop over kosten gaat. |
| Dubbele tekst | Geen zin van vier of meer woorden uit de bestaande paginatekst staat woordelijk in het blok. |
| Dubbele vraag | De vraagkop en de vervolgvragen staan niet al als kop op deze of een andere pagina. De vragen in FAQ-accordeons (`summary`) tellen mee. |
| Structured data | Met `markup: true` staat elke vraag van het blok precies één keer in `FAQPage`, met een antwoord dat woordelijk gelijk is aan de zichtbare alinea. Zonder `markup` staat geen vraag van het blok in `FAQPage`. |

Het script meldt daarnaast elk blok met `concept: true`. Dat is een melding, geen fout.

### Beschermde SEO-elementen: `planning/check-nulmeting.mjs`

Dit script vergelijkt elke pagina in `dist/` met de nulmeting in `docs/seo-nulmeting/` (één JSON-bestand per URL). Toevoegingen zijn toegestaan en worden als info gemeld, wijzigingen niet.

| Controle | Wat er getoetst wordt |
|---|---|
| Kopgegevens | `title`, meta description, canonical, robots-meta, hreflang en H1 zijn identiek, net als de Open Graph- en Twitter-velden. |
| Koppenstructuur | Elke bestaande kop komt terug met dezelfde tekst, hetzelfde niveau en in dezelfde volgorde. Het aantal H1's is gelijk. |
| Bestaande bodytekst | Elk tekstblok uit `<main>` komt volledig en in dezelfde volgorde terug. |
| Bestaande links | Elke link komt terug met dezelfde regio, `href` en ankertekst. |
| Structured data | Elke bestaande knoop en elk bestaand FAQ-item komt identiek en in dezelfde volgorde terug, en de JSON-LD is geldige JSON. Toegevoegd mag alleen een `FAQPage` of een vraag daarin zijn; elke andere toevoeging is een fout. |
| Afbeeldingen | Bron, alt-tekst, afmetingen en `loading` zijn gelijk. |
| Laadprestaties | Geen ander of extra script, en hetzelfde aantal `details`-elementen. |
| Aanwezigheid | De pagina uit de nulmeting bestaat nog in `dist/`. |

Een pagina zonder nulmeting krijgt een regel "let op" en geen fout.

## 6. Schrijfregels voor de tekst van een blok

- **Stelligheid.** Een vervolgantwoord begint met het antwoord op de vraag: ja of nee bij een ja-neevraag, anders het getal of de naam van de dienst. Het is nooit stelliger dan de bron.
- **Voorbehoud.** Maakt de bron een voorbehoud ("vaak", "meestal", "minder geschikt als"), zet dat dan letterlijk in het veld `voorbehoud` en neem het over in de eerste zin van het antwoord. Het voorbehoud moet letterlijk op de eigen pagina of in `prijzen.ts` staan.
- **Kaal ja of nee.** Een antwoord dat begint met alleen "Ja." of "Nee." mag uitsluitend met `onvoorwaardelijk: true`, als de bron zelf geen enkel voorbehoud maakt. Een blok kan niet tegelijk een `voorbehoud` hebben en onvoorwaardelijk zijn.
- **Bedrag.** Een vervolgantwoord begint alleen met een bedrag als de vraag naar het bedrag vraagt. Prijsniveaus staan voluit, zonder schuine strepen, en in de antwoordalinea staat de bandbreedte. Een uur- of dagtarief is nooit toegestaan.
- **Externe feiten en de bronregel.** Een feit van buiten de eigen dienstverlening (wetgeving, prijzen van tools, salarissen, marktcijfers) leg je vast in `externeFeiten`. Het blok blijft dan concept tot het feit apart is bevestigd, en "tarieven en doorlooptijden van {{afzender}}" mag niet de enige bron in de bronregel zijn.
- **Feit en advies gescheiden.** Een feit over een product van een leverancier schrijf je in de woorden die de leverancier dekt. Een oordeel of advies daarover is geen leveranciersfeit: schrijf het als advies van de afzender ("{{afzender}} adviseert ..."), gescheiden van het feit, en alleen als dat advies ook op de eigen pagina staat.
- **Het woord "gids".** Dit woord is verboden in elke tekst van een blok. Gebruik "kennisbank". De enige uitzondering is de bronregel, als het woord deel is van de eigennaam van een externe bron.
- **Geen em dash.** Gebruik een komma, een dubbele punt of een gewoon koppelteken. Dit geldt ook voor de bronregel.
- **Afzender.** Schrijf altijd `{{afzender}}`, nooit de naam zelf. Bij de types `dienst`, `dienstenoverzicht` en `case` staat de afzender in de antwoordalinea en in de bronregel. Bij het type `kennisbank` staat hij alleen in de bronregel. In vervolgantwoorden staat hij niet. De enige uitzondering op beide regels is een advies dat uitdrukkelijk aan de afzender wordt toegeschreven: "{{afzender}} adviseert ...". Elk vervolgantwoord noemt wel een dienst of het onderwerp voluit, zodat de alinea los leesbaar is.
- **Niet herhalen en niets verzinnen.** Neem geen zin woordelijk over van de pagina, en gebruik geen getal dat niet op de pagina of in `prijzen.ts` staat. Een tabelcel is nooit leeg en verwijst niet door met "zie", "n.v.t." of "volgt".

## 7. Verificatie in drie lagen

De inhoud van een blok wordt in drie lagen gecontroleerd. Alleen het oordeel "bevestigd" telt. Een zin die niet bevestigd is, wordt niet herschreven: hij wordt geschrapt of voorgelegd. De uitkomst staat in `docs/rag-verificatie.md`.

| Laag | Wat | Script |
|---|---|---|
| A, script | Elk getal staat letterlijk in `prijzen.ts` of op de eigen pagina, plus de regels voor voorbehoud en kaal ja of nee. | `planning/check-rag.mjs`, voor concepten via `planning/check-concepten.mjs`. |
| B, onafhankelijke controle per zin | Een controleur die de tekst niet schreef, geeft per zin de claim, het bronbestand met regelnummer, het letterlijke bronfragment en een oordeel. | `planning/verificatie-invoer.mjs` knipt elk blok op in genummerde zinnen en verdeelt ze over batches. `planning/verificatie-verwerk.mjs b <map>` controleert of elk fragment letterlijk in het genoemde bestand staat. |
| C, tweede lezing | Een andere controleur trekt de bevestigde oordelen na: alle zinnen met een getal en een derde van de rest. | `verificatie-verwerk.mjs b` maakt de steekproef, `verificatie-verwerk.mjs c <map>` telt de afwijkingen. Bij meer dan één afwijking gaat de hele batch opnieuw door laag B. |

Afsluiten gaat met `node planning/verificatie-verwerk.mjs eind <map> docs/rag-concepten.json docs/rag-verificatie.md`. Die stap schrapt niet-bevestigde zinnen uit vervolgantwoorden, legt de overige voor, zet de status op `concept` of `geverifieerd` en schrijft het rapport. Een al geplaatst blok wijzigt hierbij nooit: zijn zinnen worden altijd voorgelegd.

`planning/verificatie-schrap.mjs` schrapt daarna zinnen op aanwijzing: de voorgelegde zinnen, zinnen met een prijs van een tool van derden, en salarissen en marktcijfers op een pagina die daar niet zelf over gaat. Het script maakt ook de lijsten met externe feiten die nog tegen een primaire bron gelegd moeten worden.

## 8. Commando's

| Commando | Wat het doet |
|---|---|
| `npm run build` | Bouwt de site naar `dist/` en draait daarna automatisch `check-nulmeting.mjs` en `check-rag.mjs` (`postbuild`). Een fout in een van beide laat de build falen. |
| `npm run check` | Draait op een bestaande build `check-dist.mjs` (kapotte interne links, onvervangen tokens, zichtbare placeholders, H1-telling), `check-nulmeting.mjs` en `check-rag.mjs`. |
| `node planning/check-nulmeting.mjs [--toon-toevoegingen] [/url ...]` | De voor- en na-controle voor alle of voor de opgegeven pagina's. Met `--toon-toevoegingen` zie je welke koppen, tekstblokken en links zijn toegevoegd. |
| `node planning/nulmeting.mjs [--overschrijf] [/url ...]` | Legt de nulmeting vast uit `dist/`. Ook beschikbaar als `npm run nulmeting`. |
| `node planning/akkoordlijst.mjs docs/rag-concepten.json docs/rag-akkoordlijst.md [/pagina ...]` | Schrijft de akkoordlijst: één regel per blok met pagina, paginatype, status, vraagkop en de eerste zin van de antwoordalinea, per paginatype. De opgegeven pagina's komen bovenaan. Dit plaatst niets. |

In Git Bash wordt een argument als `/pad` omgezet naar een Windows-pad. Zet daar `MSYS_NO_PATHCONV=1` voor het commando.

### De nulmeting overschrijven

Zonder `--overschrijf` schrijft `nulmeting.mjs` alleen metingen voor pagina's die er nog geen hebben. Bestaande metingen blijven staan. Zo leg je een nieuwe pagina vast.

De nulmeting is de referentie voor de voor- en na-controle. Overschrijf de meting van een bestaande pagina daarom alleen na akkoord van de eigenaar van de site op de wijziging zelf, en alleen voor die ene pagina:

```bash
npm run build
node planning/nulmeting.mjs --overschrijf /diensten/ai-readiness-assessment
```

Het plaatsen van een blok is geen reden om te overschrijven: een blok voegt alleen toe en de controle staat toevoegingen toe. Faalt de voor- en na-controle na het plaatsen, dan is er iets bestaands gewijzigd. Los dat op in plaats van de nulmeting aan te passen. Draai `--overschrijf` nooit zonder URL, want dan worden alle metingen vervangen.
