import React, { FC, useCallback } from 'react';
import { ColorPicker } from 'react-canvas-color-picker';
import { useAppDispatch } from '../../../../../shared/lib/hooks/useAppDispatch';
import { colorActions } from '../../../model';

const Piker: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleChange = useCallback(({ colors }) => {
    /* странная работа либы*/
    setTimeout(() => dispatch(colorActions.addColor({ ...colors.rgba })), 500);
  }, []);
  /* ругается на ColorPicker, можно использовать любую другу либу*/
  //eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  return <ColorPicker spectrum="hsva" formats={['rgba']} onPanStart={handleChange} onPan={handleChange} />;
};

export default Piker;
