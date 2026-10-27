// EN RAG-blok, fase 3. Zelfde feiten als het NL-blok (kennisbank-microsoft-copilot-voor-bedrijven.ts),
// native EN. "stand september 2026" bijgewerkt naar "as of October 2026"; prijzen en licentienamen
// bevestigd via webonderzoek (Microsoft Learn, bijgewerkt 19 oktober 2026): de naamgeving "Microsoft
// Copilot" is inmiddels de huidige officiele naam, niet meer "Microsoft 365 Copilot".
export default {
  "pagina": "/knowledge-base/microsoft-copilot-for-business",
  "taal": "en",
  "type": "kennisbank",
  "onderwerp": "Microsoft Copilot",
  "vraagkop": "What is Microsoft Copilot?",
  "onderBestaandeKop": true,
  "antwoord": "Microsoft Copilot is Microsoft's AI assistant for work, connecting language models to apps such as Outlook, Teams, Word, Excel and PowerPoint and to the mail, calendar, chats, meetings and documents in them. According to Microsoft, Copilot only shows a user organisational data they have at least read access to; {{afzender}} advises cleaning up access rights before the paid licence goes out broadly.",
  "vervolgvragen": [
    {
      "vraag": "Are prompts and responses used to train the models behind Microsoft Copilot?",
      "antwoord": "No, according to what Microsoft commits to in Microsoft Copilot's privacy documentation (as of October 2026): prompts, responses and data retrieved through Microsoft Graph aren't used to train the underlying models."
    },
    {
      "vraag": "Which data does Copilot Chat use, and which does the paid Microsoft Copilot licence use?",
      "antwoord": "Copilot Chat is mainly a chat that answers based on the web and on what the user provides themselves, and in Outlook can also work with mailbox, calendar and meetings. Only with the paid licence does Microsoft Copilot work broadly with a company's own information: Copilot can then reason across the full breadth of work data, such as mail, chats, meetings, documents and sites, as far as the user has access to them.",
      "voorbehoud": "mainly"
    }
  ],
  "bron": {
    "tekst": "article by {{afzender}}"
  },
  "externeFeiten": [
    {
      "zin": "Microsoft Copilot is Microsoft's AI assistant for work, connecting language models to apps such as Outlook, Teams, Word, Excel and PowerPoint and to the mail, calendar, chats, meetings and documents in them.",
      "soort": "toolprijs"
    },
    {
      "zin": "According to Microsoft, Copilot only shows a user organisational data they have at least read access to; Dave Willemstein therefore advises cleaning up access rights before the paid licence goes out broadly.",
      "soort": "toolprijs"
    },
    {
      "zin": "No, according to what Microsoft commits to in Microsoft Copilot's privacy documentation (as of October 2026): prompts, responses and data retrieved through Microsoft Graph aren't used to train the underlying models.",
      "soort": "toolprijs"
    },
    {
      "zin": "Copilot Chat is mainly a chat that answers based on the web and on what the user provides themselves, and in Outlook can also work with mailbox, calendar and meetings.",
      "soort": "toolprijs"
    },
    {
      "zin": "Only with the paid licence does Microsoft Copilot work broadly with a company's own information: Copilot can then reason across the full breadth of work data, such as mail, chats, meetings, documents and sites, as far as the user has access to them.",
      "soort": "toolprijs"
    }
  ],
  "bijgewerkt": "2026-10",
  "markup": true
};
