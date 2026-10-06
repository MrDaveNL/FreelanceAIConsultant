# Voorstel: logging op de pagina "AI agents en de AVG"

Alleen een voorstel. Er is niets in de repository gewijzigd.

- Bronbestand: `C:\Users\davan\Projects\Freelanceaispecialist\freelanceaispecialist-astro\src\content\pages\kennisbank\ai-agents-en-avg\index.md` (123 regels, volledig gelezen)
- Wettekst: Verordening (EU) 2016/679, Nederlandse versie, opgehaald bij EUR-Lex
- URL: https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679 (HTML-variant van https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32016R0679)
- Ophaaldatum: 6 oktober 2026
- Methode: opgehaald met curl (HTTP 200, 838.406 bytes), HTML-tags verwijderd, artikelen letterlijk uit de tekst overgenomen. Niet uit het geheugen.

## Wat de opgehaalde wettekst zegt

Een zoekactie in de volledige opgehaalde tekst op "logging", "gelogd", "logboek" en "logbestand" geeft 0 treffers. De AVG stelt logging dus niet met die woorden als eis. Wat er wel staat:

**Artikel 5, lid 2**
> "De verwerkingsverantwoordelijke is verantwoordelijk voor de naleving van lid 1 en kan deze aantonen („verantwoordingsplicht”)."

**Artikel 24, lid 1**
> "Rekening houdend met de aard, de omvang, de context en het doel van de verwerking, alsook met de qua waarschijnlijkheid en ernst uiteenlopende risico's voor de rechten en vrijheden van natuurlijke personen, treft de verwerkingsverantwoordelijke passende technische en organisatorische maatregelen om te waarborgen en te kunnen aantonen dat de verwerking in overeenstemming met deze verordening wordt uitgevoerd."

**Artikel 30, lid 1 (aanhef)**
> "Elke verwerkingsverantwoordelijke en, in voorkomend geval, de vertegenwoordiger van de verwerkingsverantwoordelijke houdt een register van de verwerkingsactiviteiten die onder hun verantwoordelijkheid plaatsvinden."

**Artikel 30, lid 3**
> "Het in de leden 1 en 2 bedoelde register is in schriftelijke vorm, waaronder in elektronische vorm, opgesteld."

**Artikel 30, lid 5** (beperking, van belang voor elke zin die het register als algemene plicht noemt)
> "De in de leden 1 en 2 bedoelde verplichtingen zijn niet van toepassing op ondernemingen of organisaties die minder dan 250 personen in dienst hebben, tenzij het waarschijnlijk is dat de verwerking die zij verrichten een risico inhoudt voor de rechten en vrijheden van de betrokkenen, de verwerking niet incidenteel is, of de verwerking bijzondere categorieën van gegevens, als bedoeld in artikel 9, lid 1, of persoonsgegevens in verband met strafrechtelijke veroordelingen en strafbare feiten als bedoeld in artikel 10 betreft."

Het register van artikel 30 is een register van verwerkingsactiviteiten (doeleinden, categorieën, ontvangers, termijnen). Het is geen logboek van afzonderlijke stappen van een agent.

## Plekken met een voorstel

### Plek 1: summary, regel 19

- **Regelnummer:** 19
- **Huidige zin:** "Verwerkersovereenkomst, dataminimalisatie, logging en vaak een DPIA zijn de basis."
- **Probleem:** logging staat in één rij met wettelijke verplichtingen en wordt zo als onderdeel van de AVG-basis gepresenteerd.
- **Voorgestelde zin:** "Verwerkersovereenkomst, dataminimalisatie, het register van verwerkingsactiviteiten en vaak een DPIA zijn de basis; met logging kun je aantonen dat je de regels naleeft."
- **Wetsfragment:**
  - Artikel 30, lid 1: "Elke verwerkingsverantwoordelijke en, in voorkomend geval, de vertegenwoordiger van de verwerkingsverantwoordelijke houdt een register van de verwerkingsactiviteiten die onder hun verantwoordelijkheid plaatsvinden."
  - Artikel 5, lid 2: "De verwerkingsverantwoordelijke is verantwoordelijk voor de naleving van lid 1 en kan deze aantonen („verantwoordingsplicht”)."
- **URL:** https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679
- **Ophaaldatum:** 6 oktober 2026
- **Opmerking:** de onderdelen verwerkersovereenkomst, dataminimalisatie en DPIA zijn ongewijzigd overgenomen en vallen buiten deze controle.

### Plek 2: checklist, regel 106

- **Regelnummer:** 106 (onder de inleiding op regel 99: "Gebruik deze checklist per agent, voordat hij met echte persoonsgegevens werkt:")
- **Huidige zin:** "6. Elke stap van de agent wordt gelogd: welke bronnen, welke handelingen, welke goedkeuringen."
- **Probleem:** het punt staat tussen AVG-verplichtingen (grondslag, verwerkersovereenkomst, DPIA, register) zonder onderscheid. Regel 112 zegt wel "Die laatste punten zijn geen privacyregels maar governance", maar laat open of punt 6 daarbij hoort.
- **Voorgestelde zin:** "6. Je kunt aantonen dat de agent zich aan de regels hield. Leg daarvoor in de praktijk elke stap vast: welke bronnen, welke handelingen, welke goedkeuringen. De AVG schrijft die logging niet letterlijk voor."
- **Wetsfragment:**
  - Artikel 5, lid 2: "De verwerkingsverantwoordelijke is verantwoordelijk voor de naleving van lid 1 en kan deze aantonen („verantwoordingsplicht”)."
  - Artikel 24, lid 1: "[...] treft de verwerkingsverantwoordelijke passende technische en organisatorische maatregelen om te waarborgen en te kunnen aantonen dat de verwerking in overeenstemming met deze verordening wordt uitgevoerd."
- **URL:** https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679
- **Ophaaldatum:** 6 oktober 2026

### Plek 3: zin uit het samenvattende blok (derde persoon)

- **Regelnummer:** niet in het bronbestand. De zin komt in `index.md` niet voor en een zoekactie op "De basis bestaat uit" in `src` van de repository geeft geen treffer met deze zin. De vindplaats moet de opdrachtgever dus zelf aanwijzen.
- **Huidige zin:** "De basis bestaat uit een vastgelegd doel met grondslag, toegang die per bron is afgebakend, een verwerkersovereenkomst met de leverancier, logging van elke stap en vaak een DPIA."
- **Voorgestelde zin:** "De basis bestaat uit een vastgelegd doel met grondslag, toegang die per bron is afgebakend, een verwerkersovereenkomst met de leverancier, een register van verwerkingsactiviteiten en vaak een DPIA. De verwerkingsverantwoordelijke moet de naleving kunnen aantonen; logging van elke stap is daarvoor een praktisch middel en geen eis die de AVG letterlijk stelt."
- **Variant in één zin (als het blok precies één zin moet blijven):** "De basis bestaat uit een vastgelegd doel met grondslag, toegang die per bron is afgebakend, een verwerkersovereenkomst met de leverancier, een register van verwerkingsactiviteiten, het kunnen aantonen van de naleving en vaak een DPIA."
- **Wetsfragment:**
  - Artikel 30, lid 1: "Elke verwerkingsverantwoordelijke en, in voorkomend geval, de vertegenwoordiger van de verwerkingsverantwoordelijke houdt een register van de verwerkingsactiviteiten die onder hun verantwoordelijkheid plaatsvinden."
  - Artikel 5, lid 2: "De verwerkingsverantwoordelijke is verantwoordelijk voor de naleving van lid 1 en kan deze aantonen („verantwoordingsplicht”)."
- **URL:** https://eur-lex.europa.eu/legal-content/NL/TXT/HTML/?uri=CELEX:32016R0679
- **Ophaaldatum:** 6 oktober 2026
- **Opmerking:** de onderdelen doel met grondslag, afgebakende toegang, verwerkersovereenkomst en DPIA zijn ongewijzigd overgenomen en vallen buiten deze controle.

## Beoordeeld, geen wijziging voorgesteld

| Regel | Huidige tekst | Oordeel |
|---|---|---|
| 11 (metaDescription, 153 tekens) | "Hoe zet je AI agents in zonder AVG-risico's? Lees over verwerkersovereenkomsten, dataminimalisatie, logging en de AI Act. Inclusief praktische checklist." | Noemt logging als onderwerp waarover je kunt lezen, niet als eis van de AVG. De AI Act staat in dezelfde rij, dus de rij is geen lijst van AVG-eisen. Volgens de opdracht daarom geen voorstel. Het is wel een grensgeval: wie strenger wil lezen, kan "logging" hier vervangen door "verantwoording". |
| 53 | "Als je niet ziet welke bronnen de agent raadpleegde, kun je niet aantonen dat de verwerking beperkt bleef tot wat nodig was." | Noemt logging niet en sluit aan op artikel 5, lid 2 (aantonen van naleving van onder meer lid 1, onder c). |
| 69 | "**Register (art. 30).** Neem de verwerking door de agent op in je register van verwerkingsactiviteiten." | Juist volgens artikel 30, lid 1. Zie het aandachtspunt over lid 5 hieronder. |
| 109 | "9. De verwerking staat in het register en de agent in je overzicht van AI-toepassingen." | Gaat over het register, niet over logging. |
| 118 | "De agent verstuurt niets zelf: elk antwoord gaat langs een medewerker en elke stap wordt gelogd." | Beschrijft wat een fictieve organisatie doet, geen bewering over de wet. |

Het frontmatter van dit bestand heeft geen `faq`-veld. De velden `lede` (regel 14), `title` en `metaTitle` noemen logging niet.

## Aandachtspunten

1. **De lopende tekst noemt de verantwoordingsplicht nergens.** De lijst onder "AVG-eisen voor AI agents" (regels 63 tot en met 70) bevat geen punt over artikel 5, lid 2. Na de wijziging op regel 19 en 106 verwijst de pagina naar "aantonen" zonder dat de lijst die plicht uitlegt. Een extra punt in de stijl van de lijst zou dat oplossen, bijvoorbeeld: "**Verantwoordingsplicht (art. 5 lid 2).** Je moet kunnen aantonen dat je de beginselen naleeft. Logging van wat de agent deed is daarvoor een praktisch middel, geen letterlijke eis uit de AVG." Dit valt buiten de gevraagde plekken en is alleen een suggestie.
2. **Artikel 30, lid 5.** De registerplicht geldt niet voor organisaties met minder dan 250 personen in dienst, tenzij onder meer "de verwerking niet incidenteel is". Een agent die doorlopend persoonsgegevens verwerkt, is in de regel niet incidenteel, maar dat is een toepassing op het geval en staat niet letterlijk in de wet. De voorgestelde zinnen noemen het register daarom als onderdeel van de basis en beweren niet dat het voor iedere organisatie verplicht is.
3. **Formulering "moet kunnen aantonen".** De wettekst zegt in artikel 5, lid 2 "kan deze aantonen" en in artikel 24, lid 1 "te kunnen aantonen". De voorstellen blijven bij die woorden.
