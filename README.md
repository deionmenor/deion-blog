# deion-blog

A small, text-first personal site built with [Astro](https://astro.build). It has
a home page, a Writing index with two sample essays, a Now page, an About page,
an RSS feed, and automatic light/dark themes.

Live at: https://deionmenor.github.io/deion-blog/

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321/deion-blog/
```

Build and preview the production output:

```bash
npm run build
npm run preview
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/lib/site.ts` | Your name, tagline, description, links, Now page date |
| `src/content/writing/` | One Markdown file per essay |
| `src/pages/index.astro` | Home page |
| `src/pages/writing/index.astro` | Writing index |
| `src/pages/now.astro` | Now page |
| `src/pages/about.astro` | About page |
| `src/styles/global.css` | All styling and color tokens |
| `src/layouts/Base.astro` | Shared shell, meta tags, theme toggle |
| `astro.config.mjs` | Site URL and GitHub Pages base path |

The copy on the Now and About pages is placeholder text — replace it with your
own details.

## Adding a post

Create a file in `src/content/writing/`, for example `my-new-post.md`:

```md
---
title: My new post
description: A one-sentence summary that appears in lists and search results.
date: 2026-11-02
---

Your post starts here. Use `##` for section headings.
```

The filename becomes the URL: `/writing/my-new-post/`. Add `draft: true` to a
post to keep it out of production builds while it is still visible in `npm run
dev`.

## Deploying

The workflow in `.github/workflows/deploy.yml` builds and deploys the site on
every push to `main`.

One-time setup on GitHub:

1. Open **Settings → Pages** for `deionmenor/deion-blog`.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main`, or run the workflow manually from the **Actions** tab.

### Custom domain

If you later use a custom domain, update `site` in `astro.config.mjs`, delete
the `base` line, add a `public/CNAME` file containing the domain, and update
`SITE.url` / `SITE.repo` in `src/lib/site.ts`.

## Notes

- Internal links go through the `href()` helper in `src/lib/site.ts`, which
  prefixes the GitHub Pages base path. Use it for any new internal links.
- Theme choice is stored in `localStorage`; pressing `d` toggles it.
- Typography uses system fonts, so there are no web-font requests.
- Colors are derived from [Flexoki](https://github.com/kepano/flexoki) (MIT).
