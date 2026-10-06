export default {
  slug: 'ai-governance-zonder-bureaucratie',
  category: 'Governance',
  tone: 'aqua',
  icon: '▣',
  featured: false,
  title: 'AI-governance zonder bureaucratie: wat je minimaal nodig hebt',
  titleLine1: 'AI-governance',
  titleLine2: 'zonder bureaucratie',
  excerpt: 'Governance die niemand gebruikt, beschermt niemand. Vier mechanismen die het verschil maken, en wat je gerust kunt overslaan.',
  metaTitle: 'AI-governance zonder bureaucratie: wat je echt nodig hebt',
  lede: 'Europese regelgeving dwingt organisaties om AI aantoonbaar te beheersen. Dat kan uitmonden in een commissie die alles vertraagt, of in vier lichte mechanismen die het werk beter maken.',
  readingTime: '5 min leestijd',
  date: '2026-03-19',
  dateLabel: '19 maart 2026',
  summary: [
    'Classificeer je toepassingen naar risico, niet naar techniek.',
    'Eén register, één poort, één periodieke toets, één escalatiepad.',
    'Zware governance alleen waar het risico dat rechtvaardigt.',
  ],
  summaryClose: 'Proportionaliteit is het hele punt van goede governance.',
  takeaways: [
    ['Register boven commissie', 'Weten wat er draait is negentig procent van het beheersingsvraagstuk.'],
    ['Één poort, geen keten', 'Als er drie goedkeuringsmomenten zijn, gaan mensen eromheen.'],
    ['Leg ook het "nee" vast', 'Een vastgelegde afwijzing voorkomt dat dezelfde discussie elk kwartaal terugkomt.'],
  ],
  remember: 'Governance die mensen omzeilen is erger dan geen governance, want je denkt dat je in controle bent.',
  related: ['het-datafundament-onder-ai', 'ai-adoptie-begint-bij-het-werk'],
  body: `
<h2>Het echte risico van AI-governance</h2>
<p>Het risico is niet dat je te weinig regelt. Het risico is dat je zoveel regelt dat mensen eromheen gaan werken, en dat je vervolgens denkt dat je in controle bent terwijl er een schaduwpraktijk ontstaat met tools die niemand kent.</p>
<p>Dat gebeurt sneller dan bij klassieke IT, omdat AI-tools laagdrempelig zijn. Een medewerker die een goedkeuringstraject van zes weken tegenkomt, kan het alternatief in twee minuten zelf regelen met een creditcard. Goede governance houdt daar rekening mee.</p>

<h2>Begin bij risicoclassificatie, niet bij techniek</h2>
<p>De fout die het vaakst wordt gemaakt: één regime voor alles wat "AI" heet. Dat betekent dat een tool die vergaderverslagen maakt door hetzelfde traject moet als een model dat kredietbeslissingen beïnvloedt. Het gevolg is voorspelbaar: het eerste wordt onnodig vertraagd en het tweede krijgt te weinig aandacht, omdat de aandacht is opgegaan aan de lawine van lage-risicoverzoeken.</p>
<p>Een werkbare indeling in drie niveaus:</p>
<ul>
  <li><b>Laag:</b> ondersteunt een individuele medewerker, de uitkomst wordt direct door die persoon beoordeeld, geen effect op externen. Voorbeelden: samenvatten, conceptteksten, zoeken in interne documenten. Regime: registreren en algemene gebruiksafspraken.</li>
  <li><b>Midden:</b> beïnvloedt een werkproces of een beslissing over een klant, met menselijke tussenkomst. Voorbeelden: dossiervoorbereiding, prioritering van aanvragen, voorraadadvies. Regime: registratie, expliciete eigenaar, testset, periodieke evaluatie.</li>
  <li><b>Hoog:</b> raakt rechten of belangen van mensen, of werkt door zonder betekenisvolle menselijke tussenkomst. Voorbeelden: kredietbeoordeling, selectie van sollicitanten, fraudesignalering. Regime: volledige documentatie, formele beoordeling vooraf, aantoonbaar toezicht, logging.</li>
</ul>
<p>De Europese AI-verordening hanteert een eigen classificatie met specifieke verplichtingen per categorie, en verboden praktijken aan de bovenkant. Laat je juridische afdeling of een gespecialiseerde adviseur vaststellen waar jouw toepassingen exact onder vallen. De indeling hierboven is een werkmodel om intern het gesprek te structureren, geen juridisch oordeel.</p>

<h2>De vier mechanismen die je minimaal nodig hebt</h2>

<h3>1. Eén register</h3>
<p>Een lijst van alle AI-toepassingen die in de organisatie draaien of worden ontwikkeld, met per toepassing: eigenaar, doel, risiconiveau, welke data erin gaat, welke leverancier, en wanneer hij voor het laatst is beoordeeld.</p>
<p>Dit klinkt saai en het is het belangrijkste dat je hebt. Zonder register kun je geen enkele andere vraag beantwoorden. Met een register kun je bij elk incident, elke auditvraag en elke leverancierswijziging binnen een uur zien wie je moet spreken.</p>
<p>Houd het licht: een spreadsheet die klopt, verslaat een GRC-module die half gevuld is. Wat telt, is dat het bijwerken ervan een voorwaarde is om verder te mogen, niet een verzoek achteraf.</p>

<h3>2. Eén poort</h3>
<p>Eén moment waarop een nieuwe toepassing wordt beoordeeld voordat hij in gebruik gaat. Niet drie, niet een keten van afdelingen die elkaar afwachten. Eén overleg, met een vaste bezetting (business, data/IT, risk) en een vaste doorlooptijd.</p>
<p>Voor laag-risicotoepassingen is de poort een formaliteit van tien minuten. Voor hoog-risicotoepassingen is het een serieuze beoordeling. Het verschil zit in de voorbereiding, niet in het aantal instanties.</p>
<p>Spreek een maximale doorlooptijd af, bijvoorbeeld twee weken, en houd je daaraan. De geloofwaardigheid van je governance hangt hier meer van af dan van de inhoud van je toetsingskader.</p>

<h3>3. Eén periodieke toets</h3>
<p>AI-toepassingen verslechteren stilletjes. De wereld verandert, de data verschuift, de leverancier wijzigt het onderliggende model. Zonder periodieke toets merk je dat pas als een gebruiker klaagt, en dan draait het al maanden verkeerd.</p>
<p>Per risiconiveau een ander ritme: laag risico jaarlijks een check of het nog gebruikt wordt, midden halfjaarlijks een evaluatie tegen de testset, hoog risico per kwartaal met vastgelegde uitkomst.</p>
<p>Belangrijk: de toets hoort een vaste testset te gebruiken die je bij de start hebt gemaakt. Zonder die set toets je een gevoel, niet een prestatie.</p>

<h3>4. Eén escalatiepad</h3>
<p>Wat doet een medewerker die ziet dat een AI-toepassing iets geks doet? Als het antwoord "dat weet ik niet" is, meldt niemand iets en hoor je het pas via een klant.</p>
<p>Maak het concreet: één mailadres of formulier, een toezegging dat er binnen twee werkdagen op wordt gereageerd, en de bevoegdheid bij één persoon om een toepassing tijdelijk stil te zetten zonder dat daar een commissie voor bijeen hoeft te komen. Die laatste bevoegdheid maakt het verschil en wordt vrijwel altijd vergeten.</p>

<h2>Wat je kunt overslaan</h2>
<p>Drie dingen die vaak worden opgetuigd en zelden iets opleveren:</p>
<ul>
  <li><b>Een aparte AI-ethiekcommissie naast je bestaande risicostructuur.</b> Meestal beter om AI als onderwerp toe te voegen aan het gremium dat er al is: dat heeft mandaat en vergadert al.</li>
  <li><b>Een uitgebreid AI-beleidsdocument voordat er toepassingen zijn.</b> Beleid geschreven zonder praktijkervaring is abstract en wordt binnen een jaar herschreven. Begin met vijf gebruiksafspraken op één pagina.</li>
  <li><b>Toolkeuze als governancevraag.</b> Welk platform je gebruikt is een inkoopvraag. Welke beslissingen je eraan overlaat, is de governancevraag.</li>
</ul>

<h2>Leg ook vast wat je niet doet</h2>
<p>Dit is het onderdeel dat het meeste rendement geeft en het minste werk kost. Als je besluit een bepaalde toepassing níét te bouwen (bijvoorbeeld AI-ondersteuning bij personeelsbeoordelingen), leg dan vast waarom, wie dat besloot en wanneer het opnieuw bekeken wordt.</p>
<p>Zonder die vastlegging komt hetzelfde voorstel elk kwartaal terug via een andere route, en voer je elke keer dezelfde discussie met andere mensen. Met vastlegging is het gesprek in twee minuten klaar: hier is het besluit, hier is de afweging, en in oktober kijken we er opnieuw naar.</p>
`,
};
