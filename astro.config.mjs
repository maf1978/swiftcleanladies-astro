// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

/** ISO date (YYYY-MM-DD) for sitemap lastmod */
const buildDate = new Date().toISOString().slice(0, 10);

/** Blog post publish dates (from content frontmatter) */
const blogLastmod = {
  'https://www.swiftcleanladies.com/blog/how-to-choose-house-cleaning-crawfordville/':
    '2026-07-15',
  'https://www.swiftcleanladies.com/blog/deep-cleaning-vs-recurring-cleaning/':
    '2026-07-10',
  'https://www.swiftcleanladies.com/blog/what-to-do-before-professional-cleaning-visit/':
    '2026-07-05',
};

export default defineConfig({
  site: 'https://www.swiftcleanladies.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    icon(),
    sitemap({
      filter: (page) =>
        !page.includes('/admin/') &&
        !page.includes('/api/') &&
        !page.includes('247e6cf6febe444baa90514c4a49a1ee'),
      serialize(item) {
        const lastmod = blogLastmod[item.url] || buildDate;
        return {
          ...item,
          lastmod,
        };
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
  adapter: cloudflare({
    imageService: 'compile',
  }),
});
