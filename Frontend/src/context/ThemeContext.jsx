import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true; // Default to dark theme
  });

  const [isDynamicLayout, setIsDynamicLayout] = useState(() => {
    const savedLayout = localStorage.getItem('dynamicLayout');
    return savedLayout ? savedLayout === 'true' : true; // Default to dynamic layout
  });

  const [isSplashEnabled, setIsSplashEnabled] = useState(() => {
    const savedSplash = localStorage.getItem('splashCursor');
    return savedSplash ? savedSplash === 'true' : true; // Default to enabled
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('light', !isDark);
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('dynamicLayout', isDynamicLayout.toString());
  }, [isDynamicLayout]);

  useEffect(() => {
    localStorage.setItem('splashCursor', isSplashEnabled.toString());
  }, [isSplashEnabled]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const toggleDynamicLayout = () => {
    setIsDynamicLayout(prev => !prev);
  };

  const toggleSplashCursor = () => {
    setIsSplashEnabled(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ 
      isDark, 
      toggleTheme,
      isDynamicLayout,
      toggleDynamicLayout,
      isSplashEnabled,
      toggleSplashCursor
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 