// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (ai-automatisering-ai-workflows.ts), native EN.
export default {
  "pagina": "/ai-automation/ai-workflows",
  "taal": "en",
  "type": "kennisbank",
  "onderwerp": "AI workflow",
  "vraagkop": "What is an AI workflow?",
  "onderBestaandeKop": true,
  "antwoord": "An AI workflow is an automated chain with a route fixed in advance, in which an AI model only does the steps ordinary rules can't handle, such as understanding free text in an email or pulling data out of a PDF. The chain almost always consists of the same building blocks: trigger, retrieve, AI step, check, action and logging. An AI workflow suits a process that always follows the same steps and where every outcome needs to be explainable; only once the steps genuinely differ case by case and a mistake is reversible does an AI agent come into play.",
  "vervolgvragen": [
    {
      "vraag": "Does the AI model in an AI workflow decide for itself which steps to take?",
      "onvoorwaardelijk": true,
      "antwoord": "No. In an AI workflow the route is fixed in advance and the AI model only fills in a step. An AI agent, by contrast, gets a goal and chooses for itself which steps and tools to use."
    },
    {
      "vraag": "Who builds an AI workflow?",
      "antwoord": "A simple AI workflow flow can be built by a capable colleague on a no-code platform. As soon as integrations with core systems or sensitive data are involved, an IT team or partner is needed, and the client contracts that partner directly."
    },
    {
      "vraag": "How many steps does implementing an AI workflow involve?",
      "voorbehoud": "in practice",
      "antwoord": "In practice, implementing an AI workflow comes down to five steps: choosing one process and measuring it beforehand, mapping the route with the people who do the work today, deciding who builds it, testing with real examples, and arranging management before go-live. Testing includes running the AI workflow alongside the current process for a few weeks."
    }
  ],
  "bron": {
    "tekst": "article by {{afzender}}"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
