import { Routes } from 'routes';
import { AppThemeProvider } from 'shared/context/ThemeContext';

export const App = () => {
  return (
    <AppThemeProvider>
      <Routes />
    </AppThemeProvider>
  );
};
