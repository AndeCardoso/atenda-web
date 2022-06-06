import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7ef29d',
      dark: '#00000099',
      contrastText: '#211161'
    },
    secondary: {
      main: '#211161',
      contrastText: '#ffffff',
    },
    background: {
      paper: '#00080b',
      default: '#00080b'
    }
  }
});
