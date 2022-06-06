import { WbSunny, NightsStayOutlined } from '@material-ui/icons';
import { FormControlLabel, Switch } from '@mui/material';
import { useAppThemeContext } from 'context/ThemeContext';
import Cookies from 'js-cookie';
import { useEffect } from 'react';

export const ToggleTheme = () => {
  const { toggleTheme, themeName } = useAppThemeContext();

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
    <FormControlLabel
      sx={{marginRight: '10px', display: 'flex', alignItems: 'center'}}
      label={
        themeName == 'dark' ? 
          <NightsStayOutlined height='24px' color='secondary'/> :
          <WbSunny height='24px' color='primary'/> 
      }
      control={<Switch onChange={handlerChangeTheme} color='primary'/>}
      labelPlacement="start"
    />
  );
};
