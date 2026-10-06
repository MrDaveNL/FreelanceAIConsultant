// CONCEPT: teksten op basis van de bestaande paginatekst (src/content/pages/ai-consultancy/ai-consultant-inhuren)
// en prijzen.ts, nog niet beoordeeld. Het blok komt onder de bestaande H2 en heeft geen tabel:
// de pagina toont de inhuurvormen daar al in een eigen tabel.
export default {
  pagina: '/ai-consultancy/ai-consultant-inhuren',
  type: 'dienstenoverzicht',
  onderwerp: 'AI consultant inhuren',
  vraagkop: 'Wat kost een AI consultant inhuren?',
  onderBestaandeKop: true,
  antwoord:
    'Een AI consultant inhuren bij {{afzender}} kost per pakket een vaste prijs of een bedrag binnen een bandbreedte. Het {{dienst:ai-readiness-assessment}} kost {{pricelc:ai-readiness-assessment}}, de {{dienst:ai-strategy-sprint}} {{pricelc:ai-strategy-sprint}} en een doorlopende rol als {{dienst:fractional-ai-lead}} {{pricelc:fractional-ai-lead}}. De bedragen gelden exclusief btw en reiskosten.',
  vervolgvragen: [
    {
      vraag: 'Wat is het kleinste pakket om een AI consultant in te huren?',
      antwoord:
        '{{price:executive-briefing}}. Voor dat bedrag is de {{dienst:executive-briefing}} het kleinste pakket met een vaste prijs.',
    },
    {
      vraag: 'Kan een AI consultant inhuren ook zonder vast pakket?',
      antwoord:
        'Ja. AI consultant inhuren kan ook voor afgebakend advies, zoals een second opinion, een workshop of een korte toets, tegen een vaste prijs die in het voorstel staat.',
    },
  ],
  bron: { tekst: 'tarieven en doorlooptijden van {{afzender}}', href: '/tarieven' },
  bijgewerkt: '2026-10',
  concept: true,
};
