import { getCollection, type CollectionEntry } from 'astro:content';

/** All published posts, newest first. Drafts are visible in dev only. */
export async function getPosts(): Promise<CollectionEntry<'writing'>[]> {
  const posts = await getCollection('writing', ({ data }) => {
    return import.meta.env.DEV ? true : !data.draft;
  });

  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** Compact date for lists: `2026 · 10`. */
export function formatMonth(date: Date): string {
  const parts = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    timeZone: 'UTC',
  }).formatToParts(date);

  const year = parts.find((part) => part.type === 'year')?.value ?? '';
  const month = parts.find((part) => part.type === 'month')?.value ?? '';
  return `${year} · ${month}`;
}

/** Rough reading time in whole minutes. */
export function readingTime(body = ''): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

/** Turn a tag slug into its display label: `open-source` -> `open source`. */
export function tagLabel(tag: string): string {
  return tag.replace(/-/g, ' ');
}

export interface Topic {
  slug: string;
  label: string;
  posts: CollectionEntry<'writing'>[];
}

/** Every tag in use, with its posts, sorted alphabetically. */
export async function getTopics(): Promise<Topic[]> {
  const posts = await getPosts();
  const byTag = new Map<string, CollectionEntry<'writing'>[]>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      const tagged = byTag.get(tag) ?? [];
      tagged.push(post);
      byTag.set(tag, tagged);
    }
  }

  return [...byTag.entries()]
    .map(([slug, tagged]) => ({
      slug,
      label: tagLabel(slug),
      posts: tagged,
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
}
