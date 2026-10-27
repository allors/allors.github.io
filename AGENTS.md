# AGENTS.md

Instructions for agents working in this repository. The facts live in the human documentation;
this file says where to find them and how to work here.

## Scope

- This repository is the Allors documentation home: the website at the root of
  `https://docs.allors.com`. [README.md](README.md) introduces it and the
  [documentation index](src/content/docs/index.md) is the page readers see. The documentation of
  Allors3, Documents, Excel and Immersive lives in those repositories and is published beneath the
  same address by their own workflows; change it there, not here.
- The home is public and covers Allors3 and the supporting open-source tools. Do not name or link
  anything outside that scope in any page, export, index, configuration or commit of this
  repository.

## Git

- Pull requests are the default. Creating a pull request requires approval.
- Use one branch and one pull request for an agreed body of work. Its parts land as focused
  commits on that branch. Create the pull request only when that work is complete; if one already
  exists, update it.
- Keep the title and description of a pull request correct for everything on its branch, and
  update them when the branch changes. For a squash merge, the title is the commit subject and the
  description is the commit body, describing the final changes and their validation.
- Use the conventional commit format `type(scope): description`. Keep commits focused and
  well-described. No AI attribution in commits or pull requests.
- Use purpose prefixes for branch names, such as `docs/`, `fix/` or `chore/`, not the name of an
  agent or tool.
- Nothing is published automatically. The documentation workflow validates pull requests and
  pushes; publication is a manual run of the workflow with `publish` selected, after approval.

## Research records and agent memory

- Store agent research notes, external comparisons, code-evidence inventories and
  investigation checkpoints in the agent's own built-in memory outside Git. Do not create
  committed memory files or a separate shared memory store for these records.
- Do not append sections such as "Research basis and code evidence" merely to record how
  the agent investigated a task. Keep resulting guidance, designs, decisions and essential
  rationale in repository documentation when that documentation is authorized.
- Retain supporting references where a substantive documented claim depends on them.
  Include an inspected revision or date only when needed to interpret or verify that claim;
  routine investigation stamps belong in memory.
- Keep repository documentation understandable without access to any agent's memory.
  Memory is working context, not authoritative product documentation; verify remembered
  implementation details against the source relevant to the task.
- Keep agent-only handoff notes in built-in memory and provide the necessary continuation
  context in chat. If memory is unavailable, use chat and state the limitation; do not claim
  to have saved memory or substitute committed files. Explicitly requested research
  deliverables and project plans remain governed by their authorized scope.

## Workflow

- Run the checks before considering a task complete, from the repository root: `npm test`,
  `npm run check`, `npm run build`, `npm run check:links` and `npm run test:browser`, as
  [README.md](README.md#check-a-change) describes.
- Keep facts in the pages and in the tests; do not maintain a second account of them here.

## Documentation

- `src/content/docs/` is human documentation for the users and maintainers of every area and for
  the maintainers of the home. Before changing pages or public-facing explanations, read and apply
  the Allors3 [writing guide](https://github.com/allors/allors3/blob/main/docs/src/content/docs/internals/writing-documentation.md):
  it owns the audience, Diátaxis, status, Oxford English and visual explanation rules. Each area's
  terminology page owns its names; use them as the area publishes them.
- Describe an area in its own published words and link to it for its behaviour. When an area is
  added, renamed or removed, update `site.mjs`, the index and this file in the same pull request.
- Date a verification that supports a substantive documented claim about external state, such
  as a GitHub setting or a DNS record, when readers need it to interpret or verify that claim.
  Keep routine investigation checkpoints in built-in agent memory.
- Before completing work, review the changed material for factual accuracy, agreed terminology,
  Oxford spelling and clear practitioner language, including labels and pull request text.
  Editorial review is required; no prose linter is part of the tooling.
