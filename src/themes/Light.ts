import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#523FC0',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#FF4C9A',
      contrastText: '#000000'
    },
    background: {
      paper: '#FDFDFD',
      default: '#ffffff',
    }
  }
});