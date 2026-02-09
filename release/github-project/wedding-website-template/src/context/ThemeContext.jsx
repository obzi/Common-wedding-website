import React, { createContext, useContext, useState, useEffect } from 'react';
import { getTheme, themes } from '../config/themes';
import { weddingConfig } from '../config/wedding.config';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(weddingConfig.theme || 'sage');
  const [themeData, setThemeData] = useState(getTheme(currentTheme));

  useEffect(() => {
    const theme = getTheme(currentTheme);
    setThemeData(theme);
    applyThemeColors(theme);
  }, [currentTheme]);

  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  return (
    <ThemeContext.Provider value={{ 
      currentTheme, 
      themeData, 
      changeTheme,
      availableThemes: Object.keys(themes)
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Apply theme colors to CSS variables
export function applyThemeColors(theme) {
  const root = document.documentElement;
  const { colors } = theme;
  
  // Set primary colors
  Object.entries(colors.primary).forEach(([shade, value]) => {
    root.style.setProperty(`--color-primary-${shade}`, value);
  });
  
  // Set accent colors
  root.style.setProperty('--color-accent-light', colors.accent.light);
  root.style.setProperty('--color-accent-medium', colors.accent.medium);
  root.style.setProperty('--color-accent-dark', colors.accent.dark);
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeContext;
