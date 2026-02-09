# Wedding Website Template v2.0.0

A beautiful, customizable wedding website template built with React, Vite, and Tailwind CSS.

## ✨ Features

- **Password Protected** - Keep your wedding details private
- **5 Color Themes** - Sage, Blush, Dusty Blue, Gold, Lavender
- **Fully Responsive** - Looks great on all devices
- **Easy Customization** - All settings in one config file
- **Smooth Animations** - Powered by Framer Motion
- **Modern Design** - Clean, elegant, and professional

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ⚙️ Customization

All customization is done in **one file**: `src/config/wedding.config.js`

### What you can customize:
- Couple names & contact info
- Wedding date & venue
- Password protection
- Color theme
- All images (Unsplash URLs or local files)
- Schedule/timeline
- All text content
- External links (RSVP form, photo album, map)
- Dress code colors

## 📁 Project Structure

```
wedding-website/
├── src/
│   ├── config/
│   │   ├── wedding.config.js  ← MAIN CONFIG FILE
│   │   └── themes.js          ← Theme definitions
│   ├── components/            ← UI components
│   ├── context/               ← Theme context
│   ├── App.jsx                ← Main page
│   └── Inspiration.jsx        ← Outfit inspiration page
├── public/
│   └── images/                ← Your local images
├── dist/                      ← Production build
└── package.json
```

## 🎨 Available Themes

- `sage` - Natural green tones
- `blush` - Soft pink palette
- `dustyBlue` - Calm blue shades
- `gold` - Elegant golden hues
- `lavender` - Romantic purple tones

## 🔒 Password Protection

Default password: `WeddingPassword`

To change or disable:
```javascript
auth: {
  password: 'YourNewPassword',
  enabled: true  // Set to false to disable
}
```

Direct access link: `yourwebsite.com?access=YourPassword`

## 🌐 Deployment

### Netlify (Easiest)
1. Run `npm run build`
2. Drag & drop the `dist` folder to Netlify
3. Done! Your site is live.

### GitHub Pages
1. Push code to GitHub
2. Go to Settings → Pages
3. Select branch and `/dist` folder

### Traditional Hosting
1. Run `npm run build`
2. Upload contents of `dist` folder via FTP

## 📝 License

This template is for personal use for your wedding website.

---

Made with ❤️ for your special day
