/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║                    WEDDING WEBSITE CONFIGURATION                            ║
 * ║                                                                              ║
 * ║  Edit this file to customize your wedding website.                          ║
 * ║  All settings are in one place for easy customization.                      ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

export const weddingConfig = {
  
  // ══════════════════════════════════════════════════════════════════════════
  // COUPLE INFORMATION
  // ══════════════════════════════════════════════════════════════════════════
  couple: {
    partner1: {
      name: 'Jane',
      phone: '+1 (234) 567-890'
    },
    partner2: {
      name: 'John',
      phone: '+1 (234) 567-891'
    },
    // Combined display name (shown in hero & navigation)
    displayName: 'Jane & John'
  },

  // ══════════════════════════════════════════════════════════════════════════
  // WEDDING DATE & VENUE
  // ══════════════════════════════════════════════════════════════════════════
  wedding: {
    date: 'December 31, 2025',
    venue: {
      name: 'The Grand Estate',
      location: 'Countryside',
      description: 'Join us at this beautiful countryside estate, the perfect setting to celebrate this next chapter with family and friends.'
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  // PASSWORD PROTECTION
  // ══════════════════════════════════════════════════════════════════════════
  auth: {
    // Password to access the website
    password: 'WeddingPassword',
    // Set to false to disable password protection entirely
    enabled: true
  },

  // ══════════════════════════════════════════════════════════════════════════
  // THEME SETTINGS
  // ══════════════════════════════════════════════════════════════════════════
  // Available themes: 'sage', 'blush', 'dustyBlue', 'gold', 'lavender'
  theme: 'sage',
  
  // Show/hide the floating theme selector button (bottom-right corner)
  // Set to false once you've chosen your final theme
  showThemeSelector: true,

  // ══════════════════════════════════════════════════════════════════════════
  // DRESS CODE COLOR PALETTE
  // Customize the 6 colors shown in the Dress Code section
  // These are independent from the website theme
  // ══════════════════════════════════════════════════════════════════════════
  dressCodeColors: [
    { name: 'Light Sage', color: '#d6dccb' },
    { name: 'Sage', color: '#9aab7f' },
    { name: 'Deep Sage', color: '#65774d' },
    { name: 'Cream', color: '#faf3e6' },
    { name: 'Warm Beige', color: '#e5c9a8' },
    { name: 'Soft Gold', color: '#c9a962' }
  ],

  // ══════════════════════════════════════════════════════════════════════════
  // IMAGES
  // Use Unsplash URLs or local paths (put files in /public/images/)
  // For local: '/images/your-photo.jpg'
  // ══════════════════════════════════════════════════════════════════════════
  images: {
    hero: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80',
    couple: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80',
    venue: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80',
    accommodation: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    parking: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    flowers: 'https://images.unsplash.com/photo-1561128290-005859246e58?auto=format&fit=crop&w=1920&q=80'
  },

  // ══════════════════════════════════════════════════════════════════════════
  // EXTERNAL LINKS
  // ══════════════════════════════════════════════════════════════════════════
  links: {
    // RSVP form (Google Forms, Typeform, Tally, etc.)
    rsvpForm: 'https://forms.google.com',
    // Shared photo album (Google Drive, Dropbox, iCloud, etc.)
    photoAlbum: 'https://drive.google.com',
    // Venue location on map
    venueMap: 'https://maps.google.com'
  },

  // ══════════════════════════════════════════════════════════════════════════
  // SCHEDULE / PROGRAM
  // Add, remove, or edit timeline items
  // ══════════════════════════════════════════════════════════════════════════
  schedule: [
    { time: '11:00 AM', event: 'Guest Arrival & Welcome Drinks' },
    { time: '12:00 PM', event: 'Wedding Ceremony' },
    { time: '1:00 PM', event: 'Lunch & Toasts' },
    { time: '2:30 PM', event: 'Photos with the Newlyweds' },
    { time: '4:00 PM', event: 'Afternoon Tea & Games' },
    { time: '6:00 PM', event: 'Dinner Reception' },
    { time: '8:00 PM', event: 'First Dance & Cake Cutting' },
    { time: '9:00 PM', event: 'Dancing & Celebration' }
  ],

  // ══════════════════════════════════════════════════════════════════════════
  // TEXT CONTENT
  // All website text in one place
  // ══════════════════════════════════════════════════════════════════════════
  content: {
    // Hero section
    hero: {
      subtitle: "We're Getting Married"
    },
    
    // Our Story section
    about: {
      title: 'Our Story',
      paragraphs: [
        "We're two souls who found each other through a shared love of adventure, laughter, and life's beautiful little moments.",
        "After years of creating memories together, we're ready to begin our greatest adventure yet — marriage. We couldn't be more excited to share this special day with our loved ones.",
        "Thank you for being part of our journey!"
      ]
    },
    
    // Accommodation section
    accommodation: {
      title: 'Accommodation',
      description: "For guests wishing to stay overnight, we've arranged comfortable accommodation close to the venue. Feel free to contact us for details or to reserve a room — we'll be happy to help!"
    },
    
    // RSVP section
    rsvp: {
      title: 'RSVP',
      description: "Please take a moment to let us know if you'll be joining the celebration. Your response helps us prepare everything for your comfort — we can't wait to hear from you!",
      buttonText: 'Fill Out RSVP Form'
    },
    
    // Dress Code section
    dresscode: {
      title: 'Dress Code',
      description: "Our wedding will blend casual elegance with a relaxed atmosphere. We'd love it if you'd match your outfit to our earthy, natural color palette.",
      ladies: 'Flowing dresses, skirts, or smart trousers in soft natural tones.',
      gentlemen: 'Light shirts in neutral tones. Trousers in beige, brown, or black. A vest or blazer is optional — comfort is key!'
    },
    
    // Parking section
    parking: {
      title: 'Parking',
      description: "Plenty of parking is available right at the venue. There's a large meadow with space for all guests' vehicles, and additional parking along the road."
    },
    
    // Photos section
    photos: {
      title: 'Share Your Photos',
      description: "While our photographer will capture the day beautifully, we'd love to see your candid moments too! Share your photos and videos — in return, we'll share the official album with you.",
      linkText: 'Upload to Shared Album'
    },
    
    // Gifts section
    gifts: {
      title: 'Gifts',
      paragraphs: [
        'Your presence at our wedding is the greatest gift of all.',
        "If you'd like to give a gift, we would be grateful for a contribution toward our new home or honeymoon adventure.",
        'Thank you for being part of our story!'
      ]
    },
    
    // Contact section
    contact: {
      title: 'Contact Us',
      description: "Have a question? Need clarification on anything? Don't hesitate to reach out!"
    },
    
    // Footer
    footer: {
      tagline: 'Made with love for our special day'
    }
  },

  // ══════════════════════════════════════════════════════════════════════════
  // INSPIRATION PAGE
  // Outfit inspiration images and tips
  // ══════════════════════════════════════════════════════════════════════════
  inspiration: {
    title: 'Outfit Inspiration',
    description: "Get inspired for our special day! We love soft, natural tones that complement the earthy, romantic atmosphere of our celebration.",
    tips: [
      'Avoid bright white or black — opt for softer, natural tones.',
      "Comfortable shoes are a must — we'll be celebrating on grass and in a barn.",
      'Bring a light layer for the evening — it can get cool after sunset.',
      'Feel free to add personal touches — accessories, flowers, or a fun hat!'
    ],
    // Outfit images - 6 images alternating Ladies/Gentlemen
    images: [
      { src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=500&q=80', alt: 'Woman in elegant dress', type: 'ladies' },
      { src: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=500&q=80', alt: 'Man in elegant suit', type: 'gentlemen' },
      { src: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=500&q=80', alt: 'Woman in flowing dress', type: 'ladies' },
      { src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=500&q=80', alt: 'Man in business suit', type: 'gentlemen' },
      { src: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=500&q=80', alt: 'Woman fashion portrait', type: 'ladies' },
      { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80', alt: 'Man casual elegant', type: 'gentlemen' }
    ]
  }
};

export default weddingConfig;
