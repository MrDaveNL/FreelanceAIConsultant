// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (inzichten-ai-agents-wat-ze-wel-en-niet-kunnen.ts), native EN.
export default {
  "pagina": "/insights/what-ai-agents-can-and-cannot-do",
  "taal": "en",
  "type": "kennisbank",
  "onderwerp": "AI agents",
  "vraagkop": "What tasks are AI agents suited to, and where does it go wrong?",
  "onderBestaandeKop": false,
  "antwoord": "AI agents are suited to preparatory work that a person decides on afterwards, to steps that can be undone without damage, and to tasks with a hard, checkable final test. It goes wrong in processes where a mistake propagates unnoticed, in actions with external consequences, in long chains without an intermediate check, and in situations without a complete log. How much autonomy an agent gets is a choice the organisation makes, depending on what a mistake costs and who notices it.",
  "vervolgvragen": [
    {
      "vraag": "What autonomy level does the advice say AI agents should start at?",
      "voorbehoud": "almost always",
      "antwoord": "The advice is almost always to let AI agents start at level one or two, that is, preparing or proposing, even if the model can handle more. That phase makes clear which mistakes actually occur, and that knowledge is needed to determine where autonomy can safely increase."
    },
    {
      "vraag": "Is a confirmation step needed when AI agents send messages to customers or initiate payments?",
      "voorbehoud": "as standard",
      "antwoord": "Yes, as standard: actions by AI agents with external consequences, such as a message to a customer, an order or a payment, need a confirmation step. The cost of a mistake then lands outside the organisation and cannot be taken back."
    },
    {
      "vraag": "Is a complete log needed when deploying AI agents?",
      "antwoord": "Yes, logging is not optional: without a complete trail of the steps AI agents took, a mistake cannot be reconstructed. Without a log of the steps taken, the sources consulted and the reason for a chosen route, an incident cannot be investigated; for regulated processes that is not an option, and for everything else it is unwise."
    }
  ],
  "bron": {
    "tekst": "article by {{afzender}}"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
