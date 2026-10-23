// RAG-blok. Teksten geverifieerd (docs/rag-verificatie.md) en akkoord bevonden op 7 oktober 2026.
export default {
  "pagina": "/nl/ai-implementatie/advies",
  "type": "dienstenoverzicht",
  "onderwerp": "AI implementatie advies",
  "vraagkop": "Wat levert AI implementatie advies vooraf op en welke dienst past erbij?",
  "onderBestaandeKop": false,
  "antwoord": "AI implementatie advies van {{afzender}} legt vóór de bouw deze keuzes onderbouwd vast: de use case, bouwen of kopen, data en privacy, en de verandering die nodig is. Het resultaat is een beslisdocument met het besluit en de opdracht voor de bouwpartij; een concrete vraag over één toepassing past meestal bij afgebakend advies tegen een vaste prijs per opdracht. Wie eerst wil weten of de organisatie er breed klaar voor is, start met het {{dienst:ai-readiness-assessment}} van {{timing:ai-readiness-assessment}} voor {{pricelc:ai-readiness-assessment}}.",
  "vervolgvragen": [
    {
      "vraag": "Levert AI implementatie advies een dik rapport op?",
      "antwoord": "Nee. AI implementatie advies eindigt met een beslisdocument en geen dik rapport: welke use case, welke bouwkeuze, welke randvoorwaarden voor data en privacy, welke verandering nodig is en wat de bouwpartij moet opleveren om te slagen. Alle kaders en analyses zijn daarna van de opdrachtgever.",
      "onvoorwaardelijk": true
    },
    {
      "vraag": "Kijkt AI implementatie advies ook naar de privacykant?",
      "antwoord": "Ja. Bij AI implementatie advies wordt in kaart gebracht welke data de toepassing nodig heeft en wordt daarnaast naar de privacykant gekeken. Een DPIA is onder de AVG verplicht als de toepassing persoonsgegevens verwerkt met een grote kans op een hoog privacyrisico, en die vraag hoort aan het begin, niet vlak voor livegang.",
      "onvoorwaardelijk": true
    },
    {
      "vraag": "Hoe lang duurt het eerste gesprek over AI implementatie advies?",
      "antwoord": "Dertig minuten duurt de kennismaking over AI implementatie advies. De opdrachtgever vertelt waar de organisatie staat en hoort aan het eind wat de adviseur zou doen, ook als dat betekent dat de opdrachtgever deze adviseur niet nodig heeft."
    }
  ],
  "bron": {
    "tekst": "[tarieven en doorlooptijden](/nl/tarieven) van {{afzender}}; primaire bron: Verordening (EU) 2016/679 (AVG), EUR-Lex; Autoriteit Persoonsgegevens: Data protection impact assessment (DPIA) (peildatum 6 oktober 2026)"
  },
  "externeFeiten": [
    {
      "zin": "Een DPIA is onder de AVG verplicht als de toepassing persoonsgegevens verwerkt met een grote kans op een hoog privacyrisico, en die vraag hoort aan het begin, niet vlak voor livegang.",
      "soort": "wetgeving"
    }
  ],
  "bijgewerkt": "2026-10",
  "markup": true
};
