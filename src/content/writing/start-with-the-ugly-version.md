---
title: Start with the ugly version
description: The first draft isn't supposed to be good. It's supposed to exist.
date: 2026-10-20
---

There is a version of every project that lives only in your head. It is
elegant. The interfaces fit together, the data model is obvious, and the code
reads like prose. It is also useless, because it does not exist.

The version you can actually ship is worse. It has duplicated logic, a badly
named function, and a screen that works only if you open it on a Tuesday. But
it runs. That difference — between imaginary and running — is worth more than
every improvement you can make on paper.

## The imaginary version is a trap

Planning feels like progress. You sketch the architecture, name the modules,
and decide how everything will fit. None of it is wrong, exactly. It is just
untested, and the parts that matter are the parts you can't see yet.

The longer you stay in that phase, the more attached you become to a design
that has never been touched by reality. By the time you write the first line,
you are no longer solving the problem. You are defending a plan.

The ugly version breaks the attachment. It is concrete, so it can be wrong in
ways you can observe.

## Make it exist

The first build should answer one question: does this idea survive contact with
a real user, a real dataset, or a real deadline? Everything else is decoration.

That means cutting until the cut hurts. Pick the smallest version that still
resembles the thing you want to make. One screen instead of five. A text file
instead of a database. A cron job instead of a queue. If you are embarrassed by
how little it does, you are probably close.

> A prototype is not a smaller product. It is a question with a user interface.

The point is not to avoid quality. The point is to spend your quality budget
where the answers are still unknown. Polish the part that teaches you
something. Leave the rest visibly unfinished.

## Ugly is information

Every rough edge is a finding. A screen that confuses you will confuse other
people. A workflow that feels tedious after ten minutes will feel unbearable
after a month. A data model that needs a special case on day one will need
twenty by the end of the quarter.

None of that shows up in a diagram. All of it shows up in the ugly version,
often within an hour of using it.

This is why the best early feedback is rarely a detailed critique. It is
someone using the thing while you watch, in silence, and getting stuck exactly
where you did. Their confusion is not a failure of the prototype. It is the
prototype doing its job.

## Keep the seams visible

When the ugly version works, the temptation is to clean it up immediately —
rewrite the module, abstract the duplication, make it presentable. Resist that
for a moment. Ugly code with visible seams tells you where the real boundaries
are. A premature cleanup hides them under a layer of confident naming.

Refactor when the shape has stopped changing, not when the code stops being
embarrassing. In practice, that means waiting until you have used the thing
enough to know which parts are structural and which are accidents of the first
afternoon.

The first version is a sketch, and sketches are not judged by their line
quality. They are judged by whether they captured the pose. Get the pose right
while it is still cheap to change. Then make it beautiful.

That order matters. Beautiful comes last, and it comes easily, because by then
you know what you are actually building.
