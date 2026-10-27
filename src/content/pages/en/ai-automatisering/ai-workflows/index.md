---
id: C3-04
lang: en
url: /ai-automation/ai-workflows
parent: C3-00
cluster: "3. AI Automation"
pageType: Spoke
schema: article
navLabel: AI Workflows
title: "AI workflows: automating work from start to finish"
metaTitle: "AI Workflows | Examples and Approach for Business"
metaDescription: "What is an AI workflow and how do you set one up? See examples of AI workflows for business, the tools you need and a safe approach for your team."
keyphrase: ai workflows
eyebrow: "AI workflows"
lede: "An AI workflow is a fixed sequence of steps in which one or more steps are carried out by an AI model: reading an email, working through a document, drafting a reply. The rest of the chain is ordinary integrations and a person who checks. Here's what such a workflow looks like, which tools you need and how to roll it out safely."
primaryCta: { label: "Read more about AI automation", href: /ai-automation }
secondaryCta: { label: "See the AI Readiness Assessment", href: /services/ai-readiness-assessment }
summary:
  - "An AI workflow follows a fixed route; only some steps use AI."
  - "Build in the check step and the logging from the first version."
  - "Choose a workflow when the route is predictable, an agent only when it isn't."
published: "2026-10-27"
updated: "2026-10-27"
faqTitle: "Frequently asked questions"
faq:
  - q: "What does an AI workflow cost per month?"
    a: "That's made up of three parts: the subscription to the workflow platform, the usage cost of the AI model per task processed, and the time spent on management. The first two depend heavily on volume. Have the vendor or build partner work out the cost per task processed, and multiply that by your expected volume, and by double that."
  - q: "What data am I allowed to put through an AI workflow?"
    a: "First establish whether the stream contains personal data or confidential business information. If so, check where the AI model and the platform process and store that data, whether it's used to train models, and whether a data processing agreement is in place. Only send the fields the AI step actually needs."
  - q: "Who on my team should manage an AI workflow?"
    a: "Someone who knows the process and someone who knows the platform. That's often a process owner from the business plus a functional administrator or IT staff member. The process owner judges the quality of the output; the administrator keeps an eye on integrations, permissions and error messages."
  - q: "What do I do when the AI model behind my workflow changes?"
    a: "Vendors regularly replace models with newer versions. So keep a fixed test set of real examples and the desired outcome. Re-run that set at every model change and compare the results before putting the new version into production."
sources:
  - title: "Zapier: AI automation and integrations (as of October 2026)"
    url: "https://zapier.com/"
  - title: "Make: visual automation platform (as of October 2026)"
    url: "https://www.make.com/en"
  - title: "n8n: workflow automation, self-hostable (as of October 2026)"
    url: "https://n8n.io/"
  - title: "Microsoft Learn: What is Power Automate?"
    url: "https://learn.microsoft.com/en-us/power-automate/flow-types"
  - title: "Microsoft Learn: Overview of AI Builder"
    url: "https://learn.microsoft.com/en-us/ai-builder/overview"
---

## What is an AI workflow?

An AI workflow is an automated sequence of steps in which at least one step is done by an AI model. The route is fixed: this first, then that, outcome A goes left, outcome B goes right. The AI only handles the part where ordinary rules fall short, such as understanding an email written in free text or pulling data out of a PDF.

An AI workflow almost always consists of the same building blocks:

- **Trigger:** something starts the workflow, such as a new email, a form or a scheduled time.
- **Retrieve:** the workflow gathers what it needs from your systems.
- **AI step:** the model reads, classifies, summarises or drafts a reply.
- **Check:** rules check the output and a person reviews what matters.
- **Action:** the workflow writes something back, creates a task or queues a message.
- **Logging:** every step is recorded, so you can see afterwards what happened.

<figure class="diagram" role="img" aria-label="Structure of an AI workflow: trigger, retrieving data, AI step, checking by rules and a person, action in a system, and logging of every step">
<ol class="flow">
<li><b>Trigger</b>New email, form or scheduled time</li>
<li><b>Retrieve</b>Customer data, order history, documents</li>
<li><b>AI step</b>Reading, classifying, summarising or drafting a reply</li>
<li><b>Check</b>Rule check plus review by a staff member</li>
<li><b>Action</b>Writing back, creating a task or queuing a message</li>
<li><b>Logging</b>Every step recorded for review and improvement</li>
</ol>
<figcaption>The building blocks of an AI workflow. The AI step is one link; the rest is ordinary automation and human checking.</figcaption>
</figure>

The difference from a standalone AI assistant: an assistant waits for a user's question, an AI workflow runs inside your process and repeats the same step every time. AI workflow automation is therefore a part of [AI automation](/ai-automation) in the broader sense.

## AI workflow examples

Three examples of AI workflows for business, described generically. They're deliberately small: one process, a clear check step, a measurable result.

### Inbox and customer queries

An email arrives in the shared inbox. The workflow looks up the sender in the CRM and hands the email to an AI step, which determines the topic (order, complaint, invoice query, other) and estimates urgency. For a familiar topic, the AI drafts a reply from the knowledge base. The draft arrives as a task for the right staff member, who checks it and sends it. If the model is unsure, the email goes to a person with no draft attached.

### Content and marketing

A product manager fills in a short form with new product details. The workflow retrieves the specifications, has the AI step write product copy and a few social media variants in-house style, and queues everything in the content system as a draft. An editor approves or adjusts it. Factual details such as prices and dimensions come from the product system, not the language model.

### Finance and admin

A supplier emails an invoice as a PDF. The workflow saves the attachment, the AI step reads out supplier, amount, VAT and order number, and a rule step compares those details against the purchase order. If everything matches within the agreed margin, the invoice is queued for approval. If something's off, accounts payable gets a flag with the discrepancy. The workflow never makes a payment itself.

More examples by process, and a method for choosing which process to tackle first, are covered under [automate business processes with AI](/ai-automation/automate-business-processes-with-ai).

<aside class="scenario" aria-label="Example scenario">
<p class="scenario-label">Example scenario</p>
<p>A maintenance company with 70 staff gets around 600 emails a week in the shared inbox: fault reports, appointment requests, invoice queries and other post. Two planners sort all of it by hand, spending roughly 10 hours a week on it between them.</p>
<p>The adviser maps the route with the planners and sets the requirements for a workflow in Power Automate, which the company's own IT administrator builds. The AI step determines topic and urgency; if it's unsure, the email goes unsorted to a planner. For the first six weeks, a planner checks a daily sample of twenty emails.</p>
<p>After six weeks, 92 percent of emails are correctly routed and sorting time drops from 10 to around 3 hours a week. The workflow never sends anything to customers itself.</p>
<p class="scenario-note">Fictional example, built from situations that come up often. The organisation and figures are illustrative.</p>
</aside>

## Tools for AI workflows

For most AI workflows you need a workflow platform that connects your systems and can call an AI step. Four well-known platforms, each with a feature the vendor itself highlights (as of October 2026):

| Platform | Relevant feature according to the vendor |
|---|---|
| [Zapier](https://zapier.com/) | Focuses on connecting a wide range of apps; states more than 9,000 integrations and offers AI agents |
| [Make](https://www.make.com/en) | Visual platform where you build flows as a diagram; reports more than 3,000 ready-made app integrations |
| [n8n](https://n8n.io/) | Self-hostable (including with Docker) alongside a hosted version; more than 500 integrations |
| [Power Automate](https://learn.microsoft.com/en-us/power-automate/flow-types) | Cloud flows and desktop flows; AI models via [AI Builder](https://learn.microsoft.com/en-us/ai-builder/overview), for example for document processing |

Which one fits depends less on the feature list than on your situation. If you already work entirely in Microsoft 365, Power Automate is the obvious choice. If you want to keep data inside your own environment, a self-hostable platform is an option, but then you're also responsible for management and security yourself. Prices and features change quickly; check them with the vendor. A broader overview, including assistants and when custom development is needed, is covered under [AI tools](/ai-automation/ai-tools).

I have no commercial relationship with any of these vendors and receive no commission. That means I can also advise you to stick with your existing software for now.

## Implementing an AI workflow

Implementing an AI workflow comes down to five steps in practice:

1. **Choose one process** with high volume, predictable input and an owner who benefits from it. Measure time, volume and errors beforehand.
2. **Map the route** with the people who do the work today. Decide which step becomes AI and what happens when the model is unsure.
3. **Decide who builds it.** A simple flow can be built by a capable colleague on a no-code platform. As soon as integrations with core systems or sensitive data are involved, you need an IT team or partner. You contract that partner directly; I help set the requirements and assess the delivery.
4. **Test with real examples**, including the difficult cases, and run the workflow alongside the current process for a few weeks.
5. **Arrange management before go-live:** who looks at error messages, who reviews samples, who's allowed to switch the workflow off?

For an AI workflow in a small or medium-sized business, step 3 is often the hardest: there's no IT department, and choosing an external party without technical knowledge is difficult. That's exactly when it helps to have the requirements on paper beforehand, so you can compare quotes on the same points.

## AI workflows versus AI agents

The difference is in who decides the route. With an AI workflow, you've fixed the route in advance; the AI only fills in a step. With an AI agent, the model gets a goal and chooses for itself which steps and tools to use.

<figure class="diagram" role="img" aria-label="Comparison of AI workflows and AI agents: a workflow follows a fixed route and is easy to test, an agent chooses its own route and is harder to check; choose a workflow for fixed steps and an agent when the steps genuinely differ case by case">
<div class="matrix">
<div><b>AI workflow</b>Fixed route, predictable behaviour, easy to test and check.</div>
<div><b>AI agent</b>Flexible route, can handle unexpected situations, harder to test and check.</div>
<div><b>Choose a workflow when</b>the process always follows the same steps and you need to be able to explain every outcome.</div>
<div><b>Choose an agent when</b>the steps genuinely differ case by case and a mistake is reversible.</div>
</div>
<figcaption>Workflow or agent: the difference is in who decides the route.</figcaption>
</figure>

My advice is almost always to start with a workflow. You learn which errors occur and where a person is still needed. You need that knowledge before giving a model more freedom. Where agents do and don't work well is covered in [what AI agents can and cannot do](/insights/what-ai-agents-can-and-cannot-do).

Not sure which process lends itself to a first AI workflow, or want a build partner's proposal checked over? [Book a thirty-minute advice call](/contact).
