import React from 'react';

// Components
import ThemeContext from '../useTheme/ThemeContext';

// Types
import { Theme } from '../useTheme/types';

export interface ThemeProviderProps {
  theme: Theme;
  children: React.ReactNode;
}

const ThemeProvider = ({ theme, children }: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
