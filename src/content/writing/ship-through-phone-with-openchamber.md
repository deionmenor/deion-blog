---
title: I Ship App Features From My Phone Now
description: A PRD, three agents with deliberately unequal permissions, and a client that fits in a notification shade.
date: 2026-11-01
tags: [ai, agents, workflow, productivity, tools, open-source]
---

I help multiple founders build their products, so my calendar is filled to the brim with client calls. On top of that, my partner and I have ventured into the hectic industry of event planning, so the hours I have for building my own ideas are the seams between them: twenty minutes before a check-in, the queue at the government office, the last hour before I inevitably sleep with my hands still clutched to my mobile device.

Findly, a social app I've been developing for interior designers, has been built almost entirely within those seams.

What made that possible was a custom-built [agent harness](https://github.com/deionmenor/agent-harness) and workflow built specifically for my hectic schedule.

![The loop: phone, orchestrator, subagents, merge gate](diagrams/1-the-loop.png)

*Figure 1 — The loop. A phone session reads a five-line status, answers one checklist, and a PR comes back through a gate I control.*

## The pieces, and the contract between them

Out of all the plans available out there, I needed to find one that was both efficient and flexible. 

OpenCode Go ticked all the boxes for me. Not only does the monthly Go plan give you a generous amount of access to lower-cost models such as **DeepSeek V4.1 Flash** and **GLM-5.3-Flash** for only $10 a month, it works seamlessly with other coding agents such as Hermes, Codex, and Pi.

Out of the current lineup of available harnesses, I specifically wanted an open-source tool that excels at cross-device continuity (I run a Windows PC, CachyOS on my laptop, and have both an iPhone and Google Pixel). I also needed a workspace GUI that makes it incredibly easy to view multiple projects at a glance. Given that, I chose OpenChamber, which has an excellent Android application and offers a quick QR code setup for private remote access.

The contract is simply made of two files. `agent/PRD.md` is the product scope: numbered features, each with the behaviour it must have. `AGENTS.md` has the rules — stack, commands, conventions, and the list of specifications nobody may touch. Every queued task cites a PRD section, so "build me X" becomes a specific piece of the product. If I ask for something the PRD does not cover, the orchestrator says so and marks the task blocked rather than inventing scope. That one rule is worth more than any prompt I have written: it is what stops an agent from confidently building the wrong app.

## The org chart

All three agents run the same model. What separates them is permission.

![Three roles, three permission sets, one gate](diagrams/2-the-harness.png)

*Figure 2 — Three roles, three permission sets, one gate. The reviewer's power is that it cannot fix anything.*

**The orchestrator** is the only agent I talk to, and it never writes app code. Its edit permission is a deny-all with three exceptions: `agent/`, `AGENTS.md`, and `.env.example` for placeholders. It turns a paragraph into queued tasks with acceptance criteria, dispatches them, reads CI, and asks before merging. Its instructions tell it to delegate if it catches itself reaching for a source file.

**The builder** gets one task, one branch, one pull request, fifty steps and a soft ceiling of about three hundred changed lines. It may push `feat/*` and nothing else. No `main`, no `.env`, no migration without an explicit ask. Every run ends with a `Needs handoff:` line, even "none", because the real failure is a terse run that omits the field and lets unfinished work pass as done.

**The reviewer** has `edit: deny`. Sixteen steps, no web access, no ability to spawn agents. It posts a provisional verdict on the PR before it reads deeply, then an amendment if the deep read changes its mind. That ordering is deliberate: runs do get cut off, and a verdict that exists only in a chat message that never came back is worth nothing. Its whole job is literal — each acceptance criterion against the diff, pass or fail.

And in this set up, nothing merges to production unless I explicitly say so. `gh pr merge` is an ask, granted to exactly one agent, and honoured only after I say yes in that session. Once the reviewer subagent approves, and the CI is all green, the orchestrator pings me back with a checklist item for "Merge #154."

## Ask me with buttons

I read on a phone. So every check-in has a fixed shape: status in five lines or fewer, then exactly one multiple-choice question with two to five options, multiple answers allowed, the recommended one first and marked. I tick "Merge #153" and "Rotate the token" and submit in one tap.

Prose questions are effectively banned, because a paragraph on a phone becomes homework. The side effect is a decision log. Last week's status entry reads: "he ticked *Dispatch T-087*; his other four options went unticked." That is the entire record of a session, and it is more honest than a summary anyone would have written afterwards.

![Ask with buttons; escalate by size](diagrams/3-two-rules.png)

*Figure 3 — Left: the only shape a check-in takes. Right: what happens when a task does not fit one run.*

## Escalate by size, do not retry

Small agent runs fail predictably: they exhaust their steps mid-feature with the work uncommitted. The obvious fix — more steps — was wrong, and the usage data said so. Nine of fifty-eight builder runs had stopped at exactly the old ceiling of sixty; nineteen of forty-nine reviews at exactly twenty. The cap had quietly become the budget.

So the caps came down and the rule changed. At the cap, an agent commits, pushes, opens a draft PR if there is not one already, and reports. If real work remains, the task is not re-dispatched. It is marked blocked with a written handoff: branch, what is done, what is left, the next command to run. Then Claude Code picks it up headless in a fresh worktree, reading that file. It inherits the same reviewer and the same no-merge rule.

## What this phone experiment actually changed

I still don't prefer working from a phone. I'm too fond of my multi-screen setup. But the harness taught me something: work flows more smoothly once the unit of my attention is a **decision** instead of a task.

What I want is the arrangement a real organization already has with a junior developer. I spend less time guiding an agent through back and forth, and I trust them to communicate clearly and briefly, so the only thing left for me is the decision.

They do the hard work: summarizing the paths that could succeed, naming the tradeoffs, and surfacing a few options, as infrequently as possible. That leaves me free for the dozens of other things going on in my life.
