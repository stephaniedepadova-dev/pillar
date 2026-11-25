# Pillar — Building the Talent Engine

An independent, bilingual English / Italian Talent Acquisition proposal by Stephanie De Padova.

## Project boundaries
- Repository: `stephaniedepadova-dev/pillar`
- Fully separate from the personal portfolio repository.
- Does not use the personal website's source code, build pipeline or shared layout.
- The microsite is an independent candidate proposal, not an official Pillar website.

## Site architecture
- `index.html`: English primary landing page.
- `it/index.html`: Italian landing page with its own canonical URL and language metadata.
- `styles.css`: responsive design system and mobile navigation.
- `script.js`: bilingual switch, accessible mobile menu and interactive recruitment funnel.
- `robots.txt` / `sitemap.xml`: crawl directives and EN/IT sitemap.
- JSON-LD: Person, WebSite, WebPage and FAQPage structured data.
- `.github/workflows/pages.yml`: GitHub Actions deployment and JavaScript syntax validation.

## Recruitment strategy content
- Candidate SAL: established expertise, transferable skills and B2B SaaS growth area.
- Confirmed workload metrics: 10 active searches and 15–20 concurrent positions.
- Technical Talent Acquisition blueprint.
- Interactive recruitment funnel with stage-level operating signals (no fabricated conversion rates).
- Live talent mapping examples based on Pillar's public careers portal.
- Account Executive interview flow labelled as specific to that public listing.
- Proposed first-30-days roadmap.

## GitHub Pages deployment
1. Open **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. The workflow runs automatically after commits to `main`; you can also start it from **Actions → Deploy static site to GitHub Pages → Run workflow**.
4. Wait for the workflow to finish successfully. The deployment job prints the published URL.

Expected URL: https://stephaniedepadova-dev.github.io/pillar/

## SEO / GEO / AEO
- Unique EN and IT titles, descriptions, canonical URLs and hreflang alternates.
- Semantic HTML, concise answer-first FAQ content and structured data.
- Local relevance: Turin, Milan and remote opportunities in Italy.
- Sitemap and robots.txt.
- Verify indexing and Core Web Vitals after publication; structured data does not guarantee rich results or AI citations.

## Accuracy notes
- Pillar career-page counts are a dated snapshot checked on 25 November 2026 and can change.
- Candidate funnel stages and KPI signals are an operating proposal, not historical company data.
- B2B SaaS is described as a growth area, not claimed as established core recruitment experience.
