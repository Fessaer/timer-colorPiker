import { createTheme } from '@mui/material/styles';
import { typography, breakpoints, FONT_FAMILY, spacing, palette } from './theme.config';
import { PRIMARY_COLOR, SECONDARY_COLOR, LIGHT_GRAY2, LIGHT_GRAY3, LIGHT_GRAY4 } from './color';

const theme = createTheme({
  spacing,
  breakpoints,
  typography,
  palette,
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            backgroundColor: 'rgba(192,192,222,0.15)',
          },
          color: PRIMARY_COLOR,
          fontWeight: 500,
          fontSize: '1rem',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: FONT_FAMILY,
          color: '#636D76',
          fontSize: '1rem',
          fontWeight: 500,
        },
        asterisk: {
          fontFamily: FONT_FAMILY,
          fontWeight: 600,
          marginTop: '-8px',
          fontSize: 30,
          color: SECONDARY_COLOR,
          '&$error': {
            color: SECONDARY_COLOR,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          display: 'flex',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          '&.Mui-disabled': {
            backgroundColor: LIGHT_GRAY2,
            color: '#ffffff',
          },
        },
        text: {
          '&.Mui-disabled': {
            backgroundColor: 'rgb(255, 255, 255, 00)',
            color: LIGHT_GRAY2,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          '&.spacing-1': {
            padding: '14px 8px 14px 8px',
          },
        },
        sizeSmall: {
          padding: `6px ${spacing(1)} 6px ${spacing(1)}`,
        },
        head: {
          fontSize: '14px',
          color: LIGHT_GRAY3,
          fontWeight: 'normal',
          padding: `10px ${spacing(1)} 2px ${spacing(1)}`,
        },
        footer: {
          borderBottom: '0px',
        },
        body: {
          fontSize: '16px',
          fontWeight: 500,
          color: PRIMARY_COLOR,
          padding: `10px ${spacing(1)} 10px ${spacing(1)}`,
          borderBottom: '1px solid #F9F9F9',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        toolbar: {
          paddingLeft: '0px',
          float: 'left',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        contained: {
          marginLeft: '0px',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-disabled.Mui-checked': {
            color: PRIMARY_COLOR,
          },
          '&.Mui-disabled': {
            color: LIGHT_GRAY4,
          },
        },
        colorSecondary: {
          '&.Mui-disabled.Mui-checked': {
            color: PRIMARY_COLOR,
          },
          '&.Mui-disabled': {
            color: LIGHT_GRAY4,
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: PRIMARY_COLOR,
          },
        },
        colorSecondary: {
          '&.Mui-disabled': {
            color: PRIMARY_COLOR,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          opacity: 0,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            color: SECONDARY_COLOR,
          },
          fontWeight: 600,
          fontSize: '1rem',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          minWidth: '0px !important',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          border: 'none',
          borderBottom: `1px solid #E3E8F1`,
          boxShadow: 'none',
          '&.Mui-expanded': {
            margin: '0px',
          },
          '&:before': {
            display: 'none',
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '0 24px',
          margin: '0px',
          minHeight: '50px',
          '&$expanded': {
            minHeight: '40px',
          },
          '&:before': {
            display: 'none',
          },
        },
        content: {
          margin: '0px',
          '&$expanded': {
            margin: '0px',
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: '0px',
        },
      },
    },
    MuiCollapse: {
      styleOverrides: {
        wrapper: {
          paddingBottom: '10px',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          backgroundColor: SECONDARY_COLOR,
          opacity: '0.5',
        },
        thumb: {
          color: SECONDARY_COLOR,
        },
      },
    },
  },
});

export default theme;
