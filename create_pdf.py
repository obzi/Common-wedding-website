from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font('Helvetica', 'B', 12)
        self.set_text_color(101, 119, 77)
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
    
    def numbered_step(self, number, text):
        self.set_font('Helvetica', 'B', 10)
        self.set_text_color(101, 119, 77)
        self.cell(8, 6, f'{number}.', ln=False)
        self.set_font('Helvetica', '', 10)
        self.set_text_color(50, 50, 50)
        self.multi_cell(0, 6, text)

pdf = PDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()

# Title
pdf.set_font('Helvetica', 'B', 24)
pdf.set_text_color(101, 119, 77)
pdf.cell(0, 20, 'Wedding Website Template', align='C', ln=True)
pdf.set_font('Helvetica', '', 12)
pdf.set_text_color(100, 100, 100)
pdf.cell(0, 10, 'Complete Beginner Guide', align='C', ln=True)
pdf.ln(10)

# ============================================================
# SECTION 1: PREREQUISITES
# ============================================================
pdf.chapter_title('1. WHAT YOU NEED BEFORE STARTING WEBSITE LOCALLY ON YOUR PC')
pdf.body_text('Before you can run your wedding website, you need to install Node.js on your computer. This is a one-time setup.')

pdf.section_title('Step 1: Download Node.js')
pdf.numbered_step(1, 'Go to: https://nodejs.org')
pdf.numbered_step(2, 'Click the big green button that says "LTS" (Long Term Support)')
pdf.numbered_step(3, 'Download the installer for your operating system')
pdf.ln(2)

pdf.section_title('Step 2: Install Node.js')
pdf.body_text('Windows:')
pdf.numbered_step(1, 'Double-click the downloaded file (node-v...msi)')
pdf.numbered_step(2, 'Click "Next" through all screens')
pdf.numbered_step(3, 'Click "Install" and wait for completion')
pdf.numbered_step(4, 'Click "Finish"')
pdf.ln(2)

pdf.body_text('Mac:')
pdf.numbered_step(1, 'Double-click the downloaded file (node-v...pkg)')
pdf.numbered_step(2, 'Follow the installation wizard')
pdf.numbered_step(3, 'Enter your Mac password when asked')
pdf.ln(5)

# ============================================================
# SECTION 2: OPENING COMMAND LINE
# ============================================================
pdf.chapter_title('2. HOW TO OPEN COMMAND LINE')

pdf.section_title('On Windows:')
pdf.numbered_step(1, 'Press Windows key + R on your keyboard')
pdf.numbered_step(2, 'Type: cmd')
pdf.numbered_step(3, 'Press Enter')
pdf.body_text('A black window will open - this is the Command Prompt (CMD).')
pdf.ln(2)

pdf.section_title('Alternative method (Windows):')
pdf.numbered_step(1, 'Click the Start menu (Windows icon)')
pdf.numbered_step(2, 'Type: cmd')
pdf.numbered_step(3, 'Click on "Command Prompt"')
pdf.ln(2)

pdf.section_title('On Mac:')
pdf.numbered_step(1, 'Press Command + Space to open Spotlight')
pdf.numbered_step(2, 'Type: terminal')
pdf.numbered_step(3, 'Press Enter')
pdf.body_text('A white/black window will open - this is the Terminal.')
pdf.ln(5)

# ============================================================
# SECTION 3: NAVIGATING TO PROJECT FOLDER
# ============================================================
pdf.add_page()
pdf.chapter_title('3. HOW TO NAVIGATE TO YOUR PROJECT FOLDER')

pdf.body_text('After opening Command Prompt/Terminal, you need to navigate to the folder where you saved your wedding website files.')

pdf.section_title('Step 1: Find your project folder location')
pdf.body_text('First, figure out where your wedding website folder is. For example:')
pdf.bullet_point('Windows: C:\\Users\\YourName\\Downloads\\wedding-website-template')
pdf.bullet_point('Mac: /Users/YourName/Downloads/wedding-website-template')
pdf.ln(3)

pdf.section_title('Step 2: Navigate using the "cd" command')
pdf.body_text('"cd" stands for "change directory". It moves you into a folder.')
pdf.ln(2)

pdf.body_text('Windows example:')
pdf.code_block('cd C:\\Users\\YourName\\Downloads\\wedding-website-template')

pdf.body_text('Mac example:')
pdf.code_block('cd /Users/YourName/Downloads/wedding-website-template')

pdf.body_text('TIP: On Windows, you can also:')
pdf.numbered_step(1, 'Open the project folder in File Explorer')
pdf.numbered_step(2, 'Click in the address bar at the top')
pdf.numbered_step(3, 'Type: cmd')
pdf.numbered_step(4, 'Press Enter - CMD opens directly in that folder!')
pdf.ln(3)

pdf.section_title('Step 3: Verify you are in the correct folder')
pdf.body_text('To make sure you are in the right place, type:')
pdf.code_block('dir')
pdf.body_text('(On Mac, type: ls)')
pdf.ln(2)
pdf.body_text('You should see these files listed:')
pdf.bullet_point('package.json')
pdf.bullet_point('vite.config.js')
pdf.bullet_point('src (folder)')
pdf.bullet_point('index.html')
pdf.body_text('If you see these files, you are in the correct folder!')
pdf.ln(5)

# ============================================================
# SECTION 4: RUNNING THE WEBSITE
# ============================================================
pdf.add_page()
pdf.chapter_title('4. RUNNING YOUR WEDDING WEBSITE')

pdf.section_title('Step 1: Install dependencies (first time only)')
pdf.body_text('This downloads all the required files. You only need to do this once.')
pdf.code_block('npm install')
pdf.body_text('Wait until you see a message that installation is complete. This may take 1-2 minutes.')
pdf.ln(3)

pdf.section_title('Step 2: Start the development server')
pdf.body_text('This command starts your website locally:')
pdf.code_block('npm run dev')
pdf.body_text('You will see a message like:')
pdf.code_block('VITE v5.x.x  ready in xxx ms\n\n  > Local:   http://localhost:3001/')
pdf.ln(2)

pdf.section_title('Step 3: Open your website')
pdf.body_text('Open your web browser (Chrome, Firefox, Edge, Safari) and go to:')
pdf.code_block('http://localhost:3001')
pdf.body_text('Your wedding website should now be visible!')
pdf.ln(3)

pdf.section_title('Step 4: Stop the server')
pdf.body_text('When you are done, go back to the Command Prompt/Terminal and press:')
pdf.code_block('Ctrl + C')
pdf.body_text('This stops the server. You can start it again anytime with: npm run dev')
pdf.ln(5)

# ============================================================
# SECTION 5: CUSTOMIZATION
# ============================================================
pdf.add_page()
pdf.chapter_title('5. HOW TO CUSTOMIZE YOUR WEBSITE')

pdf.body_text('All customization is done in ONE file: src/config/wedding.config.js')
pdf.body_text('Open this file with any text editor (Notepad, VS Code, Sublime Text, etc.)')
pdf.ln(3)

pdf.section_title('5.1 Change Names & Date')
pdf.code_block('couple: {\n  partner1: { name: \'Emma\', phone: \'+1 555-0123\' },\n  partner2: { name: \'James\', phone: \'+1 555-0124\' },\n  displayName: \'Emma & James\'\n},\nwedding: {\n  date: \'June 15, 2025\',\n  venue: { name: \'Rose Garden\', location: \'California\' }\n}')

pdf.section_title('5.2 Change Password')
pdf.code_block('auth: {\n  password: \'YourSecretPassword\',\n  enabled: true  // Set to false to disable password\n}')

pdf.section_title('5.3 Change Images')
pdf.body_text('Use Unsplash URLs or local images (put in public/images/ folder):')
pdf.code_block('images: {\n  hero: \'https://images.unsplash.com/photo-xxx\',\n  couple: \'/images/our-photo.jpg\',  // Local image\n}')

pdf.section_title('5.4 Change Website Theme')
pdf.body_text('5 beautiful themes available: sage, blush, dustyBlue, gold, lavender')
pdf.code_block('theme: \'blush\'  // Changes entire website color scheme')

pdf.section_title('5.5 Hide Theme Selector Button')
pdf.body_text('Once you have chosen your final theme, hide the floating button:')
pdf.code_block('showThemeSelector: false')

pdf.section_title('5.6 Change External Links')
pdf.code_block('links: {\n  rsvpForm: \'https://forms.google.com/your-form\',\n  photoAlbum: \'https://drive.google.com/your-album\',\n  venueMap: \'https://maps.google.com/your-location\'\n}')

# ============================================================
# SECTION 6: BUILD FOR PRODUCTION
# ============================================================
pdf.add_page()
pdf.chapter_title('6. BUILD FOR PRODUCTION (UPLOADING TO INTERNET)')

pdf.body_text('When you are happy with your website and want to put it online, you need to create a "production build".')
pdf.ln(2)

pdf.section_title('Step 1: Create the build')
pdf.body_text('In Command Prompt/Terminal (make sure you are in the project folder):')
pdf.code_block('npm run build')
pdf.body_text('This creates a folder called "dist" with all your website files optimized for the internet.')
pdf.ln(3)

pdf.section_title('Step 2: Test the production build locally')
pdf.code_block('npm run preview')
pdf.body_text('Open http://localhost:3001 to test. Press Ctrl+C to stop.')
pdf.ln(5)

# ============================================================
# SECTION 7: DEPLOYMENT OPTIONS
# ============================================================
pdf.chapter_title('7. DEPLOYMENT OPTIONS (PUTTING YOUR SITE ONLINE)')

pdf.section_title('Option A: Netlify (Easiest - Free)')
pdf.numbered_step(1, 'Go to netlify.com and create a free account')
pdf.numbered_step(2, 'Click "Add new site" > "Deploy manually"')
pdf.numbered_step(3, 'Drag and drop the "dist" folder from your computer')
pdf.numbered_step(4, 'Your website is live instantly!')
pdf.numbered_step(5, 'For custom domain: Site Settings > Domain Management')
pdf.ln(3)

pdf.section_title('Option B: GitHub Pages (Free)')
pdf.numbered_step(1, 'Push your code to a GitHub repository')
pdf.numbered_step(2, 'Go to repository Settings > Pages')
pdf.numbered_step(3, 'Source: Deploy from branch')
pdf.numbered_step(4, 'Select branch "main", folder "/dist"')
pdf.numbered_step(5, 'Your site will be at: username.github.io/repo-name')
pdf.ln(3)

pdf.section_title('Option C: Traditional Web Hosting (FTP)')
pdf.numbered_step(1, 'Run: npm run build')
pdf.numbered_step(2, 'Connect to your hosting via FTP (FileZilla, etc.)')
pdf.numbered_step(3, 'Upload all files from the "dist" folder')
pdf.numbered_step(4, 'Upload to public_html or www folder')
pdf.ln(5)

# ============================================================
# SECTION 8: COMMAND SUMMARY
# ============================================================
pdf.add_page()
pdf.chapter_title('8. COMMAND SUMMARY (QUICK REFERENCE)')

pdf.body_text('Here are all the commands you need:')
pdf.ln(2)

pdf.section_title('One-time setup:')
pdf.code_block('npm install')
pdf.body_text('Downloads all required files. Run this once after downloading the project.')
pdf.ln(2)

pdf.section_title('Development (editing your website):')
pdf.code_block('npm run dev')
pdf.body_text('Starts local server at http://localhost:3001')
pdf.body_text('Changes you make will appear automatically in the browser.')
pdf.body_text('Press Ctrl+C to stop.')
pdf.ln(2)

pdf.section_title('Build for production:')
pdf.code_block('npm run build')
pdf.body_text('Creates optimized files in the "dist" folder for uploading online.')
pdf.ln(2)

pdf.section_title('Preview production build:')
pdf.code_block('npm run preview')
pdf.body_text('Test how your website will look online before uploading.')
pdf.ln(5)

# ============================================================
# SECTION 9: TROUBLESHOOTING
# ============================================================
pdf.chapter_title('9. TROUBLESHOOTING')

pdf.section_title('"npm" is not recognized as a command')
pdf.bullet_point('Node.js is not installed. Go back to Section 1 and install it.')
pdf.bullet_point('After installing, close and reopen Command Prompt/Terminal.')
pdf.ln(2)

pdf.section_title('Images not loading?')
pdf.bullet_point('Check URL is correct and publicly accessible')
pdf.bullet_point('For local images, put them in public/images/ folder')
pdf.bullet_point('Use format: /images/filename.jpg (with leading slash)')
pdf.ln(2)

pdf.section_title('Changes not showing?')
pdf.bullet_point('Save the config file')
pdf.bullet_point('Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)')
pdf.bullet_point('If still not working, stop server (Ctrl+C) and run npm run dev again')
pdf.ln(2)

pdf.section_title('Build errors?')
pdf.bullet_point('Delete node_modules folder')
pdf.bullet_point('Delete package-lock.json file')
pdf.bullet_point('Run: npm install')
pdf.bullet_point('Run: npm run build')
pdf.ln(5)

# ============================================================
# SECTION 10: PROJECT STRUCTURE
# ============================================================
pdf.add_page()
pdf.chapter_title('10. PROJECT STRUCTURE')

pdf.body_text('Understanding your project files:')
pdf.ln(2)

pdf.code_block('wedding-website/\n  src/\n    config/\n      wedding.config.js  <- YOUR MAIN CONFIG FILE\n      themes.js           <- Theme color definitions\n    App.jsx              <- Main website page\n    Inspiration.jsx      <- Outfit inspiration page\n    components/          <- UI components\n  public/\n    images/              <- Put your local images here\n  dist/                  <- Production build (created by npm run build)\n  package.json           <- Project settings\n  vite.config.js         <- Server settings (port 3001)')

pdf.ln(5)

# ============================================================
# SECTION 11: CUSTOM DOMAIN
# ============================================================
pdf.chapter_title('11. CUSTOM DOMAIN SETUP')

pdf.section_title('11.1 Purchase a Domain')
pdf.body_text('Recommended registrars: Namecheap, GoDaddy, Google Domains, Cloudflare')
pdf.body_text('Example: janeandjohn-wedding.com (typically $10-15/year)')
pdf.ln(2)

pdf.section_title('11.2 DNS Configuration for Netlify')
pdf.code_block('Type: CNAME\nName: www\nValue: your-site-name.netlify.app\n\nType: A\nName: @\nValue: 75.2.60.5')

pdf.section_title('11.3 DNS Configuration for GitHub Pages')
pdf.code_block('Type: CNAME\nName: www\nValue: username.github.io\n\nType: A\nName: @\nValues: 185.199.108.153\n        185.199.109.153\n        185.199.110.153\n        185.199.111.153')

pdf.section_title('11.4 Enable HTTPS (Security)')
pdf.body_text('Netlify: Automatic - enabled by default')
pdf.body_text('GitHub Pages: Settings > Pages > Check "Enforce HTTPS"')
pdf.ln(10)

# Final note
pdf.set_font('Helvetica', 'I', 10)
pdf.set_text_color(100, 100, 100)
pdf.cell(0, 10, 'Made with love for your special day', align='C')

# Save
pdf.output('/app/ReadMe.pdf')
print('PDF created successfully!')
