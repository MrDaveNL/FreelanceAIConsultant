export default {
  slug: 'rag-ai-op-eigen-bedrijfsdata',
  category: 'Tools & data',
  tone: 'yellow',
  icon: '▤',
  featured: false,
  title: 'RAG uitgelegd: AI laten antwoorden op je eigen bedrijfsdata',
  titleLine1: 'RAG uitgelegd:',
  titleLine2: 'AI op je eigen bedrijfsdata',
  excerpt: 'RAG laat AI antwoorden op basis van je eigen documenten in plaats van alleen wat het model al wist. Hoe het werkt, wanneer je het inzet en waar het misgaat.',
  metaTitle: 'Wat is RAG? AI op je eigen bedrijfsdata uitgelegd',
  metaDescription: 'RAG (retrieval augmented generation) laat AI antwoorden op basis van je eigen documenten. Hoe het werkt, wanneer je het inzet en waar het misgaat.',
  lede: 'RAG is geen techniekkeuze maar een datavraag. De kwaliteit van de antwoorden hangt af van je documenten, je toegangsrechten en het onderhoud daarvan, niet van welk model je kiest.',
  readingTime: '5 min leestijd',
  date: '2026-12-08',
  dateLabel: '8 december 2026',
  summary: [
    'RAG laat een model antwoorden op basis van jouw documenten, niet alleen op wat het al wist.',
    'De kwaliteit hangt af van je bronnen en toegangsrechten, niet van het model.',
    'Fine-tuning en een groter contextvenster zijn geen vervanging, maar andere knoppen.',
  ],
  summaryClose: 'Zonder goed opgebouwde bronnen zoekt ook het beste model naar iets dat er niet is.',
  takeaways: [
    ['Een datavraag, geen techniekvraag', 'Het model is zelden het probleem. De structuur en kwaliteit van je bronnen wel.'],
    ['Toegangsrechten zijn onderdeel van het ontwerp', 'Een RAG-systeem dat alles doorzoekt, geeft ook antwoord uit documenten die iemand niet had mogen zien.'],
    ['Meten is verplicht, niet optioneel', 'Zonder een manier om de kwaliteit van antwoorden te volgen, merk je een afwijking pas als een gebruiker klaagt.'],
  ],
  remember: 'RAG is zo goed als de bron die het doorzoekt, nooit beter.',
  related: ['het-datafundament-onder-ai', 'ai-governance-zonder-bureaucratie'],
  body: `
<h2>Wat is RAG?</h2>
<p>RAG staat voor retrieval augmented generation: een model dat eerst relevante informatie opzoekt in een eigen bronverzameling, en pas daarna een antwoord formuleert op basis van wat het heeft gevonden. Zonder RAG antwoordt een model uit wat er tijdens de training is meegegeven, met een afkapdatum en zonder kennis van jouw organisatie. Met RAG krijgt het model er bij elke vraag een stukje actuele, eigen data bij, zonder dat je het model zelf opnieuw moet trainen.</p>
<p>Het verschil is vergelijkbaar met een collega die alles uit het hoofd moet weten, tegenover een collega die erbij mag opzoeken in het eigen archief voordat hij antwoordt. De tweede collega is zelden slimmer, maar wel beter geïnformeerd, en kan bovendien laten zien waar het antwoord vandaan komt.</p>

<figure style="margin:30px 0;padding:22px;border:1px solid var(--line);border-radius:16px;background:rgba(255,250,241,.6);overflow-x:auto">
<svg viewBox="0 0 1000 180" role="img" aria-label="Het RAG-proces in vijf stappen: vraag, zoeken in eigen bronnen, relevante passages, model, antwoord met bronvermelding" style="width:100%;height:auto;max-width:780px;min-width:640px;display:block;margin:0 auto">
  <g font-family="inherit">
    <rect x="10" y="30" width="165" height="110" rx="14" fill="var(--mustard)" />
    <text x="92" y="78" text-anchor="middle" font-size="15" font-weight="700" fill="var(--burgundy)">Vraag</text>
    <text x="92" y="98" text-anchor="middle" font-size="11" fill="var(--burgundy)">van de gebruiker</text>

    <line x1="178" y1="85" x2="208" y2="85" stroke="var(--burgundy)" stroke-width="2" />
    <polygon points="208,79 220,85 208,91" fill="var(--burgundy)" />

    <rect x="222" y="30" width="185" height="110" rx="14" fill="var(--aqua)" />
    <text x="314" y="72" text-anchor="middle" font-size="14" font-weight="700" fill="var(--burgundy)">Zoeken in</text>
    <text x="314" y="90" text-anchor="middle" font-size="14" font-weight="700" fill="var(--burgundy)">eigen bronnen</text>
    <text x="314" y="110" text-anchor="middle" font-size="11" fill="var(--burgundy)">documenten, data</text>

    <line x1="410" y1="85" x2="440" y2="85" stroke="var(--burgundy)" stroke-width="2" />
    <polygon points="440,79 452,85 440,91" fill="var(--burgundy)" />

    <rect x="454" y="30" width="185" height="110" rx="14" fill="var(--salmon)" />
    <text x="546" y="72" text-anchor="middle" font-size="14" font-weight="700" fill="var(--burgundy)">Relevante</text>
    <text x="546" y="90" text-anchor="middle" font-size="14" font-weight="700" fill="var(--burgundy)">passages</text>
    <text x="546" y="110" text-anchor="middle" font-size="11" fill="var(--burgundy)">beste treffers</text>

    <line x1="642" y1="85" x2="672" y2="85" stroke="var(--burgundy)" stroke-width="2" />
    <polygon points="672,79 684,85 672,91" fill="var(--burgundy)" />

    <rect x="686" y="30" width="130" height="110" rx="14" fill="var(--sand)" />
    <text x="751" y="78" text-anchor="middle" font-size="15" font-weight="700" fill="var(--burgundy)">Model</text>
    <text x="751" y="98" text-anchor="middle" font-size="11" fill="var(--burgundy)">leest alles</text>

    <line x1="819" y1="85" x2="849" y2="85" stroke="var(--burgundy)" stroke-width="2" />
    <polygon points="849,79 861,85 849,91" fill="var(--burgundy)" />

    <rect x="863" y="20" width="128" height="130" rx="14" fill="var(--mustard)" />
    <text x="927" y="62" text-anchor="middle" font-size="13" font-weight="700" fill="var(--burgundy)">Antwoord</text>
    <text x="927" y="82" text-anchor="middle" font-size="13" font-weight="700" fill="var(--burgundy)">met bron-</text>
    <text x="927" y="102" text-anchor="middle" font-size="13" font-weight="700" fill="var(--burgundy)">vermelding</text>
  </g>
</svg>
<figcaption style="margin-top:14px;font-size:.8rem;color:var(--muted);text-align:center">Het RAG-proces: van vraag tot antwoord, via je eigen bronnen, met een verwijzing naar de bron erbij.</figcaption>
</figure>

<h2>Hoe RAG werkt in vier stappen</h2>
<p>Onder de motorkap zijn het telkens dezelfde vier bewegingen:</p>
<ul>
  <li><b>1. Zoeken in eigen bronnen.</b> De vraag wordt gebruikt om je documenten, wiki, tickets of andere bronnen te doorzoeken op relevantie, niet op exacte woorden alleen.</li>
  <li><b>2. De beste passages selecteren.</b> Van alles wat erin zou kunnen passen, selecteert het systeem de stukken tekst die het meest relevant zijn voor deze specifieke vraag.</li>
  <li><b>3. Die passages aan het model meegeven.</b> De gevonden stukken gaan samen met de oorspronkelijke vraag naar het model, als context erbij, niet als vervanging van de vraag.</li>
  <li><b>4. Een antwoord genereren met bronvermelding.</b> Het model formuleert het antwoord op basis van wat het heeft meegekregen, en een goed ingericht systeem laat zien uit welk document of welke passage dat antwoord komt.</li>
</ul>
<p>Dat laatste punt is geen bijzaak. Een antwoord zonder bronvermelding vraagt om blind vertrouwen; een antwoord met bronvermelding kun je controleren, en dat verschil is precies waarom RAG in een zakelijke context meestal de voorkeur heeft boven een model dat alleen uit zijn training antwoordt.</p>

<h2>RAG, fine-tuning of een groter contextvenster</h2>
<p>Drie manieren om een model iets te laten weten dat het nog niet wist, en ze lossen niet hetzelfde probleem op.</p>
<div class="table">
  <div class="tr head"><b>Aanpak</b><b>Wat het doet</b><b>Wanneer het past</b></div>
  <div class="tr"><span>RAG</span><span>Haalt actuele, specifieke informatie erbij op het moment van de vraag</span><span>Documenten die vaak wijzigen; antwoorden moeten herleidbaar zijn tot een bron</span></div>
  <div class="tr"><span>Fine-tuning</span><span>Past het model zelf aan op een stijl, taak of domein</span><span>Een vaste manier van formuleren of structureren aanleren, geen actuele feiten</span></div>
  <div class="tr"><span>Groter contextvenster</span><span>Geeft meer tekst in één keer mee aan het model</span><span>Eén document volledig doorlezen; geen selectie uit duizenden bronnen nodig</span></div>
</div>
<p>In de praktijk sluiten deze elkaar niet uit. De meest voorkomende combinatie is RAG voor de actuele, bedrijfsspecifieke kennis, met eventueel een lichte aanpassing van het model voor toon en structuur. Een AI-agent die zelf stappen zet op basis van wat hij heeft opgehaald, is een volgende laag boven RAG, geen vervanging ervan; wat dat precies inhoudt, leg ik uit in <a href="/nl/ai-agents/wat-is-een-ai-agent">wat een AI-agent is</a>. Het bouwen en integreren van zo'n systeem valt onder <a href="/nl/ai-development">AI development</a>: of je dat zelf laat bouwen, inkoopt als standaardtool of als maatwerk <a href="/nl/ai-development/ai-oplossingen">AI-oplossing</a> optuigt, hangt af van hoe specifiek jouw situatie is.</p>

<h2>Toepassingen: kennisassistent, klantenservice, beleid</h2>
<p>De drie toepassingen waar ik RAG in de praktijk het vaakst terugzie:</p>
<ul>
  <li><b>Een interne kennisassistent</b> die medewerkers antwoord geeft op basis van handboeken, procedures en eerdere besluiten, met een verwijzing naar het onderliggende document.</li>
  <li><b>Klantenservice</b>, waar RAG ervoor zorgt dat een chatbot antwoordt op basis van de actuele productinformatie en voorwaarden, in plaats van op een verouderde of verzonnen versie daarvan. <!-- LINK-TODO BLOG-03 (AI in klantenservice): link naar /nl/inzichten/ai-klantenservice zodra dat artikel bestaat --></li>
  <li><b>Beleid en compliance</b>, waar medewerkers of auditors snel willen weten wat een actueel beleidsdocument precies voorschrijft, met het document als bron erbij in plaats van een samenvatting uit het geheugen van het model.</li>
</ul>
<p>Een van de zes anonieme praktijkvoorbeelden op <a href="/nl/cases">mijn cases-pagina</a>, de <a href="/nl/cases/interne-ai-assistent-kenniswerkers">interne AI-assistent voor kenniswerkers</a>, is precies dit type toepassing.</p>

<h2>Wat je datafundament moet kunnen</h2>
<p>RAG verplaatst het probleem niet, het legt het juist bloot: als je bronnen tegenstrijdig, verouderd of slecht gestructureerd zijn, krijg je zelfverzekerd geformuleerde antwoorden op basis van slechte input. Welke vragen daarbij precies spelen (definities, herkomst, kwaliteit, toegankelijkheid) en hoe je dat aanpakt zonder een jaar aan databeheer vooraf, beschrijf ik uitgebreider in <a href="/nl/inzichten/het-datafundament-onder-ai">het datafundament onder AI</a>. Voor RAG specifiek geldt een versnelde versie van diezelfde les: begin met de bronnen van één duidelijke use case, niet met je hele documentenarchief.</p>

<h2>Privacy en toegangsrechten</h2>
<p>Een RAG-systeem doorzoekt wat je erin stopt, en dat is precies het risico: als het alles doorzoekt zonder onderscheid, geeft het ook antwoord op basis van documenten die een gebruiker niet had mogen zien. Toegangsrechten horen daarom in het ontwerp, niet als correctie achteraf: een vraag van een medewerker mag alleen treffers opleveren uit bronnen waartoe die medewerker al toegang heeft.</p>
<p>Verwerkt het systeem daarbij persoonsgegevens, bijvoorbeeld in klantdossiers of personeelsdocumenten, dan gelden de gewone AVG-eisen onverkort. Zodra zo'n systeem ook zelfstandig stappen zet op basis van wat het heeft opgehaald, komt daar de agent-component bij; hoe die twee samenkomen, staat in <a href="/nl/kennisbank/ai-agents-en-avg">AI agents en de AVG</a>.</p>

<h2>Hoe je de kwaliteit meet</h2>
<p>Zonder meting merk je een slecht functionerend RAG-systeem pas als een gebruiker een duidelijk fout antwoord meldt, en dan is het al een keer misgegaan. Drie dingen die wel te meten zijn:</p>
<ul>
  <li><b>Haalt het de juiste passages op?</b> Steekproef van vragen waarvan je het juiste antwoord al kent, en controleren of de opgehaalde bron klopt.</li>
  <li><b>Blijft het antwoord bij de bron?</b> Een model dat iets toevoegt wat niet in de opgehaalde passage stond, is aan het verzinnen, ook al klinkt het antwoord goed.</li>
  <li><b>Wat doen gebruikers ermee?</b> Een duidelijke manier om een antwoord als onjuist te markeren levert meer op dan een enquête achteraf.</li>
</ul>
<p>Ophalen werkt alleen als de bron goed is opgebouwd. Dat merk ik ook bij het schrijven van content voor AI-zoekmachines: heldere vraag, direct antwoord, bron en datum erbij. Dezelfde discipline die een RAG-systeem nodig heeft om goed te kunnen ophalen, is ook precies wat een AI-zoekmachine nodig heeft om jouw content te kunnen citeren.</p>

<h2>Wat het kost (indicatie)</h2>
<p>Een harde prijs voor "een RAG-systeem" bestaat niet: de kosten hangen vooral af van hoeveel bronnen je erin ontsluit, hoe ingewikkeld de toegangsrechten zijn, en hoeveel onderhoud die bronnen nodig hebben zodra ze veranderen. Dat zijn precies de kostenposten (licenties, integratie, data, beheer) die ik uitsplits in <!-- LINK-TODO BLOG-04 (Wat kost AI-implementatie): link naar /nl/inzichten/wat-kost-ai-implementatie zodra dat artikel bestaat -->een apart artikel over wat AI-implementatie kost, met realistische bandbreedtes per scenario. Wil je dat voor jouw situatie laten doorrekenen in plaats van zelf inschatten, dan is dat onderdeel van een <a href="/nl/diensten/ai-readiness-assessment">AI Readiness Assessment</a>.</p>
<p>RAG is geen techniekkeuze maar een datavraag. Begin bij één duidelijke use case, ontsluit daarvoor de bronnen die er echt toe doen, en bouw pas daarna verder. Dat levert sneller een werkend systeem op dan wachten tot je hele documentenarchief op orde is, en voorkomt tegelijk dat je een slim model op een slechte bron loslaat.</p>
`,
  faq: [
    {
      q: 'Is RAG hetzelfde als fine-tuning?',
      a: 'Nee. RAG haalt bij elke vraag actuele informatie op uit je eigen bronnen en geeft die aan het model mee; fine-tuning past het model zelf aan op een stijl, taak of domein, zonder dat er per vraag iets wordt opgezocht. Ze kunnen worden gecombineerd, maar lossen niet dezelfde behoefte op.',
    },
    {
      q: 'Heb ik een vectordatabase nodig voor RAG?',
      a: 'In de meeste implementaties wordt gezocht op basis van betekenis, en daarvoor is inderdaad een vorm van doorzoekbare opslag van je bronnen nodig. Welke technische vorm dat precies krijgt, hangt af van je situatie en is een implementatiekeuze, geen principekeuze die je vooraf moet maken.',
    },
    {
      q: 'Kan een RAG-systeem nog steeds dingen verzinnen?',
      a: 'Ja, als het model afwijkt van wat er in de opgehaalde passages staat, of als de opgehaalde passages zelf niet relevant waren. Daarom is meten of een antwoord bij de bron blijft geen overbodige stap, maar een vaste controle.',
    },
    {
      q: 'Werkt RAG ook met slecht gestructureerde documenten?',
      a: 'Het werkt, maar de kwaliteit van de antwoorden daalt met de kwaliteit van de bron. Tegenstrijdige, verouderde of ongestructureerde documenten leveren precies zo’n antwoord op: zelfverzekerd geformuleerd en inhoudelijk onbetrouwbaar.',
    },
    {
      q: 'Hoe begin ik met RAG zonder meteen het hele documentenarchief te ontsluiten?',
      a: 'Kies één concrete use case met een duidelijke eigenaar, bijvoorbeeld een kennisassistent voor één team, en ontsluit alleen de bronnen die die use case nodig heeft. Breid daarna pas uit naar de volgende use case.',
    },
  ],
};
