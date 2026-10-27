// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (ai-agents.ts), native EN.
export default {
  "pagina": "/ai-agents",
  "taal": "en",
  "type": "dienstenoverzicht",
  "onderwerp": "AI agents",
  "vraagkop": "What do AI agents cost?",
  "onderBestaandeKop": true,
  "antwoord": "There's no fixed figure for AI agents: the range runs from a licence on an existing platform to a bespoke project with several integrations, and the price depends on the integrations, write access, usage, the requirements for control and logging, and the quality of the sources. For independently comparing quotes from several delivery partners, {{afzender}}'s {{dienst:vendor-review}} fits, costing {{pricelc:vendor-review}}, {{voorwaarden}}.",
  "vervolgvragen": [
    {
      "vraag": "Is a quote for an AI agent complete if it only covers the build?",
      "onvoorwaardelijk": true,
      "antwoord": "No. For AI agents, the build is a one-off cost and management runs on: model costs per use, monitoring, periodic tests, changes as processes or systems change, and the time of an internal owner. The advice is to always ask for a multi-year cost estimate, including the cost of switching vendor."
    },
    {
      "vraag": "Are AI agents inside an existing software platform cheaper to start with?",
      "voorbehoud": "often cheaper",
      "antwoord": "Often yes: AI agents within a software vendor's platform are faster and often cheaper to start with, but the organisation is then bound to what that platform can do and to the vendor's pricing over time. Bespoke work gives more control, with costs for management and further development."
    },
    {
      "vraag": "Does the adviser build AI agents themselves?",
      "onvoorwaardelijk": true,
      "antwoord": "No. The adviser doesn't build AI agents and instead helps work out which task is suitable, what to ask of a delivery partner, and how to oversee delivery. Partner-network parties the adviser suggests are contracted directly by the client, with no margin for the adviser."
    }
  ],
  "bron": {
    "tekst": "pricing and timelines from {{afzender}}",
    "href": "/pricing"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
