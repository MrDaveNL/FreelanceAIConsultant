---
id: en-why-ai-pilots-stall
lang: en
slug: why-ai-pilots-stall
category: Organisation
tone: salmon
icon: ⚠
featured: false
title: Why AI pilots stall (and what to do about it)
titleLine1: Why AI pilots
titleLine2: stall
excerpt: The pilot worked. Everyone was excited. And a year later, nothing has scaled up. Five causes, five countermeasures.
metaTitle: Why AI Pilots Stall (and What to Do About It)
metaDescription: Almost every organisation I speak to has successful AI pilots. Almost none have scaled up more than two. That's not a technology problem.
lede: Almost every organisation I speak to has successful AI pilots. Almost none have scaled up more than two. That's not a technology problem.
readingTime: 4 min read
date: '2026-10-30'
dateLabel: 30 October 2026
summary:
  - A pilot proves feasibility, not value.
  - Scaling up fails on ownership, upkeep and work process, rarely on technology.
  - Agree the scale-up criteria before the pilot starts.
summaryClose: Whoever designs the pilot without exit criteria designs a dead end.
takeaways:
  - - Define success upfront
    - Without an agreed threshold set in advance, every outcome gets read as positive after the fact.
  - - Upkeep belongs in the pilot
    - If nobody maintains it after delivery, scaling up is impossible by definition.
  - - Pilot in the real environment
    - A pilot run outside the real work process only proves the technology works.
remember: A pilot with no agreed stop criterion never really ends, it just evaporates.
related:
  - which-ai-use-cases-deliver-results
  - ai-adoption-starts-with-the-work
order: 8
---

<h2>The pilot paradox</h2>
<p>Pilots are designed to reduce risk. Start small, learn, then scale up. In practice, they often do the opposite: they create the illusion of progress without anything actually changing. An organisation with seven successful pilots and zero applications in production is further from its goal than an organisation with one application that's actually running.</p>
<p>The causes are strikingly consistent. Five of them, and none are technical.</p>

<h2>Cause 1: The pilot proved the wrong question</h2>
<p>Most pilots answer the question "can this work technically?" These days, that answer is almost always yes, which means the pilot is neither informative nor decision-useful.</p>
<p>The questions that actually matter: does this cost less than it delivers at a hundred times this volume? Do the people who have to work with it actually want to use it when nobody's watching? Can we maintain it with the capacity we have?</p>
<p><b>Countermeasure:</b> before you start, write down the one question the pilot needs to answer, and phrase it so that "no" is a possible answer. If you can't picture what a negative outcome looks like beforehand, you're not designing a pilot, you're putting on a demonstration.</p>

<h2>Cause 2: The pilot ran outside the real work</h2>
<p>To move fast, a pilot often gets set up alongside the existing process: a separate environment, a hand-picked group of enthusiastic users, a standalone dataset. That gets you a result quickly and tells you nothing about scalability.</p>
<p>What then goes wrong at scale-up: integration with the source system turns out to be three months of work, the average user doesn't have the context the pilot group had, and the real data is messier than the test dataset.</p>
<p><b>Countermeasure:</b> a smaller scope in the real environment beats a larger scope alongside it. One team, real data, the real process, real integrations. That's slower in week one and considerably faster by month six.</p>

<h2>Cause 3: Nobody owns the next phase</h2>
<p>The pilot has a project lead. Their job is done at delivery. The business hasn't planned any capacity, reserved any budget, or set any target that this application fits into.</p>
<p>What happens then: the application keeps running in pilot form, unmaintained, until it breaks or the licence expires. Nobody decides anything. It just evaporates.</p>
<p><b>Countermeasure:</b> name the scale-up owner before the pilot starts, not after. That person sits in the business, has budget, and sits on the pilot steering group. If you can't find that person, that's itself an important finding: apparently there's no place in the organisation where this value lands.</p>

<h2>Cause 4: Upkeep wasn't factored in</h2>
<p>AI applications need ongoing maintenance: quality monitoring, retraining or recalibration, tracking model versions, a test set that stays current. During the pilot phase, the project team does this implicitly. After delivery, nobody does.</p>
<p>This is why applications that worked fine in month one are quietly performing worse by month eight, without anyone noticing.</p>
<p><b>Countermeasure:</b> include the upkeep cost in the business case, expressed in hours per month and assigned to a team. And during the pilot, run at least one real maintenance action (a retraining, a model update), so you know what it actually costs.</p>

<h2>Cause 5: The organisation wasn't allowed to change</h2>
<p>This is the deepest cause, and the one talked about least. An AI application that saves time means people do their work differently. Sometimes a role shifts. Sometimes a check moves from one department to another.</p>
<p>Pilots are often deliberately designed so these questions don't come up, because that makes things move faster. At scale-up, they all surface at once, and it turns out the business case only adds up if staffing or the division of work actually changes. That conversation was never prepared for.</p>
<p><b>Countermeasure:</b> name at the start which organisational change is needed to realise the value, and check whether there's support for it. If the answer is that nothing is allowed to change, you can still run the pilot, but calculate the business case without the saving that change would require. Often a real, smaller value remains. That's a more honest starting point than a promise you can't keep later.</p>

<h2>A one-page pilot contract</h2>
<p>What works well in practice: before you start, write down five things on one page, signed by the sponsor and the scale-up owner.</p>
<ul>
<li><b>The question</b> this pilot answers, with a measurable threshold for "successful".</li>
<li><b>The stop criteria:</b> at what outcome do we stop, and who decides that.</li>
<li><b>The scale-up owner:</b> name, and the department where the value lands.</li>
<li><b>The upkeep estimate:</b> how many hours a month does this cost after delivery, and who supplies them.</li>
<li><b>The change required:</b> what has to be different in the work for the value to be realised.</li>
</ul>
<p>This page takes an hour to write and prevents the scenario where, a year later, you have seven successful pilots and nothing in production. The biggest effect isn't in the document itself, but in the conversations you have to have to fill it in. That's exactly where the blockers become visible, while there's still time to fix them.</p>
