// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (ai-agents-voorbeelden.ts), native EN.
// Platformnamen en de "stand van" datum bijgewerkt bij het schrijven (oktober 2026): Salesforce
// Agentforce heet inmiddels Agentforce 360, geverifieerd via webonderzoek; de overige namen en de
// OpenAI Agent Builder-uitfasering (30 november 2026) zijn ongewijzigd ten opzichte van het NL-blok.
export default {
  "pagina": "/ai-agents/examples",
  "taal": "en",
  "type": "kennisbank",
  "onderwerp": "AI agent examples",
  "vraagkop": "Which AI agent examples fit customer service, sales, HR and finance?",
  "onderBestaandeKop": false,
  "antwoord": "The AI agent examples consist of twelve generic applications for customer service, sales, HR and finance, such as mail and ticket preparation, lead research, onboarding and invoice checking, each with the integrations it needs and the point of human review. Preparatory work that a human then reviews delivers the most value. How much autonomy an agent can get depends on whether an action is reversible and whether the consequences are internal or external.",
  "vervolgvragen": [
    {
      "vraag": "Do the AI agent examples show what an agent delivered for a specific company?",
      "onvoorwaardelijk": true,
      "antwoord": "No. The AI agent examples are deliberately described in generic terms and show how an agent fits into a process. What an agent delivers depends on the volumes, the sources, and how much control the process needs."
    },
    {
      "vraag": "Is there one best platform for the AI agent examples?",
      "voorbehoud": "in general",
      "antwoord": "Not in general: which platform fits the AI agent examples depends on the software an organisation already uses, its requirements for control, and its own technical capacity. The platform overview reflects October 2026, with no commissions or other payments from the vendors named."
    }
  ],
  "bron": {
    "tekst": "article by {{afzender}}"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
