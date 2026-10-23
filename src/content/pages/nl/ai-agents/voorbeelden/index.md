---
id: C6-04
url: /ai-agents/voorbeelden
parent: C6-00
cluster: "6. AI Agents"
pageType: Spoke
schema: article
navLabel: AI agents voorbeelden
title: "AI agents voorbeelden: 12 toepassingen voor bedrijven"
metaTitle: "AI agents voorbeelden | 12 toepassingen voor bedrijven"
metaDescription: "Twaalf voorbeelden van AI agents voor bedrijven, van klantenservice en sales tot HR en finance. Per voorbeeld de werking, benodigde tools en verwachte impact."
keyphrase: ai agents voorbeelden
eyebrow: "Voorbeelden"
lede: "Zoek je AI agents voorbeelden die verder gaan dan de demo? Hieronder staan twaalf toepassingen voor klantenservice, sales, HR en finance. Per voorbeeld lees je hoe de agent werkt, welke koppelingen hij nodig heeft en waar de winst zit, plus op welk moment een mens moet meekijken."
primaryCta: { label: "Lees meer over AI agents voor bedrijven", href: /ai-agents }
secondaryCta: { label: "Bekijk het AI Readiness Assessment", href: /diensten/ai-readiness-assessment }
summary:
  - "Twaalf generieke voorbeelden, geordend per afdeling, met koppelingen en controlepunten."
  - "De meeste waarde zit in voorbereidend werk dat een mens daarna beoordeelt."
  - "Platforms veranderen snel; het overzicht is de stand van september 2026."
published: "2026-09-23"
updated: "2026-09-23"
sources:
  - title: "Microsoft Copilot Studio (productpagina)"
    url: "https://www.microsoft.com/en-us/microsoft-365-copilot/microsoft-copilot-studio"
  - title: "Salesforce Agentforce (productpagina)"
    url: "https://www.salesforce.com/agentforce/"
  - title: "Google Cloud: Gemini Enterprise Agent Platform (productpagina)"
    url: "https://cloud.google.com/products/gemini-enterprise-agent-platform"
  - title: "n8n: AI agents (productpagina)"
    url: "https://n8n.io/ai-agents/"
  - title: "OpenAI: Agents SDK-documentatie"
    url: "https://developers.openai.com/api/docs/guides/agents/sdk"
  - title: "OpenAI: Agent Builder-documentatie, inclusief uitfaseringsbericht"
    url: "https://developers.openai.com/api/docs/guides/agent-builder"
  - title: "Autoriteit Persoonsgegevens en ACM: Oproep over AI-chatbots (2 oktober 2025)"
    url: "https://www.autoriteitpersoonsgegevens.nl/documenten/oproep-acm-ap-over-ai-chatbots"
  - title: "Verordening (EU) 2024/1689 (AI-verordening), bijlage III, via EUR-Lex"
    url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj/nld"
---

## AI agents in klantenservice

Voordat de voorbeelden per afdeling volgen, eerst twee opmerkingen. Deze voorbeelden zijn bewust generiek beschreven. Ze laten zien hoe een agent in een proces past, niet wat hij bij een bepaald bedrijf heeft opgeleverd. Wat een agent in jouw situatie oplevert, hangt af van je volumes, je bronnen en hoeveel controle het proces vraagt. Wie eerst wil weten wat een agent precies is, leest de uitleg over [hoe een AI agent werkt](/ai-agents/wat-is-een-ai-agent).

Bij elk voorbeeld geldt dezelfde vuistregel: begin met een agent die voorbereidt of voorstelt, en geef pas meer zelfstandigheid als je weet welke fouten hij maakt. Waarom dat zo is, staat in mijn artikel over [de grenzen van AI agents](/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen).

<figure class="diagram" role="img" aria-label="Matrix die voorbeelden van AI agents indeelt naar omkeerbaarheid en naar interne of externe gevolgen, met het advies hoeveel zelfstandigheid per kwadrant past">
<div class="matrix"><div><b>Intern en omkeerbaar</b>Kennisvragen, concepten, classificeren. Hier kan de agent het snelst zelfstandig werken.</div><div><b>Extern en omkeerbaar</b>Afspraken inplannen, statusupdates. Zelfstandig met steekproef achteraf.</div><div><b>Intern en onomkeerbaar</b>Boekingen, stamdata wijzigen. Voorstel door de agent, bevestiging door een mens.</div><div><b>Extern en onomkeerbaar</b>Betalingen, afwijzingen, besluiten over mensen. Agent bereidt voor, mens beslist.</div></div>
<figcaption>Waar een voorbeeld in deze matrix valt, bepaalt meer dan de techniek hoeveel autonomie de agent kan krijgen.</figcaption>
</figure>

In klantenservice worden agents vaak als eerste overwogen, omdat er veel herhaling is en de informatie verspreid staat over meerdere systemen.

**1. Mail- en ticketvoorbereiding.** De agent leest een binnenkomende vraag, herkent het onderwerp, zoekt klant- en ordergegevens op en stelt een conceptantwoord op. Een medewerker controleert en verstuurt.

- **Koppelingen:** mailbox of ticketsysteem, CRM, orderadministratie.
- **Waar de winst zit:** minder zoekwerk per vraag, consistentere antwoorden.
- **Menselijke controle:** elke uitgaande mail, tot blijkt welke categorieën consequent goed gaan.

**2. Doorverwijzen en prioriteren.** De agent beoordeelt binnenkomende meldingen op urgentie en onderwerp en zet ze bij het juiste team, met een korte samenvatting.

- **Koppelingen:** ticketsysteem, teamindeling.
- **Waar de winst zit:** snellere eerste reactie op urgente zaken, minder handmatig sorteren.
- **Menselijke controle:** een dagelijkse steekproef op verkeerd ingedeelde meldingen.

**3. Selfservice met echte handelingen.** Een klant vraagt via chat om een adreswijziging of de status van een retour, en de agent voert dat uit binnen vooraf bepaalde grenzen.

- **Koppelingen:** klantportaal, CRM, logistiek systeem.
- **Waar de winst zit:** eenvoudige verzoeken buiten kantoortijd afgehandeld.
- **Menselijke controle:** vaste grenzen per handeling en een steekproef achteraf; alles daarbuiten gaat naar een medewerker.

Let op: de Autoriteit Persoonsgegevens en de ACM vragen organisaties om duidelijk te maken dat klanten met een chatbot praten en een route naar een medewerker open te houden ([oproep van oktober 2025](https://www.autoriteitpersoonsgegevens.nl/documenten/oproep-acm-ap-over-ai-chatbots)). Meer daarover in het artikel over [AI agents en de AVG](/kennisbank/ai-agents-en-avg).

## AI agents in sales

In sales zit veel tijd in voorbereiding en administratie rond het eigenlijke gesprek. Daar kan een agent helpen, zolang het contact met de klant bij de verkoper blijft.

**4. Leadonderzoek.** De agent verzamelt openbare informatie over een prospect en combineert die met eerdere contactmomenten uit het CRM tot een korte gespreksvoorbereiding.

- **Koppelingen:** CRM, zoekfunctie op internet.
- **Waar de winst zit:** betere voorbereiding in minder tijd.
- **Menselijke controle:** de verkoper beoordeelt de voorbereiding; de agent neemt zelf geen contact op.

**5. Verslag en vervolgactie.** Na een gesprek zet de agent de notities om in een verslag, werkt de verkoopkans bij en stelt een vervolgmail op. De verkoper keurt goed.

- **Koppelingen:** agenda, notitie- of transcriptietool, CRM, mail.
- **Waar de winst zit:** minder administratie na elk gesprek, een actueler CRM.
- **Menselijke controle:** goedkeuring van het verslag en de mail voordat er iets wordt opgeslagen of verstuurd.

**6. Offertevoorbereiding.** De agent haalt de juiste producten, prijsafspraken en standaardteksten op en zet een conceptofferte klaar.

- **Koppelingen:** productcatalogus, prijslijsten, CRM, documentsjablonen.
- **Waar de winst zit:** snellere doorlooptijd van aanvraag naar offerte.
- **Menselijke controle:** de verkoper controleert prijzen en voorwaarden.

Een agent die zelfstandig offertes verstuurt, raakt direct je marge en reputatie; hier hoort altijd een bevestigingsstap bij.

## AI agents in HR

HR combineert veel terugkerende vragen met gevoelige gegevens en besluiten over mensen. Dat maakt het een terrein waar je de grens tussen ondersteunen en beslissen extra scherp moet trekken.

**7. Vragen van medewerkers.** De agent beantwoordt vragen over verlof, declaraties en regelingen op basis van het personeelshandboek en verwijst naar de bron.

- **Koppelingen:** intranet, HR-beleidsdocumenten.
- **Waar de winst zit:** minder terugkerende vragen bij HR.
- **Menselijke controle:** periodieke controle of de bronnen actueel zijn; persoonlijke situaties gaan naar een HR-medewerker.

**8. Onboarding.** De agent zet voor een nieuwe medewerker de standaardtaken klaar: accounts aanvragen, introductieafspraken plannen, documenten verzamelen.

- **Koppelingen:** HR-systeem, IT-servicedesk, agenda.
- **Waar de winst zit:** minder vergeten stappen, een voorspelbare eerste week.
- **Menselijke controle:** HR bevestigt de aanvragen voordat accounts worden aangemaakt.

**9. Vacatureteksten en planning.** De agent stelt conceptvacatures op en plant gesprekken in overleg met de agenda's van het team.

- **Koppelingen:** wervingssysteem, agenda.
- **Waar de winst zit:** minder coördinatiewerk.
- **Menselijke controle:** de recruiter keurt teksten en uitnodigingen goed.

Een grens: AI-systemen die sollicitaties filteren of kandidaten beoordelen, vallen volgens bijlage III van de AI-verordening onder hoog risico. Houd de agent hier bij ondersteunend werk en laat de beoordeling bij mensen.

## AI agents in finance

In finance draait veel om controleren, aansluiten en opvolgen. Agents kunnen dat voorbereidende werk goed doen, maar een fout in een boeking werkt door in rapportages en aangiftes. Daarom blijft de mens hier de laatste stap zetten.

**10. Factuurcontrole.** De agent vergelijkt binnenkomende facturen met inkooporders en ontvangstbevestigingen en markeert afwijkingen voor de crediteurenadministratie.

- **Koppelingen:** boekhoudpakket of ERP, inkoopsysteem.
- **Waar de winst zit:** aandacht gaat naar de afwijkingen, niet naar de routine.
- **Menselijke controle:** afwijkingen en betaalbeslissingen blijven bij de crediteurenadministratie.

**11. Voorbereiding van de maandafsluiting.** De agent verzamelt openstaande posten, stelt conceptboekingen voor en maakt een lijst van ontbrekende stukken.

- **Koppelingen:** ERP, bank, rapportagetool.
- **Waar de winst zit:** een snellere en beter voorbereide afsluiting.
- **Menselijke controle:** elke boeking wordt door een medewerker bevestigd.

Boekingen horen bij de categorie waar een fout stilletjes kan doorwerken. De agent stelt voor, een mens boekt.

**12. Debiteurenopvolging.** De agent signaleert achterstallige facturen, zoekt de contactgeschiedenis op en stelt een passende herinnering op.

- **Koppelingen:** boekhoudpakket, CRM, mail.
- **Waar de winst zit:** tijdiger opvolging zonder dat iemand lijsten hoeft bij te houden.
- **Menselijke controle:** herinneringen gaan pas de deur uit na goedkeuring, zeker bij klanten met een lopend gesprek.

Meer AI-toepassingen buiten agents, zoals analyse en documentverwerking, staan in de bredere verzameling [AI-voorbeelden voor bedrijven](/kennisbank/ai-voorbeelden).

<aside class="scenario" aria-label="Voorbeeldscenario">
<p class="scenario-label">Voorbeeldscenario</p>
<p>Een productiebedrijf met 180 medewerkers ontvangt zo'n 2.500 inkoopfacturen per maand. Twee medewerkers van de crediteurenadministratie leggen ze handmatig naast inkooporders en ontvangstbevestigingen, gemiddeld 4 minuten per factuur.</p>
<p>De adviseur stelt vanuit klantzijde de eisen op en toetst de voorstellen van twee leveranciers op dezelfde set van 300 facturen uit het vorige kwartaal. De agent vergelijkt bedragen, aantallen en ordernummers en markeert afwijkingen. Boeken, betalen en contact met leveranciers blijven bewust bij de administratie.</p>
<p>Na drie maanden gaat ongeveer 75 procent van de facturen zonder afwijking door naar goedkeuring. Die kosten nog een halve minuut controle. Dat scheelt zo'n 110 uur per maand, tijd die nu naar het uitzoeken van de afwijkingen gaat.</p>
<p class="scenario-note">Fictief voorbeeld, samengesteld uit situaties die veel voorkomen. Organisatie en cijfers zijn illustratief.</p>
</aside>

## Beste AI agent-platforms

Er bestaat geen beste platform in het algemeen; wel een platform dat past bij de software die je al gebruikt, je eisen aan controle en je eigen technische capaciteit. Ik ontvang van geen van deze leveranciers commissies of andere vergoedingen. Dit overzicht is de stand van september 2026, gebaseerd op de productinformatie van de leveranciers zelf. Functies en namen veranderen snel, dus controleer de actuele situatie voordat je kiest.

| Platform | Wat het is | Past vooral bij |
|---|---|---|
| [Microsoft Copilot Studio](https://www.microsoft.com/en-us/microsoft-365-copilot/microsoft-copilot-studio) | Omgeving om agents te bouwen met natuurlijke taal of een grafische editor, te publiceren in onder meer Teams en SharePoint | Organisaties die op Microsoft 365 werken |
| [Salesforce Agentforce](https://www.salesforce.com/agentforce/) | Agentplatform binnen Salesforce, voor onder meer service, sales en HR, op basis van CRM-gegevens | Organisaties met Salesforce als CRM |
| [Google Gemini Enterprise Agent Platform](https://cloud.google.com/products/gemini-enterprise-agent-platform) | Ontwikkelplatform van Google Cloud (voorheen Vertex AI) om agents te bouwen, op te schalen en te beheren | Teams met ontwikkelcapaciteit op Google Cloud |
| [n8n](https://n8n.io/ai-agents/) | Visuele workflowbouwer met agentfuncties en veel integraties, ook zelf te hosten | Organisaties die agents in bredere workflows willen inbouwen |
| [OpenAI Agents SDK](https://developers.openai.com/api/docs/guides/agents/sdk) | Ontwikkelkit (Python of TypeScript) om agents in code te bouwen, die in je eigen applicatie draait | Ontwikkelteams die maatwerk bouwen |

Bij het kiezen tussen platforms kijk ik naar vijf vragen:

- **Aansluiting:** werkt het platform met de systemen waarin de agent moet lezen en schrijven, zonder zware maatwerkkoppelingen?
- **Controle:** kun je per handeling instellen dat een mens moet bevestigen, en zijn alle stappen van de agent terug te zien?
- **Gegevens:** waar worden gegevens verwerkt en opgeslagen, is er een verwerkersovereenkomst en wordt je invoer gebruikt om modellen te trainen?
- **Kosten:** hoe wordt afgerekend, per gebruiker, per gesprek of per verwerkte hoeveelheid tekst, en wat betekent dat bij jouw volumes?
- **Exit:** kun je instructies, gegevens en logging meenemen als je overstapt?

Een actueel voorbeeld van hoe snel dit verandert: volgens de [documentatie van OpenAI](https://developers.openai.com/api/docs/guides/agent-builder) wordt de visuele Agent Builder uitgefaseerd en stopt die op 30 november 2026 (stand september 2026). Wie daarop bouwde, moet migreren. Dat onderstreept waarom je bij elke platformkeuze ook moet vastleggen hoe je er weer vanaf komt.

Welke route past, platform of maatwerk, en hoe je een bouwpartij selecteert, lees je op de pagina over [een AI agent laten maken](/ai-agents/laten-maken). Voor toepassingen, kosten en implementatie op hoofdlijnen is er het overzicht van [AI agents voor bedrijven](/ai-agents). Wil je weten welk van deze voorbeelden bij jouw organisatie past? [Plan een vrijblijvend gesprek](/contact).
