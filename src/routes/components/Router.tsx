import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Container, Stack } from '@mui/material';
import { Timer } from '../../Pages/Timer';
import { ColorPiker } from '../../Pages/ColorPiker';

const Router: React.FC = () => {
  return (
    <Container style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Stack spacing={1} direction="row" justifyContent="center">
        <NavLink to="/timer" activeClassName="active">
          Таймер
        </NavLink>
        <NavLink to="/colorPiker" activeClassName="active">
          Палитра
        </NavLink>
      </Stack>
      <Switch>
        <Route component={Timer} exact path="/timer" />
        <Route component={ColorPiker} exact path="/colorPiker" />
      </Switch>
    </Container>
  );
};

export default Router;
