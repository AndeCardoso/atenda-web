import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from 'store';
import { Login } from './Login';

describe('<Login />', () => {
  it('shoud render the text "ATENDA"', () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const text = screen.getByText(/Login/i);
    expect(text).toBeInTheDocument();
  });
});
