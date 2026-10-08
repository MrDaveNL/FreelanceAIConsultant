// Geplaatst pilotblok. Teksten op basis van de bestaande paginatekst en prijzen.ts; herzien op 6 oktober 2026
// na de verificatie (stelligheid van de bron, prijsvoorwaarden uit prijzen.ts). Akkoord bevonden op 8 oktober 2026.
export default {
  "pagina": "/ai-consultancy/ai-consultant-inhuren",
  "type": "dienstenoverzicht",
  "onderwerp": "AI consultant inhuren",
  "vraagkop": "Wat kost een AI consultant inhuren?",
  "onderBestaandeKop": true,
  "antwoord": "Een AI consultant inhuren bij {{afzender}} gaat via vaste pakketten met zichtbare vanaf-prijzen. Het {{dienst:ai-readiness-assessment}} kost {{pricelc:ai-readiness-assessment}}, de {{dienst:ai-strategy-sprint}} kost {{pricelc:ai-strategy-sprint}} en de {{dienst:fractional-ai-lead}} kost {{pricelc:fractional-ai-lead}}. De bedragen gelden {{voorwaarden}}.",
  "vervolgvragen": [
    {
      "vraag": "Wat is het kleinste pakket met een vaste prijs om een AI consultant in te huren?",
      "antwoord": "De {{dienst:executive-briefing}}. Dat pakket kost {{pricelc:executive-briefing}}."
    },
    {
      "vraag": "Kan een AI consultant inhuren ook voor afgebakend advies?",
      "onvoorwaardelijk": true,
      "antwoord": "Ja. AI consultant inhuren kan ook voor afgebakend advies, zoals een second opinion, een workshop of een korte toets, tegen een vaste prijs in het voorstel."
    }
  ],
  "bron": {
    "tekst": "tarieven en doorlooptijden van {{afzender}}",
    "href": "/tarieven"
  },
  "bijgewerkt": "2026-10"
};
