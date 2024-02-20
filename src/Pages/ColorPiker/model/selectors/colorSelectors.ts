import { IColor } from '../slice/colorsSlice';

interface ISchemeState {
  colors: IColor[];
}

export const getColorsSelector = (state: ISchemeState): IColor[] => state.colors;
