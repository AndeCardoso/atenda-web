import { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
  useTheme } from '@mui/material';
import { Box } from '@mui/system';

import BgHome from 'assets/imgs/background.png';
import Logo from 'assets/imgs/horizontal_logo_w.png';

import { SubmitHandler, useForm } from 'react-hook-form';

import { IUser } from 'models';
import { useDispatch } from 'react-redux';
import { login } from 'store/User.store';

import { AppInput, ToggleTheme } from 'shared';
import { Visibility, VisibilityOff } from '@material-ui/icons';

interface IState {
  password: string;
  showPassword: boolean;
}

export const Login = () => {
  const [values, setValues] = useState<IState>({
    password: '',
    showPassword: false,
  });

  const dispatch = useDispatch();

  const theme = useTheme();

  const {
    control,
    register,
    handleSubmit
  } = useForm<IUser>();

  const onSubmit: SubmitHandler<IUser> = (data) => {
    console.log(data);
    dispatch(login(data));
  };

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
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="space-between"
      sx={{
        background: `url(${BgHome})`,
        backgroundRepeat: 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
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
            filter: 'drop-shadow(5px 5px 5px #111000bb)'
          }}
        >
        </Box>
        <Typography
          textAlign="center"
          fontSize="25px"
          fontWeight="400"
          color="#fff"
          sx={{filter: 'drop-shadow(5px 5px 3px #111000bb)'}}
        >
          Sistema de Gerenciamento de Ordem de Serviços
        </Typography>
        <Typography
          textAlign="center"
          fontSize="25px"
          fontWeight="400"
          color="#fff"
          sx={{filter: 'drop-shadow(5px 5px 3px #111000bb)'}}
        >
          
        </Typography>
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
          backgroundColor: `${theme.palette.primary.dark}`,
        }}
      >
        <Box
          display='flex'
          width='100%'
          justifyContent='flex-end'
          marginBottom='90px'
        >
          <ToggleTheme />
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          width='90%'
        >
          <Typography
            fontSize="40px"
            fontWeight="700"
            marginBottom="30px"
            color={theme.palette.primary.main}
          >
          Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid
              container
              display='flex'
              alignItems='center'
              justifyContent='center'
              spacing={2}
            >
              <Grid item xs={12}>
                <AppInput
                  label={'E-mail'}
                  id={'email'}
                  type={'email'}
                  required={true}
                  control={control}
                  placeholder="Ex.: usuario@provedor.com"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  variant="outlined"
                  size="small"
                  fullWidth
                >
                  <InputLabel htmlFor="password">Senha</InputLabel>
                  <OutlinedInput
                    id="password"
                    type={values.showPassword ? 'text' : 'password'}
                    {...register('password', { required: true })}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControlLabel
                  {...register('remember')}
                  label="Lembrar acesso"
                  sx={{color: `${theme.palette.secondary.contrastText}`}}
                  control={<Checkbox />}
                />
              </Grid>
              <Grid item xs={6}>
                <Link
                  underline="none"
                  href='#'
                >Esqueci minha senha</Link>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                marginTop: '15px',
                alignSelf: 'right'
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