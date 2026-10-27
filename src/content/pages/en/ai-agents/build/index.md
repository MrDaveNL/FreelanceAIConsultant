---
id: C6-03
lang: en
url: /ai-agents/build
parent: C6-00
cluster: "6. AI Agents"
pageType: Spoke
schema: service
navLabel: Build an AI agent
title: "Having an AI agent built: approach, cost and timeline"
metaTitle: "Build an AI Agent | Approach, Cost & Timeline"
metaDescription: "Want an AI agent built for your business? See how the development process works, what it costs, how long it takes, and what to check on security and governance."
keyphrase: build an ai agent
eyebrow: "Build an AI agent"
lede: "Having an AI agent built means buying a piece of process that acts on its own, not a product off a shelf. Success is largely decided before a single line of code is written: which task, which boundaries, which human checks, and which delivery partner. This page covers how to approach that, and where I come in."
primaryCta: { label: "Book a consultation", href: /contact }
secondaryCta: { label: "See the AI Readiness Assessment", href: /services/ai-readiness-assessment }
summary:
  - "Choose first between building it yourself, using a platform, or bringing in a partner."
  - "Set out the tasks, boundaries and human checks before you ask for quotes."
  - "I don't build agents myself; I guide you independently, from your side of the table."
published: "2026-10-27"
updated: "2026-10-27"
faqTitle: "Frequently asked questions"
faq:
  - q: "How long does it take to have an AI agent built?"
    a: "That depends mainly on the number of integrations, the quality of the sources, and the requirements for control. An agent that only does preparatory work within an existing platform goes into use faster than a bespoke agent that writes into several systems. Ask every delivery partner for a phase-by-phase plan, including a test period, and compare them side by side."
  - q: "Can I build an AI agent myself without developers?"
    a: "For simple tasks within software you already use, often yes: many platforms now offer low-code building blocks for agents. Once the agent needs to write into several systems, handle personal data, or operate within a regulated process, you need technical knowledge of integrations, access rights and logging."
  - q: "Who owns the agent if a partner builds it?"
    a: "That's settled in the contract with the delivery partner, and it's worth getting sharp upfront. Think about ownership of the code and the instructions, access to the logging, and what happens if you want to move to another party. Without those agreements, you're more dependent than you think."
  - q: "What role do you play if I have an AI agent built?"
    a: "I help you scope the task, draw up the specification, compare delivery partners, and oversee delivery. The building itself is done by your own team or by a party you contract directly. I earn nothing from the build, so my advice doesn't depend on the size of the project."
  - q: "What if it turns out an AI agent isn't the best solution?"
    a: "Then you'll hear that. For predictable steps, a rule-based workflow is often cheaper and more reliable, and sometimes the process itself is the problem. An agent is a means; if a simpler means delivers the same result, that's usually the better choice."
sources: []
---

## When should you have an AI agent built?

Having an AI agent built makes sense when a task has a lot of repetition, needs information from several sources, and produces an outcome a human can assess quickly. If the task is entirely predictable, an ordinary workflow or classic automation is often better. If you're not yet sure what sets an agent apart from other AI applications, read [what an AI agent is](/ai-agents/what-is-an-ai-agent) first. For inspiration by department, see the [AI agent examples](/ai-agents/examples).

Once it's clear that an agent is the right route, the first choice isn't which vendor, but which form.

<figure class="diagram" role="img" aria-label="Four routes for having an AI agent built: build it yourself, use a platform, bring in a partner, or a combination">
<div class="matrix"><div><b>Build it yourself</b>Your own team builds the agent. Maximum control, but only realistic if you have development capacity and in-house knowledge of language models, integrations and upkeep.</div><div><b>Use a platform</b>You configure an agent inside software you already have or buy. Fast and relatively cheap to start, but you're tied to that platform's capabilities and pricing.</div><div><b>Bring in a partner</b>An outside delivery partner builds the agent to spec. More freedom than a platform, but you also pay for upkeep and need to manage the partner well.</div><div><b>Combination</b>Often the reality: a platform as the base, a partner for the integrations, and an internal owner for upkeep and control.</div></div>
<figcaption>Which route fits depends on your own capacity, the control you want, and how dependent on one vendor you're willing to be.</figcaption>
</figure>

I set out that trade-off between routes, including the multi-year costs and how you get off a platform again, in [build, buy or partner](/insights/build-buy-or-partner). For bespoke work, the page on [AI development](/ai-development) is also relevant.

## The development process

A good project starts with a specification you draw up yourself, not the delivery partner. Leave that to the party that's also building, and you get a specification that suits what that party would rather build.

<figure class="diagram" role="img" aria-label="The process for having an AI agent built: scope the task, draw up the specification, select a delivery partner, build and test with human checks, and hand over to management">
<ol class="flow">
<li><b>Scope</b>One task, one owner, one measure of success</li>
<li><b>Specify</b>Tasks, boundaries, human checks</li>
<li><b>Select</b>Same scenario for every party</li>
<li><b>Build and test</b>A fixed test set, a human reviews everything</li>
<li><b>Manage</b>Logging, sampling, a kill switch</li>
</ol>
<figcaption>The first two steps you do yourself, or with an independent adviser; only then does a delivery partner come into the picture.</figcaption>
</figure>

**Specify the agent.** At minimum, set out:

- **Tasks:** which steps the agent carries out and what result it delivers.
- **Boundaries:** which systems and data it may read, what it may change, and what it never may.
- **Human checks:** at which points a human approves, who that is, and what happens if there's doubt.
- **A quality measure:** a test set of real cases with the known correct outcome, so you can judge objectively.
- **Logging and ownership:** what's recorded, who manages the agent, and who can shut it down.

**Select a delivery partner.** Send every candidate the same scenario, built on your own data, and judge the outcomes separately from the pitch. Ask about experience with similar integrations, their approach to testing and logging, ownership of code and instructions, and the terms on ending the contract. The full approach is covered in [AI vendor selection in eight steps](/insights/ai-vendor-selection-in-eight-steps).

**Build and test.** Have the party build a limited version first that only prepares or proposes. During the test period, a human reviews every outcome. Only once it's clear which mistakes occur do you increase its independence.

<aside class="scenario" aria-label="Example scenario">
<p class="scenario-label">Example scenario</p>
<p>A logistics provider with 220 staff handles around 120 damage claims a month. A claims handler spends an average of 50 minutes per file gathering consignment notes, photos and delivery scans from three systems.</p>
<p>The adviser draws up the specification together with the claims team: the agent completes the file and writes a summary, but doesn't assess liability and doesn't email customers. Three delivery partners get the same scenario with twenty anonymised files. The choice falls on the party with the clearest logging and exit terms, not the lowest price.</p>
<p>After an eight-week test period, a file takes an average of 20 minutes instead of 50. Across 120 claims, that's around 60 hours a month. The payout decision stays with the handler.</p>
<p class="scenario-note">Illustrative example, built from situations that come up often. The organisation and figures are for illustration.</p>
</aside>

## What does an AI agent cost?

What an AI agent costs varies sharply by route. Naming a fixed figure here would be misleading. The factors that determine the price are easy enough to name:

- **Route:** an agent inside an existing platform costs mainly licences and configuration; bespoke work costs build hours and then management.
- **Integrations:** every system the agent talks to takes build work, testing and upkeep.
- **Write access and control:** the more the agent may change, the more testing, logging and checkpoints are needed.
- **Usage:** language models are often billed per volume of text processed, so volume and document length drive the running cost.
- **Management:** monitoring, periodic tests, changes as processes shift, and the time of an internal owner.

The biggest risk factors are too broad a first scope, sources that aren't in order, and dependence on a single vendor with no exit terms agreed. Ask every party for a multi-year cost estimate, including management and switching.

My own rates are on the [pricing](/pricing) page. If you want quotes from several delivery partners independently assessed, a [Vendor Review](/services/vendor-review) of {{timing:vendor-review}} fits, costing {{pricelc:vendor-review}}. If you need someone to oversee the project on an ongoing basis, that's available as [Fractional AI Lead](/services/fractional-ai-lead).

## Security, privacy and management

An agent that calls systems is a new user in your IT landscape, with the risks that come with it. Don't give it more access than it needs, have it log in with its own account so its actions can be traced, and keep a confirmation step at every irreversible moment.

If the agent processes personal data, the ordinary UK GDPR rules apply: a purpose and a lawful basis, no more data than needed, a data processing agreement with the vendor, and in many cases a data protection impact assessment. If the agent makes decisions about people, stricter requirements come into play. That's covered separately on this site.

Management isn't an afterthought. Models and platforms change, and an agent that works well today can respond differently after an update. Agree with the delivery partner who monitors, how often the test set gets rerun, and who picks up an incident.

**My role.** I don't build agents myself and I don't sell implementations. I help you scope the task, draw up the specification, compare delivery partners, and oversee delivery, from your side of the table. If you don't yet have a delivery partner, I can suggest parties from my [partner network](/partner-network); you contract them directly, with no margin for me. More on agents in general is on the page about [AI agents for business](/ai-agents). Have a concrete idea? [Book a consultation](/contact) and you'll hear what I'd do by the end of the call.
