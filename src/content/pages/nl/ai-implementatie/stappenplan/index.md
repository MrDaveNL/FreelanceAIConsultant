---
id: C2-03
url: /ai-implementatie/stappenplan
parent: C2-00
cluster: "2. AI Implementatie"
pageType: Spoke
schema: article
navLabel: AI implementatie stappenplan
title: "AI implementatie stappenplan in 7 stappen"
metaTitle: "AI implementatie stappenplan | In 7 stappen naar resultaat"
metaDescription: "Volg dit AI implementatie stappenplan: van doel en use case tot data, bouw, adoptie en optimalisatie. Met checklist per stap en veelgemaakte valkuilen."
keyphrase: ai implementatie stappenplan
eyebrow: "Stappenplan"
lede: "Dit AI implementatie stappenplan brengt je in zeven stappen van een doel naar een toepassing die in het dagelijkse werk draait en blijft draaien. Per stap lees je wat je moet beslissen, waar het vaak misgaat en wat je vastlegt voordat je doorgaat. De volledige checklist kun je onderaan downloaden."
primaryCta: { label: "Lees meer over AI implementatie", href: /ai-implementatie }
secondaryCta: { label: "Bekijk het AI Readiness Assessment", href: /diensten/ai-readiness-assessment }
summary:
  - "Begin bij een meetbaar doel, niet bij een tool."
  - "Beslis vóór de pilot wanneer je opschaalt en wanneer je stopt."
  - "Adoptie, beheer en meting horen in het plan, niet in de nazorg."
published: "2026-09-23"
updated: "2026-09-23"
sources:
  - title: "Ondernemersplein (KVK/Rijksoverheid): DPIA uitvoeren"
    url: "https://ondernemersplein.overheid.nl/wetten-en-regels/dpia-data-protection-impact-assessment-uitvoeren/"
  - title: "Europese Commissie: AI Omnibus enters into force"
    url: "https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force"
---

## Stap 1: Bepaal het doel

Eerst het overzicht. Een AI implementatie stappenplan is geen projectplanning met vinkjes, maar een reeks beslissingen die je in een vaste volgorde neemt, omdat elke stap de volgende bepaalt. Wie stap 3 overslaat, ontdekt in stap 5 dat de data niet deugt. Wie stap 6 pas na de oplevering oppakt, heeft een werkende toepassing die niemand gebruikt.

<figure class="diagram" role="img" aria-label="De zeven stappen van het AI implementatie stappenplan: doel bepalen, use case kiezen, data en systemen in kaart brengen, bouwen of kopen kiezen, pilot bouwen en testen, adoptie organiseren, en meten, borgen en opschalen">
<ol class="flow">
<li><b>1. Doel</b>Meetbaar probleem, eigenaar, nulmeting</li>
<li><b>2. Use case</b>Eén toepassing, gekozen op waarde en haalbaarheid</li>
<li><b>3. Data en systemen</b>Bronnen, kwaliteit, koppelingen, privacy</li>
<li><b>4. Bouwen of kopen</b>Onderbouwde keuze, inclusief exit</li>
<li><b>5. Pilot</b>In het echte werk, met stopcriteria</li>
<li><b>6. Adoptie</b>Scenario's per rol, ambassadeurs</li>
<li><b>7. Meten en opschalen</b>Beheer, governance, volgende toepassing</li>
</ol>
<figcaption>De zeven stappen bouwen op elkaar voort. Stap 6 en 7 bereid je al voor in stap 1.</figcaption>
</figure>

Dit plan gaat uit van één toepassing. Heb je meerdere kandidaten en wil je eerst de volgorde bepalen, begin dan met een [AI-roadmap](/ai-consultancy/ai-roadmap). Hoe ik organisaties door deze stappen begeleid, lees je op de pagina over [AI implementatie](/ai-implementatie).

Dan de eerste stap: begin bij het probleem, niet bij de technologie. "We willen iets met AI" of "we willen een chatbot" is geen doel. "De doorlooptijd van offerteaanvragen is te lang" of "onze medewerkers zoeken te lang naar informatie in eerdere dossiers" wel.

Maak het doel meetbaar en leg een nulmeting vast: hoe lang duurt het nu, hoeveel fouten gaan er nu in, wat kost het nu? Zonder nulmeting kun je later niet aantonen dat er iets is verbeterd. Wijs ook meteen een eigenaar aan: iemand in de lijn die er zelf beter van wordt en die budget en mandaat heeft.

Spreek tot slot af hoeveel tijd en geld je bereid bent te investeren voordat je een eerste uitkomst wilt zien. Dat budget is geen schatting van de uiteindelijke kosten, maar een grens: tot hier gaan we, en dan kijken we opnieuw.

**Valkuil:** een doel dat alleen door de IT-afdeling of een innovatieteam wordt gedragen. Dan is er na de oplevering niemand die de waarde gaat verzilveren.

## Stap 2: Kies de juiste use case

Maak een lijst van kandidaten en beoordeel ze op dezelfde criteria: wat levert het op, hoe haalbaar is het, is de data er klaar voor, hoeveel verandering vraagt het en is er een eigenaar? Een goede eerste use case is afgebakend, draait op een beperkt aantal bronnen en kan binnen een paar maanden laten zien of hij werkt.

Reken de businesscase door, inclusief de kosten die na de oplevering komen: beheer, licenties, monitoring en de tijd van je eigen mensen. Hoe je een businesscase opstelt die de toets van de CFO doorstaat, lees je in [de business case voor AI](/inzichten/de-business-case-voor-ai).

Leg ook vast welke kandidaten afvallen en waarom. Die afvallijst voorkomt dat dezelfde ideeën elk kwartaal opnieuw op tafel komen, en maakt zichtbaar welke randvoorwaarden eerst moeten worden ingevuld.

**Valkuil:** de use case kiezen die het mooist demonstreert in plaats van die het meeste oplevert. Zichtbaar is niet hetzelfde als waardevol.

## Stap 3: Breng data en systemen in kaart

Zoek uit welke data de toepassing nodig heeft, waar die staat, hoe betrouwbaar die is en wie erover gaat. Kijk ook naar de systemen waarmee de toepassing moet samenwerken: waar komt de input vandaan en waar moet de output naartoe? Elke koppeling is werk, en koppelingen worden in de planning bijna altijd onderschat. Waarom dit fundament vaak de echte bottleneck is, beschreef ik in [het datafundament onder AI](/inzichten/het-datafundament-onder-ai).

Verwerk je persoonsgegevens, beoordeel dan nu of er een hoog privacyrisico is. In dat geval is een [DPIA verplicht](https://ondernemersplein.overheid.nl/wetten-en-regels/dpia-data-protection-impact-assessment-uitvoeren/), en die kost tijd. Kijk ook of de toepassing onder de AI-verordening als hoog risico kan gelden. Door het Digital Omnibus-pakket gelden de verplichtingen voor de meeste hoog-risicosystemen vanaf 2 december 2027, [aldus de Europese Commissie](https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force). Meer daarover lees je bij [de AI Act](/ai-beleid/ai-act).

**Valkuil:** testen op een opgeschoonde proefdataset. De echte data is bijna altijd rommeliger, en dat merk je dan pas bij opschaling.

## Stap 4: Kies bouwen of kopen

Voor bijna elke toepassing zijn er drie routes: zelf bouwen, een bestaand product kopen of een partner laten bouwen en beheren terwijl jij de uitkomst stuurt. De vuistregel: bouw alleen wat je onderscheidt, koop wat een commodity is. Twijfel je, dan is kopen vaak de goedkoopste manier om te leren wat je echt nodig hebt. Het volledige afwegingskader staat in [build, buy of partner](/inzichten/build-buy-of-partner).

Kies je een leverancier of bouwpartner, leg dan vóór de gesprekken vast waarop je beoordeelt, en test op je eigen data in plaats van op de demo van de leverancier. Hoe je dat gestructureerd aanpakt, lees je in [AI vendorselectie in acht stappen](/inzichten/ai-vendorselectie-in-acht-stappen). Leg in het contract vast wie eigenaar is van code, configuratie en data, en hoe een overdracht verloopt. Een partner contracteer je rechtstreeks; ik reken geen marge op partijen die ik voorstel, zie het [partnernetwerk](/partnernetwerk).

**Valkuil:** alleen naar de kosten in het eerste jaar kijken. Onderhoud en exit bepalen de echte prijs.

## Stap 5: Bouw en test een pilot

Laat de pilot draaien in het echte werkproces, met echte data en echte gebruikers, ook als dat de scope kleiner maakt. Een pilot in een aparte omgeving naast het werk bewijst alleen dat de techniek werkt, en dat is tegenwoordig bijna altijd zo.

Leg vóór de start vast welke vraag de pilot beantwoordt, bij welke uitkomst hij geslaagd is, bij welke uitkomst je stopt en wie dat besluit. Stel een testset op met voorbeelden waarvan je het juiste antwoord kent, zodat je de kwaliteit objectief kunt beoordelen. Voer tijdens de pilot ook minstens één beheeractie uit, zoals een modelupdate of een aanpassing in de configuratie, zodat je weet wat beheer kost. Waarom pilots zo vaak blijven hangen, lees je in [waarom AI-pilots blijven steken](/inzichten/waarom-ai-pilots-blijven-steken).

**Valkuil:** een pilot zonder stopcriterium. Die eindigt nooit; hij verdampt.

## Stap 6: Zorg voor adoptie

Een licentie en een training zijn geen adoptiestrategie. Mensen gaan een toepassing gebruiken als die hun eerstvolgende taak makkelijker maakt. Geef ze daarom concrete scenario's voor hun eigen werk in plaats van een leeg invoerveld, en maak duidelijk wat wel en niet mag: welke data erin mag, wie verantwoordelijk is voor de uitkomst en wat je doet als het antwoord fout is.

Zoek per team een ambassadeur die hetzelfde werk doet, en zorg voor een plek waar mensen werkende voorbeelden delen. Bespreek ook openlijk wat er in het werk verandert en wie daarover beslist. Meer hierover in [AI-adoptie begint bij het werk](/inzichten/ai-adoptie-begint-bij-het-werk).

**Valkuil:** adoptie meten met één percentage voor de hele organisatie. Meet per rol of team, dan zie je waar het werkt en waar niet.

## Stap 7: Meet, borg en schaal op

Vergelijk de resultaten met de nulmeting uit stap 1. Leg vast wie de toepassing beheert, hoe vaak de kwaliteit wordt gecontroleerd en wat er gebeurt als die zakt. AI-toepassingen kunnen stilletjes slechter worden als de werkelijkheid verschuift, dus monitoring is geen eenmalige actie.

Richt lichte governance in: een overzicht van de AI-toepassingen die je gebruikt, een toets voordat iets live gaat, een periodieke evaluatie en een escalatiepad. Hoe dat werkt zonder bureaucratie, beschreef ik in [AI governance zonder bureaucratie](/inzichten/ai-governance-zonder-bureaucratie). Pas als de eerste toepassing stabiel draait en een eigenaar heeft, start je de volgende. Wat je van de eerste hebt geleerd over data, leveranciers en adoptie, maakt de tweede sneller.

Plan daarnaast een vast evaluatiemoment, bijvoorbeeld na drie maanden, waarop de eigenaar besluit: doorgaan, bijsturen of afbouwen.

**Valkuil:** opschalen voordat het beheer staat. Dan groeit de toepassing, maar ook het risico.

<aside class="scenario" aria-label="Voorbeeldscenario">
<p class="scenario-label">Voorbeeldscenario</p>
<p>Een woningcorporatie met 220 medewerkers wil reparatieverzoeken van huurders automatisch laten indelen en doorzetten naar de juiste vakman. De adviseur helpt bij stap 5 de pilotafspraken op papier te zetten: zes weken in één regio, met ongeveer 1.500 meldingen. Doorgaan bij minstens 85 procent juist ingedeeld, stoppen onder 75 procent. Het besluit ligt bij de manager klantcontact.</p>
<p>Na zes weken staat de score op 71 procent. Meldingen met alleen een foto of in spreektaal worden vaak verkeerd ingedeeld. De manager stopt de pilot, zoals afgesproken. De kosten tot dat moment: twee maanden licentie en ongeveer 60 uur eigen tijd.</p>
<p>Wat blijft, is een opgeschoonde lijst van 40 meldingscategorieën die het klantcontactcentrum nu zonder AI gebruikt. Een volgende poging begint daardoor met betere data en een scherpere vraag.</p>
<p class="scenario-note">Fictief voorbeeld, samengesteld uit situaties die veel voorkomen. Organisatie en cijfers zijn illustratief.</p>
</aside>

## Download de checklist

Wil je dit stappenplan gebruiken in je eigen project? [Download de AI implementatie checklist (pdf)](/downloads/ai-implementatie-checklist.pdf). Per stap staan daarin de vragen die je beantwoord moet hebben voordat je doorgaat. In het kort:

- **Doel:** meetbaar probleem, nulmeting en een eigenaar met budget en mandaat.
- **Use case:** beoordeeld op waarde, haalbaarheid, data, veranderlast en eigenaarschap, met een businesscase inclusief beheerkosten.
- **Data en systemen:** bronnen, kwaliteit, koppelingen en een privacy- en risicotoets onder de AVG en de AI-verordening.
- **Bouwen of kopen:** onderbouwde keuze, criteria vooraf, test op eigen data, afspraken over eigenaarschap en exit.
- **Pilot:** in het echte werk, met een testset, een succesdrempel en stopcriteria.
- **Adoptie:** scenario's per rol, ambassadeurs, duidelijke regels en meting per team.
- **Meten en opschalen:** vergelijking met de nulmeting, beheerplan, governance en een besluit over de volgende stap.

Loop je bij een van de stappen vast, of wil je weten welke keuzes je vooraf moet maken? Lees wat [advies vóór de implementatie](/ai-implementatie/advies) oplevert. Weet je nog niet of je organisatie er klaar voor is, dan geeft het [AI Readiness Assessment](/diensten/ai-readiness-assessment) in {{timing:ai-readiness-assessment}} een onderbouwd antwoord. En wil je het gewoon even voorleggen, [plan dan een gesprek](/contact).
