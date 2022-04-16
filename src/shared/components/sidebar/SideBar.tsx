import {
  Box,
  Divider,
  Drawer,
  Avatar,
} from '@mui/material';
import { Key } from 'react';
import { useTheme } from '@mui/material/styles';
import { ListItemComponent } from '../list-item/ListItem';

interface IProps {
  open: boolean;
  children?: React.ReactNode;
}

interface IMenuItem {
  index?: Key | null | undefined;
  label: string;
  icon: string;
  link: string;
}

export const SideBar = (props: IProps): JSX.Element => {
  const theme = useTheme();

  const { open } = props;

  const menuItems: IMenuItem[] = [
    { label: 'Inicio', icon: 'home', link: '/dashboard'},
    { label: 'Nova OS', icon: 'newOS', link: '/dashboard/cadastro-os'},
    { label: 'Cadastrar Cliente', icon: 'newClient', link: '/dashboard/cadastro-cliente'},
    { label: 'Atendimento', icon: 'schedule', link: '/dashboard/atendimento'},
  ];
  
  return (
    <>
      <Drawer open={open} variant="persistent">
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column">
          <Box
            width="100%"
            height={theme.spacing(14)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{ height: theme.spacing(8), width: theme.spacing(8)}}
              src="https://avatars.githubusercontent.com/u/11451126?s=96"
            >
              AC
            </Avatar>
          </Box>
          <Divider />
          <Box flex={1}>
            {
              menuItems.map(item => (
                <>
                  <ListItemComponent
                    label={item.label}
                    icon={item.icon}
                    link={item.link}
                    key={item.index}
                  />
                </>
              ))
            }
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
