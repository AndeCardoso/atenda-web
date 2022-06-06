import { render, screen } from '@testing-library/react';
import { Login } from './Login';

describe('<Login />', () => {
  it('shoud render the text "ATENDA"', () => {
    render(<Login />);

    const text = screen.getByText(/ATENDA/i);
    expect(text).toBeInTheDocument();
  });
});