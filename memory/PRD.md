# Wedding Website Template - PRD

## Original Problem Statement
User wanted to fix and modernize a wedding website template from GitHub for sale on Etsy:
- Fix styling bugs, text rendering, and underlining issues
- Modern wedding design with sage green color scheme
- Light/white colors, responsive design
- Replace all texts with English placeholders
- Replace photos with free license wedding placeholders
- Add rich animations (parallax, fade-in effects)
- Add comprehensive tests

## User Personas
1. **Couples getting married** - Want a beautiful, easy-to-customize wedding website
2. **Web designers** - Want a premium template to customize for clients
3. **Etsy buyers** - Looking for ready-to-use wedding templates

## Core Requirements (Static)
- Password-protected access
- Single-page design with one additional inspiration page
- Sections: Hero, About, Venue, Accommodation, RSVP, Dress Code, Schedule, Parking, Photos, Gifts, Contact
- Mobile-responsive design
- Smooth scroll navigation
- Color palette display for dress code

## What's Been Implemented (Jan 2026)

### Design & Styling
- [x] Complete redesign with modern sage green color scheme
- [x] Custom Tailwind config with sage, cream, and gold colors
- [x] Cormorant Garamond serif + Nunito Sans font pairing
- [x] Glass-morphism effects on cards
- [x] Custom scrollbar styling
- [x] Smooth scroll behavior

### Animations
- [x] Parallax hero section with background scroll effect
- [x] Fade-in-up animations on scroll
- [x] Framer Motion integration
- [x] Staggered reveal animations
- [x] Hover transitions on buttons and links

### Components
- [x] Password gate with localStorage persistence
- [x] Sticky navigation with scroll state change
- [x] Mobile hamburger menu with animated drawer
- [x] Section cards with backdrop blur
- [x] Color palette circles for dress code
- [x] Schedule timeline
- [x] Inspiration gallery page

### Images
- [x] All images replaced with Unsplash free license photos
- [x] Hero, couple, venue, accommodation, parking images
- [x] Outfit inspiration images (6 total)

### Testing
- [x] 51 unit tests passing
- [x] App.test.jsx - Auth, navigation, sections, images, accessibility
- [x] Inspiration.test.jsx - Page structure, content, navigation
- [x] components.test.jsx - Button, Card, Input components

### Technical Fixes
- [x] Fixed image paths
- [x] Fixed HashRouter navigation
- [x] Fixed section ID mismatches
- [x] Added data-testid attributes
- [x] Replaced emoji icons with Lucide React icons
- [x] Added proper aria-labels for accessibility

## Prioritized Backlog

### P0 (Critical) - DONE
- ✅ Modern sage green design
- ✅ Responsive layout
- ✅ All placeholder texts in English
- ✅ Free license images

### P1 (Important)
- [ ] Build script for production zip
- [ ] README with customization instructions
- [ ] Config file for easy text/image swapping
- [ ] SEO meta tags optimization

### P2 (Nice to have)
- [ ] Dark mode toggle
- [ ] Additional color scheme variants
- [ ] Countdown timer to wedding date
- [ ] Guest book/comments section
- [ ] Integration with wedding planning services

## Next Tasks
1. Create build script for Etsy zip package
2. Add detailed README for buyers
3. Create config file for easy customization
4. Add more color scheme variants (blush, gold, dusty blue)

## Tech Stack
- Vite + React 18
- Tailwind CSS 3
- Framer Motion
- React Router DOM (HashRouter)
- Vitest + Testing Library
- Lucide React icons
