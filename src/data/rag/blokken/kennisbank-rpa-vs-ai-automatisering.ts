// RAG-blok. Teksten geverifieerd (docs/rag-verificatie.md) en akkoord bevonden op 7 oktober 2026.
export default {
  "pagina": "/kennisbank/rpa-vs-ai-automatisering",
  "type": "kennisbank",
  "onderwerp": "robotic process automation",
  "vraagkop": "Wat is robotic process automation (RPA)?",
  "onderBestaandeKop": true,
  "antwoord": "Robotic process automation is software die de handelingen van een medewerker in bestaande applicaties nabootst: door schermen klikken, gegevens overzetten tussen systemen en formulieren invullen volgens vaste regels. Het is vooral sterk bij regelgebaseerd, herhalend werk met gestructureerde input, maar de robot stopt of doet iets verkeerds als een scherm, een veldnaam of de volgorde van stappen verandert. AI automatisering kan wel omgaan met variatie en ongestructureerde informatie, en in de praktijk zit de meeste waarde in de combinatie: AI voor het deel dat begrip vraagt, RPA of een koppeling voor de vaste stappen.",
  "vervolgvragen": [
    {
      "vraag": "Is robotic process automation stabieler dan een API van de softwareleverancier?",
      "antwoord": "Meestal niet: kan de leverancier van de software een API leveren, dan is dat meestal stabieler dan robotic process automation met een robot die door schermen klikt. De vuistregel is robotic process automation te kiezen als het proces stabiel is, de input vast ligt en er geen goede koppeling mogelijk is.",
      "voorbehoud": "meestal stabieler"
    },
    {
      "vraag": "Heeft robotic process automation na de oplevering nog een eigenaar nodig?",
      "antwoord": "Ja. Bij robotic process automation moet de robot worden aangepast bij elke wijziging in de onderliggende applicaties, terwijl een AI-toepassing periodiek getoetst moet worden omdat de kwaliteit ongemerkt kan verschuiven. Beide vragen om een eigenaar na de oplevering, en die kosten horen in de business case.",
      "onvoorwaardelijk": true
    },
    {
      "vraag": "Bouwt de adviseur zelf robots voor robotic process automation of AI-toepassingen?",
      "antwoord": "Nee. De adviseur bouwt zelf geen robots voor robotic process automation of AI-toepassingen, maar helpt bepalen welke aanpak bij het proces past, helpt bij het selecteren van een partij en begeleidt de uitvoering vanuit de kant van de opdrachtgever. Voor wie moet kiezen tussen leveranciers die allemaal zeggen beide te kunnen, is een onafhankelijke {{dienst:vendor-review}} een manier om de claims naast elkaar te leggen.",
      "onvoorwaardelijk": true
    }
  ],
  "bron": {
    "tekst": "artikel van {{afzender}}"
  },
  "bijgewerkt": "2026-10"
};
