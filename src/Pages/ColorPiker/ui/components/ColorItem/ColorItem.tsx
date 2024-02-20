import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { colorActions, IColor } from '../../../model';
import { useAppDispatch } from '../../../../../shared/lib/hooks/useAppDispatch';
import CloseIcon from '@mui/icons-material/Close';

interface IColorItem {
  color: IColor;
  index: number;
}

const ColorItem: React.FC<IColorItem> = ({ color, index }) => {
  const [isHovering, setIsHovering] = useState(false);
  const dispatch = useAppDispatch();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const onDeleteColor = () => {
    dispatch(colorActions.deleteColor(index));
  };

  return (
    <Box p={1}>
      <div
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}
        style={{
          justifyContent: 'right',
          alignItems: 'flex-end',
          width: 50,
          height: 50,
          backgroundColor: `rgba(${color.r}, 
      ${color.g}, 
      ${color.b}, 
      ${color.a})`,
        }}
      >
        {isHovering && (
          <IconButton
            style={{ width: 8, height: 8, backgroundColor: 'white', position: 'relative', left: 30 }}
            aria-label="close"
            onClick={onDeleteColor}
          >
            <CloseIcon color="action" style={{ width: 10, height: 10 }} />
          </IconButton>
        )}
      </div>
    </Box>
  );
};

export default ColorItem;
