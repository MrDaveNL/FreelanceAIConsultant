// Centrale route-kaart: één bron van waarheid voor elke pagina in beide talen.
// Drijft de taalwisselaar, hreflang, de sitemaps en interne linkresolutie.
// 'paths' bevat altijd het voorgestelde pad voor beide talen (zie Fase 0-rapport),
// 'live' zegt of die taalversie nu echt gebouwd wordt. Fase 1: alleen nl is live,
// behalve /404 (infrastructuur, geen content, dus in elke taal al aanwezig).

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import type { Locale } from '../i18n/locales';
import { assertKennisbankUrl, assertUniqueKennisbankIds } from '../../scripts/kennisbank-routes.mjs';
import { isValidHref as _isValidHref } from '../../scripts/href-validation.mjs';
import { site } from './site.js';
export type { Locale };

export type RouteKind = 'static' | 'content' | 'service' | 'case' | 'article';

export interface RouteEntry {
  id: string;
  kind: RouteKind;
  cluster?: string;
  paths: Record<Locale, string>;
  live: Record<Locale, boolean>;
  // NL-pagina's die wel gebouwd zijn maar 'noindex, follow' (wacht op publicatie).
  noindex?: boolean;
  // Geen EN-tegenhanger gepland (bv. NL-specifieke data, of inhoud samengevoegd op een andere
  // EN-pagina). 'paths.en' blijft staan als documentatie van het oorspronkelijke voorstel, maar
  // 'live.en' mag hiervoor nooit true worden.
  noEn?: boolean;
}

const r = (
  id: string,
  kind: RouteKind,
  nl: string,
  en: string,
  opts: { cluster?: string; liveEn?: boolean; noindex?: boolean; noEn?: boolean } = {}
): RouteEntry => ({
  id,
  kind,
  cluster: opts.cluster,
  paths: { nl: `/nl${nl}`, en },
  live: { nl: true, en: Boolean(opts.liveEn) },
  noindex: opts.noindex,
  noEn: opts.noEn,
});

// Leest de 'id', 'url' en 'noindex' uit de front matter van een kennisbank-bestand, zonder een
// YAML-parser: het zijn altijd losse scalaire regels (geen lijsten/objecten), dus een regex per
// veld is genoeg en voorkomt een extra productie-afhankelijkheid voor dit ene doel.
function frontmatterField(raw: string, key: string): string | undefined {
  const match = raw.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'));
  if (!match) return undefined;
  return match[1].trim().replace(/^["']|["']$/g, '');
}

interface KennisbankPage {
  id: string;
  url: string;
  noindex: boolean;
  lang: Locale;
  file: string;
}

// Relatief t.o.v. de huidige working directory (zoals 'src/content/pages' elders in dit project,
// bijv. src/lib/sitemap.ts en scripts/generate-content-collections.mjs): Astro's build en dev
// server draaien altijd vanuit de projectroot. 'import.meta.url' is hier geen optie: na bundelen
// door Vite wijst dat naar de locatie van het gebundelde bestand in dist/, niet naar src/.
const PAGES_ROOT = 'src/content/pages';
const ARTICLES_ROOT = 'src/content/articles';

function kennisbankPages(lang: Locale): KennisbankPage[] {
  const dir = join(PAGES_ROOT, lang, 'kennisbank');
  if (!existsSync(dir)) return [];
  const out: KennisbankPage[] = [];
  // 'segments' is het pad van submappen tussen de taal-kennisbankmap en index.md, bijv.
  // ['ai-voorbeelden']. Leeg voor de hub-pagina (index.md direct in kennisbank/).
  const walk = (current: string, segments: string[]) => {
    for (const entry of readdirSync(current, { withFileTypes: true })) {
      const full = join(current, entry.name);
      if (entry.isDirectory()) walk(full, [...segments, entry.name]);
      else if (entry.name === 'index.md') {
        const raw = readFileSync(full, 'utf8');
        const id = frontmatterField(raw, 'id');
        const url = frontmatterField(raw, 'url');
        if (!id || !url) throw new Error(`Kennisbankpagina zonder geldige 'id' of 'url' in front matter: ${full}`);
        const folderName = segments.join('/');
        // Voorkomt dat een url wordt opgeslagen die niet bij de map past (bijv. map
        // 'ai-specialisten' met url '/nl/kennisbank/test'): laat de build hard falen.
        assertKennisbankUrl({ lang, folderName, url, id, file: full });
        out.push({ id, url, noindex: frontmatterField(raw, 'noindex') === 'true', lang, file: full });
      }
    }
  };
  walk(dir, []);
  // Voorkomt een dubbel id binnen dezelfde taal (hetzelfde id in NL én EN is juist bedoeld:
  // zo worden de taalversies van een pagina gekoppeld, zie buildKennisbankRoutes()).
  assertUniqueKennisbankIds(out);
  return out;
}

// Vervangt de vroegere handmatige routes.ts-regels voor de kennisbank: de CMS-collecties
// kennisbank_en/kennisbank_nl staan sinds fase 3 open voor create/delete, dus een nieuwe of
// verwijderde pagina mag nooit wachten op een los bij te werken regel hier. 'id' koppelt de
// EN- en NL-versie (net als bij de handmatige routes), 'live' volgt simpelweg uit welke
// taalversie van dat id daadwerkelijk bestaat als bestand.
//
// Bekende beperking: 'noindex' is, net als bij de handmatige routes, één vlag per id, niet per
// taal. Heeft maar één taalversie noindex: true, dan geldt dat hier voor de hele route-entry
// (dus ook voor de andere, wel-indexeerbare taalversie). Komt in de praktijk nu niet voor.
function buildKennisbankRoutes(): RouteEntry[] {
  const byId = new Map<string, { nl?: KennisbankPage; en?: KennisbankPage }>();
  for (const page of kennisbankPages('nl')) byId.set(page.id, { ...byId.get(page.id), nl: page });
  for (const page of kennisbankPages('en')) byId.set(page.id, { ...byId.get(page.id), en: page });
  return Array.from(byId.entries()).map(([id, { nl, en }]) => ({
    id,
    kind: 'content' as RouteKind,
    cluster: 'kennisbank',
    // Een taal zonder bestand krijgt een leeg pad: 'live' voor die taal is dan altijd false, en
    // routeByPath()/sitemapRoutes() lezen 'paths[loc]' nooit wanneer 'live[loc]' false is.
    paths: { nl: nl?.url ?? '', en: en?.url ?? '' },
    live: { nl: Boolean(nl), en: Boolean(en) },
    noindex: Boolean(nl?.noindex || en?.noindex),
  }));
}

interface ArticleFile {
  slug: string;
  counterpart?: string;
}

// Leest 'slug' en 'counterpart' uit de front matter van elk artikel in één taal (zelfde
// lichtgewicht regex-aanpak als frontmatterField() hierboven, geen YAML-parser nodig voor deze
// twee scalaire velden). 'id' is bewust NIET de koppeling tussen talen (zie content.config.ts):
// dat is altijd '<lang>-<eigen-slug>', de opslagsleutel van de 'articles'-collectie.
function articleFiles(lang: Locale): ArticleFile[] {
  const dir = join(ARTICLES_ROOT, lang);
  if (!existsSync(dir)) return [];
  const out: ArticleFile[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const file = join(dir, entry.name, 'index.md');
    if (!existsSync(file)) continue;
    const raw = readFileSync(file, 'utf8');
    const slug = frontmatterField(raw, 'slug') ?? entry.name;
    const counterpart = frontmatterField(raw, 'counterpart');
    out.push({ slug, counterpart });
  }
  return out;
}

// Vervangt de vroegere handmatige routes.ts-regels voor de inzichtenartikelen: zonder dit leidde
// een artikel dat buiten deze lijst om werd toegevoegd (bijv. via de dinsdagroutine, zie
// docs/cms.md) tot een pagina die wel gebouwd werd (src/pages/nl/inzichten/[slug].astro en
// src/pages/insights/[slug].astro bouwen gewoon elk bestand in de collectie) maar stil uit de
// sitemap/hreflang/taalwisselaar bleef, omdat er geen regel voor was. 'counterpart' (optioneel
// front-matter-veld, content.config.ts) koppelt een NL-artikel aan zijn EN-vertaling; ontbreekt
// die vertaling nog (zoals bij een net gepubliceerd NL-artikel), dan is de route gewoon nl-only.
function buildArticleRoutes(): RouteEntry[] {
  const nl = articleFiles('nl');
  const en = articleFiles('en');
  const enBySlug = new Map(en.map((a) => [a.slug, a]));
  const linkedEnSlugs = new Set<string>();
  const entries: RouteEntry[] = nl.map((a) => {
    let enSlug: string | undefined;
    if (a.counterpart) {
      if (!enBySlug.has(a.counterpart)) {
        throw new Error(
          `Inzichtenartikel src/content/articles/nl/${a.slug}/index.md: counterpart ` +
            `'${a.counterpart}' bestaat niet in src/content/articles/en.`
        );
      }
      enSlug = a.counterpart;
      linkedEnSlugs.add(enSlug);
    }
    return {
      id: `art-${a.slug}`,
      kind: 'article' as RouteKind,
      cluster: 'inzichten',
      paths: { nl: `/nl/inzichten/${a.slug}`, en: enSlug ? `/insights/${enSlug}` : '' },
      live: { nl: true, en: Boolean(enSlug) },
    };
  });
  // EN-artikelen zonder NL-tegenhanger (komt nu niet voor, maar zou anders stilletjes ontbreken).
  for (const a of en) {
    if (linkedEnSlugs.has(a.slug)) continue;
    entries.push({
      id: `art-en-${a.slug}`,
      kind: 'article' as RouteKind,
      cluster: 'inzichten',
      paths: { nl: '', en: `/insights/${a.slug}` },
      live: { nl: false, en: true },
    });
  }
  return entries;
}

export const routes: RouteEntry[] = [
  // Statische kernpagina's
  r('home', 'static', '', '/', { liveEn: true }),
  r('diensten', 'static', '/diensten', '/services', { liveEn: true }),
  r('cases', 'static', '/cases', '/cases', { liveEn: true }),
  r('werkwijze', 'static', '/werkwijze', '/approach', { liveEn: true }),
  r('inzichten', 'static', '/inzichten', '/insights', { liveEn: true }),
  r('over', 'static', '/over', '/about', { liveEn: true }),
  r('contact', 'static', '/contact', '/contact', { liveEn: true }),
  r('veelgestelde-vragen', 'static', '/veelgestelde-vragen', '/faq', { liveEn: true }),
  r('privacy', 'static', '/privacy', '/privacy', { liveEn: true }),
  r('algemene-voorwaarden', 'static', '/algemene-voorwaarden', '/terms', { liveEn: true }),
  // 404 is infrastructuur, geen content: bestaat in elke taal vanaf fase 1.
  r('404', 'static', '/404', '/404', { liveEn: true }),

  // Diensten (leaf-slug blijft gelijk, alleen het segment 'diensten' -> 'services')
  r('svc-ai-readiness-assessment', 'service', '/diensten/ai-readiness-assessment', '/services/ai-readiness-assessment', { liveEn: true }),
  r('svc-ai-strategy-sprint', 'service', '/diensten/ai-strategy-sprint', '/services/ai-strategy-sprint', { liveEn: true }),
  r('svc-fractional-ai-lead', 'service', '/diensten/fractional-ai-lead', '/services/fractional-ai-lead', { liveEn: true }),
  r('svc-vendor-review', 'service', '/diensten/vendor-review', '/services/vendor-review', { liveEn: true }),
  r('svc-executive-briefing', 'service', '/diensten/executive-briefing', '/services/executive-briefing', { liveEn: true }),
  r('svc-ai-due-diligence', 'service', '/diensten/ai-due-diligence', '/services/ai-due-diligence', { liveEn: true }),

  // Cases
  r('case-ai-strategie-investeringsmaatschappij', 'case', '/cases/ai-strategie-investeringsmaatschappij', '/cases/ai-strategy-investment-firm', { liveEn: true }),
  r('case-vendorselectie-enterprise-retail', 'case', '/cases/vendorselectie-enterprise-retail', '/cases/vendor-selection-enterprise-retail', { liveEn: true }),
  r('case-ai-roadmap-internationale-maakorganisatie', 'case', '/cases/ai-roadmap-internationale-maakorganisatie', '/cases/ai-roadmap-global-manufacturer', { liveEn: true }),
  r('case-kyc-documentanalyse-financial-services', 'case', '/cases/kyc-documentanalyse-financial-services', '/cases/kyc-document-analysis-financial-services', { liveEn: true }),
  r('case-ai-readiness-scale-up', 'case', '/cases/ai-readiness-scale-up', '/cases/ai-readiness-scale-up', { liveEn: true }),
  r('case-interne-ai-assistent-kenniswerkers', 'case', '/cases/interne-ai-assistent-kenniswerkers', '/cases/internal-ai-assistant-knowledge-workers', { liveEn: true }),

  // Inzichten / insights (artikelen): routes NIET hier als handmatige lijst, zie
  // buildArticleRoutes() hierboven (zelfde patroon als buildKennisbankRoutes() voor de
  // kennisbank verderop in dit bestand).

  // Content-collectie 'pages': 12 clusters, 55 pagina's
  r('C1-00', 'content', '/ai-consultancy', '/ai-consulting', { cluster: 'ai-consultancy', liveEn: true }),
  // Geen EN-tegenhanger: "ai advice" leest in het Engels als advies ván een AI, verkeerde intentie.
  r('C1-05', 'content', '/ai-consultancy/ai-advies', '/ai-consulting/ai-advice', { cluster: 'ai-consultancy', noEn: true }),
  // Geen eigen EN-pagina: inhoud wordt een sectie op C1-00 (/ai-consulting), secundair keyword "hire an ai consultant".
  r('C1-06', 'content', '/ai-consultancy/ai-consultant-inhuren', '/ai-consulting/hire-an-ai-consultant', { cluster: 'ai-consultancy', noEn: true }),
  // Geen EN-tegenhanger: "ai roadmap" betekent in het Engels een carrièrepad, niet dit onderwerp.
  // Inhoud wordt samengevoegd op C1-03 (/ai-consulting/ai-strategy) in plaats van een eigen EN-pagina.
  r('C1-04', 'content', '/ai-consultancy/ai-roadmap', '/ai-consulting/ai-roadmap', { cluster: 'ai-consultancy', noEn: true }),
  r('C1-03', 'content', '/ai-consultancy/ai-strategie', '/ai-consulting/ai-strategy', { cluster: 'ai-consultancy', liveEn: true }),

  r('C2-00', 'content', '/ai-implementatie', '/ai-implementation', { cluster: 'ai-implementatie', liveEn: true }),
  r('C2-01', 'content', '/ai-implementatie/advies', '/ai-implementation/consulting', { cluster: 'ai-implementatie', liveEn: true }),
  r('C2-03', 'content', '/ai-implementatie/stappenplan', '/ai-implementation/step-by-step-plan', { cluster: 'ai-implementatie', liveEn: true }),

  r('C3-00', 'content', '/ai-automatisering', '/ai-automation', { cluster: 'ai-automatisering', liveEn: true }),
  r('C3-05', 'content', '/ai-automatisering/ai-tools', '/ai-automation/ai-tools', { cluster: 'ai-automatisering', liveEn: true }),
  r('C3-04', 'content', '/ai-automatisering/ai-workflows', '/ai-automation/ai-workflows', { cluster: 'ai-automatisering', liveEn: true }),
  r('C3-03', 'content', '/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai', '/ai-automation/automate-business-processes-with-ai', { cluster: 'ai-automatisering', liveEn: true }),

  r('C4-00', 'content', '/ai-voor-bedrijven', '/ai-for-business', { cluster: 'ai-voor-bedrijven', liveEn: true }),
  r('C4-03', 'content', '/ai-voor-bedrijven/ai-en-bi', '/ai-for-business/ai-and-bi', { cluster: 'ai-voor-bedrijven', liveEn: true }),
  r('C4-01', 'content', '/ai-voor-bedrijven/mkb', '/ai-for-business/sme', { cluster: 'ai-voor-bedrijven', liveEn: true }),
  r('C4-02', 'content', '/ai-voor-bedrijven/zakelijke-dienstverleners', '/ai-for-business/professional-services-firms', { cluster: 'ai-voor-bedrijven', liveEn: true }),

  r('C5-00', 'content', '/ai-development', '/ai-development', { cluster: 'ai-development', liveEn: true }),
  r('C5-01', 'content', '/ai-development/ai-specialist', '/ai-development/ai-specialist', { cluster: 'ai-development', liveEn: true }),
  r('C5-02', 'content', '/ai-development/ai-software', '/ai-development/ai-software', { cluster: 'ai-development', liveEn: true }),
  r('C5-03', 'content', '/ai-development/ai-oplossingen', '/ai-development/ai-solutions', { cluster: 'ai-development', liveEn: true }),

  r('C6-00', 'content', '/ai-agents', '/ai-agents', { cluster: 'ai-agents', liveEn: true }),
  r('C6-03', 'content', '/ai-agents/laten-maken', '/ai-agents/build', { cluster: 'ai-agents', liveEn: true }),
  r('C6-04', 'content', '/ai-agents/voorbeelden', '/ai-agents/examples', { cluster: 'ai-agents', liveEn: true }),
  r('C6-01', 'content', '/ai-agents/wat-is-een-ai-agent', '/ai-agents/what-is-an-ai-agent', { cluster: 'ai-agents', liveEn: true }),

  r('C8-00', 'content', '/ai-beleid', '/ai-policy', { cluster: 'ai-beleid', liveEn: true }),
  r('C8-01', 'content', '/ai-beleid/ai-act', '/ai-policy/ai-act', { cluster: 'ai-beleid', liveEn: true }),

  r('C9-00', 'content', '/ai-workshop', '/ai-workshop', { cluster: 'ai-workshop', liveEn: true }),
  // Geen EN-tegenhanger gepland voor deze batch.
  r('C9-04', 'content', '/ai-workshop/ai-coaching', '/ai-workshop/ai-coaching', { cluster: 'ai-workshop', noEn: true }),
  r('C9-05', 'content', '/ai-workshop/ai-geletterdheid-training', '/ai-workshop/ai-literacy-training', { cluster: 'ai-workshop', liveEn: true }),
  r('C9-03', 'content', '/ai-workshop/chatgpt-training', '/ai-workshop/chatgpt-training', { cluster: 'ai-workshop', liveEn: true }),
  r('C9-02', 'content', '/ai-workshop/copilot-training', '/ai-workshop/copilot-training', { cluster: 'ai-workshop', liveEn: true }),

  // De kennisbank staat hier NIET als handmatige lijst: zie buildKennisbankRoutes() onderaan dit
  // bestand. Sinds CMS-fase 3 staan create/delete aan voor de kennisbank-collecties, dus een
  // nieuwe of verwijderde kennisbankpagina mag nooit op een vergeten routes.ts-regel wachten.

  r('C7-00', 'content', '/markten', '/markets', { cluster: 'markten', liveEn: true }),
  r('C7-04', 'content', '/markten/automotive', '/markets/automotive', { cluster: 'markten', liveEn: true }),
  r('C7-03', 'content', '/markten/fintech', '/markets/fintech', { cluster: 'markten', liveEn: true }),
  r('C7-06', 'content', '/markten/luchtvaart', '/markets/aviation', { cluster: 'markten', noindex: true }),
  r('C7-02', 'content', '/markten/marketing', '/markets/marketing', { cluster: 'markten', noindex: true }),
  r('C7-05', 'content', '/markten/onderwijs', '/markets/education', { cluster: 'markten', noindex: true }),
  r('C7-07', 'content', '/markten/overheid', '/markets/government', { cluster: 'markten', noindex: true }),
  r('C7-01', 'content', '/markten/zorg', '/markets/healthcare', { cluster: 'markten', noindex: true }),

  r('P06', 'content', '/partnernetwerk', '/partner-network', { cluster: 'partnernetwerk', liveEn: true }),
  r('P04', 'content', '/tarieven', '/pricing', { cluster: 'tarieven', liveEn: true }),

  ...buildKennisbankRoutes(),
  ...buildArticleRoutes(),
];

// Voor content.config.ts: een CTA-href (primaryCta/secondaryCta) moet een bestaande, live route
// zijn (in elke taal) of een volledige https-URL. Voorkomt een getypte tikfout in Sveltia of
// Claude Code die anders stil een dode link zou opleveren. 'mailto:<site-email>' blijft een
// uitzondering voor oudere EN-kennisbankpagina's die dit schreven vóórdat /contact in het
// Engels live was (zie resolveContactHref in service-tokens.js).
export function isValidHref(href: string): boolean {
  return _isValidHref(href, routes, site.email);
}

export function routeById(id: string): RouteEntry | undefined {
  return routes.find((entry) => entry.id === id);
}

// Vindt een route op basis van een huidig (gebouwd) pad in een specifieke taal.
export function routeByPath(path: string, loc: Locale): RouteEntry | undefined {
  const clean = path.replace(/\/$/, '') || (loc === 'nl' ? '/nl' : '/');
  return routes.find((entry) => entry.paths[loc].replace(/\/$/, '') === clean || entry.paths[loc] === path);
}

// De tegenhanger van een pad in de andere taal, of null als die taalversie niet live is.
export function counterpart(path: string, fromLocale: Locale, toLocale: Locale): string | null {
  const entry = routeByPath(path, fromLocale);
  if (!entry || !entry.live[toLocale]) return null;
  return entry.paths[toLocale];
}

export function isLive(entry: RouteEntry, loc: Locale): boolean {
  return entry.live[loc];
}

// NL leeft onder /nl; EN (standaard, prefixDefaultLocale: false) leeft op root.
export function localeFromPath(path: string): Locale {
  return path === '/nl' || path.startsWith('/nl/') ? 'nl' : 'en';
}

// Mapping van het OUDE, ongeprefixte NL-pad (zoals het er vóór de i18n-migratie
// uitzag) naar het NIEUWE /nl-pad. Gebruikt om interne links in bestaande NL-content
// en RAG-blokken te herschrijven: alleen de href verandert, nooit de ankertekst.
// 'paths.nl' is alleen leeg voor een kennisbankpagina die (nog) geen NL-bestand heeft; zo'n
// entry heeft geen oud pad om te herschrijven en moet hier overgeslagen worden, anders zou de
// lege string de homepage-mapping ('/' -> '/nl') overschrijven met een lege target.
export const legacyNlPathToNewNlPath: Record<string, string> = Object.fromEntries(
  routes
    .filter((entry) => entry.paths.nl)
    .map((entry) => [entry.paths.nl.replace(/^\/nl/, '') || '/', entry.paths.nl])
);
