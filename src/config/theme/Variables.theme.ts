import { Theme } from '@mui/material/styles';

interface IVariants {
  [key: number]: string;
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    neutral: Palette['primary'];
    lightBackground: string;
    primaryVariants: IVariants;
    secondaryVariants: IVariants;
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
    lightBackground: string;
    primaryVariants: IVariants;
    secondaryVariants: IVariants;
  }
}

export const PALETTE = {
  primary: {
    dark: '#000028',
    main: '#01134f',
    light: '#39387c',
  },
  secondary: {
    dark: '#00389d',
    main: '#4061cf',
    light: '#798eff',
  },
  success: {
    dark: '#0093a2',
    main: '#02c4d3',
    light: '#64f7ff',
  },
  warning: {
    dark: '#C15100',
    main: '#FA8022',
    light: '#FFB154',
  },
  error: {
    dark: '#b0002c',
    main: '#e84855',
    light: '#FF7c81',
  },
  info: {
    dark: '#00458e',
    main: '#276fbf',
    light: '#669df2',
  },
  neutral: {
    dark: '#2A4753',
    main: '#55727F',
    light: '#83A0AE',
  },
  text: {
    primary: '#29373D',
    secondary: '#6C8E9D',
    disabled: '#B6C6CE',
  },
  lightBackground: '#f5f5fa',
  primaryVariants: {
    50: '#E7E9F6',
    100: '#C3C9EA',
    200: '#9BA6DB',
    300: '#7383CD',
    400: '#5468C3',
    500: '#324DB8',
    600: '#2C45AE',
    700: '#223BA2',
    800: '#183196',
    900: '#4A5A90', // PrimaryMain
  },
  secondaryVariants: {
    50: '#FFE3E8',
    100: '#FEB9C7',
    200: '#FB8BA2',
    300: '#F85B7D',
    400: '#F33461',
    500: '#EE0046', // SecondaryMain
    600: '#DE0046',
    700: '#C90044',
    800: '#B60042',
    900: '#94003F',
  },
};

export const BREAKPOINTSVALUES = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1800,
};

export const FONTWEIGHT = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

export const FONTS = {
  sizes: {
    size50: 0.688,
    size75: 0.75,
    size100: 0.875,
    size200: 1,
    size300: 1.125,
    size400: 1.25,
    size500: 1.375,
    size600: 1.5,
    size700: 1.75,
    size800: 2,
    size900: 2.25,
    size1000: 2.5,
    size1100: 2.813,
    size1200: 3.125,
    size1300: 3.75,
  },
  medida: 'rem',
};

export const APPBARHEIGHT = {
  phone: 48,
  desktop: 80,
};

export const GETMARGINS = (theme: Theme) => {
  return {
    container: {
      xs: theme.spacing(2.5),
      sm: theme.spacing(3),
      md: theme.spacing(5),
      lg: theme.spacing(10),
      xl: theme.spacing(20),
    },
    gap: {
      xs: theme.spacing(1.5),
      sm: theme.spacing(2),
      md: theme.spacing(3),
      lg: theme.spacing(3),
      xl: theme.spacing(4),
    },
  };
};

export const GETINPUTOPTIONS = (theme: Theme) => {
  return {
    padding: '16px',
    textColor: theme.palette.text.primary,
    placeholderColor: theme.palette.text.secondary,
    borderRadius: '24px',
    borderColor: theme.palette.text.secondary,
    labelColor: theme.palette.text.secondary,
    hover: {
      textColor: theme.palette.text.primary,
      placeholderColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      labelColor: theme.palette.primary.main,
    },
    focused: {
      textColor: theme.palette.text.primary,
      placeholderColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      labelColor: theme.palette.primary.main,
    },
    disabled: {
      textColor: theme.palette.text.secondary,
    },
    readOnly: {
      textColor: theme.palette.text.primary,
      borderColor: theme.palette.text.disabled,
      labelColor: theme.palette.text.disabled,
    },
  };
};

export const GETBUTTONOPTIONS = (theme: Theme) => {
  return {
    borderRadius: '40px',
    sizeSmall: {
      size: '4px 16px',
      extraSmall: {
        fontSize: '14px',
        size: '4px 12px',
      },
    },
    sizeMedium: {
      fontSize: '16px',
      size: '8px 24px',
    },
    sizeLarge: {
      size: '16px 32px',
      extraLarge: {
        fontSize: '18px',
        size: '24px 48px',
      },
    },
    textButton: {
      color: theme.palette.primary.light,
      backgroundColor: 'transparent',
      border: '1px solid transparent',
      hover: {
        backgroundColor: theme.palette.primaryVariants[50],
        border: '1px solid ' + theme.palette.primaryVariants[50],
        color: theme.palette.primary.light,
      },
      disabled: {
        color: theme.palette.text.disabled,
      },
    },
    outlinedButton: {
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
      border: '1px solid ' + theme.palette.primary.main,
      hover: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        border: '1px solid ' + theme.palette.primary.main,
      },
      disabled: {
        backgroundColor: theme.palette.text.disabled,
        color: theme.palette.text.secondary,
        borderColor: theme.palette.text.disabled,
      },
    },
    containedButtonPrimary: {
      color: 'white',
      backgroundColor: theme.palette.primary.light,
      hover: {
        backgroundColor: theme.palette.primary.dark,
      },
      disabled: {
        backgroundColor: theme.palette.text.disabled,
        color: theme.palette.text.secondary,
      },
    },
    containedButtonSecondary: {
      color: theme.palette.primary.light,
      backgroundColor: theme.palette.primaryVariants[50],
      boxShadow: 'unset',
      hover: {
        backgroundColor: theme.palette.primary.light,
        color: 'white',
      },
      disabled: {
        backgroundColor: theme.palette.text.disabled,
        color: theme.palette.text.secondary,
      },
    },
  };
};
