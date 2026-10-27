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

## EU AI Act for businesses (`/ai-policy/ai-act`, route id C8-01)

- **Main EN keyword:** EU AI Act for businesses
- **Meta title:** EU AI Act for Businesses | Obligations & Timeline
- **Meta description:** What does the EU AI Act mean for your business, including UK organisations in scope? Risk categories, obligations, the 2026 timeline and first practical steps.
- **Adaptation notes:** the NL source (dated 23 September 2026) was already fully updated for the Digital Omnibus; re-verified independently against the official EUR-Lex/ELI text (`data.europa.eu/eli/reg/2026/1744/oj`, OJ L 2026/1744, 24.7.2026) before translating — both the high-risk timeline delay and the Article 4 (AI literacy) softening are confirmed real. Added the verified UK extraterritorial framing (Article 2 scope, no UK AI Act of its own, existing sector regulators) used elsewhere in this phase. The NL FAQ on Dutch domestic supervision (Autoriteit Persoonsgegevens/RDI, draft Uitvoeringswet) was rewritten for a UK audience: EU member-state market surveillance authorities plus the AI Office supervise; the UK has no AI Act regulator of its own since the Act isn't UK law. The "Ondernemersplein" (Dutch government portal) source was dropped per the original Phase 3 flag; replaced with the EU Commission/EUR-Lex/UK gov.uk sources already verified. Cross-link to the AVG/GDPR kennisbank article left as plain text (not yet live in EN).

## AI workshop cluster (`/ai-workshop`, `/ai-workshop/ai-literacy-training`)

- **AI workshop hub (`/ai-workshop`, C9-00).** Main EN keyword: "AI workshop / training". Links out to the already-live ChatGPT and Copilot training pages and to the new AI literacy training page. The "AI coaching" cross-link was dropped (route `noEn: true`, no EN counterpart) rather than linked or invented.
- **AI literacy training (`/ai-workshop/ai-literacy-training`, C9-05).** Main EN keyword: "AI literacy training". Uses the same independently re-verified Digital Omnibus/Article 4 facts as the AI Act page above, with the full ELI citation rather than a bare "Article 4" reference. The NL FAQ citing the Dutch DPA's domestic supervision split (AP/RDI) was rewritten for a UK audience, consistent with the AI Act page's framing. Added back-links from the already-live ChatGPT and Copilot training pages once this page went live.
- Both pages' RAG blocks (`ai-beleid-ai-act-en.ts`, `ai-workshop-en.ts`, `ai-workshop-ai-geletterdheid-training-en.ts`) carry the same verified facts as their NL counterparts; nothing substantive left out.
- **Cross-linking note:** none of the three pages link to `/ai-agents`, `/ai-for-business/professional-services-firms`, `/knowledge-base/gemini-for-business`, `/knowledge-base/prompt-engineering` (linked by product name only, no link) or `/knowledge-base/rpa-vs-ai-automation`, since those routes aren't `liveEn` yet — they point to the live parent hub instead until their own build lands.

## Remaining kennisbank pages (7 pages, closes out the Phase 3 remaining-pages survey TRANSLATE list)

## AI agents and GDPR (`/knowledge-base/ai-agents-and-gdpr`, route id C6-05)

- **Main EN keyword:** AI agents and GDPR
- **Meta title:** AI Agents and GDPR | Privacy and Compliance in Practice
- **Meta description:** How do you deploy AI agents without GDPR risk? Read about processor agreements, data minimisation, logging and UK vs EU GDPR, with a practical checklist.
- **Adaptation notes:** required by the user to cover UK GDPR alongside EU GDPR, not just EU GDPR. Added a dedicated section on where the two regimes now diverge: the Data (Use and Access) Act 2025 (in force 5 February 2026) replaced UK GDPR Article 22, letting UK organisations run solely automated decisions on any lawful basis (including legitimate interests) if safeguards are met, except for special category data; EU GDPR kept the stricter consent-or-contract-only rule. Both facts verified via WebSearch against secondary legal commentary (law firm/vendor analysis), with the primary legislative citation (`legislation.gov.uk/ukpga/2025/18`) used directly rather than the secondary sources. The NL page's Dutch DPA-specific sources (Autoriteit Persoonsgegevens DPIA list, chatbot guidance) were replaced with the general EU/UK regulatory sources; the Dutch data-breach anecdote was kept as an illustrative (unattributed-to-UK) example since it is a factual, dated incident, not a claim about UK/EU law.

## AI examples for business (`/knowledge-base/ai-examples`, route id C3-06)

- **Main EN keyword:** AI examples for business
- **Meta title:** AI Examples | 25 Practical Business Applications
- **Meta description:** See 25 concrete AI examples from practice, by department and sector. Find out which applications deliver real value first and how businesses get started.
- **Adaptation notes:** the NL page's sector examples for markets not yet live in EN (healthcare, education, aviation, government, marketing) were kept as plain-text examples without a cross-link, rather than linking to a non-existent EN page or a NL one. Cross-links to the two `noEn: true` NL-only routes (AI specialist salary, AI-assisted meeting notes) were dropped entirely, not substituted.

## Gemini for business (`/knowledge-base/gemini-for-business`, route id C10-03)

- **Main EN keyword:** Gemini for business
- **Meta title:** Gemini for Business | Applications in Google Workspace
- **Meta description:** How do you use Google Gemini for business? Read about applications in Gmail, Docs and Sheets, business licensing, privacy, and how it compares to Copilot.
- **Adaptation notes:** product/pricing currency check performed per the user's instruction (same discipline as the already-live ChatGPT/Claude/Copilot pages). EUR pricing from the NL source's Google Workspace pricing-page citation reused unchanged (Business Starter €6.80, Standard €13.60, Plus €21.10), cross-checked via WebSearch against independent third-party pricing trackers (consistent figures, same ratios in USD), dated "as of October 2026". Added one footnote not in the NL source: Google also sells "Gemini Enterprise," a separate standalone agent platform with its own per-seat pricing, distinct from Gemini bundled into Workspace — flagged during verification to avoid readers confusing the two products. The Microsoft Copilot comparison table reuses the exact figures already verified and published on the live `/knowledge-base/microsoft-copilot-for-business` page, not re-verified independently.

## Prompt engineering (`/knowledge-base/prompt-engineering`, route id C10-05)

- **Main EN keyword:** prompt engineering
- **Meta title:** Prompt Engineering | How to Write Better AI Prompts
- **Meta description:** Learn how to write better AI prompts, with techniques, examples and templates for business use in ChatGPT, Claude, Gemini and Microsoft Copilot.
- **Adaptation notes:** straight translation, no Dutch-only data. No RAG content left out.

## RPA vs AI automation (`/knowledge-base/rpa-vs-ai-automation`, route id C3-08)

- **Main EN keyword:** RPA vs AI automation
- **Meta title:** RPA versus AI Automation | Differences and How to Choose
- **Meta description:** What is robotic process automation, and how does RPA differ from AI automation? Read the pros and cons, examples and when to smartly combine both.
- **Adaptation notes:** straight translation, no Dutch-only data, no sources list on the NL page to carry over. No RAG content left out.

## What does an AI developer do? (`/knowledge-base/what-does-an-ai-developer-do`, route id C5-04)

- **Main EN keyword:** what does an AI developer do
- **Meta title:** What Does an AI Developer Do? Tasks, Skills and Teamwork
- **Meta description:** What does an AI developer do, and how does the role differ from an AI consultant? Read about tasks, skills, tools and working well with AI developers.
- **Adaptation notes:** the NL page's cross-link to "AI specialist salary" (`/kennisbank/ai-specialist-salaris`, route id C5-05, `noEn: true`) was dropped entirely rather than translated or substituted with an invented UK figure, same precedent as the AI specialist page.

## What does a BI specialist do? (`/knowledge-base/what-does-a-bi-specialist-do`, route id C4-05)

- **Main EN keyword:** what does a BI specialist do
- **Meta title:** What Does a BI Specialist Do? Tasks, Skills and Role
- **Meta description:** What does a BI specialist do, and how is AI changing the role? Read about tasks, skills, tools, and when to choose a BI specialist over an AI specialist.
- **Adaptation notes:** straight translation, no Dutch-only data. No RAG content left out.

This completes the Phase 3 "remaining NL pages with no EN counterpart" TRANSLATE list (all 21 translate items plus the hire-an-ai-consultant merge). Still outstanding, per the user's explicit decision: `ai-advice` (skipped, wrong EN search intent) and 5 `markten` pages (skipped, `noindex` in NL itself).
