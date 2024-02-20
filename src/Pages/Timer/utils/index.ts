export const addMinutes = (minutes = 0) => {
  if (!minutes) {
    return minutes;
  }
  const dateCopy = new Date();

  dateCopy.setMinutes(dateCopy.getMinutes() + minutes);

  return dateCopy.getTime();
};

export const getReturnValues = (countDown: number) => {
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [minutes, seconds];
};
