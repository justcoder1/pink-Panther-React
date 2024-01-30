import React, { useId } from 'react';
import { useForm } from 'react-hook-form';
import { AppendixDataProps } from '../../pages/use-appendix-page.view-model';

import './AppendixModal.css';
import { Box, Button, Modal, Typography } from '@mui/material';

interface AppendixModalProps {
  buttonVariant?: 'text' | 'contained';
  buttonColor?: 'success' | 'primary';
  onFormClick: (data: AppendixDataProps) => void;
  data?: AppendixDataProps;
}

const AppendixModal: React.FC<React.PropsWithChildren<AppendixModalProps>> = ({
  children,
  buttonVariant,
  buttonColor,
  onFormClick,
  data,
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <Button
        key={`appendix_${useId()}`}
        onClick={handleOpen}
        variant={buttonVariant ?? 'contained'}
        color={buttonColor}
        id="appendixBTN"
      >
        {children}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="appendixModalBox">
          {/* <form onSubmit={handleSubmit(onFormClick)}>
            <div className="form-control">
              <label>Email</label>
              <input type="text" name="email" {...register('email')} />
            </div>
            <div className="form-control">
              <label>Password</label>
              <input type="password" name="password" {...register('password')} />
            </div>
            <div className="form-control">
              <label></label>
              <button type="submit">Login</button>
            </div>
          </form> */}
        </Box>
      </Modal>
    </div>
  );
};

export default AppendixModal;
