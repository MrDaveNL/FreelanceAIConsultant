// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (ai-beleid.ts), native EN.
export default {
  "pagina": "/ai-policy",
  "taal": "en",
  "type": "dienstenoverzicht",
  "onderwerp": "AI policy",
  "vraagkop": "What belongs in an AI policy, and which service fits it?",
  "onderBestaandeKop": false,
  "antwoord": "An AI policy sets out which tools are approved, what data can go into them, who decides, and how risks are managed; for most organisations, a first version of one to three pages is enough. {{afzender}} guides the drafting and tests the policy against practice; anyone who wants to know where the organisation stands before writing the policy can use {{dienst:ai-readiness-assessment}}, which maps the starting position in {{timing:ai-readiness-assessment}} for {{pricelc:ai-readiness-assessment}}. If the capacity to drive governance itself is missing, {{dienst:fractional-ai-lead}} can set up and oversee governance and cadence; the investment is a fixed monthly fee, agreed upfront.",
  "tabel": {
    "bijschrift": "Setting and embedding an AI policy: the right service per situation",
    "kolommen": [
      "Situation",
      "Outcome",
      "Timeline",
      "Suitable service"
    ],
    "rijen": [
      [
        "Starting position not yet known before writing the AI policy",
        "Starting position mapped, with a risk and compliance scan and your position under the AI Act if it applies to you",
        { "dienst": "ai-readiness-assessment", "veld": "doorlooptijd" },
        { "dienst": "ai-readiness-assessment", "veld": "naam" }
      ],
      [
        "No in-house capacity to drive AI governance",
        "Governance and cadence set up and overseen",
        { "dienst": "fractional-ai-lead", "veld": "doorlooptijd" },
        { "dienst": "fractional-ai-lead", "veld": "naam" }
      ]
    ]
  },
  "vervolgvragen": [
    {
      "vraag": "What does a small or medium-sized business need in an AI policy?",
      "antwoord": "A small or medium-sized business doesn't need a twenty-page AI policy; what it does need is an AI policy anyone can read in ten minutes, that answers the questions staff actually have. The steps run from taking stock of what's already in use through to reviewing after three months, with writing the first version in one to three pages as one of the steps."
    },
    {
      "vraag": "Is a certificate needed for AI literacy under the AI Act?",
      "antwoord": "No, according to the European Commission, no certificate is required: an organisation can keep an internal record of the training and other initiatives it has run. The AI-literacy duty has applied since 2 February 2025 and was adjusted by the Digital Omnibus, which took effect on 27 July 2026: an organisation must take measures to support AI literacy, without a specific level per person being prescribed. An AI policy is the logical place to record those measures."
    },
    {
      "vraag": "Does AI governance for an AI policy require a new committee?",
      "antwoord": "No, the advice is to add AI to the risk meeting or steering group that already exists, rather than setting up a new committee: the main point is that governance gets tied to what's already there. The starting point for governance around an AI policy is light wherever possible and heavy only where the risk justifies it."
    }
  ],
  "bron": {
    "tekst": "[rates and typical timelines](/pricing) from {{afzender}}; primary source: European Commission, \"AI Literacy - Questions & Answers\"; Regulation (EU) 2026/1744 (Digital Omnibus on AI), EUR-Lex; European Commission, \"AI Omnibus enters into force\" (27 July 2026) (as of 6 October 2026)"
  },
  "externeFeiten": [
    {
      "zin": "No, according to the European Commission, no certificate is required: an organisation can keep an internal record of the training and other initiatives it has run.",
      "soort": "wetgeving"
    },
    {
      "zin": "The AI-literacy duty has applied since 2 February 2025 and was adjusted by the Digital Omnibus, which took effect on 27 July 2026: an organisation must take measures to support AI literacy, without a specific level per person being prescribed.",
      "soort": "wetgeving"
    }
  ],
  "bijgewerkt": "2026-10",
  "markup": true
};
