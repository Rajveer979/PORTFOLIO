# Portfolio Website Design System

## Theme: Monochrome Dark with Glowing Accents

### Core Concept
A sleek, modern developer portfolio with a monochrome dark theme, white/gray tones, glass morphism, 3D elements, and subtle glow effects throughout.

---

## Color Palette

### Primary Colors
- **Background**: `#0a0a0f` (Deep black)
- **Surface**: `#1a1a1a` (Dark gray)
- **Card Background**: `rgba(255, 255, 255, 0.05)` (Semi-transparent white)

### Text Colors
- **Primary Text**: `#ffffff` (White)
- **Secondary Text**: `#d1d5db` (Light gray)
- **Muted Text**: `#9ca3af` (Medium gray)
- **Subtle Text**: `#6b7280` (Dark gray)

### Accent Colors
- **Glow**: `rgba(255, 255, 255, 0.3)` (White glow)
- **Border**: `rgba(255, 255, 255, 0.1)` (Subtle white border)
- **Highlight**: `rgba(255, 255, 255, 0.1)` (White highlight)

---

## Typography

### Font Stack
- **Display**: System fonts (default)
- **Body**: System fonts (default)

### Text Styles
- **Hero Title**: `text-5xl md:text-7xl lg:text-8xl font-black`
- **Section Heading**: `text-4xl font-bold heading-glow`
- **Card Title**: `text-xl font-semibold`
- **Body Text**: `text-lg text-gray-300`
- **Small Text**: `text-sm text-gray-500`

---

## Visual Effects

### Glow Effects
- **Heading Glow**: `text-shadow: 0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.2), 0 0 30px rgba(255,255,255,0.1)`
- **Card Glow**: `box-shadow: 0 0 30px rgba(255,255,255,0.05)`
- **Button Glow**: `box-shadow: 0 0 25px rgba(255,255,255,0.15)`

### Glass Morphism
```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### 3D Transforms
- Cards use `perspective: 1000px`
- Hover: `scale(1.05) rotateY(10deg) translateY(-5px)`
- Smooth transitions: `duration-300`

---

## Layout Structure

### Bento Grid Layout
- **Hero**: Full viewport height with interactive glowing background
- **About**: 2-column (image left, text right)
- **Skills**: 3-column grid
- **Projects**: 3-column grid with featured cards spanning 2 columns
- **Certifications**: 3-column grid
- **Contact**: 3-column (info left, form right spanning 2 columns)

### Spacing
- **Section Padding**: `py-20`
- **Container Max Width**: `max-w-7xl`
- **Card Gap**: `gap-6`
- **Card Padding**: `p-6` to `p-8`

---

## Components

### Navbar
- Fixed position at top
- Backdrop blur with dark background
- Navigation links with hover effects
- Mobile hamburger menu

### Cards
- Glass morphism background
- Subtle border glow
- 3D hover effects
- Consistent rounded corners (`rounded-2xl`)

### Buttons
- Primary: White background, gray text
- Secondary: Transparent with white border
- Hover: Scale up, glow intensifies

---

## Animations

### Framer Motion
- **Page Load**: Staggered fade-in with y-offset
- **Scroll Reveal**: `whileInView` with opacity and y-offset
- **Hover**: Scale, rotate, lift effects
- **Buttons**: While hover and tap animations

### CSS Animations
- **Pulse**: Glowing orbs in background
- **Bounce**: Arrow indicator
- **Float**: Decorative elements

---

## 3D Elements

### Interactive Hero Background
- Layered radial and blur-based glow orbs
- Electric blue hover glow (`#a5f2f3`)
- Subtle pulse animation
- No 3D globe dependency in the hero background

---

## Responsive Design

### Breakpoints
- **Mobile**: `< 768px` - Single column, stacked layout
- **Tablet**: `768px - 1024px` - 2-column grids
- **Desktop**: `> 1024px` - 3-column grids

### Mobile Adjustments
- Navigation becomes hamburger menu
- Grid layouts stack vertically
- Text sizes reduce
- Padding reduces

---

## Design Principles

1. **Monochrome Consistency**: Only black, white, and gray tones
2. **Depth Through Layers**: Background glows, glass cards, 3D transforms
3. **Subtle Animations**: Smooth transitions, no jarring movements
4. **Readable Contrast**: White text on dark background
5. **Modern Aesthetics**: Glass morphism, 3D elements, glow effects

---

## File Structure

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

---

## Notes
- All sections use the same dark background (`#0a0a0f`)
- White text throughout for consistency
- Glow effects on all section headings
- 3D card effects on hover
- Electric blue accent used sparingly for buttons, highlights, and hover states
- Glass morphism for cards and containers
- Social links use the X logo instead of Twitter
- Social links open in a new tab with `rel="noopener noreferrer"`
