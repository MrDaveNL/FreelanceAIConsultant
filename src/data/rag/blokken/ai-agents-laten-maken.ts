// RAG-blok. Teksten geverifieerd (docs/rag-verificatie.md) en akkoord bevonden op 7 oktober 2026.
export default {
  "pagina": "/nl/ai-agents/laten-maken",
  "type": "dienstenoverzicht",
  "onderwerp": "AI agent",
  "vraagkop": "Wat kost een AI agent?",
  "onderBestaandeKop": true,
  "antwoord": "De prijs van een AI agent wordt bepaald door de route, de koppelingen, de schrijfrechten en controle, het gebruik en het beheer, en verschilt sterk per route, zodat een vast bedrag misleidend zou zijn. {{afzender}} bouwt zelf geen agents en verkoopt geen implementaties, maar helpt de taak afbakenen, de specificatie opstellen, bouwpartijen vergelijken en de uitvoering bewaken. Offertes van meerdere bouwpartijen onafhankelijk laten beoordelen kan met de {{dienst:vendor-review}} van {{timing:vendor-review}} voor {{pricelc:vendor-review}}, en doorlopende bewaking van het traject kan met de {{dienst:fractional-ai-lead}}.",
  "vervolgvragen": [
    {
      "vraag": "Wie stelt de specificatie van een AI agent op?",
      "voorbehoud": "Een goed traject",
      "antwoord": "In een goed traject stelt de opdrachtgever de specificatie van een AI agent zelf op, niet de bouwpartij; dat kan ook met een onafhankelijke adviseur, en pas daarna komt een bouwpartij in beeld. Een specificatie die wordt overgelaten aan de partij die ook bouwt, past bij wat die partij het liefst maakt."
    },
    {
      "vraag": "Hangt de prijs van de Vendor Review af van het aantal leveranciers?",
      "onvoorwaardelijk": true,
      "antwoord": "Ja. De {{dienst:vendor-review}} kost {{pricelc:vendor-review}}, afhankelijk van het aantal leveranciers (2 tot 4). De bedragen zijn {{voorwaarden}}."
    },
    {
      "vraag": "Waar let een organisatie op bij de beveiliging van een AI agent?",
      "antwoord": "Een AI agent die systemen aanroept, is een nieuwe gebruiker in het IT-landschap. Het is zaak de AI agent niet meer rechten te geven dan nodig, hem te laten inloggen met een eigen account zodat zijn handelingen herleidbaar zijn, en een bevestigingsstap te houden op elk onomkeerbaar moment."
    }
  ],
  "bron": {
    "tekst": "tarieven en doorlooptijden van {{afzender}}",
    "href": "/nl/tarieven"
  },
  "bijgewerkt": "2026-10",
  "markup": true
};
