# RAG-blok: pilotrapport (stap 1 tot en met 5)

Stand: 6 oktober 2026 · branch `rag-blokken-fase-0` · build geslaagd met alle controles

Dit rapport hoort bij de briefing en bij `docs/rag-inventarisatie.md`. Na deze pilot is gestopt. De uitrol (stap 6 en verder) start pas na akkoord.

## 1. Wat er nu staat

| Commit | Inhoud |
|---|---|
| `73f517f` | Nulmeting opnieuw vastgelegd met het Node-script, voor- en na-controle toegevoegd, Python-script verwijderd |
| `23d3a34` | Doorlooptijd gelijkgetrokken op twee dienstpagina's (zie hoofdstuk 2) |
| `f17bd99` | Stap 1: schema met validatie, zonder content |
| `cba3ade` | Stap 2: renderfunctie, Astro-component en remark-plugin |
| `fc31ebc` | Stap 3: styling |
| `8c45b4c`, `38b1122` | Stap 4: controlescripts, lokaal en in de build |
| `cd6932d` | Stap 5, pilot op een oudere pagina: `/diensten/ai-readiness-assessment` |
| `51fd341` | Stap 5, pilot op een Markdown-pagina uit de planning: `/ai-consultancy/ai-strategie` |

Nieuwe dependency: `node-html-parser` als devDependency, alleen gebruikt door de scripts in `planning/`. Er komt niets van in de site terecht.

`npm run build` draait na de build automatisch `check-nulmeting.mjs` en `check-rag.mjs`. Een fout laat de build falen. `npm run check` draait daarnaast ook `check-dist.mjs`.

Uitkomst van de laatste build:

```
90 pagina's vergeleken met de nulmeting: 88 ongewijzigd, 2 met alleen toevoegingen, 0 met fouten.
2 RAG-blok(ken) in de databron, 0 pagina('s) met fouten, 2 concept(en) nog te beoordelen.
check-dist: 90 HTML-bestanden gecontroleerd, 0 problemen.
check-content: 55 bestanden, 0 met fouten.
```

De controles zijn ook met opzet fout gevoerd op een gemanipuleerde build: een gewijzigde title en H2, een bedrag en een doorlooptijd die niet in `prijzen.ts` staan, een doorlooptijd van de verkeerde dienst in een tabelrij, een blok in `details`, een dode kolom, een vierde zin in de antwoordalinea, een woordelijk overgenomen zin, een vraag die al in de FAQ staat en een dode link. Alle tien werden gemeld en de build faalde.

## 2. Conflict-fix: doorlooptijd gelijkgetrokken (commit `23d3a34`)

`prijzen.ts` had beide waarden al goed ("2-3 weken" en "1 dagdeel incl. voorbereiding") en is niet gewijzigd. Aangepast is alleen `src/data/services.js`:

```diff
-    meta: '... In 3 weken weet je wat haalbaar is en wat eerst moet. Vaste prijs ...'
+    meta: '... In 2-3 weken weet je wat haalbaar is en wat eerst moet. Vaste prijs ...'
-    lede: '... Je weet binnen drie weken wat haalbaar is, wat eerst moet en wat je beter nog niet doet.'
+    lede: '... Je weet binnen twee tot drie weken wat haalbaar is, wat eerst moet en wat je beter nog niet doet.'
-    approachIntro: 'Drie weken, vier vaste blokken. Geen wekenlange interviewrondes.',
+    approachIntro: 'Twee tot drie weken, vier vaste blokken. Geen wekenlange interviewrondes.',
-      { label: 'Duur', value: '3 uur + voorbereiding', tone: 'aqua' },
+      { label: 'Duur', value: prijzen['executive-briefing'].timing, tone: 'aqua' },
```

Voor- en na-controle tegen de nulmeting, vóór het opnieuw vastleggen. Dit zijn bedoelde wijzigingen aan beschermde elementen; alle andere 88 pagina's waren ongewijzigd:

```
✗ /diensten/ai-readiness-assessment
  FOUT  meta_description gewijzigd
        voor: Nuchtere doorlichting op strategie, data, technologie, mensen en governance. In 3 weken weet je wat haalbaar is en wat eerst moet. Vaste prijs €7.000.
        na:   Nuchtere doorlichting op strategie, data, technologie, mensen en governance. In 2-3 weken weet je wat haalbaar is en wat eerst moet. Vaste prijs €7.000.
  FOUT  og:description gewijzigd
        voor: Nuchtere doorlichting op strategie, data, technologie, mensen en governance. In 3 weken weet je wat haalbaar is en wat eerst moet. Vaste prijs €7.000.
        na:   Nuchtere doorlichting op strategie, data, technologie, mensen en governance. In 2-3 weken weet je wat haalbaar is en wat eerst moet. Vaste prijs €7.000.
  FOUT  twitter:description gewijzigd
        voor: Nuchtere doorlichting op strategie, data, technologie, mensen en governance. In 3 weken weet je wat haalbaar is en wat eerst moet. Vaste prijs €7.000.
        na:   Nuchtere doorlichting op strategie, data, technologie, mensen en governance. In 2-3 weken weet je wat haalbaar is en wat eerst moet. Vaste prijs €7.000.
  FOUT  bestaande kop ontbreekt, is gewijzigd of staat op een andere plek: H2: Drie weken, vier vaste blokken. Geen wekenlange interviewrondes.
  FOUT  bestaande bodytekst ontbreekt, is gewijzigd of verplaatst: "Een nuchtere doorlichting van je organisatie op vijf dimensies: strategie, data, technologie, mensen en governance. Je weet binnen drie weken wat haalbaar is..."
  FOUT  bestaande bodytekst ontbreekt, is gewijzigd of verplaatst: "Drie weken, vier vaste blokken. Geen wekenlange interviewrondes."
  FOUT  structured data gewijzigd
  FOUT    voor: {"@context":"https://schema.org","@type":"Service","name":"AI Readiness Assessment","description":"Een nuchtere doorlichting van je organisatie op vijf dimen...
  FOUT    na:   {"@context":"https://schema.org","@type":"Service","name":"AI Readiness Assessment","description":"Een nuchtere doorlichting van je organisatie op vijf dimen...
  info  1 kop(pen) toegevoegd: H2: Twee tot drie weken, vier vaste blokken. Geen wekenlange interviewrondes.
  info  2 tekstblok(ken) toegevoegd, 4 woorden erbij
  info    + "Een nuchtere doorlichting van je organisatie op vijf dimensies: strategie, data, technologie, mensen en governance. Je weet binnen twee tot drie weken wat ha..."
  info    + "Twee tot drie weken, vier vaste blokken. Geen wekenlange interviewrondes."
  info  HTML: 34002 → 34035 bytes
✗ /diensten/executive-briefing
  FOUT  bestaande bodytekst ontbreekt, is gewijzigd of verplaatst: "Duur3 uur + voorbereiding"
  info  1 tekstblok(ken) toegevoegd, 1 woorden erbij
  info    + "Duur1 dagdeel incl. voorbereiding"
  info  HTML: 33170 → 33178 bytes

90 pagina's vergeleken met de nulmeting: 88 ongewijzigd, 0 met alleen toevoegingen, 2 met fouten.
```

Daarna is de nulmeting van deze twee URL's opnieuw vastgelegd.

Bewust **niet** aangepast, graag een besluit:

| Plek | Tekst | Waarom niet aangepast |
|---|---|---|
| `/diensten/ai-readiness-assessment`, kop van het case-blok | "Scale-up wist na drie weken wat níét te doen." | Gaat over één case (duur 3 weken) en valt binnen 2-3 weken |
| `/diensten/ai-readiness-assessment`, zelfde H2 | "vier vaste blokken", terwijl er drie staan (Week 1, 2, 3) | Geen doorlooptijd; viel buiten je opdracht |
| `/diensten/executive-briefing`: meta description, lede, deliverable | "Sessie van drie uur" | Beschrijft de sessie zelf en past binnen één dagdeel. Wil je ook hier "één dagdeel", dan wijzigt de meta description |
| `/diensten/executive-briefing`, cijfers in het resultaatblok | "3 uur" | Idem |
| `/tarieven`, `/ai-consultancy/ai-advies`, `/ai-workshop` | "een sessie van drie uur" | Andere pagina's dan de dienstpagina |
| `/ai-consultancy/ai-strategie`, `aria-label` van het diagram | "Het AI Readiness Assessment in drie weken" | Andere pagina; staat nu naast een blok dat 2-3 weken noemt |

## 3. Pilot 1: `/diensten/ai-readiness-assessment` (oudere pagina uit `src/data/*.js`)

**Plek:** eigen sectie direct na de feitenstrook en de prijsnotitie, vóór de eerste bestaande H2 ("Herkenbaar?"). De logo-carrousel staat nog op dezelfde plek, direct na de hero. Geen tabel: de dienst heeft geen pakketten.

### Diff van de bestaande pagina

Het template krijgt één import en één regel. Zonder blokdata rendert die regel niets; de andere vijf dienstpagina's zijn in de build ongewijzigd.

```diff
diff --git a/src/pages/diensten/[slug].astro b/src/pages/diensten/[slug].astro
index f89d01c..96ee1e5 100644
--- a/src/pages/diensten/[slug].astro
+++ b/src/pages/diensten/[slug].astro
@@ -4,6 +4,7 @@ import PageHero from '../../components/PageHero.astro';
 import Steps from '../../components/Steps.astro';
 import Accordion from '../../components/Accordion.astro';
 import CTA from '../../components/CTA.astro';
+import RagBlok from '../../components/RagBlok.astro';
 import { services, getService } from '../../data/services.js';
 import { getCase } from '../../data/cases.js';
 import { site } from '../../data/site.js';
@@ -55,6 +56,8 @@ const schema = {
     <div class="container"><p class="price-note">{service.priceNote} Bedragen zijn exclusief btw en reiskosten.</p></div>
   </section>
 
+  <RagBlok pagina={`/diensten/${service.slug}`} />
+
   <section class="section-sm problem">
     <div class="container problem-grid">
       <div>
```

Nieuwe bestanden in deze commit: `src/data/rag/blokken/diensten-ai-readiness-assessment.ts` (het blok) en de dienstfeiten in `src/data/rag/diensten.ts`.

### Ruwe HTML (uit `curl`, zonder JavaScript)

```html
<section class="rag-blok">
<h2>Wat levert de AI Readiness Assessment op en wat kost die?</h2>
<p class="rag-blok__antwoord">De AI Readiness Assessment van Dave Willemstein laat organisaties die AI overwegen maar nog geen richting hebben gekozen zien wat haalbaar is en wat eerst moet. Het resultaat is een readiness-score op strategie, data, technologie, mensen en governance, een gap-analyse en een 90-dagenplan. De doorlichting duurt 2-3 weken en kost €7.000, als vaste prijs exclusief btw en reiskosten.</p>
<h3>Hoe lang duurt de AI Readiness Assessment?</h3>
<p>2-3 weken. In die periode doet Dave Willemstein voor de AI Readiness Assessment een documentenanalyse, een datascan en 8 tot 12 interviews, gevolgd door de scoring, de prioritering en een eindsessie.</p>
<h3>Is de prijs van de AI Readiness Assessment een vaste prijs?</h3>
<p>Ja. De AI Readiness Assessment van Dave Willemstein kost €7.000 als vaste prijs, en de eindpresentatie aan MT of board zit daarbij in. Het bedrag is exclusief btw en reiskosten.</p>
<h3>Wordt een Executive Briefing verrekend met de AI Readiness Assessment?</h3>
<p>Ja. De <a href="/diensten/executive-briefing">Executive Briefing</a> van Dave Willemstein kost €2.800 en wordt volledig verrekend bij een start met de AI Readiness Assessment binnen 60 dagen.</p>
<p class="rag-blok__bron">Bron: <a href="/tarieven">tarieven en doorlooptijden van Dave Willemstein</a>. Bijgewerkt: <time datetime="2026-10">oktober 2026</time>.</p>
</section>
```

### Voor- en na-controle

```
✓ /diensten/ai-readiness-assessment
  info  4 kop(pen) toegevoegd: H2: Wat levert de AI Readiness Assessment op en wat kost die? | H3: Hoe lang duurt de AI Readiness Assessment? | H3: Is de prijs van de AI Readiness Assessment een vaste prijs? | H3: Wordt een Executive Briefing verrekend met de AI Readiness Assessment?
  info  9 tekstblok(ken) toegevoegd, 192 woorden erbij
  info    + "Wat levert de AI Readiness Assessment op en wat kost die?"
  info    + "De AI Readiness Assessment van Dave Willemstein laat organisaties die AI overwegen maar nog geen richting hebben gekozen zien wat haalbaar is en wat eerst mo..."
  info    + "Hoe lang duurt de AI Readiness Assessment?"
  info    + "2-3 weken. In die periode doet Dave Willemstein voor de AI Readiness Assessment een documentenanalyse, een datascan en 8 tot 12 interviews, gevolgd door de s..."
  info    + "Is de prijs van de AI Readiness Assessment een vaste prijs?"
  info    + "Ja. De AI Readiness Assessment van Dave Willemstein kost €7.000 als vaste prijs, en de eindpresentatie aan MT of board zit daarbij in. Het bedrag is exclusie..."
  info    + "Wordt een Executive Briefing verrekend met de AI Readiness Assessment?"
  info    + "Ja. De Executive Briefing van Dave Willemstein kost €2.800 en wordt volledig verrekend bij een start met de AI Readiness Assessment binnen 60 dagen."
  info    + "Bron: tarieven en doorlooptijden van Dave Willemstein. Bijgewerkt: oktober 2026."
  info  2 link(s) toegevoegd: main | /diensten/executive-briefing | Executive Briefing ; main | /tarieven | tarieven en doorlooptijden van Dave Willemstein
  info  HTML: 34035 → 37128 bytes

1 pagina's vergeleken met de nulmeting: 0 ongewijzigd, 1 met alleen toevoegingen, 0 met fouten.
```

Title, meta description, canonical, robots-meta, H1, alle bestaande koppen, de volledige bodytekst in dezelfde volgorde, alle links en ankerteksten, de structured data, de afbeeldingen en de scripts zijn identiek aan de nulmeting.

## 4. Pilot 2: `/ai-consultancy/ai-strategie` (Markdown-pagina uit de contentplanning, `schema: service`)

**Plek:** in de lopende tekst, vóór de eerste H2 ("Wat is een AI strategie?"). Die bestaande kop stelt een andere vraag (definitie) dan het blok (kosten en doorlooptijd), dus het blok heeft een eigen vraagkop. Bloktype "dienstenoverzicht": per situatie de passende dienst, met doorlooptijd en prijs uit `prijzen.ts`.

### Diff van de bestaande pagina

Het Markdown-bestand is **niet** gewijzigd (`git diff` over `src/content/` is leeg). De remark-plugin plaatst het blok bij het renderen.

```diff
diff --git a/astro.config.mjs b/astro.config.mjs
index 08d78df..7626131 100644
--- a/astro.config.mjs
+++ b/astro.config.mjs
@@ -1,5 +1,6 @@
 import { defineConfig } from 'astro/config';
 import { services } from './src/data/services.js';
+import { remarkRagBlok } from './src/lib/remark-rag-blok.js';
 
 // Vervangt {{price:slug}}, {{pricelc:slug}} (midden in een zin) en {{timing:slug}} in Markdown door de waarden uit services.js,
 // zodat prijzen op nieuwe pagina's altijd 1-op-1 gelijk zijn aan de dienstpagina's.
@@ -27,5 +28,5 @@ export default defineConfig({
   site: 'https://freelanceaiconsultant.com',
   output: 'static',
   trailingSlash: 'never',
-  markdown: { remarkPlugins: [remarkServiceTokens] },
+  markdown: { remarkPlugins: [remarkServiceTokens, remarkRagBlok] },
 });
diff --git a/src/pages/[...slug].astro b/src/pages/[...slug].astro
index 8e6cfc2..46ddcdb 100644
--- a/src/pages/[...slug].astro
+++ b/src/pages/[...slug].astro
@@ -7,6 +7,7 @@ import { site } from '../data/site.js';
 import { services } from '../data/services.js';
 import { protectedUrls } from '../data/protected-urls.js';
 import '../styles/content-pages.css';
+import '../styles/rag-blok.css';
 
 export async function getStaticPaths() {
   const entries = await getCollection('pages');
```

Nieuw bestand in deze commit: `src/data/rag/blokken/ai-consultancy-ai-strategie.ts`.

### Ruwe HTML (uit `curl`, zonder JavaScript)

```html
<section class="rag-blok">
<h2>Wat kost het om een AI strategie te laten ontwikkelen en hoe lang duurt het?</h2>
<p class="rag-blok__antwoord">Een AI strategie laten ontwikkelen door Dave Willemstein kan in één traject met de <a href="/diensten/ai-strategy-sprint">AI Strategy Sprint</a>, die 4-6 weken duurt en €15.400 - €22.400 kost. Wie eerst wil weten wat haalbaar is, start met het <a href="/diensten/ai-readiness-assessment">AI Readiness Assessment</a> van 2-3 weken voor €7.000. Beide bedragen zijn exclusief btw en reiskosten.</p>
<div class="rag-blok__tabel">
<table>
<caption>AI strategie ontwikkelen: passende dienst per situatie</caption>
<thead><tr><th scope="col">Situatie</th><th scope="col">Resultaat</th><th scope="col">Doorlooptijd</th><th scope="col">Prijs</th><th scope="col">Passende dienst</th></tr></thead>
<tbody>
<tr><th scope="row">Onduidelijk wat haalbaar is met de huidige organisatie, data en systemen</th><td>Readiness-score per dimensie, gap-analyse en 90-dagenplan</td><td>2-3 weken</td><td>€7.000</td><td><a href="/diensten/ai-readiness-assessment">AI Readiness Assessment</a></td></tr>
<tr><th scope="row">Strategie en roadmap in één keer vastleggen, met de beslissers aan tafel</th><td>Board-ready strategie, prioriteitenmatrix en use-case roadmap</td><td>4-6 weken</td><td>€15.400 - €22.400</td><td><a href="/diensten/ai-strategy-sprint">AI Strategy Sprint</a></td></tr>
</tbody>
</table>
</div>
<h3>Is een AI strategie goedkoper als er al een AI Readiness Assessment ligt?</h3>
<p>Ja. De AI Strategy Sprint van Dave Willemstein kost €15.400 - €22.400: de onderkant geldt als er al een AI Readiness Assessment ligt, de bovenkant bij meerdere bedrijfsonderdelen.</p>
<h3>Kan de uitkomst zijn dat een organisatie nog niet klaar is voor een AI strategie?</h3>
<p>Ja. Het AI Readiness Assessment van Dave Willemstein kan uitwijzen dat het fundament eerst op orde moet. De organisatie krijgt dan een plan voor het fundament in plaats van een plan voor use cases.</p>
<p class="rag-blok__bron">Bron: <a href="/tarieven">tarieven en doorlooptijden van Dave Willemstein</a>. Bijgewerkt: <time datetime="2026-10">oktober 2026</time>.</p>
</section>
```

### Voor- en na-controle

```
✓ /ai-consultancy/ai-strategie
  info  3 kop(pen) toegevoegd: H2: Wat kost het om een AI strategie te laten ontwikkelen en hoe lang duurt het? | H3: Is een AI strategie goedkoper als er al een AI Readiness Assessment ligt? | H3: Kan de uitkomst zijn dat een organisatie nog niet klaar is voor een AI strategie?
  info  23 tekstblok(ken) toegevoegd, 225 woorden erbij
  info    + "Wat kost het om een AI strategie te laten ontwikkelen en hoe lang duurt het?"
  info    + "Een AI strategie laten ontwikkelen door Dave Willemstein kan in één traject met de AI Strategy Sprint, die 4-6 weken duurt en €15.400 - €22.400 kost. Wie eer..."
  info    + "AI strategie ontwikkelen: passende dienst per situatie"
  info    + "Situatie"
  info    + "Resultaat"
  info    + "Doorlooptijd"
  info    + "Prijs"
  info    + "Passende dienst"
  info    + "Onduidelijk wat haalbaar is met de huidige organisatie, data en systemen"
  info    + "Readiness-score per dimensie, gap-analyse en 90-dagenplan"
  info    + "2-3 weken"
  info    + "€7.000"
  info    + "AI Readiness Assessment"
  info    + "Strategie en roadmap in één keer vastleggen, met de beslissers aan tafel"
  info    + "Board-ready strategie, prioriteitenmatrix en use-case roadmap"
  info    + "4-6 weken"
  info    + "€15.400 - €22.400"
  info    + "AI Strategy Sprint"
  info    + "Is een AI strategie goedkoper als er al een AI Readiness Assessment ligt?"
  info    + "Ja. De AI Strategy Sprint van Dave Willemstein kost €15.400 - €22.400: de onderkant geldt als er al een AI Readiness Assessment ligt, de bovenkant bij meerde..."
  info    + "Kan de uitkomst zijn dat een organisatie nog niet klaar is voor een AI strategie?"
  info    + "Ja. Het AI Readiness Assessment van Dave Willemstein kan uitwijzen dat het fundament eerst op orde moet. De organisatie krijgt dan een plan voor het fundamen..."
  info    + "Bron: tarieven en doorlooptijden van Dave Willemstein. Bijgewerkt: oktober 2026."
  info  5 link(s) toegevoegd: main | /diensten/ai-strategy-sprint | AI Strategy Sprint ; main | /diensten/ai-readiness-assessment | AI Readiness Assessment ; main | /diensten/ai-readiness-assessment | AI Readiness Assessment ; main | /diensten/ai-strategy-sprint | AI Strategy Sprint ; main | /tarieven | tarieven en doorlooptijden van Dave Willemstein
  info  tabellen: 0 → 1
  info  HTML: 34177 → 37931 bytes

1 pagina's vergeleken met de nulmeting: 0 ongewijzigd, 1 met alleen toevoegingen, 0 met fouten.
```

## 5. Uitvoer van de blokcontroles

```
✓ /ai-consultancy/ai-strategie  (concept: teksten nog niet beoordeeld)
✓ /diensten/ai-readiness-assessment  (concept: teksten nog niet beoordeeld)

2 RAG-blok(ken) in de databron, 0 pagina('s) met fouten, 2 concept(en) nog te beoordelen.
```

## 6. Concepten ter beoordeling

Alle teksten in beide blokken zijn concept (`concept: true` in de databron; `check-rag.mjs` meldt ze bij elke build). Ze zijn geschreven op basis van de bestaande paginatekst en `prijzen.ts`. Prijzen en doorlooptijden zijn niet getypt maar komen via tokens uit `prijzen.ts`. De volledige tekst staat in de ruwe HTML hierboven.

Herkomst per onderdeel:

| Blok | Onderdeel | Gebaseerd op |
|---|---|---|
| Readiness Assessment | Antwoordalinea | `lede`, `deliverables`, `bestFor`, `priceNote` en de prijsregel in het template |
| Readiness Assessment | "Hoe lang duurt ...?" | `approach` (week 1 tot en met 3) |
| Readiness Assessment | "Is de prijs ... een vaste prijs?" | `priceNote` |
| Readiness Assessment | "Wordt een Executive Briefing verrekend ...?" | `priceNote` van de Executive Briefing in `prijzen.ts` |
| AI strategie | Antwoordalinea en tabel | Alinea's onder "AI maturity en AI readiness bepalen" en "Van strategie naar roadmap" |
| AI strategie | "Is een AI strategie goedkoper als ...?" | `priceNote` van de AI Strategy Sprint |
| AI strategie | "Kan de uitkomst zijn dat ...?" | Alinea "Soms is de uitkomst dat je nog niet klaar bent" |
| Beide | Bronregel "tarieven en doorlooptijden van Dave Willemstein", gelinkt naar `/tarieven` | Eigen voorstel |

De vervolgvragen wijken af van de bestaande FAQ op dezelfde pagina; de controle bewaakt dat.

## 7. Voorstellen per dienst: resultaatzin, doelgroepzin, afzender

Alleen de eerste rij staat in de databron (nodig voor de pilot, gemarkeerd als voorstel). De andere vijf staan hier ter beoordeling en zijn nog nergens ingevoerd. Bron is steeds `deliverables` en "best passend bij" in `services.js`.

| Dienst | Voorstel resultaatzin | Voorstel doelgroepzin |
|---|---|---|
| AI Readiness Assessment | De AI Readiness Assessment levert een readiness-score op vijf dimensies, een gap-analyse en een 90-dagenplan met eigenaren en beslismomenten op. | Organisaties die AI serieus overwegen maar nog geen richting hebben gekozen, en MT's die een investeringsvoorstel moeten onderbouwen. |
| AI Strategy Sprint | De AI Strategy Sprint levert een board-ready AI-strategie en een use-case roadmap op, met een prioriteitenmatrix en business-case outlines. | Organisaties die AI serieus willen inzetten maar niet weten waar te beginnen, en focus en richting zoeken voor de komende 12 tot 18 maanden. |
| Fractional AI Lead | De Fractional AI Lead levert eigenaarschap van de AI-portfolio op, met een besliskader, een maandelijkse rapportage en een overdrachtsplan. | Organisaties met lopende AI-initiatieven zonder duidelijke eigenaar, die koers en capaciteit nodig hebben maar nog geen fulltime rol kunnen dragen. |
| Vendor Review | De Vendor Review levert een onderbouwd selectieadvies op, met ingevulde scorecards, een TCO-vergelijking over drie jaar en een beslisdocument voor procurement en board. | Organisaties waar meerdere partijen intern een andere voorkeur hebben en waar de keuze achteraf uit te leggen moet zijn. |
| Executive Briefing | De Executive Briefing levert een gedeeld beeld van AI op, met een beslisagenda en een vragenlijst voor toezicht. | RvC's, RvT's en directieteams die een gedeeld vertrekpunt missen of aan de vooravond van een grote AI-investering staan. |
| AI Due Diligence | De AI Due Diligence levert een DD-rapport met een expliciet oordeel op, plus een overzicht van red flags, gescheiden in deal-breakers en onderhandelpunten. | Investeerders en corporate-development-teams bij AI-overnames, en organisaties die een strategische AI-leverancier binnenhalen. |

**Afzender, voor alle zes:** "Dave Willemstein" (`site.name`). De naam staat op één plek (`afzender` in `src/lib/rag-blok.js`) en komt via het token `{{afzender}}` in elke alinea. Wijzigen is één regel.

**Laatst gecontroleerd:** voor de AI Readiness Assessment staat 2026-10-06. Reden: op die dag heb je bevestigd dat de prijzen vastgesteld zijn en dat de doorlooptijd 2-3 weken is. Klopt die lezing niet, dan is dit het veld om aan te passen.

## 8. Wat ik niet heb gecontroleerd of niet heb gedaan

- **Geen visuele controle in een browser.** De opmaak is geschreven tegen de bestaande tokens en de tabel staat in een container met `overflow-x: auto`, maar het handmatige punt "leest op mobiel zonder horizontaal scrollen van de pagina" is niet nagelopen. Dat geldt ook voor de andere vier handmatige punten uit de briefing: die zijn aan jou.
- **Plaatsing onder een bestaande kop** is gebouwd en los getest (geen eigen `h2`, blok direct onder de kop), maar komt in deze pilot niet voor. 37 van de 55 contentpagina's gaan dat pad gebruiken.
- **De nulmeting van de twee pilotpagina's is niet bijgewerkt.** Ze blijven daardoor als "alleen toevoegingen" in de controle staan tot je akkoord geeft; daarna leg ik ze opnieuw vast.
- **Geen structured data toegevoegd** (stap 8) en geen `docs/rag-blok.md` (stap 9).
- **Niets met "20+ jaar ervaring" of de illustratieve cijfers** in een blok.

## 9. Beslispunten voor de uitrol

1. **Links per alinea.** Elke genoemde dienst is in het blok minstens één keer gelinkt, en elke tabelrij eindigt met een link. In de vervolgvragen staat de dienstnaam zonder link als die eerder in het blok al gelinkt is. De schrijfrichtlijn van de site zegt maximaal één link per doel-URL per pagina; de pagina `/ai-consultancy/ai-strategie` linkt in de bestaande tekst ook al naar beide diensten. Met het blok erbij zijn dat er nu drie per dienst. Akkoord, of wil je het strakker?
2. **De of het.** De dienstpagina en `/tarieven` schrijven "de AI Readiness Assessment", de pagina over AI strategie schrijft "het AI Readiness Assessment". Elk blok volgt nu de pagina waar het op staat. Eén keuze voor alle blokken is beter.
3. **Bronregel.** Voorstel staat in hoofdstuk 6. Graag bevestigen of aanpassen.
4. **De teksten uit hoofdstuk 2 die nog "drie weken" of "drie uur" zeggen.**

## 10. Datagaten (bijgewerkt)

Aanvulling op hoofdstuk 8 van `docs/rag-inventarisatie.md`. Deze diensten hebben geen prijs of doorlooptijd in de databron en krijgen daarom geen prijsclaim in een blok:

| Aanbod | Pagina's | Ontbreekt |
|---|---|---|
| AI workshop en training | `/ai-workshop`, `/ai-workshop/chatgpt-training`, `/ai-workshop/copilot-training`, `/ai-workshop/ai-geletterdheid-training` | Vanaf-prijs of bandbreedte, doorlooptijd |
| AI coaching | `/ai-workshop/ai-coaching` | Prijs, doorlooptijd |
| Second opinion en afgebakend advies | `/ai-consultancy/ai-advies` | Prijs, doorlooptijd |
| Assessment voor één afdeling | FAQ op `/diensten/ai-readiness-assessment` | Prijs |
| Fractional AI Lead, per niveau | `/diensten/fractional-ai-lead` | Resultaat en "past bij" per niveau (Advies, Lead, Lead+) |
| Vijf diensten | Alle dienstpagina's behalve de AI Readiness Assessment | Akkoord op resultaatzin en doelgroepzin (hoofdstuk 7), datum laatst gecontroleerd |
| Cases | Alle zes | Geverifieerde cijfers; cases krijgen voorlopig geen blok |

Ongewijzigd uit jouw besluit: `/tarieven` krijgt bij de uitrol alleen een vraagkop, antwoordalinea en bronregel rond de bestaande tabel, geen tweede tabel.
