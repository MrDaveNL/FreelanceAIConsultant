export default {
  slug: 'het-datafundament-onder-ai',
  category: 'Tools & data',
  tone: 'sand',
  icon: '◫',
  featured: false,
  title: 'De rol van het datafundament in succesvolle AI-initiatieven',
  titleLine1: 'Het datafundament',
  titleLine2: 'onder je AI-initiatieven',
  excerpt: '"Eerst de data op orde" is net zo vaak een excuus als een noodzaak. Hoe je bepaalt welke van de twee bij jou speelt.',
  metaDescription: '"Eerst de data op orde" is net zo vaak een excuus als een noodzaak. Zo bepaal je welke van de twee speelt bij jouw AI-initiatief, en wat je dan doet.',
  lede: 'Het meest gegeven advies in AI-land is ook het gevaarlijkste: eerst je data op orde brengen. Soms klopt dat. Vaak is het een manier om nog twee jaar niets te doen.',
  readingTime: '4 min leestijd',
  date: '2026-04-09',
  dateLabel: '9 april 2026',
  summary: [
    'Je hebt geen perfect datafundament nodig, je hebt genoeg fundament voor één use case nodig.',
    'Definities zijn belangrijker dan volume of infrastructuur.',
    'Bouw het fundament langs een use case, niet ervoor.',
  ],
  summaryClose: 'Data op orde brengen zonder toepassing is een project zonder einde.',
  takeaways: [
    ['Fundament per use case', 'Vraag niet "is onze data op orde?" maar "is deze data goed genoeg voor dit besluit?".'],
    ['Definities eerst', 'Vier systemen met drie definities van "klant" is een groter probleem dan een ontbrekend datawarehouse.'],
    ['Herkomst telt', 'Bij AI moet je kunnen uitleggen waar een getal vandaan komt. Dat is een governancevraag, geen techniekvraag.'],
  ],
  remember: 'Een datafundament dat niet door een concrete toepassing wordt getrokken, wordt nooit af.',
  related: ['build-buy-of-partner', 'ai-governance-zonder-bureaucratie'],
  body: `
<h2>Twee waarheden die elkaar tegenspreken</h2>
<p>De eerste: zonder betrouwbare data levert AI onbetrouwbare uitkomsten. Dat is onomstreden.</p>
<p>De tweede: organisaties die eerst hun volledige datalandschap op orde willen brengen voordat ze aan AI beginnen, komen zelden aan AI toe. Het datafundament is namelijk nooit af, en er is altijd een volgende laag die eerst zou moeten.</p>
<p>Beide zijn waar. De uitweg zit in de vraagstelling. "Is onze data op orde?" is een onbeantwoordbare vraag. "Is deze data goed genoeg om dit specifieke besluit op te baseren?" is wél te beantwoorden, in een week.</p>

<h2>Wat er werkelijk toe doet</h2>
<p>Bij datascans in aanloop naar AI-trajecten kom ik vier problemen tegen. Ze zijn niet even erg en ze vragen niet dezelfde oplossing.</p>

<h3>Probleem 1: Definities (ernstig, vaak onderschat)</h3>
<p>Vier systemen, drie definities van "klant". Twee afdelingen die "omzet" verschillend berekenen. Een productcode die in het ene systeem een variant is en in het andere een apart product. Dit is verreweg het meest voorkomende en het meest onderschatte probleem.</p>
<p>Het is ernstig omdat geen enkele hoeveelheid technologie het oplost. Een model dat traint op tegenstrijdig gedefinieerde data leert die tegenstrijdigheid mee. En het wordt onderschat omdat iedereen binnen zijn eigen afdeling consistent werkt. Het probleem is alleen zichtbaar als je erdoorheen kijkt.</p>
<p><b>Aanpak:</b> definieer alleen de vijf tot tien begrippen die je use case raakt. Niet het hele bedrijfsdatamodel. Dat is twee weken werk in plaats van twee jaar.</p>

<h3>Probleem 2: Herkomst en traceerbaarheid (ernstig bij gereguleerd werk)</h3>
<p>Kun je van een getal in een rapportage terugvinden waar het vandaan komt en welke bewerkingen het heeft ondergaan? Bij AI-toepassingen die beslissingen beïnvloeden, is dit geen luxe. Toezichthouders, accountants en uiteindelijk ook je eigen bestuurders gaan die vraag stellen.</p>
<p><b>Aanpak:</b> breng de herkomst in kaart voor de datastromen die je use case gebruikt. Documenteer de transformaties. Dat hoeft niet in een dure tool: een leesbaar document dat klopt, is meer waard dan een lineage-tool die niemand onderhoudt.</p>

<h3>Probleem 3: Kwaliteit en volledigheid (hanteerbaar)</h3>
<p>Missende velden, inconsistente invoer, historische data die halverwege van formaat veranderde. Vervelend, maar dit is het type probleem waar technologie wél mee helpt en dat je kunt kwantificeren.</p>
<p><b>Aanpak:</b> meet het. Hoeveel procent van de records heeft het veld dat je nodig hebt? Als dat 94% is, kun je aan de slag en is de vraag wat je met de overige 6% doet. Als het 40% is, heb je een ander gesprek.</p>

<h3>Probleem 4: Toegankelijkheid en infrastructuur (meestal het minst urgent)</h3>
<p>Geen centraal datawarehouse, data verspreid over systemen, geen API’s. Dit voelt als het grootste probleem omdat het het zichtbaarst is en omdat leveranciers er graag een platform voor verkopen. In de praktijk is het vaak het makkelijkst op te lossen, zeker voor één use case.</p>
<p><b>Aanpak:</b> voor een eerste use case is een dagelijkse export vaak genoeg. Bouw geen platform om een hypothese te testen.</p>

<h2>De use-case-gedreven volgorde</h2>
<p>De aanpak die in de praktijk werkt, draait de volgorde om. Je bouwt het fundament niet vooraf, je trekt het mee met de eerste toepassingen.</p>
<ul>
  <li><b>Stap 1:</b> Kies één use case met duidelijke waarde en een eigenaar in de lijn.</li>
  <li><b>Stap 2:</b> Breng in kaart welke data die use case nodig heeft: meestal drie tot zeven bronnen, niet dertig.</li>
  <li><b>Stap 3:</b> Los voor díe bronnen de definities, de herkomst en de kwaliteit op. Doe dit goed, want dit wordt je referentie.</li>
  <li><b>Stap 4:</b> Bouw de use case en meet of hij werkt.</li>
  <li><b>Stap 5:</b> Kies de volgende use case die zoveel mogelijk dezelfde bronnen gebruikt.</li>
</ul>
<p>Na drie of vier use cases heb je een fundament dat is ontstaan uit gebruik. Dat fundament is kleiner dan het ideaalplaatje en aanzienlijk betrouwbaarder, omdat elke component in productie wordt getoetst.</p>

<h2>Wanneer "eerst de data" wél het juiste antwoord is</h2>
<p>Er zijn situaties waarin uitstellen echt verstandig is. Drie signalen:</p>
<ul>
  <li><b>De kernentiteit is niet eenduidig.</b> Als je niet kunt vaststellen wie een klant is of wat één order is, dan raakt dat elke use case. Dit eerst oplossen bespaart je herwerk bij alles wat volgt.</li>
  <li><b>De data die je nodig hebt, wordt niet vastgelegd.</b> Geen hoeveelheid slimme techniek maakt data die er niet is. Dan is de eerste stap een registratiewijziging, en die duurt.</li>
  <li><b>Er is geen eigenaar van de bron.</b> Als niemand verantwoordelijk is voor een dataset, wordt hij ook niet onderhouden, en zakt je toepassing na een half jaar stilletjes in.</li>
</ul>
<p>Merk op dat geen van deze drie gaat over technologie of over het ontbreken van een platform. Ze gaan alle drie over betekenis en eigenaarschap. Dat is waar het datafundament werkelijk over gaat. De rest is infrastructuur, en infrastructuur koop je.</p>

<h2>Een test van een halve dag</h2>
<p>Wil je weten waar je staat? Neem één concreet besluit dat je met AI wilt ondersteunen en probeer het handmatig te reconstrueren voor tien gevallen uit het verleden. Kost dat een middag, dan is je fundament in orde genoeg. Kost dat twee weken en moet je drie afdelingen bellen, dan weet je precies welk deel je eerst moet aanpakken. En het is bijna nooit het deel waar het platformvoorstel over ging.</p>
`,
};
