---
name: nextjs-rendering-data
description: Use when creating or editing App Router pages/layouts, route handlers, server actions, or any data fetching. Governs Server vs Client Component boundaries, caching/revalidation, mutations, and route file conventions (loading/error/not-found).
---

# Rendering & Data Fetching

## Server vs Client Components

- Server Components by default. Add `"use client"` only at the leaf component that actually needs interactivity, browser APIs, or hooks — not at the top of a subtree that mostly renders static content.
- A `"use client"` boundary pulls its entire subtree into the client bundle. If only a small part of a component needs it (e.g. one button), extract that part into its own client component and keep the rest server-rendered.

## Data fetching

- Fetch data in Server Components or Route Handlers. Don't fetch in a `useEffect` on mount unless the data genuinely depends on client-only state (e.g. user interaction after load).
- `fetch()` in a Server Component is cached by default in Next.js. Opt out (`cache: "no-store"`) or set `revalidate` deliberately — don't disable caching everywhere out of habit, and don't leave stale data cached by accident.
- Run independent fetches in parallel (`Promise.all`), not sequential `await`s — sequential awaits create request waterfalls.

## Mutations

- Prefer Server Actions for form submissions and mutations triggered from this app's own UI. Reach for a Route Handler only when an external client (not this app) needs to call the endpoint, or the semantics genuinely need a REST/HTTP contract.
- Validate all input to a Server Action or Route Handler at the boundary — treat `FormData`, request bodies, `params`, and `searchParams` as untrusted (see `nextjs-security`). Use `zod` to define the schema instead of hand-rolled if-checks once validation is more than 1-2 fields (`npm install zod` if not already in `package.json`).

## Route file conventions

- `loading.tsx` — Suspense fallback for the segment, colocated with the route.
- `error.tsx` — client-component error boundary for the segment; show a user-legible message, don't leak raw errors.
- `not-found.tsx` — for explicit 404s (call `notFound()` from a Server Component to trigger it).
- Don't build ad-hoc loading/error handling inside a page when the file convention already covers it.
