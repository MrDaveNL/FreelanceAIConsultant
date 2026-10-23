// RAG-blok. Teksten geverifieerd (docs/rag-verificatie.md) en akkoord bevonden op 7 oktober 2026.
export default {
  "pagina": "/nl/ai-development",
  "type": "dienstenoverzicht",
  "onderwerp": "AI development",
  "vraagkop": "Wat kost onafhankelijke begeleiding bij AI development en wie bouwt er?",
  "onderBestaandeKop": false,
  "antwoord": "{{afzender}} bouwt zelf geen software, maar begeleidt AI development vanuit de kant van de opdrachtgever: specificatie, selectie van de bouwpartij, toetsing van opleveringen en governance. Voor de keuze van de bouwpartij is er de {{dienst:vendor-review}} van {{timing:vendor-review}} voor {{pricelc:vendor-review}}, en tijdens de bouw is er begeleiding vanuit klantzijde, bijvoorbeeld als {{dienst:fractional-ai-lead}} voor {{pricelc:fractional-ai-lead}}. De bouw zelf ligt bij het eigen team of bij een ontwikkelpartij met wie de opdrachtgever rechtstreeks een contract sluit.",
  "tabel": {
    "bijschrift": "AI development: passende dienst per fase van het traject",
    "kolommen": [
      "Fase in het traject",
      "Wat de opdrachtgever krijgt",
      "Doorlooptijd",
      "Prijs",
      "Passende dienst"
    ],
    "rijen": [
      [
        "Bij de start, als er nog geen scherp beeld is van waar de organisatie staat",
        "Een logische eerste stap, inclusief eindpresentatie aan MT of board",
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
        "Bij de keuze van de bouwpartij",
        "Scorecards, een test op eigen data en een TCO-vergelijking over drie jaar",
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
        "Tijdens de bouw",
        "Begeleiding vanuit klantzijde: toetsing van opleveringen, bewaking van de business case en governance",
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
      "vraag": "Zit er een marge op ontwikkelaars uit het netwerk bij AI development?",
      "onvoorwaardelijk": true,
      "antwoord": "Nee. Bij AI development contracteert de opdrachtgever de bouwpartij rechtstreeks, zonder tussenlaag, marge of commissie. Een partij uit het netwerk doorloopt dezelfde selectie als iedere andere partij."
    },
    {
      "vraag": "Waar hangt de prijs van de Vendor Review bij AI development van af?",
      "antwoord": "De {{dienst:vendor-review}} kost {{pricelc:vendor-review}}, afhankelijk van het aantal leveranciers (2 tot 4)."
    },
    {
      "vraag": "Wat werkt bij AI development het best: bouwen, kopen of partneren?",
      "voorbehoud": "vaak",
      "antwoord": "De hybride vorm werkt bij AI development vaak het best: bouwstenen inkopen, de laag met de eigen kennis laten bouwen en de implementatie bij een partner beleggen. Daaraan vooraf gaat de vraag of bouwen überhaupt nodig is: bouwen alleen voor wat de organisatie onderscheidt in de markt en kopen wat een commodity is."
    }
  ],
  "bron": {
    "tekst": "tarieven en doorlooptijden van {{afzender}}",
    "href": "/nl/tarieven"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
