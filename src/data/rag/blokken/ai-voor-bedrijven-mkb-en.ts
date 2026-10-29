// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (ai-voor-bedrijven-mkb.ts), native EN.
// Geen Nederlandse CBS-cijfers of subsidieregelingen in dit blok (die staan niet in het NL-blok
// zelf, alleen in de paginatekst), dus geen aanpassingen op dat vlak nodig.
export default {
  "pagina": "/ai-for-business/sme",
  "taal": "en",
  "type": "kennisbank",
  "onderwerp": "AI for small business",
  "vraagkop": "How do you start with AI for small business without a big budget?",
  "onderBestaandeKop": false,
  "antwoord": "AI for small business starts with one task that comes up often, costs a lot of time and already has a fixed check step, such as quotes or sorting email, using software the business already has or a business licence on an AI assistant. After setting a baseline and agreeing a few ground rules on tools and data, a four-week test follows in the real work, after which the measurement decides whether the business carries on, adjusts or stops. For smaller businesses, {{dienst:executive-briefing}} offers a lighter entry point: one half-day in total, including the three-hour session, for {{pricelc:executive-briefing}}.",
  "vervolgvragen": [
    {
      "vraag": "Do the AI Readiness Assessment and the AI Strategy Sprint suit every budget for AI for small business?",
      "antwoord": "No. The {{dienst:ai-readiness-assessment}} and the {{dienst:ai-strategy-sprint}} both have a fixed price agreed upfront: that suits a mid-sized business with several departments and a concrete investment question. For a ten-person company, those packages are often too much.",
      "onvoorwaardelijk": true
    },
    {
      "vraag": "Is a chatbot that handles customers on its own a good starting point for AI for small business?",
      "antwoord": "No. The advice for AI for small business in customer service is not to start with that kind of chatbot, but behind the scenes: sorting emails, draft replies a staff member checks, and summarising customer histories. A customer-facing assistant for simple questions is a logical next step only once that's running well.",
      "onvoorwaardelijk": true
    }
  ],
  "bron": {
    "tekst": "article by {{afzender}}"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
