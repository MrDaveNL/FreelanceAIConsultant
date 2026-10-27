// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (kennisbank-claude-voor-bedrijven.ts), native EN.
// "stand september 2026" bijgewerkt naar "as of October 2026"; onderliggende feiten (Team/Enterprise-
// structuur, dataopslag in de VS, Foundry nog niet in Europa) ongewijzigd, bevestigd via webonderzoek.
export default {
  "pagina": "/knowledge-base/claude-for-business",
  "taal": "en",
  "type": "kennisbank",
  "onderwerp": "Claude for business",
  "vraagkop": "Which plan fits Claude for business, and where is the data stored?",
  "onderBestaandeKop": false,
  "antwoord": "Claude for business is Anthropic's AI assistant on a business plan: Team for 2 to 150 users, or Enterprise which adds SCIM, role-based access and audit logs among other things. On Team and Enterprise, Anthropic doesn't train on the content by default, and the data is stored in the US according to Anthropic (as of October 2026); {{afzender}} advises only the business plans for use with company data. Anyone who chooses Claude often does so because of long documents, writing work, or delegating tasks.",
  "vervolgvragen": [
    {
      "vraag": "Can Claude for business data be stored in Europe in the app?",
      "voorbehoud": "currently",
      "antwoord": "Currently, European data residency for Claude for business is only possible through the cloud platforms, not in the app (as of October 2026). On the business plans, the data is stored in the US according to Anthropic. For European data storage and processing, Anthropic points to the regional endpoints of AWS Bedrock and Google Vertex, a route for your own applications through the API and not for the claude.ai app."
    }
  ],
  "bron": {
    "tekst": "article by {{afzender}}"
  },
  "externeFeiten": [
    {
      "zin": "Claude for business is Anthropic's AI assistant on a business plan: Team for 2 to 150 users, or Enterprise which adds SCIM, role-based access and audit logs among other things.",
      "soort": "toolprijs"
    },
    {
      "zin": "On Team and Enterprise, Anthropic doesn't train on the content by default, and the data is stored in the US according to Anthropic (as of October 2026); Dave Willemstein advises only the business plans for use with company data.",
      "soort": "toolprijs"
    },
    {
      "zin": "Currently, European data residency for Claude for business is only possible through the cloud platforms, not in the app (as of October 2026).",
      "soort": "toolprijs"
    },
    {
      "zin": "On the business plans, the data is stored in the US according to Anthropic.",
      "soort": "toolprijs"
    },
    {
      "zin": "For European data storage and processing, Anthropic points to the regional endpoints of AWS Bedrock and Google Vertex, a route for your own applications through the API and not for the claude.ai app.",
      "soort": "toolprijs"
    },
    {
      "zin": "Pro and Max are personal plans where model training on conversations is on until the user turns it off themselves, and central admin is missing.",
      "soort": "toolprijs"
    },
    {
      "zin": "For Claude for business with company data, only Team and Enterprise are suitable (as of October 2026).",
      "soort": "toolprijs"
    }
  ],
  "bijgewerkt": "2026-10",
  "markup": true
};
