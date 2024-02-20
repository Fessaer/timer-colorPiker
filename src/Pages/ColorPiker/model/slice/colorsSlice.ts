import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

const initialState: IColor[] = [];

const colorsSlice = createSlice({
  name: 'colors',
  initialState,
  reducers: {
    addColor: (state, action: PayloadAction<IColor>) => {
      return [...state, action.payload];
    },
    deleteColor: (state, action: PayloadAction<number>) => {
      return state.filter((el, index) => action.payload !== index);
    },
  },
});

export const { actions: colorActions } = colorsSlice;
export const { reducer: colorReducer } = colorsSlice;
