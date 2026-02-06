# 💒 Wedding Website Template

A beautiful, modern wedding website template with multiple color themes, smooth animations, and easy customization.

![Wedding Website Preview](https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80)

## ✨ Features

- **5 Beautiful Color Themes**: Sage Green, Blush Pink, Dusty Blue, Gold, Lavender
- **Smooth Animations**: Parallax scrolling, fade-in effects, hover transitions
- **Fully Responsive**: Looks great on desktop, tablet, and mobile
- **Password Protection**: Keep your wedding details private
- **Easy Customization**: Single config file for all content changes
- **Modern Stack**: React 18, Tailwind CSS, Framer Motion

## 🎨 Available Themes

| Theme | Description | Best For |
|-------|-------------|----------|
| Sage Green | Natural, earthy tones | Garden/Rustic weddings |
| Blush Pink | Romantic, soft colors | Elegant celebrations |
| Dusty Blue | Classic, serene palette | Coastal/Formal weddings |
| Gold | Luxurious, glamorous | Grand celebrations |
| Lavender | Whimsical, dreamy | Enchanting weddings |

## 🚀 Quick Start

### Option 1: Use Pre-built Version
1. Upload contents of `/dist` folder to your web hosting
2. Done! Your website is live.

### Option 2: Customize & Build
1. Install Node.js (v18 or higher)
2. Open terminal in project folder
3. Run:
```bash
npm install
npm run dev
```
4. Open http://localhost:3000 in browser
5. Edit `src/config/wedding.config.js` to customize
6. Build for production: `npm run build`

## 📝 Customization

All customization is done in a single file: `src/config/wedding.config.js`

### Change Names & Date
```javascript
couple: {
  partner1: { name: 'Emma', phone: '+1 555-0123' },
  partner2: { name: 'James', phone: '+1 555-0124' },
  displayName: 'Emma & James'
},
wedding: {
  date: 'June 15, 2025',
  venue: { name: 'Rose Garden Estate', location: 'California' }
}
```

### Change Theme
```javascript
theme: 'blush'  // Options: 'sage', 'blush', 'dustyBlue', 'gold', 'lavender'
```

### Change Password
```javascript
auth: {
  password: 'yourpassword',
  enabled: true  // Set to false to disable
}
```

### Change Images
```javascript
images: {
  hero: 'https://your-image-url.com/hero.jpg',
  couple: './images/our-photo.jpg',  // Local images go in /public/images/
  // ... more images
}
```

See `CUSTOMIZATION.md` for detailed customization guide.

## 📁 Project Structure

```
wedding-website-template/
├── dist/                 # Production-ready files (upload these)
├── src/
│   ├── config/
│   │   ├── wedding.config.js   # ⭐ Main customization file
│   │   └── themes.js           # Theme definitions
│   ├── components/       # UI components
│   ├── context/          # Theme context
│   ├── App.jsx           # Main app component
│   └── Inspiration.jsx   # Outfit inspiration page
├── public/               # Static assets
├── README.md             # This file
└── CUSTOMIZATION.md      # Detailed guide
```

## 🛠 Tech Stack

- **React 18** - UI framework
- **Tailwind CSS 3** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool
- **Vitest** - Testing

## 📱 Sections Included

1. **Hero** - Beautiful full-screen intro with names & date
2. **Our Story** - About the couple
3. **Venue & Date** - Wedding location details
4. **Accommodation** - Guest stay information
5. **RSVP** - Link to response form
6. **Dress Code** - Color palette & outfit suggestions
7. **Schedule** - Day timeline
8. **Parking** - Directions & parking info
9. **Photos** - Link to shared photo album
10. **Gifts** - Gift preferences
11. **Contact** - Contact information
12. **Inspiration** - Outfit inspiration gallery (separate page)

## 🔐 Password Protection

The website is password-protected by default. Guests can:
- Enter password on the login screen
- Use direct link: `yoursite.com?access=yourpassword`

## 📄 License

This template is for personal use. You may customize and host it for your wedding.

## 💬 Support

If you have questions about customization, please refer to `CUSTOMIZATION.md` first.

---

**Made with 💕 for your special day**
