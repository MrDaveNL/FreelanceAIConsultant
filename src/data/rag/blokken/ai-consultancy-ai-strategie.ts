// Teksten op basis van de bestaande paginatekst (src/content/pages/ai-consultancy/ai-strategie) en prijzen.ts.
// Akkoord op 6 oktober 2026.
export default {
  pagina: '/ai-consultancy/ai-strategie',
  type: 'dienstenoverzicht',
  onderwerp: 'AI strategie',
  vraagkop: 'Wat kost het om een AI strategie te laten ontwikkelen en hoe lang duurt het?',
  antwoord:
    'Een AI strategie laten ontwikkelen door {{afzender}} kan in één traject met de {{dienst:ai-strategy-sprint}}, die {{timing:ai-strategy-sprint}} duurt en {{pricelc:ai-strategy-sprint}} kost. Wie eerst wil weten wat haalbaar is, start met het {{dienst:ai-readiness-assessment}} van {{timing:ai-readiness-assessment}} voor {{pricelc:ai-readiness-assessment}}. Beide bedragen zijn exclusief btw en reiskosten.',
  tabel: {
    bijschrift: 'AI strategie ontwikkelen: passende dienst per situatie',
    kolommen: ['Situatie', 'Resultaat', 'Doorlooptijd', 'Prijs', 'Passende dienst'],
    rijen: [
      [
        'Onduidelijk wat haalbaar is met de huidige organisatie, data en systemen',
        'Readiness-score per dimensie, gap-analyse en 90-dagenplan',
        { dienst: 'ai-readiness-assessment', veld: 'doorlooptijd' },
        { dienst: 'ai-readiness-assessment', veld: 'prijs' },
        { dienst: 'ai-readiness-assessment', veld: 'naam' },
      ],
      [
        'Strategie en roadmap in één keer vastleggen, met de beslissers aan tafel',
        'Board-ready strategie, prioriteitenmatrix en use-case roadmap',
        { dienst: 'ai-strategy-sprint', veld: 'doorlooptijd' },
        { dienst: 'ai-strategy-sprint', veld: 'prijs' },
        { dienst: 'ai-strategy-sprint', veld: 'naam' },
      ],
    ],
  },
  vervolgvragen: [
    {
      vraag: 'Is een AI strategie goedkoper als er al een AI Readiness Assessment ligt?',
      antwoord:
        'Ja. De {{dienst:ai-strategy-sprint}} kost {{pricelc:ai-strategy-sprint}}: de onderkant geldt als er al een {{dienst:ai-readiness-assessment}} ligt, de bovenkant bij meerdere bedrijfsonderdelen.',
    },
    {
      vraag: 'Kan de uitkomst zijn dat een organisatie nog niet klaar is voor een AI strategie?',
      antwoord:
        'Ja. Het {{dienst:ai-readiness-assessment}} kan uitwijzen dat het fundament eerst op orde moet. De organisatie krijgt dan een plan voor het fundament in plaats van een plan voor use cases.',
    },
  ],
  bron: { tekst: 'tarieven en doorlooptijden van {{afzender}}', href: '/tarieven' },
  bijgewerkt: '2026-10',
  concept: false,
};
