---
title: "Why AI Can't Spell Strawberry"
description: "A guest lecture on tokenization, and the one small word that trips up large language models."
date: 2024-10-31
tags: [ai, llms, tokenization, talks, education, computer-science]
---

In October 2024, I was invited to give a guest lecture to a college class. The
talk was called **Why AI Can't Spell Strawberry**, and it was my attempt to
explain one of the strangest small failures of large language models — and,
through it, how they actually read text.

Ask a model how many *r*s there are in "strawberry" and it will often say two.
The mistake is funny, but it is not random. It comes from the fact that the
model never sees the letters. It sees tokens.

<div class="embed">
  <iframe
    src="https://www.canva.com/design/DAGT6PIMSKQ/cjrWqocC3mctBF-pf5NKbw/view?embed"
    title="Why AI Can't Spell Strawberry — slide deck"
    loading="lazy"
    allowfullscreen
  ></iframe>
</div>

## What the talk covers

The deck builds the explanation from the ground up:

- **What a GPT is** — generative, pre-trained, and a transformer, and what each
  of those words actually means.
- **The tokenizer** — how raw text becomes a series of tokens and numerical IDs.
- **Subword tokenization** — why models break words into familiar fragments
  instead of letters or whole words.
- **Byte pair encoding** — the compression trick underneath it all.
- **The consequences** — trouble with string tasks, an English-language bias
  (non-English text burns more tokens), and the odd "glitch tokens" that make a
  model behave strangely.

The strawberry problem is a good teaching example because it is small, visible,
and easy to get wrong. It also happens to be the kind of mistake that a better
prompt does not fix. The model is doing exactly what it was built to do; the
gap is between how we read a word and how the model reads one.

Thanks to the class for having me. The slides are below if you want to follow
along, or [open the deck in Canva](https://www.canva.com/design/DAGT6PIMSKQ/cjrWqocC3mctBF-pf5NKbw/view)
to view it full screen.
