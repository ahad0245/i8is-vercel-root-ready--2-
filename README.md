# i8is Website — Vercel Handoff

Production-ready React/Next.js website for i8is.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verify before deployment

```bash
npm run lint
npm run build
```

## Deploy to Vercel

1. Extract this archive. `package.json` must be at the repository root—not inside another folder.
2. Import the repository at Vercel.
3. Select **Next.js** when prompted for the framework preset.
4. Keep the Root Directory blank (`./`).
5. Use `npm run build` as the build command.
6. No environment variables are currently required.
7. Deploy, then connect `i8is.com` and `www.i8is.com` in Vercel Domains.

## Important launch tasks

- Replace the current placeholder inquiry behavior with the selected CRM or email endpoint.
- Confirm all leadership details, procurement statuses and product-stage labels before public launch.
- Add approved client metrics, testimonials, photographs and product screenshots when supplied.
- Update canonical URLs only if the final production domain is not `https://i8is.com`.
- Configure redirects from matching legacy WordPress URLs before changing DNS.

## Included

- Complete responsive React/Next.js source
- Home, services, products, industries, case studies, insights, leadership, trust, procurement, careers and contact experiences
- Eight dedicated service routes
- SEO metadata, organization structured data, sitemap and robots routes
- Fonts, styling and local public assets
- Lockfile for repeatable installation

## Not included

- `node_modules`, build output and caches
- Credentials or environment files
- Internal hosting configuration
- CRM, analytics or newsletter credentials
