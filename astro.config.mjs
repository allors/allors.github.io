import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';
import sourceLinks from './integrations/source-links.mjs';
import scrollableContent from './integrations/scrollable-content.mjs';
import focusableCodeBlocks from './integrations/focusable-code-blocks.mjs';
import documentationExports from './integrations/exports.mjs';
import { site, base, repository, title, description, areas } from './site.mjs';

// The areas are absolute links: they are published at the root of the origin, not beneath the home's base.
const areaLinks = (group) => areas.filter((area) => area.group === group)
  .map((area) => ({ label: area.title, link: new URL(area.path, site).href }));

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  markdown: {
    processor: unified({ remarkPlugins: [[sourceLinks, { base }]], rehypePlugins: [scrollableContent] }),
  },
  integrations: [
    mermaid({ autoTheme: true, enableLog: false, mermaidConfig: { securityLevel: 'strict' } }),
    starlight({
      title,
      favicon: '/favicon.ico',
      description,
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/allors' }],
      editLink: { baseUrl: `${repository}/edit/main/` },
      components: { PageTitle: './src/components/PageTitle.astro' },
      customCss: ['./src/styles/documentation.css'],
      expressiveCode: { plugins: [focusableCodeBlocks()] },
      sidebar: [
        { label: 'Documentation', slug: '' },
        { label: 'Platform', items: areaLinks('Platform') },
        { label: 'Open-source tools', items: areaLinks('Open-source tools') },
        { label: 'For maintainers', items: [{ autogenerate: { directory: 'internals' } }] },
      ],
    }),
    documentationExports(),
  ],
});
