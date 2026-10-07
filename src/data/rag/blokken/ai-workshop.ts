// RAG-blok. Teksten geverifieerd (docs/rag-verificatie.md) en akkoord bevonden op 7 oktober 2026.
export default {
  "pagina": "/ai-workshop",
  "type": "dienstenoverzicht",
  "onderwerp": "AI workshop",
  "vraagkop": "Welke AI workshop past bij welk team en hoe wordt de prijs bepaald?",
  "onderBestaandeKop": false,
  "antwoord": "{{afzender}} geeft workshops en trainingen incompany en op maat; een AI workshop is opgebouwd rond drie tot vijf concrete taken per rol, met materiaal uit de eigen praktijk van het team. De meest voorkomende vertrekpunten zijn een introductie voor management, hands-on werken met ChatGPT en Copilot, AI-geletterdheid en een workshop AI-strategie. Elke opdracht krijgt een vaste prijs, die in de intake wordt besproken en vooraf op papier staat.",
  "vervolgvragen": [
    {
      "vraag": "Welke sessie past bij een directie of raad van commissarissen?",
      "antwoord": "De {{dienst:executive-briefing}} is voor directie of raad van commissarissen de passende vorm: een vaste sessie met een beslisagenda en toezichtvragen. De Executive Briefing heeft een vaste prijs van {{pricelc:executive-briefing}}, inclusief voorbereiding op de sector. Breder inzetbaar is de managementworkshop, bijvoorbeeld voor lijnmanagers of een MT."
    },
    {
      "vraag": "Kan een AI workshop ook online worden gegeven?",
      "antwoord": "Ja, maar bij een online AI workshop komen hands-on werk en het onderlinge gesprek moeizamer op gang. Incompany werkt het best, omdat deelnemers dan met hun eigen apparatuur, toegang en materiaal kunnen oefenen.",
      "voorbehoud": "moeizamer"
    },
    {
      "vraag": "Leiden licenties en één trainingsmiddag tot structureel gebruik van AI?",
      "antwoord": "Zelden: licenties uitdelen en één trainingsmiddag organiseren leidt zelden tot structureel gebruik, en een AI workshop is geen adoptiestrategie. Daarom is een AI workshop opgebouwd rond drie tot vijf concrete taken per rol, zodat een deelnemer de volgende ochtend weet waar te beginnen.",
      "voorbehoud": "zelden"
    }
  ],
  "bron": {
    "tekst": "tarieven en doorlooptijden van {{afzender}}",
    "href": "/tarieven"
  },
  "bijgewerkt": "2026-10"
};
