import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#211161',
      light: '#ffffff99',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#00d0ff',
      contrastText: '#000000',
    },
    background: {
      paper: '#FDFDFD',
      default: '#ffffff',
    },
  },
});
