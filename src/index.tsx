import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import store from 'store';

import { GlobalStyle } from 'global/styled';
import { AppThemeProvider } from 'context/ThemeContext';
import { Routes } from 'routes';
import { useTheme } from '@mui/material';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <AppThemeProvider>
        <GlobalStyle theme={useTheme} />
        <Routes />
      </AppThemeProvider>
    </Provider>
  </StrictMode>
);
