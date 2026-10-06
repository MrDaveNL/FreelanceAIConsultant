// CONCEPT: teksten geschreven op basis van de bestaande paginatekst (services.js) en prijzen.ts, nog niet beoordeeld.
export default {
  pagina: '/diensten/ai-readiness-assessment',
  type: 'dienst',
  onderwerp: 'AI Readiness Assessment',
  vraagkop: 'Wat levert de AI Readiness Assessment op en wat kost die?',
  antwoord:
    'De AI Readiness Assessment van {{afzender}} laat organisaties die AI overwegen maar nog geen richting hebben gekozen zien wat haalbaar is en wat eerst moet. Het resultaat is een readiness-score op strategie, data, technologie, mensen en governance, een gap-analyse en een 90-dagenplan. De doorlichting duurt {{timing:ai-readiness-assessment}} en kost {{pricelc:ai-readiness-assessment}}, als vaste prijs exclusief btw en reiskosten.',
  vervolgvragen: [
    {
      vraag: 'Hoe lang duurt de AI Readiness Assessment?',
      antwoord:
        '{{timing:ai-readiness-assessment}}. In die periode doet {{afzender}} voor de AI Readiness Assessment een documentenanalyse, een datascan en 8 tot 12 interviews, gevolgd door de scoring, de prioritering en een eindsessie.',
    },
    {
      vraag: 'Is de prijs van de AI Readiness Assessment een vaste prijs?',
      antwoord:
        'Ja. De AI Readiness Assessment van {{afzender}} kost {{pricelc:ai-readiness-assessment}} als vaste prijs, en de eindpresentatie aan MT of board zit daarbij in. Het bedrag is exclusief btw en reiskosten.',
    },
    {
      vraag: 'Wordt een Executive Briefing verrekend met de AI Readiness Assessment?',
      antwoord:
        'Ja. De {{dienst:executive-briefing}} van {{afzender}} kost {{pricelc:executive-briefing}} en wordt volledig verrekend bij een start met de AI Readiness Assessment binnen 60 dagen.',
    },
  ],
  bron: { tekst: 'tarieven en doorlooptijden van {{afzender}}', href: '/tarieven' },
  bijgewerkt: '2026-10',
  concept: true,
};
