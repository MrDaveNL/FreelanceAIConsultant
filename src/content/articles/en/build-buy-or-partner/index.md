---
id: en-build-buy-or-partner
lang: en
slug: build-buy-or-partner
counterpart: build-buy-of-partner
category: Organisation
tone: aqua
icon: ⇄
featured: false
title: 'Build, buy or partner: what fits your situation?'
titleLine1: 'Build, buy or partner:'
titleLine2: what fits your situation?
excerpt: The question is rarely "can we build this ourselves?" but "do we still want to be maintaining this in three years?" A decision framework in four questions.
metaTitle: 'Build, Buy or Partner for AI: A Decision Framework'
metaDescription: A four-question framework for choosing between building AI yourself, buying it, or partnering, with the maintenance costs most people skip.
lede: Build it yourself, buy it, or partner with someone? The choice determines your cost structure, your agility and your dependency for years. Here's how to make it an informed one.
readingTime: 4 min read
date: '2026-11-03'
dateLabel: 3 November 2026
summary:
  - Only build what sets you apart in the market.
  - Buy everything that's a commodity, even if you can build it yourself.
  - Partner where you want to steer the outcome but don't want to own the technology.
summaryClose: The maintenance question matters more than the build question.
takeaways:
  - - Distinctive or not?
    - If your competitor can buy it tomorrow, don't build it yourself.
  - - Calculate to year five
    - Building is cheap in year one and expensive from year three.
  - - Design the exit in
    - 'For every choice: how do you get out of it, and what does that cost?'
remember: You're not building software, you're adopting a maintenance obligation.
related:
  - the-data-foundation-under-ai
  - ai-vendor-selection-in-eight-steps
order: 3
---

<h2>Why this choice weighs heavier with AI</h2>
<p>With classic software, build-or-buy was mainly a cost question. With AI, three extra factors make the trade-off structurally different.</p>
<p>First, the underlying technology changes faster than your depreciation period. A model you fine-tune yourself today can be overtaken within eighteen months by a generic model that does it better out of the box, and more cheaply. Second, maintenance is fundamentally different: models quietly degrade as reality shifts, which calls for permanent monitoring rather than occasional patching. Third, the value often doesn't sit in the model but in your data and your working process, and you can't buy either of those anyway.</p>

<h2>The four questions that decide the choice</h2>

<h3>Question 1: Is this distinctive, or is it a commodity?</h3>
<p>The only good reason to build it yourself is that it sets you apart in the market. Not that it's fun, not that your team can do it, and not that it looks cheaper.</p>
<p>A hard test: can your main competitor buy the same result from a supplier tomorrow? If the answer is yes, it's a commodity, however technically interesting it is. Document extraction, speech recognition, summarising, standard classification: all commodities. The way you combine those building blocks with your own data and processes: that's where the distinction can lie.</p>
<p>In practice, at most ten to twenty per cent of what organisations want to build is genuinely distinctive. The rest gets built because it can be.</p>

<h3>Question 2: What does it cost in year five?</h3>
<p>Building is cheap in year one. You have a team, it builds something, it works. The costs that come after are rarely counted in:</p>
<ul>
  <li>Model monitoring and retraining as the data shifts</li>
  <li>Keeping up with the underlying models and API versions</li>
  <li>Security, logging and audit trail</li>
  <li>Documentation and knowledge transfer when people leave</li>
  <li>The opportunity cost of engineers maintaining this instead of building something new</li>
</ul>
<p>A rule of thumb from practice: the annual maintenance of a self-built AI application runs between 20% and 40% of the original build cost. Run that through for five years and compare it to a licence. The conclusion often reverses.</p>

<h3>Question 3: Who needs to be able to steer the outcome?</h3>
<p>This is the question that justifies partnering. There are applications where you don't need to own the technology, but you do need influence over how the outcome comes about. Think of risk models, pricing, or anything that communicates towards customers on behalf of your brand.</p>
<p>A standard product rarely gives you that influence. Building it yourself gives you full influence but also the full burden. A partnership arrangement (where a supplier builds and manages, but you set the rules, thresholds and evaluation criteria) sits in between. It works if you arrange it well contractually, and it goes wrong if you run it on trust.</p>

<h3>Question 4: How do you get out of it again?</h3>
<p>The exit question belongs in the design, not in the renewal discussion three years from now. For each of the three options, exit looks different:</p>
<ul>
  <li><b>Build:</b> exit means finding someone who understands your codebase. The risk sits in key-person dependency and missing documentation.</li>
  <li><b>Buy:</b> exit means getting your data and your configured logic out. Establish the format and the timeframe before signing.</li>
  <li><b>Partner:</b> exit means handover of both the build and the knowledge. Include a handover clause with a concrete deliverable, not an intention.</li>
</ul>

<h2>The hybrid form that works most often</h2>
<p>In most projects I guide, the answer isn't one of the three in pure form. The setup that holds up most often:</p>
<ul>
  <li><b>Buy the building blocks.</b> Models, infrastructure, standard components. This is where suppliers have economies of scale you'll never match.</li>
  <li><b>Build the layer that holds your knowledge.</b> The rules, the prompts, the evaluation sets, the link to your processes. This is small in scope and large in value.</li>
  <li><b>Partner for implementation.</b> But keep ownership of the evaluation criteria yourself.</li>
</ul>
<p>Concretely: an organisation automating document processing buys the language model and the platform, builds its own field-extraction rules and a test set of two hundred assessed files, and has the integration done by a partner. The test set is the most valuable part and costs the least money.</p>

<h2>Three situations where the choice is clear</h2>
<p><b>Build</b> if it touches directly on why customers choose you, you have exclusive access to the data, and you have a team that can still maintain this in five years.</p>
<p><b>Buy</b> if there are three or more serious suppliers, the functionality is stable, and your main concern is time to value.</p>
<p><b>Partner</b> if the technology is mature but the application is sensitive, and you want to steer the outcome but not the codebase.</p>
<p>Still unsure? Then buying is almost always the cheapest way to learn what you actually need. You can still build later, with a sharper specification and without losing a year.</p>
