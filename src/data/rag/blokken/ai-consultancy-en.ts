// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (ai-consultancy.ts), native EN.
export default {
  "pagina": "/ai-consulting",
  "taal": "en",
  "type": "dienstenoverzicht",
  "onderwerp": "AI consulting",
  "vraagkop": "What does AI consulting cost?",
  "onderBestaandeKop": true,
  "antwoord": "AI consulting from {{afzender}} is delivered in fixed packages, not against an open hourly rate: a fixed project fee for a scoped engagement, or a fixed monthly fee for {{dienst:fractional-ai-lead}}. {{dienst:ai-readiness-assessment}} takes {{timing:ai-readiness-assessment}}, {{dienst:ai-strategy-sprint}} takes {{timing:ai-strategy-sprint}}, and {{dienst:fractional-ai-lead}} is an ongoing role. Scoped advice and second opinions get a fixed price in the proposal; all proposals are {{voorwaarden}}.",
  "vervolgvragen": [
    {
      "vraag": "What does AI consulting cost for a leadership team or board?",
      "antwoord": "{{dienst:executive-briefing}} is priced as {{pricelc:executive-briefing}} and is aimed at leadership teams and boards that want to fulfil their oversight role on AI. {{dienst:executive-briefing}} takes {{timing:executive-briefing}} and is prepared for the organisation's sector."
    },
    {
      "vraag": "Can the AI Readiness Assessment within AI consulting also be scoped to one department?",
      "onvoorwaardelijk": true,
      "antwoord": "Yes. {{dienst:ai-readiness-assessment}} can also be carried out for a single department or process area. That variant is shorter and needs a smaller investment."
    },
    {
      "vraag": "Does the adviser have a stake in a vendor or a bigger scope within AI consulting?",
      "onvoorwaardelijk": true,
      "antwoord": "No. The adviser doesn't build or sell software, AI agents or implementations within AI consulting, and therefore has no stake in a bigger scope or a particular vendor. The build is done by the client's own team or by a partner the client contracts directly."
    }
  ],
  "bron": {
    "tekst": "{{afzender}}'s rates and typical timelines",
    "href": "/pricing"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
