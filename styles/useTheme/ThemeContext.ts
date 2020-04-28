import React from 'react';

// Types
import { Theme } from './types';

const ThemeContext = React.createContext<Theme | undefined>(undefined);

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext';
}

export default ThemeContext;
