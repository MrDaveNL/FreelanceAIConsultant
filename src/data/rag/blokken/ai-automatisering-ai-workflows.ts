// RAG-blok. Teksten geverifieerd (docs/rag-verificatie.md) en akkoord bevonden op 7 oktober 2026.
export default {
  "pagina": "/ai-automatisering/ai-workflows",
  "type": "kennisbank",
  "onderwerp": "AI workflow",
  "vraagkop": "Wat is een AI workflow?",
  "onderBestaandeKop": true,
  "antwoord": "Een AI workflow is een geautomatiseerde keten met een vooraf vastgelegde route, waarin een AI-model alleen de stappen doet die gewone regels niet aankunnen, zoals vrije tekst in een e-mail begrijpen of gegevens uit een pdf halen. De keten bestaat bijna altijd uit dezelfde bouwstenen: trigger, ophalen, AI-stap, controle, actie en logging. Een AI workflow past bij een proces dat steeds dezelfde stappen kent en waarvan elke uitkomst te verklaren moet zijn; pas als de stappen per geval echt verschillen en een fout omkeerbaar is, komt een AI agent in beeld.",
  "vervolgvragen": [
    {
      "vraag": "Bepaalt het AI-model in een AI workflow zelf welke stappen het zet?",
      "onvoorwaardelijk": true,
      "antwoord": "Nee. In een AI workflow ligt de route vooraf vast en vult het AI-model alleen een stap in. Een AI agent krijgt daarentegen een doel en kiest zelf welke stappen en tools hij gebruikt."
    },
    {
      "vraag": "Wie bouwt een AI workflow?",
      "antwoord": "Een eenvoudige stroom van een AI workflow kan een handige collega in een no-code-platform bouwen. Zodra er koppelingen met kernsystemen of gevoelige gegevens bij komen, is een IT-team of partner nodig, en die partner contracteert de opdrachtgever rechtstreeks."
    },
    {
      "vraag": "Hoeveel stappen telt het implementeren van een AI workflow?",
      "voorbehoud": "in de praktijk",
      "antwoord": "In de praktijk gaat het implementeren van een AI workflow in vijf stappen: één proces kiezen en vooraf meten, de route uittekenen met de mensen die het werk nu doen, bepalen wie bouwt, testen met echte voorbeelden en het beheer regelen vóór livegang. Bij het testen hoort dat de AI workflow een paar weken naast het huidige proces loopt."
    }
  ],
  "bron": {
    "tekst": "artikel van {{afzender}}"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
