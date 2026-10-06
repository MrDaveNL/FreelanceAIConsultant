// Rendert één RAG-blok als HTML-string, volledig server-side en zonder JavaScript in de pagina.
// Gebruikt door src/components/RagBlok.astro (Astro-templates) en src/lib/remark-rag-blok.js (Markdown-pagina's),
// zodat er één implementatie van het blok is.
import { services } from '../data/services.js';
import { site } from '../data/site.js';

// De afzender die elke alinea voluit noemt. Eén plek, zodat de naam overal gelijk is.
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
// Een dienst met eigen URL is altijd gelinkt, behalve op de eigen pagina (geen link naar zichzelf).
const dienstNaam = (slug, pagina, links) => {
  const naam = esc(dienst(slug).title);
  return links && dienstUrl(slug) !== pagina ? `<a href="${dienstUrl(slug)}">${naam}</a>` : naam;
};

// Tekst met tokens en links. Prijs en doorlooptijd komen via tokens uit prijzen.ts en worden nooit overgetypt:
//   {{price:slug}} {{pricelc:slug}} {{timing:slug}} {{title:slug}}  zoals in de Markdown-pagina's
//   {{dienst:slug}}  naam van de dienst, gelinkt naar de dienstpagina
//   {{afzender}}     naam van de afzender
//   [ankertekst](/pad)  interne of externe link
const tekst = (ruw, pagina, links = true) => {
  const html = esc(ruw)
    .replace(/\{\{(\w+)(?::([a-z0-9-]+))?\}\}/g, (token, veld, slug) => {
      if (veld === 'afzender' && !slug) return esc(afzender);
      if (!slug) throw new Error(`RAG-blok ${pagina}: onbekend token ${token}`);
      if (veld === 'dienst') return dienstNaam(slug, pagina, links);
      if (veld === 'title') return esc(dienst(slug).title);
      if (veld === 'timing') return esc(dienst(slug).timing);
      if (veld === 'price') return esc(dienst(slug).price);
      if (veld === 'pricelc') return esc(dienst(slug).price.charAt(0).toLowerCase() + dienst(slug).price.slice(1));
      throw new Error(`RAG-blok ${pagina}: onbekend token ${token}`);
    })
    .replace(/\[([^\]]+)\]\(((?:\/|https?:\/\/)[^)\s]*)\)/g, (_, anker, href) => (links ? `<a href="${href}">${anker}</a>` : anker));
  if (/\{\{|\}\}/.test(html)) throw new Error(`RAG-blok ${pagina}: onvervangen token in "${ruw}"`);
  return html;
};

const cel = (waarde, pagina) => {
  if (typeof waarde === 'string') return tekst(waarde, pagina);
  if ('href' in waarde) return `<a href="${esc(waarde.href)}">${tekst(waarde.tekst, pagina, false)}</a>`;
  if (waarde.veld === 'naam') return dienstNaam(waarde.dienst, pagina, true);
  return esc(waarde.veld === 'prijs' ? dienst(waarde.dienst).price : dienst(waarde.dienst).timing);
};

// Geen tabel bij minder dan twee complete rijen. Een kolom met in elke rij dezelfde waarde is een fout.
const tabel = (bron, pagina) => {
  if (!bron) return '';
  const rijen = bron.rijen.map((rij) => rij.map((c) => cel(c, pagina))).filter((rij) => rij.every((c) => zonderTags(c)));
  if (rijen.length < 2) return '';
  bron.kolommen.forEach((kolom, i) => {
    if (new Set(rijen.map((rij) => zonderTags(rij[i]))).size === 1)
      throw new Error(`RAG-blok ${pagina}: kolom "${kolom}" heeft in elke rij dezelfde waarde`);
  });
  const kop = bron.kolommen.map((k) => `<th scope="col">${tekst(k, pagina, false)}</th>`).join('');
  const lijf = rijen
    .map((rij) => `<tr><th scope="row">${rij[0]}</th>${rij.slice(1).map((c) => `<td>${c}</td>`).join('')}</tr>`)
    .join('\n');
  return `<div class="rag-blok__tabel">
<table>
<caption>${tekst(bron.bijschrift, pagina, false)}</caption>
<thead><tr>${kop}</tr></thead>
<tbody>
${lijf}
</tbody>
</table>
</div>`;
};

export function renderRagBlok(blok) {
  // Zonder vraagkop, antwoordalinea en bron rendert het blok niets.
  if (!blok?.vraagkop || !blok.antwoord || !blok.bron?.tekst) return '';
  const { pagina } = blok;
  const [jaar, maand] = blok.bijgewerkt.split('-');
  const bron = blok.bron.href ? `<a href="${esc(blok.bron.href)}">${tekst(blok.bron.tekst, pagina, false)}</a>` : tekst(blok.bron.tekst, pagina);
  return [
    '<section class="rag-blok">',
    // Onder een bestaande kop met dezelfde vraag komt geen tweede kop.
    blok.onderBestaandeKop ? '' : `<h2>${tekst(blok.vraagkop, pagina, false)}</h2>`,
    `<p class="rag-blok__antwoord">${tekst(blok.antwoord, pagina)}</p>`,
    tabel(blok.tabel, pagina),
    ...blok.vervolgvragen.map((v) => `<h3>${tekst(v.vraag, pagina, false)}</h3>\n<p>${tekst(v.antwoord, pagina)}</p>`),
    `<p class="rag-blok__bron">Bron: ${bron}. Bijgewerkt: <time datetime="${jaar}-${maand}">${MAANDEN[Number(maand) - 1]} ${jaar}</time>.</p>`,
    '</section>',
  ]
    .filter(Boolean)
    .join('\n');
}
