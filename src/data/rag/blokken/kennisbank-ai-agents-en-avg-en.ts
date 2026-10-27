// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (kennisbank-ai-agents-en-avg.ts), native EN,
// plus een toegevoegde vervolgvraag over UK GDPR versus EU GDPR (verplicht door de opdrachtgever),
// geverifieerd via webonderzoek tegen de Data (Use and Access) Act 2025 en ICO-duiding.
export default {
  "pagina": "/knowledge-base/ai-agents-and-gdpr",
  "taal": "en",
  "type": "kennisbank",
  "onderwerp": "GDPR for AI agents",
  "vraagkop": "What does GDPR for AI agents ask of an organisation?",
  "onderBestaandeKop": false,
  "antwoord": "GDPR applies in full to AI agents: the organisation deploying the agent remains the data controller, even when the agent itself looks up, logs or sends data. The basics are a recorded purpose and lawful basis, access restricted per source, a processor agreement with the vendor, logging of every step and often a DPIA. If the agent decides about people, the rules on automated decision-making apply too, and under UK GDPR those rules now differ from the stricter EU GDPR approach.",
  "vervolgvragen": [
    {
      "vraag": "Does GDPR have a separate chapter for AI agents?",
      "antwoord": "No. GDPR for AI agents consists of the existing rules, which apply directly; GDPR has no separate chapter for AI agents. What changes is the risk profile, through broad access, several steps with no visibility, data going to third parties and acting instead of advising.",
      "onvoorwaardelijk": true
    },
    {
      "vraag": "Can the AI Act apply alongside GDPR for AI agents?",
      "antwoord": "The AI Act can apply alongside GDPR for AI agents: GDPR covers personal data, the AI Act the AI system itself. For agents that fall under Annex III, for example because they filter applications or assess candidates, the high-risk obligations now apply from 2 December 2027 instead of 2 August 2026, under the Digital Omnibus.",
      "voorbehoud": "can"
    },
    {
      "vraag": "Do UK GDPR and EU GDPR treat automated decisions by an AI agent the same way?",
      "antwoord": "No. Since the Data (Use and Access) Act 2025 took effect in February 2026, the UK allows solely automated decisions on any lawful basis if safeguards are met, while EU GDPR still requires consent, a contract or an authorising law; GDPR for AI agents therefore has to be checked against both regimes separately, since a decision process compliant under UK GDPR can still breach EU GDPR for an EU data subject.",
      "onvoorwaardelijk": true
    }
  ],
  "bron": {
    "tekst": "article by {{afzender}}; primary source: Regulation (EU) 2016/679 (GDPR), EUR-Lex; Regulation (EU) 2024/1689 (AI Act), EUR-Lex; Regulation (EU) 2026/1744 (Digital Omnibus on AI), Official Journal L of 24.7.2026, EUR-Lex; Data (Use and Access) Act 2025, legislation.gov.uk (as of 6 October 2026)"
  },
  "externeFeiten": [
    {
      "zin": "GDPR applies in full to AI agents: the organisation deploying the agent remains the data controller, even when the agent itself looks up, logs or sends data.",
      "soort": "wetgeving"
    },
    {
      "zin": "The basics are a recorded purpose and lawful basis, access restricted per source, a processor agreement with the vendor, logging of every step and often a DPIA.",
      "soort": "wetgeving"
    },
    {
      "zin": "If the agent decides about people, the rules on automated decision-making apply too, and under UK GDPR those rules now differ from the stricter EU GDPR approach.",
      "soort": "wetgeving"
    },
    {
      "zin": "GDPR for AI agents consists of the existing rules, which apply directly; GDPR has no separate chapter for AI agents.",
      "soort": "wetgeving"
    },
    {
      "zin": "The AI Act can apply alongside GDPR for AI agents: GDPR covers personal data, the AI Act the AI system itself.",
      "soort": "wetgeving"
    },
    {
      "zin": "For agents that fall under Annex III, for example because they filter applications or assess candidates, the high-risk obligations now apply from 2 December 2027 instead of 2 August 2026, under the Digital Omnibus.",
      "soort": "wetgeving"
    },
    {
      "zin": "Since the Data (Use and Access) Act 2025 took effect in February 2026, the UK allows solely automated decisions on any lawful basis if safeguards are met, while EU GDPR still requires consent, a contract or an authorising law; GDPR for AI agents therefore has to be checked against both regimes separately, since a decision process compliant under UK GDPR can still breach EU GDPR for an EU data subject.",
      "soort": "wetgeving"
    }
  ],
  "bijgewerkt": "2026-10",
  "markup": true
};
