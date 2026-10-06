# Schrijfrichtlijn nieuwe contentpagina's

Geldt voor alle ID's uit `planning/Content_planning_tabblad1_ClaudeCode.xlsx`. De planning per pagina staat als JSON in `planning/specs/<ID>.json`; alle URL's staan in `planning/link-registry.md`. Voorbeeldpagina: `src/content/pages/tarieven/index.md` (P04).

## 1. Harde regels uit de planning

1. Bestaande URL's (B01–B35 in `planning/link-registry.md`) en hun bronbestanden (`src/pages/*`, `src/data/*`) **nooit** wijzigen. Alleen lezen en ernaar linken.
2. Geen aparte pagina's per doelgroep; bedrijven/MKB zijn H2's op de hub.
3. Instap-CTA = `/diensten/ai-readiness-assessment`.
4. Alleen ID's uit de planning maken. Vervallen ID's niet.
5. Kolom "Overlap met bestaande content" per pagina volgen: lees de genoemde bestaande pagina's (`src/data/articles/*.js`, `src/data/services.js`, `src/data/cases.js`, `src/data/faq.js`) vóór het schrijven, spreek ze nooit tegen en schrijf ze niet opnieuw uit: kort samenvatten + link.

## 2. Waarheid: niets verzinnen

Dit is de belangrijkste regel. Bij twijfel: weglaten.

- **Wat Dave wel en niet doet** (bron: `src/data/faq.js`, `src/data/services.js`, `src/pages/over.astro`):
  - Dave Willemstein is een **onafhankelijk AI-adviseur** die alleen werkt. Hij adviseert, maakt strategie en roadmaps, selecteert leveranciers, toetst business cases, richt governance in en **begeleidt implementaties vanuit de kant van de klant**.
  - Hij **bouwt en verkoopt zelf geen software, AI-agents, modellen of implementaties** ("Verkoop je ook implementatie? Nee."). Bouwen doet het interne team van de klant of een partner die de klant **rechtstreeks** contracteert; Dave rekent **geen marge** op partners en heeft geen commissies, affiliate-deals of partnerstatus bij leveranciers.
  - Pagina's over development, AI software, AI oplossingen of "AI agent laten maken" gaan dus over: wat erbij komt kijken, hoe je kiest tussen bouwen/kopen/partner, hoe je een bouwpartij selecteert en aanstuurt, en hoe Dave daarbij onafhankelijk begeleidt. Schrijf nooit "ik bouw", "wij ontwikkelen", "wij leveren", "ons team".
  - Diensten die bestaan: AI Readiness Assessment, AI Strategy Sprint, Fractional AI Lead, Vendor Review, Executive Briefing, AI Due Diligence. Daarnaast workshops, trainingen, second opinions en afgebakend advies tegen een vaste prijs per opdracht (geen bedrag noemen; nooit een dag- of uurtarief of het woord "dagtarief"). Verzin geen andere producten, pakketnamen, certificaten of garanties.
  - Hij werkt in Nederland, België en Duitsland, in het Nederlands of Engels.
- **Prijzen en doorlooptijden** alleen via tokens, nooit hardcoded: `{{price:slug}}`, `{{pricelc:slug}}` (als de prijs midden in een zin staat, geeft "vanaf" i.p.v. "Vanaf"), `{{timing:slug}}`. De slugs zijn: `ai-readiness-assessment`, `ai-strategy-sprint`, `fractional-ai-lead`, `vendor-review`, `executive-briefing`, `ai-due-diligence`. Alle bedragen zijn exclusief btw en reiskosten.
- **Geen verzonnen ervaring of bewijs**: geen jaren ervaring, aantallen trajecten, klantnamen, resultaten, percentages, testimonials of anekdotes ("bij een klant zag ik…"). Algemene uitspraken over de werkwijze (zoals op `/werkwijze` en in `faq.js`) mogen wel. De bestaande cases mag je noemen en linken op onderwerp, maar **neem geen cijfers uit de cases over** (die zijn volgens de README illustratief).
- Waar de planning om een eigen case, resultaat of praktijkvoorbeeld vraagt, schrijf je een **voorbeeldscenario** (zie hieronder). Geen PLACEHOLDER-markers, TODO's of promptresten in de pagina's.

### Voorbeeldscenario's (sinds 23 september 2026)

Fictief, maar realistisch, en altijd zichtbaar als voorbeeld gelabeld. Nooit presenteren als echte klant of eigen resultaat.

```html
<aside class="scenario" aria-label="Voorbeeldscenario">
<p class="scenario-label">Voorbeeldscenario</p>
<p>Situatie in één of twee zinnen: type organisatie, omvang, vraag.</p>
<p>Aanpak: wat er gebeurt, met de rol van "de adviseur" vanuit klantzijde (adviseren, toetsen, begeleiden; nooit bouwen). Noem Dave niet bij naam en gebruik geen "ik" in een scenario.</p>
<p>Uitkomst: concrete, realistische cijfers en wat er bewust níet is gedaan.</p>
<p class="scenario-note">Fictief voorbeeld, samengesteld uit situaties die veel voorkomen. Organisatie en cijfers zijn illustratief.</p>
</aside>
```

- 90–160 woorden. Geen bedrijfs-, persoons- of plaatsnamen; wel type, sector en omvang ("een groothandel met 85 medewerkers").
- Cijfers realistisch en intern consistent (uren × tarief klopt, percentages passen bij de omvang). Liever bescheiden dan spectaculair.
- Werk in de tijdsvorm van een scenario ("Een groothandel wil…", "Na zes weken…"), niet "bij een klant van mij".
- Prijzen van Dave alleen via tokens. Geen Markdown en geen links binnen het blok.
- **Externe feiten** (wetgeving en data, eigenschappen of prijzen van tools, salarissen, marktcijfers, sectorregels, statistieken) alleen als je ze **in deze sessie** hebt gecontroleerd met WebSearch/WebFetch bij een primaire of gezaghebbende bron (EUR-Lex, Rijksoverheid, AP, Europese Commissie, officiële productpagina's, CBS, gerenommeerde salarisbronnen). Zet elke gebruikte bron in `sources` en link bij voorkeur ook inline. Wat snel verandert (tools, prijzen, features), vermeld je met "stand september 2026". Kun je het niet verifiëren: weglaten of algemeen formuleren. Geen verzonnen statistieken, nooit.
- **AI Act**: controleer de actuele status, inclusief eventuele wijzigingen of uitstel (zoals het Digital Omnibus-pakket) per september 2026. Noem geen datum die je niet hebt geverifieerd.
- Het is nu **23 september 2026**.

## 3. Bestandsformaat

Pad: `src/content/pages/` + het deel van "Output bestandspad" na `content/`, bijvoorbeeld `content/ai-consultancy/index.md` wordt `src/content/pages/ai-consultancy/index.md`.

```yaml
---
id: C1-00                       # ID uit de planning
url: /ai-consultancy            # URL uit de planning, zonder slash aan het eind
parent: null                    # Parent ID of null
cluster: "1. AI Consultancy & Advies"
pageType: Hub                   # Paginatype uit de planning
schema: service                 # service als Structured data met "Service" begint; anders article
navLabel: AI Consultancy        # Navigatielabel, exact
title: "…"                      # H1, exact uit de planning
metaTitle: "…"                  # exact uit de planning (max. 60)
metaDescription: "…"            # exact uit de planning (120–160)
keyphrase: ai consultancy       # Primaire keyphrase, exact
eyebrow: "AI consultancy"       # kort label boven de H1
lede: "…"                       # intro van 2–3 zinnen; primaire keyphrase erin
primaryCta: { label: "Plan een adviesgesprek", href: /contact }
secondaryCta: { label: "Bekijk het AI Readiness Assessment", href: /diensten/ai-readiness-assessment }
summary: ["…", "…", "…"]        # 3 kernpunten ("In het kort")
published: "2026-09-23"
updated: "2026-09-23"
faqTitle: "Veelgestelde vragen over AI consultancy"   # exact de FAQ-H2 uit de planning
faq:
  - q: "…"
    a: "…"                      # platte tekst, geen links, geen Markdown
sources:                        # alleen externe bronnen die je echt hebt gecontroleerd
  - title: "…"
    url: "https://…"
---
```

CTA-mapping: "Plan een adviesgesprek" → `/contact`; "Bekijk het AI Readiness Assessment" → `/diensten/ai-readiness-assessment`; "Lees meer over X" → de URL van hub X.

- De **H1 komt uit de frontmatter**; de body begint met de eerste H2.
- Volg de **H1-H3-structuur uit de planning exact** (zelfde koptekst, zelfde niveau, zelfde volgorde). Extra H3's mogen alleen als het echt nodig is.
- De FAQ-H2 ("Veelgestelde vragen…") staat **niet** in de body: de vragen gaan in `faq` en `faqTitle` is de koptekst uit de planning. Geef 4–6 vragen die nog niet op `/veelgestelde-vragen` beantwoord worden (lees `src/data/faq.js`).
- Heeft de planning **geen** FAQ-H2, laat `faq` en `faqTitle` dan weg.
- **Minimaal één eigen diagram**, als HTML-blok met lege regels ervoor en erna:

```html
<figure class="diagram" role="img" aria-label="Beschrijvende tekst van wat het diagram laat zien">
<ol class="flow">
<li><b>Stap</b>Korte toelichting</li>
</ol>
<figcaption>Onderschrift.</figcaption>
</figure>
```

  Voor een 2×2-vergelijking gebruik je `<div class="matrix"><div><b>Titel</b>tekst</div>…</div>` in plaats van `<ol class="flow">`. Markdown-tabellen mogen ook.
- Geen afbeeldingen of stockfoto's toevoegen.

## 4. Interne links

- Alle pagina's in `planning/link-registry.md` worden gebouwd. Link er dus **direct** naar met de echte URL; LINK-TODO-markers zijn niet nodig.
- Minimaal: alle links uit "Interne links (uitgaand)". Hubs linken naar al hun spokes (alle ID's met dit ID als Parent), spokes linken terug naar hun hub. Voeg zelf extra relevante links toe naar nieuwe en bestaande pagina's (cases, inzichten, diensten, `/inzichten/ai-adoptie-begint-bij-het-werk`).
- Links staan contextueel in de lopende tekst, bij de eerste relevante vermelding, met beschrijvende en gevarieerde ankertekst. Geen "klik hier", niet steeds exact de keyphrase van de doelpagina, geen links in koppen.
- Maximaal **één link per doel-URL per pagina** in de body. Nooit naar de pagina zelf linken. URL's zonder slash aan het eind.
- Markdown-syntaxis: `[ankertekst](/pad)`.

## 5. Stijl

- Nederlands voor de NL-markt, jij/je-vorm, ik-perspectief van Dave. Nuchter, direct en concreet, zonder hype of superlatieven. Lees `src/data/articles/waarom-ai-pilots-blijven-steken.js` en `src/pages/over.astro` voor de toon.
- Korte alinea's, concrete voorbeelden (generiek, geen verzonnen klantverhalen) en checklists waar dat helpt.
- De primaire keyphrase komt natuurlijk terug in de lede, de eerste alinea en minstens één H2. Secundaire zoekwoorden verwerk je waar ze natuurlijk passen, nooit als opsomming.
- Woordaantal: kolom "Woorden (indicatie)", gerekend over body, FAQ en lede. Mik op het midden.
- Gebruik "AI Act" of "AI-verordening", en "AVG".

## 6. Controle

Draai na elke pagina `node planning/check-content.mjs src/content/pages/<pad>/index.md` en los alle ERRORs op. Draai **geen** `astro build`; dat doet de coördinator.
