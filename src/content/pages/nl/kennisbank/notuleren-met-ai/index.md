---
id: C3-07
lang: nl
url: /nl/kennisbank/notuleren-met-ai
parent: C3-00
cluster: "3. AI Automatisering"
pageType: Kennisbank
schema: article
navLabel: Notuleren met AI
title: "Notuleren met AI: tools, werkwijze en privacy"
metaTitle: "Notuleren met AI | Tools, werkwijze en privacy op een rij"
metaDescription: "Notuleren met AI kan veel tijd schelen. Vergelijk tools zoals Copilot en Fireflies, lees hoe je veilig werkt met privacygevoelige data en start direct."
keyphrase: notuleren met ai
eyebrow: "Kennisbank"
lede: "Notuleren met AI is een van de laagdrempeligste AI-toepassingen op kantoor: een tool luistert mee, maakt een transcript en stelt een verslag met actiepunten op. Het werkt goed, mits je de juiste tool kiest en de privacy vooraf regelt. Hier lees je hoe het werkt, welke tools er zijn en waar je op let."
primaryCta: { label: "Lees meer over AI automatisering", href: /nl/ai-automatisering }
secondaryCta: { label: "Plan een adviesgesprek", href: /nl/contact }
summary:
  - "Een AI-notulist neemt op, transcribeert en vat samen; een mens controleert en deelt."
  - "Kijk bij de toolkeuze vooral naar taalondersteuning, waar de data staat en hoe de tool meedoet aan het gesprek."
  - "Opnemen is een verwerking van persoonsgegevens: informeer deelnemers vooraf en leg vast wat je bewaart."
published: "2026-09-23"
updated: "2026-09-23"
faqTitle: "Veelgestelde vragen"
faq:
  - q: "Mag ik een vergadering opnemen zonder dat iedereen het weet?"
    a: "Als organisatie vrijwel nooit. Over het opnemen van telefoongesprekken zegt de Autoriteit Persoonsgegevens dat medewerkers het recht hebben om te weten dat hun gesprek wordt opgenomen, en dat heimelijk opnemen alleen in uitzonderlijke situaties mag, zoals bij een vermoeden dat een werknemer iets strafbaars doet. Voor vergaderingen ligt dezelfde lijn voor de hand: vooraf aankondigen, uitleggen waarvoor en de opname zichtbaar starten."
  - q: "Is toestemming van alle deelnemers nodig?"
    a: "Toestemming is één van de zes grondslagen uit de AVG, maar niet altijd de beste. Voor het monitoren van personeel noemt de AP toestemming geen goede grondslag, omdat medewerkers een verzoek van hun werkgever moeilijk kunnen weigeren. Vaak ligt een gerechtvaardigd belang meer voor de hand, met goede informatie vooraf. Welke grondslag past, moet je als organisatie zelf beoordelen en vastleggen."
  - q: "Hoe goed zijn AI-notulen in het Nederlands?"
    a: "Dat verschilt sterk per tool. Sommige tools noemen Nederlands niet als ondersteunde taal of ondersteunen het alleen in bèta. Test altijd met een paar echte vergaderingen, inclusief vakjargon, namen en mensen die door elkaar praten, voordat je een tool breed uitrolt."
  - q: "Kan de AI-notulist de notulist helemaal vervangen?"
    a: "Voor het vastleggen van wat er gezegd is vaak wel, voor het vaststellen van besluiten niet. Een samenvatting kan nuances missen of een voorstel als besluit weergeven. Laat de voorzitter of een vaste eigenaar het verslag altijd controleren voordat het wordt gedeeld."
sources:
  - title: "Microsoft Learn: Intelligent recap for Teams calls, meetings, and events"
    url: "https://learn.microsoft.com/en-us/microsoftteams/intelligent-recap-calls-meetings"
  - title: "Microsoft Support: Catch up on meetings with Microsoft Copilot in Teams"
    url: "https://support.microsoft.com/en-us/office/use-copilot-in-microsoft-teams-meetings-0bf9dd3c-96f7-44e2-8bb8-790bedf066b1"
  - title: "Otter.ai: Pricing"
    url: "https://otter.ai/pricing"
  - title: "Otter.ai: Desktop app, record meetings without a bot"
    url: "https://otter.ai/desktop"
  - title: "Fireflies.ai: Pricing"
    url: "https://fireflies.ai/pricing"
  - title: "tl;dv: homepage"
    url: "https://tldv.io/"
  - title: "Autoriteit Persoonsgegevens: Controle van communicatiemiddelen (opnemen telefoongesprekken)"
    url: "https://autoriteitpersoonsgegevens.nl/themas/werk-en-uitkering/controle-van-werknemers/controle-van-communicatiemiddelen"
  - title: "Autoriteit Persoonsgegevens: Voorwaarden voor controle werknemers"
    url: "https://autoriteitpersoonsgegevens.nl/themas/werk-en-uitkering/controle-van-werknemers/voorwaarden-voor-controle-werknemers"
  - title: "Autoriteit Persoonsgegevens: Grondslagen AVG uitgelegd"
    url: "https://autoriteitpersoonsgegevens.nl/themas/basis-avg/avg-algemeen/grondslagen-avg-uitgelegd"
---

## Hoe werkt notuleren met AI?

Notuleren met AI verloopt bij vrijwel alle tools in dezelfde stappen. De tool neemt het gesprek op, zet spraak om in tekst en herkent wie er spreekt. Daarna maakt een taalmodel van dat transcript een samenvatting, met besluiten en actiepunten. Het resultaat is een concept dat een mens nog moet controleren.

<figure class="diagram" role="img" aria-label="Vijf stappen van notuleren met AI: opnemen, transcriberen, samenvatten, controleren door een mens, en delen en bewaren volgens afspraak">
<ol class="flow">
<li><b>Opnemen</b>De tool luistert mee via het vergaderplatform, een bot of een app</li>
<li><b>Transcriberen</b>Spraak wordt tekst, met herkenning van sprekers</li>
<li><b>Samenvatten</b>Een taalmodel haalt besluiten, actiepunten en hoofdlijnen eruit</li>
<li><b>Controleren</b>Voorzitter of eigenaar corrigeert en stelt het verslag vast</li>
<li><b>Delen en bewaren</b>Verslag delen; opname en transcript bewaren of verwijderen volgens afspraak</li>
</ol>
<figcaption>Automatisch notuleren is een keten. De controle door een mens is de stap die het verschil maakt tussen een transcript en een betrouwbaar verslag.</figcaption>
</figure>

Er zijn grofweg drie manieren waarop een tool meeluistert:

- **Ingebouwd in je vergaderplatform**, zoals de AI-functies in Microsoft Teams. Er komt geen extra deelnemer bij.
- **Via een bot** die als deelnemer aan de vergadering wordt toegevoegd, vaak automatisch via je agenda.
- **Via een app op je computer** die het geluid lokaal opneemt, zonder dat er een bot inbelt.

Die keuze bepaalt meer dan je zou denken: wie ziet dat er wordt opgenomen, waar de data terechtkomt en of het ook werkt bij externe vergaderingen. AI-notulen zijn daarmee een goed voorbeeld van hoe je een klein stuk [bedrijfsprocessen automatiseren met AI](/nl/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai) kunt aanpakken: een afgebakende taak, een duidelijke menselijke controlestap en meetbaar resultaat.

## De beste tools om te notuleren met AI

Er bestaat niet één beste tool. De juiste keuze hangt af van je vergaderplatform, je taal en je eisen aan dataopslag. Hieronder een overzicht van veelgebruikte tools, op basis van de officiële productinformatie (stand september 2026). Functies en prijzen veranderen snel, dus controleer ze voordat je kiest.

| Tool | Hoe het meeluistert | Aandachtspunt (stand september 2026) |
|---|---|---|
| Microsoft Teams (met Teams Premium of Microsoft Copilot, voorheen Microsoft 365 Copilot) | Ingebouwd in Teams | Intelligent recap vraagt een Teams Premium- of Microsoft Copilot-licentie en ingeschakelde transcriptie |
| Otter.ai | Neemt deel aan Zoom, Google Meet en Teams, of neemt op via een desktopapp zonder bot | De prijspagina noemt transcriptie in het Engels, Spaans, Frans, Duits, Japans en Chinees; Nederlands staat er niet bij |
| Fireflies.ai | Bot die meedoet in de vergadering, een Chrome-extensie zonder bot of upload van audio- en videobestanden | Engels is de primaire taal; naast een paar andere talen noemt Fireflies meer dan honderd talen in bèta, Nederlands wordt niet apart genoemd |
| tl;dv | Werkt met Google Meet, Zoom en Microsoft Teams | Noemt transcriptie in meer dan dertig talen, AVG-naleving en opslag in de EU |

**Notuleren met Copilot in Teams.** Werk je in Microsoft 365, dan is dit de meest voor de hand liggende route. Volgens [Microsoft Learn](https://learn.microsoft.com/en-us/microsoftteams/intelligent-recap-calls-meetings) levert intelligent recap onder meer AI-notities, voorgestelde taken en sprekers- en hoofdstukmarkeringen, maar alleen als transcriptie aanstaat; voor de volledige ervaring moet ook opnemen zijn toegestaan. Copilot kan tijdens en na de vergadering vragen beantwoorden over wat er besproken is. Er is een instelling waarbij Copilot alleen tijdens de vergadering werkt, zonder dat er een transcript blijft bestaan, en Copilot werkt niet in vergaderingen die door een andere organisatie worden gehost.

**Externe tools** zoals Otter, Fireflies en tl;dv zijn handig als je veel buiten Teams vergadert. Let dan extra op de taalondersteuning voor Nederlands en op waar de opnames worden opgeslagen. Een bredere vergelijking van AI-tools en hoe je daartussen kiest, lees je in het overzicht van [AI tools voor organisaties](/nl/ai-automatisering/ai-tools).

## Privacy en AVG

Een vergadering opnemen is een verwerking van persoonsgegevens: stemmen, namen en alles wat mensen zeggen. De AVG is dus van toepassing, ook als de tool alleen een samenvatting bewaart. Veilig notuleren begint bij vier vragen.

**Welke grondslag heb je?** De AVG kent [zes grondslagen](https://autoriteitpersoonsgegevens.nl/themas/basis-avg/avg-algemeen/grondslagen-avg-uitgelegd). Binnen de organisatie is toestemming vaak geen goede basis: de AP wijst er bij het monitoren van personeel op dat werknemers een verzoek van hun werkgever moeilijk kunnen weigeren. Een gerechtvaardigd belang ligt meestal meer voor de hand, maar dan moet opnemen wel noodzakelijk zijn en mag het doel niet op een minder ingrijpende manier te bereiken zijn.

**Weten deelnemers het?** De AP is duidelijk over het [opnemen van telefoongesprekken van werknemers](https://autoriteitpersoonsgegevens.nl/themas/werk-en-uitkering/controle-van-werknemers/controle-van-communicatiemiddelen): medewerkers hebben het recht om te weten dat hun gesprek wordt opgenomen, eenmalig informeren bij indiensttreding is niet genoeg, en ook externe gesprekspartners moet je vooraf informeren en vertellen waarvoor je de opname gebruikt. Heimelijk opnemen mag vrijwel nooit. Voor een opgenomen vergadering ligt het voor de hand dezelfde lijn te volgen.

**Gebruik je het ook om medewerkers te controleren?** Kunnen opnames of transcripten worden gebruikt om medewerkers te beoordelen, dan gelden de [voorwaarden voor controle van werknemers](https://autoriteitpersoonsgegevens.nl/themas/werk-en-uitkering/controle-van-werknemers/voorwaarden-voor-controle-werknemers): onder meer vooraf informeren, instemming van de ondernemingsraad bij een regeling voor controle van personeel en, bij stelselmatige monitoring, een DPIA. Sluit dit gebruik liever expliciet uit.

**Waar staat de data en wie kan erbij?** Sluit een verwerkersovereenkomst met de leverancier, kijk waar opnames en transcripten worden opgeslagen, en spreek bewaartermijnen af. Wees extra voorzichtig met vergaderingen waarin gevoelige onderwerpen langskomen, zoals gezondheid in een verzuimgesprek of een reorganisatie. Daar zet je de AI-notulist beter uit.

Deze afspraken horen niet in een losse notitie, maar in je [AI beleid](/nl/ai-beleid), zodat iedereen dezelfde regels volgt.

## Zo richt je het in

1. **Kies één tool** die past bij je vergaderplatform en je taal, en die je zakelijk kunt contracteren. Laat medewerkers niet elk hun eigen gratis tool gebruiken.
2. **Leg de spelregels vast**: bij welke vergaderingen de notulist aan mag, hoe je dat aankondigt, wie het verslag controleert en hoe lang opnames en transcripten worden bewaard.
3. **Test met echte vergaderingen**, inclusief Nederlands vakjargon en externe deelnemers, en vergelijk het resultaat met een handmatig verslag.
4. **Maak iemand eigenaar** van het verslag. De AI levert het concept; een mens stelt het vast.
5. **Koppel pas daarna door.** Actiepunten automatisch in je takenlijst of CRM zetten is een logische volgende stap; hoe je zulke ketens bouwt en beheert, lees je bij [AI workflows](/nl/ai-automatisering/ai-workflows).

<aside class="scenario" aria-label="Voorbeeldscenario">
<p class="scenario-label">Voorbeeldscenario</p>
<p>Een adviesbureau met 60 medewerkers heeft zo'n 25 interne overleggen per week. Een verslag uitwerken kost gemiddeld drie kwartier, samen ongeveer negentien uur per week.</p>
<p>Het bureau werkt al in Microsoft 365 en kiest voor Copilot in Teams, met licenties voor de medewerkers die vergaderingen voorzitten. De adviseur helpt de spelregels opstellen: geen AI-notulist bij personeelsgesprekken en vertrouwelijke klantoverleggen, opname vooraf aankondigen, de voorzitter stelt het verslag vast en transcripten worden na dertig dagen verwijderd. Eerst draait een test met tien echte vergaderingen, inclusief vakjargon.</p>
<p>Na drie maanden kost controleren en corrigeren ongeveer een kwartier per verslag. Dat scheelt zo'n twaalf uur per week. Actiepunten gaan bewust nog niet automatisch naar de takenlijst: eerst moet de kwaliteit van de verslagen een paar maanden stabiel blijven.</p>
<p class="scenario-note">Fictief voorbeeld, samengesteld uit situaties die veel voorkomen. Organisatie en cijfers zijn illustratief.</p>
</aside>

Notuleren met AI is vaak een goede eerste stap, maar het levert het meeste op als het past in een bredere aanpak. Hoe je bepaalt welke taken je automatiseert en in welke volgorde, lees je op de pagina over [AI automatisering](/nl/ai-automatisering). Wil je sparren over de juiste tool en de privacyafspraken voor jouw organisatie? [Plan een adviesgesprek](/nl/contact).
