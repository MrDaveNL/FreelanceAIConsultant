// RAG-blok. Teksten geverifieerd (docs/rag-verificatie.md) en akkoord bevonden op 7 oktober 2026.
export default {
  "pagina": "/nl/ai-consultancy",
  "type": "dienstenoverzicht",
  "onderwerp": "AI consultancy",
  "vraagkop": "Wat kost AI consultancy?",
  "onderBestaandeKop": true,
  "antwoord": "AI consultancy van {{afzender}} wordt geleverd in vaste pakketten, niet tegen een open uurtarief: een vaste projectprijs voor een afgebakend traject, of een vast maandbedrag voor de {{dienst:fractional-ai-lead}}. Het {{dienst:ai-readiness-assessment}} duurt {{timing:ai-readiness-assessment}}, de {{dienst:ai-strategy-sprint}} duurt {{timing:ai-strategy-sprint}}, en de {{dienst:fractional-ai-lead}} is een doorlopende rol. Afgebakend advies en second opinions krijgen een vaste prijs in het voorstel; alle voorstellen zijn {{voorwaarden}}.",
  "vervolgvragen": [
    {
      "vraag": "Wat kost AI consultancy voor een directie of raad van commissarissen?",
      "antwoord": "De {{dienst:executive-briefing}} kost {{pricelc:executive-briefing}} en is bedoeld voor directie en raad van commissarissen die hun toezichtrol op AI willen invullen. De {{dienst:executive-briefing}} is een {{timing:executive-briefing}}, en wordt voorbereid op de sector van de organisatie."
    },
    {
      "vraag": "Kan het AI Readiness Assessment bij AI consultancy ook voor één afdeling?",
      "onvoorwaardelijk": true,
      "antwoord": "Ja. Het {{dienst:ai-readiness-assessment}} kan ook voor één afdeling of één procesdomein worden uitgevoerd. Die variant is korter en vraagt een lagere investering."
    },
    {
      "vraag": "Heeft de adviseur bij AI consultancy belang bij een leverancier of een grotere scope?",
      "onvoorwaardelijk": true,
      "antwoord": "Nee. De adviseur bouwt en verkoopt bij AI consultancy zelf geen software, AI-agents of implementaties en heeft daardoor geen belang bij een grotere scope of bij een bepaalde leverancier. Het bouwen doet het eigen team of een partner die de opdrachtgever rechtstreeks contracteert."
    }
  ],
  "bron": {
    "tekst": "tarieven en doorlooptijden van {{afzender}}",
    "href": "/nl/tarieven"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
