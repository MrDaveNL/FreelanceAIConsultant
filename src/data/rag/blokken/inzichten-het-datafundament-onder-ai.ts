// RAG-blok. Teksten geverifieerd (docs/rag-verificatie.md) en akkoord bevonden op 7 oktober 2026.
export default {
  "pagina": "/inzichten/het-datafundament-onder-ai",
  "type": "kennisbank",
  "onderwerp": "datafundament",
  "vraagkop": "Moet het datafundament eerst op orde zijn voordat een organisatie met AI begint?",
  "onderBestaandeKop": false,
  "antwoord": "Een perfect datafundament is niet nodig om met AI te beginnen: genoeg fundament voor één use case volstaat. De aanpak die in de praktijk werkt, kiest eerst één use case met duidelijke waarde en een eigenaar in de lijn, en lost alleen voor de bronnen van die use case de definities, de herkomst en de kwaliteit op. Na drie of vier use cases is er zo een fundament ontstaan uit gebruik, kleiner dan het ideaalplaatje en aanzienlijk betrouwbaarder.",
  "vervolgvragen": [
    {
      "vraag": "Is een centraal datawarehouse nodig voor het datafundament onder een eerste AI-use case?",
      "antwoord": "Vaak niet: voor het datafundament onder een eerste use case is een dagelijkse export vaak genoeg. Toegankelijkheid en infrastructuur zijn meestal het minst urgente dataprobleem en in de praktijk vaak het makkelijkst op te lossen, zeker voor één use case.",
      "voorbehoud": "vaak genoeg"
    },
    {
      "vraag": "Zijn er situaties waarin eerst het datafundament aanpakken wel het juiste antwoord is?",
      "antwoord": "Ja. Uitstellen is verstandig bij drie signalen rond het datafundament: de kernentiteit is niet eenduidig, de benodigde data wordt niet vastgelegd of de bron heeft geen eigenaar. Die signalen gaan over betekenis en eigenaarschap, niet over technologie.",
      "onvoorwaardelijk": true
    },
    {
      "vraag": "Hoeveel begrippen worden gedefinieerd om het definitieprobleem in het datafundament aan te pakken?",
      "antwoord": "Vijf tot tien: de aanpak voor het definitieprobleem in het datafundament is alleen de begrippen te definiëren die de use case raakt, niet het hele bedrijfsdatamodel. Volgens het artikel is dat twee weken werk in plaats van twee jaar."
    }
  ],
  "bron": {
    "tekst": "artikel van {{afzender}}"
  },
  "bijgewerkt": "2026-10"
};
