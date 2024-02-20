import React, { FC } from 'react';
import { Box } from '@mui/material';
import { useCountdown } from './useCountdown';

interface TimeViewerProps {
  time: number;
}

const TimeViewer: FC<TimeViewerProps> = ({ time }) => {
  const [minutes, seconds] = useCountdown(time);

  const isMessage = !!time && minutes <= 0 && seconds <= 0;

  const message = isMessage ? 'Готово!' : `${minutes}: ${seconds}`;

  return (
    <Box p={3}>
      <div>Countdown: {message} </div>
    </Box>
  );
};

export default TimeViewer;
