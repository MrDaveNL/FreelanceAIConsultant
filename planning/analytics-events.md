# Analytics-events (dataLayer → GTM → GA4)

Alle events gaan via `window.dataLayer.push(...)`, nooit via `gtag('event', ...)`. GTM zet ze door
naar GA4. De events worden altijd gepusht, ook zonder consent - Consent Mode in GTM bepaalt of er
cookies bij geplaatst worden, niet dit script. Geen van de parameters bevat persoonsgegevens.

Bron: `src/components/AnalyticsEvents.astro` (cta_click, contact_click), `src/components/ContactForm.astro`
en `src/components/ContactFormEn.astro` (generate_lead), `src/components/CookieConsent.astro`
(consent_update).

## cta_click

Vuurt bij een klik op elke `ServiceContactCTA`-link (`data-cta="service-proposal"` op het element).

| Parameter | Waarde | Voorbeeld |
|---|---|---|
| `cta` | de `data-cta`-waarde van het geklikte element | `service-proposal` |
| `service` | de `data-service`-slug van de bijbehorende dienst, leeg als er geen is | `ai-readiness-assessment` |

**GTM-opzet:**
- Trigger: Custom Event, event name = `cta_click`.
- Variabelen: Data Layer Variable `cta` en `service`.
- GA4-eventtag: event name `cta_click`, parameters `cta` en `service` meegeven.

## contact_click

Vuurt bij een klik op een `mailto:`- of `tel:`-link, overal op de site (event-delegatie op
`document`, dus ook in Header, Footer, contactpagina's en contentpagina's).

| Parameter | Waarde |
|---|---|
| `method` | `email` of `phone` |

Let op: er bestaat momenteel geen enkele `tel:`-link op de site (geen telefoonnummer in
`src/data/site.js`). De `phone`-tak is aanwezig voor als dat later verandert, maar vuurt nu nooit.

**GTM-opzet:**
- Trigger: Custom Event, event name = `contact_click`.
- Variabele: Data Layer Variable `method`.
- GA4-eventtag: event name `contact_click`, parameter `method` meegeven.

## generate_lead (key event)

Vuurt **alleen na een succesvolle verzending** van het contactformulier (NL: `ContactForm.astro`,
EN: `ContactFormEn.astro`), nooit bij de klik op de verstuurknop zelf. "Succesvol" is hier: de
bestaande succes-status van het formulier (`form-status.is-ok`) - dat geldt voor de normale
formulierverzending (Web3Forms-endpoint antwoordt ok) én voor de e-mail-fallback die gebruikt
wordt als er geen `formEndpoint`/`formAccessKey` is ingesteld (die opent een vooringevulde
e-mail; de site weet niet of de bezoeker die ook echt verstuurt, maar behandelt dit elders in de
UI ook al als een geslaagde aanvraag). Zie `planning/decisions-analytics-consent.md` voor die
afweging.

| Parameter | Waarde |
|---|---|
| `service` | de gekozen dienst-slug uit het select-veld, leeg als "Anders/weet ik nog niet" of niets gekozen is |
| `language` | `nl` of `en` |

**GTM-opzet:**
- Trigger: Custom Event, event name = `generate_lead`.
- Variabelen: Data Layer Variable `service` en `language`.
- GA4-eventtag: event name `generate_lead`, parameters `service` en `language` meegeven.
- Markeer `generate_lead` in GA4 als **key event** (Admin → Events → key event aanzetten).

## consent_update

Vuurt bij elke keuze in de cookiebanner of het voorkeurenvenster (niet bij elke paginaweergave
met een al bestaande keuze - dat wordt alleen via `gtag('consent','update', ...)` gesynchroniseerd,
zie de inline consent-default-script in `src/components/CookieConsent.astro`).

| Parameter | Waarde |
|---|---|
| `categories` | array met de geaccepteerde categorieën, bv. `['necessary']` of `['necessary','analytics']` |
| `analytics_storage` | `granted` of `denied` |

**GTM-opzet:** vooral nuttig voor debugging van het consent-gedrag zelf in GTM Preview; niet
per se een GA4-eventtag nodig. `ad_storage`/`ad_user_data`/`ad_personalization` blijven altijd
`denied`, er is geen marketingcategorie.

## Niet geïmplementeerd: virtual_page_view

De site gebruikt geen `ClientRouter`/View Transitions - elke navigatie is een volledige page load.
Daarom is er geen `virtual_page_view`-event nodig; GTM's standaard page-view-trigger (All Pages)
volstaat voor elke paginaweergave, EN en NL.
