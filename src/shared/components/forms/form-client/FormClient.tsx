import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Button,
  Grid,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  TextField } from '@mui/material';
import * as S from './styled';
import { ufBrStates } from 'shared/utils/constants';

interface IClientForm {
  cpf?: string;
  name: string;
  phone: string;
  email?: string;
  address: IAddress;
}

interface IAddress {
  street?: string;
  number?: number;
  city?: string;
  district?: string;
  state?: string;
  cep?: string;
}

export const FormClient = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IClientForm>();
  const onSubmit: SubmitHandler<IClientForm> = data => console.log(data);

  return (
    <S.FormContainer>
      <S.Title>Cadastrar Cliente</S.Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.WrapperInputs>
          <Grid
            container
            spacing={1}>
            <Grid item xs={5}>
              <TextField label="Nome"
                {...register('name', { required: true })}
                id="name"
                variant="outlined"
                size='small'
                inputMode='text'
                type="text"
                fullWidth
                required />
            </Grid>
            <Grid item xs={3.4}>
              <TextField label="Telefone"
                {...register('phone', { required: true })}
                placeholder="Ex.: (57) 9 9726-5136"
                id="phone"
                size='small'
                inputMode='tel'
                type="tel"
                variant="outlined"
                fullWidth
                required />
            </Grid>
            <Grid item xs={3.4}>
              <TextField label="CPF"
                {...register('cpf')}
                placeholder="Ex.: 041.645.987-59"
                id="cpf"
                size='small'
                inputMode='text'
                type="text"
                variant="outlined"
                fullWidth />
            </Grid>
            <Grid item xs={6.8}>
              <TextField label="E-mail"
                {...register('email')}
                id="email"
                size='small'
                inputMode='email'
                type="email"
                variant="outlined"
                fullWidth />
            </Grid>
            <S.FieldsetAddress>
              <S.LegendAddress>Endereço</S.LegendAddress>
              <Grid
                container
                spacing={1}>
                <Grid item xs={8}>
                  <TextField label="Rua"
                    {...register('address.street')}
                    id="street"
                    placeholder="Ex.: Av. Brasil..."
                    size='small'
                    inputMode='text'
                    variant="outlined"
                    fullWidth />
                </Grid>
                <Grid item xs={2}>
                  <TextField label="Numero"
                    {...register('address.number')}
                    id="number"
                    size='small'
                    inputMode='text'
                    variant="outlined"
                    fullWidth />
                </Grid>
                <Grid item xs={2}>
                  <TextField label="CEP"
                    {...register('address.cep')}
                    id="cep"
                    size='small'
                    inputMode='text'
                    variant="outlined"
                    fullWidth />
                </Grid>
                <Grid item xs={5}>
                  <TextField label="Cidade"
                    {...register('address.city')}
                    id="city"
                    size='small'
                    inputMode='text'
                    variant="outlined"
                    fullWidth />
                </Grid>
                <Grid item xs={4}>
                  <TextField label="Bairro"
                    {...register('address.district')}
                    id="district"
                    size='small'
                    inputMode='text'
                    variant="outlined"
                    fullWidth />
                </Grid>
                <Grid item xs={1.5}>
                  <FormControl
                    fullWidth
                    size='small'>
                    <InputLabel id="ufState">UF</InputLabel>
                    <Select label="UF"
                      {...register('address.state')}
                      defaultValue=""
                      labelId="ufState"
                      id="state"
                      size='small'
                      variant="outlined">
                      {
                        ufBrStates.map(state => (
                          <MenuItem value={state.VALUE} key={state.index?.toString()}>
                            {state.VIEW}
                          </MenuItem>
                        ))
                      }
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </S.FieldsetAddress>
          </Grid>
        </S.WrapperInputs>
        <S.WrapperButton>
          <Button
            type='reset'>
              Limpar
          </Button>
          <Button
            variant='contained'
            type='submit'>
              Salvar
          </Button>
        </S.WrapperButton>
      </form>
    </S.FormContainer>
  );
};
