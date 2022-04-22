import React from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from 'global/styled';
import { App } from 'App';

import { Provider } from 'react-redux';
import { store } from 'store';

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
