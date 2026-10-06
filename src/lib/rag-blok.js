// Rendert één RAG-blok als HTML-string, volledig server-side en zonder JavaScript in de pagina.
// Gebruikt door src/components/RagBlok.astro (Astro-templates) en src/lib/remark-rag-blok.js (Markdown-pagina's),
// zodat er één implementatie van het blok is.
import { services } from '../data/services.js';
import { site } from '../data/site.js';
import { prijsTekst, duurTekst, niveausTekst, voorwaarden } from './rag-prijzen.js';

// De afzender. Eén plek, zodat de naam overal gelijk is.
export const afzender = site.name;

const MAANDEN = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'];
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const zonderTags = (html) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const dienst = (slug) => {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`RAG-blok: onbekende dienst "${slug}"`);
  return service;
};
const dienstUrl = (slug) => `/diensten/${slug}`;

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
const tekst = (ruw, pagina, link) => {
  const html = esc(ruw)
    .replace(/\{\{(\w+)(?::([a-z0-9-]+))?\}\}/g, (token, veld, slug) => {
      if (veld === 'afzender' && !slug) return esc(afzender);
      if (veld === 'voorwaarden' && !slug) return esc(voorwaarden);
      if (!slug) throw new Error(`RAG-blok ${pagina}: onbekend token ${token}`);
      if (veld === 'dienst') return link ? link(dienstUrl(slug), esc(dienst(slug).title)) : esc(dienst(slug).title);
      if (veld === 'title') return esc(dienst(slug).title);
      if (veld === 'timing') return esc(duurTekst(dienst(slug).slug));
      if (veld === 'niveaus' && niveausTekst(dienst(slug).slug)) return esc(niveausTekst(dienst(slug).slug));
      if (veld === 'price') return esc(prijsTekst(dienst(slug).slug));
      if (veld === 'pricelc') return esc(prijsTekst(dienst(slug).slug).replace(/^\p{Lu}/u, (c) => c.toLowerCase()));
      throw new Error(`RAG-blok ${pagina}: onbekend token ${token}`);
    })
    .replace(/\[([^\]]+)\]\(((?:\/|https?:\/\/)[^)\s]*)\)/g, (_, anker, href) => (link ? link(href, anker) : anker));
  if (/\{\{|\}\}/.test(html)) throw new Error(`RAG-blok ${pagina}: onvervangen token in "${ruw}"`);
  return html;
};

const cel = (waarde, pagina, link) => {
  if (typeof waarde === 'string') return tekst(waarde, pagina, link);
  if ('href' in waarde) return link(waarde.href, tekst(waarde.tekst, pagina));
  if (waarde.veld === 'naam') return link(dienstUrl(waarde.dienst), esc(dienst(waarde.dienst).title));
  if (waarde.veld === 'niveaus') return esc(niveausTekst(dienst(waarde.dienst).slug) ?? prijsTekst(dienst(waarde.dienst).slug));
  return esc(waarde.veld === 'prijs' ? prijsTekst(dienst(waarde.dienst).slug) : duurTekst(dienst(waarde.dienst).slug));
};

// Geen tabel bij minder dan twee complete rijen. Een kolom met in elke rij dezelfde waarde is een fout.
const tabel = (bron, pagina, link) => {
  if (!bron) return '';
  const compleet = bron.rijen.filter((rij) => rij.every((c) => zonderTags(cel(c, pagina, (_, inhoud) => inhoud))));
  if (compleet.length < 2) return '';
  const rijen = compleet.map((rij) => rij.map((c) => cel(c, pagina, link)));
  bron.kolommen.forEach((kolom, i) => {
    if (new Set(rijen.map((rij) => zonderTags(rij[i]))).size === 1)
      throw new Error(`RAG-blok ${pagina}: kolom "${kolom}" heeft in elke rij dezelfde waarde`);
  });
  const kop = bron.kolommen.map((k) => `<th scope="col">${tekst(k, pagina)}</th>`).join('');
  const lijf = rijen
    .map((rij) => `<tr><th scope="row">${rij[0]}</th>${rij.slice(1).map((c) => `<td>${c}</td>`).join('')}</tr>`)
    .join('\n');
  return `<div class="rag-blok__tabel">
<table>
<caption>${tekst(bron.bijschrift, pagina)}</caption>
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
  const { pagina } = blok;
  // In de antwoordalinea staat de bandbreedte, niet de opsomming per niveau.
  if (/\{\{niveaus:/.test(blok.antwoord)) throw new Error(`RAG-blok ${pagina}: {{niveaus:...}} hoort niet in de antwoordalinea`);
  const [jaar, maand] = blok.bijgewerkt.split('-');
  const link = maakLinker(pagina);
  // Eerst de tabel, zodat een doel dat in een tabelrij staat daar zijn ene link krijgt.
  const tabelHtml = tabel(blok.tabel, pagina, link);
  const antwoord = `<p class="rag-blok__antwoord">${tekst(blok.antwoord, pagina, link)}</p>`;
  const vervolg = blok.vervolgvragen.map((v) => `<h3>${tekst(v.vraag, pagina)}</h3>\n<p>${tekst(v.antwoord, pagina, link)}</p>`);
  const bron = blok.bron.href ? link(blok.bron.href, tekst(blok.bron.tekst, pagina)) : tekst(blok.bron.tekst, pagina, link);
  const bronregel = `<p class="rag-blok__bron">Bron: ${bron}. Bijgewerkt: <time datetime="${jaar}-${maand}">${MAANDEN[Number(maand) - 1]} ${jaar}</time>.</p>`;
  const sectie = (klasse, delen) => [`<section class="${klasse}">`, ...delen.filter(Boolean), '</section>'].join('\n');
  if (blok.onderBestaandeKop)
    return {
      antwoord: sectie('rag-blok rag-blok--antwoord', [antwoord, tabelHtml]),
      vervolg: sectie('rag-blok rag-blok--vervolg', [...vervolg, bronregel]),
    };
  return { antwoord: sectie('rag-blok', [`<h2>${tekst(blok.vraagkop, pagina)}</h2>`, antwoord, tabelHtml, ...vervolg, bronregel]), vervolg: '' };
}

export const renderRagBlok = (blok) => {
  const { antwoord, vervolg } = renderRagDelen(blok);
  return [antwoord, vervolg].filter(Boolean).join('\n');
};
