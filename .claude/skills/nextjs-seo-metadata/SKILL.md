---
name: nextjs-seo-metadata
description: Use when creating or editing pages/layouts, adding new routes, or discussing SEO, social sharing previews, or search indexing. Covers the App Router Metadata API, sitemap/robots conventions, and structured data.
---

# SEO & Metadata

- Use the Metadata API (`export const metadata = {...}` or `export async function generateMetadata()`) per route. Never hand-write `<head>`/`<meta>` tags in the App Router.
- Root `layout.tsx` sets sitewide defaults: title template, default description, `metadataBase`, default Open Graph image. Individual pages only override what's page-specific (title, description, OG image if different).
- Every public-facing page needs: a unique `title`, a `description`, and Open Graph + Twitter card fields (title, description, image) so shared links preview correctly.
- Add `sitemap.ts` and `robots.ts` (App Router file conventions, not static XML/txt files) once the site has more than a couple of public routes. Keep the sitemap in sync with actual public routes — don't list pages that don't exist or omit new ones.
- One `<h1>` per page, semantic heading order — this is also an accessibility requirement (`nextjs-standards` §6), not just SEO.
- Add JSON-LD structured data (e.g. `Person`/`Organization` for a portfolio/profile page, `Article` for blog posts) where it plausibly helps discovery — skip it for pages where it adds no real value (e.g. a generic settings page).
