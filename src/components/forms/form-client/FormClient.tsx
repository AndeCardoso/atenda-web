import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Grid, FormControl, MenuItem, InputLabel, Select, Paper, Typography, Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { create } from 'store/Client.store';
import { RootState } from 'store';

import { ufBrStates } from 'utils/constants';
import { IClientForm } from 'models';

import { AppInput } from 'shared';
import * as S from './styles';

export const FormClient = () => {
  const dispatch = useDispatch();
  const client = useSelector<RootState>((state: RootState) => state.client);

  const {
    control,
    register,
    handleSubmit
  } = useForm<IClientForm>();

  const onSubmit: SubmitHandler<IClientForm> = (data) => {
    dispatch(create(data));
  };

  useEffect(() => {
    console.log(client);
  }, [client]);
  

  return (
    <Paper elevation={3}>
      <S.FormContainer>
        <S.Title>
          <Typography
            color='primary'
            sx={{
              textTransform: 'uppercase',
              fontSize: '32px',
              fontWeight: 700
            }}
          >
            Cadastrar Cliente
          </Typography>
        </S.Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.WrapperInputs>
            <Grid container spacing={1}>
              <Grid item xs={5}>
                <AppInput
                  label={'Nome'}
                  id={'name'}
                  type={'text'}
                  required={true}
                  control={control}
                  helper={'Insira um nome'}
                />
              </Grid>
              <Grid item xs={3.4}>
                <AppInput
                  label={'Telefone'}
                  id={'phone'}
                  type={'tel'}
                  required={true}
                  control={control}
                  placeholder="Ex.: (57) 9 9726-5136"
                  helper={'Informe um telefone'}
                />
              </Grid>
              <Grid item xs={3.4}>
                <AppInput
                  label={'CPF'}
                  id={'cpf'}
                  type={'text'}
                  required={false}
                  control={control}
                  placeholder="Ex.: 041.645.987-59"
                />
              </Grid>
              <Grid item xs={6.8}>
                <AppInput
                  label={'E-mail'}
                  id={'email'}
                  type={'email'}
                  required={false}
                  control={control}
                  placeholder="Ex.: usuario@email.com"
                />
              </Grid>
              <S.Fieldset>
                <S.Legend>Endereço</S.Legend>
                <Grid container spacing={1}>
                  <Grid item xs={8}>
                    <AppInput
                      label={'Rua'}
                      id={'address.street'}
                      type={'text'}
                      required={false}
                      control={control}
                      placeholder="Ex.: Av. Brasil..."
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <AppInput
                      label={'Número'}
                      id={'address.number'}
                      type={'text'}
                      required={false}
                      control={control}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <AppInput
                      label={'CEP'}
                      id={'address.cep'}
                      type={'text'}
                      required={false}
                      control={control}
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <AppInput
                      label={'Cidade'}
                      id={'address.city'}
                      type={'text'}
                      required={false}
                      control={control}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <AppInput
                      label={'Bairro'}
                      id={'address.district'}
                      type={'text'}
                      required={false}
                      control={control}
                    />
                  </Grid>
                  <Grid item xs={1.5}>
                    <FormControl fullWidth size="small">
                      <InputLabel id="ufState">UF</InputLabel>
                      <Select
                        label="UF"
                        {...register('address.state')}
                        defaultValue=""
                        labelId="ufState"
                        id="state"
                        size="small"
                        variant="outlined"
                      >
                        {ufBrStates.map((state) => (
                          <MenuItem value={state.VALUE} key={state.index}>
                            {state.VIEW}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </S.Fieldset>
            </Grid>
          </S.WrapperInputs>
          <S.WrapperButton>
            <Button type="reset">Limpar</Button>
            <Button variant="contained" type="submit">
              Salvar
            </Button>
          </S.WrapperButton>
        </form>
      </S.FormContainer>
    </Paper>
  );
};
