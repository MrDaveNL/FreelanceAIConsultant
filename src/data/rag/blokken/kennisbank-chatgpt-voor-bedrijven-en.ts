// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (kennisbank-chatgpt-voor-bedrijven.ts), native EN.
// "stand september 2026" bijgewerkt naar "as of October 2026" bij het schrijven; de onderliggende
// feiten (abonnementsstructuur, Europese dataopslag alleen bij Enterprise) zijn ongewijzigd,
// bevestigd via webonderzoek op de eigen pagina's van OpenAI.
export default {
  "pagina": "/knowledge-base/chatgpt-for-business",
  "taal": "en",
  "type": "kennisbank",
  "onderwerp": "ChatGPT for business",
  "vraagkop": "What can ChatGPT for business do?",
  "onderBestaandeKop": true,
  "antwoord": "On the Business and Enterprise plans, OpenAI states that training on input and output stays off by default (as of October 2026); {{afzender}} advises Business or Enterprise for company data, not personal accounts. ChatGPT can confidently give a wrong answer; {{afzender}} advises that a human stays responsible for checking anything that goes to a customer, a regulator or leadership.",
  "vervolgvragen": [
    {
      "vraag": "Which ChatGPT for business plan offers European data residency?",
      "antwoord": "ChatGPT Enterprise, for new workspaces (EEA and Switzerland); ChatGPT Business has no European data residency (as of October 2026). On ChatGPT for business, data that goes to external services through connectors or web searches isn't covered by that, according to OpenAI.",
      "voorbehoud": "for new workspaces"
    },
    {
      "vraag": "Is a personal account suitable for company data on ChatGPT for business?",
      "antwoord": "No, for company data on ChatGPT for business the rule is: Business or Enterprise, not personal accounts. For Business and Enterprise, a data processing agreement with OpenAI can also be signed."
    }
  ],
  "bron": {
    "tekst": "article by {{afzender}}"
  },
  "externeFeiten": [
    {
      "zin": "On the Business and Enterprise plans, OpenAI states that training on input and output stays off by default (as of October 2026); Dave Willemstein advises Business or Enterprise for company data, not personal accounts.",
      "soort": "toolprijs"
    },
    {
      "zin": "ChatGPT can confidently give a wrong answer; Dave Willemstein advises that a human stays responsible for checking anything that goes to a customer, a regulator or leadership.",
      "soort": "toolprijs"
    },
    {
      "zin": "ChatGPT Enterprise, for new workspaces (EEA and Switzerland); ChatGPT Business has no European data residency (as of October 2026).",
      "soort": "toolprijs"
    },
    {
      "zin": "On ChatGPT for business, data that goes to external services through connectors or web searches isn't covered by that, according to OpenAI.",
      "soort": "toolprijs"
    },
    {
      "zin": "On personal plans, OpenAI can use conversations to improve its models unless the user turns that off themselves, and the organisation has no visibility or control over company data a staff member puts into a personal account.",
      "soort": "toolprijs"
    },
    {
      "zin": "For Business and Enterprise, a data processing agreement with OpenAI can also be signed.",
      "soort": "toolprijs"
    }
  ],
  "bijgewerkt": "2026-10",
  "markup": true
};
