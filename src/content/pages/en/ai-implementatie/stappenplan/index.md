---
id: C2-03
lang: en
url: /ai-implementation/step-by-step-plan
parent: C2-00
cluster: "2. AI Implementation"
pageType: Spoke
schema: article
navLabel: AI Implementation Step-by-Step Plan
title: "AI implementation step-by-step plan in 7 steps"
metaTitle: "AI Implementation Plan | 7 Steps to a Result"
metaDescription: "Follow this AI implementation step-by-step plan: from goal and use case through data, build and adoption. With the pitfalls to watch for at each step."
keyphrase: ai implementation plan
eyebrow: "Step-by-step plan"
lede: "This AI implementation step-by-step plan takes you in seven steps from a goal to an application that runs, and keeps running, in daily work. Each step covers what you need to decide, where it usually goes wrong, and what to pin down before moving on."
primaryCta: { label: "Read more about AI implementation", href: /ai-implementation }
secondaryCta: { label: "See the AI Readiness Assessment", href: /services/ai-readiness-assessment }
summary:
  - "Start with a measurable goal, not a tool."
  - "Decide when you'll scale up and when you'll stop before the pilot starts."
  - "Adoption, management and measurement belong in the plan, not in the aftercare."
published: "2026-10-27"
updated: "2026-10-27"
sources:
  - title: "ICO: Data protection impact assessments"
    url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/guides-to-the-uk-gdpr/accountability-and-governance/data-protection-impact-assessments/"
  - title: "European Commission: AI Omnibus enters into force"
    url: "https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force"
---

## Step 1: Set the goal

Start with the overview. An AI implementation step-by-step plan isn't a project schedule with boxes to tick, but a sequence of decisions taken in a fixed order, because each step determines the next. Skip step 3, and you discover in step 5 that the data doesn't hold up. Leave step 6 until after delivery, and you end up with a working application nobody uses.

<figure class="diagram" role="img" aria-label="The seven steps of the AI implementation step-by-step plan: set the goal, choose the use case, map data and systems, choose build or buy, build and test a pilot, organise adoption, and measure, embed and scale">
<ol class="flow">
<li><b>1. Goal</b>Measurable problem, owner, baseline measurement</li>
<li><b>2. Use case</b>One application, chosen on value and feasibility</li>
<li><b>3. Data and systems</b>Sources, quality, integrations, privacy</li>
<li><b>4. Build or buy</b>A reasoned choice, including the exit</li>
<li><b>5. Pilot</b>In the real work, with stop criteria</li>
<li><b>6. Adoption</b>Scenarios per role, champions</li>
<li><b>7. Measure and scale</b>Management, governance, next application</li>
</ol>
<figcaption>The seven steps build on each other. You prepare steps 6 and 7 as early as step 1.</figcaption>
</figure>

This plan assumes a single application. If you have several candidates and want to settle the order first, start with an [AI roadmap](/ai-consulting/ai-strategy) instead. How I guide organisations through these steps is covered on the [AI implementation](/ai-implementation) page.

Now the first step: start with the problem, not the technology. "We want to do something with AI" or "we want a chatbot" isn't a goal. "Quote turnaround takes too long" or "our staff spend too long searching for information in old case files" is.

Make the goal measurable and record a baseline: how long does it take now, how many errors happen now, what does it cost now? Without a baseline, you can't later show that anything's improved. Name an owner straight away too: someone in the business who genuinely benefits and who has budget and a mandate.

Finally, agree how much time and money you're willing to invest before you expect a first result. That budget isn't an estimate of the final cost, it's a limit: this far, and then we reassess.

**Pitfall:** a goal that only IT or an innovation team cares about. Then there's nobody left to realise the value once it's delivered.

## Step 2: Choose the right use case

Draw up a list of candidates and assess them against the same criteria: what does it deliver, how feasible is it, is the data ready, how much change does it demand, and is there an owner? A good first use case is well scoped, runs on a limited number of sources, and can show within a few months whether it works.

Work through the business case, including the costs that arrive after delivery: management, licences, monitoring and your own people's time. For how to build a business case that survives scrutiny from the finance team, see [the business case for AI](/insights/the-business-case-for-ai).

Also record which candidates didn't make the cut, and why. That shortlist of rejects stops the same ideas resurfacing every quarter, and makes visible which conditions need to be met first.

**Pitfall:** choosing the use case that demos best rather than the one that delivers most. Visible isn't the same as valuable.

## Step 3: Map data and systems

Work out what data the application needs, where it sits, how reliable it is, and who's responsible for it. Also look at the systems the application needs to work with: where does the input come from, and where does the output need to go? Every integration is work, and integrations are almost always underestimated in planning. For why this foundation is so often the real bottleneck, see [the data foundation under AI](/insights/the-data-foundation-under-ai).

If you're processing personal data, assess now whether there's a high privacy risk. If so, a data protection impact assessment is required under [UK GDPR](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/accountability-and-governance/guides-to-the-uk-gdpr/accountability-and-governance/data-protection-impact-assessments/), and that takes time. Also check whether the application could count as high-risk under the EU AI Act, which applies if you place it on the EU market or its output is used in the EU. Under the Digital Omnibus package, the obligations for most high-risk systems apply from 2 December 2027, [according to the European Commission](https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force). More on this is covered under [AI policy](/ai-policy).

**Pitfall:** testing on a cleaned-up sample dataset. Real data is almost always messier, and you only find that out at scale.

## Step 4: Choose build or buy

For almost every application there are three routes: build it yourself, buy an existing product, or have a partner build and manage it while you steer the outcome. The rule of thumb: build only what sets you apart, buy what's a commodity. If you're unsure, buying is often the cheapest way to learn what you actually need. The full decision framework is in [build, buy or partner](/insights/build-buy-or-partner).

Choose a vendor or delivery partner, and set your evaluation criteria before the conversations start, testing on your own data rather than the vendor's demo. For how to run that in a structured way, see [AI vendor selection in eight steps](/insights/ai-vendor-selection-in-eight-steps). Put in the contract who owns the code, the configuration and the data, and how a handover works. You contract a partner directly; no margin is charged on parties I suggest, see the [partner network](/partner-network).

**Pitfall:** looking only at first-year cost. Maintenance and exit set the real price.

## Step 5: Build and test a pilot

Run the pilot in the real workflow, with real data and real users, even if that narrows the scope. A pilot in a separate environment alongside the work only proves the technology works, and these days that's almost always true anyway.

Before you start, agree what question the pilot answers, what outcome counts as success, what outcome means you stop, and who makes that call. Build a test set of examples where you know the right answer, so you can judge quality objectively. During the pilot, carry out at least one management action, such as a model update or a configuration change, so you know what management actually costs. For why pilots so often stall, see [why AI pilots stall](/insights/why-ai-pilots-stall).

**Pitfall:** a pilot with no stop criterion. It never ends; it just fizzles out.

## Step 6: Secure adoption

A licence and a training session aren't an adoption strategy. People start using an application when it makes their next task easier. So give them concrete scenarios for their own work rather than a blank input field, and make clear what is and isn't allowed: what data can go in, who's responsible for the output, and what happens if the answer's wrong.

Find a champion per team who does the same work, and create a place where people share working examples. Talk openly, too, about what's changing in the work and who decides on it. More on this in [AI adoption starts with the work](/insights/ai-adoption-starts-with-the-work).

**Pitfall:** measuring adoption with a single percentage for the whole organisation. Measure per role or team, and you can see where it's working and where it isn't.

## Step 7: Measure, embed and scale

Compare the results against the baseline from step 1. Record who manages the application, how often quality gets checked, and what happens if it drops. AI applications can quietly get worse as reality shifts, so monitoring isn't a one-off action.

Set up light governance: a register of the AI applications in use, a check before anything goes live, a periodic review and an escalation path. For how to do that without creating bureaucracy, see [AI governance without bureaucracy](/insights/ai-governance-without-bureaucracy). Only once the first application is stable and has an owner should you start the next one. What you learn from the first about data, vendors and adoption makes the second faster.

Also schedule a fixed review point, for example after three months, where the owner decides: continue, adjust or wind down.

**Pitfall:** scaling up before management is in place. Then the application grows, but so does the risk.

<aside class="scenario" aria-label="Example scenario">
<p class="scenario-label">Example scenario</p>
<p>A housing association with 220 staff wants tenant repair requests automatically categorised and routed to the right tradesperson. The adviser helps set the pilot terms in writing ahead of step 5: six weeks in one region, covering around 1,500 requests. Continue at 85 percent or higher correctly categorised, stop below 75 percent. The decision sits with the customer contact manager.</p>
<p>After six weeks, the score stands at 71 percent. Requests submitted as just a photo, or in casual language, are often miscategorised. The manager stops the pilot, as agreed. The cost up to that point: two months of licence fees and roughly 60 hours of staff time.</p>
<p>What remains is a cleaned-up list of 40 request categories that the contact centre now uses without AI. A future attempt starts from better data and a sharper question as a result.</p>
<p class="scenario-note">Fictional example, built from situations that come up often. The organisation and figures are illustrative.</p>
</aside>

## Taking it further

Want to use this step-by-step plan in your own project, but get stuck on one of the steps, or want to know which choices you need to make upfront? See what [consulting before implementation](/ai-implementation/consulting) delivers. Not sure yet whether your organisation is ready? The [AI Readiness Assessment](/services/ai-readiness-assessment) gives a reasoned answer in {{timing:ai-readiness-assessment}}. And if you'd just like to talk it through, [book a call](/contact).
