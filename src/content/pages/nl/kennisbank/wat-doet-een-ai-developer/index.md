---
id: C5-04
lang: nl
url: /nl/kennisbank/wat-doet-een-ai-developer
parent: C5-00
cluster: "5. AI Development"
pageType: Kennisbank
schema: article
navLabel: "Wat doet een AI developer?"
title: "Wat doet een AI developer?"
metaTitle: "Wat doet een AI developer? Taken, skills en samenwerking"
metaDescription: "Wat doet een AI developer en hoe verschilt die van een AI consultant? Lees over taken, vaardigheden, tools en hoe je goed samenwerkt met AI developers."
keyphrase: wat doet een ai developer
eyebrow: "Kennisbank"
lede: "Wat doet een AI developer precies? Kort gezegd: die bouwt de software waarin AI het werk doet, van koppeling tot evaluatie. In dit artikel lees je welke taken daarbij horen, welke vaardigheden en tools een AI developer gebruikt, en hoe de rol verschilt van die van een AI consultant zoals ik."
primaryCta: { label: "Lees meer over AI development", href: /nl/ai-development }
secondaryCta: { label: "Plan een adviesgesprek", href: /nl/contact }
summary:
  - "Een AI developer bouwt, test en onderhoudt software waarin een AI-model een kernrol speelt."
  - "Het meeste werk zit in data, koppelingen en evaluatie, niet in het model zelf."
  - "Een AI consultant bepaalt wat er gebouwd moet worden; een AI developer bouwt het."
published: "2026-09-23"
updated: "2026-09-23"
sources: []
---

## Wat is een AI developer?

Een AI developer is een softwareontwikkelaar die toepassingen bouwt waarin kunstmatige intelligentie een kernrol speelt. Denk aan een assistent die vragen beantwoordt op basis van interne documenten, een applicatie die gegevens uit formulieren haalt of een agent die taken uitvoert in andere systemen.

Wat doet een AI developer dan anders dan een gewone ontwikkelaar? Het verschil zit in de onvoorspelbaarheid. Gewone software doet wat je programmeert. Een AI-model geeft een waarschijnlijk antwoord, en dat antwoord kan fout zijn. Een groot deel van het werk van een AI developer bestaat daarom uit meten, testen en afvangen: hoe goed werkt het, waar gaat het mis en wat gebeurt er dan?

De titel wordt breed gebruikt. Soms bedoelt men een machine learning engineer die zelf modellen traint. Vaker gaat het tegenwoordig om een ontwikkelaar die bestaande modellen van een leverancier inzet en er een toepassing omheen bouwt. Een overzicht van de verschillende profielen, van strategisch tot technisch, staat bij [soorten AI specialisten](/nl/ai-development/ai-specialist).

## Taken

De taken van een AI developer verschillen per project, maar komen meestal neer op zes onderdelen:

<figure class="diagram" role="img" aria-label="De zes kerntaken van een AI developer in volgorde: vraag vertalen, data voorbereiden, oplossing bouwen, koppelen, evalueren en beheren">
<ol class="flow">
<li><b>Vraag vertalen</b>Een functionele wens omzetten in een technisch ontwerp met meetbare eisen</li>
<li><b>Data voorbereiden</b>Bronnen ontsluiten, opschonen en structureren zodat een model ermee kan werken</li>
<li><b>Oplossing bouwen</b>Een model kiezen of trainen, prompts en regels opstellen, de applicatielogica schrijven</li>
<li><b>Koppelen</b>De toepassing verbinden met bestaande systemen, inclusief rechten en beveiliging</li>
<li><b>Evalueren</b>Testsets opstellen, kwaliteit meten, fouten analyseren en verbeteren</li>
<li><b>Beheren</b>Monitoren na livegang, bijsturen als data of onderliggende modellen veranderen</li>
</ol>
<figcaption>Het model zelf is vaak een klein deel van het werk; data, koppelingen en evaluatie kosten de meeste tijd.</figcaption>
</figure>

In de praktijk schuift het zwaartepunt naar de randen. Het aanroepen van een model is technisch niet ingewikkeld. Zorgen dat de juiste data op het juiste moment beschikbaar is, dat de toepassing niet meer ziet dan de gebruiker mag zien, en dat je kunt aantonen hoe goed het werkt: dat is waar het vakmanschap zit. Een rommelig datafundament is dan ook een veelvoorkomende rem, zoals ik beschreef in [het datafundament onder AI](/nl/inzichten/het-datafundament-onder-ai).

Wat een AI developer doorgaans níét doet: bepalen of de toepassing de investering waard is, kiezen tussen leveranciers namens de organisatie, of de governance inrichten. Daar is een andere rol voor nodig, en daar kom ik verderop op terug.

<aside class="scenario" aria-label="Voorbeeldscenario">
<p class="scenario-label">Voorbeeldscenario</p>
<p>Een industrieel bedrijf met 300 medewerkers wil een assistent laten bouwen waarmee servicemonteurs vragen kunnen stellen over ruim 2.000 technische handleidingen.</p>
<p>De adviseur stelt samen met de servicemanager een specificatie op met meetbare eisen, plus een testset van 150 echte vragen waarvan senior monteurs de juiste antwoorden hebben vastgelegd. Die testset blijft van het bedrijf. Een ontwikkelpartij die het bedrijf rechtstreeks contracteert, bouwt de assistent. De adviseur toetst elke oplevering tegen de afgesproken eis van 85 procent juiste antwoorden.</p>
<p>De eerste oplevering scoort 71 procent. De developers vinden de oorzaak: verouderde versies van handleidingen werden als bron meegenomen. Na het opschonen van de bronnen scoort de assistent 87 procent en gaat hij na veertien weken live. Een koppeling met het ERP-systeem om onderdelen te bestellen is bewust doorgeschoven naar een tweede fase.</p>
<p class="scenario-note">Fictief voorbeeld, samengesteld uit situaties die veel voorkomen. Organisatie en cijfers zijn illustratief.</p>
</aside>

## Vaardigheden en tools

Een goede AI developer combineert gewone softwarevaardigheden met kennis van hoe modellen zich gedragen. De belangrijkste vaardigheden:

- **Programmeren.** Python wordt in AI-werk veel gebruikt; daarnaast kennis van de talen en omgevingen waarin de rest van je software draait.
- **Werken met data.** Databases, datastromen, opschonen en structureren. Zonder bruikbare data geen bruikbare AI.
- **Werken met modellen.** Weten wanneer je een bestaand taalmodel gebruikt, wanneer je het met eigen documenten aanvult en wanneer trainen zinvol is. Het formuleren van goede instructies hoort daarbij; daarover gaat [prompt engineering](/nl/kennisbank/prompt-engineering).
- **Integratie.** API's, authenticatie, rechtenmodellen en de systemen die je al gebruikt.
- **Evaluatie en testen.** Testsets opbouwen, kwaliteit meetbaar maken en fouten systematisch analyseren.
- **Beveiliging en privacy.** Weten welke data waar terechtkomt, en wat de AVG en de AI-verordening daarover vragen.

Qua tools werkt een AI developer met ontwikkelomgevingen, versiebeheer, cloudplatforms, de API's van modelleveranciers en frameworks voor machine learning en voor het bouwen van toepassingen rond taalmodellen. Welke precies, verschilt per organisatie en verandert snel. Een goede developer kiest tools die passen bij je bestaande landschap, niet de nieuwste.

Voor wie **AI developer wil worden**: een achtergrond in softwareontwikkeling, informatica of data science is het gebruikelijke vertrekpunt. Daarna leer je het vak vooral door te bouwen, te meten en van fouten te leren. Wat de rol ongeveer oplevert, staat in het overzicht van het [salaris van een AI specialist](/nl/kennisbank/ai-specialist-salaris).

## AI developer versus AI consultant

Een AI developer en een AI consultant werken aan hetzelfde doel, maar vanuit een andere vraag. De developer vraagt: hoe bouwen we dit goed? De consultant vraagt: moeten we dit bouwen, en zo ja, wat, door wie en hoe weten we of het werkt?

| | AI developer | AI consultant |
|---|---|---|
| Kernvraag | Hoe bouwen we dit? | Wat bouwen we, en waarom? |
| Product | Werkende software | Onderbouwd besluit, specificatie, selectieadvies |
| Werkt aan | Code, data, koppelingen, evaluatie | Prioriteiten, business case, leverancierskeuze, governance |
| Zit meestal | Bij de bouwpartij of in je IT-team | Aan de kant van de opdrachtgever |

Ik ben zelf AI consultant en geen developer. Ik schrijf geen code en verkoop geen implementaties. In een ontwikkeltraject help ik bepalen wat er gebouwd moet worden, begeleid ik de keuze van een bouwpartij en toets ik of de oplevering doet wat is afgesproken. Het bouwen doet je eigen team of een ontwikkelpartij die je rechtstreeks contracteert. Wat een consultant verder doet, lees je in [wat doet een AI consultant](/nl/kennisbank/wat-doet-een-ai-consultant).

Die scheiding is geen formaliteit. Wie adviseert over wat er gebouwd moet worden en er zelf aan verdient, heeft belang bij een grotere scope. Een onafhankelijke adviseur naast een goede developer geeft je allebei: vakmanschap in de bouw en een tegenstem aan jouw kant van de tafel.

Voor een goede samenwerking met AI developers helpt het om drie dingen vooraf te regelen: een specificatie met meetbare eisen, een testset op je eigen data die van jou blijft, en afspraken over beheer en overdracht. Of je daarbij standaardsoftware inzet of laat bouwen, lees je bij [AI software kiezen of laten bouwen](/nl/ai-development/ai-software). Hoe het hele traject verloopt, staat op de pagina over [AI development](/nl/ai-development).

Sta je op het punt een AI developer of bouwpartij in te schakelen en wil je vooraf sparren over de opdracht? [Neem contact op](/nl/contact) voor een gesprek van dertig minuten.
