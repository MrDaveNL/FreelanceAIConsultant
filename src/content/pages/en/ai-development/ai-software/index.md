---
id: C5-02
lang: en
url: /ai-development/ai-software
parent: C5-00
cluster: "5. AI Development"
pageType: Spoke
schema: article
navLabel: AI Software
title: "AI software development: choose, integrate or build"
metaTitle: "AI Software Development | Build, Buy or Integrate"
metaDescription: "AI software development, explained: when standard software is enough, when custom development pays off, and how to integrate AI software safely."
keyphrase: ai software development
eyebrow: "AI software"
lede: "Almost every software vendor now calls its product AI software. That makes choosing harder, not easier. This page sets out which kinds of AI software exist, when standard is enough and when AI software development pays off, and what to watch for with integration and selection."
primaryCta: { label: "Read more on AI Development", href: /ai-development }
secondaryCta: { label: "See the AI Readiness Assessment", href: /services/ai-readiness-assessment }
summary:
  - "AI software runs from a feature inside existing software to full custom development."
  - "Choose standard where you can; have custom AI software development built only for the layer with your own knowledge."
  - "Integration, data and exit determine the real cost, not the licence."
published: "2026-10-27"
updated: "2026-10-27"
faqTitle: "Frequently asked questions"
faq:
  - q: "What's the difference between AI software and ordinary software?"
    a: "Ordinary software does what you programme it to do. AI software makes a prediction or generates an answer based on a model, and can get it wrong while doing so. That's why, with AI software, you need to ask not only what it can do, but also how well it performs on your data and what happens when it's off."
  - q: "Is my data used to train the AI software?"
    a: "That differs by vendor and often by subscription tier. Ask explicitly, have it put in the contract, and check whether you can turn it off. Never assume the default setting matches your own policy."
  - q: "Can custom AI software development be cheaper than a licence?"
    a: "Sometimes in year one, rarely over several years. Custom development brings ongoing costs for support, monitoring and keeping the underlying models up to date. Always calculate over several years, and include the exit costs too."
  - q: "Who's liable if AI software gets something wrong?"
    a: "That depends on your contract and on how you deploy the software. Record what the vendor guarantees, how errors get reported, and who fixes what. Set up your process so a person checks the outcome wherever the consequences are significant."
sources: []
---

## Types of AI software

AI software is software in which a model does part of the work: understanding or generating text, recognising images, making predictions, or carrying out tasks. In practice, you'll run into four forms, from light to heavy:

1. **AI features inside software you already have.** Your office suite, CRM or service desk gains an assistant or a smart feature. Little integration work, but also little influence over how it works.
2. **Standalone AI tools.** Chat assistants, writing and analysis tools, transcription. Quick to adopt, usually licensed per user. A separate article on this site covers common categories of AI tools for business.
3. **Specialised AI platforms.** Software for a single domain, such as document processing, demand forecasting or customer service, that you configure and connect to your own systems.
4. **Custom AI software development.** An application built for your specific process, usually around a bought-in language model, with your own rules, integrations and evaluation. Examples of what that can deliver are covered on the page about [custom AI solutions](/ai-development/ai-solutions).

The further down this list you go, the more influence you get over the outcome, and the more you have to manage yourself.

## Standard or custom AI software development?

The core question isn't whether you can have something built, but whether you'll still want to maintain it in a few years. Only build what sets you apart in the market. If your competitor can buy the same result from a vendor tomorrow, it's a commodity, and you buy it too.

<figure class="diagram" role="img" aria-label="Spectrum of AI software from standard to custom, with what you buy and what you have built at each step">
<ol class="flow">
<li><b>Buy the building blocks</b>Language models, infrastructure, standard components: vendors have the scale advantage here</li>
<li><b>Configure the platform</b>Set thresholds, rules and workflows within standard software</li>
<li><b>Have the knowledge layer built</b>Your rules, prompts, test sets and integrations: small in size, large in value</li>
<li><b>Keep the evaluation yourself</b>The criteria you judge the outcome by always stay yours</li>
</ol>
<figcaption>The hybrid form: standard where you can, custom AI software development only for the layer that holds your own knowledge.</figcaption>
</figure>

In many cases, the answer is a combination. You buy the model and the platform, have the layer with your own knowledge built, and place the implementation with a partner. Choosing between standard and custom also calls for an honest cost comparison between the two.

## Integrating AI software

The software itself is often the smallest part of the work. Integrating AI software with your existing systems takes the most time and produces the most surprises. Five points to settle upfront:

- **Data sources and quality.** Which systems need to be opened up, how current and complete is the data, and who manages those sources? If your data foundation is shaky, the AI software is the first thing to show it.
- **Permissions and access.** The AI shouldn't see more than the user calling it can see. Check how your source systems' permissions model is passed through.
- **Privacy and data protection.** Where is the data processed and stored, is it used for training, and is there a data processing agreement? With personal data, that's not a detail.
- **Logging and oversight.** Record which input led to which outcome, and who confirmed it. Without an audit trail, you can't trace errors back.
- **Support after go-live.** Who measures quality, who keeps test sets current, and what happens if the vendor replaces the underlying model?

The building and integrating is done by your own IT team or an implementation partner you contract directly. I don't build alongside them, but I help draw up the requirements and test whether the delivery meets them. How that fits into the whole development journey is covered on the [AI development](/ai-development) page.

<aside class="scenario" aria-label="Example scenario">
<p class="scenario-label">Example scenario</p>
<p>A builders' merchant with 85 staff buys an AI tool that reads orders from email and PDF and enters them into the ERP system. The licence is sorted within a week; the vendor estimates the integration at three weeks.</p>
<p>The consultant works with the IT manager and the head of internal sales to set the requirements upfront: which fields the tool may fill in, that a staff member confirms every order, and that every change is logged. During testing, it turns out that 30% of the item codes in the orders differ from the ERP, because customers use their own codes. A translation table is needed, along with someone to keep it up to date.</p>
<p>The integration takes nine weeks instead of three. After that, processing time drops from six to three minutes per order, across roughly 150 orders a day: more than seven hours a day. The merchant deliberately doesn't yet let orders through without a check.</p>
<p class="scenario-note">Fictional example, built from situations that come up often. The organisation and figures are illustrative.</p>
</aside>

## Selection criteria

Set your criteria and their weighting before you see vendors. Criteria written after the first demo describe that demo. A workable set:

| Criterion | Key question |
|---|---|
| Functional fit | Does it cover your scenarios, including the awkward ones? |
| Performance on your own data | How well does it perform on your material, not the demo material? |
| Integration | How much work is connecting it to your systems, and who does that? |
| Data and privacy | Where does the data sit, what happens to it, and is it used for training? |
| Manageability | Can you adjust thresholds, rules and exceptions yourself? |
| Cost | Licence, usage at scale, integration, support and exit over three years |
| Vendor | Continuity, roadmap and support in your language and time zone |

Give every vendor the same scenario on your own data, have assessors score it individually first, and calculate the total cost. A full eight-step approach to this process is covered elsewhere on this site, in an insights piece on AI vendor selection.

Don't want to run that process yourself? I can guide it with a [Vendor Review](/services/vendor-review): criteria upfront, scorecards, validation on real data and a TCO comparison including exit costs. The case on [vendor selection for an enterprise retailer](/cases/vendor-selection-enterprise-retail) shows how that plays out in practice. I don't receive any payment from vendors, so the advice can also be that you buy nothing.

Looking instead for someone who assesses or builds the technical side? A separate article on this site sets out the different AI-development profiles. And if you're unsure which route fits, [book a strategy call](/contact).
