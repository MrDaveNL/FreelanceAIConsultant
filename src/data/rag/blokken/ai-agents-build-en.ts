// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (ai-agents-laten-maken.ts), native EN.
export default {
  "pagina": "/ai-agents/build",
  "taal": "en",
  "type": "dienstenoverzicht",
  "onderwerp": "AI agent",
  "vraagkop": "What does an AI agent cost?",
  "onderBestaandeKop": true,
  "antwoord": "The price of an AI agent is set by the route, the integrations, the write access and control, the usage and the management, and it varies sharply by route, so a fixed figure here would be misleading. {{afzender}} doesn't build agents or sell implementations, but helps scope the task, draw up the specification, compare delivery partners and oversee delivery. Having quotes from several delivery partners independently assessed is available as the {{dienst:vendor-review}} of {{timing:vendor-review}} for {{pricelc:vendor-review}}, and ongoing oversight of the project is available as the {{dienst:fractional-ai-lead}}.",
  "vervolgvragen": [
    {
      "vraag": "Who draws up the specification for an AI agent?",
      "voorbehoud": "A good project",
      "antwoord": "In a good project, the client draws up the specification for an AI agent themselves, not the delivery partner; that can also be done with an independent adviser, and only then does a delivery partner come into the picture. A specification left to the party that's also building tends to suit what that party would rather build."
    },
    {
      "vraag": "Does the price of the Vendor Review depend on the number of vendors?",
      "onvoorwaardelijk": true,
      "antwoord": "Yes. The {{dienst:vendor-review}} costs {{pricelc:vendor-review}}, depending on the number of vendors compared. The amounts are {{voorwaarden}}."
    },
    {
      "vraag": "What should an organisation check on the security of an AI agent?",
      "antwoord": "An AI agent that calls systems is a new user in the IT landscape. It's worth giving the AI agent no more access than it needs, having it log in with its own account so its actions can be traced, and keeping a confirmation step at every irreversible moment."
    }
  ],
  "bron": {
    "tekst": "pricing and timelines from {{afzender}}",
    "href": "/pricing"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
