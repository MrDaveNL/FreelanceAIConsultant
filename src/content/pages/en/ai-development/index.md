---
id: C5-00
lang: en
url: /ai-development
parent: null
cluster: "5. AI Development"
pageType: Hub
schema: service
navLabel: AI Development
title: "AI development: having AI applications built the right way"
metaTitle: "AI Development | Specification, Build Partner, Governance"
metaDescription: "Independent guidance on AI development: get the specification right, choose the right build partner, and check what gets delivered actually works."
keyphrase: ai development
eyebrow: "AI development"
lede: "AI development rarely goes wrong on the technology and often goes wrong on the brief: a vague specification, the wrong build partner, or nobody on your side checking the work. I don't build software myself. I help you decide what should be built, by whom, and whether it delivers what was agreed."
primaryCta: { label: "Book a strategy call", href: "mailto:dave@freelanceaiconsultant.com" }
secondaryCta: { label: "See the AI Readiness Assessment", href: /services/ai-readiness-assessment }
summary:
  - "Your own team, or a development partner you contract directly, does the building."
  - "My role: specification, build-partner selection, testing and governance from your side."
  - "Decide whether to build, buy or partner first; only then how."
published: "2026-10-27"
updated: "2026-10-27"
faqTitle: "Frequently asked questions"
faq:
  - q: "Do you build AI applications yourself?"
    a: "No. I don't write code or deliver software. The building is done by your own team or a development partner you contract yourself. I help with the specification, choosing that partner, testing what's delivered, and the governance around it."
  - q: "What's the difference between an AI developer and an AI consultant?"
    a: "An AI developer builds: models, integrations, applications. A consultant like me decides with you what should be built, why, with which partner, and how you check that it works. You need both roles for a good result, but they shouldn't sit with the same party if you want independent advice."
  - q: "How long does it take to have an AI application developed?"
    a: "That depends mostly on the integrations with your existing systems and the quality of your data, less on the model itself. A first working prototype is often quick to build; the road to production, with security, logging and support, takes the most time. You only get a realistic plan after a specification and a conversation with the build partner."
  - q: "Can an AI web application also be built with standard components?"
    a: "Usually, yes, and it's often the sensible choice. Most AI web applications combine a bought-in language model or platform with a layer of your own rules, data and working process. Training your own model from scratch is rarely needed."
  - q: "Who owns the code and the data?"
    a: "You settle that in the contract with the build partner, not afterwards. Record who owns the code, the configuration, the test sets and the data, and how you take them with you if you switch partners. In a Vendor Review or guided delivery, I include those points in the contract assessment."
sources: []
---

## What is AI development?

AI development is the design, building, testing and deployment of software in which AI plays a core role. Think of an application that reads documents and fills in fields, an assistant that searches internal knowledge, or an agent that carries out tasks in your systems. Three things set it apart from ordinary software development: the output isn't always predictable, quality depends heavily on your data, and the system needs to keep being measured after it goes live.

That's why good AI development doesn't start with the developer, but with the question of which problem you're solving and how you'll measure whether it's working. Only once that's clear does a developer know what to build.

I'm not the builder in that picture. I work as an [independent consultant](/about) on your side of the table: helping sharpen the brief, choosing the right build partner, and testing what gets delivered. The building itself is done by your own team or a development partner you contract directly. I don't earn anything from the build, so I have no interest in a bigger scope.

Want to know which profile you actually need first? A separate article on what an AI developer actually does, day to day, sets out the different roles, from strategist to machine learning engineer.

## What you can have developed

Most AI development questions fall into three categories. They overlap, but each calls for a different specification and often a different kind of build partner.

### AI applications

An AI application is a standalone tool, often an AI web application, that supports a defined task: summarising case files, preparing quotes, classifying customer queries. Anyone having AI applications built usually buys in the underlying language model and has the layer around it built: the user interface, the rules, the connection to your data, and the evaluation. Which types exist and when custom development pays off is covered on the page about [choosing, integrating or building AI software](/ai-development/ai-software).

### AI agents

An AI agent goes a step further: it carries out actions in your systems itself, such as raising a ticket or drafting and queuing an email. That calls for tighter agreements on permissions, logging and human oversight. [AI agent examples](/ai-agents/examples) sets out a dozen applications across customer service, sales, HR and finance.

### Integrations with existing software

Often the most valuable form of AI development isn't a new application, but AI inside the software you already use: your CRM, your document management system, your ERP. The AI component is then small; the integration, the permissions model and the data flows are the real work. An overview of applications, from document processing to internal assistants, is on [custom AI solutions](/ai-development/ai-solutions).

## Development process

An AI project runs through roughly five phases. Below, for each phase, is who does the work and where I'm involved from your side.

<figure class="diagram" role="img" aria-label="Development process for AI development in five phases, with the role of the client, the build partner and the independent consultant at each phase">
<ol class="flow">
<li><b>1. Brief and specification</b>You and me: problem, success measures, constraints and a first build-buy-partner choice</li>
<li><b>2. Build-partner selection</b>You decide, I guide: criteria upfront, a level playing field, contract and exit terms</li>
<li><b>3. Prototype on your own data</b>Build partner builds, your team tests, I check against the agreed measures</li>
<li><b>4. Into production</b>Build partner and IT: integrations, security, logging and support; I watch scope and risk</li>
<li><b>5. Support and measurement</b>Your organisation owns it; periodic evaluation, adjust or stop</li>
</ol>
<figcaption>The building is done by your own team or a partner you contract yourself. The consultant sits on your side of the table and earns nothing from the build.</figcaption>
</figure>

What you get from me in concrete terms depends on the phase:

- **At the start:** a specification in plain language, covering the problem, the success measures, the data needed, and the constraints around privacy and the AI Act. If you don't yet have a clear picture of where you stand, the [AI Readiness Assessment](/services/ai-readiness-assessment) is a logical first step.
- **When choosing the build partner:** a [Vendor Review](/services/vendor-review) with scorecards, a test on your own data, and a three-year TCO comparison. The investment is a fixed price agreed upfront, over {{timing:vendor-review}}.
- **During the build:** guidance from your side, for example as a [Fractional AI Lead](/services/fractional-ai-lead) (a fixed monthly fee, agreed upfront), testing deliverables and safeguarding the business case and the governance around it.

What happens afterwards, from pilot to daily use, falls under [AI implementation](/ai-implementation). That's less about code and more about working processes, adoption and ownership.

<aside class="scenario" aria-label="Example scenario">
<p class="scenario-label">Example scenario</p>
<p>A financial services firm with 250 staff has an external development partner build an application that checks incoming application files for completeness. The organisation contracts that partner directly; the consultant is involved as a Fractional AI Lead for two days a month, from the client's side.</p>
<p>Before the start, he agrees what success looks like with the team: of the files the application marks as complete, at most 3% may still turn out incomplete on manual review. On the prototype, that figure is 11%. Rather than carrying on building, the organisation first has the 40 worst-handled files analysed. The cause is an outdated application form still in circulation.</p>
<p>After a fix and a second test, the figure comes out at 2.5%. Go-live slips by five weeks as a result. Agreements on ownership of the code and the test set are in the contract from day one.</p>
<p class="scenario-note">Fictional example, built from situations that come up often. The organisation and figures are illustrative.</p>
</aside>

An example of how that can look in practice: in the case on [KYC document analysis for a financial services firm](/cases/kyc-document-analysis-financial-services), the emphasis wasn't on the model but on the working process around it and on guiding the vendor and implementation team.

## Build versus buy

Before you have anything developed, the question of whether you should build it at all comes first. Only build what sets you apart in the market, buy what's a commodity, and choose a partner if you want to steer the outcome without owning the technology yourself. The hybrid form often works best: buying in building blocks, having the layer with your own knowledge built, and placing the implementation with a partner. A full four-question decision framework for this choice is covered elsewhere on this site, in an insights piece on building, buying or partnering.

## Working with developers from my network

Because I work alone and don't build, I sometimes suggest parties I know for delivery: developers, data engineers or specialists in a particular platform. How that works is kept deliberately simple:

- **You contract directly.** There's no layer through me. Agreements on scope, price, ownership and liability are made directly with the build partner.
- **No margin, no commission.** I earn nothing on their rate and hold no partner status with vendors.
- **Known relationships are disclosed upfront.** If I've advised a party before or worked with them, you hear that before they're put forward.
- **A suggestion isn't a preference.** A party from my network goes through the same selection as anyone else.

More on how I select partners, and what you can and can't expect from them, is on the [partner network](/partner-network) page.

Want to talk through a development project that's coming up, or a build partner who's already sent a quote? [Book a thirty-minute strategy call](/contact). At the end you'll know what I'd do, even if the answer is that you don't need me for it.
