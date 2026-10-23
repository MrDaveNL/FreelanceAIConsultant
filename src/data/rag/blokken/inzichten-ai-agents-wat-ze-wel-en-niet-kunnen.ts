// RAG-blok. Teksten geverifieerd (docs/rag-verificatie.md) en akkoord bevonden op 7 oktober 2026.
export default {
  "pagina": "/nl/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen",
  "type": "kennisbank",
  "onderwerp": "AI-agents",
  "vraagkop": "Voor welke taken zijn AI-agents geschikt en waar gaat het mis?",
  "onderBestaandeKop": false,
  "antwoord": "AI-agents zijn geschikt voor voorbereidend werk waar een mens daarna over beslist, voor stappen die zonder schade terug te draaien zijn en voor taken met een harde, controleerbare eindtoets. Het gaat mis bij processen waarin een fout onopgemerkt doorwerkt, bij handelingen met externe gevolgen, bij lange ketens zonder tussentoets en bij situaties zonder volledig logboek. Hoeveel autonomie een agent krijgt, is een keuze van de organisatie die afhangt van wat een fout kost en wie die fout opmerkt.",
  "vervolgvragen": [
    {
      "vraag": "Met welk autonomieniveau beginnen AI-agents volgens het advies?",
      "voorbehoud": "vrijwel altijd",
      "antwoord": "Het advies is vrijwel altijd om AI-agents op niveau één of twee te laten beginnen, dus bij voorbereiden of voorstellen, ook als het model meer aankan. In die fase wordt duidelijk welke fouten werkelijk optreden, en die kennis is nodig om te bepalen waar de autonomie veilig omhoog kan."
    },
    {
      "vraag": "Is een bevestigingsstap nodig als AI-agents berichten naar klanten sturen of betalingen starten?",
      "voorbehoud": "standaard",
      "antwoord": "Ja, standaard: bij handelingen van AI-agents met externe gevolgen, zoals een bericht naar een klant, een bestelling of een betaling, hoort een bevestigingsstap. De kosten van een fout landen dan buiten de organisatie en zijn niet terug te nemen."
    },
    {
      "vraag": "Is een volledig logboek nodig bij het inzetten van AI-agents?",
      "antwoord": "Ja, logging is niet optioneel: zonder volledig spoor van de stappen van AI-agents is een fout niet te reconstrueren. Zonder logboek van de gezette stappen, de geraadpleegde bronnen en de reden voor een gekozen route is een incident niet te onderzoeken; voor gereguleerde processen is dat geen optie en voor de rest is het onverstandig."
    }
  ],
  "bron": {
    "tekst": "artikel van {{afzender}}"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
