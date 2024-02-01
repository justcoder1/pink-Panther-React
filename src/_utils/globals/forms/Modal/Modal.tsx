import React, { useState } from 'react';
import { Box, Button, Modal } from '@mui/material';

export interface ModalProps {
    buttonVariant?: 'text' | 'contained';
    buttonColor?: 'success' | 'primary';
    modalButton: string;
    modalMinWidth?: number;
    modalMaxWidth?: number;
}

const FormModal: React.FC<React.PropsWithChildren<ModalProps>> = ({buttonVariant, buttonColor, modalButton, modalMinWidth, modalMaxWidth }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  
    return (
      <>
        <Button
          onClick={handleOpen}
          variant={buttonVariant ?? 'contained'}
          color={buttonColor}
        >
          {modalButton}
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: modalMinWidth | 400,
            maxWidth: modalMaxWidth | 400,
            backgroundColor: 'white',
            border: '2px solid #b61588',
            borderRadius: '10px',
            padding: '4em',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px',
          }}>
            
          {/* <form onSubmit={handleSubmit(onFormClick)}> */}
            
          </Box>
        </Modal>
      </>
    );
};

export default FormModal;