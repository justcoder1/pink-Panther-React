import { Button } from '@mui/base';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react';

export interface ConfirmProps {
  headerText?: string;
  bodyText?: string;
  buttonText?: {accept: string, reject: string};
  onClick: (action: boolean) => void
}

const ConfirmDialog: React.FC<ConfirmProps> = ({ headerText, bodyText, buttonText, onClick }) => {
  const [open, setOpen] = React.useState(false);

  const confirmDialogClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (action: boolean = false): void => {
    onClick(action);
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no
            apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Disagree</Button>
          <Button onClick={() => handleClose(true)} autoFocus>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ConfirmDialog;
