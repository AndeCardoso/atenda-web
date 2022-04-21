import { TextField } from '@mui/material';
import { HTMLInputTypeAttribute } from 'react';

interface IInput {
  label: string;
  id: string;
  type: HTMLInputTypeAttribute;
  required: boolean;
}

export const AppInput = (props: IInput) => {
  const { label, id, type, required } = props;

  return (
    <TextField
      label={label}
      id={id}
      variant="outlined"
      size='small'
      type={type}
      fullWidth
      required={required} />
  );
};
