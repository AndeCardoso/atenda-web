import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store';
import { FormDevice } from './FormDevice';

render(
  <Provider store={store}>
    <FormDevice />
  </Provider>
);

describe('<FormDevice />', () => {
  it('should render the title of form', () => {
    const titleText = screen.getByText('Cadastrar Dispositivo');
    expect(titleText).toBeInTheDocument();
  });
});
