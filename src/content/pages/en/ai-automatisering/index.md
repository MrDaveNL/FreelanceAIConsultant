---
id: C3-00
lang: en
url: /ai-automation
parent: null
cluster: "3. AI Automation"
pageType: Hub
schema: service
navLabel: AI Automation
title: "AI automation: work smarter with less manual effort"
metaTitle: "AI Automation for Business | Where to Start"
metaDescription: "AI automation takes repetitive work off your plate, from customer service to admin. See which processes to automate, what it costs, and how to scale it."
keyphrase: ai automation
eyebrow: "AI automation"
lede: "AI automation takes on work that's too messy for classic automation: reading emails, working through documents, drafting a first reply. It only pays off if you choose the right process and get the human check right. This page covers where to start, what it costs, and how to scale it safely."
primaryCta: { label: "Book a strategy call", href: "mailto:dave@freelanceaiconsultant.com" }
secondaryCta: { label: "See the AI Readiness Assessment", href: /services/ai-readiness-assessment }
summary:
  - "AI automation suits work with unstructured input: text, documents, email."
  - "Choose processes with high volume, low variation and an existing check step."
  - "Calculate the saving honestly, including management, usage costs and the checking time that remains."
published: "2026-10-26"
updated: "2026-10-26"
faqTitle: "Frequently asked questions"
faq:
  - q: "What's the difference between AI automation and an AI assistant like a chatbot?"
    a: "An AI assistant waits until someone asks a question. AI automation sits inside a process and repeats a fixed step every time, for example reading every incoming invoice or categorising every customer query. The first helps a person; the second changes a workflow."
  - q: "Do I need to sort out my data before I can automate?"
    a: "Not everywhere. For reading emails or documents, you mainly need good examples and clear rules. Once an automation needs to look up or write data in your systems, the quality of that data starts to matter, and messy master data gets messy faster and at greater scale."
  - q: "Can I set up AI automation myself without developers?"
    a: "Simple flows, yes, with no-code platforms. Once integrations with your own systems, sensitive data or high volume come into play, you need someone who can set up management, logging and error-handling. That can be an in-house IT person or a partner."
  - q: "How do I stop an AI automation making mistakes that reach customers?"
    a: "At the start, let the AI only prepare and suggest, and have a staff member check everything that goes out. Measure for a few weeks how often that person has to correct it. Only once that's reliably low can you let steps run without a check, and then only ones you can undo."
  - q: "What happens to staff when a process gets automated?"
    a: "Usually their role shifts from doing to checking and handling exceptions. Discuss beforehand what happens with the freed-up time. Without that conversation, the saving rarely shows up in the numbers, and resistance grows."
sources:
  - title: "Zapier: AI automation and integrations (as of September 2026)"
    url: "https://zapier.com/"
  - title: "Make: visual automation platform (as of September 2026)"
    url: "https://www.make.com/en"
  - title: "n8n: workflow automation, self-hostable (as of September 2026)"
    url: "https://n8n.io/"
  - title: "AI Act Service Desk (European Commission): Annex III, high-risk AI systems"
    url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/annex-3"
  - title: "AI Act Service Desk (European Commission): Article 2, scope"
    url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-2"
  - title: "UK Government: AI regulation, a pro-innovation approach"
    url: "https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach"
  - title: "Microsoft Learn: What is Power Automate?"
    url: "https://learn.microsoft.com/en-us/power-automate/flow-types"
---

## What is AI automation?

AI automation is the automation of work steps where an AI model does something a person used to have to do: understand text, pull information from a document, categorise a query, or draft a first version. The difference from ordinary automation is in the input. Classic software needs tidy fields and fixed rules. An AI model can work with an email in free text, a scanned delivery note, or a complaint written half in another language.

In practice, AI automation is almost never a single AI model working alone. It's a chain: a trigger (an email arrives), an AI step (read and classify), an action in a system (create a ticket), and, somewhere, a person who checks. The AI step is often the smallest part of the work. The integrations, the error handling, and the agreements on who checks what decide whether it keeps working.

Automating with AI is therefore mostly a process question. Which step takes a lot of time, comes up often, and is predictable enough to hand over? And what happens when the AI gets it wrong?

## AI automation versus classic automation

Classic automation, including RPA (robotic process automation), follows rules. If field A is filled in, copy it to system B. That's reliable and easy to check, but it breaks as soon as the input deviates from what the rule expects.

AI automation works with probabilities. The model estimates what a document is or what a customer means. That makes it more flexible and, at the same time, less predictable: it usually gives a good answer, and occasionally a wrong one that looks convincing.

| | Classic automation | AI automation |
|---|---|---|
| Input | Structured: fields, forms, fixed files | Unstructured: text, email, PDFs, speech |
| How it works | Fixed rules | Estimation by a model |
| Errors | Predictable, usually an error message | Unpredictable, sometimes without any error message |
| Checking | A spot check is often enough | Human checking needed at the start |

The strongest solutions combine both: rules wherever possible, AI only for the step rules can't handle. Comparing RPA with AI automation in more depth is a topic for a future article on this site.

## Which processes can you automate with AI?

Good candidates share three things: they come up often, they closely resemble each other, and someone is already looking at the result today. Below are the areas where that pattern shows up most often. A fuller approach to selecting processes will follow in a future article on automating business processes with AI.

### Customer service

Reading incoming queries, categorising them and routing them to the right team. Preparing a draft reply based on previous answers and the knowledge base, which a staff member checks and sends. Summarising long customer files before someone calls back. The gain sits mainly in the searching and typing, not in removing the person.

### Admin and finance

Reading invoices and receipts and preparing the data for booking. Comparing purchase orders against delivery notes and invoices, and only flagging the discrepancies. Preparing payment reminders in the tone that fits the customer. Here especially, an error in a figure can propagate silently, so the check step stays important.

### Sales and marketing

Enriching leads with public information and a first estimate of fit. Drafting quotes based on standard text and the customer's request. Drafting product copy or social posts for an editor. Marketing automation for small and medium-sized businesses gets an extra layer this way: it's not just the send times that are fixed, the first draft of the content gets prepared too.

### HR and internal knowledge

Answering staff questions about policies based on the staff handbook. Drafting job adverts. Pulling minutes and action lists out of meetings, which deserves its own treatment elsewhere on this site. Be cautious with anything that touches an assessment of people: that's sensitive under data protection law, and AI used for recruitment, selection and staff assessment is listed as high-risk under the EU AI Act (Annex III). That obligation isn't limited to EU-based organisations: under [Article 2 of the Act](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-2), it also applies to UK organisations that place such a system on the EU market, or whose system's output is used in the EU. The UK has no AI Act of its own and regulates AI through existing sector regulators instead, as set out in the UK government's [AI regulation: a pro-innovation approach](https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach).

## AI automation examples

A few examples to make it concrete, described generically:

- **A wholesaler** has incoming email orders read and set up as a draft in the order system. The order desk checks and confirms.
- **An accountancy firm** has incoming client documents sorted and checked for completeness before a staff member picks up the file.
- **An installation company** has engineers' job sheets converted into a tidy report for the customer.
- **A professional services firm** gives knowledge workers an internal assistant for a few fixed tasks, such as searching files and drafting reports.

That last example matches the case study on an [internal AI assistant for knowledge workers](/cases/internal-ai-assistant-knowledge-workers). The lesson is broader: the technology was ready quickly, adoption took far more time, and it only worked once the assistant was deployed for a few well-defined tasks instead of "everything."

<aside class="scenario" aria-label="Example scenario">
<p class="scenario-label">Example scenario</p>
<p>A packaging wholesaler with 60 staff receives around 1,100 orders a month by email, as a PDF or in the body of the message. Three order-desk staff retype them into the order system, averaging 5 minutes per order.</p>
<p>The adviser runs a baseline measurement, sets the requirements, and guides the selection of a partner the wholesaler contracts directly. The AI step reads customer, items and quantities, and prepares a draft order; the order desk confirms it. Orders with non-standard pricing or unrecognised item numbers go straight to a staff member without a draft.</p>
<p>After three months, around 80 percent of orders go through the new route, with 1.5 minutes of checking per order. That saves roughly 51 hours a month. The share of input errors drops from just over 2 percent to under 1 percent.</p>
<p class="scenario-note">Fictional example, built from situations that come up often. The organisation and figures are illustrative.</p>
</aside>

## Scaling up in larger organisations

In AI automation for businesses with multiple departments, the question shifts. The first automation is rarely the problem. The problem is the tenth: who manages them, how do you know they're still working, and what happens when the underlying model changes? Pilots that succeed technically but never get rolled out more broadly are common.

### Connecting with existing systems

Connecting to your ERP, CRM or document system almost always takes more time than the AI step itself. So ask three questions early: which systems need to open up, who manages those integrations, and what permissions does the automation get? An automation running with admin-level permissions can do more damage than necessary. Give it access only to what it needs for that one task.

Pay attention to the data itself too. An automation that looks up customer data is only as good as the data in your CRM.

### Governance when scaling up

With one automation you can keep everything in your head. With twenty, you can't. At minimum, you need:

- **A register** of every automation with an AI step: what it does, what data it uses, who owns it.
- **A risk assessment** per application, including whether the EU AI Act or data protection law places extra requirements on it.
- **Monitoring** of quality, for example a monthly sample and a tally of corrections.
- **A kill switch**: who is allowed to turn an automation off if something goes wrong, and how do you fall back to manual work?

That doesn't have to turn into bureaucracy. A future page on this site covers how to set this up lightly and workably.

## AI automation for small and medium-sized businesses

For AI automation in smaller businesses, the same principles apply, with less room for experiments. There's usually no separate IT team and no budget for a project that runs for a year. That's not a disadvantage: it forces you to start small and concrete.

### The best processes to start with

Start with a process that meets these five conditions:

1. It comes up at least dozens of times a week.
2. The input looks similar each time (the same kind of email, the same type of document).
3. Someone is already looking at the result, so you have a check step.
4. A mistake is visible and cheap to fix.
5. There's one person who directly benefits and wants to own it.

Sorting incoming email, reading invoices and drafting quotes often meet this bar.

### Costs and payback period

The cost of AI automation has four components: the one-off set-up (by an in-house staff member or a partner), licences for the platform, usage costs for the AI model per document or message processed, and management. The last two are the ones most often forgotten. The calculation is simple:

- **Gross saving per month** = (time per action now minus time per action after automation, including checking) × number of actions × hourly cost.
- **Net saving per month** = gross saving minus licences minus usage minus management.
- **Payback period in months** = one-off cost divided by net saving per month.

**Worked example with fictional, rounded figures.** A business processes 400 invoices a month. By hand that takes 6 minutes per invoice, 40 hours in total. After automation, 2 minutes of checking remains per invoice, around 13 hours in total. That saves roughly 27 hours a month. At a fictional hourly cost of £45, that's about £1,215 gross. Say licences, usage and management together cost £320 a month; that leaves roughly £895 net. With a one-off set-up cost of £9,000, you pay back the investment in about ten months.

The key caveat: hours saved are only a saving once that time is demonstrably used differently, or less contracted help is needed. How to work that out honestly will be covered elsewhere on this site.

## How I approach AI automation

I'm an independent adviser. I don't build automations myself and I don't sell software or licences. What I do: work with you to decide what to automate, how to get it built, and how to keep it working. The build is done by your own team or a partner you contract directly, with no margin for me.

<figure class="diagram" role="img" aria-label="Four-step approach: review the process with a baseline measurement, prioritise candidates, choose between a standard tool, your own team or a partner, and guide the build with checkpoints and management">
<ol class="flow">
<li><b>Review</b>Map the process, with a baseline measurement of time, volume and errors</li>
<li><b>Prioritise</b>Score candidates on volume, variation, data, checking and ownership</li>
<li><b>Choose</b>Standard tool, your own team or a partner, with requirements and a cost estimate</li>
<li><b>Guide</b>Acceptance criteria, test set, check step and management before go-live</li>
</ol>
<figcaption>From process to working automation. I advise and guide; the build is done by your own team or a partner you contract yourself.</figcaption>
</figure>

Concretely, at each step I deliver something you can make a decision with: a process description with a baseline measurement, a prioritised list with the rejected candidates noted, a decision document on building, buying or bringing in a partner, and a measurement set-up for after go-live. During the build, I sit on your side of the table: I test the delivery against the agreed criteria and make sure management and checking are arranged.

If you need help finding a delivery partner, I can suggest parties from my [partner network](/partner-network); you choose and contract them yourself. Who I am and how I work is on the [about](/about) page.

Not sure yet which process should go first? The [AI Readiness Assessment](/services/ai-readiness-assessment) is the logical starting point. In {{timing:ai-readiness-assessment}} you get a validated list of opportunities and a 90-day plan, for a fixed price agreed upfront (the proposal excludes VAT).

## Tools and workflows

For most AI automation, you don't need bespoke development. A workflow platform connects your systems and adds an AI step wherever needed. Well-known platforms, each with a feature the vendor highlights on its own site (as of September 2026):

- **Zapier** focuses on connecting a wide range of apps; it states more than 9,000 integrations and also offers AI agents.
- **Make** is a visual platform where you build flows as a diagram; it reports more than 3,000 ready-made app integrations.
- **n8n** can be self-hosted, for example with Docker, alongside a hosted version, relevant if you want to keep data inside your own environment.
- **Microsoft Power Automate** has cloud flows and desktop flows. The latter also automates tasks in desktop and web applications, a natural fit if you already work in Microsoft 365.

Prices and features change quickly; always check them with the vendor directly.

Want to know which processes in your organisation would pay off the most? [Book a thirty-minute strategy call](/contact). By the end you'll know what I'd do, even if that means you don't need me.
