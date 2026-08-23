# Pangasinan Coast & Culture

**Project Title:** Pangasinan Coast & Culture — Pangasinan Heritage Digital Showcase  
**Student Name:** [Kent Vincent F. Sarmiento ]  
**Selected Framework:** Next.js 14 (App Router)  
**Live Website:** [GITHUB PAGES URL HERE]

## Activity 2

This project is the Activity 2 continuation of the Activity 1 prototype. It uses Static Site Generation / static export and keeps the Atomic Design component structure while preparing the site for GitHub Pages deployment.

### Featured destinations

- Manaoag Church — Manaoag, Pangasinan
- Pangasinan Provincial Capitol — Lingayen, Pangasinan
- Umbrella Rock — Agno, Pangasinan

## Requirements implemented

- Static pages generated with Next.js 14 `output: 'export'`
- Atomic Design structure preserved (`atoms`, `molecules`, `organisms`)
- Mobile-first responsive layout
- Local responsive WebP images to reduce data use
- Semantic HTML, alt text, skip link, keyboard focus styles, and reduced-motion support
- GitHub Pages base-path support so links and images work in a project repository
- Automatic deployment workflow in `.github/workflows/deploy-pages.yml`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Test the static production build

```bash
npm run build
npm run preview
```

Open `http://localhost:3000`.

## Deploy to GitHub Pages

1. Create a **public** GitHub repository.
2. Push this entire project to the repository's `main` branch.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Open the **Actions** tab and wait for the “Deploy static Next.js site to GitHub Pages” workflow to finish.
6. Open the live Pages URL and verify every page, image, link, and responsive layout.
7. Replace `[GITHUB PAGES URL HERE]` above with the actual live URL and push the README update.

## Lighthouse audit

Run Lighthouse in **Google Chrome** on the deployed GitHub Pages URL. Audit these categories:

- Performance — target **80 or higher**
- Accessibility — target **85 or higher**
- Best Practices — target **85 or higher**
- SEO — target **90 or higher**

Save a screenshot or PDF of the Lighthouse results for Google Classroom submission.
