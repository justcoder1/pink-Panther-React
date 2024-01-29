import React, { useId } from 'react';
import { AppendixDataProps } from '../../pages/use-appendix-page.view-model';

import './AppendixModal.css';
import { Box, Button, Modal, Typography } from '@mui/material';

interface AppendixModalProps {
  buttonVariant?: 'text' | 'contained';
  data?: AppendixDataProps;
}

const AppendixModal: React.FC<React.PropsWithChildren<AppendixModalProps>> = ({children, buttonVariant, data}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button key={`appendix_${useId()}`} onClick={handleOpen} variant={buttonVariant ?? 'contained'} color="success" id="appendixBTN">
        {children}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box id='appendixModalBox'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            test
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default AppendixModal;
