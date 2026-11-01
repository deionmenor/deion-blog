/**
 * Site-wide settings. Edit this file to change your name, tagline,
 * description, and links — every page reads from here.
 */
export const SITE = {
  name: 'Deion Menor',
  tagline: 'Writing about software, systems, and the ideas that stick.',
  description:
    'Essays and notes by Deion Menor on software, systems, and the craft of building things.',
  url: 'https://deionmenor.github.io',
  repo: 'https://github.com/deionmenor/deion-blog',
  github: 'https://github.com/deionmenor',
  // Add more links here; they appear on the About page.
  links: [
    { label: 'GitHub', href: 'https://github.com/deionmenor' },
    { label: 'RSS', href: '/rss.xml' },
  ],
  nowUpdated: '2026-11-01',
} as const;

/** The configured base path without a trailing slash ('' at the site root). */
export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an internal path with the configured base path. */
export function href(path = '/'): string {
  if (/^(https?:|mailto:|#)/.test(path)) return path;
  return `${BASE}/${path.replace(/^\//, '')}`;
}

/** Absolute URL for a path on this site. */
export function absoluteUrl(path = '/'): string {
  return new URL(href(path), SITE.url).href;
}
