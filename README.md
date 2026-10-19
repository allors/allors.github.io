# Allors documentation home

The website at the root of `https://docs.allors.com`: the home of the documentation of the Allors3
platform and of the supporting open-source tools Documents, Excel and Immersive. Each of those
publishes its own documentation beneath the same address from its own repository; this
repository holds the home only. Start with the [documentation index](src/content/docs/index.md);
the [documentation home record](src/content/docs/internals/documentation-home.md) explains how
the website is built and published and why the repository keeps the name of the organisation
site.

The website uses Astro and Starlight. Human pages live in [`src/content/docs/`](src/content/docs/index.md).
It documents `main`; the home has no product version, and each area carries its own version
label.

## Run locally

Use Node.js 24 and npm. From the repository root:

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro. Development mode provides a fast preview; use a production
build to check search and generated exports:

```sh
npm run build
npm run preview
```

The build clears Astro's content cache so changes to the local Markdown transformations are
applied to every page.

## Edit a page

Apply the Allors3 [writing guide](https://github.com/allors/allors3/blob/main/docs/src/content/docs/internals/writing-documentation.md)
before editing: audience, Diátaxis, status, Oxford English and visual explanation. Keep Markdown
as the default; use MDX when a page needs a component, with the component implementation separate
from the prose. Describe an area in its own published words, and link to the area for its
behaviour; the home does not restate it.

Every page has frontmatter with `title`, `description`, `audience`, `kind` and `status`. Keep its
opening status line consistent with that metadata. Starlight renders the title, so page content
starts with the status line, followed by second-level headings. Update navigation in
`astro.config.mjs` when adding a page; the areas are listed in `site.mjs`.

Use relative Markdown links between source pages so they remain useful in the checkout. The build
converts them to website URLs. Repository links outside the documentation are converted to GitHub
links, and the build checks their heading anchors against the checkout. Link to an area with a
root-relative path such as `/allors3/`: the areas are published at the root of the origin, not
beneath the home's base path.

Use Mermaid code fences for diagrams where the notation fits. Diagrams render in the browser; a
successful site build alone does not validate their rendering. Keep the explanation of arrows and
notation in the page, and provide accessible labels as described in the writing guide.

## Check a change

Run these commands from the repository root:

```sh
npm test
npm run check
npm run build
npm run check:links
npx playwright install chromium
npm run test:browser
```

The browser checks use the production preview and cover navigation, the links to the areas,
search, the diagram, focusable code blocks and accessibility at desktop and narrow widths. On
Linux, use `npx playwright install --with-deps chromium` to install system dependencies as well.
Review prose and representative rendered pages too; automated checks do not establish that an
explanation is accurate or clear.

The default deployment origin is `https://docs.allors.com`, with `/` as the base path.
`DOCS_SITE` changes the origin and `DOCS_BASE` changes the base path. Use the same settings for
build, link checking and preview. The link check leaves links into the areas to the areas' own
builds and reports how many it left.

In Git Bash on Windows, MSYS rewrites the value `/` into a Windows path before Node sees it, so
a root-path build silently uses a wrong base. Set `MSYS_NO_PATHCONV=1` for those commands, or run
them from PowerShell with `$env:DOCS_BASE = '/'`.

## Review exports

The build generates Markdown exports and `llms.txt` from rendered page content and the same
metadata used by the website. Titles, audience, kind, status and version context belong to that
source; do not maintain a separate explanation for agents. `llms.txt` is an agent discovery
proposal. Agents working in a checkout should use its documentation.

Each page is exported at `<slug>.md` under the deployment base path; the documentation index is
`index.md`, which carries the links to the Markdown indexes and agent indexes of the areas. These
files and `llms.txt` are generated during production builds.

Mermaid source is retained in Markdown exports. A custom interactive component must mark its
wrapper with `data-documentation-interactive` and render a useful static explanation that
preserves its meaning. `<details>` explanations are retained in exports. Give SVG drawings a
title and description, or a figure caption. Use `data-documentation-export-ignore` only for
interface controls that add no meaning to the explanation. Inspect the relevant exported Markdown
after changing a diagram or component.

## Publish

The [documentation workflow](.github/workflows/documentation.yml) validates the website, without
publishing it, for pull requests to `main` and for pushes to `main` and to `docs/` branches.

The website is published at `https://docs.allors.com/` from the repository's Pages source
**GitHub Actions** and its `github-pages` environment, which deploys from `main`; the repository
is public, as GitHub's Free plan requires for Pages. To publish, run the **Documentation**
workflow manually on `main` with **publish** selected. The validation job must pass before the
workflow deploys. The default manual run leaves **publish** unselected and only validates. The
custom domain and the DNS record are configured outside the workflow; the
[documentation home record](src/content/docs/internals/documentation-home.md#publication) lists
the steps that were taken, in order.

The workflow follows GitHub's
[custom Pages workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
model. Changing the workflow does not configure repository hosting or publish the site.
