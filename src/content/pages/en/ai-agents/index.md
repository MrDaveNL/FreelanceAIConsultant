---
id: C6-00
lang: en
url: /ai-agents
parent: null
cluster: "6. AI Agents"
pageType: Hub
schema: service
navLabel: AI Agents
title: "AI agents for business: applications, costs and implementation"
metaTitle: "AI Agents for Business | Applications, Costs & Rollout"
metaDescription: "Discover how AI agents for business work: real examples, what they cost, and how to introduce them without losing control over what they do."
keyphrase: ai agents for business
eyebrow: "AI agents"
lede: "AI agents for business promise work that runs itself: a system that's given a goal and works out the steps on its own. That can deliver real value, but only if you decide upfront which steps you're willing to hand over and who checks the work. This page covers where agents fit, what they cost, and how to introduce them responsibly."
primaryCta: { label: "Book a consultation", href: /contact }
secondaryCta: { label: "See the AI Readiness Assessment", href: /services/ai-readiness-assessment }
summary:
  - "An AI agent carries out steps itself towards a goal; that calls for different safeguards than a chatbot."
  - "Start with preparing and proposing, and only move to independent action later."
  - "I don't build agents myself: I help you choose, specify and steer a delivery partner."
published: "2026-10-27"
updated: "2026-10-27"
faqTitle: "Frequently asked questions about AI agents"
faq:
  - q: "What's the difference between an AI agent and a chatbot?"
    a: "A chatbot answers questions within a single conversation. An AI agent is given a goal, works out which steps are needed, and carries them out in other systems, such as a CRM, a ticketing system or a mailbox. That means an agent can do more, but it can also get more wrong. The question of who checks a step becomes far more important with an agent."
  - q: "Do you need technical knowledge for AI agents?"
    a: "Not to use one. To have one built and deployed responsibly, yes, someone who asks the right questions: about data, integrations, access rights, logging and upkeep. That knowledge can sit in-house, with a delivery partner, or with an independent adviser looking out for you."
  - q: "Can AI agents be connected to existing systems?"
    a: "Yes, and that's usually where the value sits. An agent that can't look anything up or record anything is little more than a chatbot. Every integration still needs a deliberate choice about what the agent is allowed to read and what it's allowed to change. Start with read access and add write access only once you know how the agent behaves."
  - q: "How long does it take before an AI agent delivers something?"
    a: "That depends mainly on the integrations and the quality of the underlying information, less on the agent itself. A tightly scoped first version that does preparatory work goes into use faster than an agent that has to write into several systems. Either way, plan a test period in which people review every outcome."
  - q: "Who's responsible if an AI agent makes a mistake?"
    a: "The organisation that deploys it. A vendor or delivery partner can make contractual commitments about quality and availability, but responsibility for the outcome towards customers, staff and regulators stays with you. Record, for each agent, who owns it and who can shut it down."
sources:
  - title: "AI Act Service Desk (European Commission): Article 50, transparency obligations"
    url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50"
  - title: "Regulation (EU) 2024/1689 (AI Act), Annex III, via EUR-Lex"
    url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng"
---

## What can AI agents do for a business?

An AI agent is software that's given a goal and works out for itself which steps are needed to reach it: looking up information, consulting a system, assessing an intermediate result, and choosing the next step. Where an ordinary AI application gives a single answer, an agent carries out a sequence of actions. Anyone who wants to know how that works technically can read the explanation of [what an AI agent is and how it works](/ai-agents/what-is-an-ai-agent).

For AI agents for business, the central question is therefore not which model you use, but which steps you're prepared to hand over. An agent that prepares a file is a very different risk from an agent that independently starts a payment. I wrote at length earlier about [what agents can and can't do](/insights/what-ai-agents-can-and-cannot-do). In short: agents do well on preparatory work, on steps you can reverse, and on tasks with a hard final check. They break down on processes where a mistake carries through quietly, on actions with external consequences, and on long chains with no checkpoint in between.

Within those limits, four areas stand out as where agents are usually considered first.

### Automating customer service

An agent can read an incoming query, look up the customer's details and order status, draft a reply, and route the question to the right team. The gain often isn't in the answer itself but in the searching a staff member no longer has to do. Worth noting: under the EU AI Act, providers of AI systems that interact directly with people, including chatbots, must make sure users are informed they're interacting with AI, unless that's already obvious from the context ([Article 50](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50)). That obligation isn't limited to EU-based organisations either: it also reaches a UK business that places such a system on the EU market, or whose output is used in the EU.

### Supporting sales

In sales, an agent can enrich leads with public and internal information, prepare a call brief, or, after a meeting, draft a summary and a follow-up action in the CRM. The salesperson decides and sends. An agent that sends quotes or emails to prospects on its own hits your reputation directly; that calls for a confirmation step.

### Making internal knowledge accessible

Many organisations have knowledge scattered across handbooks, an intranet, tickets and shared folders. An agent can search those sources, assemble an answer, and show where it came from. That's a relatively safe starting point, because a staff member reviews the answer themselves. The quality depends entirely on the sources, though; outdated documents produce outdated answers.

### Automating administrative processes

Think of checking invoices against purchase orders, pulling data out of documents, or completing a file before someone reviews it. Here, an agent borders on classic automation. For fixed, predictable steps, a rule-based workflow is often cheaper and more reliable; that trade-off is covered on the page about [AI automation](/ai-automation) and in the comparison of RPA and AI automation, covered separately on this site.

## Examples of AI agents in practice

Below are four generic examples. They show how an agent fits into a process, not what it delivered for a specific company. A fuller list of twelve applications by department is on the page with [AI agent examples](/ai-agents/examples).

### AI agent for customer service

The agent reads an email, identifies the subject, looks up the order, and drafts a reply with the relevant details. A staff member checks and sends it. Only once it's clear that certain categories of question consistently go well might you consider letting the agent handle those independently, with a sample check afterwards.

### AI agent for sales

After a client call, the agent turns the call notes into a summary, updates the opportunity in the CRM, and drafts a follow-up email. The salesperson approves it. The time saved sits in the admin around the conversation, not in the conversation itself.

### AI agent for HR

An agent can help staff with questions about leave, expenses or policies, based on the staff handbook. That's a different matter from an agent that screens applications or assesses performance. That second category counts as high-risk under the AI Act (Annex III) and touches the rules on automated decision-making under GDPR. What that means is covered separately on this site.

### AI agent for internal knowledge

An agent that answers colleagues' questions based on internal documents, with the source cited. It looks like a search engine, but it can also take follow-up steps, such as raising a ticket if the answer is missing. The existing case study on an [internal AI assistant for knowledge workers](/cases/internal-ai-assistant-knowledge-workers) shows that adoption here takes more work than the technology does.

<aside class="scenario" aria-label="Example scenario">
<p class="scenario-label">Example scenario</p>
<p>A wholesaler of technical components with 140 staff receives around 900 customer emails a week. The six customer service staff spend most of their time looking up order status and delivery dates in the ERP system and the carrier's portal.</p>
<p>The adviser scopes the task from the client's side: the agent is only allowed to read from both systems and prepares a draft reply in the ticketing system. Returns, complaints and pricing agreements are deliberately kept out of the agent's reach. The build is done by a party the wholesaler contracts directly; the adviser checks the delivery against a test set of 200 real emails.</p>
<p>After three months in production, the agent produces a usable draft for around 60 percent of emails. A staff member spends an average of 1 minute on those instead of 4. That saves roughly 27 hours a week. Sending still happens by a human.</p>
<p class="scenario-note">Illustrative example, built from situations that come up often. The organisation and figures are for illustration.</p>
</aside>

## How do you implement AI agents in an organisation?

Introducing an agent is mostly a process question. The technology is rarely the bottleneck; ownership, data and control are. This is the order I keep to.

<figure class="diagram" role="img" aria-label="Five steps to introduce an AI agent: choose a suitable process, decide on data and systems, develop and test, integrate with existing systems, and monitor and improve">
<ol class="flow">
<li><b>Choose a process</b>Reversible steps, a clear final check</li>
<li><b>Data and systems</b>Which sources, which access rights</li>
<li><b>Develop and test</b>A fixed test set, a human reviews everything</li>
<li><b>Integrate</b>Read access first, write access later</li>
<li><b>Monitor</b>Logging, sampling, an owner</li>
</ol>
<figcaption>From choosing a process to ongoing management: the agent's autonomy only grows once you know what mistakes it makes.</figcaption>
</figure>

### Identify suitable processes

Look for tasks with a lot of repetition, a lot of searching, and an outcome a human can assess quickly. Ask one question per step: if this step goes wrong, who notices, when, and what does it cost to put right? Steps that fail visibly and cheaply are candidates for autonomy. Steps that can fail invisibly or irreversibly are not.

### Decide on the data and systems needed

Make a list of the sources the agent needs to consult and the systems it needs to write to. For each source, work out whether it contains personal data, who owns it, and whether the information is current. This is often the point where it becomes clear that the data foundation under AI, covered separately on this site, needs more attention than the agent itself.

### Develop and test the AI agent

Have the agent built first for a tightly scoped task, and test it against a fixed set of real cases where you know the correct outcome. In the first weeks, a human reviews every outcome. That's how you learn which mistakes actually occur. How to choose a delivery partner for that, and what to agree upfront, is covered on the page about [having an AI agent built](/ai-agents/build).

### Integrate with existing systems

Connect step by step. Start with read access, add write access only once the agent behaves predictably, and keep a confirmation step at every irreversible moment. In practice, an agent is often part of a larger [AI workflow](/ai-automation/ai-workflows) with fixed rules around it.

### Monitor and improve

Without logging, you can't reconstruct a mistake. Record which steps the agent took, which sources it used, and which decisions a human made. Plan a periodic sample check, assign an owner, and give someone the authority to shut the agent down immediately. Models and vendors change; an agent that works well today can behave differently in six months.

## What do AI agents cost?

I can't name a fair figure here, because the range is wide: from a licence on an existing platform to a bespoke project with several integrations. What I can do is name the factors that determine the price, so you can compare quotes properly.

### Factors that determine the cost

- **Number and type of integrations:** every connection to a CRM, ERP or ticketing system takes build work, testing and upkeep.
- **Write access:** an agent that only reads is simpler to build and control than one that changes data.
- **Usage:** with most language models you pay per volume of text processed; heavy use or long documents push up the running cost.
- **Requirements for control and logging:** regulated processes need an audit trail, explainability and extra testing.
- **Quality of the sources:** if data has to be cleaned up or brought together first, that's often where most of the effort sits.

### Development versus existing solutions

Many software vendors now offer agent features within their own platform. That's faster and often cheaper to start with, but you're bound to what that platform can do and to the vendor's pricing over time. Bespoke work gives more control, but you also pay for upkeep and further development. I set out that trade-off in [build, buy or partner](/insights/build-buy-or-partner); for bespoke work, the page on [AI development](/ai-development) is a logical next step.

### Costs for management and optimisation

The build is a one-off cost; management runs on. Budget for model costs per use, monitoring, periodic tests, changes as processes or systems change, and the time of an internal owner. A quote that mentions only the build is incomplete. Always ask for a multi-year cost estimate, including what it costs to switch vendor.

My own role here is advisory, not building. If you want quotes from several delivery partners independently compared, a [Vendor Review](/services/vendor-review) fits that, with a fixed price depending on the number of vendors. The other packages are on the [pricing](/pricing) page.

## AI agents for SMEs

The same principles apply to smaller organisations, but the trade-off is sharper: less budget, often no in-house IT department, and less room to absorb a failed project. More on the broader approach for smaller businesses is on the page [AI for SMEs](/ai-for-business/sme).

### Suitable applications

For an AI agent at an SME, the applications that fit are the ones that run inside software you already use: your mail environment, accounting package, CRM or office software. Think of an agent that sorts incoming mail and prepares draft replies, that prepares quote requests, or that pre-checks invoices. The common thread: a human reviews the outcome before anything goes out the door.

### Cost and a safe start

Start with an agent feature inside a package you already have, on one tightly scoped task, with a test period in which someone checks everything. Agree upfront which data the agent may use, and check whether there's a data processing agreement with the vendor. If you want to know first whether your organisation is ready, and which tasks qualify, the [AI Readiness Assessment](/services/ai-readiness-assessment) is the logical starting point.

I don't build agents myself. I do help you work out which task is suitable, what to ask of a delivery partner, and how to oversee delivery. If you need extra hands, I can suggest parties from my [partner network](/partner-network); you contract them directly, with no margin for me. Want to think through a concrete idea? [Book a thirty-minute consultation](/contact); at the end, you'll hear what I'd do.
