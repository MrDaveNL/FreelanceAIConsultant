// Geplaatst pilotblok. Teksten op basis van de bestaande paginatekst en prijzen.ts; herzien op 6 oktober 2026
// na de verificatie (stelligheid van de bron, prijsvoorwaarden uit prijzen.ts). Nog niet opnieuw beoordeeld.
export default {
  "pagina": "/diensten/ai-readiness-assessment",
  "type": "dienst",
  "onderwerp": "AI Readiness Assessment",
  "vraagkop": "Wat levert het AI Readiness Assessment op en wat kost het?",
  "antwoord": "Het {{dienst:ai-readiness-assessment}} van {{afzender}} laat organisaties die AI overwegen maar nog geen richting hebben gekozen zien wat haalbaar is en wat eerst moet. Het resultaat is een readiness-score op strategie, data, technologie, mensen en governance, een gap-analyse en een 90-dagenplan. De doorlichting duurt {{timing:ai-readiness-assessment}} en kost {{pricelc:ai-readiness-assessment}}, als vaste prijs {{voorwaarden}}.",
  "vervolgvragen": [
    {
      "vraag": "Hoe lang duurt het AI Readiness Assessment?",
      "antwoord": "{{timing:ai-readiness-assessment}}. In die periode bestaat het {{dienst:ai-readiness-assessment}} uit een documentenanalyse, een datascan en 8 tot 12 interviews, gevolgd door de scoring, de prioritering en een eindsessie."
    },
    {
      "vraag": "Is de prijs van het AI Readiness Assessment een vaste prijs?",
      "antwoord": "Ja, voor de hele organisatie: het {{dienst:ai-readiness-assessment}} kost {{pricelc:ai-readiness-assessment}} als vaste prijs, en de eindpresentatie aan MT of board zit daarbij in. Voor een enkele business unit of een specifiek procesdomein ligt de investering lager. Het bedrag is {{voorwaarden}}."
    },
    {
      "vraag": "Wordt een Executive Briefing verrekend met het AI Readiness Assessment?",
      "antwoord": "Ja, als het {{dienst:ai-readiness-assessment}} binnen 60 dagen start: de {{dienst:executive-briefing}} kost {{pricelc:executive-briefing}} en wordt dan volledig verrekend."
    }
  ],
  "bron": {
    "tekst": "tarieven en doorlooptijden van {{afzender}}",
    "href": "/tarieven"
  },
  "bijgewerkt": "2026-10",
  "concept": true
};
