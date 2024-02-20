import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Piker from '../Piker/Piker';
import { useAppDispatch } from '../../../../../shared/lib/hooks/useAppDispatch';
import { IColor, colorActions, getColorsSelector } from '../../../model';
import { defaultColor } from '../../const';
import { useCallback, useState } from 'react';
import { useAppSelector } from '../../../../../shared/lib/hooks/useAppSelector';

const style = {
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 1,
};

const ModalPiker: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [color, setColor] = useState<IColor>(defaultColor);
  const colors = useAppSelector(getColorsSelector);

  const dispatch = useAppDispatch();

  const handleChange = useCallback(({ colors }) => {
    setColor({ ...colors.rgba });
  }, []);

  const handleOpen = () => {
    if (!colors.length) {
      dispatch(colorActions.addColor(color));
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    dispatch(colorActions.addColor(color));
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Добавить цвет
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Piker onChange={handleChange} />
      </Modal>
    </div>
  );
};

export default ModalPiker;
