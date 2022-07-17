import { useForm, SubmitHandler } from 'react-hook-form';

import { Button, Grid, FormControl, MenuItem, InputLabel, Select, Paper } from '@mui/material';

import { AppInput, AppInputPassword, SectionTitle } from 'shared';
import { IUser } from 'models';
import * as S from './styles';
import { regExp } from 'utils/constants/regex';
import { Form } from 'shared/form/Form';

export const FormUser = () => {
  const { control, handleSubmit } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = (data) => {
    // dispatch(create(data));
  };

  return (
    <Paper elevation={3}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <SectionTitle>Editar Usuário</SectionTitle>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <AppInput
              label={'Nome'}
              name={'name'}
              type={'text'}
              required={true}
              control={control}
              helper={'Insira um nome'}
            />
          </Grid>
          <Grid item xs={6}>
            <AppInput
              label={'E-mail'}
              name={'email'}
              type={'email'}
              required={false}
              control={control}
              placeholder={'Ex.: usuario@email.com'}
            />
          </Grid>
          <Grid item xs={6.8}>
            <AppInputPassword
              label={'Senha'}
              name={'password'}
              required={true}
              control={control}
              helper={'Senha invalida'}
              pattern={regExp.min6}
            />
          </Grid>
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
