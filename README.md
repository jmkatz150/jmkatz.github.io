# Jonathan Katz Portfolio

This version is organized for easy manual editing.

## Folder structure

- `index.html` — homepage
- `contact.html` — contact page
- `Jonathan_Katz_Resume.pdf` — resume
- `projects/`
  - `2-72-lathe.html`
  - `2-008-yoyo.html`
- `css/`
  - `site.css` — styles shared by the homepage and contact page
  - `home.css` — homepage-only styles
  - `contact.css` — contact-page-only styles
  - `project-lathe.css` — 2.72 project styles
  - `project-yoyo.css` — 2.008 project styles
- `js/`
  - `main.js` — small shared mobile-navigation script
- `assets/`
  - `home-lathe.jpg`, `home-yoyo.png` — homepage thumbnails
  - `2-72/` — lathe project images
  - `2-008/` — yo-yo project images

## Common edits

### Change text
Open the relevant `.html` file and edit the text directly.

### Change an image
Replace the image file in `assets/`, or change the `src` path in the HTML.

Example:
```html
<img src="../assets/2-72/final-lathe-hero.jpg" alt="Completed precision lathe">
```

### Change colors, fonts, spacing, or layout
Edit the appropriate file in `css/`.

### Add a new project
1. Copy one of the HTML files in `projects/`.
2. Create a new image folder under `assets/`.
3. Add a new project card to `index.html`.
4. Add a new project stylesheet if the layout is substantially different.

### JavaScript
`js/main.js` currently only controls the mobile navigation menu. You do not need JavaScript for normal text, image, or layout changes.

## Running locally
Open `index.html` in a browser. All paths are relative, so no build process is required.

## Hosting
The site is static and can be hosted directly with GitHub Pages, Netlify, Cloudflare Pages, or similar services.
