---
title: "Documentation"
description: "Where the documentation of the Allors3 platform and of the supporting open-source tools Documents, Excel and Immersive is published, what each area covers, and how people and agents use it."
audience: "Users and maintainers"
kind: "Index"
status: "Current"
---

> **Status: Current.**

Allors builds a development stack for business applications. This website is the home of its
documentation: the Allors3 platform and three supporting open-source tools each publish their own
documentation beneath this address, from their own repositories, and each documents its own
version. This page says what the areas cover and how to use them; the technical content is in the
areas themselves.

## Platform

[Allors3](/allors3/) is an actively developed platform for applications built with domain
inheritance. An application declares its own domain that extends Core and inherits its model and
behaviour, directly or through other domains; a domain can extend several domains. The
documentation is written for users, who build applications on Allors3, and for maintainers, who
change the platform. It starts with the kinds of domains and continues with authentication,
logging and the agreed terminology; the maintainer pages explain domain inheritance and workspace
session state. Source: [allors/allors3](https://github.com/allors/allors3).

## Open-source tools

Documents, Excel and Immersive are supporting tools of Allors: open-source .NET libraries that
are usable on their own. Each has its own repository, issues and documentation, proportional to
its scope and written to the same standard as the platform's.

[Documents](/documents/) renders OpenDocument texts from templates. A template is written in
LibreOffice Writer with tags in placeholder fields and in the descriptions of pictures, bound to a
model and rendered to a document. The documentation serves template authors, developers who
render documents and validate templates, and maintainers. Source:
[allors/documents](https://github.com/allors/documents).

[Excel](/excel/) is a .NET library for Excel add-ins. It gives an add-in a virtual workbook:
workbooks, worksheets and cells that the add-in reads and writes as ordinary objects, with the
changes written to Excel in blocks and the changes a user makes in Excel coming back as events.
The same program runs against an in-memory workbook, so the logic of an add-in can be tested
without Excel. Source: [allors/excel](https://github.com/allors/excel).

[Immersive](/immersive/) is an IL weaver for .NET assemblies. After a project compiles, the
weaver rewrites the project's assembly so that its use of one library is redirected to
substitutes from another assembly, without a change to the source code. Allors uses it to test
desktop applications: the Windows Forms and Avalonia libraries in its repository substitute the
UI controls, so a test can find the controls of a real form by name and drive them. Source:
[allors/immersive](https://github.com/allors/immersive).

## Using the documentation

The areas follow one standard, first written for Allors3 in its
[writing guide](/allors3/internals/writing-documentation/). Every page states its audience, its
kind and whether it describes current, planned or historical behaviour. Tutorials, how-to guides,
reference and explanation are kept apart; indexes and decision records have their own purposes.
The label above each title says which branch or version the area documents: the platform and the
tools release independently, so the areas do not share a version. Search covers one area at a
time; use the search box of the area you are reading.

Each page has a Markdown export, linked as "Markdown" beneath its title, and each area has an
agent index at its root, linked as "Agent index". The exports carry the same text, tables, code
and diagram sources as the pages.

| Area | Documentation | Markdown index | Agent index |
| --- | --- | --- | --- |
| Allors3 | [/allors3/](/allors3/) | [index.md](/allors3/index.md) | [llms.txt](/allors3/llms.txt) |
| Documents | [/documents/](/documents/) | [index.md](/documents/index.md) | [llms.txt](/documents/llms.txt) |
| Excel | [/excel/](/excel/) | [index.md](/excel/index.md) | [llms.txt](/excel/llms.txt) |
| Immersive | [/immersive/](/immersive/) | [index.md](/immersive/index.md) | [llms.txt](/immersive/llms.txt) |

## For agents

The agent index of this home, linked as "Agent index" beneath the title above, lists the pages of
the home; the table above lists the indexes of the areas. Each index follows the
[llms.txt](https://llmstxt.org/) discovery proposal: it is a discovery aid, not assurance that an
agent reads it. An agent working in a checkout uses that repository's `AGENTS.md` and the
documentation in the checkout; a published page for another version is not evidence of what a
checkout does.

## This website

[Documentation home](internals/documentation-home.md) records how this website is built and
published, why its repository keeps the name of the organisation site, and what remains open.
Report a problem with an area through that repository's issues, and a problem with this home
through [this repository's issues](https://github.com/allors/allors.github.io/issues).
