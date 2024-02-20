import React, { FC } from 'react';
import { Router } from '../routes/index';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../config/theme';
import './App.css';

const App: FC = () => {
  return (
    //eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
