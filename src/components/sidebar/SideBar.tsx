import { Link } from 'react-router-dom';
import { Key } from 'react';
import { Box, Avatar, Typography, IconButton, Tooltip } from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import { CSSObject, styled, Theme, useTheme } from '@mui/material/styles';
import { ListItemComponent } from '../list-item/ListItem';

import ChevronRight from '@mui/icons-material/ChevronRight';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import LogoutIcon from '@mui/icons-material/Logout';

import { RootState } from 'store';

import { useSelector, useDispatch } from 'react-redux';
import { toggle } from 'store/Sidebar.store';
import { logout } from 'store/User.store';
import * as S from './styles';

interface IMenuItem {
  [x: string]: Key | null | undefined;
  label: string;
  icon: string;
  link: string;
}

const openedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(28)})`,
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(6)} + 5px)`,
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const menuItems: IMenuItem[] = [
  { label: 'Inicio', icon: 'home', link: '/dashboard/inicio' },
  { label: 'Nova OS', icon: 'newOS', link: '/dashboard/cadastro-os' },
  { label: 'Novo Cliente', icon: 'newClient', link: '/dashboard/cadastro-cliente' },
  { label: 'Novo Dispositivo', icon: 'newDevice', link: '/dashboard/cadastro-dispositivos' },
  { label: 'Atendimento', icon: 'calendar', link: '/dashboard/atendimento' },
  { label: 'Cadastrar Técnico', icon: 'technician', link: '/dashboard/cadastro-tecnico' },
];

export const SideBar = () => {
  const appTheme = useTheme();
  const dispatch = useDispatch();
  const isOpenToggle: boolean = useSelector<RootState>((state: RootState) => state.sidebar) as boolean;

  const handlerToggle = () => {
    dispatch(toggle());
  };

  const handlerLogout = () => {
    dispatch(logout());
  };

  return (
    <Drawer theme={appTheme} open={isOpenToggle} variant="permanent">
      <Box height="100%" display="flex" flexDirection="column">
        <Box
          width="100%"
          height={isOpenToggle ? appTheme.spacing(18) : appTheme.spacing(11)}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-end"
          paddingBottom={isOpenToggle ? appTheme.spacing(0) : appTheme.spacing(1)}
          sx={{
            backgroundColor: `${appTheme.palette.primary.main}`,
          }}
        >
          <S.TopButtons style={{ justifyContent: isOpenToggle ? 'space-between' : 'center' }}>
            {isOpenToggle ? (
              <>
                <Tooltip title={'Logout'} arrow disableInteractive={true} placement="bottom">
                  <IconButton onClick={handlerLogout}>
                    <LogoutIcon sx={{ color: appTheme.palette.secondary.main }} />
                  </IconButton>
                </Tooltip>
                <IconButton onClick={handlerToggle}>
                  <ChevronLeft sx={{ color: appTheme.palette.secondary.main }} />
                </IconButton>
              </>
            ) : (
              <IconButton onClick={handlerToggle} sx={{ justifyContent: 'center' }}>
                <ChevronRight sx={{ color: appTheme.palette.secondary.main }} />
              </IconButton>
            )}
          </S.TopButtons>
          {isOpenToggle ? (
            <>
              <S.Avatar color={appTheme.palette.secondary.main}>
                <Avatar
                  sx={{ height: appTheme.spacing(8), width: appTheme.spacing(8) }}
                  src="https://avatars.githubusercontent.com/u/11451126?s=96"
                />
              </S.Avatar>
              <S.UserName>
                <Tooltip title={'Editar Usuário'} arrow disableInteractive={true} placement="top">
                  <Link to="/dashboard/editar-usuario">
                    <Typography color={appTheme.palette.primary.contrastText}>Anderson Cardoso</Typography>
                  </Link>
                </Tooltip>
              </S.UserName>
            </>
          ) : (
            <Tooltip title={'Editar Usuário'} arrow disableInteractive={true} placement="right">
              <Link to="/dashboard/editar-usuario">
                <S.Avatar color={appTheme.palette.secondary.main}>
                  <Avatar
                    sx={{ height: appTheme.spacing(4), width: appTheme.spacing(4) }}
                    src="https://avatars.githubusercontent.com/u/11451126?s=96"
                  />
                </S.Avatar>
              </Link>
            </Tooltip>
          )}
        </Box>
        <Box flex={1}>
          {menuItems.map((item, index) => (
            <ListItemComponent
              label={item.label}
              icon={item.icon}
              link={item.link}
              key={index}
              minimal={isOpenToggle}
            />
          ))}
        </Box>
      </Box>
    </Drawer>
  );
};
