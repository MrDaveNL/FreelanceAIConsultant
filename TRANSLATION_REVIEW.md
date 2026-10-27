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

## AI agents cluster (`/ai-agents`, `/ai-agents/build`, `/ai-agents/what-is-an-ai-agent`)

- **Main EN keywords:** "AI agents for business" (hub, C6-00), "build an AI agent" (C6-03), "what is an AI agent" (C6-01). `/ai-agents/examples` (C6-04) was already live from an earlier batch.
- **Adaptation notes:**
  - Hub: the NL page's source for the chatbot-transparency point (a joint Dutch AP/ACM regulator call) is NL-specific and doesn't apply in English; replaced with the same EU AI Act Article 50 citation already verified and used on the live `/ai-agents/examples` page (transparency obligation reaches a UK business placing such a system on the EU market or whose output is used there).
  - All three pages: forward references to not-yet-live kennisbank articles (AI agents and data protection/GDPR, RPA vs AI automation) are left as plain text, no link, same pattern used elsewhere in this project until those pages go live.
  - "AVG" (Dutch GDPR) references translated to "UK GDPR" per the established convention for this phase.
  - RAG blocks: `ai-agents-en.ts`, `ai-agents-build-en.ts` (dienstenoverzicht, same facts as the NL blocks) and `ai-agents-wat-is-een-ai-agent-en.ts` (kennisbank, same facts as the NL block). Nothing substantive left out.

## AI and BI (`/ai-for-business/ai-and-bi`, route id C4-03)

- **Main EN keyword:** AI and BI
- **Meta title:** AI and BI | The Difference and How to Combine Them
- **Meta description:** What's the difference between AI and BI, and how do they strengthen each other? See how AI makes business intelligence smarter, with examples and a practical approach.
- **Adaptation notes:** no Dutch-only data; the Microsoft Copilot for Power BI citation is a global, dated primary source, reused as-is from the NL block with the same URL. Cross-links to the (not yet live) BI-specialist kennisbank article are left as a plain mention rather than a dead link.

## AI for professional services firms (`/ai-for-business/professional-services-firms`, route id C4-02)

- **Main EN keyword:** AI for professional services firms
- **Meta title:** AI for Professional Services Firms | Applications and Tools
- **Meta description:** AI for professional services firms: faster reporting, analysis and advice. Applications for accountants, solicitors and consultants, plus what to watch for.
- **Adaptation notes:** localized, not translated literally. NL sources replaced: Nederlandse orde van advocaten (Dutch Bar Association) recommendations → the Solicitors Regulation Authority's August 2026 warning notice on AI misuse (verified via a secondary summary, HSF Kramer, since the SRA's own page wasn't reachable via search — cited as such); NBA/NOREA accountancy guidance → ICAEW's Generative AI guide (ethics), a verified primary source; AVG/DPIA reference → UK GDPR Article 35 (as retained by the Data Protection Act 2018) and ICO guidance.

## AI specialist (`/ai-development/ai-specialist`, route id C5-01)

- **Main EN keyword:** hire an AI specialist
- **Meta title:** AI Specialist | Senior AI Expertise for Your Organisation
- **Meta description:** Looking to hire an AI specialist? See which kinds of expertise exist, how to work out which one you need, and what a freelance AI specialist adds to your organisation.
- **Adaptation notes:** the NL page's cross-link to "AI specialist salary" (`/kennisbank/ai-specialist-salaris`, route id C5-05) was dropped rather than translated — that route is flagged `noEn: true` as NL-market compensation data that would mislead without real UK-market figures, and no UK salary benchmark was substituted or invented. The NL page's "hire an AI consultant" cross-link now points to the merged section on `/ai-consulting#hiring-an-ai-consultant` instead of a standalone page (see the ai-consulting merge, route id C1-06). Region/language FAQ answer reused verbatim from the already-live `/ai-consulting` page's own FAQ ("I work across the UK and Europe...") for consistency.

## AI automation cluster (`/ai-automation/*`)

- **AI tools (`/ai-automation/ai-tools`, C3-05).** Main EN keyword: "best AI tools for business". Product names, plans and pricing checked at time of writing (October 2026): spot-verified Microsoft's official global Copilot pricing page directly (confirmed the Business-tier promotional discount — $21 → $18/user/month — is live now, not stale), and reused the NL page's own officially-cited vendor pages (OpenAI, Anthropic, Google) for the remaining figures. Page dated "as of October 2026". No RAG content left out.
- **AI workflows (`/ai-automation/ai-workflows`, C3-04).** Main EN keyword: "AI workflows". Straight translation/localization, no pricing claims to re-verify beyond the platform feature claims already dated September/October 2026 on the vendors' own pages.
- **Automate business processes with AI (`/ai-automation/automate-business-processes-with-ai`, C3-03).** Main EN keyword: "automate business processes with ai". The worked savings example was redenominated from EUR to GBP (£45/hour, consistent with the UK-primary-market convention used elsewhere), figures otherwise unchanged from the NL illustrative example.
- **Cross-linking note:** none of the three pages link to `/ai-agents`, `/ai-for-business/professional-services-firms`, `/knowledge-base/gemini-for-business`, `/knowledge-base/prompt-engineering` (linked by product name only, no link) or `/knowledge-base/rpa-vs-ai-automation`, since those routes aren't `liveEn` yet — they point to the live parent hub instead until their own build lands.
