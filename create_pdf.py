from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font('Helvetica', 'B', 12)
        self.set_text_color(101, 119, 77)  # Sage green
        self.cell(0, 10, 'Wedding Website Template - User Guide', align='C', ln=True)
        self.ln(5)
    
    def footer(self):
        self.set_y(-15)
        self.set_font('Helvetica', 'I', 8)
        self.set_text_color(128, 128, 128)
        self.cell(0, 10, f'Page {self.page_no()}', align='C')

    def chapter_title(self, title):
        self.set_font('Helvetica', 'B', 14)
        self.set_text_color(66, 77, 54)
        self.cell(0, 10, title, ln=True)
        self.ln(2)
    
    def section_title(self, title):
        self.set_font('Helvetica', 'B', 11)
        self.set_text_color(80, 95, 63)
        self.cell(0, 8, title, ln=True)
        self.ln(1)
    
    def body_text(self, text):
        self.set_font('Helvetica', '', 10)
        self.set_text_color(50, 50, 50)
        self.multi_cell(0, 5, text)
        self.ln(2)
    
    def code_block(self, code):
        self.set_font('Courier', '', 9)
        self.set_fill_color(245, 245, 245)
        self.set_text_color(50, 50, 50)
        self.multi_cell(0, 5, code, fill=True)
        self.ln(2)
    
    def bullet_point(self, text):
        self.set_font('Helvetica', '', 10)
        self.set_text_color(50, 50, 50)
        self.cell(5, 5, chr(149), ln=False)
        self.multi_cell(0, 5, text)

pdf = PDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()

# Title
pdf.set_font('Helvetica', 'B', 24)
pdf.set_text_color(101, 119, 77)
pdf.cell(0, 20, 'Wedding Website Template', align='C', ln=True)
pdf.set_font('Helvetica', '', 12)
pdf.set_text_color(100, 100, 100)
pdf.cell(0, 10, 'Complete User Guide', align='C', ln=True)
pdf.ln(10)

# Quick Start
pdf.chapter_title('1. QUICK START')
pdf.body_text('Get your wedding website running in 3 simple steps:')
pdf.section_title('Step 1: Install Dependencies')
pdf.code_block('npm install')
pdf.section_title('Step 2: Customize Your Website')
pdf.body_text('Open the file src/config/wedding.config.js and edit your details (names, date, photos, etc.)')
pdf.section_title('Step 3: Run Development Server')
pdf.code_block('npm run dev')
pdf.body_text('Open http://localhost:3000 in your browser to see your website.')
pdf.ln(5)

# Password Protection
pdf.chapter_title('2. PASSWORD PROTECTION')
pdf.body_text('Your website is password-protected by default.')
pdf.section_title('Default Password: WeddingPassword')
pdf.body_text('To change the password, edit src/config/wedding.config.js:')
pdf.code_block('auth: {\n  password: \'YourNewPassword\',\n  enabled: true  // Set to false to disable\n}')
pdf.body_text('Share direct access link: yourwebsite.com?access=YourPassword')
pdf.ln(5)

# Customization
pdf.chapter_title('3. CUSTOMIZATION')
pdf.body_text('All customization is done in ONE file: src/config/wedding.config.js')
pdf.ln(2)

pdf.section_title('3.1 Change Names & Date')
pdf.code_block('couple: {\n  partner1: { name: \'Emma\', phone: \'+1 555-0123\' },\n  partner2: { name: \'James\', phone: \'+1 555-0124\' },\n  displayName: \'Emma & James\'\n},\nwedding: {\n  date: \'June 15, 2025\',\n  venue: { name: \'Rose Garden\', location: \'California\' }\n}')

pdf.section_title('3.2 Change Images')
pdf.body_text('Use Unsplash URLs or local images (put in public/images/ folder):')
pdf.code_block('images: {\n  hero: \'https://images.unsplash.com/photo-xxx\',\n  couple: \'/images/our-photo.jpg\',  // Local image\n  venue: \'https://images.unsplash.com/photo-yyy\'\n}')

pdf.section_title('3.3 Change External Links')
pdf.code_block('links: {\n  rsvpForm: \'https://forms.google.com/your-form\',\n  photoAlbum: \'https://drive.google.com/your-album\',\n  venueMap: \'https://maps.google.com/your-location\'\n}')

pdf.section_title('3.4 Change Schedule')
pdf.code_block('schedule: [\n  { time: \'2:00 PM\', event: \'Guest Arrival\' },\n  { time: \'3:00 PM\', event: \'Ceremony\' },\n  { time: \'5:00 PM\', event: \'Reception\' }\n]')

pdf.add_page()

# Theme & Colors
pdf.chapter_title('4. THEME & COLORS')

pdf.section_title('4.1 Change Website Theme')
pdf.body_text('5 beautiful themes available: sage, blush, dustyBlue, gold, lavender')
pdf.code_block('theme: \'blush\'  // Changes entire website color scheme')

pdf.section_title('4.2 Dress Code Color Palette')
pdf.body_text('Customize the 6 colors shown in the Dress Code section:')
pdf.code_block('dressCodeColors: [\n  { name: \'Blush\', color: \'#fad4d4\' },\n  { name: \'Rose\', color: \'#ec8b8b\' },\n  { name: \'Dusty Rose\', color: \'#c94a4a\' },\n  { name: \'Ivory\', color: \'#fffaf0\' },\n  { name: \'Champagne\', color: \'#f7e7ce\' },\n  { name: \'Mauve\', color: \'#e0b0b0\' }\n]')

pdf.section_title('4.3 Hide Theme Selector Button')
pdf.body_text('The floating theme selector button (bottom-right corner) is for preview purposes. Once you have chosen your final theme, hide it:')
pdf.code_block('showThemeSelector: false  // Hides the color picker button')

pdf.ln(5)

# Build & Deploy
pdf.chapter_title('5. BUILD FOR PRODUCTION')

pdf.section_title('5.1 Create Production Build')
pdf.code_block('npm run build')
pdf.body_text('This creates a "dist" folder with all files ready for upload.')

pdf.section_title('5.2 Preview Production Build')
pdf.code_block('npm run preview')
pdf.body_text('Opens the production build locally for final testing.')

pdf.ln(5)

# Deployment Options
pdf.chapter_title('6. DEPLOYMENT OPTIONS')

pdf.section_title('Option A: Netlify (Easiest - Free)')
pdf.bullet_point('Go to netlify.com and create free account')
pdf.bullet_point('Drag and drop the "dist" folder to Netlify')
pdf.bullet_point('Your website is live instantly!')
pdf.bullet_point('Custom domain: Add in Site Settings > Domain Management')
pdf.ln(3)

pdf.section_title('Option B: GitHub Pages (Free)')
pdf.bullet_point('Push your code to GitHub repository')
pdf.bullet_point('Go to Settings > Pages')
pdf.bullet_point('Source: Deploy from branch, select "main", folder "/dist"')
pdf.bullet_point('Your site will be at: username.github.io/repo-name')
pdf.ln(3)

pdf.section_title('Option C: Traditional Web Hosting')
pdf.bullet_point('Run: npm run build')
pdf.bullet_point('Upload contents of "dist" folder via FTP')
pdf.bullet_point('Upload to public_html or www folder')
pdf.ln(3)

pdf.add_page()

# Custom Domain
pdf.chapter_title('7. CUSTOM DOMAIN SETUP')

pdf.section_title('7.1 Purchase a Domain')
pdf.body_text('Recommended registrars: Namecheap, GoDaddy, Google Domains, Cloudflare')
pdf.body_text('Example: janeandjohn-wedding.com')
pdf.ln(2)

pdf.section_title('7.2 DNS Configuration')
pdf.body_text('For Netlify:')
pdf.code_block('Type: CNAME\nName: www\nValue: your-site-name.netlify.app\n\nType: A\nName: @\nValue: 75.2.60.5')

pdf.body_text('For GitHub Pages:')
pdf.code_block('Type: CNAME\nName: www\nValue: username.github.io\n\nType: A\nName: @\nValues: 185.199.108.153\n        185.199.109.153\n        185.199.110.153\n        185.199.111.153')

pdf.section_title('7.3 Enable HTTPS')
pdf.body_text('Netlify: Automatic - enabled by default')
pdf.body_text('GitHub Pages: Settings > Pages > Enforce HTTPS')
pdf.ln(5)

# Text Content
pdf.chapter_title('8. CHANGE ALL TEXT CONTENT')
pdf.body_text('All website text is in the "content" section of wedding.config.js:')
pdf.code_block('content: {\n  hero: { subtitle: "We\'re Getting Married" },\n  about: {\n    title: \'Our Story\',\n    paragraphs: [\'First paragraph...\', \'Second...\']\n  },\n  dresscode: {\n    title: \'Dress Code\',\n    description: \'Your dress code text...\',\n    ladies: \'Instructions for ladies...\',\n    gentlemen: \'Instructions for gentlemen...\'\n  },\n  // ... more sections\n}')

pdf.add_page()

# Troubleshooting
pdf.chapter_title('9. TROUBLESHOOTING')

pdf.section_title('Images not loading?')
pdf.bullet_point('Check URL is correct and publicly accessible')
pdf.bullet_point('For local images, ensure they are in public/images/ folder')
pdf.bullet_point('Use format: /images/filename.jpg (with leading slash)')
pdf.ln(2)

pdf.section_title('Changes not showing?')
pdf.bullet_point('Save the file and refresh browser')
pdf.bullet_point('Try hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)')
pdf.bullet_point('Restart dev server: stop with Ctrl+C, then npm run dev')
pdf.ln(2)

pdf.section_title('Build errors?')
pdf.bullet_point('Delete node_modules folder and package-lock.json')
pdf.bullet_point('Run: npm install')
pdf.bullet_point('Run: npm run build')
pdf.ln(5)

# File Structure
pdf.chapter_title('10. PROJECT STRUCTURE')
pdf.code_block('wedding-website/\n  src/\n    config/\n      wedding.config.js  <- MAIN CONFIG FILE\n      themes.js           <- Theme definitions\n    App.jsx              <- Main component\n    Inspiration.jsx      <- Outfit page\n  public/\n    images/              <- Your local images\n  dist/                  <- Production build\n  package.json\n  vite.config.js')

pdf.ln(10)
pdf.set_font('Helvetica', 'I', 10)
pdf.set_text_color(100, 100, 100)
pdf.cell(0, 10, 'Made with love for your special day', align='C')

# Save
pdf.output('/app/ReadMe.pdf')
print('PDF created successfully!')
