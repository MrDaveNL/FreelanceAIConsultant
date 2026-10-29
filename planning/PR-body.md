## Summary
- Removed visible prices from service pages (service cards, detail pages, comparison tables) behind the new `site.showPrices` flag (default `false`); price data stays intact in `prijzen.ts`/`services.js`. CTAs now point to the contact form instead of showing an amount.
- Replaced the "20+ years of experience" claim site-wide with a dated "since 2006, in strategy, digital and innovation" framing (HeroPortrait sticker, about/over timeline, meta descriptions, running text).
- Removed `offers`/`priceCurrency`/`priceSpecification` from Service structured data (JSON-LD); FAQPage schema is regenerated from `faq.js`.
- Contact form (NL+EN): removed the price-range budget dropdown; added an optional Dienst/Service select, pre-filled via `?dienst=`/`?service=`, included in the submission payload.
- Rewrote the per-service pricing-FAQ answers, RAG fallback sentences, and `/tarieven`/`/pricing` copy to describe pricing structure (fixed price or fixed monthly fee, set out in the proposal) instead of stating amounts.
- Refreshed the SEO nulmeting baseline and archived the fallback-sentences list produced while verifying the pricing removal.

## Test plan
- [x] `npm run build` completes with 0 page errors (postbuild checks `check-dist.mjs`, `check-nulmeting.mjs`, `check-rag.mjs` all pass).
- [x] Contact form (NL+EN): confirmed no budget/price-range dropdown; Dienst/Service select present, `?dienst=`/`?service=` prefill works, selected value is included in the submission payload.
- [x] Service JSON-LD: confirmed no `offers`/`price`/`priceCurrency` on `/services/[slug]` or `/nl/diensten/[slug]`.
- [x] Scanned a fresh `dist/` build for "20 jaar"/"20+ years"/"twintig jaar"/"two decades": 0 hits across 169 pages.
- [x] Scanned `dist/` for unresolved `{{` template tokens: 0 hits.
- [x] Scanned `dist/` for remaining €/vanaf/"starting at"/"from €" patterns: all remaining hits are client-ROI figures, third-party/market amounts in kennisbank/insights, the FAQ "€" category icon, or "vanaf" meaning "from [a point in time]" — no own service prices.
- [ ] Manual end-to-end submission test against the live form endpoint (not run in this session).

## Re-enabling prices
Set `showPrices: false` to `true` in `src/data/site.js`. Price data in `src/data/prijzen.ts`
is untouched. Note: the rewritten sentences (FAQ answers, RAG fallbacks, /tarieven copy) will
NOT revert automatically and need a manual pass.

## Other changes
- Contact form (NL+EN): budget dropdown with price ranges removed; new optional "Dienst/Service"
select, prefilled via ?dienst= / ?service=, included in the submission payload.
- Service JSON-LD: offers/price/priceCurrency removed; FAQPage schema regenerated from faq.js.
- /nl/over and /about meta descriptions aligned ("since 2006", no "20+ years").

## Dist-scan
- "20 jaar / 20+ years / twintig jaar / two decades": 0 hits across 169 pages.
- €/vanaf/starting at/from €: remaining hits are client-ROI figures, third-party/market amounts
  in kennisbank/insights, the FAQ "€" category icon, and "vanaf" as "from [date]". No own service
  prices.
- No unresolved "{{" tokens.

_Re-verified against this branch (`remove-service-pricing-and-experience-claim`) and a fresh `dist/` build on 2026-10-29 — all claims above hold; no corrections needed._
