import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'store';
import { FormOs } from './FormOs';

render(
  <BrowserRouter>
    <Provider store={store}>
      <FormOs />
    </Provider>
  </BrowserRouter>
);

describe('Form Client', () => {
  it('should render the title of form', () => {
    const titleText = screen.getByText('Cadastrar Ordem de Serviço');
    expect(titleText).toBeInTheDocument();
  });
});