import { Theme } from '@mui/material';
import { CSSProperties } from '@mui/material/styles/createMixins';
import { ComponentNameToClassKey } from '@mui/material/styles/overrides';

type IClassesGlobais = {
  [Name in keyof ComponentNameToClassKey]?: {
    [key: string]: CSSProperties;
  };
};

const GetClasses = (theme: Theme) => {
  const classes: IClassesGlobais = {
    MuiTypography: {
      '&.colorPrimaryLight': {
        color: theme.palette.primary.light,
      },
      '&.colorWhite': {
        color: 'white',
      },
    },
    MuiGrid: {
      '&.textAlignLeft': {
        textAlign: 'left',
      },
      '&.noPy': {
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
  };

  return classes;
};

export default GetClasses;
