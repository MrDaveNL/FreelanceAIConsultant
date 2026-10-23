---
id: C6-05
url: /kennisbank/ai-agents-en-avg
parent: C6-00
cluster: "6. AI Agents"
pageType: Kennisbank
schema: article
navLabel: AI agents en AVG
title: "AI agents en de AVG: waar moet je op letten?"
metaTitle: "AI agents en de AVG | Privacy en compliance in de praktijk"
metaDescription: "Hoe zet je AI agents in zonder AVG-risico's? Lees over verwerkersovereenkomsten, dataminimalisatie, logging en de AI Act. Inclusief praktische checklist."
keyphrase: ai agent avg
eyebrow: "Kennisbank"
lede: "Een AI agent die zelf systemen raadpleegt en gegevens verwerkt, valt gewoon onder de AVG. Voor wie een AI agent inzet, verandert de AVG niet, maar de risico's wel: een agent verwerkt meer gegevens, in meer stappen, met minder zicht. Dit artikel zet de belangrijkste eisen op een rij, legt de samenhang met de AI Act uit en sluit af met een checklist."
primaryCta: { label: "Lees meer over AI beleid", href: /ai-beleid }
secondaryCta: { label: "Plan een adviesgesprek", href: /contact }
summary:
  - "De AVG geldt volledig voor AI agents; de risico's zitten in de breedte van toegang en het gebrek aan zicht."
  - "Verwerkersovereenkomst, dataminimalisatie, logging en vaak een DPIA zijn de basis."
  - "De AI Act komt daar bovenop, met data die door de Digital Omnibus zijn verschoven."
published: "2026-09-23"
updated: "2026-09-23"
sources:
  - title: "Verordening (EU) 2016/679 (AVG), via EUR-Lex"
    url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj/nld"
  - title: "Verordening (EU) 2024/1689 (AI-verordening), via EUR-Lex"
    url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj/nld"
  - title: "Verordening (EU) 2026/1744 (Digital Omnibus on AI), via EUR-Lex"
    url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj"
  - title: "Europees Parlement, Legislative Train: Digital Omnibus Regulation Proposal (2025/0360(COD))"
    url: "https://www.europarl.europa.eu/legislative-train/theme-a-new-plan-for-europe-s-sustainable-prosperity-and-competitiveness/file-digital-package"
  - title: "Autoriteit Persoonsgegevens: Data protection impact assessment (DPIA)"
    url: "https://autoriteitpersoonsgegevens.nl/themas/basis-avg/praktisch-avg/data-protection-impact-assessment-dpia"
  - title: "Autoriteit Persoonsgegevens: Lijst verplichte DPIA (Staatscourant 2019, nr. 64418)"
    url: "https://www.autoriteitpersoonsgegevens.nl/documenten/lijst-verplichte-dpia"
  - title: "Autoriteit Persoonsgegevens: Caution: use of AI chatbot may lead to data breaches (6 augustus 2024)"
    url: "https://www.autoriteitpersoonsgegevens.nl/en/current/caution-use-of-ai-chatbot-may-lead-to-data-breaches"
  - title: "Autoriteit Persoonsgegevens en ACM: Oproep over AI-chatbots (2 oktober 2025)"
    url: "https://www.autoriteitpersoonsgegevens.nl/documenten/oproep-acm-ap-over-ai-chatbots"
  - title: "Autoriteit Persoonsgegevens: Toezicht op AI wordt concreet, sleutelrol voor de AP en de RDI (20 april 2026)"
    url: "https://www.autoriteitpersoonsgegevens.nl/actueel/toezicht-op-ai-wordt-concreet-sleutelrol-voor-de-ap-en-de-rdi"
  - title: "EDPB: Endorsed WP29 Guidelines (o.a. DPIA en geautomatiseerde besluitvorming)"
    url: "https://www.edpb.europa.eu/our-work-tools/general-guidance/endorsed-wp29-guidelines_en"
---

## Waarom AI agents privacyrisico's geven

Een [AI agent](/ai-agents/wat-is-een-ai-agent) krijgt een doel en zet zelf stappen: gegevens opzoeken, systemen raadplegen, iets vastleggen of versturen. Voor de AVG maakt het niet uit of een mens of een agent die stappen zet. De organisatie die de agent inzet, blijft verwerkingsverantwoordelijke. Wat wel verandert, is het risicoprofiel.

Vier kenmerken maken agents gevoeliger dan een gewone AI-toepassing:

- **Brede toegang.** Een agent die mailbox, CRM en documentopslag kan doorzoeken, komt vanzelf persoonsgegevens tegen die voor zijn taak niet nodig zijn.
- **Meerdere stappen zonder zicht.** Als je niet ziet welke bronnen de agent raadpleegde, kun je niet aantonen dat de verwerking beperkt bleef tot wat nodig was.
- **Gegevens naar derden.** De meeste agents draaien op een taalmodel van een externe leverancier. Wat de agent opzoekt, gaat mee naar die leverancier, soms buiten de EU.
- **Handelen in plaats van adviseren.** Een agent die een aanvraag afwijst of een klant indeelt, neemt mogelijk een besluit over een persoon.

Dat het misgaat, is geen theorie. De Autoriteit Persoonsgegevens (AP) meldde in augustus 2024 dat zij [meerdere datalekken had ontvangen](https://www.autoriteitpersoonsgegevens.nl/en/current/caution-use-of-ai-chatbot-may-lead-to-data-breaches) doordat medewerkers persoonsgegevens van patiënten of klanten in een AI-chatbot hadden ingevoerd. Bij een agent gebeurt hetzelfde, alleen geautomatiseerd en op grotere schaal.

## AVG-eisen voor AI agents

De AVG heeft geen apart hoofdstuk voor AI agents. De bestaande regels van de [AVG](https://eur-lex.europa.eu/eli/reg/2016/679/oj/nld) zijn wel direct van toepassing. De belangrijkste voor een AI agent:

- **Doel en grondslag (art. 5 en 6).** Leg per agent vast voor welk welbepaald doel hij persoonsgegevens verwerkt en op welke grondslag. Een agent die "alles mag doorzoeken" heeft geen welbepaald doel.
- **Minimale gegevensverwerking (art. 5 lid 1 onder c).** Gegevens moeten beperkt blijven tot wat noodzakelijk is. Voor een agent betekent dat: toegang per bron afbakenen en velden die hij niet nodig heeft afschermen.
- **Gegevensbescherming door ontwerp (art. 25).** Die afbakening hoort in het ontwerp, niet achteraf. Neem haar op in de specificatie als je [een AI agent laat maken](/ai-agents/laten-maken).
- **Verwerkersovereenkomst (art. 28).** Verwerkt de leverancier van het platform of taalmodel persoonsgegevens namens jou, dan is een verwerkersovereenkomst nodig. Let op subverwerkers: de verwerker mag die alleen inschakelen met jouw voorafgaande specifieke of algemene schriftelijke toestemming.
- **Doorgifte buiten de EU (art. 44 e.v.).** Als gegevens naar een land buiten de EU gaan, gelden de aanvullende voorwaarden uit hoofdstuk V.
- **Beveiliging en datalekken (art. 32 en 33).** Passende beveiliging, en een datalek meld je zonder onredelijke vertraging en zo mogelijk binnen 72 uur bij de AP, tenzij het risico voor betrokkenen onwaarschijnlijk is.
- **Register (art. 30).** Neem de verwerking door de agent op in je register van verwerkingsactiviteiten.
- **Geautomatiseerde besluitvorming (art. 22).** Mensen hebben het recht niet te worden onderworpen aan een besluit dat uitsluitend op geautomatiseerde verwerking berust en rechtsgevolgen heeft of hen anderszins in aanmerkelijke mate treft. Er zijn uitzonderingen. Berust zo'n besluit op een overeenkomst of op uitdrukkelijke toestemming, dan hebben betrokkenen ten minste recht op menselijke tussenkomst, op het geven van hun standpunt en op het aanvechten van het besluit. Daarnaast moet je bij zulke besluiten informatie geven over de onderliggende logica (art. 13 lid 2 onder f).

<figure class="diagram" role="img" aria-label="Beslisroute voor privacy bij een AI agent: persoonsgegevens in beeld, doel en grondslag vastleggen, verwerkersovereenkomst controleren, DPIA-toets uitvoeren en bepalen of de agent besluiten over mensen neemt">
<ol class="flow">
<li><b>Persoonsgegevens?</b>Welke bronnen raakt de agent</li>
<li><b>Doel en grondslag</b>Per agent vastgelegd, toegang afgebakend</li>
<li><b>Leverancier</b>Verwerkersovereenkomst, subverwerkers, locatie</li>
<li><b>DPIA-toets</b>AP-lijst en de negen criteria</li>
<li><b>Besluit over mensen?</b>Dan art. 22: menselijke tussenkomst</li>
</ol>
<figcaption>Vijf vragen die je per agent beantwoordt voordat hij met echte persoonsgegevens gaat werken.</figcaption>
</figure>

**DPIA.** Een DPIA is verplicht als een verwerking, zeker met nieuwe technologie, waarschijnlijk een hoog risico inhoudt (art. 35). De AP heeft een [lijst van verwerkingen waarvoor een DPIA verplicht is](https://www.autoriteitpersoonsgegevens.nl/documenten/lijst-verplichte-dpia). Daarop staan onder meer profilering, grootschalige controle van werknemers en grootschalige verwerking van communicatiegegevens. Staat je verwerking er niet op, dan kun je de negen criteria van de Europese privacytoezichthouders gebruiken. Volgens de [uitleg van de AP](https://autoriteitpersoonsgegevens.nl/themas/basis-avg/praktisch-avg/data-protection-impact-assessment-dpia) geldt als vuistregel dat een DPIA nodig is bij twee of meer criteria. Omdat het gebruik van nieuwe technologieën een van die criteria is, zal een agent die persoonsgegevens verwerkt vaak al snel in de buurt komen.

Let op: de Europese Commissie heeft met het Digital Omnibus-pakket ook wijzigingen van de AVG voorgesteld. Dat voorstel is volgens het [overzicht van het Europees Parlement](https://www.europarl.europa.eu/legislative-train/theme-a-new-plan-for-europe-s-sustainable-prosperity-and-competitiveness/file-digital-package) nog in behandeling (stand september 2026). Tot het is aangenomen, geldt de huidige tekst.

## Samenhang met de AI Act

De AVG gaat over persoonsgegevens, de AI Act over het AI-systeem zelf. Voor een agent kunnen beide tegelijk gelden. De [AI-verordening](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/nld) is gewijzigd door de [Digital Omnibus on AI](https://eur-lex.europa.eu/eli/reg/2026/1744/oj) (Verordening (EU) 2026/1744), gepubliceerd op 24 juli 2026 en in werking sinds 27 juli 2026. De punten die voor agents het meest relevant zijn:

- **Transparantie (art. 50).** Aanbieders moeten AI-systemen die rechtstreeks met mensen communiceren zo ontwerpen dat mensen weten dat ze met AI te maken hebben, tenzij dat al duidelijk is. Deze verplichting geldt vanaf 2 augustus 2026. De AP en de ACM riepen in een [gezamenlijke oproep](https://www.autoriteitpersoonsgegevens.nl/documenten/oproep-acm-ap-over-ai-chatbots) bovendien op om bij chatbots altijd een route naar een medewerker te bieden.
- **Hoog risico.** Agents die bijvoorbeeld sollicitaties filteren of kandidaten beoordelen, vallen onder bijlage III. Door de Digital Omnibus gelden de verplichtingen voor die systemen vanaf 2 december 2027 in plaats van 2 augustus 2026; voor hoog-risicosystemen onder bijlage I is dat 2 augustus 2028. Organisaties die zo'n systeem gebruiken, moeten dan onder meer menselijk toezicht beleggen bij mensen met de nodige bekwaamheid en autoriteit (art. 26).
- **AI-geletterdheid (art. 4).** Deze plicht geldt sinds 2 februari 2025. Na de wijziging moeten aanbieders en gebruiksverantwoordelijken maatregelen nemen om de AI-geletterdheid van hun medewerkers te ondersteunen, zonder dat een bepaald niveau gegarandeerd hoeft te worden.

In Nederland is het toezicht op de AI Act nog niet definitief geregeld: de Uitvoeringswet AI-verordening is een wetsvoorstel, dat het kabinet in april 2026 in consultatie bracht. Daarin is de AP voorgesteld als [toezichthouder](https://www.autoriteitpersoonsgegevens.nl/actueel/toezicht-op-ai-wordt-concreet-sleutelrol-voor-de-ap-en-de-rdi) op onder meer verboden AI, transparantieverplichtingen en een groot deel van de hoog-risicotoepassingen, naast haar bestaande rol als toezichthouder op de AVG. Een uitgebreidere uitleg van de verordening staat op de pagina over [de AI Act](/ai-beleid/ai-act).

## Checklist

Gebruik deze checklist per agent, voordat hij met echte persoonsgegevens werkt:

1. Het doel en de grondslag van de verwerking zijn vastgelegd.
2. De agent heeft alleen toegang tot de bronnen en velden die hij nodig heeft.
3. Er is een verwerkersovereenkomst met de leverancier, inclusief afspraken over subverwerkers en opslaglocatie.
4. Je weet of gegevens buiten de EU worden verwerkt en op welke basis.
5. Je hebt getoetst of een DPIA nodig is, en die uitkomst vastgelegd.
6. Elke stap van de agent wordt gelogd: welke bronnen, welke handelingen, welke goedkeuringen.
7. Neemt de agent besluiten over mensen, dan beslist of controleert een mens, en kunnen betrokkenen hun standpunt geven en het besluit aanvechten.
8. Klanten en medewerkers weten wanneer ze met een AI-systeem te maken hebben.
9. De verwerking staat in het register en de agent in je overzicht van AI-toepassingen.
10. Er is een eigenaar, een meldroute voor incidenten en iemand die de agent mag stilzetten.

Die laatste punten zijn geen privacyregels maar governance. Hoe je dat licht houdt, beschreef ik in [AI-governance zonder bureaucratie](/inzichten/ai-governance-zonder-bureaucratie). Voor het bredere beleid rond AI in je organisatie is er de pagina over [AI beleid](/ai-beleid), en voor toepassingen en implementatie het overzicht van [AI agents voor bedrijven](/ai-agents).

<aside class="scenario" aria-label="Voorbeeldscenario">
<p class="scenario-label">Voorbeeldscenario</p>
<p>Een zakelijke dienstverlener met 140 medewerkers wil een agent die de gedeelde klantinbox leest, de klant opzoekt in het CRM en een conceptantwoord klaarzet. Het gaat om zo'n 1.200 e-mails per maand. In het eerste ontwerp kan de agent de hele inbox en alle 38 velden in het CRM lezen.</p>
<p>De adviseur toetst het ontwerp vanuit klantzijde, samen met de functionaris gegevensbescherming. Twee van de negen criteria gelden: nieuwe technologie en grootschalige verwerking. Er komt dus een DPIA. Daaruit blijkt dat de agent voor zijn taak 9 van de 38 CRM-velden nodig heeft, en dat bijlagen buiten de scope vallen, omdat daar vaak loonstroken en kopieën van identiteitsbewijzen in zitten.</p>
<p>De bouwpartij die de organisatie zelf heeft gecontracteerd, past het ontwerp aan. De livegang schuift drie weken op. De agent verstuurt niets zelf: elk antwoord gaat langs een medewerker en elke stap wordt gelogd.</p>
<p class="scenario-note">Fictief voorbeeld, samengesteld uit situaties die veel voorkomen. Organisatie en cijfers zijn illustratief.</p>
</aside>

*Dit artikel is een praktische toelichting en geen juridisch advies. Laat de toepassing op jouw situatie beoordelen door je functionaris gegevensbescherming of een privacyjurist.* Wil je sparren over hoe je privacy en governance meeneemt in een agenttraject? [Plan een adviesgesprek](/contact).
