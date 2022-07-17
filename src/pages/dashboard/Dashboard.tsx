import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { AppBar, Box, useTheme } from '@mui/material';
import { CalendarMonth, DownloadOutlined } from '@mui/icons-material';

import BgHome from 'assets/imgs/background.png';

import { ToggleTheme } from 'shared/index';

import { SideBar } from 'components';
import { RootState } from 'store';
import { useAppThemeContext } from 'context/ThemeContext';

export const Dashboard = () => {
  const { themeName } = useAppThemeContext();

  const theme = useTheme();

  const [margin, setMargin] = useState<string>(theme.spacing(1));

  const isOpenToggle = useSelector<RootState>((state: RootState) => state.sidebar);

  useEffect(() => {
    setMargin(isOpenToggle ? theme.spacing(28) : theme.spacing(6.5));
  }, [isOpenToggle]);

  return (
    <Box>
      <SideBar />
      <AppBar
        position="relative"
        sx={{
          height: '40px',
          boxShadow: 'none',
          backgroundColor: `${theme.palette.primary.main}`,
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="flex-end" marginBottom={theme.spacing(5)}>
          <Box display="flex" alignItems="center" height={40}>
            <Box display="Flex" marginRight={theme.spacing(3)}>
              <DownloadOutlined color="secondary" />
              <CalendarMonth color="secondary" />
            </Box>
            <ToggleTheme type="dark" />
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
        sx={{
          height: '91vh',
          overflowY: 'scroll',
          background: `url(${themeName == 'dark' ? BgHome : 'none'})`,
          backgroundRepeat: 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
