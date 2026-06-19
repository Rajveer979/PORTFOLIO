# Portfolio Website Development Plan

## Overview
Build a responsive developer portfolio website using React with Vite, featuring a monochrome dark theme with teal (#2dd4bf) accent, interactive glowing hero background, About, Skills, Projects, Certifications, and Contact sections.

## Tech Stack
- **Framework**: React with Vite
- **Language**: JavaScript with TypeScript project configuration
- **Styling**: Tailwind CSS with custom CSS
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
- **Primary Accent Color**: Teal (#2dd4bf)
- **Hero Description**: Building intelligent applications, exploring machine learning, and turning ideas into real-world products.
- **About / Who I Am**: I'm a Computer Engineering student passionate about AI, Machine Learning, and software development. I enjoy building intelligent applications, exploring new technologies, and turning ideas into real-world projects. Currently focused on growing as an AI engineer while strengthening my foundations in computer science.

## Social Links
All social links open in a new tab with `rel="noopener noreferrer"`:
- **GitHub**: https://github.com/Rajveer979
- **LinkedIn**: https://www.linkedin.com/in/rajveer-mahadevwala-8969a0336
- **X**: https://x.com/RajveerMah79127

## Completed Work

### Design Updates
- **Color Scheme**: Changed from electric blue (#a5f2f3) to teal (#2dd4bf) as primary accent
- **Fonts**: Added Space Grotesk and Inter fonts
- **Scrollbar**: Styled with 4px width and teal thumb
- **Scroll Animations**: Implemented Intersection Observer for fade-up animations

### Navbar
- Scroll-spy functionality to detect active section
- Teal dot indicator below active nav link
- Logo "M." styled in teal with hover underline effect
- Mobile menu with left border indicator for active items

### Hero Section
- Added availability pill with pulse dot above name
- Name displayed as small label above role title
- "AI" in role title highlighted in teal
- Hero name with glow styling and translucent background

### About Section
- Profile photo with teal ring border and glow shadow
- Social icons (GitHub, LinkedIn, X) below profile photo
- Removed stat counters section (3+ Projects, 5+ Certifications, etc.)
- Cards have flip and hover glow effects

### Skills Section
- Flip hover effect on category cards (rotateY: -12, rotateX: 8)
- Teal icon colors and hover effects
- Skill chips with scale and border color transitions

### Projects Section
- Flip hover effect on project cards (rotateY: -8, rotateX: 6)
- Hover glow effect with multi-layer teal shadow
- GitHub links mapped to individual project repositories:
  - AI-Powered Personal Assistant: https://github.com/Rajveer979/ai-assistant
  - AI-Powered Crowd Safety Monitoring: https://github.com/shravansuthar2/smart-crowd-safety
- Live Demo links added for Crowd Safety project

### Certifications Section
- Flip hover effect on cert cards (rotateY: -10, rotateX: 8)
- Hover glow effect on cards
- Removed year badge duplicate line (simplified layout)
- Year displayed as teal pill badge

### Contact Section
- Teal "Send Message" button with Space Grotesk font
- Form inputs styled with teal focus border and glow
- Social icons (GitHub, LinkedIn, X) in contact info card
- Cards have flip and hover glow effects

### Footer
- Updated background to #050710
- Social icon colors: #2a4050 with teal hover

## Remaining Work
- WhatsApp integration to Contact section (already in index.html)
- Implement rule-based chatbot for portfolio queries
- Replace placeholder project links with real project/demo URLs
- Implement real contact form submission
- Clean up unused certificate files in `public/certificates/`

## Completed
- Resume download button connected to `public/Resume1.pdf` ✓
- Vercel Analytics and Google Analytics 4 implemented ✓
- Deployed to Vercel (vercel.json configured) ✓
- Resume button hover effect fixed for light mode ✓
- Hero section mobile responsiveness improved (`h-screen` → `min-h-screen`, responsive padding) ✓
- Navbar mobile button click handling fixed (stopPropagation, tap highlights) ✓
- Hero buttons mobile sizing and click handling fixed ✓
- Hero section z-index increased for proper overlay stacking ✓
- Added `pointer-events-auto` and `touch-action: manipulation` for mobile interactivity ✓

## Success Criteria
- Fully responsive on mobile/desktop
- All sections functional with navigation
- Hero shows "Rajveer Mahadevwala" as the primary headline and "AI & Software Engineer" as the supporting role
- Social links use updated GitHub, LinkedIn, and X URLs
- Social links open in new tabs
- Contact form works with a real submission provider
- Certifications display correctly
- Hero uses interactive grid background with teal glow on hover
- Deployed and accessible on Vercel
- Clean, professional monochrome design with teal accent
- Smooth animations and transitions throughout
- Scroll-spy active state in navbar working correctly
