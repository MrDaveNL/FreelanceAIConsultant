// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (ai-implementatie-stappenplan.ts), native EN. Checklist-pdf bestaat alleen in NL, dus geen vervolgvraag daarover.
export default {
  "pagina": "/ai-implementation/step-by-step-plan",
  "taal": "en",
  "type": "kennisbank",
  "onderwerp": "AI implementation step-by-step plan",
  "vraagkop": "Which steps belong in an AI implementation step-by-step plan?",
  "onderBestaandeKop": false,
  "antwoord": "An AI implementation step-by-step plan has 7 steps in a fixed order: setting the goal, choosing the use case, mapping data and systems, choosing build or buy, building and testing a pilot, organising adoption, and measuring, embedding and scaling. The order matters because each step determines the next, and adoption, management and measurement are prepared as early as the first step. The plan assumes a single application; anyone with several candidates who wants to settle the order first is advised to start with an [AI roadmap](/ai-consulting/ai-strategy) instead.",
  "vervolgvragen": [
    {
      "vraag": "Does an AI implementation step-by-step plan start with choosing a tool?",
      "antwoord": "No. An AI implementation step-by-step plan starts with a measurable problem, not with the technology. That goal comes with a baseline measurement and an owner in the business with budget and a mandate.",
      "onvoorwaardelijk": true
    },
    {
      "vraag": "What happens if the data-and-systems step in the AI implementation step-by-step plan gets skipped?",
      "antwoord": "Skipping the data-and-systems step in the AI implementation step-by-step plan means discovering at the pilot stage that the data doesn't hold up. Leaving adoption until after delivery means ending up with a working application nobody uses. The decisions are taken in a fixed order because each step determines the next."
    },
    {
      "vraag": "Does the AI implementation step-by-step plan cover the EU AI Act?",
      "antwoord": "Yes. Step 3 of the AI implementation step-by-step plan covers checking whether an application counts as high-risk under the EU AI Act, which applies if it's placed on the EU market or its output is used in the EU; under the Digital Omnibus package, most high-risk obligations apply from 2 December 2027.",
      "onvoorwaardelijk": true
    }
  ],
  "bron": {
    "tekst": "article by {{afzender}}; Digital Omnibus timeline per the European Commission"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
