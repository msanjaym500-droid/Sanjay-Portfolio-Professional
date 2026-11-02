# Sanjay's Portfolio Website

Welcome to your portfolio website! This project is built with Next.js, React, TypeScript, and Tailwind CSS. It is designed to be clean, fast, accessible, and very easy to customize.

---

## What Each Folder Does

- **`src/content/site.ts`**: **The most important file.** ALL text, links, skills, project details, and dates live here. You can change any wording or links in this single file without touching code.
- **`src/app/`**: Contains the page layout, home page, 404 page, favicon, resume API route, and SEO files (sitemap, robots).
  - `layout.tsx`: Sets up fonts (Inter and JetBrains Mono), website title, meta tags, and light/dark theme.
  - `page.tsx`: Places the sections on the home page in order.
  - `globals.css`: Holds color variables and styling rules for light and dark themes.
  - `not-found.tsx`: The 404 error page if someone visits a wrong link.
  - `api/resume/route.ts`: Serves `sanjay Professional resume.pdf` for clean downloading.
- **`src/components/sections/`**: The main visible sections of the website:
  - `Navbar.tsx`: The sticky top navigation bar with theme toggle.
  - `Hero.tsx`: Your name, role line, portrait photo, action buttons, and full-page resume viewer.
  - `About.tsx`: Your background and "How I work with AI".
  - `Skills.tsx`: Your skills grouped into neat cards.
  - `Projects.tsx`: The Raja Salon project showcase card and screenshots.
  - `ExperienceEducation.tsx`: Your Python internship and college degree.
  - `Contact.tsx`: Email and LinkedIn contact links.
- **`src/components/ui/`**: Reusable design blocks (`Button`, `Card`, `Badge`, `Container`, `SectionHeading`, `ThemeToggle`, `MobileMenu`, `FadeIn`).
- **`public/`**: Stores your media files:
  - `sanjay-photo.jpg`: Your circular profile photo.
  - `sanjay Professional resume.pdf`: Your resume file for the download button.
  - `sanjay-resume-page.png`: High-resolution preview image of your resume for the viewer modal.
  - `salon-screen-1.jpg`, `salon-screen-2.jpg`, `salon-screen-3.jpg`: Cropped screenshots of the Raja Salon website.

---

## How to Change Things (Step by Step)

### 1. How to Change Any Text or Links
Open `src/content/site.ts`. You will see labeled sections:
- Change your name, bio, or role line under `personal`.
- Update your email or LinkedIn link under `personal`.
- Update your skills list under `skills`.
- Update your education or internship details under `education` or `experience`.

### 2. How to Update Your Profile Photo
1. Name your new photo `sanjay-photo.jpg`.
2. Replace the file inside the `public/` folder.
3. The website will automatically display your new photo in the clean circle.

### 3. How to Update Your Resume PDF
1. Save your new resume as `sanjay Professional resume.pdf` inside the `public/` folder.
2. Save a preview image of the resume page as `sanjay-resume-page.png` inside `public/`.

### 4. How to Update Project Screenshots
1. Save your screenshot images as `salon-screen-1.jpg`, `salon-screen-2.jpg`, or `salon-screen-3.jpg` in `public/`.
2. They will automatically appear inside the Projects section.

---

## Running the Website Locally

```bash
# Install dependencies
npm install

# Start the local development server
npm run dev

# Check for code quality
npm run lint

# Build for production (e.g. Vercel deployment)
npm run build
```
