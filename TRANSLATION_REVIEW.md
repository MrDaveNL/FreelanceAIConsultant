# EN translation review

Per-page record of the main EN keyword, meta title and meta description for every page
published in English, plus notes on anything adapted rather than translated literally.
Updated as each page goes live (route map `live.en: true`).

## Home (`/`)

- **Main EN keyword:** freelance AI consultant
- **Meta title:** Freelance AI Consultant | From AI Strategy to Results
- **Meta description:** Freelance AI consultant helping CIOs, CDOs and AI leads decide where AI creates real value, which vendors fit, and how pilots turn into results.
- **Audience:** kept aligned with the NL home, which already targets CIO's, CDO's en AI-leads and board-level decision-making ("de AI-beslissingen die je aan je board moet uitleggen") — so no audience-framing change was needed, only the keyword/title/description pivot from "independent AI consultant" to "freelance AI consultant" (`site.brand` in `src/data/site.js` is already "Freelance AI Consultant").
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

## About (`/about`)

- **Main EN keyword:** Dave Willemstein AI consultant
- **Meta title:** Dave Willemstein | AI Consultant
- **Meta description:** Dave Willemstein is an independent AI consultant for boards and leadership teams. 20+ years in strategy, digital and innovation. No vendor interests.
- **Keyword reservation note:** "freelance AI consultant" is reserved for the home page only. The About page previously used it (keyword "freelance AI consultant profile", H1 marker "Freelance AI consultant") — changed so title and H1 lead with the full name instead, and the generic descriptor switched from "freelance" to "independent" (matches NL's own `role`/H1 framing, "Onafhankelijk AI-adviseur", more closely than the original EN draft did).
  - The sitewide "`Page title | Freelance AI Consultant`" brand suffix (`site.brand`, used verbatim on NL and EN alike — services, cases, approach, contact, 404, etc.) is a separate thing: a site-identity suffix, not a page's primary keyword, and is unchanged everywhere, including on this page's earlier draft. Only the About page's own keyword/H1 framing changed.
- **Adaptation notes:** no RAG block (no NL block exists for `over` to mirror or verify).

## AI consulting (`/ai-consulting`, route id C1-00)

- **Merged-in content:** route `C1-06` (`/ai-consultancy/ai-consultant-inhuren`) is flagged `noEn: true` and does not get its own EN page. Its content (when to hire, freelance vs agency, selection criteria, cost, deliverables) was merged into this page's existing "Hiring an AI consultant" subsection instead, expanded from a three-line teaser into the full argument.
- **Secondary keyword:** "hire an ai consultant", on this subsection only. The page's primary keyword ("what is AI consultancy" / "ai consulting") is unchanged.
- **Why merged, not a separate page:** per explicit user decision on the remaining-pages survey — a standalone `/ai-consulting/hire-an-ai-consultant` page was judged unnecessary scope; the content fits naturally as a subsection of the existing hub page.

## Knowledge base index (`/knowledge-base`, route id P08)

- **No target keyword — hub page.** This is a navigation/hub page listing the knowledge-base articles, not a page competing for search intent of its own. An earlier draft used "ai knowledge base" as the main keyword; that's the wrong search intent (it reads as a knowledge-base *software product* query, not this page's actual content) and has been removed. `keyphrase` is now optional in the content schema (`src/content.config.ts`) rather than forced to a placeholder value, since a hub page legitimately has none.
- **Title (H1):** AI Knowledge Base for Business Leaders | Freelance AI Consultant
- **Meta title:** AI Knowledge Base | Freelance AI Consultant
- **Meta description:** describes what the hub contains rather than targeting a keyword — practical guides on ChatGPT, Claude, Microsoft Copilot, AI agents and AI consulting for business leaders.
- **Adaptation notes:** no RAG block (no NL block exists for `kennisbank`/P08 to mirror or verify).
