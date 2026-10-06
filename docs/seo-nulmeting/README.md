# SEO-nulmeting

Stand: 6 oktober 2026. Bron: de ruwe HTML van een verse build (`npm run build`, 90 pagina's). De oude `dist/` is niet gebruikt en de site is niet live, dus er is geen meting van een productie-URL.

Eén JSON-bestand per URL. De bestandsnaam is het pad met `__` in plaats van `/`; de homepage is `home.json`. Dit is de referentie voor elke latere voor- en na-controle.

Opnieuw meten (overschrijft deze map, alleen doen vóór de eerste wijziging aan een pagina):

```
npm run build
python docs/seo-nulmeting/_nulmeting.py <pad-naar-repo> <pad-naar-samenvatting.json>
```

Het script gebruikt Python met BeautifulSoup en staat buiten de stack van de site. Zie hoofdstuk 9.3 van `docs/rag-inventarisatie.md`.

## Wat per URL is vastgelegd

| Sleutel | Inhoud |
|---|---|
| `beschermd` | title, meta description, canonical, robots-meta, hreflang, H1 |
| `social` | Open Graph en Twitter Card |
| `koppen` | alle koppen in volgorde, met niveau, tekst, regio en id |
| `bodytekst` | tekst uit `<main>` als geordende blokken, met woordtelling en SHA-256 |
| `links` | href, ankertekst, regio, soort en rel |
| `structured_data` | de JSON-LD, geparsed, met SHA-256 |
| `afbeeldingen` | src, alt, afmetingen, loading |
| `laadprestaties` | scripts, stylesheets, aantal `details` en tabellen, HTML-omvang |

## Buiten de HTML-pagina's

- `robots.txt`: `User-agent: *`, `Allow: /`, verwijzing naar de sitemap.
- `sitemap.xml`: 84 URL's. Niet opgenomen: `/404` en de vijf branchepagina's met `noindex, follow`.
- `rss.xml`: feed van de inzichten.

## Index

| URL | Bestand | Title | H1 | Woorden | Robots-meta | Structured data |
|---|---|---|---|---|---|---|
| `/` | [home.json](home.json) | Freelance AI Consultant \| Dave Willemstein | Maak de AI-beslissingen die je aan je board moet uitleggen. | 755 | geen | ProfessionalService |
| `/404` | [404.json](404.json) | Pagina niet gevonden \| Freelance AI Consultant | Deze pagina bestaat niet. | 66 | noindex, nofollow | ProfessionalService |
| `/ai-agents` | [ai-agents.json](ai-agents.json) | AI agents voor bedrijven \| Slimmer automatiseren met AI | AI agents voor bedrijven | 2452 | geen | BreadcrumbList, Service, FAQPage |
| `/ai-agents/laten-maken` | [ai-agents__laten-maken.json](ai-agents__laten-maken.json) | AI agent laten maken \| Aanpak, kosten en doorlooptijd | AI agent laten maken: aanpak, kosten en doorlooptijd | 1682 | geen | BreadcrumbList, Service, FAQPage |
| `/ai-agents/voorbeelden` | [ai-agents__voorbeelden.json](ai-agents__voorbeelden.json) | AI agents voorbeelden \| 12 toepassingen voor bedrijven | AI agents voorbeelden: 12 toepassingen voor bedrijven | 1913 | geen | BreadcrumbList, Article |
| `/ai-agents/wat-is-een-ai-agent` | [ai-agents__wat-is-een-ai-agent.json](ai-agents__wat-is-een-ai-agent.json) | Wat is een AI agent? Uitleg, werking en voorbeelden | Wat is een AI agent? Uitleg, werking en voorbeelden | 1787 | geen | BreadcrumbList, Article, FAQPage |
| `/ai-automatisering` | [ai-automatisering.json](ai-automatisering.json) | AI automatisering \| Processen slimmer en sneller laten lopen | AI automatisering: slimmer werken met minder handwerk | 2687 | geen | BreadcrumbList, Service, FAQPage |
| `/ai-automatisering/ai-tools` | [ai-automatisering__ai-tools.json](ai-automatisering__ai-tools.json) | Beste AI tools voor bedrijven \| Vergeleken per toepassing | Beste AI tools voor bedrijven | 2746 | geen | BreadcrumbList, Article, FAQPage |
| `/ai-automatisering/ai-workflows` | [ai-automatisering__ai-workflows.json](ai-automatisering__ai-workflows.json) | AI workflows \| Voorbeelden en aanpak voor bedrijven | AI workflows: zo automatiseer je werk van begin tot eind | 1860 | geen | BreadcrumbList, Article, FAQPage |
| `/ai-automatisering/bedrijfsprocessen-automatiseren-met-ai` | [ai-automatisering__bedrijfsprocessen-automatiseren-met-ai.json](ai-automatisering__bedrijfsprocessen-automatiseren-met-ai.json) | Bedrijfsprocessen automatiseren met AI \| Waar begin je? | Bedrijfsprocessen automatiseren met AI | 1775 | geen | BreadcrumbList, Article, FAQPage |
| `/ai-beleid` | [ai-beleid.json](ai-beleid.json) | AI beleid en governance \| Verantwoord werken met AI | AI beleid en governance voor organisaties | 2566 | geen | BreadcrumbList, Service, FAQPage |
| `/ai-beleid/ai-act` | [ai-beleid__ai-act.json](ai-beleid__ai-act.json) | AI Act voor bedrijven \| Verplichtingen en tijdlijn uitgelegd | De AI Act voor bedrijven: wat moet je doen? | 2383 | geen | BreadcrumbList, Article, FAQPage |
| `/ai-consultancy` | [ai-consultancy.json](ai-consultancy.json) | AI Consultancy \| Strategie, advies en roadmap op maat | AI consultancy: strategisch advies dat tot resultaat leidt | 2847 | geen | BreadcrumbList, Service, FAQPage |
| `/ai-consultancy/ai-advies` | [ai-consultancy__ai-advies.json](ai-consultancy__ai-advies.json) | AI advies \| Onafhankelijke AI-adviseur voor bedrijven | AI advies: onafhankelijk advies over AI in je bedrijf | 1778 | geen | BreadcrumbList, Service, FAQPage |
| `/ai-consultancy/ai-consultant-inhuren` | [ai-consultancy__ai-consultant-inhuren.json](ai-consultancy__ai-consultant-inhuren.json) | AI consultant inhuren \| Freelance, senior en snel inzetbaar | AI consultant inhuren: waar let je op? | 1592 | geen | BreadcrumbList, Service, FAQPage |
| `/ai-consultancy/ai-roadmap` | [ai-consultancy__ai-roadmap.json](ai-consultancy__ai-roadmap.json) | AI roadmap ontwikkelen \| Prioriteiten, planning en budget | AI roadmap ontwikkelen: van prioriteiten naar planning | 2041 | geen | BreadcrumbList, Article, FAQPage |
| `/ai-consultancy/ai-strategie` | [ai-consultancy__ai-strategie.json](ai-consultancy__ai-strategie.json) | AI strategie ontwikkelen \| Van visie naar concrete keuzes | AI strategie ontwikkelen voor jouw organisatie | 1840 | geen | BreadcrumbList, Service, FAQPage |
| `/ai-development` | [ai-development.json](ai-development.json) | AI development \| AI-oplossingen en applicaties op maat | AI development: AI-oplossingen op maat laten ontwikkelen | 1815 | geen | BreadcrumbList, Service, FAQPage |
| `/ai-development/ai-oplossingen` | [ai-development__ai-oplossingen.json](ai-development__ai-oplossingen.json) | AI oplossingen op maat \| Van vraagstuk naar werkende AI | AI oplossingen op maat voor jouw bedrijf | 1580 | geen | BreadcrumbList, Service, FAQPage |
| `/ai-development/ai-software` | [ai-development__ai-software.json](ai-development__ai-software.json) | AI software \| Kiezen, integreren of op maat laten bouwen | AI software: kiezen, integreren of op maat laten bouwen | 1484 | geen | BreadcrumbList, Article, FAQPage |
| `/ai-development/ai-specialist` | [ai-development__ai-specialist.json](ai-development__ai-specialist.json) | AI specialist \| Senior AI-expertise voor jouw organisatie | AI specialist: expertise voor strategie en uitvoering | 1581 | geen | BreadcrumbList, Service, FAQPage |
| `/ai-implementatie` | [ai-implementatie.json](ai-implementatie.json) | AI implementatie \| Van plan naar werkende AI-oplossing | AI implementatie: van plan naar werkende oplossing | 2663 | geen | BreadcrumbList, Service, FAQPage |
| `/ai-implementatie/advies` | [ai-implementatie__advies.json](ai-implementatie__advies.json) | AI implementatie advies \| Voorkom dure fouten vooraf | AI implementatie advies: goed voorbereid starten | 1537 | geen | BreadcrumbList, Service, FAQPage |
| `/ai-implementatie/stappenplan` | [ai-implementatie__stappenplan.json](ai-implementatie__stappenplan.json) | AI implementatie stappenplan \| In 7 stappen naar resultaat | AI implementatie stappenplan in 7 stappen | 1893 | geen | BreadcrumbList, Article |
| `/ai-voor-bedrijven` | [ai-voor-bedrijven.json](ai-voor-bedrijven.json) | AI voor bedrijven \| Toepassingen, kansen en eerste stappen | AI voor bedrijven: wat kan AI voor jouw organisatie betekenen? | 2302 | geen | BreadcrumbList, Article, FAQPage |
| `/ai-voor-bedrijven/ai-en-bi` | [ai-voor-bedrijven__ai-en-bi.json](ai-voor-bedrijven__ai-en-bi.json) | AI en BI \| Het verschil en hoe je ze slim combineert | AI en BI: het verschil en hoe ze elkaar versterken | 1611 | geen | BreadcrumbList, Article, FAQPage |
| `/ai-voor-bedrijven/mkb` | [ai-voor-bedrijven__mkb.json](ai-voor-bedrijven__mkb.json) | AI voor het MKB \| Toepassingen, risico's en eerste stappen | AI voor het MKB: waar begin je en wat levert het op? | 2443 | geen | BreadcrumbList, Article, FAQPage |
| `/ai-voor-bedrijven/zakelijke-dienstverleners` | [ai-voor-bedrijven__zakelijke-dienstverleners.json](ai-voor-bedrijven__zakelijke-dienstverleners.json) | AI voor zakelijke dienstverleners \| Toepassingen en tools | AI voor zakelijke dienstverleners | 1597 | geen | BreadcrumbList, Article, FAQPage |
| `/ai-workshop` | [ai-workshop.json](ai-workshop.json) | AI workshop en training voor bedrijven \| Praktisch | AI workshop en training voor bedrijven | 2035 | geen | BreadcrumbList, Service, FAQPage |
| `/ai-workshop/ai-coaching` | [ai-workshop__ai-coaching.json](ai-workshop__ai-coaching.json) | AI coaching \| Persoonlijke begeleiding bij AI-adoptie | AI coaching voor managers en teams | 1273 | geen | BreadcrumbList, Service, FAQPage |
| `/ai-workshop/ai-geletterdheid-training` | [ai-workshop__ai-geletterdheid-training.json](ai-workshop__ai-geletterdheid-training.json) | AI geletterdheid training \| Zo voldoe je aan de AI Act | AI geletterdheid training: voldoen aan de AI Act | 1651 | geen | BreadcrumbList, Service, FAQPage |
| `/ai-workshop/chatgpt-training` | [ai-workshop__chatgpt-training.json](ai-workshop__chatgpt-training.json) | ChatGPT training voor bedrijven \| Praktisch en veilig | ChatGPT training voor bedrijven | 1279 | geen | BreadcrumbList, Service, FAQPage |
| `/ai-workshop/copilot-training` | [ai-workshop__copilot-training.json](ai-workshop__copilot-training.json) | Copilot training \| Microsoft Copilot slim inzetten | Microsoft Copilot training voor teams | 1479 | geen | BreadcrumbList, Service, FAQPage |
| `/algemene-voorwaarden` | [algemene-voorwaarden.json](algemene-voorwaarden.json) | Algemene voorwaarden \| Freelance AI Consultant | Algemene voorwaarden | 987 | geen | ProfessionalService |
| `/cases` | [cases.json](cases.json) | Cases \| Freelance AI Consultant | Cases die het verschil maken. | 442 | geen | ProfessionalService |
| `/cases/ai-readiness-scale-up` | [cases__ai-readiness-scale-up.json](cases__ai-readiness-scale-up.json) | Case: AI-readiness assessment voor groeigerichte scale-up | AI-readiness voor een scale-up | 554 | geen | Article |
| `/cases/ai-roadmap-internationale-maakorganisatie` | [cases__ai-roadmap-internationale-maakorganisatie.json](cases__ai-roadmap-internationale-maakorganisatie.json) | Case: AI-roadmap voor een internationale maakorganisatie | AI-roadmap & leadership | 573 | geen | Article |
| `/cases/ai-strategie-investeringsmaatschappij` | [cases__ai-strategie-investeringsmaatschappij.json](cases__ai-strategie-investeringsmaatschappij.json) | Case: AI-strategie voor een investeringsmaatschappij | AI-strategie & use-case portfolio | 569 | geen | Article |
| `/cases/interne-ai-assistent-kenniswerkers` | [cases__interne-ai-assistent-kenniswerkers.json](cases__interne-ai-assistent-kenniswerkers.json) | Case: Interne AI-assistent voor kenniswerkers | AI-assistent voor kenniswerkers | 574 | geen | Article |
| `/cases/kyc-documentanalyse-financial-services` | [cases__kyc-documentanalyse-financial-services.json](cases__kyc-documentanalyse-financial-services.json) | Case: KYC-proces versneld met AI-assisted documentanalyse | KYC versneld met documentanalyse | 586 | geen | Article |
| `/cases/vendorselectie-enterprise-retail` | [cases__vendorselectie-enterprise-retail.json](cases__vendorselectie-enterprise-retail.json) | Case: AI-gedreven vendorselectie in enterprise retail | Vendorselectie voor enterprise retail | 525 | geen | Article |
| `/contact` | [contact.json](contact.json) | Contact en kennismaking \| Freelance AI Consultant | Laten we kennismaken. | 511 | geen | ContactPage |
| `/diensten` | [diensten.json](diensten.json) | Diensten \| Freelance AI Consultant | Diensten die AI-beslissingen helder maken. | 559 | geen | ProfessionalService |
| `/diensten/ai-due-diligence` | [diensten__ai-due-diligence.json](diensten__ai-due-diligence.json) | AI Due Diligence \| Freelance AI Consultant | AI Due Diligence | 759 | geen | Service |
| `/diensten/ai-readiness-assessment` | [diensten__ai-readiness-assessment.json](diensten__ai-readiness-assessment.json) | AI Readiness Assessment \| Freelance AI Consultant | AI Readiness Assessment | 862 | geen | Service |
| `/diensten/ai-strategy-sprint` | [diensten__ai-strategy-sprint.json](diensten__ai-strategy-sprint.json) | AI Strategy Sprint \| Freelance AI Consultant | AI Strategy Sprint | 937 | geen | Service |
| `/diensten/executive-briefing` | [diensten__executive-briefing.json](diensten__executive-briefing.json) | Executive Briefing \| Freelance AI Consultant | Executive Briefing | 766 | geen | Service |
| `/diensten/fractional-ai-lead` | [diensten__fractional-ai-lead.json](diensten__fractional-ai-lead.json) | Fractional AI Lead \| Freelance AI Consultant | Fractional AI Lead | 865 | geen | Service |
| `/diensten/vendor-review` | [diensten__vendor-review.json](diensten__vendor-review.json) | Vendor Review \| Freelance AI Consultant | Vendor Review & selectie | 763 | geen | Service |
| `/inzichten` | [inzichten.json](inzichten.json) | Inzichten \| Freelance AI Consultant | Praktische inzichten voor betere AI-beslissingen. | 737 | geen | ProfessionalService |
| `/inzichten/ai-adoptie-begint-bij-het-werk` | [inzichten__ai-adoptie-begint-bij-het-werk.json](inzichten__ai-adoptie-begint-bij-het-werk.json) | AI-adoptie begint bij het werk, niet bij de tool | AI-adoptie begint bij het werk | 1176 | geen | BlogPosting |
| `/inzichten/ai-agents-wat-ze-wel-en-niet-kunnen` | [inzichten__ai-agents-wat-ze-wel-en-niet-kunnen.json](inzichten__ai-agents-wat-ze-wel-en-niet-kunnen.json) | AI-agents: wat ze wel en niet kunnen in een bedrijfsproces | AI-agents: wat ze wel en niet kunnen | 1206 | geen | BlogPosting |
| `/inzichten/ai-governance-zonder-bureaucratie` | [inzichten__ai-governance-zonder-bureaucratie.json](inzichten__ai-governance-zonder-bureaucratie.json) | AI-governance zonder bureaucratie: wat je echt nodig hebt | AI-governance zonder bureaucratie | 1279 | geen | BlogPosting |
| `/inzichten/ai-vendorselectie-in-acht-stappen` | [inzichten__ai-vendorselectie-in-acht-stappen.json](inzichten__ai-vendorselectie-in-acht-stappen.json) | AI-vendorselectie in acht stappen \| Freelance AI Consultant | AI-vendorselectie in acht stappen | 1338 | geen | BlogPosting |
| `/inzichten/build-buy-of-partner` | [inzichten__build-buy-of-partner.json](inzichten__build-buy-of-partner.json) | Build, buy of partner: wat past bij jouw situatie? | Build, buy of partner: wat past bij jouw situatie? | 1210 | geen | BlogPosting |
| `/inzichten/de-business-case-voor-ai` | [inzichten__de-business-case-voor-ai.json](inzichten__de-business-case-voor-ai.json) | De business case voor AI: hoe je hem eerlijk berekent | De business case voor AI, eerlijk berekend | 1286 | geen | BlogPosting |
| `/inzichten/freelance-ai-consultant-vs-agency-vs-big4` | [inzichten__freelance-ai-consultant-vs-agency-vs-big4.json](inzichten__freelance-ai-consultant-vs-agency-vs-big4.json) | Freelance AI consultant vs agency vs Big 4 | Freelance AI consultant vs agency vs Big 4 | 1219 | geen | BlogPosting |
| `/inzichten/het-datafundament-onder-ai` | [inzichten__het-datafundament-onder-ai.json](inzichten__het-datafundament-onder-ai.json) | De rol van het datafundament in succesvolle AI-initiatieven | Het datafundament onder je AI-initiatieven | 1290 | geen | BlogPosting |
| `/inzichten/van-ai-strategie-naar-waarde` | [inzichten__van-ai-strategie-naar-waarde.json](inzichten__van-ai-strategie-naar-waarde.json) | Van AI-strategie naar waarde: een 3-stappenplan | Van AI-strategie naar echte waarde | 1138 | geen | BlogPosting |
| `/inzichten/waarom-ai-pilots-blijven-steken` | [inzichten__waarom-ai-pilots-blijven-steken.json](inzichten__waarom-ai-pilots-blijven-steken.json) | Waarom AI-pilots blijven steken (en wat je eraan doet) | Waarom AI-pilots blijven steken | 1243 | geen | BlogPosting |
| `/inzichten/wanneer-heb-je-echt-een-ai-strateeg-nodig` | [inzichten__wanneer-heb-je-echt-een-ai-strateeg-nodig.json](inzichten__wanneer-heb-je-echt-een-ai-strateeg-nodig.json) | Wanneer heb je echt een AI-strateeg nodig? | Wanneer heb je echt een AI-strateeg nodig? | 1158 | geen | BlogPosting |
| `/inzichten/welke-ai-use-cases-leveren-resultaat` | [inzichten__welke-ai-use-cases-leveren-resultaat.json](inzichten__welke-ai-use-cases-leveren-resultaat.json) | Welke AI-use cases leveren écht resultaat op? | Welke AI-use cases leveren écht resultaat op? | 1231 | geen | BlogPosting |
| `/kennisbank` | [kennisbank.json](kennisbank.json) | AI kennisbank \| Praktische kennis over AI voor bedrijven | AI kennisbank: praktische kennis over AI voor bedrijven | 905 | geen | BreadcrumbList, CollectionPage |
| `/kennisbank/ai-agents-en-avg` | [kennisbank__ai-agents-en-avg.json](kennisbank__ai-agents-en-avg.json) | AI agents en de AVG \| Privacy en compliance in de praktijk | AI agents en de AVG: waar moet je op letten? | 1829 | geen | BreadcrumbList, Article |
| `/kennisbank/ai-specialist-salaris` | [kennisbank__ai-specialist-salaris.json](kennisbank__ai-specialist-salaris.json) | AI specialist salaris \| Wat verdient een AI specialist? | AI specialist salaris: wat verdient een AI specialist? | 1744 | geen | BreadcrumbList, Article, FAQPage |
| `/kennisbank/ai-voorbeelden` | [kennisbank__ai-voorbeelden.json](kennisbank__ai-voorbeelden.json) | AI voorbeelden \| 25 praktische toepassingen voor bedrijven | AI voorbeelden: 25 toepassingen uit de praktijk | 2118 | geen | BreadcrumbList, Article |
| `/kennisbank/chatgpt-voor-bedrijven` | [kennisbank__chatgpt-voor-bedrijven.json](kennisbank__chatgpt-voor-bedrijven.json) | ChatGPT voor bedrijven \| Toepassingen en veilig gebruik | ChatGPT voor bedrijven: toepassingen en veilig gebruik | 1514 | geen | BreadcrumbList, Article |
| `/kennisbank/claude-voor-bedrijven` | [kennisbank__claude-voor-bedrijven.json](kennisbank__claude-voor-bedrijven.json) | Claude voor bedrijven \| Mogelijkheden en toepassingen | Claude voor bedrijven: mogelijkheden en toepassingen | 1611 | geen | BreadcrumbList, Article |
| `/kennisbank/gemini-voor-bedrijven` | [kennisbank__gemini-voor-bedrijven.json](kennisbank__gemini-voor-bedrijven.json) | Gemini voor bedrijven \| Toepassingen in Google Workspace | Gemini voor bedrijven: toepassingen in Google Workspace | 1712 | geen | BreadcrumbList, Article |
| `/kennisbank/microsoft-copilot-voor-bedrijven` | [kennisbank__microsoft-copilot-voor-bedrijven.json](kennisbank__microsoft-copilot-voor-bedrijven.json) | Microsoft Copilot voor bedrijven \| Toepassingen en licenties | Microsoft Copilot voor bedrijven: wat kun je ermee? | 1701 | geen | BreadcrumbList, Article |
| `/kennisbank/notuleren-met-ai` | [kennisbank__notuleren-met-ai.json](kennisbank__notuleren-met-ai.json) | Notuleren met AI \| Tools, werkwijze en privacy op een rij | Notuleren met AI: tools, werkwijze en privacy | 1802 | geen | BreadcrumbList, Article, FAQPage |
| `/kennisbank/prompt-engineering` | [kennisbank__prompt-engineering.json](kennisbank__prompt-engineering.json) | Prompt engineering \| Zo schrijf je betere AI prompts | Prompt engineering: betere resultaten uit AI | 1779 | geen | BreadcrumbList, Article |
| `/kennisbank/rpa-vs-ai-automatisering` | [kennisbank__rpa-vs-ai-automatisering.json](kennisbank__rpa-vs-ai-automatisering.json) | RPA versus AI automatisering \| Verschillen en keuzehulp | RPA versus AI automatisering: wat past bij jou? | 1489 | geen | BreadcrumbList, Article |
| `/kennisbank/wat-doet-een-ai-consultant` | [kennisbank__wat-doet-een-ai-consultant.json](kennisbank__wat-doet-een-ai-consultant.json) | Wat doet een AI consultant? Taken, rol en meerwaarde | Wat doet een AI consultant? | 1711 | geen | BreadcrumbList, Article, FAQPage |
| `/kennisbank/wat-doet-een-ai-developer` | [kennisbank__wat-doet-een-ai-developer.json](kennisbank__wat-doet-een-ai-developer.json) | Wat doet een AI developer? Taken, skills en samenwerking | Wat doet een AI developer? | 1377 | geen | BreadcrumbList, Article |
| `/kennisbank/wat-doet-een-bi-specialist` | [kennisbank__wat-doet-een-bi-specialist.json](kennisbank__wat-doet-een-bi-specialist.json) | Wat doet een BI specialist? Taken, skills en rol naast AI | Wat doet een BI specialist? | 1400 | geen | BreadcrumbList, Article |
| `/markten` | [markten.json](markten.json) | AI per branche \| Toepassingen in zorg, finance en meer | AI per branche: toepassingen per sector | 1242 | geen | BreadcrumbList, Article |
| `/markten/automotive` | [markten__automotive.json](markten__automotive.json) | AI in automotive \| Toepassingen voor autobedrijven | AI in automotive: toepassingen voor autobedrijven | 1831 | geen | BreadcrumbList, Article, FAQPage |
| `/markten/fintech` | [markten__fintech.json](markten__fintech.json) | AI in fintech \| Toepassingen voor financiële dienstverlening | AI in fintech en financiële dienstverlening | 1834 | geen | BreadcrumbList, Article, FAQPage |
| `/markten/luchtvaart` | [markten__luchtvaart.json](markten__luchtvaart.json) | AI in de luchtvaart \| Toepassingen, kansen en uitdagingen | AI in de luchtvaart: toepassingen en uitdagingen | 1692 | noindex, follow | BreadcrumbList, Article |
| `/markten/marketing` | [markten__marketing.json](markten__marketing.json) | AI marketing \| Strategie, toepassingen en de beste tools | AI marketing: slimmer marketen met AI | 1979 | noindex, follow | BreadcrumbList, Article, FAQPage |
| `/markten/onderwijs` | [markten__onderwijs.json](markten__onderwijs.json) | AI in het onderwijs \| Toepassingen, kansen en beleid | AI in het onderwijs: toepassingen, kansen en uitdagingen | 1973 | noindex, follow | BreadcrumbList, Article, FAQPage |
| `/markten/overheid` | [markten__overheid.json](markten__overheid.json) | AI voor de overheid \| Advies, toepassingen en regelgeving | AI voor de overheid: kansen, toepassingen en uitdagingen | 1829 | noindex, follow | BreadcrumbList, Article, FAQPage |
| `/markten/zorg` | [markten__zorg.json](markten__zorg.json) | AI in de zorg \| Toepassingen, kansen en uitdagingen | AI in de zorg: toepassingen, kansen en uitdagingen | 2119 | noindex, follow | BreadcrumbList, Article, FAQPage |
| `/over` | [over.json](over.json) | Over Dave \| Freelance AI Consultant | Hi, ik ben Dave. Onafhankelijk AI-adviseur voor boards en leiders die vooruit willen. | 637 | geen | Person |
| `/partnernetwerk` | [partnernetwerk.json](partnernetwerk.json) | AI bureau nodig? Freelance expertise met partnernetwerk | Geen bureau, wel bureau-capaciteit: mijn partnernetwerk | 1367 | geen | BreadcrumbList, Service, FAQPage |
| `/privacy` | [privacy.json](privacy.json) | Privacyverklaring \| Freelance AI Consultant | Privacyverklaring | 731 | geen | ProfessionalService |
| `/tarieven` | [tarieven.json](tarieven.json) | Wat kost een AI consultant? Tarieven, pakketten en prijzen | Wat kost een AI consultant? Tarieven en pakketten | 1343 | geen | BreadcrumbList, Service, FAQPage |
| `/veelgestelde-vragen` | [veelgestelde-vragen.json](veelgestelde-vragen.json) | Veelgestelde vragen \| Freelance AI Consultant | Veelgestelde vragen. | 1095 | geen | FAQPage |
| `/werkwijze` | [werkwijze.json](werkwijze.json) | Werkwijze \| Freelance AI Consultant | Zo werk ik. | 881 | geen | ProfessionalService |
