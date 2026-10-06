export default {
  slug: 'build-buy-of-partner',
  category: 'Organisatie',
  tone: 'aqua',
  icon: '⇄',
  featured: false,
  title: 'Build, buy of partner: wat past bij jouw situatie?',
  titleLine1: 'Build, buy of partner:',
  titleLine2: 'wat past bij jouw situatie?',
  excerpt: 'De vraag is zelden "kunnen we dit zelf bouwen?" maar "willen we dit over drie jaar nog steeds onderhouden?". Een beslisraamwerk in vier vragen.',
  lede: 'Zelf bouwen, kopen of samen met een partner? De keuze bepaalt je kostenstructuur, je wendbaarheid en je afhankelijkheid voor jaren. Zo maak je hem onderbouwd.',
  readingTime: '4 min leestijd',
  date: '2026-05-28',
  dateLabel: '28 mei 2026',
  summary: [
    'Bouw alleen wat je onderscheidt in de markt.',
    'Koop alles wat een commodity is, ook als je het zelf kunt.',
    'Partner waar je wel de uitkomst wilt sturen maar niet de techniek wilt bezitten.',
  ],
  summaryClose: 'De onderhoudsvraag is belangrijker dan de bouwvraag.',
  takeaways: [
    ['Onderscheidend of niet?', 'Als je concurrent het morgen kan kopen, bouw het dan niet zelf.'],
    ['Reken met de vijfde jaar', 'Bouwen is goedkoop in jaar één en duur vanaf jaar drie.'],
    ['Exit hoort in het ontwerp', 'Bij elke keuze: hoe kom je er weer vanaf, en wat kost dat?'],
  ],
  remember: 'Je bouwt geen software, je adopteert een onderhoudsverplichting.',
  related: ['ai-vendorselectie-in-acht-stappen', 'het-datafundament-onder-ai'],
  body: `
<h2>Waarom deze keuze zwaarder weegt bij AI</h2>
<p>Bij klassieke software was build-or-buy vooral een kostenvraag. Bij AI komen er drie factoren bij die de afweging structureel anders maken.</p>
<p>Ten eerste verandert de onderliggende technologie sneller dan je afschrijvingstermijn. Een model dat je vandaag zelf fijnafstemt, kan over achttien maanden worden ingehaald door een generiek model dat het out-of-the-box beter doet en goedkoper is. Ten tweede is het onderhoud fundamenteel anders: modellen verslechteren stilletjes als de werkelijkheid verschuift, en dat vraagt permanente monitoring in plaats van incidenteel patchen. Ten derde zit de waarde vaak niet in het model maar in je data en je werkproces, en die twee koop je sowieso niet.</p>

<h2>De vier vragen die de keuze bepalen</h2>

<h3>Vraag 1: Is dit onderscheidend, of is het een commodity?</h3>
<p>De enige goede reden om zelf te bouwen is dat het je onderscheidt in de markt. Niet dat het leuk is, niet dat je team het kan, en niet dat het goedkoper lijkt.</p>
<p>Een harde toets: kan je belangrijkste concurrent hetzelfde resultaat morgen kopen bij een leverancier? Als het antwoord ja is, is het een commodity, hoe technisch interessant het ook is. Documentextractie, spraakherkenning, samenvatten, standaard classificatie: allemaal commodity. De manier waarop jij die bouwstenen combineert met je eigen data en processen: daar kan wél onderscheid zitten.</p>
<p>In de praktijk is hooguit tien tot twintig procent van wat organisaties willen bouwen werkelijk onderscheidend. De rest wordt gebouwd omdat het kan.</p>

<h3>Vraag 2: Wat kost het in jaar vijf?</h3>
<p>Bouwen is goedkoop in jaar één. Je hebt een team, het bouwt iets, het werkt. De kosten die daarna komen worden zelden meegerekend:</p>
<ul>
  <li>Modelmonitoring en hertraining als de data verschuift</li>
  <li>Bijhouden van de onderliggende modellen en API-versies</li>
  <li>Beveiliging, logging en auditspoor</li>
  <li>Documentatie en kennisoverdracht bij verloop</li>
  <li>De opportuniteitskosten van engineers die dit onderhouden in plaats van iets nieuws bouwen</li>
</ul>
<p>Een vuistregel uit de praktijk: het jaarlijkse onderhoud van een zelfgebouwde AI-toepassing ligt tussen de 20% en 40% van de oorspronkelijke bouwkosten. Reken dat vijf jaar door en vergelijk dat met een licentie. Vaak keert de conclusie om.</p>

<h3>Vraag 3: Wie moet de uitkomst kunnen sturen?</h3>
<p>Dit is de vraag die partneren rechtvaardigt. Er zijn toepassingen waarbij je geen behoefte hebt aan het bezitten van de techniek, maar wél aan invloed op hoe de uitkomst tot stand komt. Denk aan risicomodellen, prijsstelling, of iets wat richting klanten communiceert namens jouw merk.</p>
<p>Een standaardproduct geeft je die invloed zelden. Zelf bouwen geeft je volledige invloed maar ook de volledige last. Een partnerconstructie (waarbij een leverancier bouwt en beheert, maar jij de regels, drempels en evaluatiecriteria bepaalt) zit daar tussenin. Het werkt als je het contractueel goed regelt en het gaat mis als je het op vertrouwen doet.</p>

<h3>Vraag 4: Hoe kom je er weer vanaf?</h3>
<p>De exitvraag hoort in het ontwerp, niet in de verlengingsdiscussie over drie jaar. Bij elk van de drie opties ziet exit er anders uit:</p>
<ul>
  <li><b>Build:</b> exit betekent iemand vinden die jouw codebase begrijpt. Het risico zit in sleutelpersoonafhankelijkheid en ontbrekende documentatie.</li>
  <li><b>Buy:</b> exit betekent je data en je geconfigureerde logica eruit krijgen. Leg vóór ondertekening vast in welk formaat en binnen welke termijn.</li>
  <li><b>Partner:</b> exit betekent overdracht van bouw én kennis. Neem een overdrachtsclausule op met een concreet dossier, niet met een intentie.</li>
</ul>

<h2>De hybride vorm die het vaakst werkt</h2>
<p>In de meeste trajecten die ik begeleid, is het antwoord geen van de drie in zuivere vorm. De opzet die het vaakst standhoudt:</p>
<ul>
  <li><b>Koop de bouwstenen.</b> Modellen, infrastructuur, standaardcomponenten. Dit is waar leveranciers schaalvoordeel hebben dat jij nooit haalt.</li>
  <li><b>Bouw de laag waar jouw kennis in zit.</b> De regels, de prompts, de evaluatiesets, de koppeling met jouw processen. Dit is klein in omvang en groot in waarde.</li>
  <li><b>Partner voor de implementatie.</b> Maar houd het eigenaarschap van de evaluatiecriteria bij jezelf.</li>
</ul>
<p>Concreet: een organisatie die documentverwerking automatiseert, koopt het taalmodel en het platform, bouwt zelf de veldextractieregels en de testset met tweehonderd beoordeelde dossiers, en laat de integratie doen door een partner. De testset is het waardevolste onderdeel en kost het minste geld.</p>

<h2>Drie situaties waarin de keuze duidelijk is</h2>
<p><b>Bouw</b> als het direct raakt aan waarom klanten voor jou kiezen, je de data exclusief hebt, en je een team hebt dat dit over vijf jaar nog steeds kan onderhouden.</p>
<p><b>Koop</b> als er drie of meer serieuze leveranciers zijn, de functionaliteit stabiel is, en je voornaamste zorg time-to-value is.</p>
<p><b>Partner</b> als de techniek volwassen is maar de toepassing gevoelig, en je wel wilt sturen op de uitkomst maar niet op de codebase.</p>
<p>Twijfel je nog? Dan is kopen bijna altijd de goedkoopste manier om te leren wat je werkelijk nodig hebt. Je kunt later alsnog bouwen, met een scherpere specificatie en zonder dat je een jaar hebt verloren.</p>
`,
};
