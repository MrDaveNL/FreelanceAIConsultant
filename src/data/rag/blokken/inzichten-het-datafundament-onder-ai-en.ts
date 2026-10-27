// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (inzichten-het-datafundament-onder-ai.ts), native EN.
export default {
  "pagina": "/insights/the-data-foundation-under-ai",
  "taal": "en",
  "type": "kennisbank",
  "onderwerp": "data foundation",
  "vraagkop": "Does the data foundation need to be in order before an organisation starts with AI?",
  "onderBestaandeKop": false,
  "antwoord": "A perfect data foundation isn't needed to start with AI: enough of a foundation for one use case is sufficient. The approach that works in practice starts with one use case that has clear value and an owner in the business, and fixes the definitions, lineage and quality only for that use case's own data sources. After three or four use cases, a foundation emerges that has grown from real use, smaller than the ideal picture and considerably more reliable.",
  "vervolgvragen": [
    {
      "vraag": "Is a central data warehouse needed for the data foundation under a first AI use case?",
      "voorbehoud": "often enough",
      "antwoord": "Often not: for the data foundation under a first use case, a daily export is often enough. Accessibility and infrastructure are usually the least urgent data problem, and in practice often the easiest to solve, especially for one use case."
    },
    {
      "vraag": "Are there situations where tackling the data foundation first is the right answer?",
      "antwoord": "Yes. Delaying is wise with three signals around the data foundation: the core entity isn't clearly defined, the data you need isn't being captured, or the source has no owner. Those signals are about meaning and ownership, not technology.",
      "onvoorwaardelijk": true
    },
    {
      "vraag": "How many terms are defined to tackle the definitions problem in the data foundation?",
      "antwoord": "Five to ten: the approach to the definitions problem in the data foundation is to define only the terms that the use case touches, not the whole company data model. According to the article, that's two weeks of work instead of two years."
    }
  ],
  "bron": {
    "tekst": "article by {{afzender}}"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
