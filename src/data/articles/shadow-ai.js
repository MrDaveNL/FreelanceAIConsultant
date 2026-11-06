export default {
  slug: 'shadow-ai',
  category: 'Governance',
  tone: 'salmon',
  icon: '◐',
  featured: false,
  title: 'Shadow AI: medewerkers gebruiken AI toch al, wat nu?',
  titleLine1: 'Shadow AI:',
  titleLine2: 'medewerkers gebruiken het al',
  excerpt: 'Verbieden werkt niet: medewerkers gebruiken AI al. Hoe je het zichtbaar maakt, het risico serieus neemt en veilige alternatieven biedt zonder alles dicht te timmeren.',
  metaTitle: "Shadow AI: risico's en aanpak voor organisaties",
  metaDescription: "Shadow AI is AI-gebruik buiten het zicht van IT en management. Wat de risico's zijn en hoe je het in goede banen leidt zonder alles te verbieden.",
  lede: 'Verbieden werkt niet, want medewerkers gebruiken AI al. Breng in kaart wat er gebruikt wordt, bied een veilig alternatief en leg een paar minimale afspraken vast. Shadow AI is een signaal van behoefte, geen tuchtzaak.',
  readingTime: '6 min leestijd',
  date: '2026-11-10',
  dateLabel: '10 november 2026',
  summary: [
    'Verbieden duwt het gebruik onder de radar, het stopt het niet.',
    'Eerst zicht krijgen op wat er al gebruikt wordt, dan pas regelen.',
    'Een zakelijk alternatief en een kort beleid werken beter dan een verbod.',
  ],
  summaryClose: 'Shadow AI is een signaal van behoefte, geen tuchtzaak.',
  takeaways: [
    ['Verbieden werkt averechts', 'Een verbod maakt het gebruik onzichtbaar, niet kleiner.'],
    ['Zicht boven controle', 'Je kunt geen risico beheersen dat je niet kent, begin met ontdekken, niet met regels.'],
    ['Faciliteren is sneller dan handhaven', 'Een goedgekeurd alternatief binnen een week wint het van een verbod dat niemand controleert.'],
  ],
  remember: 'Wie AI verbiedt zonder alternatief te bieden, organiseert vooral dat hij het niet meer ziet.',
  related: ['ai-governance-zonder-bureaucratie', 'ai-adoptie-begint-bij-het-werk'],
  body: `
<h2>Wat is shadow AI?</h2>
<p>Shadow AI is AI-gebruik dat buiten het zicht en de goedkeuring van IT en management plaatsvindt. Dat is breder dan "iemand gebruikt ChatGPT in de browser". Het gaat ook om AI-functies die stilletjes aanstaan in bestaande software, browserextensies die meekijken met alles wat iemand typt, een los abonnement dat een team zelf afsluit buiten de inkoop om, en persoonlijke accounts die voor werk worden gebruikt omdat er geen zakelijk alternatief is.</p>
<p>Hoeveel dat precies voorkomt, hangt sterk af van de definitie en het land, maar de bandbreedte in recent onderzoek ligt ruwweg tussen de helft en driekwart van de kantoormedewerkers. Microsoft onderzocht in 2025 onder ruim tweeduizend Britse kantoormedewerkers dat 71% weleens een niet-goedgekeurde AI-tool voor het werk had gebruikt (Censuswide voor Microsoft, oktober 2025). Dat soort cijfers verschilt per onderzoek, maar de richting is overal hetzelfde: het gebruik is al wijdverspreid voordat een organisatie er beleid op heeft.</p>
<p>Het verschil met klassieke shadow IT is de snelheid. Een niet-goedgekeurde applicatie aanschaffen kostte vroeger een creditcard en een goedkeuring van een manager. Een AI-tool gebruiken kost een browsertab.</p>

<h2>Waarom medewerkers het doen</h2>
<p>Bijna niemand doet dit om de regels te ontduiken. Mensen willen hun werk sneller of beter doen, en het officiële alternatief is er niet, is te traag, of is onbekend.</p>
<p>Een voorbeeld dat ik in deze vorm vaker terugzie bij klanten, hier anoniem en in een samengestelde, fictieve vorm: een medewerker op de klantenservice krijgt een lastige, inhoudelijk brief van een klant. Het interne verzoek om een AI-tool voor klantcommunicatie te laten goedkeuren staat al drie maanden bij IT in de wachtrij. Diezelfde middag plakt de medewerker de brief in een gratis chatbot op een privéaccount, krijgt binnen een minuut een bruikbaar antwoord, en stuurt dat met kleine aanpassingen naar de klant. Niemand heeft iets fout bedoeld. Niemand wist dat er klantgegevens net buiten de deur stonden.</p>
<p>Dat patroon is het hele probleem in miniatuur: een trage of ontbrekende officiële weg, een laagdrempelig alternatief, en een taak die gewoon af moet. Diezelfde dynamiek, maar dan bij de inrichting van goedkeuringstrajecten in het algemeen, beschrijf ik uitgebreider in <a href="/nl/inzichten/ai-governance-zonder-bureaucratie">AI-governance zonder bureaucratie</a>.</p>

<h2>De risico's: data, AVG, IP en kwaliteit</h2>
<p>Het risico van shadow AI is niet dat medewerkers AI gebruiken. Het risico is dat niemand weet welke data waar terechtkomt, en dat er geen afspraak ligt over wat daar wel en niet in mag.</p>
<ul>
  <li><b>Data en IP:</b> broncode, strategische stukken, ongepubliceerde cijfers of conceptcontracten die in een publieke chatbot worden geplakt, kunnen bij sommige gratis diensten gebruikt worden om het onderliggende model te verbeteren, en staan in elk geval op servers waar je geen afspraken over hebt gemaakt.</li>
  <li><b>AVG:</b> zet een medewerker persoonsgegevens van klanten, patiënten of sollicitanten in een publieke tool, dan gelden gewoon de AVG-eisen: grondslag, dataminimalisatie en vaak een verwerkersovereenkomst met de aanbieder. Die laatste ontbreekt bij een privéaccount per definitie. De manier waarop dat juridisch in elkaar zit, overlapt met wat ik beschrijf in <a href="/nl/kennisbank/ai-agents-en-avg">AI agents en de AVG</a>, al gaat het daar specifiek over agents die zelf gegevens verwerken.</li>
  <li><b>Kwaliteit:</b> output die niemand controleert, omdat het gebruik zelf al verborgen is. Een onjuist antwoord in een conceptmail is vervelend; een onjuist antwoord dat ongezien de klant bereikt, is iets anders.</li>
</ul>
<p>IBM's jaarlijkse onderzoek naar datalekken concludeerde in 2025 dat bij ongeveer één op de vijf organisaties met een AI-gerelateerd datalek, schaduw-AI daarbij een rol speelde, en dat maar 37% van de onderzochte organisaties beleid had om AI-gebruik te beheersen of schaduw-AI op te sporen (IBM, Cost of a Data Breach Report, 2025). Dat is niet omdat schaduw-AI per se gevaarlijker is dan goedgekeurde AI, maar omdat er geen enkele beheersmaatregel op staat: geen afspraken, geen zicht, geen log.</p>
<!-- LINK-TODO BLOG-09 (AI-security): hier dieper ingaan op data-exfiltratie via browserextensies en persoonlijke AI-accounts, zodra dat artikel bestaat -->

<h2>Zo ontdek je wat er al gebruikt wordt</h2>
<p>Je kunt geen risico beheersen dat je niet kent. Voordat je iets regelt, moet je dus eerst zicht krijgen, en dat werkt beter met vragen dan met verboden.</p>
<ul>
  <li>Voer korte, niet-bestraffende gesprekken per team: welke AI-tools gebruiken jullie nu al, waarvoor, en wat zou je willen dat er kon? Benoem vooraf dat dit geen tuchtonderzoek is.</li>
  <li>Kijk in de creditcard- en abonnementenoverzichten naar kleine, terugkerende softwarekosten. Veel schaduw-AI wordt betaald met een persoonlijke of afdelingskaart, niet via inkoop.</li>
  <li>Vraag IT of er al zicht is op netwerkverkeer naar bekende AI-domeinen. Dat geeft geen volledig beeld (persoonlijke telefoons en thuiswerk vallen erbuiten), maar wel een eerste indicatie.</li>
  <li>Let op signalen in het werk zelf: tekst die plotseling anders klinkt, een team dat ineens sneller levert zonder dat de bezetting is veranderd.</li>
</ul>
<p>Komt er een beeld uit dat groter is dan je zelf kunt duiden, of wil je het in één keer grondig laten doen inclusief de risico- en compliance-kant, dan is dat precies waar een <a href="/nl/diensten/ai-readiness-assessment">AI Readiness Assessment</a> voor bedoeld is.</p>

<h2>Van verbieden naar faciliteren</h2>
<p>De reflex is vaak: verbieden, en een mail sturen dat het niet meer mag. Dat is geen onredelijke eerste gedachte, want de risico's zijn echt. Maar een verbod zonder alternatief verandert het gedrag niet, het verandert alleen de zichtbaarheid. Onderzoek van IntoTheMinds (2026) onder Franse medewerkers die aan een verbod waren onderworpen, vond dat ruim zeven op de tien daarvan toch een persoonlijk account bleef gebruiken. Met een verbod weet je dus minder dan ervoor, niet meer.</p>
<p>Daarom is faciliteren, met heldere grenzen, effectiever dan verbieden. Dat betekent niet dat het risico er niet is of dat je het moet laten lopen: het betekent dat je het serieus neemt door het te sturen in plaats van te negeren. Concreet:</p>
<ul>
  <li><b>Geef een zakelijk alternatief.</b> Een abonnement met duidelijke afspraken over wat er met de invoer gebeurt, is al een enorme verbetering ten opzichte van een privéaccount. Wat daarbij komt kijken, lees je in <a href="/nl/kennisbank/chatgpt-voor-bedrijven">ChatGPT voor bedrijven</a>.</li>
  <li><b>Maak drie tot vijf regels, geen beleidsdocument.</b> Wat mag wel, wat mag nooit (zoals persoonsgegevens van klanten of ongepubliceerde cijfers zonder afweging), en bij wie meld je twijfelgevallen.</li>
  <li><b>Leg het vast, kort.</b> Een paar afspraken op één pagina werkt beter dan een traject van maanden. Hoe dat eruitziet, staat op <a href="/nl/ai-beleid">AI-beleid</a>, inclusief een startpunt om zelf mee te beginnen.</li>
</ul>

<h2>Shadow AI en AI-geletterdheid (AI Act)</h2>
<p>Sinds 2 februari 2025 geldt onder de Europese AI-verordening de verplichting om maatregelen te nemen voor de AI-geletterdheid van iedereen die binnen je organisatie met AI werkt. Die verplichting is er voor elke vorm van AI-gebruik, dus ook voor het gebruik dat je nu nog niet in beeld hebt, en is niet meegenomen in het uitstel dat de Digital Omnibus eind juli 2026 voor de hoog-risicoregels regelde.</p>
<p>Shadow AI is in de praktijk precies het scenario waar die verplichting op is gericht: mensen die met AI werken zonder instructie over wat verantwoord gebruik is. Een korte, praktische instructie bij het zakelijke alternatief is dus niet alleen verstandig, het is ook de eenvoudigste manier om aan deze eis te voldoen. Hoe je dat samen met een register, een goedkeuringsmoment en een escalatiepad in een lichte structuur zet, zonder dat het een nieuwe bureaucratie wordt, beschrijf ik in <a href="/nl/inzichten/ai-governance-zonder-bureaucratie">AI-governance zonder bureaucratie</a>.</p>

<h2>Aanpak voor de eerste 30 dagen</h2>
<p>Je hoeft dit niet in één keer volledig te regelen. Een haalbare volgorde over vier weken:</p>
<ul>
  <li><b>Week 1, ontdekken:</b> gesprekken per team, een blik in de abonnementenkosten, en een vraag aan IT over wat er al zichtbaar is. Doel is een eerste beeld, geen volledige inventarisatie.</li>
  <li><b>Week 2, een alternatief regelen:</b> zet op basis van wat je ziet minimaal één zakelijk abonnement neer voor het meest gebruikte doel, met afspraken over de invoer.</li>
  <li><b>Week 3, instrueren:</b> een korte, concrete instructie over wat wel en niet mag, gericht op de teams waar je het meeste gebruik zag. Dit is ook het moment om de AI-geletterdheid aantoonbaar te maken.</li>
  <li><b>Week 4, vastleggen en evalueren:</b> schrijf de afspraken op één pagina, wijs aan wie twijfelgevallen beoordeelt, en plan over drie maanden een korte herhaling van de ontdekkingsronde.</li>
</ul>
<p>Shadow AI verdwijnt niet door een verbod, en dat is eigenlijk goed nieuws: het is een duidelijk signaal dat er ergens een behoefte is die je officiële aanbod nu niet invult. Behandel het zo, en je los niet alleen een risico op, je ziet ook meteen waar in de organisatie AI het meeste werk zou kunnen verlichten.</p>
`,
  faq: [
    {
      q: "Is shadow AI verboden onder de AI Act?",
      a: "Nee, niet als zodanig. De AI-verordening verbiedt een beperkt aantal specifieke praktijken, zoals social scoring en emotieherkenning op de werkvloer, maar gewoon AI-gebruik door medewerkers staat daar niet in. Wel geldt voor elk AI-gebruik, dus ook ongeziene varianten, de verplichting om passende maatregelen te nemen voor AI-geletterdheid.",
    },
    {
      q: "Moeten we AI-gebruik via privéaccounts meteen helemaal verbieden?",
      a: "Een verbod alleen werkt averechts: het gebruik verdwijnt niet, het wordt onzichtbaarder. Effectiever is een zakelijk alternatief bieden met duidelijke grenzen, zodat je weer zicht hebt op wat er gebeurt en kunt bijstellen waar het misgaat.",
    },
    {
      q: "Hoe ontdek ik welke AI-tools medewerkers nu al gebruiken?",
      a: "Begin met open, niet-bestraffende gesprekken per team, kijk in de creditcard- en abonnementenkosten naar kleine terugkerende softwareposten, en vraag IT wat er al zichtbaar is in het netwerkverkeer. Een volledig beeld krijg je zo niet, maar wel een werkbaar startpunt.",
    },
    {
      q: "Is een gratis AI-chatbot risicovoller dan een zakelijk abonnement?",
      a: "Over het algemeen wel. Zakelijke abonnementen bevatten meestal afspraken over wat er met je invoer gebeurt en soms een verwerkersovereenkomst, terwijl een persoonlijk gratis account die waarborgen vaak niet heeft. Controleer dit altijd per aanbieder en abonnementsvorm, want de voorwaarden verschillen.",
    },
    {
      q: "Wat zet ik minimaal in een AI-beleid tegen shadow AI?",
      a: "Drie dingen volstaan om te beginnen: welk zakelijk alternatief beschikbaar is, wat daar nooit in mag (zoals persoonsgegevens van klanten of ongepubliceerde cijfers zonder afweging), en bij wie een medewerker twijfelgevallen meldt. Bouw dat pas later uit als de praktijk daar aanleiding voor geeft.",
    },
  ],
};
