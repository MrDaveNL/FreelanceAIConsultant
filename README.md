# freelanceaiconsultant.com — Dave Willemstein

Astro-site voor het onafhankelijke AI-adviespraktijk van Dave Willemstein. Volledig data-gedreven: alle content staat in `src/data/`, de pagina's zijn templates.

## Draaien

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # naar ./dist
npm run preview  # preview van de build
```

## Routes (34 pagina's + 404)

| Route | Bron |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/diensten` | overzicht met vergelijkingstabel |
| `/diensten/[slug]` | 6 dienstpagina's uit `src/data/services.js` |
| `/cases` | overzicht met werkende sectorfilters |
| `/cases/[slug]` | 6 casepagina's uit `src/data/cases.js` |
| `/werkwijze` | 4 stappen uitgewerkt, modellen, inkoopinfo |
| `/inzichten` | overzicht met categoriefilters en nieuwsbrief |
| `/inzichten/[slug]` | 12 artikelen uit `src/data/articles/` |
| `/over` | profiel, achtergrond, principes |
| `/contact` | intakeformulier met validatie |
| `/veelgestelde-vragen` | 24 vragen in 5 groepen (FAQPage-schema) |
| `/privacy`, `/algemene-voorwaarden` | juridische pagina's |
| `/404` | foutpagina met doorverwijzingen |
| `/sitemap.xml`, `/rss.xml`, `/robots.txt` | automatisch gegenereerd |

## Content aanpassen

Alle teksten, prijzen en cijfers staan los van de templates:

- **`src/data/site.js`** — naam, e-mail, LinkedIn, beschikbaarheid, KvK/btw, metrics, principes.
- **`src/data/services.js`** — de 6 diensten: prijs, duur, deliverables, FAQ, proof, meta-description.
- **`src/data/cases.js`** — de 6 cases, testimonials en de sectorfilters.
- **`src/data/articles/`** — één bestand per artikel; nieuw artikel toevoegen = bestand maken en importeren in `index.js`.
- **`src/data/faq.js`** — veelgestelde vragen en inkoopblokken.
- **`src/data/process.js`** — de vier stappen, verwachtingen, samenwerkingsvormen.

Een nieuwe dienst, case of artikel verschijnt automatisch in de overzichten, de filters, de sitemap, de RSS-feed en de interne verwijzingen.

## Formulieren activeren

Zonder configuratie vallen het contactformulier en de nieuwsbriefaanmelding terug op een vooringevulde e-mail.

**Contactformulier.** Verstuurt via [Web3Forms](https://web3forms.com). Maak daar een access key aan voor het adres waarop de aanvragen moeten binnenkomen en zet die in `src/data/site.js`:

```js
formAccessKey: '...',
```

De key is bedoeld om in de browser te staan en is dus geen geheim. Beperk hem in het Web3Forms-dashboard wel tot het eigen domein. Een andere dienst of CRM gebruiken kan door `formEndpoint` te vullen; die krijgt dezelfde JSON gepost en moet met 2xx antwoorden.

**Nieuwsbrief.** Zet een POST-endpoint in `newsletterEndpoint`; het formulier post `{ email }` als JSON en verwacht een 2xx-respons.

Het contactformulier heeft clientside-validatie, een honeypot-veld tegen bots en een zichtbare status na verzending.

## Vóór livegang — verplicht nalopen

Deze site is inhoudelijk compleet, maar een aantal zaken moet je verifiëren omdat ze niet van buitenaf te controleren zijn:

1. **Registratiegegevens.** `site.legal` in `src/data/site.js` bevat voorbeeldwaarden voor KvK-nummer, btw-nummer en vestigingsplaats. Vul de echte in — ze staan in de footer en op beide juridische pagina's.
2. **Juridische teksten.** `privacy.astro` en `algemene-voorwaarden.astro` zijn een werkbare basis, geen juridisch advies. Laat ze toetsen en stem de privacyverklaring af op je feitelijke verwerkingen en verwerkers.
3. **Cijfers, cases en quotes.** De metrics op de homepage, de resultaten in de cases en de testimonials zijn illustratief ingevuld. Vervang ze door geverifieerde cijfers en gebruik quotes alleen met toestemming van de opdrachtgever.
4. **Prijzen.** De bedragen in `services.js` zijn plausibele marktprijzen, geen vastgestelde tarieven. Controleer ze voordat ze publiek staan.
5. **Contactgegevens.** E-mailadres en LinkedIn-URL in `site.js` moeten bestaan en werken.
6. **Portret.** `public/images/dave-portrait.jpg` is nog de foto uit het oorspronkelijke prototype. Vervang hem door een eigen foto.

## Designtokens

| Token | Waarde |
| --- | --- |
| Cream | `#F3E7D2` |
| Burgundy | `#4A1F2A` |
| Mustard | `#F3C43E` |
| Salmon | `#EF7C6C` |
| Dusty aqua | `#A6D8D4` |
| Sand | `#DCC29A` |

Typografie: Space Grotesk (tekst) en Caveat (handgeschreven accenten), beide via Google Fonts.

## Techniek

- Astro 5, statische output, geen UI-framework en geen buildafhankelijkheden buiten Astro zelf.
- Alle interactie is vanilla JS in component-scripts: mobiel menu, filters, formulieren.
- Per pagina: canonical URL, Open Graph, Twitter Card en JSON-LD (`ProfessionalService`, `Service`, `Article`, `BlogPosting`, `Person`, `ContactPage`, `FAQPage`).
- Toegankelijkheid: skip-link, zichtbare focusstates, één `h1` per pagina, labels bij alle formuliervelden, `prefers-reduced-motion`.
