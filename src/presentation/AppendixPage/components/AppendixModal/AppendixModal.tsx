import { Box, Button, Modal } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { AppendixDataProps } from '../../pages/use-appendix-page.view-model';

import './AppendixModal.css';

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
      <Button onClick={handleOpen} variant={buttonVariant ?? 'contained'} color={buttonColor} id="appendixBTN">
        {children}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id="appendixModalBox">{/* <form onSubmit={handleSubmit(onFormClick)}> */}</Box>
      </Modal>
    </div>
  );
};

export default AppendixModal;
