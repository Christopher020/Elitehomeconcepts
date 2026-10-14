# Elite Home Concepts — website

Next.js 16 + React 19 + Tailwind CSS v4. Static, fast, no animation libraries.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

Requires Node 20.9 or newer.

- Business details: `src/content/site.ts`
- Collections and copy: `src/content/collections.ts`, `src/content/services.ts`
- Photos: `src/assets/images/` — all current images are **labelled placeholders**; replace each one with a real photo using the same file name.

Deploys to Vercel with zero config (or any Node host with `npm run build && npm start`).
See `CLAUDE.md` for the engineering rules.
