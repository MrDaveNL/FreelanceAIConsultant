// RAG-blok. Teksten geverifieerd (docs/rag-verificatie.md) en akkoord bevonden op 7 oktober 2026.
export default {
  "pagina": "/ai-beleid",
  "type": "dienstenoverzicht",
  "onderwerp": "AI beleid",
  "vraagkop": "Wat hoort er in een AI beleid en welke dienst past erbij?",
  "onderBestaandeKop": false,
  "antwoord": "Een AI beleid legt vast welke tools zijn toegestaan, welke gegevens erin mogen, wie beslist en hoe risico's worden beheerst; voor de meeste organisaties volstaat een eerste versie van één tot drie pagina's. {{afzender}} begeleidt het opstellen en toetst het beleid tegen de praktijk; wie wil weten waar de organisatie staat voordat het beleid wordt geschreven, kan het {{dienst:ai-readiness-assessment}} inzetten, dat in {{timing:ai-readiness-assessment}} de uitgangspositie in kaart brengt voor {{pricelc:ai-readiness-assessment}}. Ontbreekt de capaciteit om de governance zelf te trekken, dan kan de {{dienst:fractional-ai-lead}} de governance en cadans opzetten en bewaken; de investering is {{pricelc:fractional-ai-lead}}.",
  "tabel": {
    "bijschrift": "AI beleid opstellen en borgen: passende dienst per situatie",
    "kolommen": [
      "Situatie",
      "Resultaat",
      "Doorlooptijd",
      "Prijs",
      "Passende dienst"
    ],
    "rijen": [
      [
        "Uitgangspositie nog onbekend voordat het AI beleid wordt geschreven",
        "Uitgangspositie in kaart, met een risico- en compliance-scan en de positie onder de AI-verordening",
        {
          "dienst": "ai-readiness-assessment",
          "veld": "doorlooptijd"
        },
        {
          "dienst": "ai-readiness-assessment",
          "veld": "prijs"
        },
        {
          "dienst": "ai-readiness-assessment",
          "veld": "naam"
        }
      ],
      [
        "Geen eigen capaciteit om de AI governance te trekken",
        "Governance en cadans opgezet en bewaakt",
        {
          "dienst": "fractional-ai-lead",
          "veld": "doorlooptijd"
        },
        {
          "dienst": "fractional-ai-lead",
          "veld": "prijs"
        },
        {
          "dienst": "fractional-ai-lead",
          "veld": "naam"
        }
      ]
    ]
  },
  "vervolgvragen": [
    {
      "vraag": "Wat heeft een mkb-bedrijf nodig aan AI beleid?",
      "antwoord": "Een mkb-bedrijf hoeft geen AI beleid van twintig pagina's te hebben; wat wel nodig is, is een AI-beleid dat iedereen in tien minuten kan lezen en dat antwoord geeft op de vragen die medewerkers echt hebben. Het stappenplan loopt van inventariseren wat er al gebruikt wordt tot evalueren na drie maanden, met als stap het schrijven van de eerste versie op één tot drie pagina's. Het [AI-beleid template (pdf)](/downloads/ai-beleid-template.pdf) heeft in te vullen velden, tabellen voor tools en gegevenscategorieën en een checklist om af te ronden."
    },
    {
      "vraag": "Is voor AI-geletterdheid onder de AI Act een certificaat nodig?",
      "antwoord": "Nee, volgens de Europese Commissie is een certificaat niet nodig: een organisatie kan intern bijhouden welke trainingen en andere initiatieven zijn ingezet. De plicht rond AI-geletterdheid geldt sinds 2 februari 2025 en is met de Digital Omnibus, die op 27 juli 2026 in werking trad, aangepast: een organisatie moet maatregelen nemen om AI-geletterdheid te ondersteunen, zonder dat een bepaald niveau per persoon wordt voorgeschreven. Een AI beleid is de logische plek om die maatregelen vast te leggen."
    },
    {
      "vraag": "Vraagt AI governance bij een AI beleid om een nieuwe commissie?",
      "antwoord": "Nee, het advies is AI toe te voegen aan het risico-overleg of de stuurgroep die al bestaat, in plaats van een nieuwe commissie op te tuigen: het belangrijkste punt is dat governance wordt gekoppeld aan wat er al is. Het uitgangspunt voor de governance rond een AI beleid is licht waar het kan en zwaar alleen waar het risico dat rechtvaardigt."
    }
  ],
  "bron": {
    "tekst": "[tarieven en doorlooptijden](/tarieven) van {{afzender}}; primaire bron: Europese Commissie, \"AI Literacy - Questions & Answers\"; Verordening (EU) 2026/1744 (Digitale omnibus inzake AI), EUR-Lex; Europese Commissie, \"AI Omnibus enters into force\" (27 juli 2026) (peildatum 6 oktober 2026)"
  },
  "externeFeiten": [
    {
      "zin": "Nee, volgens de Europese Commissie is een certificaat niet nodig: een organisatie kan intern bijhouden welke trainingen en andere initiatieven zijn ingezet.",
      "soort": "wetgeving"
    },
    {
      "zin": "De plicht rond AI-geletterdheid geldt sinds 2 februari 2025 en is met de Digital Omnibus, die op 27 juli 2026 in werking trad, aangepast: een organisatie moet maatregelen nemen om AI-geletterdheid te ondersteunen, zonder dat een bepaald niveau per persoon wordt voorgeschreven.",
      "soort": "wetgeving"
    }
  ],
  "bijgewerkt": "2026-10",
  "markup": true
};
