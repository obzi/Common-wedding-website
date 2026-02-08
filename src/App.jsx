import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, MapPin, Phone, Heart, Calendar, 
  Camera, Gift, Car, Home, Users, Clock, Shirt, Palette
} from 'lucide-react';
import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import Inspiration from './Inspiration';
import { weddingConfig } from './config/wedding.config';
import { getTheme, themes } from './config/themes';
import { applyThemeColors } from './context/ThemeContext';

// Get configuration
const config = weddingConfig;
const IMAGES = config.images;

const sections = [
  { id: 'about', label: 'Our Story', icon: Heart },
  { id: 'place', label: 'Venue', icon: MapPin },
  { id: 'accommodation', label: 'Stay', icon: Home },
  { id: 'rsvp', label: 'RSVP', icon: Users },
  { id: 'dresscode', label: 'Dress Code', icon: Shirt },
  { id: 'program', label: 'Schedule', icon: Clock },
  { id: 'parking', label: 'Parking', icon: Car },
  { id: 'photos', label: 'Photos', icon: Camera },
  { id: 'gifts', label: 'Gifts', icon: Gift },
  { id: 'contacts', label: 'Contact', icon: Phone }
];

const PASSWORD_KEY = 'wedding_auth';
const CORRECT_PASSWORD = config.auth.password;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

// Custom hook for scroll animation
function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

// Section wrapper with animation
function Section({ id, children, className = '' }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className={`${className}`}
    >
      {children}
    </motion.section>
  );
}

// Section Card component
function SectionCard({ children, className = '' }) {
  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-theme-100 p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}

// Section Title
function SectionTitle({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {Icon && (
        <div className="w-10 h-10 rounded-full bg-theme-100 flex items-center justify-center">
          <Icon className="w-5 h-5 text-theme-600" />
        </div>
      )}
      <h2 className="text-2xl md:text-3xl font-serif font-semibold text-theme-800">
        {children}
      </h2>
    </div>
  );
}

// Authorization Gate
function AuthorizationGate({ children }) {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(PASSWORD_KEY);
    const urlParams = new URLSearchParams(window.location.search);
    const urlPassword = urlParams.get('access');

    if (stored === CORRECT_PASSWORD || urlPassword === CORRECT_PASSWORD) {
      if (urlPassword === CORRECT_PASSWORD) {
        localStorage.setItem(PASSWORD_KEY, CORRECT_PASSWORD);
      }
      setAuthorized(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      localStorage.setItem(PASSWORD_KEY, CORRECT_PASSWORD);
      setAuthorized(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (authorized) return children;

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-4 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.9)), url(${IMAGES.flowers})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md" data-testid="auth-card">
          <CardContent className="space-y-6 p-8">
            <div className="text-center">
              <Heart className="w-12 h-12 text-theme-500 mx-auto mb-4" />
              <h1 className="text-3xl font-serif font-semibold text-theme-800 mb-2">
                Welcome
              </h1>
              <p className="text-theme-600">
                Please enter the password to access our wedding website.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                data-testid="password-input"
                className={error ? 'border-red-400 shake' : ''}
              />
              {error && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-500 text-sm text-center"
                >
                  Incorrect password. Please try again.
                </motion.p>
              )}
              <Button type="submit" className="w-full" data-testid="submit-btn">
                Enter
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

// Navigation
function Navigation({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    // Close mobile menu first
    setMenuOpen(false);
    
    // Small delay to allow menu to close, then scroll
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        // Get the actual header height dynamically
        const isMobile = window.innerWidth < 768;
        // Offset to show the card edge with breathing room above
        // Mobile: need more offset, Desktop: slightly less
        const headerOffset = isMobile ? 160 : 110;
        
        // Get element's position relative to document top
        const rect = el.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetPosition = rect.top + scrollTop - headerOffset;
        
        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth'
        });
        history.replaceState(null, '', `#${id}`);
      }
    }, 200);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-theme-50/90 backdrop-blur-sm'
      }`}
      data-testid="navigation"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex flex-col"
            data-testid="logo"
          >
            <span className="text-lg md:text-xl font-serif font-semibold text-theme-700 leading-tight">
              {config.couple.displayName}
            </span>
            <span className="text-xs text-theme-500 tracking-widest uppercase">
              Wedding Day
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-theme-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-btn"
          >
            {menuOpen ? <X className="w-6 h-6 text-theme-700" /> : <Menu className="w-6 h-6 text-theme-700" />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-1">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollToSection(s.id)}
                  className="px-2.5 py-2 text-sm font-medium text-theme-700 hover:text-theme-900 hover:bg-theme-100 rounded-lg transition-all"
                  data-testid={`nav-${s.id}`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-theme-200"
            >
              <ul className="py-4 space-y-1">
                {sections.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => scrollToSection(s.id)}
                      className="w-full flex items-center gap-3 px-4 py-3 text-theme-700 hover:bg-theme-100 rounded-lg transition-all"
                      data-testid={`mobile-nav-${s.id}`}
                    >
                      <s.icon className="w-5 h-5 text-theme-500" />
                      {s.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.4);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-[70vh] md:h-[85vh] overflow-hidden" data-testid="hero-section">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${IMAGES.hero})`,
          transform: `translateY(${offset}px)`,
          willChange: 'transform'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 bg-white/70 backdrop-blur-sm px-8 py-10 rounded-3xl shadow-xl"
        >
          <p className="text-theme-700 tracking-[0.3em] uppercase text-sm md:text-base font-medium">
            {config.content.hero.subtitle}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-theme-800">
            {config.couple.displayName}
          </h1>
          <div className="flex items-center justify-center gap-4 text-theme-700">
            <span className="w-12 h-px bg-sage-400" />
            <Calendar className="w-5 h-5" />
            <span className="text-lg md:text-xl font-light">{config.wedding.date}</span>
            <span className="w-12 h-px bg-sage-400" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8"
        >
          <button
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            className="animate-bounce p-3 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors"
            aria-label="Scroll down"
            data-testid="scroll-down-btn"
          >
            <svg className="w-6 h-6 text-theme-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

// Get color palette from current theme
const getCurrentTheme = () => getTheme(config.theme);

// Theme Selector Component
function ThemeSelector({ currentTheme, onThemeChange }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 min-w-[200px]"
          >
            <p className="text-sm font-medium text-gray-600 mb-3">Choose Theme</p>
            <div className="space-y-2">
              {Object.entries(themes).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => { onThemeChange(key); setIsOpen(false); }}
                  className={`w-full flex items-center gap-3 p-2 rounded-xl transition-all ${
                    currentTheme === key ? 'bg-gray-100' : 'hover:bg-gray-50'
                  }`}
                  data-testid={`theme-${key}`}
                >
                  <div 
                    className="w-6 h-6 rounded-full border-2 border-white shadow"
                    style={{ backgroundColor: theme.colors.primary[500] }}
                  />
                  <span className="text-sm font-medium text-gray-700">{theme.name}</span>
                  {currentTheme === key && (
                    <span className="ml-auto text-xs text-gray-500">✓</span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all"
        aria-label="Change theme"
        data-testid="theme-selector-btn"
      >
        <Palette className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
}

// Main content
function WeddingContent() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(config.theme);
  const themeData = getTheme(currentTheme);

  // Apply theme colors when theme changes
  useEffect(() => {
    applyThemeColors(themeData);
  }, [themeData]);

  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeroSection />
      <ThemeSelector currentTheme={currentTheme} onThemeChange={setCurrentTheme} />
      
      <main className="max-w-4xl mx-auto px-4 py-12 space-y-16 md:space-y-24">
        {/* About Section */}
        <Section id="about">
          <SectionCard>
            <SectionTitle icon={Heart}>{config.content.about.title}</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 space-y-4 text-theme-700">
                {config.content.about.paragraphs.map((p, i) => (
                  <p key={i} className={i === config.content.about.paragraphs.length - 1 ? 'font-medium text-theme-800' : ''}>
                    {p}
                  </p>
                ))}
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={IMAGES.couple}
                  alt="Couple"
                  className="w-full h-72 md:h-80 object-cover rounded-2xl shadow-lg"
                  data-testid="couple-image"
                  onError={(e) => { e.target.style.display = 'block'; e.target.src = 'https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=800&q=80'; }}
                />
              </div>
            </div>
          </SectionCard>
        </Section>

        {/* Venue Section */}
        <Section id="place">
          <SectionCard>
            <SectionTitle icon={MapPin}>Venue & Date</SectionTitle>
            <div className="space-y-6">
              <div className="bg-theme-50 rounded-2xl p-6 text-center">
                <p className="text-lg text-theme-700 mb-2">Save the Date</p>
                <p className="text-3xl md:text-4xl font-serif font-semibold text-theme-800">
                  {config.wedding.date}
                </p>
                <p className="text-theme-600 mt-2">{config.wedding.venue.name} • {config.wedding.venue.location}</p>
              </div>
              <img
                src={IMAGES.venue}
                alt="Wedding venue"
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                data-testid="venue-image"
              />
              <p className="text-theme-700">
                {config.wedding.venue.description}
              </p>
              <a
                href={config.links.venueMap}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-theme-600 hover:text-theme-800 font-medium transition-colors"
                data-testid="venue-map-link"
              >
                <MapPin className="w-4 h-4" />
                View on Google Maps
              </a>
            </div>
          </SectionCard>
        </Section>

        {/* Accommodation Section */}
        <Section id="accommodation">
          <SectionCard>
            <SectionTitle icon={Home}>{config.content.accommodation.title}</SectionTitle>
            <div className="space-y-6">
              <p className="text-theme-700">
                {config.content.accommodation.description}
              </p>
              <img
                src={IMAGES.accommodation}
                alt="Accommodation"
                className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-lg"
                data-testid="accommodation-image"
              />
            </div>
          </SectionCard>
        </Section>

        {/* RSVP Section */}
        <Section id="rsvp">
          <SectionCard className="bg-theme-50/80">
            <SectionTitle icon={Users}>{config.content.rsvp.title}</SectionTitle>
            <div className="space-y-6">
              <p className="text-theme-700">
                {config.content.rsvp.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={config.links.rsvpForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="rsvp-link"
                >
                  <Button size="lg">
                    {config.content.rsvp.buttonText}
                  </Button>
                </a>
              </div>
            </div>
          </SectionCard>
        </Section>

        {/* Dresscode Section */}
        <Section id="dresscode">
          <SectionCard>
            <SectionTitle icon={Shirt}>{config.content.dresscode.title}</SectionTitle>
            <div className="space-y-6">
              <div className="space-y-4 text-theme-700">
                <p>
                  {config.content.dresscode.description}
                </p>
                <p>
                  <strong className="text-theme-800">Ladies:</strong> {config.content.dresscode.ladies}
                </p>
                <p>
                  <strong className="text-theme-800">Gentlemen:</strong> {config.content.dresscode.gentlemen}
                </p>
              </div>

              {/* Color Palette */}
              <div className="bg-white rounded-2xl shadow-md p-6">
                <p className="text-sm text-theme-600 mb-4 text-center">Suggested Color Palette</p>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {themeData.palette.map((item, i) => (
                    <div key={i} className="flex flex-col items-center" data-testid={`color-${i}`}>
                      <div 
                        className="w-12 h-12 md:w-14 md:h-14 rounded-full shadow-md border-2 border-white" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-xs text-theme-600 mt-2 text-center">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                to="/inspiration"
                className="inline-flex items-center gap-2 text-theme-600 hover:text-theme-800 font-medium transition-colors"
                data-testid="inspiration-link"
              >
                <Camera className="w-4 h-4" />
                View Outfit Inspiration
              </Link>
            </div>
          </SectionCard>
        </Section>

        {/* Program Section */}
        <Section id="program">
          <SectionCard>
            <SectionTitle icon={Clock}>Schedule</SectionTitle>
            <div className="space-y-4">
              {config.schedule.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-theme-50 rounded-xl"
                  data-testid={`schedule-item-${i}`}
                >
                  <span className="font-semibold text-theme-800 w-24 flex-shrink-0">{item.time}</span>
                  <span className="text-theme-700">{item.event}</span>
                </motion.div>
              ))}
            </div>
          </SectionCard>
        </Section>

        {/* Parking Section */}
        <Section id="parking">
          <SectionCard>
            <SectionTitle icon={Car}>{config.content.parking.title}</SectionTitle>
            <div className="space-y-6">
              <p className="text-theme-700">
                {config.content.parking.description}
              </p>
              <img
                src={IMAGES.parking}
                alt="Parking area"
                className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-lg"
                data-testid="parking-image"
              />
            </div>
          </SectionCard>
        </Section>

        {/* Photos Section */}
        <Section id="photos">
          <SectionCard>
            <SectionTitle icon={Camera}>{config.content.photos.title}</SectionTitle>
            <div className="space-y-4 text-theme-700">
              <p>
                {config.content.photos.description}
              </p>
              <a
                href={config.links.photoAlbum}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-theme-600 hover:text-theme-800 font-medium transition-colors"
                data-testid="photo-share-link"
              >
                <Camera className="w-4 h-4" />
                {config.content.photos.linkText}
              </a>
            </div>
          </SectionCard>
        </Section>

        {/* Gifts Section */}
        <Section id="gifts">
          <SectionCard className="text-center">
            <SectionTitle icon={Gift}>{config.content.gifts.title}</SectionTitle>
            <div className="space-y-4 text-theme-700 max-w-xl mx-auto">
              {config.content.gifts.paragraphs.map((p, i) => (
                <p key={i} className={i === config.content.gifts.paragraphs.length - 1 ? 'font-medium text-theme-800' : ''}>
                  {p}
                </p>
              ))}
              <Heart className="w-8 h-8 text-theme-400 mx-auto mt-4" />
            </div>
          </SectionCard>
        </Section>

        {/* Contacts Section */}
        <Section id="contacts">
          <SectionCard>
            <SectionTitle icon={Phone}>{config.content.contact.title}</SectionTitle>
            <div className="space-y-4 text-theme-700">
              <p>
                {config.content.contact.description}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-theme-50 rounded-xl p-4">
                  <p className="font-semibold text-theme-800 mb-1">{config.couple.partner1.name}</p>
                  <a 
                    href={`tel:${config.couple.partner1.phone.replace(/\s/g, '')}`} 
                    className="text-theme-600 hover:text-theme-800 transition-colors"
                    data-testid="contact-jane"
                  >
                    {config.couple.partner1.phone}
                  </a>
                </div>
                <div className="bg-theme-50 rounded-xl p-4">
                  <p className="font-semibold text-theme-800 mb-1">{config.couple.partner2.name}</p>
                  <a 
                    href={`tel:${config.couple.partner2.phone.replace(/\s/g, '')}`} 
                    className="text-theme-600 hover:text-theme-800 transition-colors"
                    data-testid="contact-john"
                  >
                    {config.couple.partner2.phone}
                  </a>
                </div>
              </div>
            </div>
          </SectionCard>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-theme-100 py-12 mt-16" data-testid="footer">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-serif font-semibold text-theme-800 mb-2">
            {config.couple.displayName}
          </h3>
          <p className="text-theme-600">{config.wedding.date}</p>
          <div className="mt-6 flex items-center justify-center gap-2 text-theme-500 text-sm">
            <span>{config.content.footer.tagline}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          config.auth.enabled ? (
            <AuthorizationGate>
              <WeddingContent />
            </AuthorizationGate>
          ) : (
            <WeddingContent />
          )
        }
      />
      <Route path="/inspiration" element={<Inspiration />} />
    </Routes>
  );
}
