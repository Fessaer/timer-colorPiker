import React, { FC } from 'react';
import { Card, Box } from '@mui/material';
import ModalPiker from './components/ModalPiker/ModalPiker';
import ColorList from './components/ColorList/ColorList';

const ColorPiker: FC = () => {
  return (
    <Card>
      <Box p={1}>
        <ModalPiker />
        <ColorList />
      </Box>
    </Card>
  );
};

export default ColorPiker;
