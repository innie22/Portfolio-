# Project Rules & Architecture Standards

> **Project:** Minimalist Personal Portfolio ("Coming Soon" & Future Portfolio)  
> **Status:** Deployed & Active  
> **Architecture:** Zero-Build Static Web Architecture (Vanilla HTML5 / CSS3 / ES6+)  
> **Last Updated:** November 2026  

---

## 1. Architectural Principles

1. **Zero-Build Overhead:**
   - The application relies on vanilla web standards (HTML5, CSS3, modern JavaScript).
   - No bundlers (Webpack, Rollup, Vite), transpilers, or frontend UI frameworks (React, Vue, Angular) are permitted unless the core scope shifts to a complex dynamic application.
   - The root directory (`/`) must always remain directly deployable to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages) without a build script.

2. **Single Responsibility & Cohesion:**
   - Every file must have a distinct, non-overlapping responsibility:
     - `index.html`: Semantic structure, content markup, metadata, and accessibility landmarks.
     - `style.css`: Visual presentation, theme tokens, typography scale, keyframe animations, and responsive queries.
     - `script.js`: Progressive enhancement, micro-interactions, event handlers, and clipboard operations.
     - `package.json`: Lightweight developer convenience scripts only (`serve`, `start`).
     - `README.md`: User-facing customization and hosting documentation.
     - `PROJECT_RULES.md`: Architecture governance, coding standards, and maintainability rules.

3. **Inviolability of Existing Deployment:**
   - Never introduce changes that break backwards compatibility with the current live deployment.
   - All proposed alterations must run flawlessly on a standard static HTTP file server without environment variables or backend dependencies.

---

## 2. File Creation & Anti-Bloat Rules

To prevent repository clutter and fragmentation:

1. **Strict File Creation Policy:**
   - **Do NOT** create auxiliary CSS files (e.g., `reset.css`, `header.css`, `animations.css`) for the landing page. All core styles must reside in `style.css` organized by comment blocks.
   - **Do NOT** split `script.js` into multiple scripts or modules unless feature complexity exceeds 500 lines or requires separate page logic.
   - **Do NOT** introduce package-manager dependencies (`npm install ...`) for utilities that standard browser Web APIs can handle natively (e.g., clipboard API, intersection observer, CSS animations).
   - If static assets (images, logos, fonts) are added in the future, they must be placed in a dedicated `/assets` directory (`/assets/images`, `/assets/fonts`, `/assets/icons`) with optimized formats (`.webp`, `.svg`).

2. **Anti-Duplication Rules:**
   - **No Duplicate Components:** Do not replicate existing navigation or footer patterns under different class names. Reuse existing BEM or semantic classes.
   - **No Dual-Hardcoded Strings:** Content strings (such as the contact email or social links) should have a single authoritative home in `index.html`. Client-side scripts should read from DOM attributes (e.g., `element.dataset` or `getAttribute('href')`) rather than hardcoding parallel string constants.
   - **No Duplicate CSS:** Never re-declare properties already covered in `:root` tokens or layout containers. Always use existing custom properties.

---

## 3. Styling & CSS Standards

1. **Design System & Token Consistency:**
   All style declarations must reference the design tokens defined in `:root` in `style.css`:
   ```css
   :root {
     --bg-cream: #FAF8F4;
     --text-charcoal: #222222;
     --text-secondary: #5A5A58;
     --text-muted: #8C8A85;
     --accent-orange: #D97952;
     --accent-orange-soft: rgba(217, 121, 82, 0.12);
     --accent-orange-glow: rgba(217, 121, 82, 0.28);
     --border-light: rgba(34, 34, 34, 0.08);
     --border-subtle: rgba(34, 34, 34, 0.12);
     --font-serif: 'Cormorant Garamond', Georgia, serif;
     --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
     --ease-editorial: cubic-bezier(0.16, 1, 0.3, 1);
     --ease-soft: cubic-bezier(0.4, 0, 0.2, 1);
   }
   ```
   - **Rule:** Never use raw hex codes (e.g., `#FAF8F4` or `#D97952`) directly in component rules; always reference `var(--...)`.

2. **CSS Organization Order:**
   Styles in `style.css` must maintain this strict linear order:
   1. Design tokens (`:root`)
   2. Reset & global baseline (`*`, `html`, `body`)
   3. Background overlays (grain, glow)
   4. Layout container (`.page-container`)
   5. Header / Navigation
   6. Main Content / Hero
   7. Status & Progress visual
   8. Footer & Links
   9. Toasts & Feedback overlays
   10. Keyframes & Animation declarations
   11. Media Queries (`@media (max-width: 768px)`, `@media (max-width: 420px)`)
   12. Accessibility overrides (`@media (prefers-reduced-motion: reduce)`)

3. **Fluid Sizing over Fixed Breakpoints:**
   - Use `clamp()` for font sizes, margins, and horizontal paddings to minimize abrupt layout shifts between viewports.
   - Use relative units (`rem`, `ch`, `%`, `vw`, `vh`) over hardcoded pixel dimensions for content containers.

4. **Accessibility & Reduced Motion:**
   - Any continuous or automated animation must be safely disabled or minimized under the `@media (prefers-reduced-motion: reduce)` block.
   - Maintain minimum contrast ratios of 4.5:1 for all readable text against `--bg-cream`.

---

## 4. JavaScript & UI Logic Standards

1. **Execution Safety:**
   - All code in `script.js` must be wrapped in `document.addEventListener('DOMContentLoaded', ...)` or run after DOM evaluation.
   - Feature check browser capabilities before invocation (e.g., `window.matchMedia`, `navigator.clipboard`).

2. **Performance & Micro-Interactions:**
   - Event listeners bound to `mousemove`, `scroll`, or `resize` must:
     - Use `{ passive: true }`.
     - Use `requestAnimationFrame` interpolation / damping rather than directly mutating styles per pixel.
   - Do not trigger layout reflows (`offsetWidth`, `getBoundingClientRect`) repeatedly inside animation loops.

3. **Defensive DOM Operations:**
   - Always verify element existence before attaching listeners (e.g., `if (emailLink && toast) { ... }`).
   - Clear existing timeouts when scheduling transient UI feedback (such as toasts) to prevent queue collisions.

---

## 5. Content Management & Future Expansion

When updating content or transitioning from the "Coming Soon" page to the full portfolio:

1. **Phase 1: Coming Soon Maintenance (Current):**
   - Editable text is strictly isolated in semantic tags in `index.html`.
   - To customize:
     - Header brand name & monogram: `<span class="brand-symbol">`, `<span class="brand-name">`
     - Main headline & description: `<h1 class="main-headline">`, `<p class="supporting-text">`
     - Social & contact links: `<a class="footer-link">`

2. **Phase 2: Transitioning to the Full Portfolio:**
   - **Do NOT delete the coming soon template blindly.** Archive or branch it first.
   - Keep the design token foundation (`:root`) intact to maintain visual brand continuity.
   - If multi-page navigation is introduced, maintain clean relative URL structures (e.g., `/about.html`, `/work.html`) or smooth single-page anchor sections (`#work`, `#about`, `#contact`).

---

## 6. Git & Version Control Guidelines

1. **Ignored Artifacts (`.gitignore`):**
   The project must ignore transient OS and tool cache files:
   - `node_modules/`
   - `.DS_Store`
   - `Thumbs.db`
   - `*.log`
   - `.env`
   - `.vscode/` or IDE-specific cache

2. **Cloud Drive Sync Awareness:**
   - When developing inside cloud-synced folders (e.g., Microsoft OneDrive), avoid concurrent git commands while OneDrive is synchronizing to prevent lockfile conflicts (`.git/index.lock`).

3. **Commit Conventions:**
   - Use conventional, semantic commit messages:
     - `feat:` for new UI elements or sections
     - `style:` for CSS, typography, or color token tweaks
     - `content:` for copy, text, or asset updates
     - `docs:` for README or project rules updates
     - `fix:` for layout or script bug fixes
