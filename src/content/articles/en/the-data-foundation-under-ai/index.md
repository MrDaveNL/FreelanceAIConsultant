---
id: en-the-data-foundation-under-ai
lang: en
slug: the-data-foundation-under-ai
counterpart: het-datafundament-onder-ai
category: Tools & data
tone: sand
icon: ◫
featured: false
title: The role of the data foundation in successful AI initiatives
titleLine1: The data foundation
titleLine2: under your AI initiatives
excerpt: '"Get your data in order first" is as often an excuse as it is a necessity. How to work out which one applies to you.'
metaTitle: The Data Foundation Under Successful AI Initiatives
metaDescription: '"Get your data in order first" is as often an excuse as a necessity. How to work out which applies to your AI initiative, and what to do about it.'
lede: 'The most common advice in AI is also the most dangerous: get your data in order first. Sometimes that''s right. Often it''s a way to do nothing for another two years.'
readingTime: 4 min read
date: '2026-10-31'
dateLabel: 31 October 2026
summary:
  - You don't need a perfect data foundation, you need enough foundation for one use case.
  - Definitions matter more than volume or infrastructure.
  - Build the foundation alongside a use case, not ahead of it.
summaryClose: Getting data in order with no application attached is a project with no end.
takeaways:
  - - Foundation per use case
    - Don't ask "is our data in order?" Ask "is this data good enough for this decision?"
  - - Definitions first
    - Four systems with three definitions of "customer" is a bigger problem than a missing data warehouse.
  - - Lineage counts
    - With AI, you need to be able to explain where a number came from. That's a governance question, not a technical one.
remember: A data foundation that isn't pulled forward by a concrete application never gets finished.
related:
  - build-buy-or-partner
  - ai-governance-without-bureaucracy
order: 6
---

<h2>Two truths that contradict each other</h2>
<p>The first: without reliable data, AI delivers unreliable outcomes. That's not in dispute.</p>
<p>The second: organisations that want their entire data landscape in order before they start with AI rarely get to AI at all. The data foundation is never finished, after all, and there's always another layer that should come first.</p>
<p>Both are true. The way out is in how you phrase the question. "Is our data in order?" is a question you can't answer. "Is this data good enough to base this specific decision on?" you can answer, within a week.</p>

<h2>What actually matters</h2>
<p>When I run data scans ahead of AI projects, I come across four problems. They're not equally serious and they don't need the same fix.</p>

<h3>Problem 1: Definitions (serious, often underestimated)</h3>
<p>Four systems, three definitions of "customer". Two departments that calculate "revenue" differently. A product code that's a variant in one system and a separate product in another. This is by far the most common problem, and the most underestimated.</p>
<p>It's serious because no amount of technology fixes it. A model trained on inconsistently defined data learns that inconsistency too. And it's underestimated because everyone works consistently within their own department. The problem is only visible once you look across departments.</p>
<p><b>Approach:</b> define only the five to ten terms that your use case touches. Not the whole company data model. That's two weeks of work instead of two years.</p>

<h3>Problem 2: Lineage and traceability (serious for regulated work)</h3>
<p>Can you trace a number in a report back to where it came from and what's been done to it? For AI applications that influence decisions, this isn't a luxury. Regulators, auditors and eventually your own board will ask that question.</p>
<p><b>Approach:</b> map the lineage for the data flows your use case actually uses. Document the transformations. That doesn't need an expensive tool: a readable document that's accurate is worth more than a lineage tool nobody maintains.</p>

<h3>Problem 3: Quality and completeness (manageable)</h3>
<p>Missing fields, inconsistent entry, historical data that changed format halfway through. Annoying, but this is the type of problem technology actually helps with, and one you can quantify.</p>
<p><b>Approach:</b> measure it. What percentage of records has the field you need? If it's 94%, you can get moving, and the question becomes what to do with the remaining 6%. If it's 40%, you're having a different conversation.</p>

<h3>Problem 4: Accessibility and infrastructure (usually the least urgent)</h3>
<p>No central data warehouse, data spread across systems, no APIs. This feels like the biggest problem because it's the most visible, and because suppliers are happy to sell you a platform for it. In practice, it's often the easiest to solve, especially for one use case.</p>
<p><b>Approach:</b> for a first use case, a daily export is often enough. Don't build a platform to test a hypothesis.</p>

<h2>The use-case-led order</h2>
<p>The approach that works in practice reverses the order. You don't build the foundation upfront, you pull it along with your first applications.</p>
<ul>
<li><b>Step 1:</b> Choose one use case with clear value and an owner in the business.</li>
<li><b>Step 2:</b> Map which data that use case actually needs: usually three to seven sources, not thirty.</li>
<li><b>Step 3:</b> Fix the definitions, lineage and quality for those sources only. Do this properly, because it becomes your reference.</li>
<li><b>Step 4:</b> Build the use case and measure whether it works.</li>
<li><b>Step 5:</b> Choose the next use case that reuses as many of the same sources as possible.</li>
</ul>
<p>After three or four use cases, you have a foundation that's grown out of real use. It's smaller than the ideal picture, and considerably more reliable, because every component is tested in production.</p>

<h2>When "data first" is the right answer</h2>
<p>There are situations where delaying really is wise. Three signals:</p>
<ul>
<li><b>The core entity isn't clearly defined.</b> If you can't pin down who counts as a customer, or what counts as one order, that affects every use case. Fixing this first saves you rework on everything that follows.</li>
<li><b>The data you need isn't being captured.</b> No amount of clever technology creates data that doesn't exist. The first step then is a change to how you record things, and that takes time.</li>
<li><b>There's no owner for the source.</b> If nobody is responsible for a dataset, it won't be maintained either, and your application will quietly degrade within six months.</li>
</ul>
<p>Notice that none of these three is about technology or a missing platform. All three are about meaning and ownership. That's what the data foundation is really about. The rest is infrastructure, and infrastructure you can buy.</p>

<h2>A half-day test</h2>
<p>Want to know where you stand? Take one concrete decision you want AI to support, and try to reconstruct it by hand for ten past cases. If that takes an afternoon, your foundation is good enough. If it takes two weeks and you have to call three departments, you know exactly which part to fix first. And it's almost never the part the platform proposal was about.</p>
