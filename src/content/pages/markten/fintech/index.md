---
id: C7-03
url: /markten/fintech
parent: C7-00
cluster: "7. AI markten"
pageType: Branche
schema: article
navLabel: AI voor fintech
title: "AI in fintech en financiële dienstverlening"
metaTitle: "AI in fintech | Toepassingen voor financiële dienstverlening"
metaDescription: "Hoe zetten banken en fintechs AI in? Lees over toepassingen, automatisering, governance en compliance, en hoe je AI verantwoord implementeert in finance."
keyphrase: ai fintech
eyebrow: "AI voor fintech"
lede: "AI in fintech en bij banken en verzekeraars draait om één spanning: veel repeterend documentwerk dat zich goed leent voor AI, in een sector waar elke beslissing uitlegbaar en herleidbaar moet zijn. Financiële dienstverlening is een van de sectoren waar mijn werk het zwaarst op leunt. Hier lees je waar de kansen zitten en welke regels meespelen."
primaryCta: { label: "Lees meer over Markten", href: /markten }
secondaryCta: { label: "Plan een adviesgesprek", href: /contact }
summary:
  - "De meeste winst zit in extractie en voorbereiding; het oordeel blijft bij de mens."
  - "Kredietbeoordeling en premiebepaling voor levens- en ziektekostenverzekeringen zijn hoog risico onder de AI Act, met regels vanaf 2 december 2027."
  - "DORA geldt sinds 17 januari 2025 ook voor de ICT-diensten achter je AI-toepassingen."
published: "2026-09-23"
updated: "2026-09-23"
faqTitle: "Veelgestelde vragen"
faq:
  - q: "Valt fraudedetectie onder hoog-risico-AI?"
    a: "Niet op grond van de bepaling over kredietwaardigheid: de AI Act zondert systemen voor het opsporen van financiële fraude daar uitdrukkelijk van uit. Dat betekent niet dat er geen eisen gelden. De AVG, het bestaande financiële toezicht en je eigen risicobeheer blijven van toepassing."
  - q: "Wie houdt toezicht op AI bij financiële instellingen?"
    a: "Voor het gebruik van AI binnen bestaande processen doen DNB en AFM dat al via het gewone financiële toezicht; bestaande regels gelden onverkort als AI wordt toegepast. Voor de AI Act wordt de verdeling in Nederland geregeld in de Uitvoeringswet AI-verordening. Stand september 2026 is dat nog een wetsvoorstel, en de AFM heeft zorgen geuit over de voorgestelde verdeling van toezichttaken tussen AFM en DNB."
  - q: "Geldt DORA ook voor AI-leveranciers?"
    a: "DORA richt zich op de financiële instelling. Die moet onder meer een informatieregister bijhouden van alle ICT-diensten die ze van derde partijen afneemt, inclusief onderuitbesteding. Een AI-dienst die je afneemt, hoort daar in de praktijk bij. Laat de precieze kwalificatie toetsen door je compliance- of juridische afdeling."
  - q: "Hoe begin je met AI als kleine fintech?"
    a: "Met één proces waar veel handwerk zit en waar een fout te herstellen is, zoals het voorbereiden van dossiers of het beantwoorden van standaardvragen. Leg vanaf de start vast wat het systeem doet, wie controleert en hoe je dat aantoont. Dat is goedkoper dan het achteraf reconstrueren voor een toezichthouder."
sources:
  - title: "AI Act, bijlage III (tekstweergave artificialintelligenceact.eu)"
    url: "https://artificialintelligenceact.eu/annex/3/"
  - title: "AI-verordening (EU) 2024/1689 (EUR-Lex)"
    url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"
  - title: "Europese Commissie: AI Omnibus enters into force"
    url: "https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force"
  - title: "Europese Commissie: Commission starts enforcing AI Act rules and new transparency requirements on 2 August"
    url: "https://cyprus.representation.ec.europa.eu/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august-2026-07-31_en"
  - title: "DNB: AFM en DNB publiceren rapport over de impact van AI in de financiële sector en het toezicht daarop (9 april 2024)"
    url: "https://www.dnb.nl/nieuws-voor-de-sector/toezicht-2024/afm-en-dnb-publiceren-rapport-over-de-impact-van-ai-in-de-financiele-sector-en-het-toezicht-daarop/"
  - title: "DNB: DORA"
    url: "https://www.dnb.nl/voor-de-sector/open-boek-toezicht/wet-regelgeving/dora/"
  - title: "DNB: DORA, het toezicht van DNB per 17 januari 2025"
    url: "https://www.dnb.nl/nieuws-voor-de-sector/toezicht-2024/dora-het-toezicht-van-dnb-per-17-januari-2025/"
  - title: "AFM: Uitvoeringswet AI-verordening uitvoerbaar, maar aanpassingen nodig voor effectief toezicht (12 juni 2026)"
    url: "https://www.afm.nl/nl-nl/sector/actueel/2026/jun/pb-uitvoeringstoets"
---

## AI toepassingen in fintech

In fintech en de bredere financiële sector komen AI-toepassingen grofweg in vier soorten voor:

- **Documentverwerking:** gegevens halen uit identiteitsbewijzen, uittreksels, jaarrekeningen, loonstroken of polissen. Dit is het klassieke terrein van onboarding, KYC en acceptatie.
- **Signalering:** transactiemonitoring, fraudedetectie en het markeren van afwijkende patronen voor een analist.
- **Beoordeling en prijsstelling:** kredietbeoordeling, risicoselectie en premiebepaling. Hier raakt AI direct de belangen van klanten.
- **Klantcontact en kennis:** het beantwoorden van standaardvragen, het voorbereiden van adviesgesprekken en het doorzoeken van interne regelgeving en procedures.

De eerste twee soorten leveren vaak de snelste winst. De derde soort kan veel waarde hebben, maar valt deels onder het zwaarste regime van de AI Act. De vierde lijkt onschuldig, maar een chatbot die klanten verkeerd informeert, is in een gereguleerde sector geen klein probleem.

Welke toepassing je eerst aanpakt, hangt af van waar het werk zit en hoeveel risico je kunt dragen. Een voorbeeld van hoe dat afwegen in de praktijk gaat, is de case over een [use-case portfolio voor een investeringsmaatschappij](/cases/ai-strategie-investeringsmaatschappij).

## AI automatisering in financiële dienstverlening

Het belangrijkste onderscheid bij automatisering in financiële dienstverlening is dat tussen **extractie** en **oordeel**. Extractie is feiten uit een document halen: wat is de naam, het bedrag, de datum, de uiteindelijk belanghebbende. Oordeel is wegen wat die feiten betekenen: vormt dit een risico, past deze klant binnen ons beleid?

AI is goed in extractie en kan daar veel zoekwerk wegnemen. Het oordeel hoort in de meeste processen bij een mens, die de voorstellen van het systeem bevestigt of corrigeert. Dat is niet alleen voorzichtig, het is ook praktisch: elke bevestiging en correctie levert een auditspoor en een meetbare kwaliteitsloop op.

<figure class="diagram" role="img" aria-label="Processchema voor AI in een financieel dossierproces: document binnen, AI extraheert gegevens met een betrouwbaarheidsscore, boven de drempel een voorstel, onder de drempel direct naar de analist, de analist bevestigt of corrigeert en alles wordt vastgelegd">
<ol class="flow">
<li><b>Document binnen</b>Identiteitsbewijs, uittreksel, jaarrekening of polis.</li>
<li><b>Extractie</b>AI haalt de gegevens eruit, met een betrouwbaarheidsscore per veld.</li>
<li><b>Drempel</b>Boven de drempel een voorstel; eronder gaat het veld ongefilterd naar de analist.</li>
<li><b>Oordeel</b>De analist bevestigt, corrigeert en beslist.</li>
<li><b>Vastleggen</b>Elke bevestiging en correctie komt in het auditspoor en voedt de kwaliteitsmeting.</li>
</ol>
<figcaption>De AI bereidt voor, de mens beslist, en alles is herleidbaar. Zo blijft een geautomatiseerd proces uitlegbaar richting audit en toezicht.</figcaption>
</figure>

Precies dit patroon staat centraal in de case over [KYC-documentanalyse bij een financiële dienstverlener](/cases/kyc-documentanalyse-financial-services). Het moeilijke deel was daar niet het model, maar een werkproces ontwerpen waarin analisten de uitkomst kunnen vertrouwen én kunnen overrulen.

Een waarschuwing bij de huidige belangstelling voor agents die zelfstandig stappen zetten: in een financieel proces wil je precies weten wat er gebeurt als zo'n agent ernaast zit. Wat agents wel en niet goed kunnen, beschrijf ik in [AI-agents in een bedrijfsproces](/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen).

<aside class="scenario" aria-label="Voorbeeldscenario">
<p class="scenario-label">Voorbeeldscenario</p>
<p>Een schadeverzekeraar met 250 medewerkers verwerkt zo'n 4.000 schademeldingen per maand. Een leverancier biedt een agent aan die meldingen leest, routeert en kleine schades zelfstandig uitkeert.</p>
<p>De adviseur begeleidt de selectie vanuit klantzijde. Drie aanbieders krijgen dezelfde set van 200 geanonimiseerde meldingen, en auditspoor, exitpad en de plek in het DORA-informatieregister wegen mee. De scope gaat terug naar voorbereiden: de agent haalt gegevens uit het formulier en stelt een route voor, de schadebehandelaar beslist. De verzekeraar contracteert de gekozen partij rechtstreeks.</p>
<p>Na acht weken daalt de registratietijd van 11 naar 6 minuten per melding, samen ruim 330 uur per maand. Behandelaars nemen 94 procent van de routevoorstellen ongewijzigd over, en elke correctie wordt vastgelegd. Zelfstandig uitkeren is bewust niet ingevoerd.</p>
<p class="scenario-note">Fictief voorbeeld, samengesteld uit situaties die veel voorkomen. Organisatie en cijfers zijn illustratief.</p>
</aside>

## AI governance en compliance

AI governance in de financiële sector is geen nieuw bouwwerk naast het bestaande risicobeheer. AFM en DNB stelden in hun gezamenlijke rapport van april 2024 al dat van financiële instellingen verwacht mag worden dat ze AI verantwoord inzetten, en dat bestaande regelgeving onverkort geldt als AI wordt toegepast ([DNB](https://www.dnb.nl/nieuws-voor-de-sector/toezicht-2024/afm-en-dnb-publiceren-rapport-over-de-impact-van-ai-in-de-financiele-sector-en-het-toezicht-daarop/)). Datakwaliteit, gegevensbescherming, uitlegbaarheid en het risico op discriminatie en uitsluiting noemen ze daarbij expliciet.

Daarbovenop komen drie regimes die je moet kennen (stand september 2026):

- **De AI Act.** AI waarmee de kredietwaardigheid van personen wordt beoordeeld of een kredietscore wordt vastgesteld, is hoog risico, met uitzondering van systemen voor het opsporen van financiële fraude. Hetzelfde geldt voor AI voor risicobeoordeling en prijsstelling bij levens- en ziektekostenverzekeringen ([AI Act, bijlage III](https://artificialintelligenceact.eu/annex/3/)). Door de Digital Omnibus gelden de hoog-risicoregels voor deze toepassingen vanaf 2 december 2027 in plaats van augustus 2026 ([Europese Commissie](https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force)). De transparantieregels, bijvoorbeeld dat een chatbot moet melden dat de klant met AI praat, gelden al sinds 2 augustus 2026 ([Europese Commissie](https://cyprus.representation.ec.europa.eu/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august-2026-07-31_en)).
- **DORA.** De Digital Operational Resilience Act geldt sinds 17 januari 2025 en regelt ICT-risicobeheer, incidentmelding, het testen van digitale weerbaarheid en het beheer van ICT-dienstverleners. Financiële instellingen moeten een informatieregister bijhouden van alle ICT-diensten die ze van derden afnemen, inclusief onderuitbesteding ([DNB, DORA](https://www.dnb.nl/voor-de-sector/open-boek-toezicht/wet-regelgeving/dora/); [DNB, toezicht per 17 januari 2025](https://www.dnb.nl/nieuws-voor-de-sector/toezicht-2024/dora-het-toezicht-van-dnb-per-17-januari-2025/)). Een AI-dienst van een externe leverancier is daarmee ook een DORA-vraag: exitpad, afhankelijkheid en incidentafspraken horen in je selectie.
- **Het Nederlandse toezicht op de AI Act.** Wie in Nederland op de AI Act toeziet, wordt geregeld in de Uitvoeringswet AI-verordening. Die was in juni 2026 nog een wetsvoorstel in consultatie. De AFM pleit ervoor dat zowel AFM als DNB, elk vanuit de eigen rol, worden aangewezen voor het toezicht op verboden toepassingen en hoog-risicotoepassingen zoals kredietbeoordeling en verzekeringspricing ([AFM, 12 juni 2026](https://www.afm.nl/nl-nl/sector/actueel/2026/jun/pb-uitvoeringstoets)).

Uitstel van de AI Act-regels is geen reden om te wachten. Een kredietmodel dat je nu inkoopt of laat bouwen, gebruik je waarschijnlijk nog als de eisen in december 2027 gaan gelden. Neem ze dus nu al mee in je ontwerp en selectie. Wat de AI Act per risicocategorie vraagt, staat op de pagina over [de AI Act](/ai-beleid/ai-act); hoe je daar een breder [AI-beleid](/ai-beleid) omheen zet, lees je op de overzichtspagina. Hoe je governance proportioneel houdt, met zware eisen alleen waar het risico dat rechtvaardigt, beschrijf ik in [AI-governance zonder bureaucratie](/inzichten/ai-governance-zonder-bureaucratie). Dit is geen juridisch advies: laat de kwalificatie van een concrete toepassing toetsen door je compliance- of juridische afdeling.

## AI consultancy voor financiële instellingen

Wat ik voor banken, verzekeraars, fintechs en investeerders doe, is hetzelfde als in andere sectoren, maar met de lat hoger voor uitlegbaarheid en herleidbaarheid:

- **Prioriteren:** welke toepassingen leveren iets op en passen binnen je risicobereidheid? Een logisch begin is een nulmeting met de [AI Readiness Assessment](/diensten/ai-readiness-assessment).
- **Kiezen:** een leverancier of bouwpartij selecteren met criteria voor uitlegbaarheid, auditspoor, datarechten en exitpad. Met een [Vendor Review](/diensten/vendor-review) leg je die keuze vast op een manier waar inkoop, compliance en audit mee verder kunnen.
- **Beoordelen:** voor investeerders en corporate-developmentteams die een AI-propositie of -leverancier willen doorlichten, is er de [AI Due Diligence](/diensten/ai-due-diligence), altijd onder NDA.
- **Borgen:** als je geen fulltime Head of AI hebt, kan een [Fractional AI Lead](/diensten/fractional-ai-lead) de AI-agenda bewaken en de afstemming met risk, compliance en audit organiseren.

Ik bouw en verkoop zelf geen software en heb geen commissies of partnerstatus bij leveranciers. Implementaties begeleid ik vanuit jouw kant van de tafel. Juist in een sector waar je later moet kunnen uitleggen waarom je voor een bepaalde partij hebt gekozen, maakt dat verschil.

Andere sectoren met stevige regels zijn de zorg, waar medische software onder aparte productwetgeving valt; zie [AI in de zorg](/markten/zorg). Voor een sector waar het vooral om klantdata en toestemming draait, zie [AI voor marketing](/markten/marketing). Alle sectoren vind je bij [AI per branche](/markten). Wil je sparren over een concrete vraag? [Plan een adviesgesprek](/contact).
