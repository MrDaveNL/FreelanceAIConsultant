---
id: C5-02
lang: nl
url: /nl/ai-development/ai-software
parent: C5-00
cluster: "5. AI Development"
pageType: Spoke
schema: article
navLabel: AI software
title: "AI software: kiezen, integreren of op maat laten bouwen"
metaTitle: "AI software | Kiezen, integreren of op maat laten bouwen"
metaDescription: "Welke AI software past bij je organisatie? Lees hoe je kiest tussen standaardsoftware en maatwerk, en hoe je AI software veilig integreert met je systemen."
keyphrase: ai software
eyebrow: "AI software"
lede: "Bijna elke softwareleverancier noemt zijn product inmiddels AI software. Dat maakt kiezen lastiger, niet makkelijker. Op deze pagina lees je welke soorten er zijn, wanneer standaard volstaat en wanneer maatwerk loont, en waar je op let bij integratie en selectie."
primaryCta: { label: "Lees meer over AI Development", href: /nl/ai-development }
secondaryCta: { label: "Bekijk het AI Readiness Assessment", href: /nl/diensten/ai-readiness-assessment }
summary:
  - "AI software loopt van een functie in bestaande software tot volledig maatwerk."
  - "Kies standaard waar het kan; laat alleen de laag met jouw kennis op maat bouwen."
  - "Integratie, data en exit bepalen de echte kosten, niet de licentie."
published: "2026-09-23"
updated: "2026-09-23"
faqTitle: "Veelgestelde vragen"
faq:
  - q: "Wat is het verschil tussen AI software en gewone software?"
    a: "Gewone software doet wat je programmeert. AI software doet een voorspelling of genereert een antwoord op basis van een model, en kan daarbij fouten maken. Daarom moet je bij AI software niet alleen vragen wat het kan, maar ook hoe goed het werkt op jouw data en wat er gebeurt als het ernaast zit."
  - q: "Wordt mijn data gebruikt om de AI software te trainen?"
    a: "Dat verschilt per leverancier en vaak per abonnement. Vraag het expliciet na, laat het vastleggen in het contract en controleer of je het kunt uitzetten. Ga er nooit van uit dat de standaardinstelling past bij jouw beleid."
  - q: "Kan AI software op maat goedkoper zijn dan een licentie?"
    a: "In jaar één soms wel, over meerdere jaren zelden. Maatwerk brengt doorlopende kosten mee voor beheer, monitoring en het bijhouden van onderliggende modellen. Reken daarom altijd over meerdere jaren en neem ook de exitkosten mee."
  - q: "Wie is aansprakelijk als AI software een fout maakt?"
    a: "Dat hangt af van je contract en van hoe je de software inzet. Leg vast wat de leverancier garandeert, hoe fouten worden gemeld en wie wat herstelt. Richt je proces zo in dat een mens de uitkomst controleert waar de gevolgen groot zijn."
sources: []
---

## Soorten AI software

AI software is software waarin een model een deel van het werk doet: tekst begrijpen of genereren, beelden herkennen, voorspellingen maken of taken uitvoeren. In de praktijk kom je vier vormen tegen, van licht naar zwaar:

1. **AI-functies in software die je al hebt.** Je kantoorpakket, CRM of servicedesk krijgt een assistent of een slimme functie erbij. Weinig integratiewerk, maar ook weinig invloed op hoe het werkt.
2. **Zelfstandige AI-tools.** Chatassistenten, schrijf- en analysetools, transcriptie. Snel in gebruik te nemen, vaak per gebruiker gelicenseerd. Een overzicht van veelgebruikte categorieën staat bij [AI tools voor bedrijven](/nl/ai-automatisering/ai-tools).
3. **Gespecialiseerde AI-platforms.** Software voor één domein, zoals documentverwerking, vraagvoorspelling of klantenservice, die je configureert en koppelt aan je eigen systemen.
4. **AI software op maat.** Een applicatie die voor jouw proces wordt gebouwd, meestal rond een ingekocht taalmodel, met eigen regels, koppelingen en evaluatie. Voorbeelden van wat dat kan opleveren, staan bij [AI oplossingen op maat](/nl/ai-development/ai-oplossingen).

Hoe verder je naar beneden gaat, hoe meer invloed je krijgt op de uitkomst en hoe meer je zelf moet beheren.

## Standaard of maatwerk?

De kernvraag is niet of je iets zelf kunt laten bouwen, maar of je het over een paar jaar nog wilt onderhouden. Bouw alleen wat je onderscheidt in de markt. Als je concurrent hetzelfde resultaat morgen bij een leverancier kan kopen, is het een commodity en koop je het ook.

<figure class="diagram" role="img" aria-label="Spectrum van AI software van standaard naar maatwerk, met per stap wat je koopt en wat je laat bouwen">
<ol class="flow">
<li><b>Koop de bouwstenen</b>Taalmodellen, infrastructuur, standaardcomponenten: hier hebben leveranciers schaalvoordeel</li>
<li><b>Configureer het platform</b>Drempels, regels en werkstromen instellen binnen standaardsoftware</li>
<li><b>Laat de kennislaag bouwen</b>Jouw regels, prompts, testsets en koppelingen: klein in omvang, groot in waarde</li>
<li><b>Houd de evaluatie zelf</b>De criteria waarop je de uitkomst beoordeelt, blijven altijd van jou</li>
</ol>
<figcaption>De hybride vorm: standaard waar het kan, maatwerk alleen voor de laag waarin jouw kennis zit.</figcaption>
</figure>

In veel gevallen is het antwoord een combinatie. Je koopt het model en het platform, laat de laag met jouw kennis op maat bouwen en belegt de implementatie bij een partner. Het volledige beslisraamwerk, inclusief de vraag hoe je er weer vanaf komt, staat in [build, buy of partner](/nl/inzichten/build-buy-of-partner). Kiezen tussen standaard en maatwerk vraagt ook een eerlijke kostenvergelijking; hoe je die opstelt, lees je in [de business case voor AI](/nl/inzichten/de-business-case-voor-ai).

## AI software integreren

De software zelf is vaak het kleinste deel van het werk. AI software integreren met je bestaande systemen kost de meeste tijd en levert de meeste verrassingen op. Vijf punten om vooraf te regelen:

- **Databronnen en kwaliteit.** Welke systemen moeten open, hoe actueel en volledig is de data, en wie beheert die bronnen? Als je datafundament rammelt, merkt de AI software dat als eerste. Meer daarover in [het datafundament onder AI](/nl/inzichten/het-datafundament-onder-ai).
- **Rechten en toegang.** De AI mag niet meer zien dan de gebruiker die hem aanroept. Controleer hoe het rechtenmodel van je bronsystemen wordt doorgegeven.
- **Privacy en de AVG.** Waar wordt de data verwerkt en opgeslagen, wordt er op getraind, en is er een verwerkersovereenkomst? Bij persoonsgegevens is dat geen detail.
- **Logging en controle.** Leg vast welke invoer tot welke uitkomst leidde en wie die heeft bevestigd. Zonder auditspoor kun je fouten niet herleiden.
- **Beheer na livegang.** Wie meet de kwaliteit, wie houdt testsets actueel, en wat gebeurt er als de leverancier het onderliggende model vervangt?

Het bouwen en koppelen doet je eigen IT-team of een implementatiepartner die je rechtstreeks contracteert. Ik bouw niet mee, maar help de eisen op te stellen en te toetsen of de oplevering eraan voldoet. Hoe dat in het hele ontwikkeltraject past, lees je bij [AI development](/nl/ai-development).

<aside class="scenario" aria-label="Voorbeeldscenario">
<p class="scenario-label">Voorbeeldscenario</p>
<p>Een groothandel in bouwmaterialen met 85 medewerkers koopt een AI-tool die orders uit e-mail en pdf herkent en klaarzet in het ERP-systeem. De licentie is binnen een week geregeld; de leverancier schat de koppeling op drie weken.</p>
<p>De adviseur stelt vooraf met de IT-beheerder en het hoofd binnendienst de eisen op: welke velden de tool mag vullen, dat een medewerker elke order bevestigt en dat elke wijziging wordt gelogd. Bij de toetsing blijkt dat 30 procent van de artikelcodes in de orders afwijkt van het ERP, omdat klanten hun eigen codes gebruiken. Er is een vertaaltabel nodig, en iemand die die bijhoudt.</p>
<p>De koppeling duurt negen weken in plaats van drie. Daarna daalt de verwerkingstijd van zes naar drie minuten per order, bij ongeveer 150 orders per dag: ruim zeven uur per dag. Orders zonder controle doorzetten doet de groothandel bewust nog niet.</p>
<p class="scenario-note">Fictief voorbeeld, samengesteld uit situaties die veel voorkomen. Organisatie en cijfers zijn illustratief.</p>
</aside>

## Selectiecriteria

Stel de criteria en hun weging vast voordat je leveranciers ziet. Criteria die na de eerste demo worden opgesteld, beschrijven die demo. Een werkbare set:

| Criterium | Kernvraag |
|---|---|
| Functionele fit | Dekt het jouw scenario's af, inclusief de lastige gevallen? |
| Prestatie op eigen data | Hoe goed werkt het op jouw materiaal, niet op het demomateriaal? |
| Integratie | Hoeveel werk is koppelen met je systemen, en wie doet dat? |
| Data en privacy | Waar staat de data, wat gebeurt ermee en wordt er op getraind? |
| Beheersbaarheid | Kun je drempels, regels en uitzonderingen zelf aanpassen? |
| Kosten | Licentie, verbruik bij groei, integratie, beheer en exit over drie jaar |
| Leverancier | Continuïteit, roadmap en ondersteuning in jouw taal en tijdzone |

Geef iedere leverancier hetzelfde scenario op jouw data, laat beoordelaars eerst individueel scoren en reken de totale kosten door. De volledige aanpak staat in [AI-vendorselectie in acht stappen](/nl/inzichten/ai-vendorselectie-in-acht-stappen).

Wil je dat proces niet zelf trekken, dan begeleid ik het met een [Vendor Review](/nl/diensten/vendor-review): criteria vooraf, scorecards, validatie op echte data en een TCO-vergelijking inclusief exitkosten. Hoe dat in de praktijk verloopt, laat de case over [vendorselectie bij een enterprise retailer](/nl/cases/vendorselectie-enterprise-retail) zien. Ik ontvang geen vergoeding van leveranciers, dus het advies kan ook zijn dat je niets koopt.

Zoek je eerder iemand die de technische kant beoordeelt of bouwt? Op de pagina over [de AI specialist](/nl/ai-development/ai-specialist) lees je welke profielen er zijn. En twijfel je welke route past, [plan dan een adviesgesprek](/nl/contact).
