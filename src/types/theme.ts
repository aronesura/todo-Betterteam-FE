// material-ui
import { SimplePaletteColorOptions, PaletteColorOptions } from '@mui/material/styles';

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

export type PaletteThemeProps = {
  primary: SimplePaletteColorOptions;
  secondary: SimplePaletteColorOptions;
  error: SimplePaletteColorOptions;
  warning: SimplePaletteColorOptions;
  info: SimplePaletteColorOptions;
  success: SimplePaletteColorOptions;
  grey: PaletteColorOptions;
};

export type CustomShadowProps = {
  button: string;
  text: string;
  z1: string;
  z2: string;
  primary: string;
  primaryButton: string;
  secondary: string;
  secondaryButton: string;
  error: string;
  errorButton: string;
  warning: string;
  warningButton: string;
  info: string;
  infoButton: string;
  success: string;
  successButton: string;
  grey: string;
  greyButton: string;
};
