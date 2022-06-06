import { TextField } from '@mui/material';
import { HTMLInputTypeAttribute } from 'react';
import { Controller } from 'react-hook-form';

interface IInput {
  control: any;
  label: string;
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  helper?: string;
  required: boolean;
}

export const AppInput = ({ label, id, type, required, control, placeholder, helper }: IInput) => {
  return (
    <Controller
      control={control}
      rules={{ required }}
      name={id}
      render={({
        field: { onChange, value }, fieldState: { error }
      }) => (
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          label={label}
          id={id}
          error={!!error}
          helperText={error ? helper : null}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder} />
      )}/>
  );
};
