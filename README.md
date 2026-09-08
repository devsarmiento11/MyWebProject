# Pangasinan Coast & Culture

**Project Title:** Pangasinan Coast & Culture — Pangasinan Heritage Digital Showcase  
**Student Name:** Kent Vincent F. Sarmiento  
**Selected Framework:** Next.js 14 (App Router)  
**Live Website:** [Pangasinan Heritage Digital Showcase](https://devsarmiento11.github.io/MyWebProject/)

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
cd "Activity/Kent Activity"
npm ci
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

1. Use the public repository: https://github.com/devsarmiento11/MyWebProject.
2. Push this entire project to the repository's `main` branch.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Open the **Actions** tab and wait for the “Deploy static Next.js site to GitHub Pages” workflow to finish.
6. Open the live Pages URL and verify every page, image, link, and responsive layout.
7. Save your Lighthouse report from the live website for submission.

## Lighthouse audit

Run Lighthouse in **Google Chrome** on the deployed GitHub Pages URL. Audit these categories:

- Performance — target **80 or higher**
- Accessibility — target **85 or higher**
- Best Practices — target **85 or higher**
- SEO — target **90 or higher**

Save a screenshot or PDF of the Lighthouse results for Google Classroom submission.



## Verified Activity 2 results

The public GitHub Pages deployment was verified on September 9, 2026. All four content pages and 26 internal links/assets loaded successfully. Mobile menu, destination navigation, and responsive widths of 375 px and 1440 px were checked.

| Lighthouse category | Mobile score | Required |
| --- | ---: | ---: |
| Performance | 98 | 80 |
| Accessibility | 100 | 85 |
| Best Practices | 100 | 85 |
| SEO | 100 | 90 |

Audit: Google Lighthouse 13.4.1 with Chrome, mobile navigation and simulated throttling, against the live website. Scores may vary between runs.

Submission evidence is in the repository-root Activity-2-Submission folder. The PDF summary is output/pdf/Activity-2-Lighthouse-Results.pdf. The original Lighthouse HTML and JSON reports are included. Google Classroom submission remains the student's final step.

The deployment workflow is located at the repository root in .github/workflows/deploy-pages.yml; it builds the application in Activity/Kent Activity and publishes its out directory.
