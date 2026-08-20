# Authentic Grain — Product Story Pages

Two static, image-led pages customers land on after scanning the QR code
printed on the rice packet. Built to be looked at, not read — four
full-screen visual panels per product, snap-scroll between them, almost no
reading required. No "certificate" language anywhere — the trust signal is
the seal and the message, not a form.

## Pages

- `hyderabadi-nawab.html` — royal, culinary, sensory (brown / saffron / copper)
- `indrayani.html` — earthy, aromatic, morning light (gold / olive)

Each page has exactly **4 panels**:

1. **Hero** — product name in large bold white type, the single-line sensory
   hook ("Soaks up saffron, smoke, and slow-cooked meat." / "Heavenly aroma.
   Honest grain."), and the authenticity seal
2. **Trust** — the "why this rice looks the way it does" message (unpolished,
   not milk-white, keeps its bran), a bigger seal, quick-fact chips, and an
   origin/batch strip
3. **Field & Sensory** — one full-bleed farm photo paired with a short,
   punchy line that ties the origin story straight to the eating/cooking
   experience
4. **Closing** — a memorable closing line, a cooking-guide button, and a
   cross-link to the other product

Panels use CSS `scroll-snap`, so on a phone it feels like flipping through a
small set of posters rather than scrolling a long page. Indrayani's hero and
field panels carry a soft, slow-drifting particle effect to suggest aroma
rising — subtle, and off automatically for anyone with reduced-motion
preferences turned on.

## Before you publish — replace these placeholders

Search both HTML files for square brackets and fill in real, verified values.
Do not invent numbers — leave a placeholder rather than guess:

- `[BRAND NAME]` — appears in the top bar and the closing panel on both pages
- `[Region]` — where the rice is actually grown
- `[Season / Year]` — actual harvest period
- `[Batch ID]` — the real batch/lot number for that packet run
- `[Date]` — actual pack date
- The "Cooking Guide" button currently points at `#main` (placeholder) —
  point it at a real recipe/cooking page once you have one

## File structure

```
new_rice_certificate/
├── hyderabadi-nawab.html
├── indrayani.html
├── style.css
├── script.js
├── assets/
│   └── images/
│       ├── hyderabadi-biryani-hero.jpg   (Hyderabadi Nawab only)
│       ├── rice-grain-macro.jpg          (shared, different crop per page)
│       ├── rice-sack-field.jpg           (shared, different crop per page)
│       ├── rice-panicle.jpg              (Indrayani only)
│       └── farmer-rice-field.jpg         (shared, different crop per page)
└── README.md
```

No build step, no framework, no backend — plain HTML/CSS/JS, so it can be
committed straight into a GitHub repo and served with GitHub Pages.

## Publishing to GitHub Pages

GitHub Pages serves any static file, including images on their own — you
could point a QR code straight at an image URL and it would just open that
photo full-screen. That works, but it throws away the name, the seal, and
the message. Pointing the QR at the actual page (below) keeps all of that.

1. Create a new GitHub repo (e.g. `rice-story`) and push this folder's
   contents to it.
2. In the repo settings → **Pages**, set the source to the `main` branch,
   root folder.
3. Your two live URLs will be:
   - `https://<username>.github.io/<repo>/hyderabadi-nawab.html`
   - `https://<username>.github.io/<repo>/indrayani.html`
4. Generate a QR code for each URL (any free QR generator works) and print
   one on each product's packaging.

## Design notes

- Product names use a bold serif (Fraunces) in large white type — the
  single most dominant element on the hero screen.
- The seal is a live SVG (not an image) so it stays sharp at any size and
  costs nothing to load. It carries only brand-mark language ("Authentic
  Grain", "Verified", "Unpolished") — swap the ring text for a real
  certification only if you actually hold one.
- The core trust message on both pages is the same idea in different words:
  unpolished, not milk-white, rice keeps its bran and its nutrients/aroma —
  matching the actual product truth you described, not a generic "organic"
  claim.
- Motion is minimal and respects `prefers-reduced-motion`.
