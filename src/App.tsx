import { Routes } from 'routes';
import { AppThemeProvider } from 'context/ThemeContext';

export const App = () => {
  return (
    <AppThemeProvider>
      <Routes />
    </AppThemeProvider>
  );
};
