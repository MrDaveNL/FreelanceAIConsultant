// Central site facts. Change these in one place; every page reads from here.
export const site = {
  name: 'Dave Willemstein',
  nameUpper: 'DAVE WILLEMSTEIN',
  firstName: 'Dave',
  initials: 'DW',
  role: 'Independent AI Advisor',
  roleNl: 'Onafhankelijk AI-adviseur',
  brand: 'Freelance AI Consultant',
  domain: 'freelanceaiconsultant.com',
  url: 'https://freelanceaiconsultant.com',
  email: 'dave@freelanceaiconsultant.com',
  linkedin: 'https://www.linkedin.com/in/davewillemstein',
  portrait: '/images/dave-portrait.jpg',
  availability: 'Beschikbaar voor nieuwe opdrachten vanaf Q4',
  // Contactformulier verstuurt via Web3Forms. Maak op https://web3forms.com een access key aan
  // voor het adres waarop de aanvragen moeten binnenkomen en plak die hier.
  // Leeg = het formulier valt terug op een vooringevulde e-mail.
  formAccessKey: 'cafbfe38-8790-48e5-aa0e-b1249dd5064f',
  // Alleen invullen om een andere formulierdienst of CRM te gebruiken dan Web3Forms.
  formEndpoint: '',
  newsletterEndpoint: '',
  // Alleen gebruikt in de privacyverklaring, de algemene voorwaarden en de footer.
  // TODO vóór livegang: btw-nummer en vestigingsplaats staan nog op voorbeeldwaarden.
  legal: {
    entity: '4AP Digital',
    kvk: '86608789',
    btw: 'NL000000000B00',
    city: 'Amsterdam',
    country: 'Nederland',
  },
};

// SEO-titel: merk erachter als het totaal binnen 60 tekens blijft, anders alleen de titel.
export const seoTitle = (title) => {
  const branded = `${title} | ${site.brand}`;
  return branded.length <= 60 ? branded : title;
};

export const nav = [
  ['/diensten', 'Diensten'],
  ['/cases', 'Cases'],
  ['/werkwijze', 'Werkwijze'],
  ['/inzichten', 'Inzichten'],
  ['/over', 'Over mij'],
];

export const metrics = [
  { icon: '✓', value: '10', label: 'strategische AI-trajecten in 12 maanden' },
  { icon: '↗', value: '€2,1M+', label: 'waarde gerealiseerd voor klanten' },
  { icon: '◎', value: '8 MT’s', label: 'ondersteund bij AI-besluitvorming' },
  { icon: '%', value: '32%', label: 'gem. efficiencyverbetering' },
];

export const principles = [
  ['Onafhankelijk', 'Jouw belang, altijd. Geen commissies, geen partnerdeals.'],
  ['Transparant', 'Helder over kansen én risico’s, ook als dat ongemakkelijk is.'],
  ['Pragmatisch', 'Van strategie naar meetbare waarde binnen één kwartaal.'],
  ['Mensgericht', 'Technologie werkt pas als mensen ermee willen werken.'],
];

export const independence = [
  'Geen softwarecommissies',
  'Geen affiliate-deals',
  'Geen vendor-kickbacks',
  'Geen marge op implementatiepartners',
  'Belangenconflicten vooraf gemeld',
];
