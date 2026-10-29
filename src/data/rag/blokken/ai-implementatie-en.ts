// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (ai-implementatie.ts), native EN.
export default {
  "pagina": "/ai-implementation",
  "taal": "en",
  "type": "dienstenoverzicht",
  "onderwerp": "AI implementation",
  "vraagkop": "What does guidance for AI implementation cost, and who builds the solution?",
  "onderBestaandeKop": false,
  "antwoord": "With an AI implementation, your own team or a directly contracted partner builds the solution; {{afzender}} guides from the client's side of the table by helping choose, setting the framework, testing the delivery and making sure the application lands in the organisation. That guidance works as follows: {{dienst:ai-readiness-assessment}} takes {{timing:ai-readiness-assessment}} for a fixed project fee, and ongoing steering through {{dienst:fractional-ai-lead}} is for a fixed monthly fee. The cost of the build or licence depends on the chosen solution and vendor and is budgeted separately, including management after go-live.",
  "tabel": {
    "bijschrift": "Guidance for AI implementation: the right service per situation",
    "kolommen": [
      "Situation",
      "Timeline",
      "Suitable service"
    ],
    "rijen": [
      [
        "Unclear whether the organisation is ready for an implementation, or opinions differ on that",
        { "dienst": "ai-readiness-assessment", "veld": "doorlooptijd" },
        { "dienst": "ai-readiness-assessment", "veld": "naam" }
      ],
      [
        "Selecting an external delivery partner against criteria agreed in advance, tested on your own data",
        { "dienst": "vendor-review", "veld": "doorlooptijd" },
        { "dienst": "vendor-review", "veld": "naam" }
      ],
      [
        "Ongoing oversight of measurement, management and governance, without a full-time Head of AI on staff",
        { "dienst": "fractional-ai-lead", "veld": "doorlooptijd" },
        { "dienst": "fractional-ai-lead", "veld": "naam" }
      ]
    ]
  },
  "vervolgvragen": [
    {
      "vraag": "Is a margin charged on partners who build the AI implementation?",
      "antwoord": "No. With an AI implementation, the build is done by your own team or a party you contract directly. No margin is charged on partners, and there are no commissions or partner status with vendors.",
      "onvoorwaardelijk": true
    },
    {
      "vraag": "Does a roadmap need to be in place before an AI implementation can start?",
      "antwoord": "No. A missing roadmap isn't a reason to wait on an AI implementation. It is a reason to keep the first project small and well defined, so it becomes clear what the organisation can handle before the second and third application start.",
      "onvoorwaardelijk": true
    },
    {
      "vraag": "What often costs more time than the technology in an AI implementation?",
      "antwoord": "Adoption often costs more time than the technology in an AI implementation. The timeline of the implementation itself varies a lot by application: a standard product that gets configured moves faster than bespoke work with integrations into core systems.",
      "voorbehoud": "often"
    }
  ],
  "bron": {
    "tekst": "{{afzender}}'s rates and typical timelines",
    "href": "/pricing"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
