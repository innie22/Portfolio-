# Minimalist Editorial "Coming Soon" Portfolio

An elegant, modern, editorial-inspired "Coming Soon" landing page designed for a personal portfolio in Digital Marketing.

![Preview Aesthetic](https://raw.githubusercontent.com/) *(Warm cream background `#FAF8F4`, dark charcoal typography `#222222`, and muted orange accents `#D97952`)*

---

## ✨ Features

- **Editorial Aesthetic:** High-contrast typography pairing Cormorant Garamond serif with Plus Jakarta Sans.
- **Curated Color Palette:**
  - Background: Warm Cream (`#FAF8F4`)
  - Typography: Dark Charcoal (`#222222`)
  - Accent: Muted Orange (`#D97952`)
- **Subtle Animations:** Staggered entrance fades, pulsating status dot, and a continuous decorative progress indicator.
- **Micro-Interactions:** Floating email copy toast, magnetic arrow transitions, and subtle cursor ambient glow.
- **Zero Dependencies:** Pure HTML5, modern CSS3, and lightweight vanilla JavaScript. No build step or backend required.
- **100% Responsive:** Optimized for mobile phones, tablets, and wide desktop displays.

---

## 🚀 Running Locally

The local preview server is already running on **http://127.0.0.1:3000**.

To run it anytime yourself:

### Option 1: Python (Built-in)
```bash
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Node.js / npx
```bash
npx serve . -l 3000
```

---

## 🎨 Easy Customization

All files are structured cleanly for quick updates:

### 1. Change Name & Monogram
Open [`index.html`](./index.html):
- Update the monogram inside `<span class="brand-symbol">YN</span>`
- Update the brand name inside `<span class="brand-name">Yen Nhi</span>`
- Update the copyright text inside `<div class="footer-copy">`

### 2. Update Contact & Social Links
Open [`index.html`](./index.html):
- Replace `contact@yennhi.design` with your preferred email.
- Update `https://linkedin.com` with your LinkedIn profile URL.
- If you update the email in `index.html`, also update the fallback in [`script.js`](./script.js#L35).

### 3. Adjust Colors or Typography
Open [`style.css`](./style.css#L11-L24):
```css
:root {
  --bg-cream: #FAF8F4;
  --text-charcoal: #222222;
  --accent-orange: #D97952;
}
```

---

## 🌐 Free Instant Deployment

Because this project uses static HTML/CSS/JS, you can deploy it in seconds:

- **GitHub Pages:** Go to repository **Settings** &rarr; **Pages** &rarr; Select `main` branch root &rarr; Save.
- **Vercel / Netlify:** Import the GitHub repository and click **Deploy** (no build command needed).
