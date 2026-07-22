# Hexary Labs

Marketing site built with Next.js (App Router), TypeScript, and Tailwind CSS. See
`docs/design-spec.md` for the design system and content decisions.

## Local setup

```bash
npm install
cp .env.example .env.local   # fill in real values, see below
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Node `>=20` is required (`.nvmrc` pins `22`, matching Vercel's default).

## Environment variables

See `.env.example` for the full list with descriptions. Summary:

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Before launch | Canonical origin for metadata, sitemap, and robots.txt |
| `RESEND_API_KEY` | For the contact form to send email | API key from [resend.com](https://resend.com/api-keys) |
| `CONTACT_FROM_EMAIL` | Before launch | Sender address; must be on a domain verified in Resend |
| `CONTACT_TO_EMAIL` | Optional | Inbox that receives inquiries; falls back to `site.email` |

All have working placeholder/sandbox fallbacks in code, so the app runs without a `.env.local`
in development — but without `RESEND_API_KEY`, submitting the contact form returns a friendly
"email us directly" error instead of actually sending.

## Deploying to Vercel

1. Import the repository into Vercel (framework preset: Next.js, no build config needed).
2. Set `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, and `CONTACT_FROM_EMAIL` as Environment Variables
   in the Vercel project settings, scoped to Production (and Preview if you want previews to send
   real email).
3. Deploy. `npm run build` / `next start` are wired as the standard scripts.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run start` — run the production build locally
- `npm run lint` — ESLint
