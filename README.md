# Mbuni African Safaris — Next.js 16 + Tailwind CSS v4

Built with **Next.js 16.2.6 (App Router)** + **Tailwind CSS v4**.

## Stack

- **Next.js 16.2.6** (App Router, TypeScript)
- **Turbopack** (default bundler in Next.js 16 — no config needed, 2–5× faster builds)
- **React 19.2**
- **Tailwind CSS v4** (CSS-first config via `@theme` in `globals.css`)
- **Framer Motion v12** (page transitions via `app/template.tsx`)
- **Lucide React** (icons)
- **next/image** (optimized images)
- **next/link** (client-side navigation)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding Your Logo Images

Copy your logo files into `/public/`:
- `tempImageXWqb72.png` (footer logo)
- `tempImagepvR8zg-removebg-preview.png` (nav logo)

## Project Structure

```
app/
  layout.tsx         # Root layout (Navigation + Footer)
  template.tsx       # Page transition wrapper (re-mounts on navigation)
  globals.css        # Tailwind v4 @theme config + global styles
  page.tsx           # Home
  about/page.tsx
  services/page.tsx
  contact/page.tsx
components/
  Navigation.tsx     # "use client" — uses usePathname + framer-motion
  Hero.tsx           # "use client" — uses framer-motion
  Services.tsx       # "use client" — uses framer-motion
  ContactForm.tsx    # "use client" — interactive form
  Footer.tsx         # Server component
public/
  (logo images)
```

## Next.js 16 Highlights Used

| Feature | Detail |
|---------|--------|
| **Turbopack (stable)** | Default bundler, up to 5-10x faster Fast Refresh |
| **App Router** | File-based routing, Server Components by default |
| **React 19.2** | Latest React with improved hydration |
| **`template.tsx`** | Re-mounts on every navigation for page transitions |

## Migrated From

Originally a Vite + React + Tailwind v3 project.

| Old | New |
|-----|-----|
| `react-router-dom` | `next/link` + `usePathname` |
| `<img>` | `next/image` (auto-optimized) |
| Vite config | `next.config.ts` |
| `tailwind.config.js` | `@theme {}` in `globals.css` |
| `src/pages/` (Vite) | `app/` (Next.js App Router) |
| postcss.config.js | `postcss.config.mjs` with `@tailwindcss/postcss` |
