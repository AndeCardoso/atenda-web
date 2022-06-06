import { Key } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Drawer,
  Avatar,
  Typography,
  IconButton,
} from '@mui/material';
import { CSSObject, useTheme, Theme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ListItemComponent } from '../list-item/ListItem';
import { RootState } from 'store';

import * as S from './styles';
import { toggle } from 'store/Sidebar.store';

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
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const menuItems: IMenuItem[] = [
  { label: 'Inicio', icon: 'home', link: '/dashboard' },
  { label: 'Nova OS', icon: 'newOS', link: '/dashboard/cadastro-os' },
  { label: 'Cadastrar Cliente', icon: 'newClient', link: '/dashboard/cadastro-cliente' },
  { label: 'Atendimento', icon: 'calendar', link: '/dashboard/atendimento' },
  { label: 'Cadastrar Técnico', icon: 'technician', link: '/dashboard/cadastro-tecnico' },
];

export const SideBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isOpenToggle: boolean = useSelector<RootState>((state: RootState) => state.sidebar) as boolean;

  const handlerToggle = () => {
    dispatch(toggle());
  };
  
  return (
    <Drawer
      open={isOpenToggle}
      variant="persistent"
    >
      <Box
        width={theme.spacing(28)}
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Box
          width="100%"
          height={theme.spacing(16)}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-end"
          sx={{
            backgroundColor: `${theme.palette.primary.main}`
          }}
        >
          <S.Close>
            <IconButton
              onClick={handlerToggle}>
              <ChevronLeftIcon sx={{color: 'white'}}/>
            </IconButton>
          </S.Close>
          <S.Avatar>
            <Avatar
              sx={{ height: theme.spacing(8), width: theme.spacing(8)}}
              src="https://avatars.githubusercontent.com/u/11451126?s=96"
            />
          </S.Avatar>
          <S.UserName>
            <Typography
              color={theme.palette.primary.contrastText}>
                Anderson Cardoso
            </Typography>
          </S.UserName>
        </Box>
        <Box flex={1}>
          {
            menuItems.map((item, index) => (
              <ListItemComponent
                label={item.label}
                icon={item.icon}
                link={item.link}
                key={index}
              />
            ))
          }
        </Box>
      </Box>
    </Drawer>
  );
};
