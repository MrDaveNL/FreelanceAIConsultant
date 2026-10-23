# EN translation review

Per-page record of the main EN keyword, meta title and meta description for every page
published in English, plus notes on anything adapted rather than translated literally.
Updated as each page goes live (route map `live.en: true`).

## Home (`/`)

- **Main EN keyword:** independent AI consultant
- **Meta title:** Independent AI Consultant for Boards & Leaders
- **Meta description:** Independent AI advisory for CIOs, CDOs and AI leads. I help decide where AI creates real value, which vendors fit, and how pilots turn into results.
- **Adaptation notes:**
  - Hero, hub-section headings and CTA copy are adapted to English B2B search intent, not literal translations of the NL home (e.g. "Maak de AI-beslissingen die je aan je board moet uitleggen" → "Make the AI decisions you have to defend to your board").
  - Metrics (`metricsEn` in `src/data/site.js`): same facts as NL, reformatted to English number notation (€2,1M+ → €2.1M+, decimal point instead of comma). No values changed.
  - Testimonials (`testimonialsEn` in `src/data/cases.js`): literal translations of the three NL quotes, each marked "(Translated from Dutch)" next to the attribution, same author/role.
  - Independence section adds one new paragraph not present on the NL home, covering the "vetted partner network for capacity" positioning: when a project needs more hands, vetted partners are introduced, contracted directly by the client, no margin or commission for Dave. This mirrors the existing facts already published on the NL `/nl/partnernetwerk` page (not a new claim).
  - "AI in Europe" logo carousel (`LogoCarousel.astro`, sitewide component): was 100% hardcoded Dutch copy and per-brand `land`/`toepassing` fields. Added `src/data/brands.en.json` (factual translation only, no new entries) and made the component locale-aware. This fix applies sitewide, not just to home.
  - No RAG block: the NL home page (`/nl`) has no RAG block in `src/data/rag/`, so none was added for EN either (no NL block to mirror or verify).

### Sections hidden until their own page goes live

The home page self-adjusts as more EN content goes live (no manual edit needed later):
- Services grid + "All services" link: hidden until `diensten` is `live.en`.
- "Recent work" cases grid + "All cases" link: hidden until `cases` is `live.en`.
- "See my approach" links (How I work section, independence section): hidden until `werkwijze` is `live.en`.
- Insights preview section: hidden until `inzichten` is `live.en` (out of scope for this phase entirely).
- Hero "Book a call" / CTA "Book a call": falls back to `mailto:dave@freelanceaiconsultant.com` until `contact` is `live.en`, then automatically switches to the live `/contact` page.
