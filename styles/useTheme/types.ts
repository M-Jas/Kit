export interface Theme {
  palette: Palette;
  spacing: Spacing;
  typography: Typography;
  shape: Shape;
}

export type Mode = 'light' | 'dark';

export interface Palette {
  common: {
    black: string;
    white: string;
  };
  primary: PaletteColorTypes;
  error: PaletteColorTypes;
  text: {
    primary: string;
    secondary: string;
    disabled?: string;
    hint?: string;
    icon?: string;
  };
  background: {
    paper: string;
    default: string;
  };
  branding: {
    dictionary: string;
    thesaurus: string;
    yellow: string;
  };
  grey: {
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
  };
  divider: string;
  type: Mode;
}

export interface PaletteColorTypes {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

export interface Spacing {
  hairlineWidth: number;
  unit: number;
  window: {
    height: number;
    width: number;
  };
}

export interface Shape {
  borderRadius: number;
}

export interface Typography {
  title: BaseTypographyStyle;
  subtitle2Bold: BaseTypographyStyle;
  subtitle2: BaseTypographyStyle;
  subtitle1: BaseTypographyStyle;
  body2: BaseTypographyStyle;
  body1: BaseTypographyStyle;
  button: BaseTypographyStyle;
  caption: BaseTypographyStyle;
  overline: BaseTypographyStyle;
}

export interface BaseTypographyStyle {
  fontSize: number;
  color: string;
}
