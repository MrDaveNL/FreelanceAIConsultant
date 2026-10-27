---
id: C6-01
lang: en
url: /ai-agents/what-is-an-ai-agent
parent: C6-00
cluster: "6. AI Agents"
pageType: Spoke
schema: article
navLabel: "What is an AI agent?"
title: "What is an AI agent? How it works, with examples"
metaTitle: "What Is an AI Agent? How It Works & Examples"
metaDescription: "What is an AI agent, and how does it differ from a chatbot? A clear explanation of how AI agents work, the types that exist, and practical business examples."
keyphrase: what is an ai agent
eyebrow: "Explained"
lede: "What is an AI agent, and why is everyone suddenly talking about them? In short: software that doesn't just answer, but takes steps itself to reach a goal. This article explains how that works, how an agent differs from a chatbot, and which types you'll come across."
primaryCta: { label: "Read more on AI agents for business", href: /ai-agents }
secondaryCta: { label: "See the AI Readiness Assessment", href: /services/ai-readiness-assessment }
summary:
  - "An AI agent is given a goal and chooses the steps itself, including the use of other systems."
  - "The difference from a chatbot is in acting: an agent can do things, not just say them."
  - "How much independence an agent gets is a choice the organisation makes, not a property of the technology."
published: "2026-10-27"
updated: "2026-10-27"
faqTitle: "Frequently asked questions"
faq:
  - q: "Is an AI agent the same as an AI assistant?"
    a: "Not quite. An AI assistant helps you while you do the work: you ask a question and get an answer or a draft. An AI agent carries out a sequence of steps towards a goal itself, often in other systems. In practice the terms blur, and many assistants now also offer agent features."
  - q: "Does an AI agent have access to all my systems?"
    a: "Only to the systems and data you give it access to. That's exactly the design choice you need to make deliberately. A sensible start is an agent with read access only, adding write access once you know how it behaves."
  - q: "Does an AI agent learn from its own mistakes?"
    a: "Usually not in the way people expect. An agent running on a language model doesn't automatically adjust its behaviour after a mistake. Improvement comes from people adjusting the instructions, sources or checks based on what they see in the logging."
  - q: "Can an AI agent make decisions on its own?"
    a: "Technically, yes, but whether that's wise depends on the consequences of a mistake. For reversible steps with a clear final check, it can. For decisions about people, money or external communication, a human check belongs in the loop, and for some decisions UK GDPR and the AI Act set requirements of their own."
  - q: "What do I need to get started with AI agents?"
    a: "A concrete task with a lot of repetition, sources that are in order, an owner who reviews the outcomes, and agreements on which data the agent may use. The technology is rarely the first bottleneck; the choice of process is."
sources: []
---

## What is an AI agent?

An AI agent is a software system that's given a goal and works out for itself which steps are needed to reach it. It gathers information, uses other systems, assesses intermediate results, and chooses the next step based on those. The goal comes from a human; the agent largely decides the route itself.

That's the essential difference from most AI applications you already know. A tool that summarises a text or answers a question delivers a single outcome for a single request. An agent works on a task made up of several steps, such as "complete this customer file" or "prepare the quote for this request".

Most agents you come across today run on a large language model. That model handles understanding the instruction and reasoning about the next step. Around it sit the parts that turn a language model into an agent: access to tools and systems, a memory for the task at hand, and instructions on what is and isn't allowed.

Anyone who mainly wants to know what this means for an organisation will find the applications, costs and approach on the page about [AI agents for business](/ai-agents).

## How does an AI agent work?

An AI agent's operation comes down to a loop that repeats until the goal is reached or the agent gets stuck.

<figure class="diagram" role="img" aria-label="The working cycle of an AI agent: receive a goal, plan, carry out an action with a tool, assess the result, and then finish or choose a next step">
<ol class="flow">
<li><b>Goal</b>A human or system gives an instruction</li>
<li><b>Plan</b>The agent decides the next step</li>
<li><b>Act</b>Call a tool or system</li>
<li><b>Assess</b>Is the result right, is the goal reached?</li>
<li><b>Finish or continue</b>Deliver, or back to planning</li>
</ol>
<figcaption>An agent runs this cycle several times. Each round is a point where things can go right or wrong.</figcaption>
</figure>

What happens at each step:

- **Goal and instructions.** The agent gets an instruction plus fixed rules: which sources it may use, which actions are forbidden, and when it must bring in a human.
- **Planning.** The language model works out what the logical next step is. For a simple task that's one action; for a complex one, a sequence.
- **Acting through tools.** A tool is anything the agent can call: a search function, a database, a CRM, a calendar, a calculation module, or another AI model. This is where the agent moves from talking to doing.
- **Assessing.** The agent looks at the result of its action. Did the search return anything useful? Does the answer fit the question? If not, it tries a different route.
- **Memory.** During the task, the agent remembers what it's already done. Some agents also keep information between tasks, which is useful but also raises questions about what data you're retaining. Those questions are covered separately on this site, in an article on AI agents and data protection.

Because an agent takes several steps in sequence, a mistake in an early step can carry through to the final result without that result looking wrong. That's why logging and checkpoints matter more for agents than for an ordinary AI application. I covered this in the article on [what AI agents can and cannot do](/insights/what-ai-agents-can-and-cannot-do): agents do well on reversible steps with a clear final check, and break down on long chains where a mistake carries through quietly.

## AI agent versus chatbot

The difference between an AI agent and a chatbot is one of the most common questions, because they can look alike from the outside. You can ask both something in plain language. The difference is in what happens next.

| | Chatbot | AI agent |
|---|---|---|
| What it does | Answers a question within a conversation | Carries out a task in several steps |
| Access to systems | Usually limited to a knowledge base | Can consult systems, and sometimes change them |
| Who decides the route | The conversation, question by question | The agent, based on the goal |
| Consequence of a mistake | A wrong answer | A wrong action, possibly with knock-on effects |
| What you need to arrange | Accuracy of answers | Access rights, checkpoints, logging and ownership |

A chatbot that tells a customer how to change their address is a chatbot. A system that actually changes the address, sends the confirmation, and updates the file is an agent. In practice, the line isn't always sharp: many chatbots are gradually gaining agent features, and many agents have a chat window as their front end.

## Types of AI agents

Several ways of classifying agents exist. For an organisation, two are the most useful: by degree of independence, and by structure.

**By independence.** How much an agent is allowed to do on its own is a setting you choose. An agent can only prepare (gathering information for a human), propose actions that a human approves, act with confirmation at irreversible moments, or work fully independently with checks after the fact. My advice is almost always to start low and only increase autonomy once you know what mistakes occur.

**By structure.** Broadly, three forms exist:

- **Single-purpose agents** that carry out one tightly scoped task, such as preparing a reply to a customer email.
- **Agents within an [AI workflow](/ai-automation/ai-workflows)**, where a fixed process flow sets the main line and the agent only handles the steps that need interpretation, such as reading a document or classifying a request.
- **Collaborating agents**, where several agents each handle part of a task and a coordinating agent divides the work. That's more powerful, but also harder to test and control.

For most organisations, the second form is the sensible starting point: fixed rules where you can, an agent where you must.

## Examples

A few generic examples to make it concrete:

- **Customer service:** an agent reads an incoming email, looks up the order, drafts a reply, and puts it to a staff member.
- **Sales:** after a client call, an agent turns the notes into a summary, updates the CRM, and drafts a follow-up email for approval.
- **Finance:** an agent compares incoming invoices against purchase orders and flags discrepancies for accounts payable.
- **Internal knowledge:** an agent answers colleagues' questions based on handbooks and policy documents, with the source cited.

A fuller list, worked out by department with how it works and the integrations needed, is on the [twelve AI agent examples](/ai-agents/examples) page.

<aside class="scenario" aria-label="Example scenario">
<p class="scenario-label">Example scenario</p>
<p>A housing association with 300 staff is considering an agent that handles tenants' repair requests independently: reading the report, scheduling a contractor, and sending the tenant a confirmation. That covers around 1,400 reports a month.</p>
<p>The adviser reviews the plan from the client's side and splits the task into steps, each with its own level of independence. The agent categorises reports and proposes a schedule; a planner confirms it. Reports that point to danger, such as a leak or a power cut, always go straight to a human.</p>
<p>In an eight-week trial, the agent categorises 85 percent of reports correctly. The planner spends an average of 3 minutes per report instead of 6, around 70 hours a month in total. Sending confirmations itself is something the agent doesn't yet do.</p>
<p class="scenario-note">Illustrative example, built from situations that come up often. The organisation and figures are for illustration.</p>
</aside>

Considering an agent yourself? The next question is how to have one built: what to set out upfront, how to choose a delivery partner, and what it costs. That's covered on the page about [having an AI agent built](/ai-agents/build). Want to talk through whether an agent is the right fix for your process first? [Get in touch](/contact) for a no-obligation conversation.
