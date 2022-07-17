import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store';
import { FormUser } from './FormUser';

render(
  <Provider store={store}>
    <FormUser />
  </Provider>
);

describe('<FormUser />', () => {
  it('should render the title of form', () => {
    const titleText = screen.getByText('Editar Usuário');
    expect(titleText).toBeInTheDocument();
  });
});
