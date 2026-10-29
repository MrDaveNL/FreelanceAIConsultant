// RAG-blok. Teksten geverifieerd (docs/rag-verificatie.md) en akkoord bevonden op 7 oktober 2026.
export default {
  "pagina": "/nl/diensten/ai-due-diligence",
  "type": "dienst",
  "onderwerp": "AI Due Diligence",
  "vraagkop": "Wat levert een AI Due Diligence op en wat kost die?",
  "onderBestaandeKop": false,
  "antwoord": "De {{dienst:ai-due-diligence}} van {{afzender}} beoordeelt een AI-propositie of AI-leverancier voor investeerders en voor organisaties die een strategische AI-leverancier binnenhalen. Het resultaat is een DD-rapport met een expliciet oordeel en een overzicht van red flags, gescheiden in deal-breakers en onderhandelpunten. Het onderzoek duurt {{timing:ai-due-diligence}} en kost {{pricelc:ai-due-diligence}}, altijd onder NDA en vastgelegd in het voorstel, {{voorwaarden}}.",
  "vervolgvragen": [
    {
      "vraag": "Kost een AI Due Diligence van een heel bedrijf meer dan die van één oplossing?",
      "antwoord": "Ja. De {{dienst:ai-due-diligence}} kost {{pricelc:ai-due-diligence}}: één oplossing zit aan de onderkant, een heel bedrijf aan de bovenkant.",
      "onvoorwaardelijk": true
    },
    {
      "vraag": "Is de AI Due Diligence geschikt voor wie een formele audit met accountantsverklaring nodig heeft?",
      "antwoord": "Minder geschikt: de {{dienst:ai-due-diligence}} is minder geschikt als een formele audit met accountantsverklaring nodig is.",
      "voorbehoud": "Minder geschikt"
    }
  ],
  "bron": {
    "tekst": "tarieven en doorlooptijden van {{afzender}}",
    "href": "/nl/tarieven"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
