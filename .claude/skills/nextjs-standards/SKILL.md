---
name: nextjs-standards
description: Use for ANY code change in this Next.js project — creating or editing components/pages, styling, refactoring, adding features, or fixing bugs. Enforces this project's engineering standards for responsiveness, component reuse, TypeScript strictness, accessibility, and code hygiene. Load before writing or modifying any file under src/.
---

# Project Engineering Standards

Senior-engineer rules for this codebase. These are constraints, not suggestions — if a change violates one, stop and fix the approach before continuing.

## 0. Before writing any code

- Read the existing code in the area you're touching, plus `src/components/`, `src/lib/`, and `src/app/globals.css` for tokens. Never guess at conventions that already exist in the repo.
- Search for an existing component/hook/util that already does this before creating a new one. Grep by function, not just by name — a differently-named helper doing the same thing still counts as a duplicate.
- If a bug is reported, trace it to the root cause (check all callers of the function involved) before patching. A fix in one call site that leaves siblings broken is not done.

## 1. Project structure

```
src/
  app/            routes, layouts, pages — composition only, minimal logic
  components/     reusable UI, one component per file
    ui/           generic/primitive components (Button, Card, Input...)
    <feature>/     feature-specific components
  lib/            framework-agnostic helpers, data fetching, API clients
  hooks/          custom React hooks
  types/          shared TypeScript types/interfaces
```

- Naming: `PascalCase` for components and their files (`ProductCard.tsx`), `camelCase` for functions/hooks/utils (`useCart.ts`, `formatPrice.ts`), `kebab-case` for route segments (Next.js default).
- One default export per component file, named the same as the file.
- A file that exceeds ~150-200 lines or a function that exceeds ~40 lines is a signal to split it — extract a subcomponent or helper, don't just add to it.

## 2. Components

- If the same JSX/markup pattern appears twice, extract it into a component. Never copy-paste a block and tweak it.
- Compose small components instead of adding boolean props that branch internal JSX (`isCompact`, `variant`, `showX`...). Prefer composition/children over prop-driven branching once a component grows more than 2-3 conditional layout paths.
- Keep components focused: data-fetching/state logic separate from presentation where practical. A component that fetches, transforms, and renders is fine for small cases — split when it becomes hard to test or reuse.
- Reuse existing primitives (buttons, inputs, cards, layout wrappers) before creating new ones. If an existing component almost fits, extend it with a prop — don't fork it.

## 3. TypeScript

- No `any`. Use `unknown` + narrowing, generics, or a proper type/interface instead. If `any` feels unavoidable, that's a sign the design needs a type, not an escape hatch.
- Type all component props explicitly with an interface (`ProductCardProps`), not inline unless trivial (1-2 primitive props).
- Prefer `interface` for object/props shapes, `type` for unions/aliases.
- No non-null assertions (`!`) to silence errors — handle the `null`/`undefined` case instead.
- Shared types go in `src/types/`; don't redefine the same shape in multiple files.

## 4. Responsive design

- Every UI change must work at mobile, tablet, laptop, and large-desktop widths. Build mobile-first, add `sm:` / `md:` / `lg:` / `xl:` Tailwind breakpoints as layout needs change — don't design desktop-first and patch mobile in afterward.
- No fixed pixel widths/heights on layout containers that break on small screens. Use relative units, `flex`/`grid`, `max-w-*`, and `min-w-0` where overflow is possible.
- Never let text, tables, code blocks, or wide content overflow horizontally — wrap in `overflow-x-auto` or reflow the layout at small widths.
- Verify touch targets are usable on mobile (adequate padding/tap area, not just desktop hover states).

## 5. Design tokens & consistency

- Colors, spacing, typography, and radii come from the design tokens defined in `src/app/globals.css` (`@theme inline` block) and Tailwind's scale — never hardcode a one-off hex color, arbitrary pixel value, or font size when a token/scale value already covers it.
- If a new token is genuinely needed (a new brand color, a new spacing step), add it to the `@theme` block once, in one place — don't scatter magic values across components.
- Match the approved reference design's colors, spacing rhythm, and type scale. If a component's styling doesn't match the rest of the app, that's a bug, not a stylistic choice.

## 6. Accessibility

- Use semantic HTML first: `<button>` for actions, `<a>`/`next/link` for navigation, `<nav>`, `<main>`, `<header>`, `<footer>`, heading levels in order. Don't reach for `<div onClick>` when a native element does the job.
- All interactive elements must be keyboard-reachable and show focus state. Images need meaningful `alt` (or `alt=""` if decorative). Form inputs need associated `<label>`.
- Add ARIA attributes only when semantic HTML can't express the state (e.g. `aria-expanded` on a custom disclosure) — not by default on every element.

## 7. State handling

- Any component that fetches or derives async data must explicitly handle: loading, empty (zero results), error, and success states. Don't leave a state un-handled because "it probably won't happen."
- Error states should be user-legible, not a raw thrown error or blank screen.

## 8. Code hygiene

- No unused imports, variables, or dead code paths — delete them, don't comment them out.
- No leftover temporary/debug files, console.logs, or commented-out old implementations left in the diff.
- No comments that restate the code (`// increment count`). Add a comment only when the *why* isn't obvious from the code itself — a non-obvious constraint, a workaround for a specific bug, a tricky invariant.
- When refactoring, preserve existing behavior exactly unless the task explicitly asks to change it. Refactor and feature changes shouldn't be mixed in the same edit if avoidable.

## 9. Dependencies

- Don't add a package for something a few lines of code, a native browser/CSS feature, or an already-installed dependency already solves.
- Before adding any dependency, check `package.json` for something already installed that covers the need.

## 10. Definition of done (run before calling anything complete)

1. `npm run lint` — no new errors/warnings.
2. `npx tsc --noEmit` (or the project's typecheck script) — no type errors.
3. `npm run build` — production build succeeds.
4. Manually verify the changed flow works, and check it at mobile/tablet/laptop/desktop widths.
5. Confirm existing functionality nearby wasn't broken by the change.

Skipping any of these because "it's a small change" is not acceptable for non-trivial edits (anything beyond a one-line tweak).
