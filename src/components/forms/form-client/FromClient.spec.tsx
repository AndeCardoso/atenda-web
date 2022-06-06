import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store';
import { FormClient } from './FormClient';

render(
  <Provider store={store}>
    <FormClient />
  </Provider>
);

describe('Form Client', () => {
  it('should render the title of form', () => {
    const titleText = screen.getByText('Cadastrar Cliente');
    expect(titleText).toBeInTheDocument();
  });
});