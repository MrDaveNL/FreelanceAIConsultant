---
id: en-what-ai-agents-can-and-cannot-do
lang: en
slug: what-ai-agents-can-and-cannot-do
category: Use cases
tone: salmon
icon: ↯
featured: false
title: 'AI agents: what they can and cannot do in a business process'
titleLine1: 'AI agents: what they can'
titleLine2: and cannot do
excerpt: Agents that carry out tasks independently are the promise of the moment. Where they work, where they break down, and the question you need to answer first.
metaTitle: What AI Agents Can and Cannot Do
metaDescription: Where AI agents work well, where they break down, and the one question you need to answer before handing a business process over to one.
lede: An agent that takes its own steps and calls on systems is attractive and risky at the same time. The distinction lies in what happens when it gets it wrong.
readingTime: 4 min read
date: '2026-11-05'
dateLabel: 5 November 2026
summary:
  - Agents work well on reversible steps with a clear final check.
  - They break down on processes where a mistake propagates silently.
  - Start with preparing and proposing, not with executing.
summaryClose: Decide what a mistake costs first, then how much autonomy you give.
takeaways:
  - - Reversibility as the test
    - Give autonomy on steps you can undo without damage.
  - - An agent is a process, not a tool
    - The question isn't which model, but which steps you hand over.
  - - Logging is not optional
    - Without a full record of the steps taken, you cannot reconstruct a mistake.
remember: Autonomy isn't a property of the model, it's a choice the organisation makes.
related:
  - which-ai-use-cases-deliver-results
  - ai-governance-without-bureaucracy
order: 1
---

<h2>What makes an agent different</h2>
<p>A standard AI application receives an instruction and gives an answer. An agent receives a goal and decides for itself which steps are needed: retrieving information, consulting a system, assessing an intermediate result, choosing a next step. That makes it more powerful, and it changes the risk question fundamentally.</p>
<p>With a standard answer, you assess one outcome. With an agent, you assess a chain in which a mistake in step two carries through to step five, possibly without the final output looking wrong. That is exactly where things go wrong in practice.</p>

<h2>Where agents work well</h2>

<h3>Preparatory work with a clear final check</h3>
<p>Gathering and organising information that a person then makes a decision on. Putting together a file from five sources, building a market overview, preparing a tender response. The agent does the search work, the person does the assessment.</p>
<p>This works because the mistake is visible at the moment it matters: the reviewer sees that something is missing or wrong, before anything irreversible happens.</p>

<h3>Steps you can undo without damage</h3>
<p>Drafting a concept, assigning a category that can be changed later, creating an internal note. If it goes wrong, you correct it and lose, at most, some time.</p>

<h3>Routes with a hard, checkable outcome</h3>
<p>If an objective test exists (a calculation that is right or wrong, a query that returns results or doesn't, a file that validates or doesn't), an agent can iterate independently until that test passes. The test is the safety valve.</p>

<h2>Where agents break down</h2>

<h3>Processes where a mistake propagates silently</h3>
<p>This is the most important category to avoid. If a wrong intermediate step leads to a final result that looks plausible, nobody discovers the mistake: not in the review, and not in the reporting. Financial processing, risk assessment, and anything where a number flows through to another system falls into this category.</p>

<h3>Actions with external consequences</h3>
<p>Sending a message to a customer, placing an order, changing an appointment, initiating a payment. Not because an agent can't technically do this, but because the cost of a mistake lands outside your organisation and you cannot take it back. A confirmation step belongs here as standard.</p>

<h3>Long chains without an intermediate check</h3>
<p>The more steps without a checkpoint, the greater the chance that the agent makes a wrong assumption somewhere halfway through and keeps building on it consistently. Practical limit: if there are more than a handful of steps without any check, build in an intermediate review, automated or human.</p>

<h3>Situations without a complete log</h3>
<p>If you cannot reconstruct which steps the agent took, which sources it consulted and why it chose a particular route, you cannot investigate an incident. For regulated processes that is not an option, and for everything else it's unwise.</p>

<h2>The autonomy level as a deliberate choice</h2>
<p>Autonomy is not a property of the technology but a setting you choose. Four levels, in ascending order:</p>
<ul>
  <li><b>Preparing:</b> the agent gathers and organises, a person does everything after that. Lowest risk, often already the biggest time saving.</li>
  <li><b>Proposing:</b> the agent makes a concrete proposal including reasoning, a person approves or amends it.</li>
  <li><b>Executing with confirmation:</b> the agent takes the steps but asks for confirmation at the irreversible moments.</li>
  <li><b>Acting independently:</b> the full chain without intervention, with monitoring afterwards. Only for reversible steps with a hard final check.</li>
</ul>
<p>My advice is almost always to start at level one or two, even if the model can handle more. Not out of caution, but because that's the phase in which you learn which mistakes actually occur. You need that knowledge to decide where you can safely increase autonomy, and you won't get that information anywhere else.</p>

<h2>The question you need to answer first</h2>
<p>For every step you hand over to an agent, one question: <b>if this step goes wrong, who notices, when, and what does it cost to fix?</b></p>
<p>Three possible answers and what they mean:</p>
<ul>
  <li><b>Immediately visible, cheap to fix</b>: give autonomy.</li>
  <li><b>Visible later, fixable</b>: autonomy with monitoring and a periodic sample check.</li>
  <li><b>Not visible, or not fixable</b>: no autonomy, full stop.</li>
</ul>

<h2>What this means in practice</h2>
<p>The applications I see working in production are rarely the spectacular ones. They are agents that prepare files, bring together information from different systems, or draft a first version that a person finishes. The time saving is real (often tens of per cent on the preparatory step), and the risk is manageable because someone always looks at it before it matters.</p>
<p>The applications that fail are the chains that were given too much independence too soon. Not because the technology couldn't handle it, but because nobody had established what would happen if it got something wrong. That question takes half an hour, and determines whether your application is still running a year from now.</p>
