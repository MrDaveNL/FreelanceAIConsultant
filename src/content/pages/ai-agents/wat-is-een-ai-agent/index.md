---
id: C6-01
url: /ai-agents/wat-is-een-ai-agent
parent: C6-00
cluster: "6. AI Agents"
pageType: Spoke
schema: article
navLabel: "Wat is een AI agent?"
title: "Wat is een AI agent? Uitleg, werking en voorbeelden"
metaTitle: "Wat is een AI agent? Uitleg, werking en voorbeelden"
metaDescription: "Wat is een AI agent en hoe werkt het? Heldere uitleg over AI agents, het verschil met een chatbot, soorten agents en praktische voorbeelden voor bedrijven."
keyphrase: wat is een ai agent
eyebrow: "Uitleg"
lede: "Wat is een AI agent, en waarom praat iedereen er ineens over? Kort gezegd: software die niet alleen antwoord geeft, maar zelf stappen zet om een doel te bereiken. In dit artikel leg ik uit hoe dat werkt, waarin een agent verschilt van een chatbot en welke soorten je tegenkomt."
primaryCta: { label: "Lees meer over AI agents voor bedrijven", href: /ai-agents }
secondaryCta: { label: "Bekijk het AI Readiness Assessment", href: /diensten/ai-readiness-assessment }
summary:
  - "Een AI agent krijgt een doel en kiest zelf de stappen, inclusief het gebruik van andere systemen."
  - "Het verschil met een chatbot zit in handelen: een agent kan dingen doen, niet alleen zeggen."
  - "Hoeveel zelfstandigheid een agent krijgt, is een keuze van de organisatie, geen eigenschap van de techniek."
published: "2026-09-23"
updated: "2026-09-23"
faqTitle: "Veelgestelde vragen"
faq:
  - q: "Is een AI agent hetzelfde als een AI-assistent?"
    a: "Niet helemaal. Een AI-assistent helpt jou terwijl jij het werk doet: je stelt een vraag en krijgt een antwoord of concept. Een AI agent voert zelf een reeks stappen uit richting een doel, vaak in andere systemen. In de praktijk lopen de termen door elkaar en bieden veel assistenten inmiddels ook agentfuncties."
  - q: "Heeft een AI agent toegang tot al mijn systemen?"
    a: "Alleen tot de systemen en gegevens waarvoor je hem toegang geeft. Dat is precies de ontwerpkeuze die je bewust moet maken. Een verstandige start is een agent met alleen leesrechten, en schrijfrechten pas toevoegen als je weet hoe hij zich gedraagt."
  - q: "Leert een AI agent vanzelf van zijn fouten?"
    a: "Meestal niet op de manier die mensen verwachten. Een agent die op een taalmodel draait, past zijn gedrag niet automatisch aan na een fout. Verbetering komt doordat mensen de instructies, bronnen of controles aanpassen op basis van wat ze in de logging zien."
  - q: "Kan een AI agent zelfstandig beslissingen nemen?"
    a: "Technisch wel, maar of dat verstandig is hangt af van de gevolgen van een fout. Bij omkeerbare stappen met een duidelijke eindtoets kan het. Bij besluiten over mensen, geld of externe communicatie hoort een menselijke controle, en voor sommige besluiten stellen de AVG en de AI Act daar ook eisen aan."
  - q: "Wat heb ik nodig om met AI agents te beginnen?"
    a: "Een concrete taak met veel herhaling, bronnen die op orde zijn, een eigenaar die de uitkomsten beoordeelt en afspraken over welke gegevens de agent mag gebruiken. De technologie is zelden het eerste knelpunt; de proceskeuze wel."
---

## Wat is een AI agent?

Een AI agent is een softwaresysteem dat een doel krijgt en zelf bepaalt welke stappen nodig zijn om dat doel te bereiken. Het verzamelt informatie, gebruikt andere systemen, beoordeelt tussenresultaten en kiest op basis daarvan een volgende stap. Het doel komt van een mens; de route bepaalt de agent grotendeels zelf.

Dat is het wezenlijke verschil met de meeste AI-toepassingen die je kent. Een tool die een tekst samenvat of een vraag beantwoordt, levert één uitkomst op één opdracht. Een agent werkt aan een taak die uit meerdere stappen bestaat, zoals "maak dit klantdossier compleet" of "bereid de offerte voor deze aanvraag voor".

De meeste agents die je nu tegenkomt, draaien op een groot taalmodel. Dat model zorgt voor het begrijpen van de opdracht en het redeneren over de volgende stap. Daaromheen zitten de onderdelen die van een taalmodel een agent maken: toegang tot tools en systemen, een geheugen voor de lopende taak en instructies over wat wel en niet mag.

Wie vooral wil weten wat dit voor een organisatie betekent, vindt de toepassingen, kosten en aanpak op de pagina over [AI agents voor bedrijven](/ai-agents).

## Hoe werkt een AI agent?

De werking van een AI agent komt neer op een lus die zich herhaalt tot het doel bereikt is of de agent vastloopt.

<figure class="diagram" role="img" aria-label="De werkcyclus van een AI agent: doel ontvangen, plannen, een actie uitvoeren met een tool, het resultaat beoordelen en daarna afronden of een volgende stap kiezen">
<ol class="flow">
<li><b>Doel</b>Een mens of systeem geeft een opdracht</li>
<li><b>Plannen</b>De agent bepaalt de eerstvolgende stap</li>
<li><b>Handelen</b>Een tool of systeem aanroepen</li>
<li><b>Beoordelen</b>Klopt het resultaat, is het doel bereikt?</li>
<li><b>Afronden of doorgaan</b>Opleveren, of terug naar plannen</li>
</ol>
<figcaption>Een agent doorloopt deze cyclus meerdere keren. Elke ronde is een moment waarop het goed of fout kan gaan.</figcaption>
</figure>

Wat er in elke stap gebeurt:

- **Doel en instructies.** De agent krijgt een opdracht plus vaste instructies: welke bronnen hij mag gebruiken, welke handelingen verboden zijn en wanneer hij een mens moet inschakelen.
- **Plannen.** Het taalmodel bepaalt wat de logische volgende stap is. Bij een eenvoudige taak is dat één actie, bij een complexe taak een reeks.
- **Handelen via tools.** Een tool is alles wat de agent kan aanroepen: een zoekfunctie, een database, een CRM, een agenda, een rekenmodule of een ander AI-model. Hier gaat de agent van praten naar doen.
- **Beoordelen.** De agent kijkt naar het resultaat van zijn actie. Heeft de zoekopdracht iets opgeleverd? Past het antwoord bij de vraag? Zo niet, dan kiest hij een andere route.
- **Geheugen.** Tijdens de taak onthoudt de agent wat hij al gedaan heeft. Sommige agents bewaren ook informatie tussen taken, wat handig is maar ook vragen oproept over welke gegevens je vasthoudt. Die vragen werk ik uit in het artikel over [AI agents en privacy](/kennisbank/ai-agents-en-avg).

Omdat een agent meerdere stappen achter elkaar zet, kan een fout in een vroege stap doorwerken tot in het eindresultaat, zonder dat dat eindresultaat er verkeerd uitziet. Daarom zijn logging en tussencontroles bij agents belangrijker dan bij een gewone AI-toepassing. Ik werkte dat uit in het artikel over [wat agents wel en niet kunnen](/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen): agents werken goed bij omkeerbare stappen met een duidelijke eindtoets en gaan stuk op lange ketens waarin een fout stilletjes doorwerkt.

## AI agent versus chatbot

Het verschil tussen een AI agent en een chatbot is een van de meest gestelde vragen, omdat ze aan de buitenkant op elkaar kunnen lijken. Beide kun je in gewone taal iets vragen. Het verschil zit in wat er daarna gebeurt.

| | Chatbot | AI agent |
|---|---|---|
| Wat hij doet | Beantwoordt een vraag in een gesprek | Voert een taak uit in meerdere stappen |
| Toegang tot systemen | Meestal beperkt tot een kennisbank | Kan systemen raadplegen en soms wijzigen |
| Wie bepaalt de route | Het gesprek, vraag voor vraag | De agent, op basis van het doel |
| Gevolg van een fout | Een verkeerd antwoord | Een verkeerde handeling, mogelijk met doorwerking |
| Wat je moet regelen | Juistheid van antwoorden | Rechten, controlepunten, logging en eigenaarschap |

Een chatbot die een klant vertelt hoe hij zijn adres wijzigt, is een chatbot. Een systeem dat het adres daadwerkelijk wijzigt, de bevestiging stuurt en het dossier bijwerkt, is een agent. De grens is in de praktijk niet altijd scherp: veel chatbots krijgen stap voor stap agentfuncties, en veel agents hebben een chatvenster als voorkant.

## Soorten AI agents

Er bestaan verschillende indelingen. Voor een organisatie zijn twee manieren van kijken het nuttigst: naar de mate van zelfstandigheid en naar de opbouw.

**Naar zelfstandigheid.** Hoeveel een agent zelf mag, is een instelling die je kiest. Een agent kan alleen voorbereiden (informatie verzamelen voor een mens), voorstellen doen die een mens goedkeurt, uitvoeren met een bevestiging op onomkeerbare momenten, of volledig zelfstandig werken met controle achteraf. Mijn advies is vrijwel altijd om laag te beginnen en de autonomie pas te verhogen als je weet welke fouten er optreden.

**Naar opbouw.** Je ziet grofweg drie vormen:

- **Enkelvoudige agents** die één afgebakende taak uitvoeren, zoals het voorbereiden van een antwoord op een klantmail.
- **Agents binnen een [AI-workflow](/ai-automatisering/ai-workflows)**, waarbij een vaste procesflow de hoofdlijn bepaalt en de agent alleen de stappen doet die interpretatie vragen, zoals een document lezen of een vraag classificeren.
- **Samenwerkende agents**, waarbij meerdere agents elk een deeltaak hebben en een coördinerende agent het werk verdeelt. Dat is krachtiger, maar ook lastiger te testen en te controleren.

Voor de meeste organisaties is de tweede vorm het verstandigste startpunt: vaste regels waar het kan, een agent waar het moet.

## Voorbeelden

Een paar generieke voorbeelden om het concreet te maken:

- **Klantenservice:** een agent leest een binnenkomende mail, zoekt de order op, stelt een antwoord op en legt het voor aan een medewerker.
- **Sales:** na een klantgesprek zet een agent de notities om in een verslag, werkt het CRM bij en stelt een vervolgmail op ter goedkeuring.
- **Finance:** een agent vergelijkt binnenkomende facturen met inkooporders en markeert afwijkingen voor de crediteurenadministratie.
- **Interne kennis:** een agent beantwoordt vragen van collega's op basis van handboeken en beleidsdocumenten, met verwijzing naar de bron.

Een uitgebreidere lijst, per afdeling uitgewerkt met werking en benodigde koppelingen, vind je bij de [twaalf voorbeelden van AI agents](/ai-agents/voorbeelden).

<aside class="scenario" aria-label="Voorbeeldscenario">
<p class="scenario-label">Voorbeeldscenario</p>
<p>Een woningcorporatie met 300 medewerkers overweegt een agent die reparatieverzoeken van huurders zelfstandig afhandelt: melding lezen, een aannemer inplannen en de huurder een bevestiging sturen. Het gaat om zo'n 1.400 meldingen per maand.</p>
<p>De adviseur beoordeelt het plan vanuit klantzijde en knipt de taak op in stappen met elk een eigen niveau van zelfstandigheid. De agent deelt meldingen in en stelt een planning voor; een planner bevestigt. Meldingen die op gevaar wijzen, zoals lekkage of een stroomstoring, gaan altijd direct naar een mens.</p>
<p>In een proef van acht weken deelt de agent 85 procent van de meldingen juist in. De planner is per melding 3 minuten kwijt in plaats van 6, samen ongeveer 70 uur per maand. Zelf bevestigingen versturen doet de agent voorlopig niet.</p>
<p class="scenario-note">Fictief voorbeeld, samengesteld uit situaties die veel voorkomen. Organisatie en cijfers zijn illustratief.</p>
</aside>

Overweeg je zelf een agent, dan is de volgende vraag hoe je er een laat bouwen: wat je vooraf vastlegt, hoe je een bouwpartij kiest en wat het kost. Dat staat op de pagina over [een AI agent laten maken](/ai-agents/laten-maken). Wil je eerst sparren over de vraag of een agent de juiste oplossing is voor jouw proces? [Neem contact op](/contact) voor een vrijblijvend gesprek.
