---
id: C7-05
lang: nl
url: /nl/markten/onderwijs
parent: C7-00
cluster: "7. AI markten"
pageType: Branche
schema: article
navLabel: AI in het onderwijs
title: "AI in het onderwijs: toepassingen, kansen en uitdagingen"
metaTitle: "AI in het onderwijs | Toepassingen, kansen en beleid"
metaDescription: "Hoe zet je AI verantwoord in binnen het onderwijs? Lees over toepassingen voor docenten en studenten, AI-beleid voor scholen en de voor- en nadelen van AI."
keyphrase: ai onderwijs
eyebrow: "AI in het onderwijs"
lede: "AI in het onderwijs is geen toekomstvraag meer: docenten, studenten en ondersteunende diensten gebruiken het vaak al, met of zonder beleid. Op deze pagina lees je welke toepassingen zinvol zijn, hoe je AI in een onderwijsorganisatie invoert en welke regels voor scholen gelden."
primaryCta: { label: "Lees meer over Markten", href: /nl/markten }
secondaryCta: { label: "Plan een adviesgesprek", href: /nl/contact }
summary:
  - "Een deel van de AI-toepassingen in het onderwijs valt onder de hoog-risicoregels van de AI Act, zoals toelating, beoordeling en toezicht op toetsen."
  - "Emotieherkenning in onderwijsinstellingen is sinds februari 2025 verboden, op medische en veiligheidsredenen na."
  - "Begin met een inventarisatie van wat er al gebruikt wordt, niet met een nieuwe tool."
published: "2026-09-23"
updated: "2026-09-23"
# Planning C7-00/C7-06: sectorpagina alleen publiceren bij aantoonbare ervaring of cases. Zet op false (of verwijder) zodra Dave dat bevestigt.
noindex: true
faqTitle: "Veelgestelde vragen"
faq:
  - q: "Mogen leerlingen en studenten ChatGPT of vergelijkbare tools gebruiken?"
    a: "Dat is in de eerste plaats een onderwijskundige keuze van de instelling, niet een juridische. Leg per type opdracht vast wat mag, hoe het gebruik zichtbaar wordt gemaakt en wat er gebeurt bij misbruik. Let daarnaast op privacy: laat leerlingen geen persoonsgegevens invoeren in tools waar de school geen afspraken mee heeft."
  - q: "Is AI die opdrachten nakijkt een hoog-risicotoepassing?"
    a: "Als het systeem bedoeld is om leerresultaten te beoordelen, valt het volgens de AI Act in de hoog-risicocategorie, ook als die beoordeling het leerproces stuurt. Dan gelden er strengere eisen, onder meer voor menselijk toezicht. Een tool die alleen feedbacksuggesties geeft die de docent zelf beoordeelt, kan anders uitvallen. Laat de classificatie per toepassing toetsen."
  - q: "Wie is verantwoordelijk: de school of de leverancier?"
    a: "Allebei, voor een ander deel. De leverancier is als aanbieder verantwoordelijk voor het systeem zelf. Bij een hoog-risicosysteem is de school als gebruiksverantwoordelijke verantwoordelijk voor hoe het wordt ingezet: menselijk toezicht, het informeren van betrokkenen en het gebruik volgens de instructies. Leg die verdeling vast in het contract."
  - q: "Moet elke docent een AI-training volgen?"
    a: "De AI Act vraagt organisaties die AI inzetten om maatregelen te nemen die de AI-geletterdheid van hun mensen ondersteunen. Sinds de Digital Omnibus is er geen verplicht 'toereikend niveau' meer en is geen certificaat nodig. In de praktijk is een basisniveau voor iedereen plus verdieping voor wie met hoog-risicosystemen werkt een verstandige lijn."
  - q: "Kan een school AI gebruiken om fraude met AI op te sporen?"
    a: "Wees terughoudend. Systemen die toezicht houden op ongeoorloofd gedrag tijdens toetsen vallen onder de hoog-risicoregels. En een detectiescore is geen bewijs: gebruik de uitkomst hooguit als aanleiding voor een gesprek, nooit als enige grond voor een sanctie."
sources:
  - title: "Europese Commissie: AI Act, tijdlijn en toepassing"
    url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai"
  - title: "Europese Commissie: AI Omnibus treedt in werking (27 juli 2026)"
    url: "https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force"
  - title: "Verordening (EU) 2024/1689 (AI Act), officiële tekst op EUR-Lex"
    url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"
  - title: "Future of Privacy Forum: The AI Act implementation timeline, what changes under the AI Omnibus"
    url: "https://fpf.org/blog/the-ai-act-implementation-timeline-what-changes-under-the-ai-omnibus/"
  - title: "Kennisnet: Voldoen aan de AI-verordening"
    url: "https://www.kennisnet.nl/artificial-intelligence/met-deze-wetgeving-rond-ai-hebben-scholen-te-maken"
  - title: "SIVON en Kennisnet: Toetsingskader AI funderend onderwijs (versie 1.0)"
    url: "https://www.sivon.nl/toetsingskader/"
  - title: "SIVON: Nieuw raamwerk AI-geletterdheid voor primair en voortgezet onderwijs"
    url: "https://sivon.nl/2026/09/nieuw-raamwerk-ai-geletterdheid-voor-primair-en-voortgezet-onderwijs/"
  - title: "SURF: Handreiking AI en informatiebeveiliging binnen onderwijsinstellingen"
    url: "https://sec.surf.nl/assets/handreiking-ai-en-informatiebeveiliging-binnen-onderwijs/"
---

## AI in het onderwijs: toepassingen, kansen en uitdagingen

AI in het onderwijs raakt twee werelden tegelijk. Aan de ene kant het primaire proces: lesgeven, leren, toetsen en begeleiden. Aan de andere kant de organisatie: roosters, administratie, communicatie met ouders en studenten, en beleid. De kansen en risico's verschillen sterk tussen die twee.

In het primaire proces is AI vooral een hulpmiddel voor docenten en een nieuw gegeven voor leerlingen, dat vragen oproept over leren, toetsen en eerlijkheid. In de organisatie lijkt AI meer op wat je in andere sectoren ziet: minder handwerk, sneller antwoord op vragen en betere informatie voor besluiten.

Eerlijk vooraf: onderwijs is niet mijn zwaartepunt. De vraagstukken die bij invoering spelen (wat pak je eerst op, welk systeem kies je, hoe borg je het) lijken wel sterk op die in andere sectoren. Voor onderwijskundige en didactische vragen heb je daarnaast specialisten uit het onderwijs nodig.

<aside class="scenario" aria-label="Voorbeeldscenario">
<p class="scenario-label">Voorbeeldscenario</p>
<p>Een mbo-instelling met 6.000 studenten en 550 medewerkers wil een tool aanschaffen die schrijfopdrachten nakijkt. Voordat er getekend wordt, vraagt het bestuur om overzicht.</p>
<p>De adviseur begeleidt de inventarisatie en de classificatie. Die levert 23 tools en AI-functies in bestaande systemen op, waarvan drie mogelijk hoog risico. De nakijktool is er een van, omdat die leerresultaten zou beoordelen. De aanschaf wordt aangehouden tot er een plan ligt voor menselijk toezicht en de afspraken met de leverancier. Als eerste stap kiest de instelling een assistent voor vragen aan de studentenadministratie, die ze rechtstreeks inkoopt.</p>
<p>Na drie maanden beantwoordt de assistent zo'n 490 van de 1.400 vragen per maand zelf, met de bron erbij. Bij 6 minuten per vraag scheelt dat ongeveer 49 uur per maand. Vragen over individuele studenten gaan altijd naar een medewerker.</p>
<p class="scenario-note">Fictief voorbeeld, samengesteld uit situaties die veel voorkomen. Organisatie en cijfers zijn illustratief.</p>
</aside>

## 10 praktische toepassingen

Vijf toepassingen in het primaire proces:

1. **Lesvoorbereiding:** een eerste opzet voor een les, opdracht of casus, die de docent aanpast aan de groep.
2. **Differentiatie:** dezelfde stof uitleggen op verschillende niveaus of in eenvoudiger taal.
3. **Oefenmateriaal:** extra oefenvragen of voorbeelden bij een onderwerp, waarbij de docent controleert op juistheid.
4. **Feedback op concepten:** suggesties bij een conceptversie van een verslag, die de docent beoordeelt voordat de student ze krijgt.
5. **Toegankelijkheid:** vertalen van berichten voor ouders, voorlezen of samenvatten voor leerlingen die daar baat bij hebben.

Vijf toepassingen in de organisatie:

6. **Vragen van studenten en ouders:** een assistent die veelgestelde vragen over roosters, inschrijving of regelingen beantwoordt, met de bron erbij.
7. **Verslaglegging:** vergaderingen samenvatten en actiepunten vastleggen. Let op bij gesprekken over individuele leerlingen; meer daarover in mijn stuk over [notuleren met AI](/nl/kennisbank/notuleren-met-ai).
8. **Beleidsdocumenten doorzoeken:** medewerkers vinden sneller wat er in reglementen en handboeken staat.
9. **Roosteren en planning:** ondersteuning bij puzzels met lokalen, docenten en groepen.
10. **Signaleren van uitval:** patronen in aanwezigheid of voortgang zichtbaar maken voor een mentor. Hier is voorzichtigheid geboden, zie hieronder.

Een deel van deze toepassingen kan onder de hoog-risicoregels van de AI Act vallen, afhankelijk van het precieze doel. Dat geldt vooral voor alles wat raakt aan toelating, beoordeling, niveaubepaling en toezicht op toetsen.

## AI implementeren in een onderwijsorganisatie

Vaak begin je niet bij nul. Docenten gebruiken al generatieve AI, leveranciers van leermiddelen en administratiesystemen voegen AI-functies toe en er draaien losse proeven. Invoering begint dus met overzicht, niet met aanschaf.

<figure class="diagram" role="img" aria-label="Vijf stappen om AI in te voeren in een onderwijsorganisatie: inventariseren, classificeren, kaders vastleggen, beproeven in het echte werk en borgen">
<ol class="flow">
<li><b>Inventariseren</b>Welke systemen, tools en leermiddelen met AI worden al gebruikt, en door wie?</li>
<li><b>Classificeren</b>Per toepassing: verboden, hoog risico, transparantieplicht of laag risico</li>
<li><b>Kaders</b>Wat mag, wat niet, wie beslist en welke afspraken met leveranciers</li>
<li><b>Beproeven</b>Een kleine toepassing in de echte les of het echte proces, met een stopcriterium</li>
<li><b>Borgen</b>Eigenaar, scholing, evaluatie en periodieke herbeoordeling</li>
</ol>
<figcaption>Invoering in vijf stappen. De eerste twee stappen leveren vaak al de belangrijkste inzichten op.</figcaption>
</figure>

Voor de eerste stappen hoef je het wiel niet uit te vinden. [Kennisnet](https://www.kennisnet.nl/artificial-intelligence/met-deze-wetgeving-rond-ai-hebben-scholen-te-maken) beschrijft een stappenplan voor scholen, van inventariseren tot periodiek herzien. Voor het funderend onderwijs publiceerden SIVON en Kennisnet in april 2026 een toetsingskader waarmee leveranciers en scholen kunnen nagaan of een AI-systeem onder de AI Act valt en in welke risicoklasse. Voor informatiebeveiliging heeft SURF een handreiking die AI-risico's koppelt aan het bestaande SURFaudit-toetsingskader.

Twee lessen uit andere sectoren gelden hier net zo goed. Adoptie hangt af van het werk dat mensen doen, niet van de licentie die ze krijgen; zie [AI-adoptie begint bij het werk](/nl/inzichten/ai-adoptie-begint-bij-het-werk). En kies leveranciers op basis van vooraf vastgestelde criteria, niet op basis van de demo. Weet je nog niet waar je organisatie staat, dan geeft een [AI Readiness Assessment](/nl/diensten/ai-readiness-assessment) in {{timing:ai-readiness-assessment}} een nuchter beeld en een plan voor de eerste negentig dagen.

## AI-beleid voor onderwijsinstellingen

Een goed AI-beleid voor scholen is kort genoeg om gelezen te worden en concreet genoeg om te gebruiken. Het beantwoordt in elk geval deze vragen:

- **Gebruik door leerlingen en studenten:** wat mag bij welk type opdracht, en hoe maak je gebruik zichtbaar?
- **Gebruik door medewerkers:** welke tools zijn goedgekeurd, en welke gegevens mogen er nooit in?
- **Toetsing:** hoe borg je dat een beoordeling van de docent blijft, en hoe ga je om met vermoedens van misbruik?
- **Inkoop:** welke eisen stel je aan leveranciers, onder meer over de AVG, datalocatie en de AI Act?
- **Eigenaarschap:** wie beslist over nieuwe toepassingen, en wie houdt het overzicht bij?

De wettelijke kaders daarbij zijn de AI Act en de AVG. De AI Act noemt vier soorten onderwijstoepassingen hoog risico: systemen voor toelating of plaatsing, voor het beoordelen van leerresultaten, voor het bepalen van het passende onderwijsniveau en voor toezicht op ongeoorloofd gedrag tijdens toetsen. Door de Digital Omnibus gelden de eisen voor die systemen volgens de [Europese Commissie](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai) vanaf 2 december 2027. Sinds 2 februari 2025 is het al verboden om in onderwijsinstellingen AI te gebruiken om emoties van mensen af te leiden, behalve om medische of veiligheidsredenen.

Daarnaast vraagt de AI Act organisaties die AI inzetten om de AI-geletterdheid van hun mensen te ondersteunen. De Digital Omnibus, die op 27 juli 2026 in werking trad, heeft die plicht vereenvoudigd: er is geen verplicht 'toereikend niveau' meer en een certificaat is niet nodig. Kennisnet en de Universiteit Twente publiceerden in september 2026 een raamwerk AI-geletterdheid voor het primair en voortgezet onderwijs. Hoe je dat vertaalt naar scholing voor je eigen team, lees je bij [AI-geletterdheid trainen](/nl/ai-workshop/ai-geletterdheid-training).

Beleid hoeft geen dik document te worden. Hoe je met een paar heldere afspraken verder komt dan met een uitgebreid reglement, beschrijf ik in [AI-governance zonder bureaucratie](/nl/inzichten/ai-governance-zonder-bureaucratie). Een bredere aanpak voor het opstellen van beleid staat op de pagina over [AI-beleid](/nl/ai-beleid), en wat de wet precies vraagt lees je bij [de AI Act](/nl/ai-beleid/ai-act).

## Nadelen en risico's

AI in het onderwijs heeft ook nadelen, en het is goed die hardop te benoemen:

- **Leren wordt overgeslagen.** Een leerling die een opdracht door AI laat maken, heeft een product maar niet het leerproces. Dat vraagt om andere opdrachten en toetsvormen, niet alleen om regels.
- **Fouten klinken overtuigend.** Generatieve AI geeft soms onjuiste informatie met grote stelligheid. Controle door de docent blijft nodig.
- **Ongelijkheid.** Niet elke leerling heeft thuis dezelfde tools of dezelfde begeleiding bij het gebruik ervan.
- **Privacy.** Leerlinggegevens gaan vaak over minderjarigen en soms over gevoelige onderwerpen zoals zorg en begeleiding. Beoordeel per toepassing of een DPIA nodig is.
- **Afhankelijkheid van leveranciers.** Als AI-functies in je leerplatform zitten, bepaalt de leverancier veel van wat er gebeurt. Maak afspraken over transparantie en exit.
- **Signalering die een oordeel wordt.** Een uitvalsignaal is een aanleiding voor een gesprek, geen conclusie over een leerling.

Onderwijs deelt veel van deze risico's met de zorg, waar ook gevoelige gegevens en kwetsbare groepen centraal staan; zie [AI in de zorg](/nl/markten/zorg). Voor communicatie en werving van studenten is [AI voor marketing](/nl/markten/marketing) relevant. Alle sectoren staan op het [overzicht van markten](/nl/markten).

Wil je bespreken waar je instelling staat en wat een verstandige eerste stap is? [Plan een gesprek van dertig minuten](/nl/contact).
