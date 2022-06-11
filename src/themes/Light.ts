import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#211161',
      light: '#ffffff99',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#7ef29d',
      contrastText: '#000000'
    },
    background: {
      paper: '#FDFDFD',
      default: '#ffffff',
    }
  }
});