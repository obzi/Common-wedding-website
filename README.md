# 💒 Wedding Website Template

Beautiful, modern wedding website template with 5 color themes and easy customization.

---

## 🚀 Quick Start (3 steps)

### 1. Install
```bash
npm install
```

### 2. Customize
Edit `src/config/wedding.config.js` - change names, date, photos, colors.

### 3. Run
```bash
npm run dev
```
Open http://localhost:3001 in your browser.

---

## 📦 Build for Production

### Build the website:
```bash
npm run build
```

### Preview the build locally:
```bash
npm run preview
```
Open http://localhost:3001

### Output:
Production files are in the `dist/` folder. Upload these to any web hosting.

---

## 🎨 Change Theme

In `src/config/wedding.config.js`, change:
```javascript
theme: 'sage'  // Options: 'sage', 'blush', 'dustyBlue', 'gold', 'lavender'
```

Or use the theme selector button (bottom-right corner) to preview themes live.

---

## ✏️ Customize Content

All customization is in one file: `src/config/wedding.config.js`

| What to change | Where in config |
|----------------|-----------------|
| Names | `couple.partner1.name`, `couple.partner2.name` |
| Wedding date | `wedding.date` |
| Venue | `wedding.venue.name`, `wedding.venue.location` |
| Password | `auth.password` |
| Images | `images.hero`, `images.couple`, etc. |
| Schedule | `schedule` array |
| All text | `content` object |

---

## 🌐 Deploy to Production

### Option A: Static Hosting (Netlify, Vercel)
1. Run `npm run build`
2. Upload `dist/` folder to Netlify/Vercel
3. Done!

### Option B: Traditional Web Hosting
1. Run `npm run build`
2. Upload contents of `dist/` folder via FTP
3. Done!

### Option C: GitHub Pages
1. Push to GitHub
2. Enable Pages in repository settings
3. Set source to `dist/` folder

---

## 🔑 Password Protection

Default password: `wedding25`

To change it, edit in `src/config/wedding.config.js`:
```javascript
auth: {
  password: 'your-new-password',
  enabled: true  // Set to false to disable password
}
```

Share link with password: `yoursite.com?access=your-password`

---

## 📁 Project Structure

```
wedding-website-template/
├── src/
│   ├── config/
│   │   ├── wedding.config.js  ← Main customization file
│   │   └── themes.js          ← Color themes
│   ├── App.jsx                ← Main component
│   └── Inspiration.jsx        ← Outfit inspiration page
├── dist/                      ← Production build (after npm run build)
├── package.json
└── README.md
```

---

## 💡 Tips

- **Images**: Use Unsplash URLs or put your images in `public/images/`
- **Testing**: Run `npm test` to run tests
- **Development**: Changes auto-reload in dev mode

---

## ❓ Need Help?

See `CUSTOMIZATION.md` for detailed customization guide.

---

**Made with ❤️ for your special day**
