# Decisions — pricing removal & experience-claim rewrite

Branch: `remove-service-pricing-and-experience-claim`. Written so these choices aren't lost again
if the session context gets cleared.

## Prices hidden, not deleted
- Prices stay fully intact in `src/data/prijzen.ts` and `src/data/services.js`. Nothing was removed
  from the data layer.
- A single flag, `showPrices` in `src/data/site.js` (currently `false`), controls whether amounts
  render anywhere: service cards, detail pages, comparison tables, RAG blocks, and the
  `prijsTekst`/`prijsTekstEn` helpers in `src/lib/rag-prijzen.js`.
- To re-enable: flip `showPrices` to `true`. That alone restores amounts everywhere the helpers are
  used. It does **not** revert the manually rewritten sentences (FAQ answers, RAG fallbacks,
  `/tarieven`/`/pricing` copy) — those need a manual pass, since they were rewritten to read
  naturally without a number, not just wrapped in a conditional.

## Price form is per service type, not one generic sentence
- Rejected: one uniform fallback phrase ("vaste prijs of vast maandbedrag") for every service.
  **Why:** factually wrong for project-based services, which never have a monthly fee.
- Decision: `rag-prijzen.js` returns **"a fixed project fee"** for project-based services and
  **"a fixed monthly fee"** specifically for Fractional AI Lead (the one service with recurring
  pricing levels, via `fractionalNiveaus`).
- **How to apply:** any new service added to `prijzen.ts` needs to be placed correctly in this
  project-vs-monthly distinction before its fallback text will read correctly.

## "Since 2006" framing, explicitly not "in search"
- Rejected wording (discarded mid-session, must not reappear): "since 2006 in search, since 2021
  building AI tools and automation."
- Final agreed framing: **"since 2006 [sinds 2006], in strategy, digital and innovation"** —
  no "in search," no "since 2021." Applies site-wide: HeroPortrait sticker, about/over timeline,
  meta descriptions, and the one running-text sentence on the NL about page.
- **Why:** "in search" was an intermediate/discarded edit that leaked into the about/over meta
  descriptions; "since 2021" (AI tools/automation) was dropped in favor of a single dated claim
  rather than stacking two eras.
- Canonical NL meta description (`src/pages/nl/over.astro`), verified word-for-word against
  rendered `dist/`:
  > Dave Willemstein is onafhankelijk AI-adviseur voor directies en leidinggevenden. Sinds 2006
  > actief in strategie, digital en innovatie. Geen vendorbelangen.
- Note: "boards en leiders" still appears in two places — the NL hero title on `/nl/over`
  (`src/pages/nl/over.astro:40`) and the generic fallback meta description in
  `src/layouts/BaseLayout.astro:14` (used only when a page passes no `description` prop). Neither
  is the `/nl/over` meta description itself, so this is not a deviation from the agreed framing;
  don't conflate a hero title or an unused fallback with the actual page meta.

## Contact form: budget dropdown removed, Tijdlijn kept
- The price-range budget dropdown was removed from `ContactForm.astro`/`ContactFormEn.astro`
  (NL+EN) — it implied a quote comparison the site no longer displays.
- An interim replacement field ("Wanneer wil je starten?"/"When would you like to start?") was
  added, then **reverted** — redundant with the existing Tijdlijn/Timeline field.
- **Decision: Tijdlijn/Timeline field stays.** It already captures "when," so no second field for
  the same question.
- A Dienst/Service select was added instead (optional, pre-filled via `?dienst=`/`?service=`
  query param, included in the submission payload) — lets a visitor arrive from a specific service
  page without needing a price-based filter.

## Docs/snapshots: left untouched, intentionally
- Historical files that quote the old "20+ years" wording (SEO nulmeting snapshots, archived
  planning docs) were **not** rewritten.
- **Why:** those are point-in-time archives of what the site used to say, not live copy. Rewriting
  them would falsify the historical record they exist to preserve.
- **How to apply:** don't flag old wording found only in `planning/` snapshot/archive files as a
  regression — check whether the hit is in live `src/`/`dist/` output first.
