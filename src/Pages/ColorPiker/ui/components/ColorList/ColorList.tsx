import React, { FC } from 'react';
import { useAppSelector } from '../../../../../shared/lib/hooks/useAppSelector';
import { getColorsSelector } from '../../../model';
import ColorItem from '../ColorItem/ColorItem';
import { Stack } from '@mui/material';

const ColorList: FC = (): JSX.Element => {
  const colors = useAppSelector(getColorsSelector);

  return (
    <Stack direction="row" spacing={1} alignItems="flex-end">
      {colors.map((item, index) => (
        <ColorItem key={`${JSON.stringify(item)}${index.toString()}`} color={item} index={index} />
      ))}
    </Stack>
  );
};

export default ColorList;
