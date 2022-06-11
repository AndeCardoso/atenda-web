import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppBar, Box, IconButton, useTheme } from '@mui/material';
import { Menu, CalendarMonth, DownloadOutlined } from '@mui/icons-material';

import { ToggleTheme } from 'shared/index';

import { SideBar } from 'components';
import { toggle } from 'store/Sidebar.store';
import { RootState } from 'store';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [margin, setMargin] = useState<string>(theme.spacing(1));
  const isOpenToggle = useSelector<RootState>((state: RootState) => state.sidebar);
  
  const toggleSidebar = () => {
    dispatch(toggle());
  };

  useEffect(() => {
    setMargin(isOpenToggle ? theme.spacing(28) : theme.spacing(1));
  }, [isOpenToggle]);
  
  return (
    <Box>
      <SideBar/>
      <AppBar
        position='relative'
        sx={{
          height: '40px',
          boxShadow: 'none',
          backgroundColor:`${theme.palette.primary.dark}`
        }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginBottom={theme.spacing(5)}>
          <IconButton
            onClick={toggleSidebar}
          >
            <Menu sx={{color: 'white'}}/>
          </IconButton>
          <Box display="flex" alignItems="center">
            <Box display="Flex" marginRight={theme.spacing(3)}>
              <DownloadOutlined />
              <CalendarMonth />
            </Box>
            <ToggleTheme />
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
  );
};
