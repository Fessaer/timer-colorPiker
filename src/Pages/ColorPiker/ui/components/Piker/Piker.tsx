import React, { FC } from 'react';
import { ColorPicker, Colors } from 'react-canvas-color-picker';
import { defaultColor } from '../../const';

interface IColorPickerChangeEvent {
  colors: Colors;
  canvasId: string;
}

interface IPikerProps {
  onChange: (arg: IColorPickerChangeEvent) => void;
}

const Piker: FC<IPikerProps> = ({ onChange }): JSX.Element => {
  return (
    /* ругается на ColorPicker, можно использовать любую другу либу*/
    //eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    <ColorPicker initialColor={defaultColor} spectrum="hsva" formats={['rgba']} onPanEnd={onChange} />
  );
};

export default Piker;
