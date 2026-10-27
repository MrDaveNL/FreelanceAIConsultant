---
id: C7-03
lang: en
url: /markets/fintech
parent: C7-00
cluster: "7. AI markets"
pageType: Sector
schema: article
navLabel: AI for fintech
title: "AI in fintech and financial services"
metaTitle: "AI in Fintech | Applications for Financial Services"
metaDescription: "How do banks and fintechs use AI? Applications, automation, governance and compliance, and how to implement AI responsibly in financial services."
keyphrase: ai in fintech
eyebrow: "AI for fintech"
lede: "AI in fintech and at banks and insurers comes down to one tension: a lot of repetitive document work that suits AI well, in a sector where every decision has to be explainable and traceable. Financial services is one of the sectors my work leans on most heavily. Here's where the opportunities sit and which rules come into play."
primaryCta: { label: "Book a strategy call", href: "mailto:dave@freelanceaiconsultant.com" }
secondaryCta: { label: "See the AI Readiness Assessment", href: /services/ai-readiness-assessment }
summary:
  - "Most of the gain sits in extraction and preparation; the judgement stays with a person."
  - "Credit scoring and risk assessment or pricing for life and health insurance are high-risk under the AI Act, with rules from 2 December 2027."
  - "DORA has applied to EU financial entities since 17 January 2025, and reaches the ICT services behind your AI applications where DORA applies to you."
published: "2026-10-27"
updated: "2026-10-27"
faqTitle: "Frequently asked questions"
faq:
  - q: "Does fraud detection count as high-risk AI?"
    a: "Not on the credit-scoring ground: the AI Act expressly carves systems for detecting financial fraud out of that high-risk category. That doesn't mean no requirements apply. UK GDPR, existing financial supervision and your own risk management still apply in full."
  - q: "Who supervises AI at financial institutions?"
    a: "For AI used within existing processes, that's already the job of your normal financial regulators: in the UK, the FCA for conduct and the PRA for the prudential soundness of banks, insurers and larger investment firms, applying existing rules in full as soon as AI is involved. For the EU AI Act itself, a UK institution that falls in scope (see below) answers to the EU's own enforcement mechanisms for that law, not to the FCA or PRA, which have no role in enforcing EU legislation."
  - q: "Does DORA apply to UK firms and their AI suppliers?"
    a: "Only through an EU connection: DORA is an EU regulation, so a UK firm is in scope where it runs EU-regulated entities or provides ICT services to EU financial entities, including as a sub-provider. A UK-only firm with no EU operations instead sits under the FCA's operational resilience rules (PS21/3, FCA Handbook SYSC 15A) and the PRA's SS1/21, which cover broadly the same ground: mapping important business services and staying within impact tolerances."
  - q: "How does a small fintech start with AI?"
    a: "With one process that involves a lot of manual work and where a mistake is recoverable, such as preparing case files or answering standard questions. Record from the start what the system does, who checks it, and how you can demonstrate that. That's cheaper than reconstructing it after the fact for a regulator."
sources:
  - title: "AI Act, Annex III (text version, artificialintelligenceact.eu)"
    url: "https://artificialintelligenceact.eu/annex/3/"
  - title: "Regulation (EU) 2024/1689 (AI Act), EUR-Lex"
    url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj"
  - title: "European Commission: AI Omnibus enters into force"
    url: "https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force"
  - title: "European Commission: Commission starts enforcing AI Act rules and new transparency requirements on 2 August"
    url: "https://cyprus.representation.ec.europa.eu/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august-2026-07-31_en"
  - title: "AI Act Service Desk (European Commission): Article 2, scope"
    url: "https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-2"
  - title: "UK Government: AI regulation, a pro-innovation approach"
    url: "https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach"
  - title: "FCA: PS21/3, Building operational resilience"
    url: "https://www.fca.org.uk/publications/policy-statements/ps21-3-building-operational-resilience"
  - title: "Bank of England / PRA: SS1/21, Operational resilience - impact tolerances for important business services"
    url: "https://www.bankofengland.co.uk/prudential-regulation/publication/2021/march/operational-resilience-impact-tolerances-for-important-business-services-ss"
---

## AI applications in fintech

In fintech and the broader financial sector, AI applications fall roughly into four types:

- **Document processing:** pulling data from identity documents, company extracts, annual accounts, payslips or policies. This is the classic territory of onboarding, KYC and underwriting.
- **Flagging:** transaction monitoring, fraud detection and surfacing unusual patterns for an analyst.
- **Assessment and pricing:** credit scoring, risk selection and premium pricing. Here AI touches customers' interests directly.
- **Customer contact and knowledge:** answering standard questions, preparing for advice calls, and searching internal policy and procedure.

The first two types tend to deliver the fastest wins. The third can carry a lot of value but falls partly under the AI Act's heaviest regime. The fourth looks harmless, but a chatbot that misinforms customers is not a small problem in a regulated sector.

Which application to tackle first depends on where the work sits and how much risk you can carry. One example of how that trade-off plays out in practice is the case on a [use-case portfolio for an investment firm](/cases/ai-strategy-investment-firm).

## AI automation in financial services

The key distinction for automation in financial services is between **extraction** and **judgement**. Extraction means pulling facts out of a document: what's the name, the amount, the date, the ultimate beneficial owner. Judgement means weighing what those facts mean: does this represent a risk, does this customer fit our policy?

AI is good at extraction and can take a lot of search work off people's hands. In most processes, judgement belongs with a person, who confirms or corrects the system's proposals. That's not just cautious, it's also practical: every confirmation and correction produces an audit trail and a measurable quality loop.

<figure class="diagram" role="img" aria-label="Process flow for AI in a financial case-handling process: document comes in, AI extracts data with a confidence score, above the threshold a proposal, below the threshold straight to the analyst, the analyst confirms or corrects and everything is logged">
<ol class="flow">
<li><b>Document in</b>Identity document, extract, annual accounts or policy.</li>
<li><b>Extraction</b>AI pulls out the data, with a confidence score per field.</li>
<li><b>Threshold</b>Above the threshold, a proposal; below it, the case goes to the analyst unfiltered.</li>
<li><b>Judgement</b>The analyst confirms, corrects and decides.</li>
<li><b>Logging</b>Every confirmation and correction enters the audit trail and feeds the quality measurement.</li>
</ol>
<figcaption>AI prepares, the person decides, and everything is traceable. That's how an automated process stays explainable to audit and supervisors.</figcaption>
</figure>

This exact pattern is central to the case on [KYC document analysis at a financial services firm](/cases/kyc-document-analysis-financial-services). The hard part there wasn't the model, but designing a workflow analysts could trust, and overrule.

One note of caution on the current interest in agents that take steps on their own: in a financial process you want to know exactly what happens when such an agent is involved, and what it can and can't do well.

<aside class="scenario" aria-label="Example scenario">
<p class="scenario-label">Example scenario</p>
<p>An insurer with 250 staff processes around 4,000 claims a month. A vendor offers an agent that reads claims, routes them, and pays out small claims on its own.</p>
<p>The adviser guides the selection from the client's side. Three vendors each receive the same set of 200 anonymised claims, and the audit trail, exit path and position in the DORA information register all weigh into the decision. The scope goes back to preparation: the agent extracts data from the form and proposes a route, the claims handler decides. The insurer contracts the chosen vendor directly.</p>
<p>After eight weeks, registration time falls from 11 to 6 minutes per claim, over 330 hours a month combined. Handlers accept 94% of routing proposals unchanged, and every correction is logged. Paying out automatically was deliberately not introduced.</p>
<p class="scenario-note">Fictional example, built from situations that come up often. The organisation and figures are illustrative.</p>
</aside>

## AI governance and compliance

AI governance in financial services isn't a new structure next to existing risk management. In their joint report from April 2024, the Dutch regulators DNB and AFM already stated that financial institutions are expected to use AI responsibly, and that existing regulation applies in full once AI is involved; the same expectation holds for UK institutions under the FCA and PRA. Data quality, data protection, explainability and the risk of discrimination and exclusion are called out explicitly.

On top of that come three regimes worth knowing (as of September 2026):

- **The AI Act.** AI used to assess an individual's creditworthiness or establish a credit score is high-risk, with an explicit carve-out for systems that detect financial fraud. The same applies to AI for risk assessment and pricing in life and health insurance ([AI Act, Annex III](https://artificialintelligenceact.eu/annex/3/)). Under the Digital Omnibus, the high-risk rules for these applications now apply from 2 December 2027 rather than August 2026 ([European Commission](https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force)). The transparency rules, for example that a chatbot must disclose that the customer is talking to AI, have applied since 2 August 2026 ([European Commission](https://cyprus.representation.ec.europa.eu/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august-2026-07-31_en)). The Act's reach isn't limited to the EU: under [Article 2](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-2), it also applies to UK institutions that place an AI system on the EU market, or whose AI system's output is used in the EU, regardless of where the institution itself is established. The UK has no AI Act of its own; it regulates AI through existing sector regulators instead, as set out in the government's [pro-innovation approach](https://www.gov.uk/government/publications/ai-regulation-a-pro-innovation-approach).
- **DORA.** The Digital Operational Resilience Act has applied since 17 January 2025 and covers ICT risk management, incident reporting, digital resilience testing and the oversight of ICT providers for EU financial entities, which must keep a register of every ICT service bought from third parties, including sub-outsourcing. DORA itself is an EU regulation: a UK firm falls under it where it runs EU-regulated entities or provides ICT services to EU financial entities, but a UK-only firm instead sits under the FCA's operational resilience rules ([PS21/3](https://www.fca.org.uk/publications/policy-statements/ps21-3-building-operational-resilience)) and the PRA's [SS1/21](https://www.bankofengland.co.uk/prudential-regulation/publication/2021/march/operational-resilience-impact-tolerances-for-important-business-services-ss), which cover similar ground: mapping important business services and staying within impact tolerances. Either way, an AI service from an external vendor is an operational-resilience question: exit path, dependency and incident arrangements belong in your selection.
- **Supervision.** For UK institutions, the FCA and PRA continue to apply as normal. For an EU financial institution, which regulator leads on AI Act supervision is still settling: the Netherlands, for instance, was still finalising its implementing legislation for the AI Act in mid-2026, with its market regulator AFM pushing for a clearer split of duties with the central bank DNB on high-risk applications such as credit scoring and insurance pricing.

A delay in the AI Act's rules is no reason to wait. A credit model you buy or build now will likely still be in use once the requirements take effect in December 2027, so build them into your design and selection now. How to build a broader [AI policy](/ai-policy) around that, and keep governance proportionate with heavy requirements only where the risk justifies them, is covered on the AI policy overview page. This isn't legal advice: have the classification of a specific application reviewed by your compliance or legal function.

## AI consultancy for financial institutions

What I do for banks, insurers, fintechs and investors is the same as in other sectors, but with the bar raised for explainability and traceability:

- **Prioritise:** which applications pay off and fit your risk appetite? A logical starting point is a baseline with the [AI Readiness Assessment](/services/ai-readiness-assessment).
- **Choose:** select a vendor or build partner against criteria for explainability, audit trail, data rights and exit path. A [Vendor Review](/services/vendor-review) records that choice in a way procurement, compliance and audit can work with afterwards.
- **Assess:** for investors and corporate development teams who want to vet an AI proposition or vendor, there's [AI Due Diligence](/services/ai-due-diligence), always under NDA.
- **Embed:** if you don't have a full-time head of AI, a [Fractional AI Lead](/services/fractional-ai-lead) can own the AI agenda and coordinate with risk, compliance and audit.

I don't build or sell software myself, and I don't take commissions or hold partner status with vendors. I guide implementations from your side of the table. That matters most in a sector where you'll later need to explain why you chose a particular party.

Other sectors have their own rulebook, from healthcare's medical-device legislation to retail and customer-data rules in marketing. Want to talk through a specific question? [Book a strategy call](/contact).
