export default {
  slug: 'mcp-model-context-protocol',
  category: 'Tools & data',
  tone: 'aqua',
  icon: '◧',
  featured: false,
  title: 'MCP uitgelegd: wat het Model Context Protocol betekent voor je AI-plannen',
  titleLine1: 'MCP uitgelegd:',
  titleLine2: 'wat betekent het voor je AI-plannen?',
  excerpt: 'MCP koppelt AI-modellen via een open standaard aan je systemen en data. Wat het is, hoe het werkt, wat het oplevert en waar de risico\'s zitten.',
  metaTitle: 'Wat is MCP (Model Context Protocol)? Uitleg voor bedrijven',
  metaDescription: 'MCP koppelt AI-modellen via een open standaard aan je systemen en data. Wat het is, hoe het werkt, wat het oplevert en waar de risico\'s zitten.',
  lede: 'MCP is de USB-poort voor AI: het maakt koppelen tussen een model en je systemen goedkoper en standaard, in plaats van voor elke combinatie opnieuw maatwerk. Maar elke koppeling is ook een toegangsrecht, en dat maakt de keuze vooral een governancevraag, niet alleen een technische.',
  readingTime: '7 min leestijd',
  date: '2027-01-12',
  dateLabel: '12 januari 2027',
  summary: [
    'MCP (Model Context Protocol) is een open standaard waarmee een AI-model op een uniforme manier toegang krijgt tot data, tools en systemen, in plaats van voor elke koppeling eigen maatwerk te bouwen.',
    'Inmiddels ondersteunen de grote aanbieders (Anthropic, OpenAI, Microsoft, Google) MCP, en valt het beheer onder een onafhankelijke stichting binnen de Linux Foundation.',
    'MCP maakt koppelen goedkoper, maar elke MCP-server is ook een toegangsrecht: de securityvraag uit AI-agents speelt hier net zo hard.',
  ],
  summaryClose: 'MCP is een technische standaard met een niet-technische consequentie: elke koppeling die je toevoegt, is een bevoegdheid die je moet beheren.',
  takeaways: [
    ['MCP standaardiseert koppelen, niet de keuze om te koppelen', 'De standaard maakt een koppeling goedkoper om te bouwen; of je een koppeling wílt, blijft een eigen afweging per databron of systeem.'],
    ['Het is inmiddels breed gedragen', 'Niet langer een Anthropic-specifieke standaard: OpenAI, Microsoft en Google ondersteunen MCP, en het beheer ligt bij een onafhankelijke stichting.'],
    ['De winst zit in minder kopiëren en wachten', 'Direct werken met actuele data in plaats van exports en handmatig overtypen tussen tools is waar de tijdwinst in de praktijk vandaan komt.'],
  ],
  remember: 'Een MCP-koppeling toevoegen is net zo goed een toegangsbeslissing als een technische keuze; behandel het ook zo.',
  related: ['ai-agent-of-chatbot', 'het-datafundament-onder-ai'],
  body: `
<h2>Wat is MCP?</h2>
<p>MCP, het Model Context Protocol, is een open standaard waarmee een AI-toepassing op een uniforme manier verbinding maakt met databronnen, tools en workflows buiten het model zelf. Zonder zo'n standaard bouwt elke leverancier zijn eigen koppeling met elk systeem: een eigen integratie met je CRM, een andere met je boekhoudpakket, weer een andere met een zoekwoordentool. MCP vervangt die opeenstapeling van maatwerk door één afspraak over hoe een model met een systeem praat, ongeacht welk model of welk systeem het is.</p>
<p>Anthropic introduceerde MCP eind 2024 als open standaard. Vrij snel daarna volgden de andere grote aanbieders: Microsoft bouwde ondersteuning in Copilot Studio en later breder in Windows, GitHub en Azure AI Foundry, OpenAI nam MCP op in zijn Agents SDK en de ChatGPT-omgeving, en Google voegde ondersteuning toe aan Gemini. Eind 2025 droeg Anthropic het beheer van de standaard over aan een onafhankelijke stichting binnen de Linux Foundation, met OpenAI en Block als mede-oprichters en onder meer Microsoft, Google, AWS en GitHub als ondersteunende partijen. MCP is daarmee geen eigen standaard van één leverancier meer, wat het risico verkleint dat je vastzit aan één partij als je erop bouwt.</p>

<h2>Hoe het werkt: host, client en server</h2>
<p>MCP werkt met drie rollen. De <b>host</b> is de AI-toepassing die je gebruikt, bijvoorbeeld Claude, ChatGPT of een ontwikkelomgeving. Die host maakt voor elke koppeling een <b>client</b> aan: een onderdeel dat de verbinding met één specifieke <b>server</b> onderhoudt. De server is het programma dat daadwerkelijk toegang geeft tot een databron of tool, zoals een bestandensysteem, een database of een extern platform.</p>
<p>Een server kan drie dingen aanbieden: <b>tools</b> (acties die het model kan uitvoeren, zoals een zoekopdracht of een berekening), <b>resources</b> (data die het model als context kan gebruiken, zoals een documentinhoud) en <b>prompts</b> (herbruikbare sjablonen voor een taak). Een MCP-server kan lokaal draaien, op dezelfde machine als de host, of extern, als een dienst die via internet bereikbaar is en door meerdere clients tegelijk gebruikt kan worden. Dat onderscheid is vooral relevant voor wie de koppeling beheert en wie er toegang tot heeft, niet voor wat een gebruiker ervan merkt.</p>

<h2>Wat het bedrijven oplevert</h2>
<p>Het concrete voordeel is minder kopiëren, plakken en wachten op een export, en meer werken op actuele data binnen het gesprek met een model zelf. Een paar voorbeelden uit mijn eigen praktijk:</p>
<ul>
  <li><b>Zoekwoorddata en SERP-checks direct in het gesprek.</b> Via een MCP-koppeling met Ahrefs haal ik zoekvolumes en concurrentiedata rechtstreeks binnen in het gesprek met het model, zonder tussenstap van exporteren en weer inlezen. De contentplanning waar dit artikel uit voortkomt, is op die manier opgebouwd.</li>
  <li><b>Een Core Web Vitals-audit over meerdere landensites.</b> Met een MCP-koppeling naar PageSpeed Insights en CrUX-data in Claude Code heb ik een audit gedaan over de verschillende landenversies van een Shopify-webshop. INP bleek de enige falende veldmetric, en omdat twee markten dezelfde pagina-opbouw gebruikten, werkte één fix voor allebei.</li>
  <li><b>In voorbereiding: een eigen SEO-dashboard koppelen via API en MCP</b> aan een eigen linkbuildingplatform, zodat analyses straks op actuele data draaien in plaats van op een export van de week ervoor.</li>
</ul>
<p>De gemeenschappelijke noemer is niet dat het model iets nieuws kan dat het eerder niet kon, maar dat de afstand tussen vraag en actuele data verdwijnt. Dat is vooral tijdwinst op de stap vóór het eigenlijke werk: minder overtypen, minder verouderde cijfers, meer tijd voor de analyse zelf.</p>

<h2>Voorbeelden van MCP-servers</h2>
<p>Het aanbod groeit snel en valt grofweg in een paar categorieën: productiviteit en samenwerking (agenda's, documenten, projectbeheer), data en analyse (zoekwoord- en SEO-tools, webanalytics, databases), ontwikkelomgevingen (versiebeheer, foutregistratie, deployment) en bedrijfssystemen (CRM, boekhouding, klantenservice). Voor het bepalen of een AI-agent voor jouw proces zelfstandig stappen moet zetten op basis van zo'n koppeling, of dat een eenvoudigere vorm volstaat, geldt dezelfde afweging als in <a href="/nl/inzichten/ai-agent-of-chatbot">AI agent of chatbot</a>: het proces bepaalt de vorm, niet de beschikbaarheid van de koppeling.</p>

<h2>Security en governance</h2>
<p>Elke MCP-server die je toevoegt, is in de praktijk een nieuw toegangsrecht: het model kan via die server bij data of acties komen die het voorheen niet bereikte. Dat is precies het risico dat ik uitgebreider behandel in <a href="/nl/inzichten/ai-security-prompt-injection">AI-security: prompt injection en andere risico's</a>: een model dat tekst uit een externe bron leest, zoals de uitkomst van een MCP-tool, kan daarin ook een verstopte instructie tegenkomen. Hoe meer servers en hoe meer schrijfrechten, hoe groter de mogelijke impact van zo'n manipulatie.</p>
<p>Praktisch betekent dit: geef een MCP-server niet meer rechten dan de taak vereist, laat schrijfacties waar mogelijk eerst voorstellen in plaats van direct uitvoeren, en behandel het toevoegen van een nieuwe koppeling als een bevoegdheidsbeslissing, niet als een technisch detail dat je aan een ontwikkelaar overlaat. De officiële MCP-documentatie op modelcontextprotocol.io besteedt hier zelf ook aandacht aan; check die bij een nieuwe koppeling op de laatste aanbevelingen, de standaard wordt actief doorontwikkeld.</p>

<h2>MCP en AI-agents</h2>
<p>MCP en AI-agents worden vaak in één adem genoemd, maar het zijn verschillende dingen. MCP regelt de koppeling tussen een model en een systeem; een agent is de manier waarop een model zelfstandig stappen zet, eventueel over meerdere van die koppelingen heen, om een doel te bereiken. Je kunt een chatbot met een beperkte, vaste set MCP-koppelingen gebruiken zonder dat er sprake is van een agent, en je kunt een agent bouwen die maar één koppeling gebruikt. MCP maakt het wel aantrekkelijker om agents te bouwen, omdat het de koppeling met externe systemen standaardiseert in plaats van telkens opnieuw te bouwen, en dat is precies waarom de securityvraag hierboven meetelt: meer koppelingen, makkelijker te maken, betekent ook makkelijker een agent met meer bevoegdheden dan nodig. Een breder overzicht van wat een AI-agent is en welke vormen daarbinnen bestaan, staat op <a href="/nl/ai-agents">AI-agents</a>.</p>

<h2>Moet je er nu iets mee?</h2>
<p>Niet als doel op zich. MCP is een manier om een koppeling te bouwen, geen toepassing die zelfstandig waarde oplevert. De vraag die wel relevant is: als je nu overweegt om een model te koppelen aan een systeem, kennisbron of werkproces, bouw of koop dat dan via een MCP-koppeling in plaats van maatwerk, zodat je niet vastloopt in een eigen integratie die bij de volgende modelwissel opnieuw gebouwd moet worden. Twijfel je waar in je organisatie zo'n koppeling het meeste oplevert, en hoe je de bijbehorende toegangsrechten inricht, dan is dat een vraag die zich prima leent voor een goed gesprek voordat er iets gebouwd wordt. Een <a href="/nl/ai-agents/laten-maken">AI-agent laten maken</a> met de juiste koppelingen begint met diezelfde afweging.</p>
<p><a href="/nl/contact">Plan een gesprek</a> als je wilt doordenken waar MCP voor jouw organisatie verschil maakt, en waar niet.</p>
`,
  faq: [
    {
      q: 'Wat is MCP in gewone taal?',
      a: 'MCP (Model Context Protocol) is een open standaard waarmee een AI-model op een uniforme manier toegang krijgt tot data en systemen buiten het model zelf, zoals een database, een documentenbibliotheek of een extern platform. Het voorkomt dat voor elke combinatie van model en systeem apart maatwerk nodig is.',
    },
    {
      q: 'Wie heeft MCP ontwikkeld en wie ondersteunt het nu?',
      a: 'Anthropic introduceerde MCP eind 2024 als open standaard. Microsoft, OpenAI en Google hebben er inmiddels ondersteuning voor gebouwd, en het beheer van de standaard ligt sinds eind 2025 bij een onafhankelijke stichting binnen de Linux Foundation, niet langer bij Anthropic alleen.',
    },
    {
      q: 'Is een MCP-server hetzelfde als een AI-agent?',
      a: 'Nee. Een MCP-server regelt de koppeling tussen een model en een systeem of databron. Een AI-agent is de manier waarop een model zelfstandig stappen zet om een doel te bereiken, eventueel via een of meerdere van die koppelingen. Je kunt de één zonder de ander gebruiken.',
    },
    {
      q: 'Wat zijn de belangrijkste risico\'s van MCP-koppelingen?',
      a: 'Elke MCP-server is in de praktijk een toegangsrecht: het model krijgt toegang tot data of acties die het voorheen niet bereikte. Dat vergroot ook het risico van prompt injection, waarbij een verstopte instructie in ingelezen content tot een ongewenste actie leidt. Beperk daarom per koppeling wat strikt nodig is, en laat risicovolle acties waar mogelijk eerst voorstellen in plaats van direct uitvoeren.',
    },
    {
      q: 'Moet elk bedrijf nu met MCP aan de slag?',
      a: 'Niet als doel op zich. MCP is relevant zodra je overweegt een AI-model te koppelen aan een eigen systeem of databron: bouw of koop die koppeling dan via MCP in plaats van maatwerk. Heb je op dit moment geen koppeling met interne systemen nodig, dan voegt MCP ook niets toe.',
    },
  ],
};
