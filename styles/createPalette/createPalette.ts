import { Mode } from '../useTheme/types';
import { ProductType } from '@store/productReducer';

import common from '../colors/common';

// Values will be set once Branding update completed by design
export const dark = {
  text: {
    primary: common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: common.black,
    default: '#303030',
  },
};

export const light = {
  text: {
    primary: '#4A4A4A',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: '#767676',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    paper: common.white,
    default: '#303030',
  },
};

export const dcomPrimaryColors = {
  light: '#106ad6',
  main: '#0E5AB6',
  dark: '#0a4387',
  contrastText: common.white,
};

export const tcomPrimaryColors = {
  light: '#f7ba54',
  main: '#f5a623',
  dark: '#e18e05',
  contrastText: common.white,
};

export default function createPalette(productType: ProductType, mode: Mode) {
  const palette = mode === 'dark' ? dark : light;
  // dcom blue will be default primary
  const primary =
    productType === 'tcom' ? tcomPrimaryColors : dcomPrimaryColors;

  return {
    ...palette,
    common,
    primary,
    type: mode,
    branding: {
      dictionary: '#0E5AB6',
      thesaurus: '#f5a623',
      yellow: '#F7CF46',
    },
    error: {
      light: '',
      main: '#C70F30',
      dark: '',
      contrastText: common.white,
    },
    grey: {
      100: '#f3f3f3',
      200: '#e1e1e1',
      300: '#b6b6b6',
      400: '#767676',
      500: '#4a4a4a',
      600: '#1a1a1a',
    },
  };
}
