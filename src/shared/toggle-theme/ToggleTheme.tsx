import { useEffect } from 'react';
import { WbSunny, NightsStayOutlined } from '@material-ui/icons';
import { FormControlLabel, Switch, useTheme } from '@mui/material';
import { useAppThemeContext } from 'context/ThemeContext';
import Cookies from 'js-cookie';
import { Toggle } from './styles';

export const ToggleTheme = ({type}: any) => {
  const { toggleWithTheme, toggleTheme, themeName } = useAppThemeContext();

  const appTheme = useTheme();

  const handlerChangeTheme = () => {
    toggleTheme();
    Cookies.set('atenda-theme', themeName);
  };

  useEffect(() => {
    const theme = Cookies.get('atenda-theme') && Cookies.get('atenda-theme') === 'dark ' ? 'dark' : 'light';
    toggleWithTheme(theme);
  }, []);

  return (
    <Toggle>
      <FormControlLabel
        sx={{
          marginRight: '10px',
          display: 'flex',
          alignItems: 'center',
          height: '24px',
          color: type === 'dark' ? appTheme.palette.primary.main : appTheme.palette.secondary.main
        }}
        label={
          themeName == 'dark' ? (
            <NightsStayOutlined htmlColor={type === 'dark' ? appTheme.palette.secondary.main : appTheme.palette.primary.main} />
          ) : (
            <WbSunny htmlColor={type === 'dark' ? appTheme.palette.secondary.main : appTheme.palette.primary.main} />
          )
        }
        control={
          <Switch
            onChange={handlerChangeTheme}
            color='secondary'
            sx={{
              color: appTheme.palette.primary.main,
            }}
            data-testid="toggle"
          />
        }
        labelPlacement="start"
      />
    </Toggle>
  );
};
