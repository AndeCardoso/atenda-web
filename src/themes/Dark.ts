import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#523FC0',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#FF4C9A',
      contrastText: '#ffffff'
    },
    background: {
      paper: '#00080b',
      default: '#00080b',
    }
  }
});
