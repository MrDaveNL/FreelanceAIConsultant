// NL-interfaceteksten. 1-op-1 overgenomen uit de componenten waar ze eerst hardcoded
// stonden (Header, Footer, 404). De tekst zelf is ongewijzigd; alleen de plek verandert.
export const nl = {
  skipLink: 'Naar hoofdinhoud',
  switcherAria: 'Taal',
  nav: {
    diensten: 'Diensten',
    cases: 'Cases',
    werkwijze: 'Werkwijze',
    inzichten: 'Inzichten',
    over: 'Over mij',
  },
  header: {
    navAria: 'Hoofdnavigatie',
    menuAria: 'Open menu',
    cta: 'Plan een gesprek',
  },
  footer: {
    servicesHeading: 'Diensten',
    allServices: 'Alle diensten',
    contentHeading: 'Inhoud',
    faq: 'Veelgestelde vragen',
    about: 'Over mij',
    hubHeading: 'Kennis & aanpak',
    contactHeading: 'Contact',
    linkedin: 'LinkedIn ↗',
    cta: 'Plan een gesprek',
    privacy: 'Privacyverklaring',
    terms: 'Algemene voorwaarden',
  },
  breadcrumbs: {
    home: 'Home',
    aria: 'Kruimelpad',
  },
  error404: {
    title: 'Pagina niet gevonden | Freelance AI Consultant',
    description: 'Deze pagina bestaat niet (meer). Ga terug naar de homepage of bekijk de diensten en inzichten.',
    eyebrow: 'Foutje',
    heading: 'Deze pagina bestaat niet.',
    body: 'Verkeerde link, verouderde bookmark of een typefout. Hieronder vind je de weg terug.',
    ctaHome: 'Naar de homepage →',
    ctaContact: 'Of stel je vraag direct →',
    servicesEyebrow: 'Diensten',
    articlesEyebrow: 'Gelezen artikelen',
  },
} as const;
