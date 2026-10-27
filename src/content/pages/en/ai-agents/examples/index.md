---
id: C6-04
lang: en
url: /ai-agents/examples
parent: C6-00
cluster: "6. AI Agents"
pageType: Spoke
schema: article
navLabel: AI agent examples
title: "AI agent examples: 12 applications for business"
metaTitle: "AI Agent Examples | 12 Applications for Business"
metaDescription: "Twelve AI agent examples for business, from customer service and sales to HR and finance, with how each works and the integrations it needs."
keyphrase: ai agent examples
eyebrow: "Examples"
lede: "Looking for AI agent examples that go beyond the demo? Below are twelve applications for customer service, sales, HR and finance. Each one covers how the agent works, which integrations it needs, where the gain is, and at what point a human needs to check in."
primaryCta: { label: "Read more on AI agents for business", href: "mailto:dave@freelanceaiconsultant.com" }
secondaryCta: { label: "See the AI Readiness Assessment", href: /services/ai-readiness-assessment }
summary:
  - "Twelve generic examples, grouped by department, with integrations and checkpoints."
  - "Most of the value sits in preparatory work that a human then reviews."
  - "Platforms change quickly; this overview reflects October 2026."
published: "2026-10-27"
updated: "2026-10-27"
sources:
  - title: "Microsoft Copilot Studio (product page)"
    url: "https://www.microsoft.com/en-us/microsoft-365-copilot/microsoft-copilot-studio"
  - title: "Salesforce Agentforce 360 (product page)"
    url: "https://www.salesforce.com/agentforce/"
  - title: "Google Cloud: Gemini Enterprise Agent Platform (product page)"
    url: "https://cloud.google.com/products/gemini-enterprise-agent-platform"
  - title: "n8n: AI agents (product page)"
    url: "https://n8n.io/ai-agents/"
  - title: "OpenAI: Agents SDK documentation"
    url: "https://developers.openai.com/api/docs/guides/agents/sdk"
  - title: "OpenAI: deprecations page (Agent Builder shutdown, 30 November 2026)"
    url: "https://developers.openai.com/api/docs/deprecations"
  - title: "AI Act Service Desk (European Commission): Article 50, transparency obligations"
    url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50"
  - title: "Regulation (EU) 2024/1689 (AI Act), Annex III, via EUR-Lex"
    url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng"
---

## AI agents in customer service

Before the examples by department, two notes. These examples are deliberately described in generic terms. They show how an agent fits into a process, not what it delivered for a specific company. What an agent delivers in your situation depends on your volumes, your sources, and how much control the process needs. Anyone who wants to know what an agent actually is first should read how an AI agent works, covered separately on this site.

The same rule of thumb applies to every example: start with an agent that prepares or proposes, and only give it more autonomy once you know what mistakes it makes. Why that matters is covered in a separate article on the limits of AI agents.

<figure class="diagram" role="img" aria-label="Matrix classifying AI agent examples by reversibility and by internal or external consequences, with advice on how much autonomy fits each quadrant">
<div class="matrix"><div><b>Internal and reversible</b>Knowledge questions, drafts, classification. This is where an agent can work independently fastest.</div><div><b>External and reversible</b>Scheduling, status updates. Independent, with a sample check afterwards.</div><div><b>Internal and irreversible</b>Bookings, changing master data. Agent proposes, a human confirms.</div><div><b>External and irreversible</b>Payments, rejections, decisions about people. Agent prepares, a human decides.</div></div>
<figcaption>Where an example falls in this matrix determines how much autonomy the agent can get, more than the technology does.</figcaption>
</figure>

Customer service is often where agents are considered first, because there's a lot of repetition and the information is spread across several systems.

**1. Mail and ticket preparation.** The agent reads an incoming query, identifies the subject, looks up customer and order details, and drafts a reply. A staff member checks and sends it.

- **Integrations:** mailbox or ticketing system, CRM, order administration.
- **Where the gain is:** less searching per query, more consistent replies.
- **Human check:** every outgoing email, until it's clear which categories consistently go well.

**2. Routing and prioritising.** The agent assesses incoming tickets for urgency and topic and routes them to the right team, with a short summary.

- **Integrations:** ticketing system, team structure.
- **Where the gain is:** faster first response on urgent matters, less manual sorting.
- **Human check:** a daily sample of incorrectly routed tickets.

**3. Self-service with real actions.** A customer asks via chat for an address change or a return status, and the agent carries it out within pre-set limits.

- **Integrations:** customer portal, CRM, logistics system.
- **Where the gain is:** simple requests handled outside office hours.
- **Human check:** fixed limits per action and a sample check afterwards; anything outside those limits goes to a staff member.

Worth noting: under the EU AI Act, providers of AI systems that interact directly with people, including chatbots, must make sure users are informed they're interacting with AI, unless that's already obvious from the context ([Article 50](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50)). That obligation isn't limited to EU-based organisations either: it also reaches a UK business that places such a system on the EU market, or whose output is used in the EU.

## AI agents in sales

In sales, a lot of time goes into preparation and admin around the actual conversation. An agent can help there, as long as customer contact stays with the salesperson.

**4. Lead research.** The agent gathers public information about a prospect and combines it with previous CRM contact history into a short briefing.

- **Integrations:** CRM, web search.
- **Where the gain is:** better preparation in less time.
- **Human check:** the salesperson reviews the briefing; the agent doesn't contact the prospect itself.

**5. Call notes and follow-up.** After a call, the agent turns the notes into a summary, updates the opportunity, and drafts a follow-up email. The salesperson approves it.

- **Integrations:** calendar, notes or transcription tool, CRM, email.
- **Where the gain is:** less admin after every call, a more current CRM.
- **Human check:** approval of the summary and the email before anything is saved or sent.

**6. Quote preparation.** The agent pulls the right products, pricing agreements and standard text, and drafts a quote.

- **Integrations:** product catalogue, price lists, CRM, document templates.
- **Where the gain is:** faster turnaround from request to quote.
- **Human check:** the salesperson checks prices and terms.

An agent that sends quotes on its own hits your margin and reputation directly; there should always be a confirmation step here.

## AI agents in HR

HR combines a lot of recurring questions with sensitive data and decisions about people. That makes it an area where the line between supporting and deciding needs to be drawn especially sharply.

**7. Staff questions.** The agent answers questions about leave, expenses and policies based on the staff handbook, and points to the source.

- **Integrations:** intranet, HR policy documents.
- **Where the gain is:** fewer recurring questions reaching HR.
- **Human check:** periodic review of whether the sources are current; personal situations go to an HR staff member.

**8. Onboarding.** The agent sets up the standard tasks for a new starter: requesting accounts, scheduling introduction meetings, collecting documents.

- **Integrations:** HR system, IT service desk, calendar.
- **Where the gain is:** fewer forgotten steps, a predictable first week.
- **Human check:** HR confirms the requests before accounts are created.

**9. Job adverts and scheduling.** The agent drafts job adverts and schedules interviews in coordination with the team's calendars.

- **Integrations:** recruitment system, calendar.
- **Where the gain is:** less coordination work.
- **Human check:** the recruiter approves the text and the invitations.

One limit: AI systems that screen applications or assess candidates are listed as high-risk under Annex III of the AI Act. Keep the agent to supporting work here and leave the assessment to people.

## AI agents in finance

Finance is mostly about checking, reconciling and following up. Agents can do that preparatory work well, but a mistake in a booking carries through into reporting and filings. That's why a human stays the final step here.

**10. Invoice checking.** The agent compares incoming invoices against purchase orders and goods receipts and flags discrepancies for accounts payable.

- **Integrations:** accounting package or ERP, procurement system.
- **Where the gain is:** attention goes to the exceptions, not the routine.
- **Human check:** discrepancies and payment decisions stay with accounts payable.

**11. Month-end close preparation.** The agent gathers outstanding items, proposes draft bookings, and lists missing documents.

- **Integrations:** ERP, bank, reporting tool.
- **Where the gain is:** a faster, better-prepared close.
- **Human check:** every booking is confirmed by a staff member.

Bookings fall into the category where a mistake can carry through quietly. The agent proposes, a human books.

**12. Accounts receivable follow-up.** The agent flags overdue invoices, looks up the contact history, and drafts a suitable reminder.

- **Integrations:** accounting package, CRM, email.
- **Where the gain is:** more timely follow-up without anyone having to maintain lists.
- **Human check:** reminders only go out after approval, especially for customers with an ongoing conversation.

More AI applications beyond agents, such as analysis and document processing, are covered separately on this site.

<aside class="scenario" aria-label="Example scenario">
<p class="scenario-label">Example scenario</p>
<p>A manufacturing company with 180 staff receives around 2,500 purchase invoices a month. Two accounts-payable staff match them manually against purchase orders and goods receipts, averaging 4 minutes per invoice.</p>
<p>The adviser sets the requirements from the client's side and tests two vendors' proposals on the same set of 300 invoices from the previous quarter. The agent compares amounts, quantities and order numbers and flags discrepancies. Booking, paying and contacting suppliers deliberately stay with the administration team.</p>
<p>After three months, around 75 percent of invoices go through to approval without a discrepancy. Those still take half a minute of checking. That saves roughly 110 hours a month, time that now goes into resolving the exceptions instead.</p>
<p class="scenario-note">Fictional example, built from situations that come up often. The organisation and figures are illustrative.</p>
</aside>

## Best AI agent platforms

There's no single best platform in general, only one that fits the software you already use, your requirements for control, and your own technical capacity. I don't receive commissions or any other payment from any of these vendors. This overview reflects October 2026, based on the vendors' own product information. Features and names change quickly, so check the current situation before you choose.

| Platform | What it is | Fits best for |
|---|---|---|
| [Microsoft Copilot Studio](https://www.microsoft.com/en-us/microsoft-365-copilot/microsoft-copilot-studio) | Environment for building agents with natural language or a graphical editor, publishable into Teams and SharePoint among others | Organisations running on Microsoft 365 |
| [Salesforce Agentforce 360](https://www.salesforce.com/agentforce/) | Agent platform within Salesforce, covering service, sales and HR among others, built on CRM data | Organisations with Salesforce as their CRM |
| [Google Gemini Enterprise Agent Platform](https://cloud.google.com/products/gemini-enterprise-agent-platform) | Google Cloud's development platform (formerly Vertex AI) for building, scaling and managing agents | Teams with development capacity on Google Cloud |
| [n8n](https://n8n.io/ai-agents/) | Visual workflow builder with agent features and many integrations, also self-hostable | Organisations that want agents built into broader workflows |
| [OpenAI Agents SDK](https://developers.openai.com/api/docs/guides/agents/sdk) | Development kit (Python or TypeScript) for building agents in code, running in your own application | Development teams building bespoke work |

When choosing between platforms, I look at five questions:

- **Fit:** does the platform work with the systems the agent needs to read and write, without heavy custom integrations?
- **Control:** can you require human confirmation per action, and can every step the agent takes be traced back?
- **Data:** where is data processed and stored, is there a data processing agreement, and is your input used to train models?
- **Cost:** how is it billed, per user, per conversation or per volume of text processed, and what does that mean at your volumes?
- **Exit:** can you take your instructions, data and logs with you if you switch?

A current example of how fast this changes: according to [OpenAI's own documentation](https://developers.openai.com/api/docs/deprecations), the visual Agent Builder is being phased out and shuts down on 30 November 2026 (as of October 2026). Anyone who built on it needs to migrate. That's a reminder to agree how you'd get off a platform before you choose it, not after.

Which route fits, platform or bespoke work, and how to select a delivery partner, is covered separately on this site. For applications, costs and implementation at a glance, see AI agents for business. Want to know which of these examples fits your organisation? [Book a no-obligation call](/contact).
