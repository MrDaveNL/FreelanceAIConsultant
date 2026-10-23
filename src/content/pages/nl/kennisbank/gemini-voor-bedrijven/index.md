---
id: C10-03
lang: nl
url: /nl/kennisbank/gemini-voor-bedrijven
parent: C3-05
cluster: "10. Kennisbank AI tools"
pageType: Kennisbank
schema: article
navLabel: "Gemini voor bedrijven"
title: "Gemini voor bedrijven: toepassingen in Google Workspace"
metaTitle: "Gemini voor bedrijven | Toepassingen in Google Workspace"
metaDescription: "Hoe gebruik je Google Gemini zakelijk? Lees over toepassingen in Gmail, Docs en Sheets, zakelijke licenties, privacy en de verschillen met Copilot en ChatGPT."
keyphrase: gemini voor bedrijven
eyebrow: "Kennisbank"
lede: "Werkt je organisatie al met Google Workspace, dan zit Gemini voor bedrijven waarschijnlijk al in je abonnement. De vraag is dus minder of je het koopt, en meer hoe je het inzet en welke afspraken je maakt over data. Hieronder lees je wat Gemini is, wat het in Gmail, Docs en Sheets doet, hoe Google met je gegevens omgaat en hoe het zich verhoudt tot Microsoft Copilot."
primaryCta: { label: "Lees meer over AI tools", href: /nl/ai-automatisering/ai-tools }
secondaryCta: { label: "Plan een adviesgesprek", href: /nl/contact }
summary:
  - "Gemini zit in de zakelijke Google Workspace-abonnementen; welke functies je krijgt, hangt af van je editie."
  - "Google gebruikt je Workspace-content volgens eigen zeggen niet zonder toestemming voor modeltraining."
  - "Kies tussen Gemini en Copilot vooral op het platform waar je werk al staat, niet op losse features."
published: "2026-09-23"
updated: "2026-09-23"
sources:
  - title: "Google Workspace: abonnementen en prijzen (NL)"
    url: "https://workspace.google.com/intl/nl/pricing.html"
  - title: "Google Workspace Admin Help: Gemini AI features now included in Google Workspace subscriptions"
    url: "https://knowledge.workspace.google.com/admin/gemini/gemini-ai-features-now-included-in-google-workspace-subscriptions"
  - title: "Google Workspace Admin Help: Generative AI in Google Workspace Privacy Hub"
    url: "https://knowledge.workspace.google.com/admin/gemini/generative-ai-in-google-workspace-privacy-hub"
  - title: "Google Workspace: Generative AI security, compliance and privacy"
    url: "https://workspace.google.com/security/ai-privacy/"
  - title: "Google Workspace Admin Help: Data covered by data regions"
    url: "https://knowledge.workspace.google.com/admin/compliance/data-covered-by-data-regions"
  - title: "Google Workspace Admin Help: Google Workspace with Gemini FAQ"
    url: "https://knowledge.workspace.google.com/admin/gemini/gemini-for-google-workspace-faq"
  - title: "Microsoft 365 Copilot: abonnementen en prijzen (NL)"
    url: "https://www.microsoft.com/nl-nl/microsoft-365-copilot/pricing"
---

## Wat is Gemini?

Gemini is de verzamelnaam voor de generatieve AI van Google: de taalmodellen zelf én de assistent waarmee je ermee werkt. Voor Gemini voor bedrijven zijn twee vormen relevant.

- **De Gemini-app.** Een chatomgeving op gemini.google.com en in de mobiele apps, vergelijkbaar met ChatGPT of Claude. Je stelt vragen, laat teksten schrijven of samenvatten en uploadt bestanden. Volgens Google is de Gemini-app een kernservice van Workspace die standaard aanstaat; een beheerder kan hem uitzetten.
- **Gemini in Workspace-apps.** De assistent in het zijpaneel van Gmail, Docs, Sheets, Slides, Drive en Chat, plus notuleren in Meet. Hier werkt Gemini direct met de mail, documenten en spreadsheets waar je al in zit.

Dat tweede deel maakt het verschil met een losse chattool. Je hoeft geen tekst te kopiëren naar een apart venster; je vraagt in het document zelf om een samenvatting, een eerste versie of een analyse. Wie Google Gemini zakelijk wil inzetten, begint daarom meestal bij de Workspace-apps en niet bij de losse app.

Gemini is een van de assistenten die je kunt overwegen. In het overzicht van [AI tools voor bedrijven](/nl/ai-automatisering/ai-tools) zet ik de belangrijkste categorieën naast elkaar, en wie ook naar andere modellen kijkt, leest meer over [ChatGPT in zakelijk gebruik](/nl/kennisbank/chatgpt-voor-bedrijven) en over [Claude van Anthropic](/nl/kennisbank/claude-voor-bedrijven).

## Gemini in Google Workspace

Sinds januari 2025 voegt Google AI-functies toe aan de Business- en Enterprise-edities van Workspace, zonder aparte AI-licentie. Welke functies je krijgt, hangt wel af van je editie. Stand september 2026 ziet dat er op de [Nederlandse prijspagina van Google Workspace](https://workspace.google.com/intl/nl/pricing.html) zo uit:

| Editie | Prijs per gebruiker per maand (jaarcontract, excl. belastingen) | Gemini volgens Google |
|---|---|---|
| Business Starter | € 6,80 | Gemini in Gmail en de Gemini-app; Gemini in Docs en Sheets zit er niet in |
| Business Standard | € 13,60 | Gemini in onder andere Gmail, Docs en Meet, met ruimere toegang tot modellen en functies in de Gemini-app |
| Business Plus | € 21,10 | Alles van Standard, plus onder meer Vault, eDiscovery en uitgebreidere beveiligingsopties |
| Enterprise | Op aanvraag | Gemini in de Workspace-apps, plus onder meer DLP en Enterprise-dataregio's |

De Business-abonnementen zijn volgens Google te koop voor maximaal 300 gebruikers. Google biedt nieuwe klanten regelmatig tijdelijke kortingen; reken voor een begroting met de reguliere prijs.

### Wat doe je er in de praktijk mee?

De toepassingen zijn herkenbaar, want ze sluiten aan op werk dat al in Workspace gebeurt:

- **Gmail:** lange mailwisselingen samenvatten, een antwoord opstellen in de toon die je aangeeft, sneller terugvinden wat er is afgesproken.
- **Docs:** een eerste versie van een notitie, beleidsstuk of offertetekst, of een bestaande tekst inkorten en herschrijven.
- **Sheets:** gegevens visualiseren en sneller inzicht krijgen in wat er in een spreadsheet staat.
- **Meet:** notities en samenvattingen van een overleg, zodat niemand hoeft te notuleren.
- **Drive:** vragen stellen over documenten die je al hebt, zonder ze eerst allemaal te openen.

<figure class="diagram" role="img" aria-label="Stappen om Gemini in Google Workspace verantwoord in te voeren: editie controleren, databeleid vastleggen, toegangsrechten opschonen, starten met een team en daarna evalueren">
<ol class="flow">
<li><b>Editie controleren</b>Welke Gemini-functies zitten in jullie huidige Workspace-abonnement?</li>
<li><b>Afspraken vastleggen</b>Welke gegevens mogen wel en niet in prompts, en wie beheert de instellingen?</li>
<li><b>Rechten opschonen</b>Gemini ziet wat een gebruiker mag zien; te ruim gedeelde mappen worden zichtbaar.</li>
<li><b>Starten met één team</b>Concrete taken, korte training, vaste plek voor vragen.</li>
<li><b>Evalueren</b>Wat wordt echt gebruikt, wat levert het op, wat moet anders?</li>
</ol>
<figcaption>Van licentie naar gebruik: de techniek staat meestal al klaar, het werk zit in afspraken en adoptie.</figcaption>
</figure>

De valkuil is bekend: de functies staan aan, een paar enthousiastelingen gebruiken ze, de rest niet. Dat heeft zelden met de tool te maken en bijna altijd met de vraag of het aansluit op het echte werk. Daarover schreef ik in [AI-adoptie begint bij het werk](/nl/inzichten/ai-adoptie-begint-bij-het-werk). Het helpt ook als mensen weten hoe je een goede vraag stelt; de basis staat in de uitleg over [prompt engineering](/nl/kennisbank/prompt-engineering).

<aside class="scenario" aria-label="Voorbeeldscenario">
<p class="scenario-label">Voorbeeldscenario</p>
<p>Een adviesbureau met 70 medewerkers werkt al een jaar met Google Workspace Business Standard. Gemini staat aan, maar volgens een korte interne enquête gebruiken maar 11 medewerkers het wekelijks.</p>
<p>De adviseur evalueert vanuit klantzijde met teamleiders waar het werk zit. Twee taken komen bovendrijven: notities van projectoverleggen in Meet en het samenvatten van lange mailwisselingen met opdrachtgevers. Voor de bredere uitrol schoont het eigen IT-team ruim 300 Drive-mappen op die met het hele domein waren gedeeld, waaronder een map met salarisoverzichten. Elk team krijgt een training van anderhalf uur rond die twee taken.</p>
<p>Na drie maanden gebruiken 38 van de 70 medewerkers Gemini wekelijks. Er is bewust geen extra tool of hogere editie gekocht: de functies zaten al in het abonnement.</p>
<p class="scenario-note">Fictief voorbeeld, samengesteld uit situaties die veel voorkomen. Organisatie en cijfers zijn illustratief.</p>
</aside>

## Privacy en data

Voor de meeste organisaties is dit het belangrijkste deel. Wat Google er zelf over zegt in de [Privacy Hub voor generatieve AI in Workspace](https://knowledge.workspace.google.com/admin/gemini/generative-ai-in-google-workspace-privacy-hub), stand september 2026:

- **Geen modeltraining zonder toestemming.** Workspace gebruikt klantdata niet voor het trainen van modellen zonder voorafgaande toestemming of instructie van de klant. Je content wordt ook niet door mensen beoordeeld voor modeltraining buiten je domein.
- **Bestaande bescherming geldt ook voor Gemini.** De beveiligings- en beheerinstellingen die je al in Workspace hebt, gelden automatisch voor Gemini.
- **Gemini volgt toegangsrechten.** Volgens Google kan Gemini alleen gegevens ophalen waartoe de gebruiker zelf toegang heeft.
- **Verwerking in de EU mogelijk.** Klanten kunnen de verwerking van Gemini-data in Workspace [beperken tot de VS of de EU](https://workspace.google.com/security/ai-privacy/). Prompts en antwoorden vallen onder de instellingen voor [dataregio's](https://knowledge.workspace.google.com/admin/compliance/data-covered-by-data-regions); welke regio-opties je hebt, hangt af van je editie. Volgens Google zijn dataregio's beschikbaar vanaf Business Standard; de ruimere Enterprise-dataregio's zitten onder meer in Enterprise Plus.

Dat zijn de toezeggingen van de leverancier. Ze nemen je eigen huiswerk niet over. Drie punten verdienen aandacht:

1. **Toegangsrechten zijn nu zichtbaar.** Omdat Gemini alles kan gebruiken wat een medewerker mag zien, komen te ruim gedeelde Drive-mappen sneller boven. Ruim die op vóórdat je breed uitrolt.
2. **Leg vast wat wel en niet mag.** Denk aan persoonsgegevens van klanten, medische of financiële gegevens en vertrouwelijke stukken. Een korte gebruiksrichtlijn werkt beter dan een lang beleidsstuk.
3. **Toets de AVG-kant.** Verwerk je persoonsgegevens met Gemini, dan hoort dat in je verwerkingsregister en mogelijk in een DPIA.

## Gemini versus Copilot

Wie Google Workspace gebruikt, vraagt zich al snel af of Microsoft Copilot niet beter is. Die vraag is meestal verkeerd gesteld. Een AI-assistent is vooral waardevol in de omgeving waar je mail, documenten en agenda al staan. Zit je in Google Workspace, dan ligt Gemini voor de hand; zit je in Microsoft 365, dan Copilot.

Waar ze wel verschillen, stand september 2026:

| | Gemini in Google Workspace | Microsoft Copilot |
|---|---|---|
| Licentie | Onderdeel van de Business- en Enterprise-edities | Copilot Chat zonder extra kosten bij een geschikt Microsoft 365-abonnement; de volledige Copilot is een betaalde uitbreiding |
| Werkt met | Gmail, Docs, Sheets, Slides, Drive, Chat, Meet | Outlook, Teams, Word, Excel, PowerPoint |
| Toegang tot bedrijfsdata | Alleen wat de gebruiker mag zien | Alleen wat de gebruiker mag zien |
| Modeltraining | Niet zonder toestemming van de klant | Prompts en antwoorden worden niet gebruikt voor training van de basismodellen |

Het grootste praktische verschil zit in het prijsmodel. Bij Google betaal je de AI mee in het Workspace-abonnement. Bij Microsoft is de volledige Copilot een aparte licentie bovenop Microsoft 365; op de [Nederlandse prijspagina van Microsoft](https://www.microsoft.com/nl-nl/microsoft-365-copilot/pricing) kost Copilot Business stand september 2026 € 18,20 per gebruiker per maand bij jaarlijkse betaling, exclusief btw. Van 1 juli tot en met 31 december 2026 geldt een tijdelijke prijs van € 15,60 voor het eerste jaar. Hoe die licenties precies werken, lees je in [Microsoft Copilot voor bedrijven](/nl/kennisbank/microsoft-copilot-voor-bedrijven).

Werk je met beide platforms, of overweeg je een overstap, dan wordt het een echte selectievraag. Kijk dan niet naar losse functies, die veranderen per kwartaal, maar naar waar je data staat, wat een overstap kost en welke afspraken je over beheer kunt maken. Een onafhankelijke [vergelijking van leveranciers](/nl/diensten/vendor-review) helpt daarbij; ik heb geen partnerstatus bij Google of Microsoft en verdien niet aan de keuze.

Wil je weten hoe je Gemini in jouw organisatie verantwoord inzet, of twijfel je tussen platforms? [Plan een adviesgesprek](/nl/contact) van dertig minuten; aan het eind hoor je wat ik zou doen.
