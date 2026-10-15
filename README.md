# Steep & Spine: book cafe website template

A website template for a bookshop with a chai bar, by Whelk Works (React + Vite). Parchment and bone, dark cyan accents, Poppins throughout, and book stacks that tip over when you hover them.

- **Home** (`/`): cup-shaped hero photo with steam, chai menu, toppling book stacks, about, this week's events, visit and hours, newsletter.
- **Books** (`/books`): front-table books with filters and "Hold for pickup", trade-in section, and a book request form.
- **Events** (`/events`): upcoming poetry, live music, book club and author nights (dates count from today), "Save a seat", and a performer and booking inquiry form.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # http://localhost:4173/cafeTemplate/
```

## Make it a client's

- **Pages:** `src/pages/Home.jsx`, `Books.jsx` and `Events.jsx`. They were generated from the design mockup, so the copy and layout are inline and can be edited directly.
- **Data:** the stacks, books and events are arrays near the top of each page (inside the `Component` class).
- **Colors:** the palette is listed in `src/theme.js`. The pages use the hex values inline, so search and replace to re-skin.
- **Book stacks:** the topple animation lives in the page CSS (`.stack`, `.bk`, `@keyframes topple`). Classes `f1` to `f6` set how far each book falls, `c-*` the cloth color, `w*` and `h*` the size.
- **Photos:** `public/images/`. Keep the file names or update the paths.
- **Copy:** anything in `[brackets]` is a placeholder.

## Before launch

- **Photos:** swap in the shop's own photos, especially a real chai latte (the chai section uses a stand-in) and a live music or poetry night. The sidewalk photo is cropped so a real restaurant's sign doesn't show; keep it cropped or replace it.
- **Prices:** chai and book prices are samples.
- **Forms:** the book request, performer inquiry, holds, saved seats and newsletter are front-end only. Connect them to a form service such as Formspree before launch.
- **Deploy:** the build is set up for GitHub Pages at `/cafeTemplate/` (`BASE` in `vite.config.js`). Change it if the repo has a different name, or to `/` for a custom domain or Cloudflare Pages. A copy of `index.html` is saved as `404.html` so `/books` and `/events` load on refresh.
