# Portfolio Website Design System

## Theme: Monochrome Dark with Teal Glow Accents

### Core Concept
A sleek, modern developer portfolio with a monochrome dark theme, teal (#2dd4bf) accent, glass morphism, 3D elements, and subtle glow effects throughout.

---

## Color Palette

### Primary Colors
- **Background**: `#07090f` (Deep black)
- **Surface**: `#0d1117` (Dark card background)
- **Card Background**: `#0d1117` (Solid teal-tinted dark)
- **Card Border**: `#1a2535` (Subtle teal border)

### Text Colors
- **Primary Text**: `#e8f4ff` (Soft white)
- **Secondary Text**: `#4a6070` (Teal-tinted gray)
- **Muted Text**: `#2a4050` (Dark teal)

### Accent Colors
- **Primary Glow**: `#2dd4bf` (Teal - used for all interactive elements)
- **Glow Shadow**: `rgba(45, 212, 191, 0.4)` (Teal glow)
- **Accent Background**: `rgba(45, 212, 191, 0.06-0.15)` (Teal transparent)

---

## Typography

### Font Stack
- **Headings**: Space Grotesk (Google Fonts)
- **Body**: Inter (Google Fonts)

### Text Styles
- **Hero Name**: `clamp(1.5rem,2.8vw,1.9rem)` uppercase, teal glow
- **Hero Role**: `clamp(2.4rem,5vw,3.6rem)` with teal "AI" highlight
- **Section Heading**: `text-4xl font-bold heading-glow`
- **Card Title**: `text-xl font-semibold`
- **Body Text**: `text-lg text-[#4a6070]`

---

## Visual Effects

### Glow Effects
- **Heading Glow**: `text-shadow: 0 0 10px rgba(45,212,191,0.3), 0 0 20px rgba(45,212,191,0.2), 0 0 30px rgba(45,212,191,0.1)`
- **Card Hover Glow**: `scale(1.03)` with multi-layer teal shadow
- **Button Glow**: `box-shadow: 0 6px 24px rgba(45,212,191,0.3)`

### Glass Morphism
```css
.glass {
  background: rgba(13, 17, 23, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid var(--card-border);
}
```

### Hover Glow Effect
```css
.hover-glow:hover {
  transform: scale(1.03) !important;
  box-shadow: 0 0 0 1px rgba(45, 212, 191, 0.4), 0 0 0 3px rgba(45, 212, 191, 0.2), 0 15px 50px rgba(45, 212, 191, 0.15), 0 0 40px rgba(45, 212, 191, 0.25) !important;
}
```

### 3D Transforms
- Cards use `perspective: 1000px`
- Hover: `rotateY(-8deg) rotateX(6deg) translateY(-6px)`
- Smooth transitions: `duration-300`

---

## Layout Structure

### Bento Grid Layout
- **Hero**: Full viewport height with interactive grid background
- **About**: 2-column (image left, text right)
- **Skills**: 3-column grid with category cards
- **Projects**: 2-column grid with project cards
- **Certifications**: 3-column grid
- **Contact**: 3-column (info left, form right spanning 2 columns)

---

## Components

### Navbar
- Fixed position at top with backdrop blur
- Scroll-spy active state detection
- Teal dot indicator below active nav link
- Logo "M." styled in teal
- Mobile menu with left border indicator

### Cards
- Glass morphism background with teal border
- Flip hover effect with 3D transform
- Hover glow effect with scale(1.03)
- Consistent rounded corners (`rounded-2xl`)

### Buttons
- Primary: Teal background (#2dd4bf), dark text
- Secondary: Transparent with teal border
- Hover: Scale up with teal glow

---

## Animations

### Framer Motion
- **Page Load**: Staggered fade-in with y-offset
- **Scroll Reveal**: `whileInView` with opacity and y-offset
- **Hover**: Scale, rotate, lift effects with glow
- **Buttons**: While hover and tap animations

### CSS Animations
- **Pulse**: Availability dot in hero
- **Bounce**: Arrow indicator
- **Float**: Decorative orbs in background

---

## Hero Background

### Interactive Grid Background
- 46px × 46px cell grid
- Mouse-follow teal glow within 130px radius
- Radial bloom effect on hover
- Cells have breathing animation when idle

---

## Responsive Design

### Breakpoints
- **Mobile**: `< 768px` - Single column, stacked layout
- **Tablet**: `768px - 1024px` - 2-column grids
- **Desktop**: `> 1024px` - 3-column grids

---

## Design Principles

1. **Monochrome Consistency**: Blacks, teals, and grays only
2. **Depth Through Layers**: Background grid, glass cards, 3D transforms
3. **Subtle Animations**: Smooth spring-based movements
4. **Readable Contrast**: Soft white text on dark background
5. **Modern Aesthetics**: Glass morphism, 3D elements, teal glow effects

---

## File Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Cursor.jsx
│   └── ui/
│       └── globe-hero.tsx
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

---

## Notes
- All sections use `#07090f` background
- Teal (#2dd4bf) is the primary accent throughout
- Glow effects on all interactive elements
- Scroll-spy active state highlights current section
- Social links use the X logo instead of Twitter
- Social links open in a new tab with `rel="noopener noreferrer"`

---

## Completed Fixes

### Resume Button Hover Effect (index.css)
**Fixed**: Light mode hover now displays white text on teal background instead of dark text on dark background.
- Changed `color: var(--bg-primary)` to `color: #ffffff` in all `.resume-btn:hover` and `.mobile-resume-btn:hover` rules
- Added `box-shadow: 0 0 14px var(--accent-glow)` for better visual feedback
