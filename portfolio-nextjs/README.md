# Next.js Portfolio Site

## Implementation Summary

This project is a modern portfolio website built with Next.js and Tailwind CSS, designed to showcase Mikkel Hvedegaard's work as an IT Architecture student, along with personal interests like book recommendations and kombucha brewing.

### Implemented Features

#### 1. Core Structure and Components
- **Modern Navigation Component**: Responsive navigation with mobile support using a hamburger menu
- **Footer Component**: Consistent site-wide navigation and copyright information
- **Layout System**: Proper Next.js App Router implementation with metadata for SEO

#### 2. Main Pages
- **Home Page**: Hero section with introduction, featuring book recommendations, projects, and contact sections
- **About Page**: Personal story, education, philosophy, and interests
- **Projects Page**: Grid layout with filtering capability for technical, academic, and personal projects
- **Contact Page**: Interactive form with social media links and LinkedIn badge

#### 3. Project Details Pages
- Sample project page for Kombucha brewing with detailed content structure
- Pattern established for future project detail pages

#### 4. Enhanced Typography and Styling
- Tailwind CSS with custom color scheme
- Integrated @tailwindcss/typography plugin for rich text content
- Mobile-first responsive design throughout

#### 5. Image Optimization
- Next.js Image component implementation for performance optimization
- Remote image handling configuration for external resources (like Amazon book covers)
- Proper directory structure for project images

#### 6. Vercel Deployment Configuration
- Optimized Next.js configuration
- Vercel.json file with deployment settings

## Next Steps

### 1. Content Migration
- [ ] Copy existing project images from `projects/pictures/*` to `portfolio-nextjs/public/projects/pictures/*`
- [ ] Create additional project detail pages following the pattern established in `projects/kombucha/page.js`
- [ ] Migrate book recommendation content to individual book pages
- [ ] Add any missing pages from your original site structure

### 2. Content Enhancement
- [ ] Replace placeholder images with actual project screenshots/photos
- [ ] Add more detailed content to project pages
- [ ] Implement proper form submission functionality on the Contact page
- [ ] Consider adding a dark/light mode toggle

### 3. Development and Testing
- [ ] Test responsive design across various device sizes
- [ ] Check accessibility compliance (keyboard navigation, screen reader support, etc.)
- [ ] Optimize for performance (Lighthouse scores)
- [ ] Test form submission

### 4. Deployment
- [ ] Connect GitHub repository to Vercel
- [ ] Deploy site to Vercel
- [ ] Set up custom domain (if available)
- [ ] Configure analytics

## Running Locally

To run this project locally:

1. **Install dependencies**:
   ```bash
   cd portfolio-nextjs
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **View the site**:
   Open your browser and navigate to http://localhost:3000

4. **Making changes**:
   - Edit files in the `src` directory
   - Changes will automatically refresh in the browser
   - Add static assets to the `public` directory

## Build for Production

To build the site for production:

```bash
npm run build
```

This will generate an optimized production build in the `.next` directory.

To preview the production build locally:

```bash
npm run start
```

## Deployment to Vercel

The project is configured for seamless deployment to Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in Vercel dashboard
3. Configure build settings (should be auto-detected)
4. Deploy!

Vercel will automatically build and deploy your site, providing a unique URL. You can then connect a custom domain if desired.

## Project Structure

```
portfolio-nextjs/
├── public/                # Static assets
│   ├── projects/          # Project images
│   │   └── pictures/      
│       ├── Academic/      # Academic project assets
│       └── kombucha/      # Personal project assets
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/         # About page
│   │   ├── books/         # Books page
│   │   ├── contact/       # Contact page
│   │   ├── projects/      # Projects pages
│   │   │   └── kombucha/  # Project detail page example
│   │   ├── favicon.ico    # Site favicon
│   │   ├── globals.css    # Global styles
│   │   ├── layout.js      # Root layout component
│   │   └── page.js        # Home page
│   └── components/        # Reusable components
│       ├── Footer.js      # Site footer
│       └── Navigation.js  # Site navigation
├── .gitignore             # Git ignore file
├── jsconfig.json          # JavaScript configuration
├── next.config.mjs        # Next.js configuration
├── package.json           # Project dependencies
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── vercel.json            # Vercel deployment configuration
```

## Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/docs)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/docs)
- **Typography**: [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)
- **Deployment**: [Vercel](https://vercel.com)
