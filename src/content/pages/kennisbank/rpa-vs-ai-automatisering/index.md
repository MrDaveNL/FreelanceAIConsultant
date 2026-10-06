---
id: C3-08
url: /kennisbank/rpa-vs-ai-automatisering
parent: C3-00
cluster: "3. AI Automatisering"
pageType: Kennisbank
schema: article
navLabel: RPA versus AI
title: "RPA versus AI automatisering: wat past bij jou?"
metaTitle: "RPA versus AI automatisering | Verschillen en keuzehulp"
metaDescription: "Wat is robotic process automation en hoe verschilt RPA van AI automatisering? Lees de voor- en nadelen, voorbeelden en wanneer je beide slim combineert."
keyphrase: robotic process automation
eyebrow: "Kennisbank"
lede: "Robotic process automation (RPA) en AI automatisering worden vaak door elkaar gehaald, maar ze lossen een ander probleem op. RPA voert vaste regels snel en consequent uit; AI kan omgaan met variatie en ongestructureerde informatie. Hier lees je het verschil, wanneer je wat kiest en hoe je ze combineert."
primaryCta: { label: "Lees meer over AI automatisering", href: /ai-automatisering }
secondaryCta: { label: "Plan een adviesgesprek", href: /contact }
summary:
  - "RPA volgt vaste regels in bestaande schermen en systemen; voorspelbaar, maar kwetsbaar bij verandering."
  - "AI automatisering interpreteert tekst, documenten en taal, maar vraagt om controle op de uitkomst."
  - "De sterkste oplossingen combineren beide: AI voor het begrijpen, RPA of een koppeling voor het uitvoeren."
published: "2026-09-23"
updated: "2026-09-23"
---

## Wat is robotic process automation (RPA)?

Robotic process automation is software die handelingen van een medewerker in bestaande applicaties nabootst. Een RPA-robot klikt door schermen, kopieert gegevens van het ene systeem naar het andere, vult formulieren in en start rapportages, precies zoals een mens dat zou doen, maar dan zonder pauze en zonder typfouten. De "robot" is dus geen fysieke robot, maar een script dat op de gebruikersinterface werkt.

RPA is vooral sterk bij werk dat:

- **Regelgebaseerd is:** elke stap is vooraf te beschrijven als "als dit, dan dat".
- **Gestructureerde input heeft:** vaste velden, vaste bestandsformaten, vaste schermen.
- **Veel herhaling kent:** hetzelfde handwerk, vele keren per dag of per maand.
- **Tussen systemen zit zonder goede koppeling:** bijvoorbeeld een oud pakket zonder API.

Typische voorbeelden zijn het overnemen van orderregels uit een portaal in het ERP-systeem, het klaarzetten van periodieke rapportages en het bijwerken van stamgegevens in meerdere systemen tegelijk.

Het zwakke punt van RPA is dat het letterlijk doet wat is voorgeschreven. Verandert een scherm, een veldnaam of de volgorde van stappen, dan stopt de robot of doet hij iets verkeerds. En komt er een document binnen dat net anders is opgemaakt, dan weet RPA daar niets mee.

## Wat is AI automatisering?

AI automatisering gebruikt modellen die kunnen omgaan met informatie die niet netjes gestructureerd is. Denk aan het lezen van een e-mail en bepalen wat de klant vraagt, het uitlezen van gegevens uit facturen met wisselende opmaak, het samenvatten van een dossier of het opstellen van een conceptantwoord. Waar RPA regels volgt, herkent AI patronen en maakt een inschatting.

Daarmee kun je taken automatiseren die met vaste regels niet te vangen zijn:

- **Classificeren:** binnenkomende berichten sorteren naar onderwerp, urgentie of afdeling.
- **Extraheren:** gegevens halen uit pdf's, contracten of scans.
- **Genereren:** conceptteksten, samenvattingen of verslagen maken.
- **Redeneren over stappen:** bij AI agents bepaalt het systeem zelf welke acties nodig zijn; daarover meer bij [AI agents](/ai-agents).

De keerzijde is dat AI niet altijd hetzelfde antwoord geeft en fouten kan maken die er overtuigend uitzien. AI automatisering vraagt daarom om een testset, controle op de uitkomst en duidelijke afspraken over wanneer een mens meekijkt. Hoe je dat per proces aanpakt, lees je bij [bedrijfsprocessen automatiseren met AI](/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai).

## Verschillen tussen RPA en AI

Het verschil tussen RPA en AI zit in de kern in één vraag: moet het systeem regels volgen, of moet het iets begrijpen?

| | RPA | AI automatisering |
|---|---|---|
| Werkt op basis van | Vooraf vastgelegde regels | Patronen die een model heeft geleerd |
| Input | Gestructureerd: velden, tabellen, vaste schermen | Ook ongestructureerd: tekst, e-mail, documenten, spraak |
| Uitkomst | Voorspelbaar en herhaalbaar | Waarschijnlijk juist, maar niet gegarandeerd |
| Kwetsbaar voor | Wijzigingen in schermen en processen | Afwijkende situaties, veranderende data, modelupdates van de leverancier |
| Controle | Werkt het script nog? | Klopt de uitkomst nog, gemeten tegen een testset? |
| Uitleg | Elke stap is traceerbaar | Uitleg is beperkter; vastleggen van invoer en uitvoer is belangrijk |

Een verschil dat vaak wordt onderschat, is beheer. Een RPA-robot moet worden aangepast bij elke wijziging in de onderliggende applicaties. Een AI-toepassing moet periodiek worden getoetst, omdat de kwaliteit ongemerkt kan verschuiven. Beide vragen dus om een eigenaar na de oplevering, en die kosten horen in je business case.

## Wanneer kies je wat?

Gebruik de aard van het werk als uitgangspunt, niet de technologie die op dat moment in de belangstelling staat.

<figure class="diagram" role="img" aria-label="Keuzematrix RPA versus AI: bij gestructureerde input en vaste regels past RPA of een koppeling, bij ongestructureerde input en vaste regels AI voor het lezen plus regels voor het verwerken, bij gestructureerde input en oordeel regels met een mens voor uitzonderingen, bij ongestructureerde input en oordeel AI met menselijke controle">
<div class="matrix">
<div><b>Gestructureerd en vaste regels</b>RPA of, beter nog, een directe koppeling tussen systemen.</div>
<div><b>Ongestructureerd en vaste regels</b>AI om de informatie te lezen, daarna vaste regels of RPA om te verwerken.</div>
<div><b>Gestructureerd en oordeel nodig</b>Regels voor de standaardgevallen, een mens voor de uitzonderingen.</div>
<div><b>Ongestructureerd en oordeel nodig</b>AI met menselijke controle op de uitkomst, zeker bij beslissingen die mensen raken.</div>
</div>
<figcaption>De input (gestructureerd of niet) en het soort beslissing (vaste regel of oordeel) bepalen of RPA, AI of een combinatie het beste past.</figcaption>
</figure>

Een paar vuistregels:

- **Kies RPA** als het proces stabiel is, de input vast ligt en er geen goede koppeling mogelijk is. Kan de leverancier van je software een API leveren, dan is dat meestal stabieler dan een robot die door schermen klikt.
- **Kies AI** als het knelpunt zit in het lezen, begrijpen of schrijven van tekst, en als een af en toe foute uitkomst op te vangen is met controle.
- **Kies geen van beide** als het proces zelf nog niet helder is. Automatiseren van een rommelig proces levert een snel rommelig proces op. Soms is de eerste stap het proces vereenvoudigen of de data op orde brengen; daarover gaat [het datafundament onder AI](/inzichten/het-datafundament-onder-ai).

Twijfel je tussen zelf bouwen, een platform kopen of een partner inschakelen, dan helpt de afweging in [build, buy of partner](/inzichten/build-buy-of-partner). En moet je kiezen tussen leveranciers die allemaal zeggen dat ze beide kunnen, dan is een onafhankelijke [Vendor Review](/diensten/vendor-review) een manier om de claims naast elkaar te leggen.

## RPA en AI combineren

In de praktijk zit de meeste waarde in de combinatie. AI neemt het deel dat begrip vraagt, RPA of een koppeling voert de vaste stappen uit. Een generiek voorbeeld: facturen komen binnen per e-mail in allerlei opmaak. AI leest de factuur en haalt leverancier, bedrag en ordernummer eruit. Vaste regels controleren of het ordernummer bestaat en het bedrag klopt. Klopt alles, dan boekt een robot of koppeling de factuur in; wijkt iets af, dan gaat de factuur naar een medewerker.

Zo'n combinatie werkt het best als je drie dingen vooraf regelt:

1. **Duidelijke overdrachtspunten.** Waar stopt de AI en begint de regel? Leg vast welke zekerheid nodig is voordat iets automatisch doorgaat.
2. **Een route voor uitzonderingen.** Alles wat niet past, gaat naar een mens, met genoeg context om snel te beslissen.
3. **Meten per stap.** Houd bij hoeveel gevallen automatisch doorgaan, hoeveel er worden afgevangen en waar fouten ontstaan. Dan zie je waar verbetering loont.

Hoe je zulke ketens ontwerpt, beheert en uitbreidt, lees je bij [AI workflows](/ai-automatisering/ai-workflows).

<aside class="scenario" aria-label="Voorbeeldscenario">
<p class="scenario-label">Voorbeeldscenario</p>
<p>Een technische groothandel met 120 medewerkers ontvangt zo'n 1.800 inkoopfacturen per maand, in wisselende opmaak. Twee medewerkers van de crediteurenadministratie besteden er samen ongeveer 50 uur per week aan. Een leverancier stelt een RPA-robot voor die de facturen overtypt in het ERP-systeem.</p>
<p>De adviseur toetst dat voorstel en ziet dat het ERP-pakket een API heeft voor het inboeken. Daarom kiest de groothandel voor AI om de facturen uit te lezen, vaste regels om ordernummer en bedrag te controleren en een koppeling om te boeken. Een robot die door schermen klikt, is niet nodig. De adviseur vergelijkt twee aanbieders; de groothandel contracteert de gekozen partij rechtstreeks.</p>
<p>Na vier maanden gaat ongeveer 65 procent van de facturen zonder handwerk door. De rest komt met een toelichting bij een medewerker terecht. Het werk is teruggebracht tot zo'n 22 uur per week, inclusief steekproeven.</p>
<p class="scenario-note">Fictief voorbeeld, samengesteld uit situaties die veel voorkomen. Organisatie en cijfers zijn illustratief.</p>
</aside>

Ik bouw zelf geen robots of AI-toepassingen. Wel help ik je bepalen welke aanpak bij je proces past, help ik bij het selecteren van een partij en begeleid ik de uitvoering vanuit jouw kant van de tafel. Wil je het bredere plaatje zien, begin dan bij [AI automatisering](/ai-automatisering). Wil je een concreet proces bespreken? [Plan een adviesgesprek](/contact).
