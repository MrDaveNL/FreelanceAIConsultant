// Bestaande live URL's (B01–B35 uit de contentplanning), nu onder /nl (zie i18n-fase1).
// Nieuwe NL-content mag deze paden nooit genereren; de build faalt als dat toch gebeurt.
// EN-tegenhangers (root, geen prefix) komen hier zodra fase 2/3 ze daadwerkelijk bouwt.
export const protectedUrls = [
  '/nl', '/nl/diensten', '/nl/cases', '/nl/werkwijze', '/nl/inzichten', '/nl/over', '/nl/contact',
  '/nl/veelgestelde-vragen', '/nl/privacy', '/nl/algemene-voorwaarden',
  '/nl/diensten/ai-readiness-assessment', '/nl/diensten/ai-strategy-sprint', '/nl/diensten/fractional-ai-lead',
  '/nl/diensten/vendor-review', '/nl/diensten/executive-briefing', '/nl/diensten/ai-due-diligence',
  '/nl/cases/ai-strategie-investeringsmaatschappij', '/nl/cases/vendorselectie-enterprise-retail',
  '/nl/cases/ai-roadmap-internationale-maakorganisatie', '/nl/cases/kyc-documentanalyse-financial-services',
  '/nl/cases/ai-readiness-scale-up', '/nl/cases/interne-ai-assistent-kenniswerkers',
  '/nl/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen', '/nl/inzichten/van-ai-strategie-naar-waarde',
  '/nl/inzichten/build-buy-of-partner', '/nl/inzichten/welke-ai-use-cases-leveren-resultaat',
  '/nl/inzichten/freelance-ai-consultant-vs-agency-vs-big4', '/nl/inzichten/het-datafundament-onder-ai',
  '/nl/inzichten/ai-governance-zonder-bureaucratie', '/nl/inzichten/waarom-ai-pilots-blijven-steken',
  '/nl/inzichten/de-business-case-voor-ai', '/nl/inzichten/ai-vendorselectie-in-acht-stappen',
  '/nl/inzichten/wanneer-heb-je-echt-een-ai-strateeg-nodig', '/nl/inzichten/ai-adoptie-begint-bij-het-werk',
];

// Hubs voor de footer (volgorde = volgorde in de footer).
// Derde element: EN-label, gebruikt door Footer.astro zodra de EN-tegenhanger live is.
export const hubLinks = [
  ['/ai-consultancy', 'AI consultancy', 'AI consulting'],
  ['/ai-implementatie', 'AI implementatie', 'AI implementation'],
  ['/ai-automatisering', 'AI automatisering', 'AI automation'],
  ['/ai-voor-bedrijven', 'AI voor bedrijven', 'AI for business'],
  ['/ai-development', 'AI development', 'AI development'],
  ['/ai-agents', 'AI agents', 'AI agents'],
  ['/ai-beleid', 'AI beleid', 'AI policy'],
  ['/ai-workshop', 'AI workshop', 'AI workshop'],
  ['/markten', 'AI per branche', 'AI by industry'],
  ['/kennisbank', 'Kennisbank', 'Knowledge base'],
  ['/tarieven', 'Tarieven', 'Pricing'],
  ['/partnernetwerk', 'Partnernetwerk', 'Partner network'],
];
