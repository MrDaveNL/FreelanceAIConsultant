---
id: C6-05
lang: en
url: /knowledge-base/ai-agents-and-gdpr
parent: C6-00
cluster: "6. AI Agents"
pageType: Knowledge base
schema: article
navLabel: AI agents and GDPR
title: "AI agents and GDPR: what to watch for"
metaTitle: "AI Agents and GDPR | Privacy and Compliance in Practice"
metaDescription: "How do you deploy AI agents without GDPR risk? Read about processor agreements, data minimisation, logging and UK vs EU GDPR, with a practical checklist."
keyphrase: ai agents and gdpr
eyebrow: "Knowledge base"
lede: "An AI agent that queries systems and processes data on its own still falls squarely under GDPR. Deploying one doesn't change the rules, but it does change the risk: an agent processes more data, in more steps, with less visibility. This article sets out the main requirements, covers where UK GDPR and EU GDPR diverge, explains the overlap with the AI Act, and ends with a checklist."
primaryCta: { label: "Read more on AI policy", href: /ai-policy }
secondaryCta: { label: "Book a strategy call", href: "mailto:dave@freelanceaiconsultant.com" }
summary:
  - "GDPR applies in full to AI agents; the risk sits in the breadth of access and the lack of visibility."
  - "A processor agreement, data minimisation, logging and often a DPIA are the basics, on both sides of the Channel."
  - "The AI Act applies on top of that, with deadlines shifted by the Digital Omnibus; UK and EU GDPR now diverge on automated decisions."
published: "2026-10-27"
updated: "2026-10-27"
sources:
  - title: "Regulation (EU) 2016/679 (GDPR), via EUR-Lex"
    url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj"
  - title: "Regulation (EU) 2024/1689 (AI Act), via EUR-Lex"
    url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"
  - title: "Regulation (EU) 2026/1744 (Digital Omnibus on AI), via EUR-Lex"
    url: "https://eur-lex.europa.eu/eli/reg/2026/1744/oj"
  - title: "ICO: UK GDPR guidance and resources"
    url: "https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/"
  - title: "Data (Use and Access) Act 2025, via legislation.gov.uk"
    url: "https://www.legislation.gov.uk/ukpga/2025/18/contents"
  - title: "UK government: AI regulation - a pro-innovation approach"
    url: "https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach"
---

## Why AI agents create privacy risk

An [AI agent](/ai-agents/what-is-an-ai-agent) is given a goal and takes its own steps: looking up data, querying systems, logging or sending something. For GDPR, it makes no difference whether a human or an agent takes those steps. The organisation deploying the agent remains the data controller. What does change is the risk profile.

Four traits make agents more sensitive than an ordinary AI application:

- **Broad access.** An agent that can search a mailbox, CRM and document store will inevitably come across personal data it doesn't need for its task.
- **Several steps with no visibility.** If you can't see which sources the agent consulted, you can't demonstrate that processing stayed limited to what was necessary.
- **Data going to third parties.** Most agents run on a language model from an external vendor. Whatever the agent looks up travels to that vendor, sometimes outside the UK or the EU.
- **Acting instead of advising.** An agent that rejects an application or categorises a customer may be making a decision about a person.

This going wrong isn't theoretical. The Dutch data protection authority reported in August 2024 that it had received multiple data breach notifications after staff entered patients' or customers' personal data into an AI chatbot. With an agent, the same thing happens, only automated and at greater scale.

## GDPR requirements for AI agents

GDPR has no separate chapter for AI agents. The existing rules apply directly. The ones that matter most for an agent:

- **Purpose and lawful basis (Art. 5 and 6).** Record, per agent, for which specific purpose it processes personal data and on what lawful basis. An agent that's allowed to "search everything" has no specific purpose.
- **Data minimisation (Art. 5(1)(c)).** Data must stay limited to what's necessary. For an agent that means restricting access per source and shielding fields it doesn't need.
- **Data protection by design (Art. 25).** That restriction belongs in the design, not bolted on afterwards. Build it into the specification if you're having [an AI agent built](/ai-agents/build).
- **Processor agreement (Art. 28).** If the platform or model vendor processes personal data on your behalf, you need a processor agreement. Watch for sub-processors: the processor may only engage them with your prior specific or general written authorisation.
- **Transfers outside the UK or EU (Art. 44 et seq.).** If data goes to a country outside the UK or the EU, the additional conditions in Chapter V apply, and the mechanism differs depending on which regime governs the transfer.
- **Security and breaches (Art. 32 and 33).** Appropriate security, and a breach is reported without undue delay, and where possible within 72 hours, to the relevant regulator, unless the risk to individuals is unlikely.
- **Records (Art. 30).** Record the agent's processing in your record of processing activities.
- **Automated decision-making (Art. 22).** This is where UK and EU GDPR now genuinely diverge; see the next section.

<figure class="diagram" role="img" aria-label="Privacy decision route for an AI agent: identify personal data, record purpose and lawful basis, check the processor agreement, run a DPIA test, and determine whether the agent decides about people">
<ol class="flow">
<li><b>Personal data?</b>Which sources the agent touches</li>
<li><b>Purpose and basis</b>Recorded per agent, access restricted</li>
<li><b>Vendor</b>Processor agreement, sub-processors, location</li>
<li><b>DPIA test</b>Regulator criteria and the nine-criteria test</li>
<li><b>Decides about people?</b>Then Art. 22 and human intervention apply</li>
</ol>
<figcaption>Five questions to answer for each agent before it works with real personal data.</figcaption>
</figure>

**DPIA.** A DPIA is mandatory where processing, especially with new technology, is likely to result in a high risk (Art. 35). Regulators maintain lists of processing operations that require one, including profiling, large-scale monitoring of employees, and large-scale processing of communications data. If your processing isn't on that list, the nine criteria used by European privacy regulators are the fallback test; the rule of thumb is that a DPIA is needed once two or more criteria apply. Because the use of new technology is one of those criteria, an agent that processes personal data will often come close on its own.

## UK GDPR and EU GDPR: where they now diverge

Since Brexit, UK GDPR is the UK's own retained version of the EU GDPR, enforced by the Information Commissioner's Office (ICO) rather than an EU data protection authority. There is no one-stop-shop between the two regimes: a UK organisation whose agent also touches EU customers' data still has to deal with the ICO and the relevant EU regulator separately, not just one of them.

The clearest practical divergence is automated decision-making. The UK's Data (Use and Access) Act 2025 took effect on 5 February 2026 and replaced the old UK GDPR Article 22 with a new framework. Under the UK model, an organisation can carry out solely automated decision-making on any lawful basis, including legitimate interests, provided mandatory safeguards are in place: information about the decision, the ability to make representations, human intervention, and the right to contest it. The stricter, consent-or-contract-only approach survives only where special category data is involved.

EU GDPR stayed on the older, stricter rule: a solely automated decision with legal or similarly significant effects is prohibited unless consent, a contract, or an authorising law applies. The practical consequence for an agent that filters applications or scores customers: a decision process that's compliant under UK GDPR for a UK data subject can still breach EU GDPR Article 22 if it's applied to an EU data subject without consent or a contractual basis. Deploying the same agent across both markets means checking both regimes separately, not assuming one covers the other.

## How this interacts with the AI Act

GDPR, in either its UK or EU form, is about personal data; the AI Act is about the AI system itself. Both can apply to an agent at the same time. The AI Act was amended by the Digital Omnibus on AI (Regulation (EU) 2026/1744), published 24 July 2026 and in force since 27 July 2026. The points most relevant to agents:

- **Transparency (Art. 50).** Providers must design AI systems that interact directly with people so that people know they're dealing with AI, unless that's already obvious. This duty has applied since 2 August 2026.
- **High risk.** Agents that, for example, filter applications or assess candidates fall under Annex III. The Digital Omnibus deferred those obligations to 2 December 2027, instead of 2 August 2026; for Annex I high-risk systems the date is 2 August 2028. Organisations using such a system will then need to assign human oversight to people with the necessary competence and authority (Art. 26).
- **AI literacy (Art. 4).** This duty has applied since 2 February 2025. Following the amendment, providers and deployers must take measures to support the AI literacy of their staff, without having to guarantee any specific level.

The UK has no AI Act of its own. It regulates AI through existing sector regulators and general law, including the ICO for data protection, applying shared principles rather than one cross-cutting AI statute, as set out in the UK government's "AI regulation: a pro-innovation approach" paper. A fuller explanation of the regulation is on the [AI Act page](/ai-policy/ai-act).

## Checklist

Use this checklist per agent, before it works with real personal data:

1. The purpose and lawful basis of the processing are recorded.
2. The agent only has access to the sources and fields it needs.
3. There's a processor agreement with the vendor, including terms on sub-processors and storage location.
4. You know whether data is processed outside the UK or the EU, and on what basis, for each.
5. You've tested whether a DPIA is needed, and recorded the outcome.
6. Every step the agent takes is logged: which sources, which actions, which approvals.
7. If the agent decides about people, a human decides or reviews, and individuals can state their case and contest the decision.
8. Customers and staff know when they're dealing with an AI system.
9. The processing is in the record of processing activities, and the agent is in your inventory of AI applications.
10. There's an owner, an incident reporting route, and someone authorised to stop the agent.

Those last points aren't privacy rules but governance. How to keep that light is covered separately in [AI governance without bureaucracy](/insights/ai-governance-without-bureaucracy). For the broader policy around AI in your organisation, see [AI policy](/ai-policy), and for applications and implementation, the overview of [AI agents for business](/ai-agents).

<aside class="scenario" aria-label="Example scenario">
<p class="scenario-label">Example scenario</p>
<p>A professional services firm with 140 staff wants an agent that reads the shared customer inbox, looks the customer up in the CRM, and drafts a reply. That's around 1,200 emails a month. In the first design, the agent can read the entire inbox and all 38 fields in the CRM.</p>
<p>The adviser reviews the design from the client's side, together with the data protection officer. Two of the nine criteria apply: new technology and large-scale processing. A DPIA follows. It shows the agent needs only 9 of the 38 CRM fields for its task, and that attachments fall outside its scope, since they often contain payslips and copies of identity documents.</p>
<p>The development partner the organisation contracted directly adjusts the design. Go-live slips by three weeks. The agent never sends anything itself: every reply goes past a staff member, and every step is logged.</p>
<p class="scenario-note">Fictional example, built from situations that come up often. The organisation and figures are illustrative.</p>
</aside>

*This article is a practical explainer, not legal advice. Have the application to your own situation assessed by your data protection officer or a privacy lawyer.* Want to talk through how to build privacy and governance into an agent project? [Book a strategy call](/contact).
