// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (ai-agents-wat-is-een-ai-agent.ts), native EN.
export default {
  "pagina": "/ai-agents/what-is-an-ai-agent",
  "taal": "en",
  "type": "kennisbank",
  "onderwerp": "AI agent",
  "vraagkop": "What is an AI agent?",
  "onderBestaandeKop": true,
  "antwoord": "An AI agent is software that's given a goal by a human and then largely chooses its own route: gathering information, using other systems, assessing intermediate results and deciding the next step. Unlike a chatbot, which answers a question within a conversation, an AI agent carries out a task in several steps and can consult systems and sometimes change them. How much independence it gets is a setting the organisation chooses, from only preparing to working fully independently with checks after the fact.",
  "vervolgvragen": [
    {
      "vraag": "Can a mistake by an AI agent carry through without the final result looking wrong?",
      "antwoord": "Yes, that can happen: an AI agent takes several steps in sequence, so a mistake from an early step can carry through to the final result without it looking wrong. Logging and checkpoints matter more for an AI agent than for an ordinary AI application because of this.",
      "voorbehoud": "can"
    },
    {
      "vraag": "What forms of structure occur in an AI agent?",
      "antwoord": "Three forms exist, broadly: a single-purpose AI agent for one tightly scoped task, an AI agent within an AI workflow with a fixed process flow, and collaborating agents where a coordinating agent divides the work. For most organisations, the AI agent within a workflow is the sensible starting point.",
      "voorbehoud": "three forms exist"
    }
  ],
  "bron": {
    "tekst": "article by {{afzender}}"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
