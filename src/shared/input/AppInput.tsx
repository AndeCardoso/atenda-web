import { Visibility, VisibilityOff } from '@material-ui/icons';
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { HTMLInputTypeAttribute, useState } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

interface IInput {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<FieldValues | any>;
  label: string;
  name: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  helper?: string;
  pattern?: RegExp;
  required: boolean;
}

export const AppInput = ({ label, name, type, required, control, placeholder, helper, pattern }: IInput) => {
  return (
    <Controller
      control={control}
      rules={{ required, pattern }}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          label={label}
          error={!!error}
          helperText={error ? helper : undefined}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
      )}
    />
  );
};

interface IState {
  password: string;
  showPassword: boolean;
}

export const AppInputPassword = ({ label, name, required, control, helper, pattern }: IInput) => {
  const [values, setValues] = useState<IState>({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Controller
      control={control}
      rules={{ required, pattern }}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl variant="outlined" size="small" fullWidth>
          <InputLabel htmlFor="password">Senha</InputLabel>
          <OutlinedInput
            id={name}
            label={label}
            type={values.showPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            error={!!error}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {error ? (
            <FormHelperText error id={label}>
              {helper}
            </FormHelperText>
          ) : (
            <></>
          )}
        </FormControl>
      )}
    />
  );
};
