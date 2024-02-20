import { TypographyOptions } from '@mui/material/styles/createTypography';
import { PRIMARY_COLOR, SECONDARY_COLOR, LIGHT_GRAY1, LIGHT_GRAY2 } from './color';

export const FONT_FAMILY = 'Raleway';

const SPACING = 8;

export const spacing = (num: number): string => (num ? num * SPACING + 'px' : '0');

export const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1440,
  },
};

export const palette = {
  primary: {
    light: PRIMARY_COLOR,
    main: PRIMARY_COLOR,
    dark: PRIMARY_COLOR,
  },
  secondary: {
    light: SECONDARY_COLOR,
    main: SECONDARY_COLOR,
  },
  background: {
    default: '#ffffff',
  },
  neutral: {},
  lightBackground: '',
  primaryVariants: '',
  secondaryVariants: '',
};

export const typography: TypographyOptions = {
  fontFamily: FONT_FAMILY,

  h1: {
    fontWeight: 'bold',
    fontSize: '2.25rem',
    color: PRIMARY_COLOR,
  },

  h2: {
    fontWeight: 600,
    fontSize: '1.5rem',
    color: PRIMARY_COLOR,
  },

  h3: {
    fontWeight: 600,
    fontSize: '1.3125rem',
    color: PRIMARY_COLOR,
  },

  h4: {
    fontWeight: 500,
    fontSize: '1.125rem',
    color: PRIMARY_COLOR,
  },

  h5: {
    fontWeight: 500,
    fontSize: '1rem',
    color: PRIMARY_COLOR,
  },

  h6: {
    fontWeight: 500,
    fontSize: '0.875rem',
    color: PRIMARY_COLOR,
  },

  body1: {
    fontWeight: 500,
    fontSize: '0.75rem',
    color: PRIMARY_COLOR,
  },

  body2: {
    fontWeight: 'lighter',
    fontSize: '0.625rem',
  },

  subtitle1: {
    fontWeight: 600,
    fontSize: '1rem',
    color: LIGHT_GRAY2,
  },

  subtitle2: {
    fontWeight: 'normal',
    fontSize: '0.75rem',
    color: LIGHT_GRAY1,
  },
};
