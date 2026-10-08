// RAG-blok. Teksten geverifieerd (docs/rag-verificatie.md) en akkoord bevonden op 7 oktober 2026.
export default {
  "pagina": "/ai-implementatie",
  "type": "dienstenoverzicht",
  "onderwerp": "AI implementatie",
  "vraagkop": "Wat kost begeleiding bij AI implementatie en wie bouwt de oplossing?",
  "onderBestaandeKop": false,
  "antwoord": "Bij een AI implementatie bouwt het eigen team of een rechtstreeks gecontracteerde partner de oplossing; {{afzender}} begeleidt vanuit de kant van de opdrachtgever door te helpen kiezen, kaders te stellen, de oplevering te toetsen en te zorgen dat de toepassing in de organisatie landt. Voor die begeleiding gelden gepubliceerde prijzen: het {{dienst:ai-readiness-assessment}} duurt {{timing:ai-readiness-assessment}} en kost {{pricelc:ai-readiness-assessment}}, en doorlopende sturing door de {{dienst:fractional-ai-lead}} kost {{pricelc:fractional-ai-lead}}. De kosten van bouw of licentie hangen af van de gekozen oplossing en leverancier en worden apart begroot, inclusief het beheer na oplevering.",
  "tabel": {
    "bijschrift": "Begeleiding bij AI implementatie: passende dienst per situatie",
    "kolommen": [
      "Situatie",
      "Doorlooptijd",
      "Prijs",
      "Passende dienst"
    ],
    "rijen": [
      [
        "Onduidelijk of de organisatie klaar is voor een implementatie, of de meningen daarover lopen uiteen",
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
        "Een externe bouwpartij selecteren op vooraf vastgelegde criteria, getest op eigen data",
        {
          "dienst": "vendor-review",
          "veld": "doorlooptijd"
        },
        {
          "dienst": "vendor-review",
          "veld": "prijs"
        },
        {
          "dienst": "vendor-review",
          "veld": "naam"
        }
      ],
      [
        "Doorlopende bewaking van meting, beheer en governance zonder fulltime Head of AI",
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
      "vraag": "Wordt er een marge gerekend op partners die de AI implementatie bouwen?",
      "antwoord": "Nee. Bij een AI implementatie bouwt het eigen team of een partij die de opdrachtgever rechtstreeks contracteert. Er wordt geen marge op partners gerekend en er zijn geen commissies of partnerstatus bij leveranciers.",
      "onvoorwaardelijk": true
    },
    {
      "vraag": "Moet er eerst een roadmap liggen voordat een AI implementatie kan starten?",
      "antwoord": "Nee. Een ontbrekende roadmap is geen reden om met een AI implementatie te wachten. Het is wel een reden om het eerste traject klein en goed afgebakend te houden, zodat duidelijk wordt wat de organisatie aankan voordat de tweede en derde toepassing starten.",
      "onvoorwaardelijk": true
    },
    {
      "vraag": "Wat kost bij een AI implementatie vaak meer tijd dan de techniek?",
      "antwoord": "Adoptie kost bij een AI implementatie vaak meer tijd dan de techniek. De doorlooptijd van de implementatie zelf verschilt sterk per toepassing: een standaardproduct dat wordt geconfigureerd staat sneller dan maatwerk met koppelingen aan kernsystemen.",
      "voorbehoud": "vaak"
    }
  ],
  "bron": {
    "tekst": "tarieven en doorlooptijden van {{afzender}}",
    "href": "/tarieven"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
