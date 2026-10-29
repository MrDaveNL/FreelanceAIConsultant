// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (ai-workshop.ts), native EN.
export default {
  "pagina": "/ai-workshop",
  "taal": "en",
  "type": "dienstenoverzicht",
  "onderwerp": "AI workshop",
  "vraagkop": "Which AI workshop suits which team, and how is the price set?",
  "onderBestaandeKop": false,
  "antwoord": "{{afzender}} delivers workshops and training in-company and tailored to the team; an AI workshop is built around three to five concrete tasks per role, using material from the team's own practice. The most common starting points are a management introduction, hands-on work with ChatGPT and Copilot, AI literacy, and an AI strategy workshop. Each assignment gets a fixed price, agreed during the intake and confirmed in writing beforehand.",
  "vervolgvragen": [
    {
      "vraag": "Which session suits a board or supervisory board?",
      "antwoord": "The {{dienst:executive-briefing}} is the suitable format for a board or supervisory board: a fixed session with a decision agenda and oversight questions. The Executive Briefing has a fixed price, including preparation for the sector and set out in the proposal. The management workshop is more broadly usable, for example for line managers or a management team."
    },
    {
      "vraag": "Can an AI workshop also be delivered online?",
      "antwoord": "Yes, but hands-on work and discussion get off to a slower start in an online AI workshop. In-company works best, because participants can then practise with their own equipment, access and material.",
      "voorbehoud": "slower"
    },
    {
      "vraag": "Do licences and a single training afternoon lead to structural AI use?",
      "antwoord": "Rarely: handing out licences and organising a single training afternoon rarely leads to structural use, and an AI workshop isn't an adoption strategy. That's why an AI workshop is built around three to five concrete tasks per role, so a participant knows where to start the next morning.",
      "voorbehoud": "rarely"
    }
  ],
  "bron": {
    "tekst": "rates and typical timelines from {{afzender}}",
    "href": "/pricing"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
