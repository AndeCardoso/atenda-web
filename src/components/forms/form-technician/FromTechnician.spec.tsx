import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store';
import { FormTechnician } from './FormTechnician';

render(
  <Provider store={store}>
    <FormTechnician />
  </Provider>
);

describe('Form Client', () => {
  it('should render the title of form', () => {
    const titleText = screen.getByText('Cadastrar Técnico');
    expect(titleText).toBeInTheDocument();
  });
});