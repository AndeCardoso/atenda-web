import { useEffect } from 'react';
import { WbSunny, NightsStayOutlined } from '@material-ui/icons';
import { FormControlLabel, Switch, useTheme } from '@mui/material';
import { useAppThemeContext } from 'context/ThemeContext';
import Cookies from 'js-cookie';
import { Toggle } from './styles';

export const ToggleTheme = () => {
  const { toggleTheme, themeName } = useAppThemeContext();

  const appTheme = useTheme();

  const handlerChangeTheme = () => {
    toggleTheme();
  };

  useEffect(() => {
    if (Cookies.get('atenda-theme') !== themeName) {
      toggleTheme();
    }
    console.log(themeName);
  }, []);
  
  
  return (
    <Toggle>
      <FormControlLabel
        sx={{
          marginRight: '10px',
          display: 'flex',
          alignItems: 'center',
          height: '24px',
          color: appTheme.palette.primary.main
        }}
        label={
          themeName == 'dark' ? 
            <NightsStayOutlined htmlColor={appTheme.palette.background.default}/> :
            <WbSunny htmlColor={appTheme.palette.primary.contrastText}/> 
        }
        control={
          <Switch
            onChange={handlerChangeTheme}
            color='primary'
            data-testid='toggle'
          />
        }
        labelPlacement="start"
      />
    </Toggle>
  );
};
