---
title: "Working Less with No-Code and AI"
description: "Slides and notes from my February 2025 virtual talk on workflow automation with no-code tools and AI."
date: 2025-02-17
tags: [automation, no-code, ai, workflow, productivity, talks]
---

On February 17, 2025, I hosted a free virtual talk on **workflow automation with
no-code and AI**. The idea was simple: work less by letting software handle the
repetitive parts, and spend your attention on the decisions that actually need
you.

This page is the companion to the slides — the full deck, plus a written summary
for anyone who wants the short version.

> **Join our FREE virtual talk on Workflow Automation with No-Code + AI** and
> learn how to streamline your work like a pro!
>
> 📅 When: February 17, 2025 (Monday), 8:00 PM – 10:00 PM
>
> 📍 Where: Zoom

<div class="embed">
  <iframe
    src="https://www.canva.com/design/DAGfRyt5qlw/xsg5jt_aMOjFuFez0My_Zw/view?embed"
    title="Work Less: No-Code + AI — slide deck"
    loading="lazy"
    allowfullscreen
  ></iframe>
</div>

## The agenda

The session was split into three parts:

- **Intro to workflow automation** — 25 minutes
- **Live demo with n8n** — 45 minutes
- **Q&A** — 20 minutes

## Three shifts changing how we work

The talk opened with the forces making this moment different:

- **Citizen development.** The people closest to a process can now build the
  tools that support it, without waiting on a development team.
- **AI-enhanced productivity.** Models can draft, classify, extract, and
  summarize — the fuzzy work that used to stop an automation dead.
- **Cross-platform integration.** A single workflow now spans a form, a
  spreadsheet, an inbox, a chat app, and a tracker. Connecting them is the job.

## What a workflow actually is

Every workflow has the same three parts:

1. **Input** — raw data, requests, or triggers that start your process.
2. **Processes** — the series of steps, decisions, and transformations that
   handle the input.
3. **Output** — the end result or action that completes the workflow.

An automated email campaign is a familiar example. A signup triggers a
sequence of checks and messages, and the output is a welcome email and a new
subscriber record. Nothing about it needs a person in the loop once the rules
are right.

## The tools

| Tool | Best for | What it is |
| --- | --- | --- |
| **Zapier** | Fast, simple connections | Connects different apps and services through "Zaps" to automate repetitive tasks without code. |
| **Make** | Visual, branching logic | A visual automation platform for sophisticated scenarios with branching and data transformations. |
| **n8n** | Ownership and control | An open-source workflow automation tool that can be self-hosted. |
| **IFTTT** | Everyday consumer automations | A consumer-friendly platform for smart home devices, social media, and basic web services. |

There is no single winner. Pick based on where the workflow lives, who
maintains it, and how much control you need over the data passing through it.

## How apps talk to each other

The question that unlocks most automation is deceptively simple: how do all
these apps and services talk to each other?

The answer is **APIs** — application programming interfaces. An app sends a
request; another app sends a response. That's the whole contract. Tools like
Make and n8n exist to make that exchange easy: you connect two services, map
the fields, and the platform handles the request and response for you.

Once you see workflows as inputs, processes, and outputs, an API is just a
doorway between two of them.

## Case study: GoreMote.ph

Dorxata built a custom Make workflow that takes form submissions from a website
and updates the team's internal tracker. No copy-paste, no lead sitting in an
inbox, no one reconciling two lists at the end of the week.

It is a small automation by the standards of enterprise software, and that is
the point. The value was not technical sophistication. It was removing a
recurring, error-prone task from a person's day.

## The live demo

The middle of the session was spent building n8n workflows live: a trigger, a
few processing steps, and an output that does something visible. n8n also
offered attendees a discount code — **MAX50** — for anyone who wanted to try it
afterward.

## Where AI fits

The AI part of the title is the newest layer. Models are most useful at the
edges of a workflow: turning messy text into structured data, sorting requests
into categories, drafting a first response. The automation still does the
moving; the model helps with the judgement calls that used to require a person.

Keep a human check on anything that leaves the building. The goal is not a
workflow that runs unattended forever. It is one that runs well enough that you
only need to look when something unusual happens.

## Slides

You can also [open the deck in Canva](https://www.canva.com/design/DAGfRyt5qlw/xsg5jt_aMOjFuFez0My_Zw/view)
to view it full screen or present it yourself.

If you build something with this, I'd like to hear about it — the best part of
teaching automation is seeing which repetitive task someone decides to never do
again.
