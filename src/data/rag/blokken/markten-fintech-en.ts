// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (markten-fintech.ts), native EN.
export default {
  "pagina": "/markets/fintech",
  "taal": "en",
  "type": "kennisbank",
  "onderwerp": "AI in fintech",
  "vraagkop": "Where does AI in fintech pay off most, and which rules come into play?",
  "onderBestaandeKop": false,
  "antwoord": "In AI in fintech, document processing and flagging tend to deliver the fastest wins: AI is good at pulling data out of documents, while in most processes the judgement belongs with a person. Credit scoring of individuals and risk assessment or pricing for life and health insurance are high-risk under the AI Act, with rules from 2 December 2027 (as of September 2026). Financial institutions have {{dienst:ai-readiness-assessment}} to prioritise, {{dienst:vendor-review}} to choose, {{dienst:ai-due-diligence}} to assess and {{dienst:fractional-ai-lead}} to embed it.",
  "vervolgvragen": [
    {
      "vraag": "Does the judgement in AI in fintech stay with a person?",
      "voorbehoud": "in most processes",
      "antwoord": "In AI in fintech, the judgement belongs with a person in most processes, who confirms or corrects the system's proposals. Every confirmation and correction produces an audit trail and a measurable quality loop."
    },
    {
      "vraag": "Is the AI Act's delay a reason to wait on requirements for AI in fintech?",
      "onvoorwaardelijk": true,
      "antwoord": "No. A credit model bought or built now will likely still be in use once the high-risk rules take effect on 2 December 2027, so those requirements belong in AI in fintech's design and selection now. {{dienst:vendor-review}} records the choice of vendor or build partner in a way procurement, compliance and audit can work with."
    },
    {
      "vraag": "How does an AI service from an external vendor relate to DORA in AI in fintech?",
      "voorbehoud": "where DORA applies",
      "antwoord": "Where DORA applies, an AI service a financial institution buys in AI in fintech counts in practice among the third-party ICT services DORA requires in the information register, including sub-outsourcing. DORA has applied since 17 January 2025 and targets the financial institution; the precise classification is something to have checked by the compliance or legal function. Exit path, dependency and incident arrangements belong in the selection of an external AI service."
    }
  ],
  "bron": {
    "tekst": "article by {{afzender}}; primary source: Regulation (EU) 2024/1689 (AI Act), EUR-Lex; Regulation (EU) 2026/1744 (Digital Omnibus on AI), Official Journal L of 24.7.2026, EUR-Lex; Regulation (EU) 2022/2554 (DORA), EUR-Lex; FCA, PS21/3 (Building operational resilience); Bank of England/PRA, SS1/21 (as of 6 October 2026)"
  },
  "externeFeiten": [
    {
      "zin": "Credit scoring of individuals and risk assessment or pricing for life and health insurance are high-risk under the AI Act, with rules from 2 December 2027 (as of September 2026).",
      "soort": "wetgeving"
    },
    {
      "zin": "No. A credit model bought or built now will likely still be in use once the high-risk rules take effect on 2 December 2027, so those requirements belong in AI in fintech's design and selection now.",
      "soort": "wetgeving"
    },
    {
      "zin": "Where DORA applies, an AI service a financial institution buys in AI in fintech counts in practice among the third-party ICT services DORA requires in the information register, including sub-outsourcing.",
      "soort": "wetgeving"
    }
  ],
  "bijgewerkt": "2026-10",
  "markup": true
};
