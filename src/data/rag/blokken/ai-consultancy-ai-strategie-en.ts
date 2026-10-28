// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (ai-consultancy-ai-strategie.ts), native EN.
// Bevat daarnaast één vervolgvraag met het verschil roadmap/strategie, overgenomen uit het NL-blok
// voor ai-roadmap (ai-consultancy-ai-roadmap.ts): die pagina krijgt geen eigen EN-tegenhanger (noEn),
// de inhoud is samengevoegd op deze pagina. De twee overige ai-roadmap-vervolgvragen pasten niet meer
// binnen de maximale 3 vervolgvragen van dit blok en zijn weggelaten (zie Phase 3 rapport).
export default {
  "pagina": "/ai-consulting/ai-strategy",
  "taal": "en",
  "type": "dienstenoverzicht",
  "onderwerp": "AI strategy",
  "vraagkop": "What does it cost to develop an AI strategy, and how long does it take?",
  "antwoord": "Developing an AI strategy with {{afzender}} can be done in a single engagement with {{dienst:ai-strategy-sprint}}, which takes {{timing:ai-strategy-sprint}} for a fixed price. Anyone who wants to know what's feasible first starts with {{dienst:ai-readiness-assessment}}, at {{timing:ai-readiness-assessment}}, also for a fixed price, {{voorwaarden}}.",
  "tabel": {
    "bijschrift": "Developing an AI strategy: the right service for your situation",
    "kolommen": [
      "Situation",
      "Outcome",
      "Timeline",
      "Right service"
    ],
    "rijen": [
      [
        "Unclear what's feasible with the current organisation, data and systems",
        "Readiness score per dimension, gap analysis and a 90-day plan",
        {
          "dienst": "ai-readiness-assessment",
          "veld": "doorlooptijd"
        },
        {
          "dienst": "ai-readiness-assessment",
          "veld": "naam"
        }
      ],
      [
        "Strategy and roadmap in one go, with the decision-makers in the room",
        "Board-ready strategy, priority matrix and use-case roadmap",
        {
          "dienst": "ai-strategy-sprint",
          "veld": "doorlooptijd"
        },
        {
          "dienst": "ai-strategy-sprint",
          "veld": "naam"
        }
      ]
    ]
  },
  "vervolgvragen": [
    {
      "vraag": "Is the AI Strategy Sprint cheaper for an AI strategy if an AI Readiness Assessment is already in place?",
      "antwoord": "Yes: the investment in {{dienst:ai-strategy-sprint}} is lower if {{dienst:ai-readiness-assessment}} is already in place, and higher for multiple business units. The exact amount is set out in the proposal."
    },
    {
      "vraag": "Can the outcome of the AI Readiness Assessment be that an organisation isn't ready yet?",
      "voorbehoud": "Sometimes",
      "antwoord": "Sometimes, yes: the outcome of {{dienst:ai-readiness-assessment}} is sometimes that an organisation isn't ready yet. The organisation then gets a plan for the foundation instead of a plan for use cases."
    },
    {
      "vraag": "Is an AI roadmap the same as an AI strategy?",
      "onvoorwaardelijk": true,
      "antwoord": "No. The AI strategy decides what you want to achieve and which choices you make; the roadmap decides the order, with an owner, conditions, budget and a decision point per use case."
    }
  ],
  "bron": {
    "tekst": "{{afzender}}'s rates and typical timelines",
    "href": "/pricing"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
