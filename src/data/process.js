export const steps = [
  ['01', 'Diagnose', 'Wat proberen we werkelijk op te lossen?', '⌕'],
  ['02', 'Prioriteren', 'Welke use cases verdienen geld, tijd en aandacht?', '☑'],
  ['03', 'Beslissen', 'Build, buy of partner, en waarom?', '↯'],
  ['04', 'Ship & govern', 'Hoe zorgen we dat het ook echt landt?', '↗'],
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
