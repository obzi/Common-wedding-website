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
- Create config file for easy customization
- Add multiple color theme variants
- Create build script and documentation for Etsy

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
- Config-based customization
- Multiple theme variants

## What's Been Implemented (Jan 2026)

### Design & Styling ✅
- [x] Complete redesign with modern sage green color scheme
- [x] Custom Tailwind config with sage, cream, and gold colors
- [x] Cormorant Garamond serif + Nunito Sans font pairing
- [x] Glass-morphism effects on cards
- [x] Custom scrollbar styling
- [x] Smooth scroll behavior

### Animations ✅
- [x] Parallax hero section with background scroll effect
- [x] Fade-in-up animations on scroll
- [x] Framer Motion integration
- [x] Staggered reveal animations
- [x] Hover transitions on buttons and links

### Theme System ✅ (NEW)
- [x] 5 color themes: Sage Green, Blush Pink, Dusty Blue, Gold, Lavender
- [x] Each theme with 6 primary shades + 3 accent colors
- [x] Dynamic color palette for dress code section
- [x] Theme selector UI (floating button)
- [x] Theme persistence per session

### Config System ✅ (NEW)
- [x] `/src/config/wedding.config.js` - Single file for all customization
- [x] `/src/config/themes.js` - Theme definitions
- [x] Configurable: couple names, date, venue, schedule, all text content
- [x] Configurable: images, external links, password
- [x] Configurable: theme selection

### Documentation ✅ (NEW)
- [x] `README.md` - Getting started, features, quick customization
- [x] `CUSTOMIZATION.md` - Detailed customization guide
- [x] Code comments throughout

### Build & Distribution ✅ (NEW)
- [x] `/scripts/build-release.sh` - Automated build script
- [x] Production build in `/dist` folder
- [x] Etsy-ready zip package: `wedding-website-template-v2.0.0.zip` (7MB)

### Components ✅
- [x] Password gate with localStorage persistence
- [x] Sticky navigation with scroll state change
- [x] Mobile hamburger menu with animated drawer
- [x] Section cards with backdrop blur
- [x] Color palette circles for dress code
- [x] Schedule timeline
- [x] Inspiration gallery page
- [x] Theme selector component

### Images ✅
- [x] All images replaced with Unsplash free license photos
- [x] Hero, couple, venue, accommodation, parking images
- [x] Outfit inspiration images (6 total)

### Testing ✅
- [x] 51 unit tests passing
- [x] App.test.jsx - Auth, navigation, sections, images, accessibility
- [x] Inspiration.test.jsx - Page structure, content, navigation
- [x] components.test.jsx - Button, Card, Input components

## File Structure
```
/app/
├── src/
│   ├── config/
│   │   ├── wedding.config.js  ← Main customization file
│   │   └── themes.js          ← 5 theme definitions
│   ├── context/
│   │   └── ThemeContext.jsx   ← Theme provider
│   ├── components/ui/         ← UI components
│   ├── test/                  ← 51 unit tests
│   ├── App.jsx                ← Main app
│   ├── Inspiration.jsx        ← Outfit inspiration page
│   └── Index.css              ← Global styles
├── dist/                      ← Production build
├── release/                   ← Etsy zip package
├── scripts/
│   └── build-release.sh       ← Build automation
├── README.md                  ← User guide
└── CUSTOMIZATION.md           ← Detailed customization
```

## Prioritized Backlog

### P0 (Critical) - ALL DONE ✅
- ✅ Modern sage green design
- ✅ Responsive layout
- ✅ All placeholder texts in English
- ✅ Free license images
- ✅ Config file for customization
- ✅ Multiple theme variants (5 themes)
- ✅ Build script for Etsy zip
- ✅ Documentation (README + CUSTOMIZATION.md)

### P1 (Future Enhancement)
- [ ] Dark mode toggle
- [ ] Countdown timer to wedding date
- [ ] Guest book/comments section
- [ ] Music player background
- [ ] Multi-language support

### P2 (Nice to have)
- [ ] Integration with wedding planning services
- [ ] Photo gallery with lightbox
- [ ] RSVP form built-in (not external link)
- [ ] Email notifications

## Tech Stack
- Vite + React 18
- Tailwind CSS 3
- Framer Motion
- React Router DOM (HashRouter)
- Vitest + Testing Library
- Lucide React icons

## Etsy Package Contents
`wedding-website-template-v2.0.0.zip` (7MB):
- `/src` - Source code for customization
- `/dist` - Production-ready website (upload directly)
- `README.md` - Getting started guide
- `CUSTOMIZATION.md` - Detailed customization guide
- Config files for build process
