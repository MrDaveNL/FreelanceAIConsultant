// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (kennisbank-gemini-voor-bedrijven.ts), native EN.
// Prijzen (EUR, Google Workspace EU/UK-prijspagina) ongewijzigd overgenomen; "stand september 2026"
// bijgewerkt naar "as of October 2026" bij het schrijven, bevestigd via webonderzoek dat er geen
// recentere wijziging bekend is.
export default {
  "pagina": "/knowledge-base/gemini-for-business",
  "taal": "en",
  "type": "kennisbank",
  "onderwerp": "Gemini for business",
  "vraagkop": "What does an organisation get with Gemini for business in Google Workspace?",
  "onderBestaandeKop": false,
  "antwoord": "Gemini for business is Google's generative AI, included since January 2025 in the Business and Enterprise editions of Google Workspace without a separate AI licence; which features are available differs per edition. For organisations already running Google Workspace, Gemini is probably already part of the subscription; {{afzender}} advises focusing less on whether to buy it and more on how it's deployed and what's agreed about data. According to Google, customer data from Workspace isn't used as training material for models without the customer's permission or instruction (as of October 2026).",
  "vervolgvragen": [
    {
      "vraag": "Does Gemini for business work in Docs and Sheets on the Business Starter edition?",
      "voorbehoud": "per Google",
      "antwoord": "On Business Starter, Gemini for business isn't included in Docs and Sheets per Google, only in Gmail and the Gemini app (as of October 2026)."
    },
    {
      "vraag": "Can Gemini for business retrieve data a staff member doesn't have access to?",
      "voorbehoud": "per Google",
      "antwoord": "Gemini for business only retrieves data the user already has access to, per Google. Over-shared Drive folders do surface more quickly as a result, so cleaning up access rights belongs before a broad rollout."
    }
  ],
  "bron": {
    "tekst": "article by {{afzender}}"
  },
  "externeFeiten": [
    {
      "zin": "Gemini for business is Google's generative AI, included since January 2025 in the Business and Enterprise editions of Google Workspace without a separate AI licence; which features are available differs per edition.",
      "soort": "toolprijs"
    },
    {
      "zin": "For organisations already running Google Workspace, Gemini is probably already part of the subscription; Dave Willemstein advises focusing less on whether to buy it and more on how it's deployed and what's agreed about data.",
      "soort": "toolprijs"
    },
    {
      "zin": "According to Google, customer data from Workspace isn't used as training material for models without the customer's permission or instruction (as of October 2026).",
      "soort": "toolprijs"
    },
    {
      "zin": "On Business Starter, Gemini for business isn't included in Docs and Sheets per Google, only in Gmail and the Gemini app (as of October 2026).",
      "soort": "toolprijs"
    },
    {
      "zin": "Gemini for business only retrieves data the user already has access to, per Google.",
      "soort": "toolprijs"
    }
  ],
  "bijgewerkt": "2026-10",
  "markup": true
};
