// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (ai-implementatie-advies.ts), native EN; DPIA-bron vervangen door ICO (UK GDPR).
export default {
  "pagina": "/ai-implementation/consulting",
  "taal": "en",
  "type": "dienstenoverzicht",
  "onderwerp": "AI implementation consulting",
  "vraagkop": "What does upfront AI implementation consulting deliver, and which service fits?",
  "onderBestaandeKop": false,
  "antwoord": "AI implementation consulting from {{afzender}} settles these choices in writing before the build starts: the use case, build or buy, data and privacy, and the change that's needed. The result is a decision document with the decision and the brief for the delivery partner; a concrete question about one application usually fits scoped advice at a fixed price per assignment. Anyone who wants to know first whether the organisation is broadly ready starts with {{dienst:ai-readiness-assessment}}, which takes {{timing:ai-readiness-assessment}}, for {{pricelc:ai-readiness-assessment}}.",
  "vervolgvragen": [
    {
      "vraag": "Does AI implementation consulting produce a thick report?",
      "antwoord": "No. AI implementation consulting ends with a decision document, not a thick report: which use case, which build choice, which conditions for data and privacy, what change is needed, and what the delivery partner needs to deliver to succeed. All the frameworks and analysis are then the client's to keep.",
      "onvoorwaardelijk": true
    },
    {
      "vraag": "Does AI implementation consulting also look at the privacy side?",
      "antwoord": "Yes. AI implementation consulting maps out what data the application needs and also looks at the privacy side. A data protection impact assessment is required under UK GDPR if the application processes personal data with a significant likelihood of high privacy risk, and that question belongs at the start, not just before go-live.",
      "onvoorwaardelijk": true
    },
    {
      "vraag": "How long does the first conversation about AI implementation consulting take?",
      "antwoord": "Thirty minutes is the length of the introduction call for AI implementation consulting. The client explains where the organisation stands and hears at the end what the adviser would do, even if that means the client doesn't need this adviser."
    }
  ],
  "bron": {
    "tekst": "{{afzender}}'s [rates and timelines](/pricing); primary source: UK GDPR; Information Commissioner's Office: Data protection impact assessments (as of 6 October 2026)",
    "href": "/pricing"
  },
  "externeFeiten": [
    {
      "zin": "A data protection impact assessment is required under UK GDPR if the application processes personal data with a significant likelihood of high privacy risk, and that question belongs at the start, not just before go-live.",
      "soort": "wetgeving"
    }
  ],
  "bijgewerkt": "2026-10",
  "markup": true
};
