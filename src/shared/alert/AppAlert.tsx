import { Alert, AlertColor, Snackbar } from '@mui/material';
import { useState } from 'react';

export interface IAlert {
  message: string;
  isOpen: boolean;
  type: AlertColor;
}

export const AppAlert = (props: IAlert): JSX.Element => {
  const { isOpen, type, message } = props;

  const [open, setOpen] = useState<boolean>(isOpen ? true : false);

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}>
      <Alert severity={type} sx={{ width: '100%'}} onClose={() => setOpen(false)}>
        {message}
      </Alert>
    </Snackbar>
  );
};