import { useEffect, useState } from 'react';
import { getReturnValues } from '../utils';

const useCountdown = (targetDate: number) => {
  if (!targetDate) {
    return [0, 0];
  }

  const [countDown, setCountDown] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    if (!targetDate) {
      return () => null;
    }

    const interval = setInterval(() => {
      setCountDown(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return getReturnValues(countDown);
};

export { useCountdown };
