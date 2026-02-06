import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart } from 'lucide-react';
import { Button } from './components/ui/button';

// Free license images from Unsplash
const outfitImages = [
  {
    src: 'https://images.unsplash.com/photo-1617880828721-a507efe5e27f?w=500&q=80',
    alt: 'Woman in sage dress',
    type: 'ladies'
  },
  {
    src: 'https://images.unsplash.com/photo-1529635229076-82fefed713c4?w=500&q=80',
    alt: 'Man in elegant suit',
    type: 'gentlemen'
  },
  {
    src: 'https://images.unsplash.com/photo-1700462247101-76451f07191b?w=500&q=80',
    alt: 'Woman in blue dress',
    type: 'ladies'
  },
  {
    src: 'https://images.unsplash.com/photo-1656367924249-321cc26c0f02?w=500&q=80',
    alt: 'Man in casual elegant attire',
    type: 'gentlemen'
  },
  {
    src: 'https://images.unsplash.com/photo-1687156572207-b6649b806b41?w=500&q=80',
    alt: 'Wedding guests in green',
    type: 'ladies'
  },
  {
    src: 'https://images.unsplash.com/photo-1667846068421-0a3d8a57506d?w=500&q=80',
    alt: 'Man in formal wear',
    type: 'gentlemen'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Inspiration() {
  return (
    <div className="min-h-screen bg-cream-50" data-testid="inspiration-page">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-sage-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/#" 
            className="inline-flex items-center gap-2 text-sage-600 hover:text-sage-800 transition-colors"
            data-testid="back-link"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Wedding</span>
          </Link>
          <Heart className="w-5 h-5 text-sage-400" />
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-serif font-semibold text-sage-800 mb-4">
            Outfit Inspiration
          </h1>
          <p className="text-sage-600 max-w-xl mx-auto">
            Get inspired for our special day! We love soft, natural tones that complement 
            the earthy, romantic atmosphere of our celebration.
          </p>
        </motion.div>

        {/* Color Palette Reminder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-12"
        >
          <p className="text-sm text-sage-600 mb-4 text-center font-medium">
            Suggested Colors
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Light Sage', color: '#d6dccb' },
              { name: 'Sage', color: '#9aab7f' },
              { name: 'Deep Sage', color: '#65774d' },
              { name: 'Cream', color: '#faf3e6' },
              { name: 'Warm Beige', color: '#e5c9a8' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <div 
                  className="w-10 h-10 rounded-full shadow border-2 border-white" 
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs text-sage-600 mt-1">{item.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4 md:gap-6"
        >
          {outfitImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
              data-testid={`outfit-image-${index}`}
            >
              <div className="aspect-[3/4] bg-sage-100 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <span className={`
                  inline-block px-3 py-1 rounded-full text-xs font-medium
                  ${image.type === 'ladies' 
                    ? 'bg-sage-100/90 text-sage-700' 
                    : 'bg-cream-100/90 text-sage-700'
                  }
                  backdrop-blur-sm
                `}>
                  {image.type === 'ladies' ? 'Ladies' : 'Gentlemen'}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-sage-50 rounded-2xl p-6 md:p-8"
        >
          <h2 className="text-xl font-serif font-semibold text-sage-800 mb-4">
            Helpful Tips
          </h2>
          <ul className="space-y-3 text-sage-700">
            <li className="flex items-start gap-3">
              <span className="text-sage-400">•</span>
              <span>Avoid bright white or black — opt for softer, natural tones.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-400">•</span>
              <span>Comfortable shoes are a must — we'll be celebrating on grass and in a barn.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-400">•</span>
              <span>Bring a light layer for the evening — it can get cool after sunset.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sage-400">•</span>
              <span>Feel free to add personal touches — accessories, flowers, or a fun hat!</span>
            </li>
          </ul>
        </motion.div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link 
            to="/#" 
            data-testid="back-to-wedding-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Button size="lg" variant="primary">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Wedding
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-sage-100 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sage-600 text-sm">
            Jane & John • December 31, 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
