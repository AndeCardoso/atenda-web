import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: '#35AB9F',
      dark: '#00463f',
      light: '#9efff5',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#2A1E39',
      dark: '#120028',
      light: '#9272ba',
      contrastText: '#ffffff'
    },
    background: {
      paper: '#e2ffff',
      default: '#ffffff',
    }
  }
});