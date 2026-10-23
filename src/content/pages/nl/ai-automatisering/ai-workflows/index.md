---
id: C3-04
url: /ai-automatisering/ai-workflows
parent: C3-00
cluster: "3. AI Automatisering"
pageType: Spoke
schema: article
navLabel: AI workflows
title: "AI workflows: zo automatiseer je werk van begin tot eind"
metaTitle: "AI workflows | Voorbeelden en aanpak voor bedrijven"
metaDescription: "Wat is een AI workflow en hoe zet je er een op? Bekijk voorbeelden van AI workflows voor bedrijven, de benodigde tools en een veilige aanpak voor je team."
keyphrase: ai workflow
eyebrow: "AI workflows"
lede: "Een AI workflow is een vaste reeks stappen waarin één of meer stappen door een AI-model worden uitgevoerd: een e-mail lezen, een document uitpluizen, een concept schrijven. De rest van de keten bestaat uit gewone koppelingen en een mens die controleert. Hier lees je hoe zo'n workflow eruitziet, welke tools je nodig hebt en hoe je hem veilig invoert."
primaryCta: { label: "Lees meer over AI Automatisering", href: /ai-automatisering }
secondaryCta: { label: "Bekijk het AI Readiness Assessment", href: /diensten/ai-readiness-assessment }
summary:
  - "Een AI workflow volgt een vaste route; alleen enkele stappen gebruiken AI."
  - "Bouw de controlestap en de logging in vanaf de eerste versie."
  - "Kies een workflow als de route voorspelbaar is, een agent pas als dat niet zo is."
published: "2026-09-23"
updated: "2026-09-23"
faqTitle: "Veelgestelde vragen"
faq:
  - q: "Wat kost een AI workflow per maand?"
    a: "Dat bestaat uit drie delen: het abonnement op het workflowplatform, de verbruikskosten van het AI-model per verwerkte taak en de tijd voor beheer. De eerste twee hangen sterk af van het volume. Laat de leverancier of bouwpartij de kosten per verwerkte taak uitrekenen en vermenigvuldig die met je verwachte volume, en met het dubbele daarvan."
  - q: "Welke gegevens mag ik door een AI workflow laten gaan?"
    a: "Stel eerst vast of er persoonsgegevens of vertrouwelijke bedrijfsinformatie in de stroom zitten. Zo ja, controleer waar het AI-model en het platform die gegevens verwerken en opslaan, of ze worden gebruikt om modellen te trainen en of er een verwerkersovereenkomst is. Stuur alleen de velden mee die de AI-stap echt nodig heeft."
  - q: "Wie in mijn team moet een AI workflow beheren?"
    a: "Iemand die het proces kent en iemand die het platform kent. Vaak is dat een procesverantwoordelijke uit de business plus een functioneel beheerder of IT-medewerker. De procesverantwoordelijke beoordeelt de kwaliteit van de uitkomsten, de beheerder houdt koppelingen, rechten en foutmeldingen in de gaten."
  - q: "Wat doe ik als het AI-model achter mijn workflow verandert?"
    a: "Leveranciers vervangen modellen regelmatig door nieuwe versies. Houd daarom een vaste testset bij met echte voorbeelden en de gewenste uitkomst. Draai die set opnieuw bij elke modelwissel en vergelijk de resultaten voordat je de nieuwe versie in productie neemt."
sources:
  - title: "Zapier: AI-automatisering en integraties (stand september 2026)"
    url: "https://zapier.com/"
  - title: "Make: visueel automatiseringsplatform (stand september 2026)"
    url: "https://www.make.com/en"
  - title: "n8n: workflowautomatisering, zelf te hosten (stand september 2026)"
    url: "https://n8n.io/"
  - title: "Microsoft Learn: What is Power Automate?"
    url: "https://learn.microsoft.com/en-us/power-automate/flow-types"
  - title: "Microsoft Learn: Overview of AI Builder"
    url: "https://learn.microsoft.com/en-us/ai-builder/overview"
---

## Wat is een AI workflow?

Een AI workflow is een geautomatiseerde reeks stappen waarin minstens één stap door een AI-model wordt gedaan. De route ligt vast: eerst dit, dan dat, bij uitkomst A naar links, bij uitkomst B naar rechts. De AI doet alleen het deel waar gewone regels tekortschieten, zoals een e-mail in vrije tekst begrijpen of gegevens uit een pdf halen.

Een AI workflow bestaat bijna altijd uit dezelfde bouwstenen:

- **Trigger:** iets start de workflow, zoals een nieuwe e-mail, een formulier of een tijdstip.
- **Ophalen:** de workflow verzamelt wat nodig is uit je systemen.
- **AI-stap:** het model leest, classificeert, vat samen of schrijft een concept.
- **Controle:** regels checken de uitkomst en een mens beoordeelt wat ertoe doet.
- **Actie:** de workflow schrijft iets weg, maakt een taak aan of zet een bericht klaar.
- **Logging:** elke stap wordt vastgelegd, zodat je kunt terugzien wat er gebeurde.

<figure class="diagram" role="img" aria-label="Opbouw van een AI workflow: trigger, gegevens ophalen, AI-stap, controle door regels en een mens, actie in een systeem, en logging van elke stap">
<ol class="flow">
<li><b>Trigger</b>Nieuwe e-mail, formulier of tijdstip</li>
<li><b>Ophalen</b>Klantgegevens, orderhistorie, documenten</li>
<li><b>AI-stap</b>Lezen, classificeren, samenvatten of concept schrijven</li>
<li><b>Controle</b>Regelcheck plus beoordeling door een medewerker</li>
<li><b>Actie</b>Wegschrijven, taak aanmaken of bericht klaarzetten</li>
<li><b>Logging</b>Elke stap vastgelegd voor controle en verbetering</li>
</ol>
<figcaption>De bouwstenen van een AI workflow. De AI-stap is één schakel; de rest is gewone automatisering en menselijke controle.</figcaption>
</figure>

Het verschil met een losse AI-assistent: een assistent wacht op een vraag van een gebruiker, een AI workflow draait mee in je proces en doet telkens dezelfde stap. AI workflow automatisering is daarmee een onderdeel van [AI automatisering](/ai-automatisering) in bredere zin.

## AI workflow voorbeelden

Drie voorbeelden van AI workflows voor bedrijven, generiek beschreven. Ze zijn bewust klein: één proces, een duidelijke controlestap, een meetbaar resultaat.

### Inbox en klantvragen

Een e-mail komt binnen in de algemene inbox. De workflow haalt de afzender op in het CRM en geeft de mail aan een AI-stap, die het onderwerp bepaalt (bestelling, klacht, factuurvraag, overig) en de urgentie inschat. Bij een bekend onderwerp stelt de AI een conceptantwoord op uit de kennisbank. Het concept komt als taak bij de juiste medewerker, die het controleert en verstuurt. Twijfelt het model, dan gaat de mail zonder concept naar een mens.

### Content en marketing

Een productmanager vult een kort formulier in met nieuwe productgegevens. De workflow haalt de specificaties op, laat de AI-stap een producttekst en een paar varianten voor social media schrijven in de huisstijl, en zet alles klaar in het contentsysteem als concept. Een redacteur keurt goed of past aan. Feitelijke gegevens zoals prijzen en maten komen uit het productsysteem, niet uit het taalmodel. Meer over AI in dit vakgebied lees je bij [AI voor marketing](/markten/marketing).

### Finance en administratie

Een leverancier mailt een factuur als pdf. De workflow slaat de bijlage op, de AI-stap leest leverancier, bedrag, btw en ordernummer uit, en een regelstap vergelijkt die gegevens met de inkooporder. Klopt alles binnen de afgesproken marge, dan staat de factuur klaar ter goedkeuring. Wijkt iets af, dan krijgt de crediteurenadministratie een melding met het verschil. Betalen doet de workflow nooit zelf.

Meer voorbeelden per proces en een methode om te kiezen welk proces je als eerste aanpakt, vind je bij [bedrijfsprocessen automatiseren met AI](/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai).

<aside class="scenario" aria-label="Voorbeeldscenario">
<p class="scenario-label">Voorbeeldscenario</p>
<p>Een onderhoudsbedrijf met 70 medewerkers krijgt ongeveer 600 mails per week in de algemene inbox: storingsmeldingen, afspraakverzoeken, factuurvragen en overige post. Twee planners sorteren alles met de hand en zijn daar samen zo'n 10 uur per week mee bezig.</p>
<p>De adviseur tekent de route uit met de planners en stelt de eisen op voor een workflow in Power Automate, die de eigen IT-beheerder bouwt. De AI-stap bepaalt onderwerp en urgentie; bij twijfel gaat de mail ongesorteerd naar een planner. In de eerste zes weken controleert een planner elke dag een steekproef van twintig mails.</p>
<p>Na zes weken wordt 92 procent van de mails juist ingedeeld en daalt de sorteertijd van 10 naar ongeveer 3 uur per week. De workflow stuurt zelf niets naar klanten.</p>
<p class="scenario-note">Fictief voorbeeld, samengesteld uit situaties die veel voorkomen. Organisatie en cijfers zijn illustratief.</p>
</aside>

## Tools voor AI workflows

Voor de meeste AI workflows heb je een workflowplatform nodig dat je systemen koppelt en een AI-stap kan aanroepen. Vier bekende platforms, elk met een eigenschap zoals de leverancier die zelf noemt (stand september 2026):

| Platform | Relevante eigenschap volgens de leverancier |
|---|---|
| [Zapier](https://zapier.com/) | Richt zich op het koppelen van veel apps; noemt meer dan 9.000 koppelingen en biedt AI-agents |
| [Make](https://www.make.com/en) | Visueel platform waarin je stromen als schema bouwt; meldt meer dan 3.000 kant-en-klare app-koppelingen |
| [n8n](https://n8n.io/) | Zelf te hosten (onder meer met Docker) naast een gehoste versie; meer dan 500 koppelingen |
| [Power Automate](https://learn.microsoft.com/en-us/power-automate/flow-types) | Cloud flows en desktop flows; AI-modellen via [AI Builder](https://learn.microsoft.com/en-us/ai-builder/overview), bijvoorbeeld voor documentverwerking |

Welke past, hangt minder af van de functielijst dan van je situatie. Werk je al volledig in Microsoft 365, dan ligt Power Automate voor de hand. Wil je data binnen je eigen omgeving houden, dan is een zelf te hosten platform een optie, maar dan ben je ook zelf verantwoordelijk voor beheer en beveiliging. Prijzen en functies veranderen snel; controleer ze bij de leverancier. Een breder overzicht, inclusief assistenten en de vraag wanneer maatwerk nodig is, staat bij [AI tools](/ai-automatisering/ai-tools).

Ik heb geen commerciële band met een van deze leveranciers en ontvang geen commissie. Daardoor kan ik ook adviseren om voorlopig bij je bestaande software te blijven.

## Een AI workflow implementeren

Een AI workflow implementeren gaat in de praktijk in vijf stappen:

1. **Kies één proces** met veel volume, voorspelbare input en een eigenaar die er beter van wordt. Meet vooraf tijd, volume en fouten.
2. **Teken de route uit** met de mensen die het werk nu doen. Bepaal welke stap AI wordt en wat er gebeurt als het model twijfelt.
3. **Bepaal wie bouwt.** Eenvoudige stromen kan een handige collega in een no-code-platform maken. Zodra er koppelingen met kernsystemen of gevoelige gegevens bij komen, is een IT-team of partner nodig. Die partner contracteer je rechtstreeks; ik help bij het opstellen van de eisen en het beoordelen van de oplevering.
4. **Test met echte voorbeelden**, inclusief de lastige gevallen, en laat de workflow een paar weken naast het huidige proces lopen.
5. **Regel beheer vóór livegang:** wie kijkt naar foutmeldingen, wie beoordeelt steekproeven, wie mag de workflow stilzetten?

Voor een AI workflow in het mkb is stap 3 vaak de lastigste: er is geen IT-afdeling, en een externe partij kiezen zonder technische kennis is lastig. Juist dan helpt het om de eisen vooraf op papier te hebben, zodat je offertes kunt vergelijken op dezelfde punten.

## AI workflows versus AI agents

Het verschil zit in wie de route bepaalt. Bij een AI workflow heb jij de route vooraf vastgelegd; de AI vult alleen een stap in. Bij een AI agent krijgt het model een doel en kiest het zelf welke stappen en tools het gebruikt. Wat dat precies betekent, lees je bij [wat een AI agent is](/ai-agents/wat-is-een-ai-agent).

<figure class="diagram" role="img" aria-label="Vergelijking van AI workflows en AI agents: een workflow volgt een vaste route en is makkelijk te testen, een agent kiest zelf de route en is lastiger te controleren; kies een workflow bij vaste stappen en een agent als de stappen per geval echt verschillen">
<div class="matrix">
<div><b>AI workflow</b>Vaste route, voorspelbaar gedrag, makkelijk te testen en te controleren.</div>
<div><b>AI agent</b>Flexibele route, kan onverwachte situaties aan, lastiger te testen en te controleren.</div>
<div><b>Kies een workflow als</b>het proces steeds dezelfde stappen kent en je elke uitkomst wilt kunnen verklaren.</div>
<div><b>Kies een agent als</b>de benodigde stappen per geval echt verschillen en een fout omkeerbaar is.</div>
</div>
<figcaption>Workflow of agent: het verschil zit in wie de route bepaalt.</figcaption>
</figure>

Mijn advies is bijna altijd om met een workflow te beginnen. Je leert welke fouten er optreden en waar een mens nodig blijft. Die kennis heb je nodig voordat je een model meer vrijheid geeft. Waar agents wel en niet goed werken, beschreef ik in [AI agents: wat ze wel en niet kunnen](/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen); het volledige overzicht staat op de pagina over [AI agents](/ai-agents).

Twijfel je welk proces zich leent voor een eerste AI workflow, of wil je een voorstel van een bouwpartij laten toetsen? [Plan een adviesgesprek](/contact) van dertig minuten.
