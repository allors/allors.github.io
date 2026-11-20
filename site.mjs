export const title = 'Allors';
export const description = 'The home of the Allors documentation: where the documentation of the Allors3 platform and of the supporting open-source tools Documents, Excel and Immersive is published, and how people and agents use it.';
// The home documents its own main; it has no product version. Every area carries its own label.
export const version = 'main';
export const repository = 'https://github.com/allors/allors.github.io';
export const branch = 'main';
// The root of the repository, which is the folder of this website. A link from a page to a file that is
// not a page becomes a link to that file on GitHub, by its path from this root.
export const repositoryRoot = new URL('./', import.meta.url);
// The audiences that a page can name, in the order in which the agent index lists them. The content
// schema accepts these names and no others.
export const audiences = ['Users and maintainers', 'Users', 'Maintainers'];
export const site = process.env.DOCS_SITE || 'https://docs.allors.com';
const trimmed = (process.env.DOCS_BASE || '/').split('/').filter(Boolean).join('/');
export const base = trimmed ? `/${trimmed}/` : '/';
// The documentation areas. Each is published at the root of the same origin by its own repository and
// workflow: the sidebar links to them, and the link checker leaves links into them unchecked.
export const areas = [
  { title: 'Allors3', path: '/allors3/', group: 'Platform' },
  { title: 'Documents', path: '/documents/', group: 'Open-source tools' },
  { title: 'Excel', path: '/excel/', group: 'Open-source tools' },
  { title: 'Immersive', path: '/immersive/', group: 'Open-source tools' },
];
