// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (markten.ts), native EN.
export default {
  "pagina": "/markets",
  "taal": "en",
  "type": "kennisbank",
  "onderwerp": "AI by industry",
  "vraagkop": "What differs in AI by industry, and what stays the same in every sector?",
  "onderBestaandeKop": false,
  "antwoord": "In AI by industry, the questions are the same in every sector: deciding which applications get priority, choosing a vendor or build partner, and keeping the application in hand after go-live. The differences sit in the rules, the sensitivity of the data, and the cost of error, and those decide how heavily each step gets weighted.",
  "vervolgvragen": [
    {
      "vraag": "When do the rules for high-risk applications apply in AI by industry?",
      "antwoord": "From 2 December 2027, the rules for high-risk applications apply following the Digital Omnibus, and from 2 August 2028 for AI in products such as medical devices; those rules have been postponed. In AI by industry, the AI Act lays a layer over sector rules, with obligations that vary by application."
    },
    {
      "vraag": "Are there case studies for every sector in AI by industry?",
      "onvoorwaardelijk": true,
      "antwoord": "No. There are case studies from financial services, retail, manufacturing and professional services in the [cases overview](/cases). For healthcare, marketing, automotive, education, aviation and the public sector, the AI by industry pages describe the questions and rules, not results of their own."
    },
    {
      "vraag": "What does the AI Readiness Assessment show, regardless of sector?",
      "antwoord": "{{dienst:ai-readiness-assessment}} gives a clear-eyed picture of where an organisation stands in short order, regardless of sector."
    }
  ],
  "bron": {
    "tekst": "article by {{afzender}}; primary source: Regulation (EU) 2026/1744 (Digital Omnibus on AI), amended Article 113 AI Act, EUR-Lex; Regulation (EU) 2024/1689 (AI Act), Annex I, EUR-Lex; European Commission, AI Omnibus enters into force (27 July 2026) (as of 6 October 2026)"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
