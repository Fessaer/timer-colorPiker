import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { colorReducer as colors } from '../Pages/ColorPiker/model';

const store = configureStore({
  reducer: { colors },
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production',
});

/* также можно добавить redux-persist  для сохранения стейта */

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
