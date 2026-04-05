# Advanced Technical SEO Implementation Plan - Negi Clothing

This plan outlines the steps to fully optimize the Negi Clothing website for search engines, focusing on technical structure, performance, and accessibility while maintaining the existing UI/UX.

## User Review Required

> [!IMPORTANT]
> - I will be adding a new `SEO` component to centralize metadata management and reduce code duplication.
> - I will be creating a custom `404` page and a new `FAQ` section on the homepage as requested.
> - I will perform image optimization (WebP conversion and compression) using `sharp`.

## Proposed Changes

### 1. Centralized SEO Management
Create a reusable `SEO` component using `react-helmet-async` to handle titles, descriptions, canonicals, and OG/Twitter tags consistently.
- [NEW] [SEO.jsx](file:///C:/Users/negip/.gemini/antigravity/scratch/clothing-brand-site/src/components/ui/SEO.jsx)
- **Brand Identity**: Use the stylized 'N' logo for `og:image` and `apple-touch-icon`.

### 2. Metadata & Meta Tags
Update all pages to use the new `SEO` component with unique, optimized content and self-referencing canonical tags.
- [MODIFY] [Home.jsx](file:///C:/Users/negip/.gemini/antigravity/scratch/clothing-brand-site/src/pages/Home.jsx) (Title: Premium Streetwear Brand India | Negi Clothing)
- [MODIFY] [About.jsx](file:///C:/Users/negip/.gemini/antigravity/scratch/clothing-brand-site/src/pages/About.jsx)
- [MODIFY] [Shop.jsx](file:///C:/Users/negip/.gemini/antigravity/scratch/clothing-brand-site/src/pages/Shop.jsx)
- [MODIFY] [Blog.jsx](file:///C:/Users/negip/.gemini/antigravity/scratch/clothing-brand-site/src/pages/Blog.jsx)
- [MODIFY] [ProductDetail.jsx](file:///C:/Users/negip/.gemini/antigravity/scratch/clothing-brand-site/src/pages/ProductDetail.jsx)
- [MODIFY] [Contact.jsx](file:///C:/Users/negip/.gemini/antigravity/scratch/clothing-brand-site/src/pages/Contact.jsx)

### 3. Structured Data (JSON-LD)
Implement/Enhance:
- **Organization**: Refine on Homepage using the 'N' logo URL.
- **Product**: Refine on ProductDetail.
- **FAQ**: Add to Homepage.
- **Breadcrumb**: Add to all sub-pages.
- [MODIFY] [Home.jsx](file:///C:/Users/negip/.gemini/antigravity/scratch/clothing-brand-site/src/pages/Home.jsx)
- [MODIFY] [ProductDetail.jsx](file:///C:/Users/negip/.gemini/antigravity/scratch/clothing-brand-site/src/pages/ProductDetail.jsx)

### 4. Performance & Images
- **Image Optimization**: Run an optimization script to ensure all images are WebP and <200KB.
- **Lazy Loading**: Ensure all non-hero images have `loading="lazy"`.
- **Favicon**: Update `index.html` with proper favicon/manifest links using the 'N' logo.
- [MODIFY] [index.html](file:///C:/Users/negip/.gemini/antigravity/scratch/clothing-brand-site/index.html)

### 5. Content & Structure
- **Homepage FAQ**: Add a section with questions: *"What makes your streetwear premium?"*, *"Do you ship across India?"*, and *"Are your materials sustainable?"*.
- **Heading Hierarchy**: Audit and fix `<h1>`-`<h4>` sequences.
- **Homepage Keyword**: Naturally integrate "premium streetwear brand" into the body text.
- [MODIFY] [Home.jsx](file:///C:/Users/negip/.gemini/antigravity/scratch/clothing-brand-site/src/pages/Home.jsx)

### 6. Technical Enhancements
- **Custom 404 Page**: Create a branded 404 page featuring the 'N' logo.
- **Sitemap & Robots**: Update `sitemap.xml` with all routes.
- [NEW] [NotFound.jsx](file:///C:/Users/negip/.gemini/antigravity/scratch/clothing-brand-site/src/pages/NotFound.jsx)
- [MODIFY] [App.jsx](file:///C:/Users/negip/.gemini/antigravity/scratch/clothing-brand-site/src/App.jsx) (Register 404 route)
- [MODIFY] [sitemap.xml](file:///C:/Users/negip/.gemini/antigravity/scratch/clothing-brand-site/public/sitemap.xml)

## Finalized Details

- **Social Media**: Metadata will skip profile-specific tags (like `twitter:site`) and focus on general performance and branding (using the 'N' logo).
- **FAQ Section**: Will be integrated directly into the homepage to maximize internal linking and context for search engines.

## Verification Plan

### Automated Tests
- Run `npm run build` to verify minification and code splitting.
- Use a local script to check for missing Alt tags and meta descriptions.

### Manual Verification
- Use Browser DevTools (Lighthouse) to check SEO and Performance scores.
- Test the 404 route manually.
- Validate Schema.org JSON-LD via Browser.
