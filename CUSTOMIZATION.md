# 🎨 Wedding Website Customization Guide

This guide walks you through every customization option available in your wedding website template.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Configuration File Overview](#configuration-file-overview)
3. [Changing the Theme](#changing-the-theme)
4. [Customizing Content](#customizing-content)
5. [Replacing Images](#replacing-images)
6. [Modifying the Schedule](#modifying-the-schedule)
7. [External Links](#external-links)
8. [Disabling Password Protection](#disabling-password-protection)
9. [Advanced Customization](#advanced-customization)
10. [Deploying Your Website](#deploying-your-website)

---

## Quick Start

1. Open `src/config/wedding.config.js` in any text editor
2. Change the values you want to customize
3. Save the file
4. If running locally, changes appear automatically
5. Build for production: `npm run build`

---

## Configuration File Overview

All customization is centralized in `src/config/wedding.config.js`. Here's the structure:

```javascript
export const weddingConfig = {
  couple: { ... },      // Names and contact info
  wedding: { ... },     // Date and venue details
  auth: { ... },        // Password settings
  theme: '...',         // Color theme selection
  images: { ... },      // Image URLs
  links: { ... },       // External links (RSVP, photos, etc.)
  schedule: [ ... ],    // Wedding day timeline
  content: { ... },     // All text content
  inspiration: { ... }  // Inspiration page content
};
```

---

## Changing the Theme

### Available Themes

| Theme Name | Code | Description |
|------------|------|-------------|
| Sage Green | `sage` | Natural, earthy (default) |
| Blush Pink | `blush` | Romantic, feminine |
| Dusty Blue | `dustyBlue` | Classic, serene |
| Gold | `gold` | Luxurious, glamorous |
| Lavender | `lavender` | Whimsical, dreamy |

### How to Change

```javascript
// In wedding.config.js
theme: 'blush',  // Change to your preferred theme
```

### Theme Colors

Each theme includes:
- **6 primary color shades** (50-950)
- **3 accent colors** (light, medium, dark)
- **6 dress code palette colors**

---

## Customizing Content

### Couple Information

```javascript
couple: {
  partner1: {
    name: 'Emma',           // First partner's name
    phone: '+1 (555) 123-4567'
  },
  partner2: {
    name: 'James',          // Second partner's name
    phone: '+1 (555) 765-4321'
  },
  displayName: 'Emma & James'  // Shown in header/hero
},
```

### Wedding Details

```javascript
wedding: {
  date: 'June 15, 2025',
  venue: {
    name: 'Rose Garden Estate',
    location: 'Napa Valley, California',
    mapUrl: 'https://maps.google.com/...',
    description: 'A beautiful vineyard setting...'
  }
},
```

### Section Content

Each section's text can be customized:

```javascript
content: {
  about: {
    title: 'Our Story',
    paragraphs: [
      'First paragraph about how you met...',
      'Second paragraph about your journey...',
      'Final paragraph thanking guests...'
    ]
  },
  // ... other sections
}
```

---

## Replacing Images

### Using Online Images (Unsplash, etc.)

```javascript
images: {
  hero: 'https://images.unsplash.com/photo-xxx?w=1920&q=80',
  couple: 'https://your-photo-service.com/photo.jpg',
}
```

### Using Local Images

1. Place your images in the `/public/images/` folder
2. Reference them with relative paths:

```javascript
images: {
  hero: '/images/our-hero-photo.jpg',
  couple: '/images/engagement-photo.jpg',
}
```

### Recommended Image Sizes

| Image | Recommended Size | Aspect Ratio |
|-------|------------------|---------------|
| Hero | 1920x1080px | 16:9 |
| Couple | 800x800px | 1:1 |
| Venue | 800x600px | 4:3 |
| Accommodation | 800x600px | 4:3 |
| Parking | 800x600px | 4:3 |
| Inspiration | 500x666px | 3:4 |

---

## Modifying the Schedule

Add, remove, or edit timeline items:

```javascript
schedule: [
  { time: '2:00 PM', event: 'Guest Arrival' },
  { time: '3:00 PM', event: 'Ceremony Begins' },
  { time: '3:30 PM', event: 'Cocktail Hour' },
  { time: '5:00 PM', event: 'Reception & Dinner' },
  { time: '7:00 PM', event: 'First Dance' },
  { time: '8:00 PM', event: 'Cake Cutting' },
  { time: '9:00 PM', event: 'Party!' },
]
```

---

## External Links

Connect to your external services:

```javascript
links: {
  rsvpForm: 'https://forms.google.com/your-form-id',
  photoAlbum: 'https://drive.google.com/your-folder',
  venueMap: 'https://maps.google.com/place/...',
}
```

### Recommended Services

| Purpose | Free Options |
|---------|-------------|
| RSVP Form | Google Forms, Typeform, Tally |
| Photo Sharing | Google Drive, Dropbox, iCloud |
| Maps | Google Maps, Apple Maps |

---

## Disabling Password Protection

To make the website publicly accessible:

```javascript
auth: {
  password: 'wedding25',
  enabled: false  // Set to false to disable
}
```

---

## Advanced Customization

### Adding New Themes

Edit `src/config/themes.js` to add custom themes:

```javascript
myCustomTheme: {
  name: 'My Custom Theme',
  colors: {
    primary: {
      50: '#f5f5f5',
      // ... add all shades 100-950
    },
    accent: {
      light: '#ffffff',
      medium: '#cccccc',
      dark: '#666666'
    }
  },
  palette: [
    { name: 'Color 1', color: '#xxx' },
    // ... 6 colors for dress code
  ]
}
```

### Modifying Styles

- **Global styles**: `src/Index.css`
- **Tailwind config**: `tailwind.config.js`
- **Component styles**: Individual `.jsx` files

### Adding New Sections

1. Add content to `wedding.config.js`
2. Create section component in `App.jsx`
3. Add navigation item to `sections` array

---

## Deploying Your Website

### Option 1: Static Hosting (Recommended)

1. Run `npm run build`
2. Upload `/dist` folder contents to:
   - Netlify (free)
   - Vercel (free)
   - GitHub Pages (free)
   - Any web hosting

### Option 2: Netlify (Easy)

1. Create Netlify account
2. Drag & drop `/dist` folder
3. Get instant URL

### Option 3: GitHub Pages

1. Push code to GitHub
2. Run `npm run deploy`
3. Enable Pages in repository settings

### Custom Domain

1. Purchase domain (Namecheap, GoDaddy, etc.)
2. Point DNS to your hosting
3. Enable HTTPS

---

## Troubleshooting

### Images Not Loading
- Check URLs are correct
- Ensure images are publicly accessible
- For local images, verify they're in `/public/images/`

### Theme Not Changing
- Verify theme name is spelled correctly
- Clear browser cache
- Restart development server

### Build Errors
- Run `npm install` to update dependencies
- Check for syntax errors in config files
- Ensure all quotes and brackets are matched

---

## Need Help?

1. Check this guide first
2. Review example configurations
3. Examine the source code comments

---

**Happy customizing! 💒**
