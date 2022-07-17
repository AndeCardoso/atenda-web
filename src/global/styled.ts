import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Open-Sans, Helvetica, Sans-Serif;

    & ::-webkit-scrollbar {
      width: 10px;
    }

    & ::-webkit-scrollbar-thumb {
      background-color: grey;
    }
  }
`;
