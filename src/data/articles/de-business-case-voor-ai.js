export default {
  slug: 'de-business-case-voor-ai',
  category: 'Strategie',
  tone: 'yellow',
  icon: '€',
  featured: false,
  title: 'De business case voor AI: hoe je hem eerlijk berekent',
  titleLine1: 'De business case voor AI,',
  titleLine2: 'eerlijk berekend',
  excerpt: 'Tijdbesparing is geen besparing tot iemand die tijd anders besteedt. Een rekenmodel dat de toets van de CFO doorstaat.',
  metaDescription: 'Tijdbesparing is geen besparing tot iemand die tijd anders besteedt. Een rekenmodel voor de AI business case dat de toets van de CFO doorstaat.',
  lede: 'De meeste AI-businesscases sneuvelen niet bij de board, maar een jaar later bij de realisatiecheck. Dit is hoe je er een maakt die dat moment overleeft.',
  readingTime: '5 min leestijd',
  date: '2026-01-29',
  dateLabel: '29 januari 2026',
  summary: [
    'Bespaarde uren tellen pas als besparing als de kosten echt dalen.',
    'Reken de volledige kostenkant mee: bouw, beheer, verbruik, verandering.',
    'Maak aannames zichtbaar en toetsbaar, met een bandbreedte.',
  ],
  summaryClose: 'Een eerlijke businesscase is kleiner en houdbaarder.',
  takeaways: [
    ['Uren zijn geen euro’s', 'Tenzij je de uren omzet in omzet of in minder inhuur, is het geen financiële besparing.'],
    ['Verbruikskosten schalen mee', 'Bij AI stijgen de variabele kosten met het gebruik. Reken door op tien keer volume.'],
    ['Bandbreedte boven precisie', 'Een onderbouwde range is geloofwaardiger dan een exact bedrag met drie decimalen.'],
  ],
  remember: 'Een businesscase is geen verkoopdocument, het is een afspraak over wat je over een jaar gaat meten.',
  related: ['van-ai-strategie-naar-waarde', 'welke-ai-use-cases-leveren-resultaat'],
  body: `
<h2>Waar AI-businesscases sneuvelen</h2>
<p>Niet bij de goedkeuring, want daar doen ze het meestal prima. Ze sneuvelen een jaar later, bij de vraag of het beloofde resultaat is gehaald. Op dat moment blijkt de belofte niet meetbaar, de kostenkant incompleet, en de besparing niet terug te vinden in enige begroting.</p>
<p>Dat is jammer, want het beschadigt het vertrouwen in de volgende businesscase, ook als die beter is.</p>

<h2>De batenkant: drie soorten waarde, drie manieren van tellen</h2>

<h3>1. Kostenreductie (hard, mits je het afmaakt)</h3>
<p>De klassieke: we besparen uren, dus we besparen geld. Dat klopt alleen als die uren daadwerkelijk uit de kostenbasis verdwijnen. Drie manieren waarop dat gebeurt:</p>
<ul>
  <li>Minder externe inhuur of uitzendkrachten: direct zichtbaar in de cijfers, dus hard.</li>
  <li>Groei opvangen zonder extra aanname: reëel, maar alleen als de groei er daadwerkelijk is. Leg vast wat het referentiescenario was.</li>
  <li>Minder eigen fte: hard, maar vraagt een besluit dat verder gaat dan een AI-project. Neem dit alleen op als de directie dat besluit ook werkelijk wil nemen.</li>
</ul>
<p>Wat níét telt: "onze mensen hebben meer tijd voor waardevol werk". Dat is echte waarde, maar geen financiële besparing. Zet het in de businesscase onder kwalitatieve baten, niet in de rekensom. Anders wordt het je over een jaar aangerekend.</p>

<h3>2. Omzeteffect (zachter, maar vaak groter)</h3>
<p>Snellere offertes, hogere conversie, minder klantverloop, meer capaciteit voor declarabel werk. Dit is vaak waar de grootste waarde zit en tegelijk het lastigst toe te rekenen.</p>
<p>Werkwijze die standhoudt: kies één meetbare tussenstap in plaats van de eindomzet. Bijvoorbeeld niet "meer omzet" maar "doorlooptijd van offerte-aanvraag tot verzending van 4 dagen naar 1 dag". Toon daarnaast historisch aan wat het verband is tussen die doorlooptijd en de conversie. Dan is de redenering navolgbaar, ook voor iemand die sceptisch is.</p>

<h3>3. Risicoreductie (moeilijk te kwantificeren, wel te onderbouwen)</h3>
<p>Minder fouten, betere naleving, minder herstelwerk. Reken hier met de kosten van incidenten uit het verleden: hoeveel dossiers moesten vorig jaar opnieuw, wat kostte dat aan uren, boetes of claims? Dat is een verdedigbare basis. Een percentage uit een onderzoeksrapport is dat niet.</p>

<h2>De kostenkant: waar het meestal misgaat</h2>
<p>De batenkant krijgt de aandacht, de kostenkant wordt onderschat. Vijf posten die er vrijwel altijd te laag in staan of helemaal ontbreken.</p>

<h3>Verbruikskosten die meeschalen</h3>
<p>Dit is fundamenteel anders dan bij klassieke software. Waar een licentie een vast bedrag per gebruiker is, betaal je bij AI vaak per verwerkt document, per gesprek of per verwerkte hoeveelheid tekst. In de pilot met vijftig gebruikers is dat verwaarloosbaar. Bij vijfhonderd gebruikers en tien keer het volume is het een serieuze post.</p>
<p><b>Doe dit:</b> meet in de pilot de kosten per transactie en vermenigvuldig met het verwachte volume bij volledige uitrol. Reken ook een scenario door met het dubbele volume, want succesvolle toepassingen worden intensiever gebruikt dan gepland.</p>

<h3>Beheer en monitoring</h3>
<p>Reken op structurele uren voor kwaliteitsmonitoring, het actueel houden van testsets, modelupdates en incidentafhandeling. Voor een middelgrote toepassing is een halve tot een hele dag per maand realistisch, meer bij hoog-risicotoepassingen met formele toetsvereisten.</p>

<h3>Integratie en koppelingen</h3>
<p>Meestal de grootste verrassing. De toepassing zelf is klaar in weken; de koppeling met het bronsysteem, het rechtenmodel en de logging duurt maanden. Vraag bij elke businesscase expliciet: welke systemen moeten hiervoor open, en wie beheert die?</p>

<h3>Verandering en opleiding</h3>
<p>Instructie, begeleiding, tijdelijk dubbel werk tijdens de overgang, en de productiviteitsdip in de eerste weken. Die dip is echt en duurt doorgaans vier tot acht weken. Neem hem op: het maakt je case geloofwaardiger, niet zwakker.</p>

<h3>Governance en compliance</h3>
<p>Voor midden- en hoog-risicotoepassingen: documentatie, beoordeling, periodieke toetsing, eventueel externe validatie. Bij gereguleerde processen is dit geen marginale post.</p>

<h2>Werk met bandbreedtes, niet met puntschattingen</h2>
<p>Een case die zegt "€412.000 besparing in jaar twee" is minder geloofwaardig dan een case die zegt "€250.000 tot €500.000, afhankelijk van of we adoptie boven de 60% krijgen". De tweede laat zien dat je weet waar de onzekerheid zit.</p>
<p>Maak daarbij expliciet welke aannames de uitkomst het sterkst bepalen. In de meeste AI-businesscases zijn dat er drie: het adoptiepercentage, het volume, en of de tijdwinst omgezet wordt in iets dat geld oplevert. Zet die drie bovenaan, met de waarde die je hebt aangenomen en de bron ervan.</p>

<h2>Spreek af wat je over een jaar meet</h2>
<p>Het onderdeel dat het vaakst ontbreekt en het meeste verschil maakt. Leg bij goedkeuring vast:</p>
<ul>
  <li>Welke drie cijfers je over twaalf maanden rapporteert, en waar ze vandaan komen.</li>
  <li>Wat de nulmeting is, gemeten vóór de start, niet gereconstrueerd achteraf.</li>
  <li>Bij welke uitkomst je bijstuurt, en bij welke uitkomst je stopt.</li>
</ul>
<p>Dat laatste punt maakt een businesscase tot een afspraak in plaats van een pleidooi. Het verlaagt bovendien de drempel voor goedkeuring: een CFO zegt makkelijker ja tegen een voorstel met een expliciet afbreekpunt dan tegen een voorstel dat alleen maar kan slagen.</p>

<h2>Een laatste toets</h2>
<p>Laat iemand die niets met het project te maken heeft de case lezen, met één opdracht: zoek de aanname waar de hele uitkomst op rust. Als die persoon hem binnen vijf minuten vindt, is je case transparant. Als hij hem niet kan vinden, zit hij te diep verstopt. En dat komt over een jaar alsnog naar boven, op een ongelegener moment.</p>
`,
};
