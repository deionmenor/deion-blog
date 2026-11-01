---
title: I Ship App Features From My Phone Now
description: A PRD, three agents with deliberately unequal permissions, and a client that fits in a notification shade.
date: 2026-11-01
---

*A PRD, three agents with deliberately unequal permissions, and a client that fits in a notification shade.*

I freelance. My calendar is client calls, and the hours I have for my own product are the seams between them: twenty minutes before a standup, the queue at the bank, the last hour before sleep. Findtopia, a community app for interior designers, has been built almost entirely in those seams.

The thing that made that possible was not a smarter model. It was a harness: a product spec, three agents with unequal permissions, and a client that turns my attention into decisions instead of tasks.

![The loop: phone, orchestrator, subagents, merge gate](diagrams/1-the-loop.png)

*Figure 1 — The loop. A phone session reads a five-line status, answers one checklist, and a PR comes back through a gate I control.*

## The pieces, and the contract between them

OpenCode Go is the agent runtime: a coding session on my machine with tools — shell, edit, git, `gh`. OpenChamber is the client. Desktop for the long passes; the Android and iOS apps for everything else, which is most of it. Claude Code is the escape hatch, running headless in its own git worktree when a task is bigger than one agent run.

The contract is two files. `agent/PRD.md` is product scope: numbered features, each with the behaviour it must have. `AGENTS.md` is the constitution — stack, commands, conventions, and the list of things nobody may touch. Every queued task cites a PRD section, so "build me a thing" becomes a specific piece of the product. If I ask for something the PRD does not cover, the orchestrator says so and marks the task blocked rather than inventing scope. That one rule is worth more than any prompt I have written: it is what stops an agent from confidently building the wrong app.

## The org chart

All three agents run the same model. What separates them is permission.

![Three roles, three permission sets, one gate](diagrams/2-the-harness.png)

*Figure 2 — Three roles, three permission sets, one gate. The reviewer's power is that it cannot fix anything.*

**The orchestrator** is the only agent I talk to, and it never writes app code. Its edit permission is a deny-all with three exceptions: `agent/`, `AGENTS.md`, and `.env.example` for placeholders. It turns a paragraph into queued tasks with acceptance criteria, dispatches them, reads CI, and asks before merging. Its instructions tell it to delegate if it catches itself reaching for a source file.

**The builder** gets one task, one branch, one pull request, fifty steps and a soft ceiling of about three hundred changed lines. It may push `feat/*` and nothing else. No `main`, no `.env`, no migration without an explicit ask. Every run ends with a `Needs handoff:` line, even "none", because the real failure is a terse run that omits the field and lets unfinished work pass as done.

**The reviewer** has `edit: deny`. Sixteen steps, no web access, no ability to spawn agents. It posts a provisional verdict on the PR before it reads deeply, then an amendment if the deep read changes its mind. That ordering is deliberate: runs do get cut off, and a verdict that exists only in a chat message that never came back is worth nothing. Its whole job is literal — each acceptance criterion against the diff, pass or fail.

The split is not about intelligence. Reviewing only means something if the reviewer cannot quietly fix what it found. One agent guards the queue, one has write access without judgement over scope, one has judgement without write access.

And nothing merges alone. `gh pr merge` is an ask, granted to exactly one agent, and honoured only after I say yes in that session. Reviewer approves, CI is green, then a checklist line arrives: "Merge #154."

## Ask me with buttons

I read on a phone. So every check-in has a fixed shape: status in five lines or fewer, then exactly one multiple-choice question with two to five options, multiple answers allowed, the recommended one first and marked. I tick "Merge #153" and "Rotate the token" and submit in one tap.

Prose questions are effectively banned, because a paragraph on a phone becomes homework. The side effect is a decision log. Last week's status entry reads: "he ticked *Dispatch T-087*; his other four options went unticked." That is the entire record of a session, and it is more honest than a summary anyone would have written afterwards.

![Ask with buttons; escalate by size](diagrams/3-two-rules.png)

*Figure 3 — Left: the only shape a check-in takes. Right: what happens when a task does not fit one run.*

## Escalate by size, do not retry

Small agent runs fail predictably: they exhaust their steps mid-feature with the work uncommitted. The obvious fix — more steps — was wrong, and the usage data said so. Nine of fifty-eight builder runs had stopped at exactly the old ceiling of sixty; nineteen of forty-nine reviews at exactly twenty. The cap had quietly become the budget.

So the caps came down and the rule changed. At the cap, an agent commits, pushes, opens a draft PR if there is not one already, and reports. If real work remains, the task is not re-dispatched. It is marked blocked with a written handoff: branch, what is done, what is left, the next command to run. Then Claude Code picks it up headless in a fresh worktree, reading that file. It inherits the same reviewer and the same no-merge rule, so escalation changes the worker, not the standard.

That last part matters more than it sounds. The lazy version of this workflow is "ask the strong model when the weak one struggles", which turns every hard task into an unbounded session with no verdict. The version that works has one property: the gate is identical no matter who did the work.

## What the phone actually changed

Not that I can code on a phone. I cannot. It is that the unit of my attention became a decision instead of a task. Before a session lets go, it writes the live state of every task into `STATUS.md`: what landed, what is blocked, what I owe, what nobody has seen. Any device can pick that up an hour later, or a week later. Each task gets its own worktree, so the next run starts from a known state instead of whatever the last one left behind.

## The honest part

This harness fails in ways that look like progress. Reviewers go quiet after a provisional verdict, so an approval exists that nobody finished checking. Agents cannot see a device, which is how a UI card shipped with a scroll height picked from a diff and never once seen on a screen. Merge-ready worktrees accumulate. A confident answer is not evidence; only a probe against production is.

None of that is fixed by a better model. It is fixed by an org chart: who may write, who may judge, what must be asked, and where the paper trail lives. The PRD is the product. The agents are staff. And the phone is where I sign off.
