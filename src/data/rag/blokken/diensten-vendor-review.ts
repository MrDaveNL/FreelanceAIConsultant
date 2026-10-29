// RAG-blok. Teksten geverifieerd (docs/rag-verificatie.md) en akkoord bevonden op 7 oktober 2026.
export default {
  "pagina": "/nl/diensten/vendor-review",
  "type": "dienst",
  "onderwerp": "Vendor Review",
  "vraagkop": "Wat levert een Vendor Review op en wat kost die?",
  "onderBestaandeKop": false,
  "antwoord": "De {{dienst:vendor-review}} van {{afzender}} is een onafhankelijk selectietraject voor organisaties die een AI-leverancier kiezen en die keuze achteraf moeten kunnen uitleggen. Het resultaat is een onderbouwd selectieadvies met scorecards, een TCO-vergelijking over drie jaar en een beslisdocument voor procurement en board. Het traject duurt {{timing:vendor-review}} en kost {{pricelc:vendor-review}}, vastgelegd in het voorstel, {{voorwaarden}}.",
  "vervolgvragen": [
    {
      "vraag": "Wat bepaalt de prijs van een Vendor Review?",
      "antwoord": "De prijs van de {{dienst:vendor-review}}, {{pricelc:vendor-review}}, is afhankelijk van het aantal leveranciers (2 tot 4)."
    },
    {
      "vraag": "Wanneer is een Vendor Review minder geschikt?",
      "voorbehoud": "Minder geschikt als",
      "antwoord": "De {{dienst:vendor-review}} is minder geschikt als de leverancier feitelijk al gekozen is en de organisatie een onderbouwing achteraf zoekt."
    }
  ],
  "bron": {
    "tekst": "tarieven en doorlooptijden van {{afzender}}",
    "href": "/nl/tarieven"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
