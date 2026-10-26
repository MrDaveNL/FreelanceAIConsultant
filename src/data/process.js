export const steps = [
  ['01', 'Diagnose', 'Wat proberen we werkelijk op te lossen?', '⌕'],
  ['02', 'Prioriteren', 'Welke use cases verdienen geld, tijd en aandacht?', '☑'],
  ['03', 'Beslissen', 'Build, buy of partner, en waarom?', '↯'],
  ['04', 'Ship & govern', 'Hoe zorgen we dat het ook echt landt?', '↗'],
];

// EN-equivalent van steps hierboven. Alleen de vier korte stappen (gebruikt op de homepage via
// <Steps>); stepDetails/expectations/antiPatterns/engagementModels volgen bij de approach-pagina.
export const stepsEn = [
  ['01', 'Diagnose', 'What are we actually trying to solve?', '⌕'],
  ['02', 'Prioritize', 'Which use cases earn money, time and attention?', '☑'],
  ['03', 'Decide', 'Build, buy or partner, and why?', '↯'],
  ['04', 'Ship & govern', 'How do we make sure it actually lands?', '↗'],
];

export const stepDetails = [
  {
    number: '01',
    title: 'Diagnose',
    icon: '⌕',
    lead: 'Wat proberen we werkelijk op te lossen?',
    body: 'Bijna elke AI-vraag die bij mij binnenkomt, is een symptoom van iets anders. “We willen een chatbot” betekent meestal dat de eerstelijns klantvragen te lang duren. Ik begin daarom nooit bij de gewenste oplossing, maar bij de uitkomst die je wilt bereiken en het proces dat daar nu voor staat.',
    doing: [
      'Interviews met business, IT, data en de mensen die het werk doen',
      'Analyse van bestaande documenten, pilots en leveranciersvoorstellen',
      'Datascan op de bronnen die relevant zijn voor de vraag',
      'Formuleren van de uitkomsten in meetbare termen',
    ],
    output: 'Een probleemstelling die de hele kerngroep onderschrijft, met meetbare uitkomsten.',
  },
  {
    number: '02',
    title: 'Prioriteren',
    icon: '☑',
    lead: 'Welke use cases verdienen geld, tijd en aandacht?',
    body: 'Hier wordt de lijst korter, niet langer. Elke kandidaat wordt op dezelfde manier beoordeeld: waarde, haalbaarheid, datagereedheid, veranderlast en de vraag of er een eigenaar in de lijn is die er beter van wordt. Scoren doen we samen, niet in mijn spreadsheet.',
    doing: [
      'Uniforme scoring op waarde, haalbaarheid, data en veranderlast',
      'Eerste waarde-inschatting met zichtbare aannames',
      'Eigenaarschap toewijzen per use case',
      'Expliciet vastleggen wat afvalt en waarom',
    ],
    output: 'Een geprioriteerd portfolio met eigenaren, plus een gemotiveerde afvallijst.',
  },
  {
    number: '03',
    title: 'Beslissen',
    icon: '↯',
    lead: 'Build, buy of partner, en waarom?',
    body: 'Per thema een onderbouwde keuze. Zelf bouwen waar het je onderscheidt, kopen waar het een commodity is, partneren waar je de uitkomst wilt sturen maar niet de techniek wilt bezitten. Inclusief de kosten die pas in jaar drie zichtbaar worden.',
    doing: [
      'Build/buy/partner-afweging per thema',
      'TCO-orde-van-grootte over drie jaar',
      'Architectuur- en afhankelijkheidsconsequenties',
      'Risicoclassificatie en compliance-implicaties',
    ],
    output: 'Beslisdocument dat door procurement en board komt zonder extra ronde.',
  },
  {
    number: '04',
    title: 'Ship & govern',
    icon: '↗',
    lead: 'Hoe zorgen we dat het ook echt landt?',
    body: 'De fase waarin de meeste trajecten stilvallen. Wie beheert het, hoe meet je of het nog werkt, wat gebeurt er als het misgaat en wie mag het stoppen? Dit regelen we voordat er gebouwd wordt, niet erna.',
    doing: [
      'Operating model, rollen en cadans',
      'Meetopzet met nulmeting vóór de start',
      'Governance: register, poort, periodieke toets, escalatiepad',
      'Adoptieaanpak per rol in plaats van één uitrol',
    ],
    output: 'Een werkende toepassing met beheer, meetpunten en een eigenaar die erover gaat.',
  },
];

export const expectations = [
  'Onafhankelijk en vendor-neutraal advies',
  'Helder, besluitbaar en zonder ruis',
  'Focus op waarde: tijd, geld en risico',
  'Pragmatisch en uitvoerbaar binnen jouw organisatie',
  'Transparante communicatie en een vaste cadans',
  'Meetbare resultaten en een eerlijke evaluatie',
];

export const antiPatterns = [
  'Geen eindeloze pilots zonder richting',
  'Geen tool-stapeling zonder strategie',
  'Geen verkoop van software of licenties',
  'Geen vage verhalen zonder onderbouwing',
  'Geen overname van jouw verantwoordelijkheid',
  'Geen “AI voor de show”',
];

export const engagementModels = [
  ['Afgebakende opdracht', 'Voor afgebakend advies, workshops en second opinions. Vaste prijs per opdracht, vastgelegd in het voorstel.'],
  ['Vast traject', 'Heldere scope, mijlpalen en deliverables tegen een vaste prijs of bandbreedte. Snel naar resultaat.'],
  ['Retainer', 'Doorlopende sturing en beschikbaarheid bij een fractional rol. Vast maandbedrag, vast ritme.'],
];

// EN-equivalent van stepDetails/expectations/antiPatterns/engagementModels hierboven, voor de approach-pagina.
export const stepDetailsEn = [
  {
    number: '01',
    title: 'Diagnose',
    icon: '⌕',
    lead: 'What are we actually trying to solve?',
    body: 'Almost every AI request I get is a symptom of something else. "We want a chatbot" usually means first-line customer questions take too long to answer. So I never start with the requested solution, but with the outcome you want and the process that currently stands in the way of it.',
    doing: [
      'Interviews with business, IT, data and the people doing the work',
      'Analysis of existing documents, pilots and vendor proposals',
      'Data scan of the sources relevant to the question',
      'Framing the outcomes in measurable terms',
    ],
    output: 'A problem statement the whole core group signs off on, with measurable outcomes.',
  },
  {
    number: '02',
    title: 'Prioritize',
    icon: '☑',
    lead: 'Which use cases earn money, time and attention?',
    body: 'This is where the list gets shorter, not longer. Every candidate is assessed the same way: value, feasibility, data readiness, change burden, and whether there is an owner in the line who actually benefits. We score together, not in my spreadsheet.',
    doing: [
      'Uniform scoring on value, feasibility, data and change burden',
      'First-pass value estimate with visible assumptions',
      'Ownership assigned per use case',
      'Explicit record of what drops out and why',
    ],
    output: 'A prioritized portfolio with owners, plus a documented drop list.',
  },
  {
    number: '03',
    title: 'Decide',
    icon: '↯',
    lead: 'Build, buy or partner, and why?',
    body: 'A substantiated choice per theme. Build where it differentiates you, buy where it is a commodity, partner where you want to steer the outcome without owning the technology. Including the costs that only become visible in year three.',
    doing: [
      'Build/buy/partner assessment per theme',
      'Order-of-magnitude TCO over three years',
      'Architecture and dependency consequences',
      'Risk classification and compliance implications',
    ],
    output: 'A decision document that clears procurement and the board without an extra round.',
  },
  {
    number: '04',
    title: 'Ship & govern',
    icon: '↗',
    lead: 'How do we make sure it actually lands?',
    body: 'The phase where most initiatives stall. Who manages it, how do you measure whether it still works, what happens when it breaks, and who is allowed to stop it? We settle this before building, not after.',
    doing: [
      'Operating model, roles and cadence',
      'Measurement setup with a baseline before the start',
      'Governance: register, gate, periodic review, escalation path',
      'Adoption approach per role instead of a single rollout',
    ],
    output: 'A working solution with management, measurement points and an owner who is accountable for it.',
  },
];

export const expectationsEn = [
  'Independent, vendor-neutral advice',
  'Clear, decidable and without noise',
  'Focus on value: time, money and risk',
  'Pragmatic and executable within your organization',
  'Transparent communication and a fixed cadence',
  'Measurable results and an honest evaluation',
];

export const antiPatternsEn = [
  'No endless pilots without direction',
  'No tool-stacking without strategy',
  'No selling of software or licenses',
  'No vague stories without substantiation',
  'No taking over your responsibility',
  'No "AI for the show"',
];

export const engagementModelsEn = [
  ['Defined assignment', 'For scoped advice, workshops and second opinions. Fixed price per assignment, set out in the proposal.'],
  ['Fixed-scope project', 'Clear scope, milestones and deliverables for a fixed price or range. Fast to results.'],
  ['Retainer', 'Ongoing steering and availability in a fractional role. Fixed monthly amount, fixed rhythm.'],
];
