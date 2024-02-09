import { IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { MdClose } from 'react-icons/md';

import './Modal.css';

interface IntModal {
  show: boolean;
  hide?: () => void;
  title?: string;
  modalMinWidth?: number;
  modalMaxWidth?: number;
}

const AppModal: React.FC<React.PropsWithChildren<IntModal>> = ({
  show,
  hide,
  title,
  modalMinWidth,
  modalMaxWidth,
  children,
}) => {
  return (
    <>
      {show ? (
        <Stack justifyContent={'center'} alignItems={'center'} id="modalBackground">
          <Stack
            id="modalPanel"
            sx={{
              minWidth: modalMinWidth,
              maxWidth: modalMaxWidth,
            }}
          >
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={{ height: 40 }}>
              <Typography variant="h6">{title}</Typography>
              <IconButton onClick={hide}>
                <MdClose />
              </IconButton>
            </Stack>
            {children}
          </Stack>
        </Stack>
      ) : null}
    </>
  );
};

export default AppModal;
