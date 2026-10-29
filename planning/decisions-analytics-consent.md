# Decisions - GTM, Consent Mode v2 and the cookie banner

Branch: `analytics-and-consent`, taken from `remove-service-pricing-and-experience-claim` (not yet
merged into main at the time this branch was cut - see git log). Written so these choices aren't
lost again if the session context gets cleared. Separate from, and does not update,
`planning/decisions-pricing-and-experience.md`.

## GTM instead of a loose gtag.js
- GA4 is configured entirely inside Google Tag Manager (container `GTM-WCPWDGQQ`, env var
  `PUBLIC_GTM_ID`). There is no GA4 Measurement ID and no `gtag.js` snippet anywhere in this repo.
- **Why:** the brief requires GA4 to be managed in GTM, not in code, so the Measurement ID can
  change without a deploy.
- **How to apply:** don't add a second analytics snippet "just to be sure." GTM is the only
  loading path; everything else (consent, events) talks to GTM via `dataLayer`.

## Consent library: vanilla-cookieconsent v3, not a custom banner
- Picked `vanilla-cookieconsent@3.1.0` (orestbida, MIT, no external CMP, no cost). Rejected: a
  hand-rolled banner.
- **Why:** it already does the hard, easy-to-get-wrong parts correctly out of the box - focus
  trapping, keyboard support, no cookiewall overlay on the initial banner, equal-weight
  accept/reject buttons, 12-month cookie expiry (configured explicitly, not the 182-day default),
  and a `revision` number that forces re-consent on a new cookie-policy version.
- Config lives entirely in `src/components/CookieConsent.astro`. No separate CMP account, no
  external script origin other than the library itself (bundled via npm, same-origin in the
  build).

## Everything gated behind `PROD && PUBLIC_GTM_ID`
- The consent-default script, the GTM snippet, and the cookie banner itself only render when
  `import.meta.env.PROD` is true **and** `PUBLIC_GTM_ID` is set. Not just the GTM snippet, like the
  brief's wording for step B literally says - the banner too.
- **Why:** without a GTM container there is nothing to ask consent for (no marketing category
  exists either, so the only thing consent governs is GA4 analytics storage). Showing a banner with
  nothing behind it would be confusing in `astro dev` and would also change the nulmeting-baseline
  script count on every local run.
- **How to apply:** to test any of this locally, set `PUBLIC_GTM_ID` in a local `.env` and run
  `astro build && astro preview` (`import.meta.env.PROD` is true for any `astro build`, preview or
  not).

## No noscript iframe
- The brief's official GTM snippet (with `gtm.start`) is used; the `<noscript><iframe
  src=".../ns.html">` fallback is intentionally omitted.
- **Why:** that iframe loads unconditionally, before any consent check - it would defeat Consent
  Mode for the no-JS case.

## Returning visitors skip the 500 ms wait, without needing the library loaded first
- The consent-default script (`is:inline`, runs synchronously, before GTM) reads the `cc_cookie`
  cookie itself with a tiny inline parser and calls `gtag('consent','update', ...)` immediately if
  a previous choice exists. It does not wait for the (deferred) `vanilla-cookieconsent` module to
  load.
- **Why:** the banner-init script is a bundled ES module (`<script>` without `is:inline`), which
  the browser always defers until after the document has parsed - by spec, regardless of where the
  `<script type="module">` tag lands in the HTML. Waiting for it would reintroduce the exact delay
  `wait_for_update` is meant to avoid for repeat visitors.
- Verified in the build output: the bundled module tag is hoisted to the very top of `<head>` by
  Astro, but because it's deferred, the two classic inline scripts (consent-default, then the GTM
  snippet) still execute first, in that order, during parsing.

## consent_update fires on choice, not on every page load
- `pushConsentUpdate` (in `CookieConsent.astro`) is wired to `onFirstConsent` and `onChange`, not
  the library's `onConsent` (which also fires on every page load once a valid stored consent
  exists).
- **Why:** the brief asks for the dataLayer event "bij elke keuze" (on each decision) - firing it
  on every page load too would make it useless as a "the user just chose X" signal in GTM.
- The actual `gtag('consent','update', ...)` sync for returning visitors happens separately, in
  the pre-GTM inline script (previous section) - that one does need to run every page load.

## No marketing category, ad_* always denied
- `src/data/site.js`, all content, and the inventory pass found no marketing/ad scripts anywhere
  (no Meta Pixel, LinkedIn Insight, etc.). Per the brief, a category only shown when there's
  something to gate: the preferences modal has exactly two toggles, Necessary and Analytics.
- `ad_storage`, `ad_user_data`, `ad_personalization` are set to `denied` once (consent-default) and
  never updated anywhere in this codebase, so they stay `denied` permanently until a marketing
  category is actually added.

## generate_lead fires on the email-fallback "success" state too
- `ContactForm.astro`/`ContactFormEn.astro` have two success paths: the normal endpoint submission,
  and a fallback (no `formEndpoint`/`formAccessKey` configured) that just opens a pre-filled
  `mailto:` link and shows the same `form-status.is-ok` message. `generate_lead` fires on both.
- **Why:** the brief says "only after a successful submission, not on a button click" - the
  mailto-fallback path already *is* treated as a success by the existing UI (same status styling,
  same copy tone), so firing the event there too is consistent with how the form already behaves,
  not a new judgment call invented for analytics. Flagging this explicitly in case the fallback
  path is ever considered not a "real" lead: the fallback can't actually confirm the visitor sent
  the email, only that their mail client opened.
- See `planning/analytics-events.md` for the exact parameters.

## Google Fonts self-hosted via @fontsource, not blocked
- Added `@fontsource/caveat` and `@fontsource/space-grotesk` (both pinned exact versions) instead
  of the `fonts.googleapis.com`/`fonts.gstatic.com` CDN links that were in `BaseLayout.astro`.
  Same weights as before (Caveat 600/700, Space Grotesk 400/500/600/700), latin + latin-ext subsets
  only (covers Dutch diacritics; no other subsets were loaded before either).
- **Why:** the brief explicitly asks to self-host rather than block fonts. This also removes the
  only third-party request that used to fire before any consent choice.
- Privacy policy §7 updated to say fonts are self-hosted (the old sentence about Google Fonts
  receiving the visitor's IP address is no longer true).

## Nulmeting baseline regenerated, not the check script changed
- `planning/check-nulmeting.mjs` fails hard on **any** change to a page's `<script>` list (not just
  additions) - the one hard equality check in that file, unlike headings/text/links which allow
  additions. Adding GTM + consent-default + the cookieconsent module to every page broke this
  check on all 90 baselined pages.
- Decision (confirmed with the user before implementing): regenerate the baseline
  (`node planning/nulmeting.mjs --overschrijf`) rather than special-casing the tracking scripts
  inside `check-nulmeting.mjs`. The new script set becomes the new approved nulpunt.
- **Why:** this is the existing, intended mechanism for approving a deliberate change (the script
  itself is meant to catch unintentional regressions, not block a reviewed, approved addition), and
  it doesn't touch the check's logic or its ability to catch future, unreviewed script changes.
- Verified after regenerating: `npm run check` passes (0 problems, 0 fouten, 0 RAG errors, 0
  overflow) with `PUBLIC_GTM_ID` set in a local `.env`.

## No virtual_page_view
- The site has no `ClientRouter`/View Transitions anywhere - confirmed by searching `src/` for
  `ClientRouter`, `transition:animate`, `transition:persist`, `astro:transitions` (no matches).
  Every navigation is a full page load, so GTM's standard page-view trigger is sufficient and no
  extra dataLayer event is needed.

## contact_click's phone branch has nothing to fire on yet
- There is no `tel:` link anywhere on the site (no phone number in `src/data/site.js`). The click
  delegation in `AnalyticsEvents.astro` still listens for `a[href^="tel:"]` so it starts working
  automatically if a phone link is ever added, but today only the `email` method value will ever
  fire.
