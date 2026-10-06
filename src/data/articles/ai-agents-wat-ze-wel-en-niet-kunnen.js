export default {
  slug: 'ai-agents-wat-ze-wel-en-niet-kunnen',
  category: 'Use cases',
  tone: 'salmon',
  icon: '↯',
  featured: false,
  title: 'AI-agents: wat ze wel en niet kunnen in een bedrijfsproces',
  titleLine1: 'AI-agents: wat ze wel',
  titleLine2: 'en niet kunnen',
  excerpt: 'Agents die zelfstandig taken uitvoeren zijn de belofte van dit moment. Waar ze werken, waar ze stukgaan, en welke vraag je vooraf moet beantwoorden.',
  lede: 'Een agent die zelf stappen zet en systemen aanroept, is aantrekkelijk en risicovol tegelijk. Het onderscheid zit in wat er gebeurt als hij ernaast zit.',
  readingTime: '4 min leestijd',
  date: '2026-07-16',
  dateLabel: '16 juli 2026',
  summary: [
    'Agents werken goed bij omkeerbare stappen met een duidelijke eindtoets.',
    'Ze gaan stuk op processen waar een fout stilletjes doorwerkt.',
    'Begin met voorbereiden en voorstellen, niet met uitvoeren.',
  ],
  summaryClose: 'Bepaal eerst wat een fout kost, dan pas hoeveel autonomie je geeft.',
  takeaways: [
    ['Omkeerbaarheid als criterium', 'Geef autonomie op stappen die je zonder schade kunt terugdraaien.'],
    ['Een agent is een proces, geen tool', 'De vraag is niet welk model, maar welke stappen je uit handen geeft.'],
    ['Logging is niet optioneel', 'Zonder volledig spoor van stappen kun je een fout niet reconstrueren.'],
  ],
  remember: 'Autonomie is geen eigenschap van het model, het is een keuze van de organisatie.',
  related: ['welke-ai-use-cases-leveren-resultaat', 'ai-governance-zonder-bureaucratie'],
  body: `
<h2>Wat een agent anders maakt</h2>
<p>Een gewone AI-toepassing krijgt een opdracht en geeft een antwoord. Een agent krijgt een doel en bepaalt zelf welke stappen nodig zijn: informatie ophalen, een systeem raadplegen, een tussenresultaat beoordelen, een vervolgstap kiezen. Dat maakt het krachtiger en het verandert de risicovraag fundamenteel.</p>
<p>Bij een gewoon antwoord beoordeel je één uitkomst. Bij een agent beoordeel je een keten waarin een fout in stap twee doorwerkt in stap vijf, mogelijk zonder dat de eindoutput er verkeerd uitziet. Dat is precies waar het in de praktijk misgaat.</p>

<h2>Waar agents goed werken</h2>

<h3>Voorbereidend werk met een duidelijke eindtoets</h3>
<p>Het verzamelen en ordenen van informatie waar een mens daarna een besluit op neemt. Een dossier samenstellen uit vijf bronnen, een marktoverzicht opbouwen, een offerteaanvraag voorbereiden. De agent doet het zoekwerk, de mens doet de beoordeling.</p>
<p>Dit werkt omdat de fout zichtbaar is op het moment dat hij ertoe doet: de beoordelaar ziet dat er iets ontbreekt of niet klopt, voordat er iets onomkeerbaars gebeurt.</p>

<h3>Stappen die je zonder schade kunt terugdraaien</h3>
<p>Een concept opstellen, een categorie toekennen die later wijzigbaar is, een interne notitie aanmaken. Als het fout gaat, corrigeer je het en verlies je hooguit wat tijd.</p>

<h3>Routes met een harde, controleerbare uitkomst</h3>
<p>Als er een objectieve toets bestaat (een berekening die klopt of niet, een query die resultaten oplevert of niet, een bestand dat valideert of niet), kan een agent zelfstandig itereren tot die toets slaagt. De toets is de veiligheidsklep.</p>

<h2>Waar agents stukgaan</h2>

<h3>Processen waarin een fout stilletjes doorwerkt</h3>
<p>Dit is de belangrijkste categorie om te vermijden. Als een verkeerde tussenstap leidt tot een eindresultaat dat er plausibel uitziet, dan ontdekt niemand de fout: niet bij de controle en niet in de rapportage. Financiële verwerking, risicobeoordeling en alles waar een getal doorrolt naar een ander systeem valt hieronder.</p>

<h3>Handelingen met externe gevolgen</h3>
<p>Een bericht naar een klant sturen, een bestelling plaatsen, een afspraak wijzigen, een betaling in gang zetten. Niet omdat een agent dat technisch niet kan, maar omdat de kosten van een fout buiten je organisatie landen en je ze niet kunt terugnemen. Hier hoort standaard een bevestigingsstap.</p>

<h3>Lange ketens zonder tussentoets</h3>
<p>Hoe meer stappen zonder controlepunt, hoe groter de kans dat de agent ergens halverwege een verkeerde aanname doet en daar consequent op doorbouwt. Praktische grens: als er meer dan een handvol stappen zijn zonder enige toets, bouw dan een tussencontrole in, geautomatiseerd of menselijk.</p>

<h3>Situaties zonder volledig logboek</h3>
<p>Als je niet kunt reconstrueren welke stappen de agent heeft gezet, welke bronnen hij heeft geraadpleegd en waarom hij een bepaalde route koos, dan kun je een incident niet onderzoeken. Voor gereguleerde processen is dat geen optie, en voor de rest is het onverstandig.</p>

<h2>Het autonomieniveau als bewuste keuze</h2>
<p>Autonomie is geen eigenschap van de technologie maar een instelling die je kiest. Vier niveaus, oplopend:</p>
<ul>
  <li><b>Voorbereiden:</b> de agent verzamelt en ordent, een mens doet alles daarna. Laagste risico, vaak al de meeste tijdwinst.</li>
  <li><b>Voorstellen:</b> de agent doet een concreet voorstel inclusief onderbouwing, een mens keurt goed of wijzigt.</li>
  <li><b>Uitvoeren met bevestiging:</b> de agent zet de stappen maar vraagt bevestiging op de onomkeerbare momenten.</li>
  <li><b>Zelfstandig uitvoeren:</b> volledige keten zonder tussenkomst, met monitoring achteraf. Alleen bij omkeerbare stappen en een harde eindtoets.</li>
</ul>
<p>Mijn advies is vrijwel altijd om op niveau één of twee te beginnen, ook als het model meer aankan. Niet uit voorzichtigheid, maar omdat je in die fase leert welke fouten er werkelijk optreden. Die kennis heb je nodig om te bepalen waar je autonomie veilig kunt verhogen, en die informatie krijg je nergens anders vandaan.</p>

<h2>De vraag die je vooraf moet beantwoorden</h2>
<p>Voor elke stap die je aan een agent uit handen geeft, één vraag: <b>als deze stap fout gaat, wie merkt het, wanneer, en wat kost het om het te herstellen?</b></p>
<p>Drie mogelijke antwoorden en wat ze betekenen:</p>
<ul>
  <li><b>Direct zichtbaar, goedkoop te herstellen</b>: geef autonomie.</li>
  <li><b>Later zichtbaar, te herstellen</b>: autonomie met monitoring en een periodieke steekproef.</li>
  <li><b>Niet zichtbaar of niet te herstellen</b>: geen autonomie, punt.</li>
</ul>

<h2>Wat dit in de praktijk betekent</h2>
<p>De toepassingen die ik in productie zie werken, zijn zelden de spectaculaire. Het zijn agents die dossiers voorbereiden, informatie uit verschillende systemen samenbrengen, of een eerste versie opstellen die een mens afmaakt. De tijdwinst is reëel (vaak tientallen procenten op de voorbereidende stap) en het risico is beheersbaar omdat er altijd iemand naar kijkt voordat het ertoe doet.</p>
<p>De toepassingen die stranden, zijn de ketens die te vroeg te veel zelfstandigheid kregen. Niet omdat de technologie het niet kon, maar omdat niemand had vastgesteld wat er zou gebeuren als hij het bij het verkeerde eind had. Die vraag kost een half uur en bepaalt of je toepassing over een jaar nog draait.</p>
`,
};
