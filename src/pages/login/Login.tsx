import { Button, Checkbox, FormControlLabel, Grid, Link, Typography, useTheme } from '@mui/material';
import { Box } from '@mui/system';

import BgHome from 'assets/imgs/background.png';
import Logo from 'assets/imgs/horizontal_logo_w.png';

import { SubmitHandler, useForm } from 'react-hook-form';

import { IUser } from 'models';
import { useDispatch } from 'react-redux';
import { login } from 'store/User.store';

import { AppInput, AppInputPassword, ToggleTheme } from 'shared';

import { regExp } from 'utils/constants/regex';

export const Login = () => {
  const dispatch = useDispatch();

  const theme = useTheme();

  const { control, register, handleSubmit } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = (data) => {
    console.log(data);
    dispatch(login(data));
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="space-between"
      sx={{
        background: `url(${BgHome})`,
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        marginTop="-390px"
      >
        <Box
          component="img"
          src={Logo}
          alt="Logomarca do sistema"
          marginBottom="40px"
          sx={{
            width: 500,
            height: 'auto',
            filter: 'drop-shadow(5px 5px 5px #111000bb)',
          }}
        ></Box>
        <Typography
          textAlign="center"
          fontSize="25px"
          fontWeight="400"
          color="#fff"
          sx={{ filter: 'drop-shadow(5px 5px 3px #111000bb)' }}
        >
          Sistema de Gerenciamento de Ordem de Serviços
        </Typography>
        <Typography
          textAlign="center"
          fontSize="25px"
          fontWeight="400"
          color="#fff"
          sx={{ filter: 'drop-shadow(5px 5px 3px #111000bb)' }}
        ></Typography>
      </Box>
      <Box
        width="590px"
        minWidth="350px"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          backgroundColor: `${theme.palette.primary.light}`,
        }}
      >
        <Box display="flex" width="100%" justifyContent="flex-end" marginTop="15px" marginBottom="90px">
          <ToggleTheme />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" width="90%">
          <Typography fontSize="40px" fontWeight="700" marginBottom="30px" color={theme.palette.primary.main}>
            Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container display="flex" alignItems="center" justifyContent="center" spacing={2}>
              <Grid item xs={12}>
                <AppInput
                  label={'E-mail'}
                  name={'email'}
                  type={'email'}
                  required={true}
                  control={control}
                  pattern={regExp.email}
                  helper={'Informe um e-mail válido'}
                  placeholder={'Ex.: usuario@provedor.com'}
                />
              </Grid>
              <Grid item xs={12}>
                <AppInputPassword
                  label={'Senha'}
                  name={'password'}
                  required={true}
                  control={control}
                  helper={'Senha invalida'}
                  pattern={regExp.min6}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  {...register('remember')}
                  label="Lembrar acesso"
                  sx={{ color: `${theme.palette.secondary.contrastText}` }}
                  control={<Checkbox />}
                />
              </Grid>
              <Grid item xs={6}>
                <Link underline="none" href="#">
                  Esqueci minha senha
                </Link>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                marginTop: '15px',
                alignSelf: 'right',
              }}
            >
              Entrar
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
