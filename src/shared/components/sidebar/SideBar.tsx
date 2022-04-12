import {
  Box,
  Divider,
  Drawer,
  Avatar,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ListItemComponent } from '../list-item/ListItem';

interface IProps {
  open: boolean;
  children?: React.ReactNode;
}

export const SideBar = (props: IProps): JSX.Element => {
  const theme = useTheme();

  const { open } = props;

  const menuItems = [
    { label: 'Nova OS', icon: 'newOS'},
    { label: 'Cadastrar Cliente', icon: 'newClient'},
    { label: 'Atendimento', icon: 'schedule'},
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
                  <ListItemComponent label={item.label} icon={item.icon} />
                </>
              ))
            }
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
