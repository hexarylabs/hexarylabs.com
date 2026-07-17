---
name: nextjs-security
description: Use when handling environment variables, secrets, forms/user input, Server Actions, Route Handlers, or rendering external/user-provided content. Covers env var exposure, input validation, and safe rendering in a Next.js app.
---

# Security

- Only prefix an env var with `NEXT_PUBLIC_` if that value must reach the browser. Anything with that prefix is bundled into client JS and is public — never put an API key, token, or secret behind it.
- Never import/read a server-only env var (no `NEXT_PUBLIC_` prefix) inside a file that runs in a Client Component.
- Validate and sanitize all input at the boundary where it enters the system: Server Action arguments, Route Handler request bodies, `searchParams`, and dynamic route `params`. Don't rely on client-side validation alone — it's UX, not enforcement. Use `zod` for non-trivial schemas (`npm install zod` if not already present) instead of ad-hoc checks.
- Never pass unsanitized user- or externally-supplied content to `dangerouslySetInnerHTML`. If rendering rich HTML is genuinely required, sanitize it first (e.g. with a sanitizer library) rather than trusting the source.
- Don't leak internal error detail (stack traces, DB/driver errors, file paths) in a Route Handler or Server Action response — log the detail server-side and return a generic, user-legible error.
- Treat all of `searchParams`, `params`, request headers, and cookies as untrusted input, even ones the app itself set — they can be forged by the client.
