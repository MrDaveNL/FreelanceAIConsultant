---
id: C10-05
url: /kennisbank/prompt-engineering
parent: C3-05
cluster: "10. Kennisbank AI tools"
pageType: Kennisbank
schema: article
navLabel: "Prompt engineering"
title: "Prompt engineering: betere resultaten uit AI"
metaTitle: "Prompt engineering | Zo schrijf je betere AI prompts"
metaDescription: "Leer hoe je betere AI prompts schrijft. Met technieken, voorbeelden en templates voor zakelijk gebruik in ChatGPT, Claude, Gemini en Microsoft Copilot."
keyphrase: ai prompt
eyebrow: "Kennisbank"
lede: "Een AI prompt is de opdracht die je aan een taalmodel geeft, en de kwaliteit van die opdracht bepaalt voor een groot deel wat je terugkrijgt. Prompt engineering klinkt technisch, maar voor de meeste zakelijke gebruikers komt het neer op iets vertrouwds: een goede opdracht geven aan iemand die slim is maar je organisatie niet kent. Hieronder lees je welke technieken de makers van ChatGPT, Claude, Gemini en Copilot zelf aanraden, met templates die je direct kunt gebruiken."
primaryCta: { label: "Bekijk de AI workshops", href: /ai-workshop }
secondaryCta: { label: "Plan een adviesgesprek", href: /contact }
summary:
  - "Een goede prompt vertelt wat je wilt, waarom, voor wie en in welke vorm."
  - "Voorbeelden, context en een duidelijke structuur verbeteren het resultaat meer dan slimme formules."
  - "Controleer de uitkomst altijd: een taalmodel kan overtuigend klinken en toch fout zitten."
published: "2026-09-23"
updated: "2026-09-23"
sources:
  - title: "Anthropic: Prompting best practices (Claude)"
    url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
  - title: "Anthropic: Prompt engineering overview"
    url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview"
  - title: "OpenAI: Prompt engineering guide"
    url: "https://developers.openai.com/api/docs/guides/prompt-engineering"
  - title: "Google AI for Developers: Prompt design strategies"
    url: "https://ai.google.dev/gemini-api/docs/prompting-strategies"
  - title: "Google Workspace Learning Center: Tips to write prompts for Gemini"
    url: "https://support.google.com/a/users/answer/14200040"
  - title: "Microsoft Support: Learn about Copilot prompts"
    url: "https://support.microsoft.com/en-us/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5"
  - title: "Microsoft Learn: Data, privacy, and security for Microsoft Copilot"
    url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy"
---

## Wat is prompt engineering?

Een AI prompt is de tekst waarmee je een taalmodel aan het werk zet: een vraag, een opdracht, eventueel met documenten of voorbeelden erbij. Prompt engineering is het vak om die opdracht zo te formuleren dat het model doet wat je bedoelt, en dat het dat de volgende keer weer doet.

Voor ontwikkelaars die AI in software inbouwen, is dat een echte discipline met tests en versiebeheer. Voor de meeste medewerkers is het eenvoudiger: je leert een paar gewoontes aan die het verschil maken tussen een generiek antwoord en een bruikbaar concept. Die gewoontes werken in elke assistent, of je nu met [ChatGPT in je organisatie](/kennisbank/chatgpt-voor-bedrijven), [Claude](/kennisbank/claude-voor-bedrijven), [Gemini in Google Workspace](/kennisbank/gemini-voor-bedrijven) of [Microsoft Copilot](/kennisbank/microsoft-copilot-voor-bedrijven) werkt.

Anthropic geeft in zijn [handleiding voor prompts](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices) een beeld dat goed blijft hangen: zie het model als een briljante maar nieuwe medewerker die je normen en werkwijze nog niet kent. Hoe preciezer je uitlegt wat je wilt, hoe beter het resultaat. Hun vuistregel: laat je prompt lezen door een collega die niets van de taak weet. Snapt die het niet, dan snapt het model het ook niet.

Welke assistent bij je organisatie past, is een aparte vraag; daarvoor is het [overzicht van AI tools](/ai-automatisering/ai-tools) een beter startpunt.

## Technieken

De officiële promptgidsen van OpenAI, Anthropic, Google en Microsoft verschillen in details, maar stand september 2026 komen ze op dezelfde kern uit. Dit zijn de technieken die in meerdere gidsen terugkomen.

<figure class="diagram" role="img" aria-label="De bouwstenen van een goede prompt op volgorde: rol, taak, context, voorbeelden en gewenste vorm">
<ol class="flow">
<li><b>Rol</b>Vanuit welk perspectief moet het model werken?</li>
<li><b>Taak</b>Wat moet er gebeuren, zo concreet mogelijk?</li>
<li><b>Context</b>Voor wie, waarom en met welke bronnen?</li>
<li><b>Voorbeelden</b>Hoe ziet een goed resultaat eruit?</li>
<li><b>Vorm</b>Lengte, structuur, toon en wat er niet in mag.</li>
</ol>
<figcaption>Niet elke prompt heeft alle vijf nodig, maar hoe belangrijker de uitkomst, hoe meer bouwstenen je invult.</figcaption>
</figure>

**1. Wees duidelijk en specifiek.** Google noemt [heldere en specifieke instructies](https://ai.google.dev/gemini-api/docs/prompting-strategies) als eerste strategie. "Schrijf een mail aan een klant" levert iets generieks op. "Schrijf een korte mail aan een bestaande klant die een levering te laat krijgt, bied excuses aan zonder schuld te erkennen en noem de nieuwe datum" levert iets bruikbaars op.

**2. Geef context en leg uit waarom.** Anthropic raadt aan om het doel achter een instructie te geven, zodat het model beter begrijpt wat je wilt bereiken. Microsoft zegt in zijn [uitleg over Copilot-prompts](https://support.microsoft.com/en-us/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5) iets vergelijkbaars: een goede prompt kan vier elementen bevatten, namelijk het doel, de context, je verwachtingen en de bron. Alleen het doel is verplicht; de rest maakt het antwoord specifieker.

**3. Geef een rol.** Een zin als "Je bent een ervaren inkoper die offertes beoordeelt" stuurt toon en invalshoek. Anthropic merkt op dat zelfs één zin al verschil maakt.

**4. Laat voorbeelden zien.** Dit heet few-shot prompting. OpenAI adviseert een handvol voorbeelden van invoer en gewenste uitvoer, met variatie. Google gaat verder en raadt aan om in principe altijd voorbeelden op te nemen. Anthropic noemt drie tot vijf goed gekozen voorbeelden als richtlijn. Heb je een mail of samenvatting die precies goed is, plak die dan mee als voorbeeld.

**5. Maak de structuur zichtbaar.** Zowel [OpenAI](https://developers.openai.com/api/docs/guides/prompt-engineering) als Anthropic raden aan om instructies, context en voorbeelden duidelijk van elkaar te scheiden, met kopjes of met labels zoals `<context>` en `<voorbeeld>`. Dat voorkomt dat het model een voorbeeld aanziet voor een instructie.

**6. Leg vorm en grenzen vast.** Vraag expliciet om een tabel, vijf bullets of maximaal honderd woorden. Google noemt zowel het antwoordformaat als beperkingen ("wat wel en niet") als aparte technieken.

**7. Knip grote taken op.** De [promptgids van Google Workspace](https://support.google.com/a/users/answer/14200040) raadt aan complexe taken in aparte prompts te verdelen. Anthropic beschrijft een bruikbaar patroon: laat eerst een concept maken, laat het model dat daarna toetsen aan criteria, en laat het op basis van die toets verbeteren.

**8. Zet lange documenten bovenaan.** Werk je met lange stukken, zoals een contract of jaarverslag, zet die dan volgens Anthropic bovenaan de prompt en je vraag onderaan.

## Voorbeelden en templates

Onderstaande templates kun je kopiëren en aanvullen. Vervang alles tussen haken door je eigen situatie. Ze werken in elke gangbare assistent.

### Template voor een goede AI prompt

```
Rol: Je bent [rol, bijvoorbeeld: een ervaren communicatieadviseur].
Taak: [Wat moet er gebeuren, in één of twee zinnen.]
Context: Dit is bedoeld voor [doelgroep]. Het doel is [wat je wilt bereiken].
Bronnen: Gebruik alleen de informatie hieronder. Als iets ontbreekt, zeg dat dan.
Vorm: [Lengte, structuur, toon.] Niet doen: [wat je expliciet niet wilt].

<bron>
[Plak hier de tekst of het document.]
</bron>
```

**Een lange tekst samenvatten voor een besluit**

```
Vat het document hieronder samen voor de directie, die over twee weken
moet besluiten of we doorgaan met [project]. Geef:
1. de kern in drie zinnen;
2. de belangrijkste risico's als bullets;
3. de open vragen die nog beantwoord moeten worden.
Maximaal 250 woorden. Citeer geen cijfers die niet in het document staan.
```

**Een tekst herschrijven in een vaste stijl**

```
Herschrijf de tekst hieronder in dezelfde stijl als het voorbeeld.
Houd de inhoud gelijk, verander alleen toon en opbouw.

<voorbeeld>
[Een tekst die precies goed is.]
</voorbeeld>

<tekst>
[De tekst die herschreven moet worden.]
</tekst>
```

**Een concept laten toetsen**

```
Hieronder staat een concept voor [offerte, beleidsnotitie, mail].
Beoordeel het op: duidelijkheid voor [doelgroep], volledigheid en toon.
Geef per punt wat beter kan, en schrijf daarna een verbeterde versie.
```

Het laatste template past het patroon van concept, toets en verbetering toe. Het werkt ook als je het concept zelf hebt geschreven.

<aside class="scenario" aria-label="Voorbeeldscenario">
<p class="scenario-label">Voorbeeldscenario</p>
<p>Een groothandel met 85 medewerkers gebruikt ChatGPT Business om antwoorden op klachten op te stellen. De klantenservice gebruikt steeds dezelfde prompt: "Schrijf een antwoord op deze klacht." De concepten zijn lang en stijf, en worden vaak grotendeels herschreven.</p>
<p>Tijdens een training met de adviseur herschrijft het team die prompt, met de eigen klachten als oefenmateriaal. De nieuwe versie geeft een rol, de context (bestaande klant, levering te laat), twee goedgekeurde voorbeeldmails en een vorm: maximaal 120 woorden, je-vorm, excuses zonder schuld te erkennen en altijd de nieuwe leverdatum. Ontbreekt die datum, dan moet het model erom vragen in plaats van er een te verzinnen.</p>
<p>Van dertig echte klachten konden eerst 6 concepten vrijwel ongewijzigd de deur uit, met de nieuwe prompt 21. De teamleider beheert de prompt nu in een gedeelde bibliotheek. Automatisch versturen is bewust niet ingevoerd.</p>
<p class="scenario-note">Fictief voorbeeld, samengesteld uit situaties die veel voorkomen. Organisatie en cijfers zijn illustratief.</p>
</aside>

Een losse template helpt een individu. Een team heeft meer aan een gedeelde verzameling prompts voor terugkerend werk, met één eigenaar die ze bijhoudt. Dat voorkomt dat iedereen opnieuw het wiel uitvindt en maakt de kwaliteit voorspelbaarder.

## Veelgemaakte fouten

**Te weinig context.** De meest voorkomende fout. Het model weet niet voor wie het schrijft, wat al bekend is of wat je ermee gaat doen, en vult dat in met iets gemiddelds.

**Alles in één prompt.** Een opdracht met zes deeltaken levert zes halve antwoorden op. Knip op en bouw voort op het vorige antwoord.

**De uitkomst niet controleren.** Microsoft schrijft zelf in zijn [documentatie over Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy) dat antwoorden van generatieve AI niet gegarandeerd feitelijk juist zijn en dat gebruikers ze moeten beoordelen voordat ze iets delen. Dat geldt voor elke assistent. Controleer namen, cijfers, bronnen en juridische of financiële uitspraken altijd zelf.

**Vertrouwelijke gegevens in de verkeerde tool.** Een goede prompt bevat vaak context, en die context kan gevoelig zijn. Gebruik voor bedrijfsinformatie alleen de omgeving die je organisatie daarvoor heeft goedgekeurd, en houd je aan de afspraken over persoonsgegevens.

**Zoeken naar de magische formule.** Er circuleren veel "ultieme prompts". Ze helpen soms, maar de gidsen van de leveranciers zelf leggen de nadruk op iets saaiers: helder formuleren, context geven, voorbeelden tonen en testen. Anthropic benadrukt zelfs dat je eerst moet vastleggen wat een goed resultaat is en hoe je dat toetst, voordat je aan de prompt gaat schaven.

**Stoppen na de eerste poging.** Een eerste antwoord is een concept. Vraag door, geef feedback ("korter", "formeler", "meer nadruk op kosten") en sla een prompt die goed werkt op voor de volgende keer.

Prompten leer je het snelst met je eigen werk als oefenmateriaal. Wil je dat met je team doen, kijk dan naar de [ChatGPT training voor teams](/ai-workshop/chatgpt-training) of, als je met Microsoft 365 werkt, de [training voor Copilot](/ai-workshop/copilot-training). Een overzicht van alle vormen staat bij de [AI workshops en trainingen](/ai-workshop).

Wil je weten waar prompt engineering in jouw organisatie het meeste oplevert, of hoe je een gedeelde promptbibliotheek opzet? [Plan een adviesgesprek](/contact) van dertig minuten.
