import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
import store from 'store';

import { GlobalStyle } from 'global/styled';
import { App } from 'App';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </StrictMode>
);
