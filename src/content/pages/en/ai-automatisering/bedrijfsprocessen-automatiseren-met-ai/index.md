---
id: C3-03
lang: en
url: /ai-automation/automate-business-processes-with-ai
parent: C3-00
cluster: "3. AI Automation"
pageType: Spoke
schema: article
navLabel: Automate Business Processes
title: "Automate business processes with AI"
metaTitle: "Automate Business Processes with AI | Where Do You Start?"
metaDescription: "Which business processes can you automate with AI? Learn how to select a process, which tools to use, and how to estimate and measure the saving upfront."
keyphrase: automate business processes with ai
eyebrow: "Process automation"
lede: "Automating business processes with AI doesn't start with a tool, but with the question of which process is worth it. This page covers which processes lend themselves to it, how you choose one, how you turn it into a working workflow, and how to honestly estimate the saving upfront."
primaryCta: { label: "Read more about AI automation", href: /ai-automation }
secondaryCta: { label: "See the AI Readiness Assessment", href: /services/ai-readiness-assessment }
summary:
  - "Good candidates: high volume, predictable input, an existing check step."
  - "Choose one process with an owner and measure the current situation before you start."
  - "Work out the saving including checking time, adoption and ongoing costs."
published: "2026-10-27"
updated: "2026-10-27"
faqTitle: "Frequently asked questions"
faq:
  - q: "Which processes are better off not being automated with AI?"
    a: "Processes that come up rarely, play out differently every time, or where a mistake is irreversible, such as a final rejection or a payment. Processes that only exist because another system is poorly set up are also better off being abolished or fixed first."
  - q: "How long does it take to automate one business process?"
    a: "That depends mainly on the integrations. A flow that only uses email and a shared folder is quick to set up. If the automation needs to read from and write to your ERP or CRM, arranging access, permissions and testing determines the timeline. Also plan a test period where the old way of working still runs alongside the new one."
  - q: "Do I need to improve my process before I automate it?"
    a: "Often, yes. If a process has a lot of exceptions, duplicate steps or unclear ownership, you automate those problems along with it. Walk through the process first with the people who carry it out and cut what's unnecessary. Only then look at where AI helps."
  - q: "How do I measure whether the automation is still working well after go-live?"
    a: "Track three things: how often a staff member has to correct the output, how many cases still get handled manually, and how much time an action takes now. Compare those every month against the baseline measurement. A rising number of corrections is the first sign that something is changing, for example in the input or in the model."
---

## Which business processes can you automate with AI?

Automating business processes with AI works best for processes with a lot of text, documents or free-form input. Think of emails that need reading, PDFs that data needs pulling out of, or replies that need slightly different wording every time. Processes with tidy fields and fixed rules are usually automated more cheaply and reliably without AI; that distinction is covered under [RPA versus AI automation](/ai-automation).

So which processes come up? Below are four areas where the combination of volume and predictable input shows up often, in both larger organisations and SMEs.

### Customer service

An AI step reads incoming queries, determines the topic and urgency, and routes them to the right queue. For common queries it drafts a reply from the knowledge base and previous answers. The staff member checks, adjusts and sends. What disappears is the sorting and the searching; contact with the customer stays with a person.

### Quotes and invoices

For quotes, AI pulls the relevant details out of the request (product, quantities, delivery date, special requirements) and drafts a quote based on your standard text and price list. A salesperson checks and sends it. For incoming invoices, AI reads the invoice details, compares them against the purchase order, and only flags discrepancies for accounts payable.

This pattern, where the system extracts data from a document and a person keeps the judgement, is also the core of the case study on [KYC document analysis at a financial services provider](/cases/kyc-document-analysis-financial-services). There, extraction and judgement were deliberately kept separate.

### Lead follow-up

A new lead from a web form is enriched with public company information, gets a first estimate of fit, and a draft email for the first follow-up. The salesperson decides whether and how to follow up. Agree in advance which sources the AI may use; not everything publicly available is fair game to process.

### Reporting

Monthly reports often consist of figures plus a commentary someone writes fresh every month. AI can draft that commentary based on the figures and the previous report. The figures themselves come from your source systems, not the language model: never let AI invent or recalculate numbers you don't check.

## How do you choose the right process?

Most organisations don't lack ideas, they lack a way to choose. Score each candidate process on five questions, each from 1 to 5:

1. **Volume:** how often does this task come up per week?
2. **Variation:** how predictable is the input?
3. **Data:** does the needed data already exist and is it already in use?
4. **Checking:** does someone already review the result, or does that step need adding?
5. **Ownership:** is there one person in the business who benefits and wants to drive it?

Processes that score low on checking or ownership fall away, however attractive they sound. The background to these criteria is covered in [which AI use cases deliver results](/insights/which-ai-use-cases-deliver-results).

Also ask one question that often gets skipped: why does this step exist in the first place? Sometimes a process turns out to exist only because two systems don't talk to each other. Then you fix that, rather than making the manual work faster.

<aside class="scenario" aria-label="Example scenario">
<p class="scenario-label">Example scenario</p>
<p>A professional services firm with 120 staff has nine ideas for automating processes with AI. After scoring them on the five questions, three remain: reading incoming invoices, preparing quote requests, and writing the commentary for the monthly report.</p>
<p>The adviser works through the three with the client's own staff who do the work. The monthly report falls away after all: about 6 hours of work twelve times a year, and nobody in the business wants to own it. For the invoices, it turns out half the manual work comes from suppliers not stating an order number. That gets fixed with a supplier agreement, not with AI.</p>
<p>That leaves the quote requests: around 60 a month at 50 minutes each, 50 hours of work a month together. That becomes the first process.</p>
<p class="scenario-note">Fictional example, built from situations that come up often. The organisation and figures are illustrative.</p>
</aside>

## From process to automated workflow

Once you've chosen a process, you turn it into a working workflow in five steps.

<figure class="diagram" role="img" aria-label="Five steps from process to automated workflow: measure the baseline, map the process, decide the AI step and the check step, build and test alongside the old process, and go live with monitoring">
<ol class="flow">
<li><b>Baseline</b>Volume, time per action and current error rate</li>
<li><b>Map it out</b>Every step, who does what and which systems are involved</li>
<li><b>Decide the AI step</b>Which step does AI take over, and where does a person check?</li>
<li><b>Build and test</b>Alongside the current process, with a fixed test set</li>
<li><b>Go live and measure</b>Corrections, turnaround time and cost per month</li>
</ol>
<figcaption>From process to workflow: measure before you start, and design the check step before you build.</figcaption>
</figure>

**Baseline.** Measure before you start how many actions there are, how long they take, and how often something goes wrong. Reconstructing that afterwards is rarely honest.

**Map it out.** Walk through the process with the people who do it, not just with their manager. The exceptions are in the details.

**Decide the AI step.** Choose as few steps as possible for AI and leave the rest to rules. Set out what the AI is allowed to do (propose, prepare) and what it isn't (send, book, pay), and what happens when it's unsure.

**Build and test.** For many processes a workflow platform is enough; how such a chain is built is covered under [AI workflows](/ai-automation/ai-workflows). Which platforms and assistants exist and how to choose is covered under [AI tools](/ai-automation/ai-tools). The build is done by your own team or a partner you contract directly. Test with a fixed set of real examples, including the difficult cases.

**Go live and measure.** Let the new way of working run alongside the old one for a few weeks and compare. Only scale up once corrections are low and stable. If the automation has to choose its own steps rather than follow a fixed route, you're talking about AI agents, and stricter checking requirements apply.

## Calculating the saving

A saving you can't calculate upfront, you can't demonstrate afterwards either. Use this method:

1. **Hours now** = number of actions per month × time per action.
2. **Hours after** = number of actions × (remaining time per action, including checking and corrections).
3. **Adoption factor:** what share of actions genuinely goes through the new workflow? Exceptions stay manual work.
4. **Gross saving** = (hours now − hours after) × adoption factor × hourly cost.
5. **Net saving** = gross saving − licences − the AI model's usage costs − management.
6. **Payback period** = one-off costs ÷ net saving per month.

**Worked example with fictional, rounded figures.** A business produces 120 quotes a month. By hand, a quote takes 45 minutes: 90 hours a month. With an AI draft, 20 minutes per quote remains for checking and adjusting: 40 hours. That's a 50-hour difference. Say 70 percent of quotes are standard enough for the new workflow; that leaves a 35-hour saving. At a fictional hourly cost of £45, that's £1,575 gross a month. Subtract £300 for licences, usage and management: £1,275 net. With a one-off cost of £9,000, the payback period is roughly seven months.

Then work through two further scenarios: a pessimistic one (lower adoption, more checking time) and one with double the volume, because usage costs usually grow with use. That gives you a range instead of one figure nobody believes.

And the most important rule: 35 saved hours are only worth £1,575 once those hours demonstrably deliver something elsewhere, for example less contracted help or more quotes with the same headcount. How to make that case to your finance director is covered in [the business case for AI](/insights/the-business-case-for-ai).

This page belongs with the overview of [AI automation](/ai-automation). Want to know which processes in your organisation pay off the most? The [AI Readiness Assessment](/services/ai-readiness-assessment) maps that out in {{timing:ai-readiness-assessment}}. Or [discuss your situation in a thirty-minute advice call](/contact).
