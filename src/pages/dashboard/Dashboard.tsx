import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppBar, Box, FormControlLabel, IconButton, Switch, useTheme } from '@mui/material';
import { Menu, LightbulbOutlined, CalendarMonth, DownloadOutlined } from '@mui/icons-material';

import { useAppThemeContext } from 'context/ThemeContext';

import { SideBar } from 'components';
import { toggle } from 'store/Sidebar.store';
import { useEffect, useState } from 'react';
import { RootState } from 'store';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [margin, setMargin] = useState<string>(theme.spacing(1));
  const isOpenToggle = useSelector<RootState>((state: RootState) => state.sidebar.isOpen);
  
  const toggleSidebar = () => {
    dispatch(toggle({isOpen: true}));
  };

  useEffect(() => {
    setMargin(isOpenToggle ? theme.spacing(28) : theme.spacing(1));
  }, [isOpenToggle]);
  
  const { toggleTheme } = useAppThemeContext();

  return (
    <Box>
      <SideBar/>
      <AppBar
        position='relative'
        sx={{height: '40px', boxShadow: 'none'}}>
        <Box
          display="flex"
          alignItems="flex-start"
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
            <FormControlLabel
              sx={{marginRight: '10px', display: 'flex', alignItems: 'center'}}
              label={<LightbulbOutlined />}
              control={<Switch defaultChecked onChange={toggleTheme} color='secondary' />}
              labelPlacement="start"
            />
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
