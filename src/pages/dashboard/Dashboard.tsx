import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar, Box, IconButton, Switch, useTheme } from '@mui/material';
import { Menu, LightbulbOutlined, CalendarMonth, DownloadOutlined } from '@mui/icons-material';

import { useAppThemeContext } from 'context/ThemeContext';

import { SideBar } from 'components';

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
      <Box>
        <SideBar open={open}/>
        <AppBar
          position='relative'
          sx={{height: '40px', boxShadow: 'none'}}>
          <Box
            marginLeft={margin}
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            marginBottom={theme.spacing(5)}>
            <IconButton onClick={toggleSidebar}>
              <Menu />
            </IconButton>
            <Box display="flex" alignItems="center">
              <Box display="Flex" marginRight={theme.spacing(3)}>
                <DownloadOutlined />
                <CalendarMonth />
              </Box>
              <LightbulbOutlined />
              <Switch defaultChecked onChange={toggleTheme} color='secondary' />
            </Box>
          </Box>
        </AppBar>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          marginLeft={margin}
          padding={`${theme.spacing(2)} ${theme.spacing(15)}`}
          sx={{height: '91vh',overflowY: 'scroll'}}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
