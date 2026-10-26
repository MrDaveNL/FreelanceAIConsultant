// EN RAG-blok, fase 2. Zelfde feiten als het NL-blok (diensten-vendor-review.ts), native EN.
export default {
  "pagina": "/services/vendor-review",
  "taal": "en",
  "type": "dienst",
  "onderwerp": "Vendor Review",
  "vraagkop": "What does a Vendor Review deliver and what does it cost?",
  "antwoord": "{{dienst:vendor-review}} from {{afzender}} is an independent selection process for organizations choosing an AI vendor and needing to explain that choice afterward. The result is a substantiated selection advice with scorecards, a three-year TCO comparison and a decision document for procurement and the board. The process takes {{timing:vendor-review}} and costs {{pricelc:vendor-review}}, {{voorwaarden}}.",
  "vervolgvragen": [
    {
      "vraag": "What determines the price of a Vendor Review?",
      "antwoord": "{{price:vendor-review}} for {{dienst:vendor-review}} depends on the number of vendors assessed, typically 2 to 4."
    },
    {
      "vraag": "When is a Vendor Review less suitable?",
      "antwoord": "{{dienst:vendor-review}} is less suitable if the vendor is effectively already chosen and the organization wants a justification after the fact."
    }
  ],
  "bron": {
    "tekst": "{{afzender}}'s rates and typical timelines"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
