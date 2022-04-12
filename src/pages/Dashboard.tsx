import { useState } from 'react';
import { Box, IconButton, Switch, useTheme } from '@mui/material';
import { Menu, LightbulbOutlined } from '@mui/icons-material';

import { SideBar } from 'shared/components';
import { useAppThemeContext } from 'shared/context/ThemeContext';

export const Dashboard = () => {
  const theme = useTheme();

  const [open, setOpen] = useState<boolean>(false);
  const [margin, setMargin] = useState<string>(theme.spacing(1));

  const toggleSidebar = () => {
    setOpen(open ? false : true);
    setMargin(margin === theme.spacing(1) ? theme.spacing(28) : theme.spacing(1));
  };

  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <SideBar open={open}/>
      <Box
        height="100vh"
        marginLeft={margin}
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
      >
        <IconButton onClick={toggleSidebar}>
          <Menu />
        </IconButton>
        <Box display="flex" alignItems="center">
          <LightbulbOutlined />
          <Switch defaultChecked onChange={toggleTheme} />
        </Box>
      </Box>
    </>
  );
};
