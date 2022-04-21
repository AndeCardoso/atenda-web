import { createContext, useMemo, useState, useCallback, useContext } from 'react';
import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';

import { DarkTheme, LightTheme } from 'themes';

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}

type WithChildren<T = unknown> = T & { children?: React.ReactNode };

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider = ({ children }: WithChildren) => {

  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');

  const toggleTheme = useCallback(() => {
    setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
  }, []);

  const theme = useMemo(() => themeName === 'light' ? LightTheme : DarkTheme, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          { children }
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};