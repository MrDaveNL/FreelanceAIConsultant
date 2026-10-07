// RAG-blok. Teksten geverifieerd (docs/rag-verificatie.md) en akkoord bevonden op 7 oktober 2026.
export default {
  "pagina": "/kennisbank/microsoft-copilot-voor-bedrijven",
  "type": "kennisbank",
  "onderwerp": "Microsoft Copilot",
  "vraagkop": "Wat is Microsoft Copilot?",
  "onderBestaandeKop": true,
  "antwoord": "Microsoft Copilot is de AI-assistent van Microsoft voor werk, die taalmodellen koppelt aan apps zoals Outlook, Teams, Word, Excel en PowerPoint en aan de mail, agenda, chats, vergaderingen en documenten daarin. Volgens Microsoft laat Copilot een gebruiker alleen gegevens van de organisatie zien waarvoor die gebruiker minstens leesrechten heeft; {{afzender}} adviseert daarom toegangsrechten op te ruimen voordat de betaalde licentie breed aangaat.",
  "vervolgvragen": [
    {
      "vraag": "Worden prompts en antwoorden gebruikt om de basismodellen achter Microsoft Copilot te trainen?",
      "antwoord": "Nee, volgens wat Microsoft toezegt in de privacydocumentatie van Microsoft Copilot (stand september 2026): prompts, antwoorden en gegevens die via Microsoft Graph worden opgehaald, worden niet gebruikt om de basismodellen te trainen."
    },
    {
      "vraag": "Welke data gebruikt Copilot Chat en welke de betaalde licentie van Microsoft Copilot?",
      "antwoord": "Copilot Chat is vooral een chat die antwoordt op basis van het web en van wat de gebruiker zelf aanlevert, en kan in Outlook ook met mailbox, agenda en vergaderingen werken. Pas met de betaalde licentie werkt Microsoft Copilot breed met de eigen bedrijfsinformatie: Copilot kan dan redeneren over de volle breedte van de werkdata, zoals mail, chats, vergaderingen, documenten en sites, voor zover de gebruiker daar toegang toe heeft.",
      "voorbehoud": "vooral"
    }
  ],
  "bron": {
    "tekst": "artikel van {{afzender}}"
  },
  "externeFeiten": [
    {
      "zin": "Microsoft Copilot is de AI-assistent van Microsoft voor werk, die taalmodellen koppelt aan apps zoals Outlook, Teams, Word, Excel en PowerPoint en aan de mail, agenda, chats, vergaderingen en documenten daarin.",
      "soort": "toolprijs"
    },
    {
      "zin": "Volgens Microsoft laat Copilot een gebruiker alleen gegevens van de organisatie zien waarvoor die gebruiker minstens leesrechten heeft; Dave Willemstein adviseert daarom toegangsrechten op te ruimen voordat de betaalde licentie breed aangaat.",
      "soort": "toolprijs"
    },
    {
      "zin": "Nee, volgens wat Microsoft toezegt in de privacydocumentatie van Microsoft Copilot (stand september 2026): prompts, antwoorden en gegevens die via Microsoft Graph worden opgehaald, worden niet gebruikt om de basismodellen te trainen.",
      "soort": "toolprijs"
    },
    {
      "zin": "Copilot Chat is vooral een chat die antwoordt op basis van het web en van wat de gebruiker zelf aanlevert, en kan in Outlook ook met mailbox, agenda en vergaderingen werken.",
      "soort": "toolprijs"
    },
    {
      "zin": "Pas met de betaalde licentie werkt Microsoft Copilot breed met de eigen bedrijfsinformatie: Copilot kan dan redeneren over de volle breedte van de werkdata, zoals mail, chats, vergaderingen, documenten en sites, voor zover de gebruiker daar toegang toe heeft.",
      "soort": "toolprijs"
    }
  ],
  "bijgewerkt": "2026-10"
};
