---
title: Keep a decision log
description: A short note when you make a choice is worth more than a perfect plan you never wrote down.
date: 2026-09-08
---

Most teams remember what they built. Very few remember why. Six months later,
someone finds a strange condition in the billing code and asks a reasonable
question: why is it like this? The answer is usually a shrug, a link to a dead
ticket, and a meeting that no one wrote down.

A decision log is the cheapest fix I know. It is not documentation. It is not a
design doc. It is a sentence or two, written at the moment of the decision,
that records what you chose and what you gave up.

## What to write

Keep it short enough that you will actually do it. Five lines is plenty:

- **Date.** When the decision was made, not when it was written up.
- **Decision.** One sentence, in the active voice. "We cache user profiles for
  five minutes," not "Caching strategy discussion."
- **Why.** The constraint that made this the right call. Speed, cost, a
  deadline, a customer promise.
- **What we rejected.** The alternative you almost picked, and the reason you
  didn't.
- **What would change our mind.** The signal that should reopen the question.

That last line is the one people skip, and it is the most valuable. It turns a
decision from a rule into a hypothesis. When the signal appears, you know to
revisit it instead of arguing from memory.

## Put it next to the work

A decision log in a wiki dies. A decision log in the repository lives as long
as the code does. Keep a single file — `docs/decisions.md` is enough — and add
to the top. No folders, no numbering scheme, no template that takes longer to
fill in than the decision took to make.

If you use pull requests, the description is a fine place for small decisions.
The important thing is that the reasoning ends up somewhere a future reader
will look. Code comments are for what the code does. The log is for why it
exists at all.

## It changes the conversation

The first effect is practical: onboarding gets faster, and repeated debates get
shorter. Someone proposes a change, you point at the entry from March, and the
discussion starts from the old constraints instead of zero.

The second effect is subtler. Writing down a decision forces you to notice when
you don't have a reason. "It felt cleaner" is a real reason, but seeing it in
writing makes you ask whether it is a good one. The log becomes a small
pressure toward thinking before committing.

There is a cost, of course. A log can become a graveyard of decisions nobody
revisits, or a performance of thoroughness that slows down work that should be
fast. The fix is the same as with any note: write for the person who will read
it later, not for the archive. If an entry won't help anyone in six months,
don't write it.

Start with one decision you made this week. One paragraph. Put it in the repo.
You will thank yourself the next time someone asks why.
