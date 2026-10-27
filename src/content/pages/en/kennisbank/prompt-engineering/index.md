---
id: C10-05
lang: en
url: /knowledge-base/prompt-engineering
parent: C3-05
cluster: "10. Knowledge base AI tools"
pageType: Knowledge base
schema: article
navLabel: "Prompt engineering"
title: "Prompt engineering: getting better results from AI"
metaTitle: "Prompt Engineering | How to Write Better AI Prompts"
metaDescription: "Learn how to write better AI prompts, with techniques, examples and templates for business use in ChatGPT, Claude, Gemini and Microsoft Copilot."
keyphrase: prompt engineering
eyebrow: "Knowledge base"
lede: "An AI prompt is the instruction you give a language model, and the quality of that instruction largely determines what you get back. Prompt engineering sounds technical, but for most business users it comes down to something familiar: giving a good brief to someone who's smart but doesn't know your organisation. Below are the techniques the makers of ChatGPT, Claude, Gemini and Copilot themselves recommend, with templates you can use straight away."
primaryCta: { label: "See the AI workshops", href: /ai-workshop }
secondaryCta: { label: "Book a strategy call", href: "mailto:dave@freelanceaiconsultant.com" }
summary:
  - "A good prompt states what you want, why, for whom and in what form."
  - "Examples, context and a clear structure improve the result more than clever formulas."
  - "Always check the output: a language model can sound convincing and still be wrong."
published: "2026-10-27"
updated: "2026-10-27"
sources:
  - title: "Anthropic: Prompting best practices (Claude)"
    url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices"
  - title: "Anthropic: Prompt engineering overview"
    url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview"
  - title: "OpenAI: Prompt engineering guide"
    url: "https://developers.openai.com/api/docs/guides/prompt-engineering"
  - title: "Google AI for Developers: Prompt design strategies"
    url: "https://ai.google.dev/gemini-api/docs/prompting-strategies"
  - title: "Google Workspace Learning Center: Tips to write prompts for Gemini"
    url: "https://support.google.com/a/users/answer/14200040"
  - title: "Microsoft Support: Learn about Copilot prompts"
    url: "https://support.microsoft.com/en-us/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5"
  - title: "Microsoft Learn: Data, privacy, and security for Microsoft Copilot"
    url: "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy"
---

## What is prompt engineering?

An AI prompt is the text you use to set a language model to work: a question, an instruction, sometimes with documents or examples attached. Prompt engineering is the craft of phrasing that instruction so the model does what you mean, and keeps doing it the next time.

For developers building AI into software, that's a genuine discipline with tests and version control. For most staff, it's simpler: you pick up a handful of habits that make the difference between a generic answer and a usable draft. Those habits work in any assistant, whether you're using [ChatGPT in your organisation](/knowledge-base/chatgpt-for-business), [Claude](/knowledge-base/claude-for-business), [Gemini in Google Workspace](/knowledge-base/gemini-for-business) or [Microsoft Copilot](/knowledge-base/microsoft-copilot-for-business).

Anthropic, in its [guide to prompting](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices), offers an image that sticks: treat the model like a brilliant but brand-new employee who doesn't yet know your standards or your way of working. The more precisely you explain what you want, the better the result. Their rule of thumb: have your prompt read by a colleague who knows nothing about the task. If they don't understand it, the model won't either.

Which assistant fits your organisation is a separate question; the overview of [AI tools](/ai-automation/ai-tools) is a better starting point for that.

## Techniques

The official prompting guides from OpenAI, Anthropic, Google and Microsoft differ in detail, but as of October 2026 they converge on the same core. These are the techniques that recur across multiple guides.

<figure class="diagram" role="img" aria-label="The building blocks of a good prompt, in order: role, task, context, examples and desired form">
<ol class="flow">
<li><b>Role</b>From what perspective should the model work?</li>
<li><b>Task</b>What needs to happen, as concretely as possible?</li>
<li><b>Context</b>For whom, why, and with which sources?</li>
<li><b>Examples</b>What does a good result look like?</li>
<li><b>Form</b>Length, structure, tone and what to leave out.</li>
</ol>
<figcaption>Not every prompt needs all five, but the more the outcome matters, the more of these building blocks are worth filling in.</figcaption>
</figure>

**1. Be clear and specific.** Google names [clear and specific instructions](https://ai.google.dev/gemini-api/docs/prompting-strategies) as its first strategy. "Write an email to a customer" produces something generic. "Write a short email to an existing customer whose delivery is running late, apologise without admitting fault, and give the new date" produces something usable.

**2. Give context and explain why.** Anthropic recommends giving the goal behind an instruction, so the model better understands what you're trying to achieve. Microsoft says something similar in its [explainer on Copilot prompts](https://support.microsoft.com/en-us/topic/learn-about-copilot-prompts-f6c3b467-f07c-4db1-ae54-ffac96184dd5): a good prompt can include four elements, namely the goal, the context, your expectations and the source. Only the goal is required; the rest makes the answer more specific.

**3. Give it a role.** A line like "You are an experienced buyer reviewing quotes" steers tone and angle. Anthropic notes that even a single sentence makes a difference.

**4. Show examples.** This is known as few-shot prompting. OpenAI recommends a handful of input/output examples, with variation. Google goes further and recommends almost always including examples. Anthropic suggests three to five well-chosen examples as a guideline. If you have an email or summary that's exactly right, paste it in as an example.

**5. Make the structure visible.** Both [OpenAI](https://developers.openai.com/api/docs/guides/prompt-engineering) and Anthropic recommend clearly separating instructions, context and examples, using headings or labels such as `<context>` and `<example>`. That stops the model mistaking an example for an instruction.

**6. Set the form and the boundaries.** Explicitly ask for a table, five bullet points, or a maximum of a hundred words. Google treats both the answer format and constraints ("what to include and what not to") as separate techniques.

**7. Break large tasks apart.** The [Google Workspace prompting guide](https://support.google.com/a/users/answer/14200040) recommends splitting complex tasks into separate prompts. Anthropic describes a useful pattern: have a draft produced first, then have the model check it against criteria, then have it improve the draft based on that check.

**8. Put long documents at the top.** If you're working with long material, such as a contract or annual report, Anthropic recommends putting that at the top of the prompt and your question at the bottom.

## Examples and templates

The templates below can be copied and filled in. Replace everything in brackets with your own situation. They work in any mainstream assistant.

### Template for a good AI prompt

```
Role: You are [role, for example: an experienced communications adviser].
Task: [What needs to happen, in one or two sentences.]
Context: This is for [audience]. The goal is [what you want to achieve].
Sources: Use only the information below. If something is missing, say so.
Form: [Length, structure, tone.] Don't: [what you explicitly don't want].

<source>
[Paste the text or document here.]
</source>
```

**Summarising a long text for a decision**

```
Summarise the document below for the leadership team, who need to decide
in two weeks whether to proceed with [project]. Give:
1. the gist in three sentences;
2. the main risks as bullet points;
3. the open questions that still need answering.
Maximum 250 words. Don't cite any figures that aren't in the document.
```

**Rewriting a text in a fixed style**

```
Rewrite the text below in the same style as the example.
Keep the content the same; change only tone and structure.

<example>
[A text that's exactly right.]
</example>

<text>
[The text to be rewritten.]
</text>
```

**Having a draft reviewed**

```
Below is a draft for [a quote, a policy note, an email].
Assess it on: clarity for [audience], completeness and tone.
Give what could be better for each point, then write an improved version.
```

The last template applies the pattern of draft, review and improve. It also works if you wrote the draft yourself.

<aside class="scenario" aria-label="Example scenario">
<p class="scenario-label">Example scenario</p>
<p>A wholesaler with 85 staff uses ChatGPT Business to draft replies to complaints. Customer service keeps using the same prompt: "Write a reply to this complaint." The drafts are long and stiff, and often get mostly rewritten.</p>
<p>During a training session with the adviser, the team rewrites that prompt, using its own complaints as practice material. The new version gives a role, the context (existing customer, late delivery), two approved example emails and a form: maximum 120 words, informal but professional tone, an apology without admitting fault, and always the new delivery date. If that date is missing, the model has to ask for it rather than invent one.</p>
<p>Out of thirty real complaints, the old prompt let 6 drafts go out almost unchanged; the new prompt let 21 through. The team lead now manages the prompt in a shared library. Automatic sending was deliberately not introduced.</p>
<p class="scenario-note">Fictional example, built from situations that come up often. The organisation and figures are illustrative.</p>
</aside>

A single template helps one person. A team gets more out of a shared library of prompts for recurring work, with one owner who maintains it. That stops everyone reinventing the wheel and makes quality more predictable.

## Common mistakes

**Too little context.** The most frequent mistake. The model doesn't know who it's writing for, what's already known, or what you'll do with the result, and fills that in with something average.

**Everything in one prompt.** An instruction with six sub-tasks produces six half-answers. Break it up and build on the previous answer.

**Not checking the outcome.** Microsoft itself states in its [documentation on Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy) that answers from generative AI aren't guaranteed to be factually correct and that users need to review them before sharing anything. That applies to every assistant. Always check names, figures, sources and any legal or financial statements yourself.

**Confidential data in the wrong tool.** A good prompt often includes context, and that context can be sensitive. For company information, use only the environment your organisation has approved for it, and stick to your agreements on personal data.

**Hunting for the magic formula.** Plenty of "ultimate prompts" circulate online. They sometimes help, but the vendors' own guides emphasise something duller: phrasing clearly, giving context, showing examples and testing. Anthropic even stresses defining what a good result looks like, and how you'll check for it, before you start polishing the prompt.

**Stopping after the first attempt.** A first answer is a draft. Push further, give feedback ("shorter", "more formal", "more emphasis on cost"), and save a prompt that works well for next time.

The fastest way to learn prompting is with your own work as practice material. To do that with your team, look at [ChatGPT training for teams](/ai-workshop/chatgpt-training) or, if you work with Microsoft 365, [Copilot training](/ai-workshop/copilot-training). An overview of all the formats is on [AI workshops and training](/ai-workshop).

Want to know where prompt engineering would pay off most in your organisation, or how to set up a shared prompt library? [Book a thirty-minute call](/contact).
