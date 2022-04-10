import { ThemeProvider } from "styled-components";

type WithChildren<T = {}> = 
  T & { children?: React.ReactNode };
type ThemeProps = WithChildren<{}>

const fontSizes = {
  body: 16,
  h1: 26,
  h2: 22
}

const colors = {
  primary: '#0d4683',
  secondary: '#307d99',
  dark: '#020023',
  ligth: '#c8e2f7'
}

const theme = {
  fontSizes,
  colors
}

export const Theme = ({ children }: ThemeProps) => {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  )
}