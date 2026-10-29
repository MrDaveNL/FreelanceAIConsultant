// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (ai-development.ts), native EN.
export default {
  "pagina": "/ai-development",
  "taal": "en",
  "type": "dienstenoverzicht",
  "onderwerp": "AI development",
  "vraagkop": "What does independent guidance for AI development cost, and who does the building?",
  "onderBestaandeKop": false,
  "antwoord": "{{afzender}} doesn't build software, but guides AI development from the client's side: specification, build-partner selection, testing deliverables and governance. For choosing the build partner there's the {{dienst:vendor-review}} over {{timing:vendor-review}}, for a fixed price, and during the build there's guidance from the client's side, for example as a {{dienst:fractional-ai-lead}} for a fixed monthly fee. The build itself sits with the client's own team or with a development partner the client contracts directly.",
  "tabel": {
    "bijschrift": "AI development: the right service for each phase of the project",
    "kolommen": [
      "Phase of the project",
      "What the client gets",
      "Timeline",
      "Suitable service"
    ],
    "rijen": [
      [
        "At the start, when there's no clear picture yet of where the organisation stands",
        "A logical first step, including a closing presentation to the leadership team or board",
        { "dienst": "ai-readiness-assessment", "veld": "doorlooptijd" },
        { "dienst": "ai-readiness-assessment", "veld": "naam" }
      ],
      [
        "When choosing the build partner",
        "Scorecards, a test on your own data and a three-year TCO comparison",
        { "dienst": "vendor-review", "veld": "doorlooptijd" },
        { "dienst": "vendor-review", "veld": "naam" }
      ],
      [
        "During the build",
        "Guidance from the client's side: testing deliverables, safeguarding the business case and governance",
        { "dienst": "fractional-ai-lead", "veld": "doorlooptijd" },
        { "dienst": "fractional-ai-lead", "veld": "naam" }
      ]
    ]
  },
  "vervolgvragen": [
    {
      "vraag": "Is there a margin on developers from the network for AI development?",
      "onvoorwaardelijk": true,
      "antwoord": "No. For AI development, the client contracts the build partner directly, with no intermediary layer, margin or commission. A party from the network goes through the same selection as any other party."
    },
    {
      "vraag": "What determines the price of the Vendor Review for AI development?",
      "antwoord": "The {{dienst:vendor-review}} costs {{pricelc:vendor-review}}, depending on the number of vendors being compared."
    },
    {
      "vraag": "What works best for AI development: build, buy or partner?",
      "voorbehoud": "often",
      "antwoord": "The hybrid form often works best for AI development: buying in building blocks, having the layer with your own knowledge built, and placing the implementation with a partner. Before that comes the question of whether building is needed at all: only build what sets the organisation apart in the market, and buy what's a commodity."
    }
  ],
  "bron": {
    "tekst": "rates and typical timelines from {{afzender}}",
    "href": "/pricing"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
