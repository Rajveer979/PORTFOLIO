# Portfolio Website Development Plan

## Overview
Build a responsive developer portfolio website using React with Vite, featuring a monochrome dark theme, interactive glowing hero background, About, Skills, Projects, Certifications, and Contact sections.

## Tech Stack
- **Framework**: React with Vite
- **Language**: JavaScript with TypeScript project configuration
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui-style `cn()` utility pattern
- **3D Graphics**: Three.js + React Three Fiber + Drei
- **Deployment**: Vercel
- **Icons**: react-icons + lucide-react
- **Animation**: Framer Motion
- **Analytics**: Vercel Analytics + Google Analytics 4 planned

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ui/
│       ├── globe-hero.tsx
│       └── globe-hero-demo.tsx
├── sections/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Certifications.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Current Branding
- **Name**: Rajveer Mahadevwala
- **Hero Title**: Aspiring AI Engineer
- **Hero Description**: Building intelligent applications, exploring machine learning, and turning ideas into real-world products.
- **About / Who I Am**: I'm a Computer Engineering student passionate about AI, Machine Learning, and software development. I enjoy building intelligent applications, exploring new technologies, and turning ideas into real-world projects. Currently focused on growing as an AI engineer while strengthening my foundations in computer science.

## Social Links
All social links open in a new tab with `rel="noopener noreferrer"`:
- **GitHub**: https://github.com/Rajveer979
- **LinkedIn**: https://www.linkedin.com/in/rajveer-mahadevwala-8969a0336
- **X**: https://x.com/RajveerMah79127

## Features & Sections

### 1. Hero Section
- Full-screen landing with name, title, tagline, and interactive glowing background
- Call-to-action buttons: View My Work, Contact Me
- Monochrome dark theme with glow effects and animated background elements
- Framer Motion fade/scale animations

### 2. About Section
- Personal introduction using the current "Who I Am" text
- Monogram avatar with glass card styling
- Social media links for GitHub, LinkedIn, and X
- Education timeline inside the About section
- 3D hover card effect

### 3. Skills Section
- Categorized technical skills
- Glass cards with icon-based skill display
- Technologies relevant to AI, ML, web development, and computer science

### 4. Projects Section
- Project cards with:
  - Title and description
  - Tech stack tags
  - GitHub link opening in a new tab
  - Featured project layout
- Current projects include:
  - AI-Powered Personal Assistant
  - AI-Powered Crowd Safety Monitoring

### 5. Contact Section
- Contact form with validation
- WhatsApp button opening in a new tab
- Email, phone, and location info
- Social links for GitHub, LinkedIn, and X with X logo

### 6. Certifications Section
- Separate certifications section
- Certificate cards with glass styling and 3D hover effects

## Styling Approach
- Tailwind CSS utility classes
- Monochrome dark design: black, white, and gray only
- No dark/light mode toggle
- Glass morphism for cards and containers
- White glow effects on headings and cards
- 3D card transforms on hover
- Framer Motion scroll animations
- Responsive layout for mobile, tablet, and desktop

## Implementation Steps

### Phase 1: Setup
1. Create Vite + React project
2. Install React, Vite, Tailwind CSS, Framer Motion, react-icons, lucide-react, Three.js, React Three Fiber, and Drei
3. Set up Tailwind CSS configuration
4. Set up Vite alias for `@`
5. Create core files and folder structure

### Phase 2: Core Components
1. Create Navbar with smooth scrolling navigation
2. Build Hero section with interactive glowing background
3. Implement Footer component

### Phase 3: Content Sections
1. About section with current branding, social links, and education
2. Skills section with categorized skill cards
3. Projects section with GitHub links
4. Certifications section
5. Contact form with validation and social/contact links

### Phase 4: Styling & Polish
1. Apply monochrome black/white/gray theme
2. Remove theme toggle implementation
3. Add heading glow and card glow classes
4. Ensure social links open in new tabs
5. Replace Twitter icons with X logo
6. Optimize responsive design

### Phase 5: Deployment
1. Push to GitHub
2. Connect to Vercel
3. Add Vercel Analytics and Google Analytics 4
4. Add custom domain if available

## Remaining Work
- Replace placeholder project links with real project/demo URLs
- Connect resume download button to `public/Resume1.pdf`
- Implement real contact form submission
- Add Vercel Analytics and Google Analytics 4
- Deploy to Vercel
- Clean up unused certificate files in `public/certificates/`

## Success Criteria
- Fully responsive on mobile/desktop
- All sections functional with navigation
- Hero shows "Rajveer Mahadevwala" as the primary headline and "Aspiring AI Engineer" as the supporting role
- Social links use updated GitHub, LinkedIn, and X URLs
- Social links open in new tabs
- Contact form works with a real submission provider
- Certifications display correctly
- Hero uses interactive background instead of 3D globe
- Deployed and accessible on Vercel
- Clean, professional monochrome design with Tailwind utility classes
- Smooth animations and transitions
