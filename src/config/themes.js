/**
 * Wedding Website Theme Configurations
 * 
 * Each theme includes:
 * - Primary colors (6 shades)
 * - Accent colors
 * - Color palette for dress code display
 */

export const themes = {
  // ============================================
  // SAGE GREEN - Natural, Earthy, Organic
  // ============================================
  sage: {
    name: 'Sage Green',
    description: 'Natural, earthy tones perfect for garden or rustic weddings',
    colors: {
      primary: {
        50: '#f6f7f4',
        100: '#e8ebe3',
        200: '#d6dccb',
        300: '#b8c4a4',
        400: '#9aab7f',
        500: '#7d9161',
        600: '#65774d',
        700: '#505f3f',
        800: '#424d36',
        900: '#38422f',
        950: '#1c2217'
      },
      accent: {
        light: '#faf3e6',
        medium: '#e5c9a8',
        dark: '#c9a962'
      }
    },
    palette: [
      { name: 'Light Sage', color: '#d6dccb' },
      { name: 'Sage', color: '#9aab7f' },
      { name: 'Deep Sage', color: '#65774d' },
      { name: 'Cream', color: '#faf3e6' },
      { name: 'Warm Beige', color: '#e5c9a8' },
      { name: 'Soft Gold', color: '#c9a962' }
    ]
  },

  // ============================================
  // BLUSH PINK - Romantic, Soft, Feminine
  // ============================================
  blush: {
    name: 'Blush Pink',
    description: 'Romantic and soft, perfect for elegant celebrations',
    colors: {
      primary: {
        50: '#fdf5f5',
        100: '#fce8e8',
        200: '#fad4d4',
        300: '#f5b3b3',
        400: '#ec8b8b',
        500: '#df6464',
        600: '#c94a4a',
        700: '#a83c3c',
        800: '#8c3535',
        900: '#753232',
        950: '#3f1616'
      },
      accent: {
        light: '#fff5f5',
        medium: '#fecaca',
        dark: '#b45858'
      }
    },
    palette: [
      { name: 'Blush', color: '#fad4d4' },
      { name: 'Rose', color: '#ec8b8b' },
      { name: 'Dusty Rose', color: '#c94a4a' },
      { name: 'Ivory', color: '#fffaf0' },
      { name: 'Champagne', color: '#f7e7ce' },
      { name: 'Mauve', color: '#e0b0b0' }
    ]
  },

  // ============================================
  // DUSTY BLUE - Classic, Serene, Elegant
  // ============================================
  dustyBlue: {
    name: 'Dusty Blue',
    description: 'Classic and serene, ideal for coastal or formal weddings',
    colors: {
      primary: {
        50: '#f4f7fa',
        100: '#e6ecf2',
        200: '#d3dde8',
        300: '#b4c7d8',
        400: '#8fabc4',
        500: '#7193b2',
        600: '#5c7a99',
        700: '#4d657d',
        800: '#435568',
        900: '#3a4858',
        950: '#262f3a'
      },
      accent: {
        light: '#f0f5fa',
        medium: '#c5d5e5',
        dark: '#6b8aa8'
      }
    },
    palette: [
      { name: 'Powder Blue', color: '#d3dde8' },
      { name: 'Dusty Blue', color: '#8fabc4' },
      { name: 'Slate', color: '#5c7a99' },
      { name: 'Ivory', color: '#fffff0' },
      { name: 'Silver', color: '#d8dfe6' },
      { name: 'Navy', color: '#3a4858' }
    ]
  },

  // ============================================
  // GOLD - Luxurious, Glamorous, Timeless
  // ============================================
  gold: {
    name: 'Golden',
    description: 'Luxurious and glamorous for grand celebrations',
    colors: {
      primary: {
        50: '#fdfbf4',
        100: '#faf5e4',
        200: '#f4e8c4',
        300: '#ebd69a',
        400: '#e0be6e',
        500: '#d4a64a',
        600: '#c08b3e',
        700: '#a06d35',
        800: '#835832',
        900: '#6c492c',
        950: '#3d2616'
      },
      accent: {
        light: '#fffef5',
        medium: '#f5e6c8',
        dark: '#b8860b'
      }
    },
    palette: [
      { name: 'Champagne', color: '#f4e8c4' },
      { name: 'Gold', color: '#e0be6e' },
      { name: 'Antique Gold', color: '#c08b3e' },
      { name: 'Ivory', color: '#fffff0' },
      { name: 'Cream', color: '#fffdd0' },
      { name: 'Bronze', color: '#a06d35' }
    ]
  },

  // ============================================
  // LAVENDER - Whimsical, Dreamy, Enchanting
  // ============================================
  lavender: {
    name: 'Lavender',
    description: 'Whimsical and dreamy for enchanting celebrations',
    colors: {
      primary: {
        50: '#f9f7fc',
        100: '#f3eef9',
        200: '#e9e0f4',
        300: '#d7c8eb',
        400: '#bfa6dd',
        500: '#a684cc',
        600: '#9068b8',
        700: '#7a549f',
        800: '#664783',
        900: '#553d6b',
        950: '#362248'
      },
      accent: {
        light: '#faf8fc',
        medium: '#e2d4f0',
        dark: '#8b6aae'
      }
    },
    palette: [
      { name: 'Lilac', color: '#e9e0f4' },
      { name: 'Lavender', color: '#bfa6dd' },
      { name: 'Wisteria', color: '#9068b8' },
      { name: 'Ivory', color: '#fffff5' },
      { name: 'Blush', color: '#fce4ec' },
      { name: 'Plum', color: '#664783' }
    ]
  }
};

/**
 * Get theme by name
 * @param {string} themeName - Theme name (sage, blush, dustyBlue, gold, lavender)
 * @returns {object} Theme configuration
 */
export const getTheme = (themeName) => {
  return themes[themeName] || themes.sage;
};

/**
 * Get all available theme names
 * @returns {string[]} Array of theme names
 */
export const getThemeNames = () => Object.keys(themes);

export default themes;
