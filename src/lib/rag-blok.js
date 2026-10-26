// Rendert één RAG-blok als HTML-string, volledig server-side en zonder JavaScript in de pagina.
// Gebruikt door src/components/RagBlok.astro (Astro-templates) en src/lib/remark-rag-blok.js (Markdown-pagina's),
// zodat er één implementatie van het blok is.
import { services } from '../data/services.js';
import { site } from '../data/site.js';
import { prijsTekst, duurTekst, niveausTekst, voorwaarden, prijsTekstEn, duurTekstEn, niveausTekstEn, voorwaardenEn } from './rag-prijzen.js';
import { localeFromPath } from '../data/routes.ts';

// De afzender. Eén plek, zodat de naam overal gelijk is.
export const afzender = site.name;

const MAANDEN = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const zonderTags = (html) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const dienst = (slug) => {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`RAG-blok: onbekende dienst "${slug}"`);
  return service;
};
// Diensten-leafslug is gelijk in beide talen; alleen het segment diensten/services wisselt per taal.
const dienstUrl = (slug, pagina) => (localeFromPath(pagina) === 'nl' ? `/nl/diensten/${slug}` : `/services/${slug}`);

// Maximaal één link per doel-URL binnen een blok en nooit een link naar de eigen pagina.
// De tabel wordt als eerste gerenderd: staat een doel in een tabelrij, dan is dat de plek van de link.
// Zonder tabel komt de link bij de eerste vermelding, dus in de antwoordalinea als het doel daar genoemd wordt.
const maakLinker = (pagina) => {
  const gelinkt = new Set();
  return (href, inhoud) => {
    if (href === pagina || gelinkt.has(href)) return inhoud;
    gelinkt.add(href);
    return `<a href="${esc(href)}">${inhoud}</a>`;
  };
};

// Tekst met tokens en links. Prijs en doorlooptijd komen via tokens uit prijzen.ts en worden nooit overgetypt:
//   {{price:slug}} {{pricelc:slug}}  prijs; bij een dienst met niveaus de bandbreedte met de omvang (zie rag-prijzen.js)
//   {{timing:slug}}                  doorlooptijd of omvang
//   {{niveaus:slug}}                 elk prijsniveau voluit; niet in de antwoordalinea
//   {{voorwaarden}}                  prijsvoorwaarde uit prijzen.ts (exclusief btw en reiskosten)
//   {{title:slug}}                   naam van de dienst, zonder link
//   {{dienst:slug}}                  naam van de dienst; de renderfunctie bepaalt waar die gelinkt wordt (zie maakLinker)
//   {{afzender}}                     naam van de afzender
//   [ankertekst](/pad)               interne of externe link
const tekst = (ruw, pagina, link, taal = 'nl') => {
  const en = taal === 'en';
  const html = esc(ruw)
    .replace(/\{\{(\w+)(?::([a-z0-9-]+))?\}\}/g, (token, veld, slug) => {
      if (veld === 'afzender' && !slug) return esc(afzender);
      if (veld === 'voorwaarden' && !slug) return esc(en ? voorwaardenEn : voorwaarden);
      if (!slug) throw new Error(`RAG-blok ${pagina}: onbekend token ${token}`);
      if (veld === 'dienst') return link ? link(dienstUrl(slug, pagina), esc(dienst(slug).title)) : esc(dienst(slug).title);
      if (veld === 'title') return esc(dienst(slug).title);
      if (veld === 'timing') return esc(en ? duurTekstEn(dienst(slug).slug) : duurTekst(dienst(slug).slug));
      if (veld === 'niveaus' && (en ? niveausTekstEn : niveausTekst)(dienst(slug).slug)) return esc((en ? niveausTekstEn : niveausTekst)(dienst(slug).slug));
      if (veld === 'price') return esc(en ? prijsTekstEn(dienst(slug).slug) : prijsTekst(dienst(slug).slug));
      if (veld === 'pricelc') return esc((en ? prijsTekstEn(dienst(slug).slug) : prijsTekst(dienst(slug).slug)).replace(/^\p{Lu}/u, (c) => c.toLowerCase()));
      throw new Error(`RAG-blok ${pagina}: onbekend token ${token}`);
    })
    .replace(/\[([^\]]+)\]\(((?:\/|https?:\/\/)[^)\s]*)\)/g, (_, anker, href) => (link ? link(href, anker) : anker));
  if (/\{\{|\}\}/.test(html)) throw new Error(`RAG-blok ${pagina}: onvervangen token in "${ruw}"`);
  return html;
};

const cel = (waarde, pagina, link, taal = 'nl') => {
  const en = taal === 'en';
  if (typeof waarde === 'string') return tekst(waarde, pagina, link, taal);
  if ('href' in waarde) return link(waarde.href, tekst(waarde.tekst, pagina, undefined, taal));
  if (waarde.veld === 'naam') return link(dienstUrl(waarde.dienst, pagina), esc(dienst(waarde.dienst).title));
  if (waarde.veld === 'niveaus') return esc((en ? niveausTekstEn(dienst(waarde.dienst).slug) : niveausTekst(dienst(waarde.dienst).slug)) ?? (en ? prijsTekstEn : prijsTekst)(dienst(waarde.dienst).slug));
  return esc(waarde.veld === 'prijs' ? (en ? prijsTekstEn : prijsTekst)(dienst(waarde.dienst).slug) : (en ? duurTekstEn : duurTekst)(dienst(waarde.dienst).slug));
};

// Geen tabel bij minder dan twee complete rijen. Een kolom met in elke rij dezelfde waarde is een fout.
const tabel = (bron, pagina, link, taal = 'nl') => {
  if (!bron) return '';
  const compleet = bron.rijen.filter((rij) => rij.every((c) => zonderTags(cel(c, pagina, (_, inhoud) => inhoud, taal))));
  if (compleet.length < 2) return '';
  const rijen = compleet.map((rij) => rij.map((c) => cel(c, pagina, link, taal)));
  bron.kolommen.forEach((kolom, i) => {
    if (new Set(rijen.map((rij) => zonderTags(rij[i]))).size === 1)
      throw new Error(`RAG-blok ${pagina}: kolom "${kolom}" heeft in elke rij dezelfde waarde`);
  });
  const kop = bron.kolommen.map((k) => `<th scope="col">${tekst(k, pagina, undefined, taal)}</th>`).join('');
  const lijf = rijen
    .map((rij) => `<tr><th scope="row">${rij[0]}</th>${rij.slice(1).map((c) => `<td>${c}</td>`).join('')}</tr>`)
    .join('\n');
  return `<div class="rag-blok__tabel">
<table>
<caption>${tekst(bron.bijschrift, pagina, undefined, taal)}</caption>
<thead><tr>${kop}</tr></thead>
<tbody>
${lijf}
</tbody>
</table>
</div>`;
};

// Rendert het blok in twee delen.
// Met een eigen vraagkop is het één geheel: { antwoord: het hele blok, vervolg: '' }.
// Onder een bestaande kop is het gesplitst: de antwoordalinea (en tabel) komt direct onder die kop, de
// vervolgvragen en de bronregel komen aan het eind van die sectie. Zo staat bestaande tekst nooit onder een h3 van het blok.
export function renderRagDelen(blok) {
  // Zonder vraagkop, antwoordalinea en bron rendert het blok niets.
  if (!blok?.vraagkop || !blok.antwoord || !blok.bron?.tekst) return { antwoord: '', vervolg: '' };
  const { pagina, taal = 'nl' } = blok;
  // In de antwoordalinea staat de bandbreedte, niet de opsomming per niveau.
  if (/\{\{niveaus:/.test(blok.antwoord)) throw new Error(`RAG-blok ${pagina}: {{niveaus:...}} hoort niet in de antwoordalinea`);
  const [jaar, maand] = blok.bijgewerkt.split('-');
  const link = maakLinker(pagina);
  // Eerst de tabel, zodat een doel dat in een tabelrij staat daar zijn ene link krijgt.
  const tabelHtml = tabel(blok.tabel, pagina, link, taal);
  const antwoord = `<p class="rag-blok__antwoord">${tekst(blok.antwoord, pagina, link, taal)}</p>`;
  const vervolg = blok.vervolgvragen.map((v) => `<h3>${tekst(v.vraag, pagina, undefined, taal)}</h3>\n<p>${tekst(v.antwoord, pagina, link, taal)}</p>`);
  const bron = blok.bron.href ? link(blok.bron.href, tekst(blok.bron.tekst, pagina, undefined, taal)) : tekst(blok.bron.tekst, pagina, link, taal);
  const maandNaam = taal === 'en' ? MONTHS_EN[Number(maand) - 1] : MAANDEN[Number(maand) - 1];
  const bronregel = taal === 'en'
    ? `<p class="rag-blok__bron">Source: ${bron}. Updated: <time datetime="${jaar}-${maand}">${maandNaam} ${jaar}</time>.</p>`
    : `<p class="rag-blok__bron">Bron: ${bron}. Bijgewerkt: <time datetime="${jaar}-${maand}">${maandNaam} ${jaar}</time>.</p>`;
  const sectie = (klasse, delen) => [`<section class="${klasse}">`, ...delen.filter(Boolean), '</section>'].join('\n');
  if (blok.onderBestaandeKop)
    return {
      antwoord: sectie('rag-blok rag-blok--antwoord', [antwoord, tabelHtml]),
      vervolg: sectie('rag-blok rag-blok--vervolg', [...vervolg, bronregel]),
    };
  return { antwoord: sectie('rag-blok', [`<h2>${tekst(blok.vraagkop, pagina)}</h2>`, antwoord, tabelHtml, ...vervolg, bronregel]), vervolg: '' };
}

// De vragen van het blok met hun antwoord als platte tekst: de vraagkop met de antwoordalinea, daarna elke
// vervolgvraag. Zelfde bron en zelfde tokens als de zichtbare HTML, zodat structured data en pagina gelijk blijven.
const platteTekst = (ruw, pagina, taal) =>
  tekst(ruw, pagina, undefined, taal).replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
export function ragVragen(blok) {
  if (!renderRagDelen(blok).antwoord) return [];
  return [{ vraag: blok.vraagkop, antwoord: blok.antwoord }, ...blok.vervolgvragen].map((v) => ({
    vraag: platteTekst(v.vraag, blok.pagina, blok.taal),
    antwoord: platteTekst(v.antwoord, blok.pagina, blok.taal),
  }));
}

// Zet de vragen van het blok als FAQPage in de structured data van de pagina, als het blok markup: true heeft.
// Bestaande knopen en bestaande FAQ-items blijven gelijk en in dezelfde volgorde; de vragen van het blok komen erachter.
// Een pagina met één los object krijgt een lijst van twee: het bestaande object, ongewijzigd, en de FAQPage.
export function metRagVragen(schema, blok) {
  if (!blok?.markup) return schema;
  const vragen = ragVragen(blok).map(({ vraag, antwoord }) => ({ '@type': 'Question', name: vraag, acceptedAnswer: { '@type': 'Answer', text: antwoord } }));
  if (!vragen.length) return schema;
  const graph = schema['@graph'];
  if (!Array.isArray(graph)) return [schema, { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: vragen }];
  const faq = graph.find((knoop) => knoop['@type'] === 'FAQPage');
  return {
    ...schema,
    '@graph': faq
      ? graph.map((knoop) => (knoop === faq ? { ...faq, mainEntity: [...faq.mainEntity, ...vragen] } : knoop))
      : [...graph, { '@type': 'FAQPage', mainEntity: vragen }],
  };
}

export const renderRagBlok = (blok) => {
  const { antwoord, vervolg } = renderRagDelen(blok);
  return [antwoord, vervolg].filter(Boolean).join('\n');
};
