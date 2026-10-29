// RAG-blok. Teksten geverifieerd (docs/rag-verificatie.md) en akkoord bevonden op 7 oktober 2026.
export default {
  "pagina": "/nl/ai-consultancy/ai-advies",
  "type": "dienstenoverzicht",
  "onderwerp": "AI advies",
  "vraagkop": "Wat kost AI advies en welke vorm past bij welke vraag?",
  "onderBestaandeKop": false,
  "antwoord": "AI advies van {{afzender}} beantwoordt één afgebakende vraag of besluit, zoals een leverancierskeuze, een toets van een business case of een second opinion, meestal in dagen. Voor afgebakend advies en second opinions geldt een vaste prijs per opdracht; de {{dienst:executive-briefing}} voor directie of raad van commissarissen kost {{pricelc:executive-briefing}}. Het advies is onafhankelijk, zonder partnerstatus of commissies bij leveranciers.",
  "tabel": {
    "bijschrift": "AI advies: passende vorm per vraag",
    "kolommen": [
      "Vraag",
      "Passende vorm"
    ],
    "rijen": [
      [
        "Eén leveranciersvoorstel of business case laten toetsen",
        {
          "tekst": "Afgebakend advies, te starten met een adviesgesprek",
          "href": "/nl/contact"
        }
      ],
      [
        "Directie of raad van commissarissen een gedeeld beeld geven",
        {
          "dienst": "executive-briefing",
          "veld": "naam"
        }
      ],
      [
        "Meerdere leveranciers systematisch vergelijken",
        {
          "dienst": "vendor-review",
          "veld": "naam"
        }
      ],
      [
        "Eerst weten waar de organisatie staat",
        {
          "dienst": "ai-readiness-assessment",
          "veld": "naam"
        }
      ]
    ]
  },
  "vervolgvragen": [
    {
      "vraag": "Is het eerste gesprek over AI advies vrijblijvend?",
      "onvoorwaardelijk": true,
      "antwoord": "Ja. De kennismaking voor AI advies duurt dertig minuten, is vrijblijvend en zonder pitch. Aan het eind hoort de opdrachtgever wat de adviseur in die situatie zou doen."
    },
    {
      "vraag": "Is AI advies over de AI Act hetzelfde als juridisch advies?",
      "onvoorwaardelijk": true,
      "antwoord": "Nee. AI advies over de AI Act helpt bepalen in welke risicocategorie een toepassing valt, wat dat van de organisatie vraagt en hoe de governance wordt ingericht. De adviseur is geen jurist: voor juridisch advies is een jurist nodig."
    },
    {
      "vraag": "Kan bij AI advies blijken dat de vraag groter is dan een adviesvraag?",
      "voorbehoud": "soms",
      "antwoord": "Soms blijkt een vraag bij AI advies groter dan een adviesvraag; dan wordt dat gezegd en volgt een voorstel voor wat wel past. Soms is dat het {{dienst:ai-readiness-assessment}}, om eerst te weten waar de organisatie staat."
    }
  ],
  "bron": {
    "tekst": "[tarieven en doorlooptijden](/nl/tarieven) van {{afzender}}; primaire bron: Verordening (EU) 2024/1689 (AI-verordening), EUR-Lex (peildatum 6 oktober 2026)"
  },
  "externeFeiten": [
    {
      "zin": "AI advies over de AI Act helpt bepalen in welke risicocategorie een toepassing valt, wat dat van de organisatie vraagt en hoe de governance wordt ingericht.",
      "soort": "wetgeving"
    }
  ],
  "bijgewerkt": "2026-10",
  "markup": true
};
