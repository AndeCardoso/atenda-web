import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField } from '@mui/material';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ufBrStates } from 'shared/utils/constants/selects';

interface IClientForm {
  name: string;
  phone: string;
  email: string;
  address: IAddress;
}

interface IAddress {
  street: string;
  number: number;
  city: string;
  state: string;
  cep: string;
}

export const FormClient = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IClientForm>();
  const onSubmit: SubmitHandler<IClientForm> = data => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box flexGrow={1}>
          <Grid container
            spacing={1} 
            width="100%">
            <Grid item xs={3}>
              <TextField label="Nome"
                {...register('name', { required: true })}
                id="name"
                variant="outlined"
                size='small'
                inputMode='text'
                type="text"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Telefone"
                {...register('phone', { required: true })}
                placeholder="Ex.: (57) 9 9726-5136"
                id="phone"
                size='small'
                inputMode='tel'
                type="tel"
                variant="outlined"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={4}>
              <TextField label="E-mail"
                {...register('email')}
                id="email"
                size='small'
                inputMode='email'
                type="email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Rua"
                {...register('address.street')}
                id="address"
                placeholder="Ex.: Av. Brasil..."
                size='small'
                inputMode='text'
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={1}>
              <TextField label="Numero"
                {...register('address.number')}
                id="address"
                size='small'
                inputMode='text'
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={2.5}>
              <TextField label="CEP"
                {...register('address.cep')}
                id="cep"
                size='small'
                inputMode='text'
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={2.5}>
              <TextField label="Cidade"
                {...register('address.city')}
                id="address"
                size='small'
                inputMode='text'
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={1}>
              <FormControl
                fullWidth
                size='small'
              >
                <InputLabel id="ufState-select-label">UF</InputLabel>
                <Select label="UF"
                  {...register('address.state')}
                  labelId="ufState-select-label"
                  id="state"
                  size='small'
                  variant="outlined"
                >
                  {
                    ufBrStates.map(state => (
                      <MenuItem value={state.VALUE} key={state.index}>
                        {state.VIEW}
                      </MenuItem>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Box
            display="flex"
            justifyContent="flex-end"
            padding="10px"
          >
            <Button
              variant='contained'
              type='submit'
            >Salvar
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};
