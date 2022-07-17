import { useForm, SubmitHandler } from 'react-hook-form';
import { Button, Grid, FormControl, MenuItem, InputLabel, Select, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';

import { create } from 'store/Client.store';

import { ufBrStates } from 'utils/constants';
import { IClient } from 'models';

import { AppInput, SectionTitle } from 'shared';
import * as S from './styles';
import { Form } from 'shared/form/Form';

export const FormClient = () => {
  const dispatch = useDispatch();

  const { control, register, handleSubmit } = useForm<IClient>();

  const onSubmit: SubmitHandler<IClient> = (data) => {
    dispatch(create(data));
  };

  return (
    <Paper elevation={3}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <SectionTitle>Cadastrar Cliente</SectionTitle>
        <Grid container spacing={1}>
          <Grid item xs={5}>
            <AppInput
              label={'Nome'}
              name={'name'}
              type={'text'}
              required={true}
              control={control}
              helper={'Insira um nome'}
            />
          </Grid>
          <Grid item xs={3.4}>
            <AppInput
              label={'Telefone'}
              name={'phone'}
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
              name={'cpf'}
              type={'text'}
              required={false}
              control={control}
              placeholder="Ex.: 041.645.987-59"
            />
          </Grid>
          <Grid item xs={6.8}>
            <AppInput
              label={'E-mail'}
              name={'email'}
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
                  name={'address.street'}
                  type={'text'}
                  required={false}
                  control={control}
                  placeholder="Ex.: Av. Brasil..."
                />
              </Grid>
              <Grid item xs={2}>
                <AppInput label={'Número'} name={'address.number'} type={'text'} required={false} control={control} />
              </Grid>
              <Grid item xs={2}>
                <AppInput label={'CEP'} name={'address.cep'} type={'text'} required={false} control={control} />
              </Grid>
              <Grid item xs={5}>
                <AppInput label={'Cidade'} name={'address.city'} type={'text'} required={false} control={control} />
              </Grid>
              <Grid item xs={4}>
                <AppInput label={'Bairro'} name={'address.district'} type={'text'} required={false} control={control} />
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
                    {ufBrStates.map((state, index) => (
                      <MenuItem value={state.VALUE} key={index}>
                        {state.VIEW}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </S.Fieldset>
        </Grid>

        <S.WrapperButton>
          <Button type="reset">Limpar</Button>
          <Button variant="contained" type="submit">
            Salvar
          </Button>
        </S.WrapperButton>
      </Form>
    </Paper>
  );
};
