// Centrale route-kaart: één bron van waarheid voor elke pagina in beide talen.
// Drijft de taalwisselaar, hreflang, de sitemaps en interne linkresolutie.
// 'paths' bevat altijd het voorgestelde pad voor beide talen (zie Fase 0-rapport),
// 'live' zegt of die taalversie nu echt gebouwd wordt. Fase 1: alleen nl is live,
// behalve /404 (infrastructuur, geen content, dus in elke taal al aanwezig).

import type { Locale } from '../i18n/locales';
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

export const routes: RouteEntry[] = [
  // Statische kernpagina's
  r('home', 'static', '', '/', { liveEn: true }),
  r('diensten', 'static', '/diensten', '/services', { liveEn: true }),
  r('cases', 'static', '/cases', '/cases', { liveEn: true }),
  r('werkwijze', 'static', '/werkwijze', '/approach', { liveEn: true }),
  r('inzichten', 'static', '/inzichten', '/insights', {}),
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

  // Inzichten / insights (artikelen)
  r('art-ai-agents-wat-ze-wel-en-niet-kunnen', 'article', '/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen', '/insights/what-ai-agents-can-and-cannot-do'),
  r('art-van-ai-strategie-naar-waarde', 'article', '/inzichten/van-ai-strategie-naar-waarde', '/insights/from-ai-strategy-to-value'),
  r('art-build-buy-of-partner', 'article', '/inzichten/build-buy-of-partner', '/insights/build-buy-or-partner'),
  r('art-welke-ai-use-cases-leveren-resultaat', 'article', '/inzichten/welke-ai-use-cases-leveren-resultaat', '/insights/which-ai-use-cases-deliver-results'),
  r('art-freelance-ai-consultant-vs-agency-vs-big4', 'article', '/inzichten/freelance-ai-consultant-vs-agency-vs-big4', '/insights/independent-ai-consultant-vs-agency-vs-big4'),
  r('art-het-datafundament-onder-ai', 'article', '/inzichten/het-datafundament-onder-ai', '/insights/the-data-foundation-under-ai'),
  r('art-ai-governance-zonder-bureaucratie', 'article', '/inzichten/ai-governance-zonder-bureaucratie', '/insights/ai-governance-without-bureaucracy'),
  r('art-waarom-ai-pilots-blijven-steken', 'article', '/inzichten/waarom-ai-pilots-blijven-steken', '/insights/why-ai-pilots-stall'),
  r('art-de-business-case-voor-ai', 'article', '/inzichten/de-business-case-voor-ai', '/insights/the-business-case-for-ai'),
  r('art-ai-vendorselectie-in-acht-stappen', 'article', '/inzichten/ai-vendorselectie-in-acht-stappen', '/insights/ai-vendor-selection-in-eight-steps'),
  r('art-wanneer-heb-je-echt-een-ai-strateeg-nodig', 'article', '/inzichten/wanneer-heb-je-echt-een-ai-strateeg-nodig', '/insights/when-do-you-really-need-an-ai-strategist'),
  r('art-ai-adoptie-begint-bij-het-werk', 'article', '/inzichten/ai-adoptie-begint-bij-het-werk', '/insights/ai-adoption-starts-with-the-work'),

  // Content-collectie 'pages': 12 clusters, 55 pagina's
  r('C1-00', 'content', '/ai-consultancy', '/ai-consulting', { cluster: 'ai-consultancy', liveEn: true }),
  r('C1-05', 'content', '/ai-consultancy/ai-advies', '/ai-consulting/ai-advice', { cluster: 'ai-consultancy' }),
  r('C1-06', 'content', '/ai-consultancy/ai-consultant-inhuren', '/ai-consulting/hire-an-ai-consultant', { cluster: 'ai-consultancy' }),
  // Geen EN-tegenhanger: "ai roadmap" betekent in het Engels een carrièrepad, niet dit onderwerp.
  // Inhoud wordt samengevoegd op C1-03 (/ai-consulting/ai-strategy) in plaats van een eigen EN-pagina.
  r('C1-04', 'content', '/ai-consultancy/ai-roadmap', '/ai-consulting/ai-roadmap', { cluster: 'ai-consultancy', noEn: true }),
  r('C1-03', 'content', '/ai-consultancy/ai-strategie', '/ai-consulting/ai-strategy', { cluster: 'ai-consultancy', liveEn: true }),

  r('C2-00', 'content', '/ai-implementatie', '/ai-implementation', { cluster: 'ai-implementatie' }),
  r('C2-01', 'content', '/ai-implementatie/advies', '/ai-implementation/consulting', { cluster: 'ai-implementatie' }),
  r('C2-03', 'content', '/ai-implementatie/stappenplan', '/ai-implementation/step-by-step-plan', { cluster: 'ai-implementatie' }),

  r('C3-00', 'content', '/ai-automatisering', '/ai-automation', { cluster: 'ai-automatisering' }),
  r('C3-05', 'content', '/ai-automatisering/ai-tools', '/ai-automation/ai-tools', { cluster: 'ai-automatisering' }),
  r('C3-04', 'content', '/ai-automatisering/ai-workflows', '/ai-automation/ai-workflows', { cluster: 'ai-automatisering' }),
  r('C3-03', 'content', '/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai', '/ai-automation/automate-business-processes-with-ai', { cluster: 'ai-automatisering' }),

  r('C4-00', 'content', '/ai-voor-bedrijven', '/ai-for-business', { cluster: 'ai-voor-bedrijven' }),
  r('C4-03', 'content', '/ai-voor-bedrijven/ai-en-bi', '/ai-for-business/ai-and-bi', { cluster: 'ai-voor-bedrijven' }),
  r('C4-01', 'content', '/ai-voor-bedrijven/mkb', '/ai-for-business/sme', { cluster: 'ai-voor-bedrijven' }),
  r('C4-02', 'content', '/ai-voor-bedrijven/zakelijke-dienstverleners', '/ai-for-business/professional-services-firms', { cluster: 'ai-voor-bedrijven' }),

  r('C5-00', 'content', '/ai-development', '/ai-development', { cluster: 'ai-development' }),
  r('C5-01', 'content', '/ai-development/ai-specialist', '/ai-development/ai-specialist', { cluster: 'ai-development' }),
  r('C5-02', 'content', '/ai-development/ai-software', '/ai-development/ai-software', { cluster: 'ai-development' }),
  r('C5-03', 'content', '/ai-development/ai-oplossingen', '/ai-development/ai-solutions', { cluster: 'ai-development' }),

  r('C6-00', 'content', '/ai-agents', '/ai-agents', { cluster: 'ai-agents' }),
  r('C6-03', 'content', '/ai-agents/laten-maken', '/ai-agents/build', { cluster: 'ai-agents' }),
  r('C6-04', 'content', '/ai-agents/voorbeelden', '/ai-agents/examples', { cluster: 'ai-agents' }),
  r('C6-01', 'content', '/ai-agents/wat-is-een-ai-agent', '/ai-agents/what-is-an-ai-agent', { cluster: 'ai-agents' }),

  r('C8-00', 'content', '/ai-beleid', '/ai-policy', { cluster: 'ai-beleid' }),
  r('C8-01', 'content', '/ai-beleid/ai-act', '/ai-policy/ai-act', { cluster: 'ai-beleid' }),

  r('C9-00', 'content', '/ai-workshop', '/ai-workshop', { cluster: 'ai-workshop' }),
  // Geen EN-tegenhanger gepland voor deze batch.
  r('C9-04', 'content', '/ai-workshop/ai-coaching', '/ai-workshop/ai-coaching', { cluster: 'ai-workshop', noEn: true }),
  r('C9-05', 'content', '/ai-workshop/ai-geletterdheid-training', '/ai-workshop/ai-literacy-training', { cluster: 'ai-workshop' }),
  r('C9-03', 'content', '/ai-workshop/chatgpt-training', '/ai-workshop/chatgpt-training', { cluster: 'ai-workshop' }),
  r('C9-02', 'content', '/ai-workshop/copilot-training', '/ai-workshop/copilot-training', { cluster: 'ai-workshop' }),

  r('P08', 'content', '/kennisbank', '/knowledge-base', { cluster: 'kennisbank' }),
  r('C6-05', 'content', '/kennisbank/ai-agents-en-avg', '/knowledge-base/ai-agents-and-gdpr', { cluster: 'kennisbank' }),
  // Geen EN-tegenhanger: NL-arbeidsmarktdata (salaris), zou misleidend zijn zonder eigen EN-cijfers.
  r('C5-05', 'content', '/kennisbank/ai-specialist-salaris', '/knowledge-base/ai-specialist-salary', { cluster: 'kennisbank', noEn: true }),
  r('C3-06', 'content', '/kennisbank/ai-voorbeelden', '/knowledge-base/ai-examples', { cluster: 'kennisbank' }),
  r('C10-01', 'content', '/kennisbank/chatgpt-voor-bedrijven', '/knowledge-base/chatgpt-for-business', { cluster: 'kennisbank' }),
  r('C10-02', 'content', '/kennisbank/claude-voor-bedrijven', '/knowledge-base/claude-for-business', { cluster: 'kennisbank' }),
  r('C10-03', 'content', '/kennisbank/gemini-voor-bedrijven', '/knowledge-base/gemini-for-business', { cluster: 'kennisbank' }),
  r('C10-04', 'content', '/kennisbank/microsoft-copilot-voor-bedrijven', '/knowledge-base/microsoft-copilot-for-business', { cluster: 'kennisbank' }),
  // Geen EN-tegenhanger gepland voor deze batch.
  r('C3-07', 'content', '/kennisbank/notuleren-met-ai', '/knowledge-base/ai-meeting-notes', { cluster: 'kennisbank', noEn: true }),
  r('C10-05', 'content', '/kennisbank/prompt-engineering', '/knowledge-base/prompt-engineering', { cluster: 'kennisbank' }),
  r('C3-08', 'content', '/kennisbank/rpa-vs-ai-automatisering', '/knowledge-base/rpa-vs-ai-automation', { cluster: 'kennisbank' }),
  r('C1-07', 'content', '/kennisbank/wat-doet-een-ai-consultant', '/knowledge-base/what-does-an-ai-consultant-do', { cluster: 'kennisbank' }),
  r('C5-04', 'content', '/kennisbank/wat-doet-een-ai-developer', '/knowledge-base/what-does-an-ai-developer-do', { cluster: 'kennisbank' }),
  r('C4-05', 'content', '/kennisbank/wat-doet-een-bi-specialist', '/knowledge-base/what-does-a-bi-specialist-do', { cluster: 'kennisbank' }),

  r('C7-00', 'content', '/markten', '/markets', { cluster: 'markten' }),
  r('C7-04', 'content', '/markten/automotive', '/markets/automotive', { cluster: 'markten' }),
  r('C7-03', 'content', '/markten/fintech', '/markets/fintech', { cluster: 'markten' }),
  r('C7-06', 'content', '/markten/luchtvaart', '/markets/aviation', { cluster: 'markten', noindex: true }),
  r('C7-02', 'content', '/markten/marketing', '/markets/marketing', { cluster: 'markten', noindex: true }),
  r('C7-05', 'content', '/markten/onderwijs', '/markets/education', { cluster: 'markten', noindex: true }),
  r('C7-07', 'content', '/markten/overheid', '/markets/government', { cluster: 'markten', noindex: true }),
  r('C7-01', 'content', '/markten/zorg', '/markets/healthcare', { cluster: 'markten', noindex: true }),

  r('P06', 'content', '/partnernetwerk', '/partner-network', { cluster: 'partnernetwerk', liveEn: true }),
  r('P04', 'content', '/tarieven', '/pricing', { cluster: 'tarieven', liveEn: true }),
];

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
export const legacyNlPathToNewNlPath: Record<string, string> = Object.fromEntries(
  routes.map((entry) => [entry.paths.nl.replace(/^\/nl/, '') || '/', entry.paths.nl])
);
