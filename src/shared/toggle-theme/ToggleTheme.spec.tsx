import { render, screen } from '@testing-library/react';

import { ToggleTheme } from './ToggleTheme';

describe('<ToggleTheme />', () => {
  render(<ToggleTheme />);

  it('shoud render the slider of toggle', () => {
    const text = screen.getByTestId('toggle');
    expect(text).toBeInTheDocument();
  });
});
