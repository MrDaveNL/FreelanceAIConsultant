// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (kennisbank-rpa-vs-ai-automatisering.ts), native EN.
export default {
  "pagina": "/knowledge-base/rpa-vs-ai-automation",
  "taal": "en",
  "type": "kennisbank",
  "onderwerp": "robotic process automation",
  "vraagkop": "What is robotic process automation (RPA)?",
  "onderBestaandeKop": true,
  "antwoord": "Robotic process automation is software that mimics a staff member's actions in existing applications: clicking through screens, moving data between systems and filling in forms according to fixed rules. It's strongest for rule-based, repetitive work with structured input, but the robot stops or does something wrong if a screen, a field name or the order of steps changes. AI automation can handle variation and unstructured information, and in practice most value sits in combining the two: AI for the part that needs understanding, RPA or an integration for the fixed steps.",
  "vervolgvragen": [
    {
      "vraag": "Is robotic process automation more stable than an API from the software vendor?",
      "antwoord": "Usually not: if the software vendor can offer an API, that's usually more stable than robotic process automation with a robot clicking through screens. The rule of thumb is to choose robotic process automation when the process is stable, the input is fixed, and no good integration is possible.",
      "voorbehoud": "usually more stable"
    },
    {
      "vraag": "Does robotic process automation need an owner after go-live?",
      "antwoord": "Yes. Robotic process automation has to be adjusted every time the underlying applications change, while an AI application needs periodic testing because quality can drift unnoticed. That upkeep means both need an owner once they're live, and the cost of that belongs in the business case.",
      "onvoorwaardelijk": true
    },
    {
      "vraag": "Does the adviser build robots for robotic process automation or AI applications?",
      "antwoord": "No. The adviser doesn't build robots for robotic process automation or AI applications, but helps decide which approach fits the process, helps select a provider, and guides delivery from the client's side. For anyone choosing between vendors who all claim to do both, an independent {{dienst:vendor-review}} is a way to set their claims side by side.",
      "onvoorwaardelijk": true
    }
  ],
  "bron": {
    "tekst": "article by {{afzender}}"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
