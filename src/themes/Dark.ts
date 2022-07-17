import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d0ff',
      light: '#00000099',
      contrastText: '#211161',
    },
    secondary: {
      main: '#211161',
      contrastText: '#ffffff',
    },
    background: {
      paper: '#00080b',
      default: '#00080b',
    },
  },
});
