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
  private, unpublished Allors projects in any page, export, index, configuration or commit of
  this repository.

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
- Date a verification that depends on an external state, such as a GitHub setting or a DNS
  record, and say what was checked.
- Before completing work, review the changed material for factual accuracy, agreed terminology,
  Oxford spelling and clear practitioner language, including labels and pull request text.
  Editorial review is required; no prose linter is part of the tooling.
