/**
 * Wedding Website Configuration
 * 
 * Edit this file to customize your wedding website.
 * All text, dates, images, and colors can be changed here.
 */

export const weddingConfig = {
  // ============================================
  // COUPLE INFORMATION
  // ============================================
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

  // ============================================
  // WEDDING DATE & VENUE
  // ============================================
  wedding: {
    date: 'December 31, 2025',
    venue: {
      name: 'The Grand Estate',
      location: 'Countryside',
      mapUrl: 'https://maps.google.com',
      description: 'Join us at this beautiful countryside estate, the perfect setting to celebrate this next chapter with family and friends.'
    }
  },

  // ============================================
  // PASSWORD PROTECTION
  // ============================================
  auth: {
    password: 'wedding25',
    // Set to false to disable password protection
    enabled: true
  },

  // ============================================
  // THEME SELECTION
  // Available themes: 'sage', 'blush', 'dustyBlue', 'gold', 'lavender'
  // ============================================
  theme: 'sage',

  // ============================================
  // IMAGES (Unsplash URLs or local paths)
  // ============================================
  images: {
    hero: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80',
    couple: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
    venue: 'https://images.unsplash.com/photo-1674924258890-f4a5d99bb28c?w=800&q=80',
    accommodation: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    parking: 'https://images.unsplash.com/photo-1621447578052-cd681fbac80c?w=800&q=80',
    flowers: 'https://images.unsplash.com/photo-1767552659473-9a541393de94?w=1920&q=80'
  },

  // ============================================
  // EXTERNAL LINKS
  // ============================================
  links: {
    rsvpForm: 'https://forms.google.com',
    photoAlbum: 'https://drive.google.com',
    venueMap: 'https://maps.google.com'
  },

  // ============================================
  // SCHEDULE / PROGRAM
  // ============================================
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

  // ============================================
  // SECTION CONTENT
  // ============================================
  content: {
    hero: {
      subtitle: "We're Getting Married"
    },
    about: {
      title: 'Our Story',
      paragraphs: [
        "We're two souls who found each other through a shared love of adventure, laughter, and life's beautiful little moments.",
        "After years of creating memories together, we're ready to begin our greatest adventure yet — marriage. We couldn't be more excited to share this special day with our loved ones.",
        "Thank you for being part of our journey!"
      ]
    },
    accommodation: {
      title: 'Accommodation',
      description: "For guests wishing to stay overnight, we've arranged comfortable accommodation close to the venue. Feel free to contact us for details or to reserve a room — we'll be happy to help!"
    },
    rsvp: {
      title: 'RSVP',
      description: "Please take a moment to let us know if you'll be joining the celebration. Your response helps us prepare everything for your comfort — we can't wait to hear from you!",
      buttonText: 'Fill Out RSVP Form'
    },
    dresscode: {
      title: 'Dress Code',
      description: "Our wedding will blend casual elegance with a relaxed atmosphere. We'd love it if you'd match your outfit to our earthy, natural color palette.",
      ladies: 'Ladies: Flowing dresses, skirts, or smart trousers in soft natural tones.',
      gentlemen: 'Gentlemen: Light shirts in neutral tones. Trousers in beige, brown, or black. A vest or blazer is optional — comfort is key!'
    },
    parking: {
      title: 'Parking',
      description: "Plenty of parking is available right at the venue. There's a large meadow with space for all guests' vehicles, and additional parking along the road."
    },
    photos: {
      title: 'Share Your Photos',
      description: "While our photographer will capture the day beautifully, we'd love to see your candid moments too! Share your photos and videos — in return, we'll share the official album with you.",
      linkText: 'Upload to Shared Album'
    },
    gifts: {
      title: 'Gifts',
      paragraphs: [
        'Your presence at our wedding is the greatest gift of all.',
        "If you'd like to give a gift, we would be grateful for a contribution toward our new home or honeymoon adventure.",
        'Thank you for being part of our story!'
      ]
    },
    contact: {
      title: 'Contact Us',
      description: "Have a question? Need clarification on anything? Don't hesitate to reach out!"
    },
    footer: {
      tagline: 'Made with love for our special day'
    }
  },

  // ============================================
  // INSPIRATION PAGE
  // ============================================
  inspiration: {
    title: 'Outfit Inspiration',
    description: "Get inspired for our special day! We love soft, natural tones that complement the earthy, romantic atmosphere of our celebration.",
    tips: [
      'Avoid bright white or black — opt for softer, natural tones.',
      "Comfortable shoes are a must — we'll be celebrating on grass and in a barn.",
      'Bring a light layer for the evening — it can get cool after sunset.',
      'Feel free to add personal touches — accessories, flowers, or a fun hat!'
    ],
    images: [
      { src: 'https://images.unsplash.com/photo-1617880828721-a507efe5e27f?w=500&q=80', alt: 'Woman in sage dress', type: 'ladies' },
      { src: 'https://images.unsplash.com/photo-1529635229076-82fefed713c4?w=500&q=80', alt: 'Man in elegant suit', type: 'gentlemen' },
      { src: 'https://images.unsplash.com/photo-1700462247101-76451f07191b?w=500&q=80', alt: 'Woman in blue dress', type: 'ladies' },
      { src: 'https://images.unsplash.com/photo-1656367924249-321cc26c0f02?w=500&q=80', alt: 'Man in casual elegant attire', type: 'gentlemen' },
      { src: 'https://images.unsplash.com/photo-1687156572207-b6649b806b41?w=500&q=80', alt: 'Wedding guests in green', type: 'ladies' },
      { src: 'https://images.unsplash.com/photo-1667846068421-0a3d8a57506d?w=500&q=80', alt: 'Man in formal wear', type: 'gentlemen' }
    ]
  }
};

export default weddingConfig;
