# Elite Home Concepts — website

Marketing site for **Elite Home Concepts** (Furniture · Interiors · Décor), Lagos, Nigeria.
Next.js 16 App Router · React 19 · TypeScript (strict) · Tailwind CSS v4. No UI or animation libraries.

## Commands
- `npm install` · `npm run dev` · `npm run build` · `npm run typecheck`
- Node ≥ 20.9.

## Non-negotiables
1. **Speed.** Every page is statically generated. Keep the client JS tiny: only `Header`, `Reveal` and `ContactForm` are client components. Do not add Framer Motion, GSAP, Lenis, carousels or icon packs without a measured reason. Target Lighthouse mobile ≥ 95 on all four scores, LCP < 2.0 s, CLS < 0.05.
2. **Images.** Always `next/image` with static imports from `src/assets/images` (gives width/height + blur placeholder automatically). Always pass an accurate `sizes`. Only the hero / page-top image gets `priority`.
3. **Animation.** CSS keyframes in `globals.css` (`anim-rise`, `anim-settle`, `anim-unveil`, `anim-draw`, marquee) and the `<Reveal>` scroll component (one shared IntersectionObserver). Animate only `transform`, `opacity`, `clip-path`. Respect `prefers-reduced-motion` (already global). Never animate the LCP element's opacity.
4. **Content lives in `src/content/`** (`site.ts`, `collections.ts`, `services.ts`). Pages read from there. Never hard-code the phone, email or address in a page.
5. **No invented facts.** No fake testimonials, reviews, client logos, stats ("500+ homes"), awards or prices. If the client supplies them, add them; otherwise leave the section out.
6. **Brand.** Red `#C8102E` (`brand`), ink `#141414`, paper `#FAF8F5`, sand `#F0EAE2`. Display font Marcellus (headings, via `font-display`), body Jost. Red is an accent, never a large flood except buttons and the footer stripe.
7. **Accessibility.** Real links/buttons, visible focus, alt text on every image, text contrast ≥ 4.5:1, 44 px touch targets, no horizontal scroll at 360 px.

## Structure
```
src/app/            routes: / · /collections · /collections/[slug] · /interiors · /about · /contact
                    + sitemap.ts, robots.ts, manifest.ts, icon.png, opengraph-image.jpg, not-found.tsx
src/components/     Header, Footer, Reveal, ContactForm, WhatsAppFloat, sections (PageHero, CollectionCard, VisitBand, Marquee), ui (ButtonLink, Eyebrow, Container), icons
src/content/        site.ts (business details + whatsappLink()), collections.ts, services.ts
src/assets/images/  PLACEHOLDER photos — every file is labelled with what should replace it
src/assets/brand/   logo.png (transparent), logo-white.png (for dark backgrounds)
```

## Business details (source of truth: `src/content/site.ts`)
- Phone / WhatsApp: 0803 704 2832 (+234 803 704 2832)
- Email: sunkanmiomotosho@elitehomeconcepts.com
- Website: https://www.elitehomeconcepts.com
- Address: 10, Anuoluwapo Close, Agbaokun Estate, Allen Avenue, Lagos State, Nigeria

## Images
src/assets/images/ holds Unsplash stock photos chosen per slot in scripts/images.json (credits in IMAGE-CREDITS.md). `npm run images` downloads them; scripts/image-review.html compares the alternatives. Never caption or describe stock photos as Elite Home Concepts' own projects, showroom or team.

## Open items (need the client)
- Replace all 31 placeholder images in `src/assets/images/` with real photography, keeping file names and aspect ratios (covers 4:5, gallery 4:3 with `-2` as 4:5, hero 4:5, hero-detail 1:1). Export JPG ≈ 2000 px on the long side, quality ~80; Next.js serves AVIF/WebP automatically.
- Confirm the six collections, their copy and "pieces" lists, the services list and the About copy.
- Social links (Instagram etc.) — add to `site.ts` and the footer once supplied.
- Contact form sends via WhatsApp/email (no backend). If the client wants stored leads, add a Route Handler + email service.
