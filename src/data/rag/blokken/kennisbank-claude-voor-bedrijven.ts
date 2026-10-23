// RAG-blok. Teksten geverifieerd (docs/rag-verificatie.md) en akkoord bevonden op 7 oktober 2026.
export default {
  "pagina": "/nl/kennisbank/claude-voor-bedrijven",
  "type": "kennisbank",
  "onderwerp": "Claude voor bedrijven",
  "vraagkop": "Welk abonnement hoort bij Claude voor bedrijven en waar staat de data?",
  "onderBestaandeKop": false,
  "antwoord": "Claude voor bedrijven is de AI-assistent van Anthropic in een zakelijk abonnement: Team voor 2 tot 150 gebruikers, of Enterprise met daarnaast onder meer SCIM, rolgebaseerde toegang en auditlogs. Bij Team en Enterprise traint Anthropic standaard niet op de content, en de data wordt volgens Anthropic in de VS opgeslagen (stand september 2026); {{afzender}} adviseert voor gebruik met bedrijfsgegevens alleen de zakelijke abonnementen. Wie voor Claude kiest, doet dat vaak vanwege lange documenten, schrijfwerk of het delegeren van taken.",
  "vervolgvragen": [
    {
      "vraag": "Kan de data van Claude voor bedrijven in de app in Europa worden opgeslagen?",
      "voorbehoud": "op dit moment",
      "antwoord": "Op dit moment kan Europese dataopslag bij Claude voor bedrijven alleen via de cloudplatforms, niet in de app (stand september 2026). In de zakelijke abonnementen wordt de data volgens Anthropic opgeslagen in de VS. Voor Europese dataopslag en verwerking wijst Anthropic naar de regionale endpoints van AWS Bedrock en Google Vertex, een route voor eigen toepassingen via de API en niet voor de claude.ai-app."
    }
  ],
  "bron": {
    "tekst": "artikel van {{afzender}}"
  },
  "externeFeiten": [
    {
      "zin": "Claude voor bedrijven is de AI-assistent van Anthropic in een zakelijk abonnement: Team voor 2 tot 150 gebruikers, of Enterprise met daarnaast onder meer SCIM, rolgebaseerde toegang en auditlogs.",
      "soort": "toolprijs"
    },
    {
      "zin": "Bij Team en Enterprise traint Anthropic standaard niet op de content, en de data wordt volgens Anthropic in de VS opgeslagen (stand september 2026); Dave Willemstein adviseert voor gebruik met bedrijfsgegevens alleen de zakelijke abonnementen.",
      "soort": "toolprijs"
    },
    {
      "zin": "Op dit moment kan Europese dataopslag bij Claude voor bedrijven alleen via de cloudplatforms, niet in de app (stand september 2026).",
      "soort": "toolprijs"
    },
    {
      "zin": "In de zakelijke abonnementen wordt de data volgens Anthropic opgeslagen in de VS.",
      "soort": "toolprijs"
    },
    {
      "zin": "Voor Europese dataopslag en verwerking wijst Anthropic naar de regionale endpoints van AWS Bedrock en Google Vertex, een route voor eigen toepassingen via de API en niet voor de claude.ai-app.",
      "soort": "toolprijs"
    },
    {
      "zin": "Nee.",
      "soort": "toolprijs"
    },
    {
      "zin": "Pro en Max zijn persoonlijke abonnementen waarbij modeltraining op gesprekken aan staat tot de gebruiker het zelf uitzet, en centraal beheer ontbreekt.",
      "soort": "toolprijs"
    },
    {
      "zin": "Voor Claude voor bedrijven met bedrijfsgegevens zijn alleen Team en Enterprise geschikt (stand september 2026).",
      "soort": "toolprijs"
    }
  ],
  "bijgewerkt": "2026-10",
  "markup": true
};
