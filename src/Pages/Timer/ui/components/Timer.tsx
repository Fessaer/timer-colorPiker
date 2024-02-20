import React, { FC, useCallback, useState } from 'react';
import { Card, Box } from '@mui/material';
import TimeViewer from '../TimeViewer';
import { addMinutes } from '../../utils';

const Timer: FC = () => {
  const [counter, setСounter] = useState('');
  const [formCounter, setFormCounter] = useState(0);

  const onFormSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setСounter('');
      setFormCounter(+counter);
    },
    [counter],
  );

  return (
    <Card>
      <Box p={3}>
        <form onSubmit={onFormSubmit}>
          <input
            value={counter}
            onChange={(time) => setСounter(time.target.value)}
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
          />
        </form>
      </Box>
      <TimeViewer time={addMinutes(formCounter)} />
    </Card>
  );
};

export default Timer;
