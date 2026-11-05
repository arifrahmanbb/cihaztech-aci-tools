# ACI Motors – Product Catalogue

A production-ready, single-page product catalogue for **ACI Smart Tools** built with React + Vite + Tailwind CSS.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## 📦 Build

```bash
npm run build      # Production build → /dist
npm run preview    # Preview the production build locally
```

## 🌐 Deploy to Vercel

### Option A – Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

### Option B – Vercel Dashboard

1. Push this repository to GitHub / GitLab / Bitbucket
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel auto-detects the Vite framework — click **Deploy**

The `vercel.json` in the project root is already configured.

## 🗂️ Project Structure

```
src/
  components/
    Header.jsx          Fixed header with logo + category navigation
    CategorySection.jsx One vertical section per category
    ProductGrid.jsx     Responsive product grid (2–5 columns)
    ProductCard.jsx     Minimal card: image + name
    SeeMoreButton.jsx   See More / Show Less toggle
    Footer.jsx          Minimal footer
  data/
    products.js         All categories and products (source: acimotors-bd.com)
  App.jsx
  main.jsx
  index.css
```

## ✅ Features

- **Single Page** — All 9 categories on one page
- **See More / Show Less** — Independently expandable per category (shows 3 initially)
- **Mobile First** — 2 → 3 → 4 → 5 column grid
- **Category Navigation** — Click to smooth-scroll; mobile drawer
- **Image Fallback** — Graceful placeholder if image fails to load
- **Lazy Loading** — All below-fold images load on demand
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation, focus rings
- **Fast** — < 200 kB JS, < 20 kB CSS

## 📊 Categories

| # | Category | Products |
|---|----------|----------|
| 01 | Power Tools | 18 |
| 02 | Hand Tools | 66 |
| 03 | ACI Weight Scale | 12 |
| 04 | ACI Air Compressor | 13 |
| 05 | Vibrator Motor & Nozzle | 4 |
| 06 | High Pressure Washer | 3 |
| 07 | Hand Sprayer | 2 |
| 08 | Cutting Disc | 5 |
| 09 | Bearing | 77 |

**Total: 200 products across 9 categories**

## 🔗 Data Source

All product names, images, and categories come directly from the official ACI Motors website:  
https://acimotors-bd.com/products/other-machinery/aci-smart-tools
