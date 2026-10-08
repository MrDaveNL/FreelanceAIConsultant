// RAG-blok. Teksten geverifieerd (docs/rag-verificatie.md) en akkoord bevonden op 7 oktober 2026.
export default {
  "pagina": "/ai-agents",
  "type": "dienstenoverzicht",
  "onderwerp": "AI agents",
  "vraagkop": "Wat kosten AI agents?",
  "onderBestaandeKop": true,
  "antwoord": "Voor AI agents bestaat geen vast bedrag: de spreiding loopt van een licentie op een bestaand platform tot een maatwerktraject met meerdere koppelingen, en de prijs hangt af van de koppelingen, schrijfrechten, het gebruik, de eisen aan controle en logging en de kwaliteit van de bronnen. Bij het onafhankelijk laten vergelijken van offertes van meerdere bouwpartijen past de {{dienst:vendor-review}} van {{afzender}}, die {{pricelc:vendor-review}} kost, {{voorwaarden}}.",
  "vervolgvragen": [
    {
      "vraag": "Is een offerte voor AI agents compleet als alleen de bouw erin staat?",
      "onvoorwaardelijk": true,
      "antwoord": "Nee. Bij AI agents is de bouw een eenmalige post en loopt het beheer door: modelkosten per gebruik, monitoring, periodieke tests, aanpassingen bij veranderende processen of systemen en tijd van een interne eigenaar. Het advies is om altijd een inschatting te vragen van de kosten over meerdere jaren, inclusief de kosten van een wissel van leverancier."
    },
    {
      "vraag": "Zijn AI agents binnen een bestaand softwareplatform goedkoper om mee te beginnen?",
      "voorbehoud": "vaak goedkoper",
      "antwoord": "Vaak wel: AI agents binnen het platform van een softwareleverancier zijn sneller en vaak goedkoper om mee te beginnen, maar de organisatie is gebonden aan wat dat platform kan en aan de prijsontwikkeling van de leverancier. Maatwerk geeft meer controle, met kosten voor beheer en doorontwikkeling."
    },
    {
      "vraag": "Bouwt de adviseur zelf AI agents?",
      "onvoorwaardelijk": true,
      "antwoord": "Nee. De adviseur bouwt zelf geen AI agents en helpt bepalen welke taak geschikt is, wat van een bouwpartij gevraagd moet worden en hoe de uitvoering bewaakt wordt. Partijen uit het partnernetwerk die de adviseur voorstelt, contracteert de opdrachtgever rechtstreeks, zonder marge voor de adviseur."
    }
  ],
  "bron": {
    "tekst": "tarieven en doorlooptijden van {{afzender}}",
    "href": "/tarieven"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
