import { render, screen } from '@testing-library/react';

import { SectionTitle } from './SectionTitle';

describe('<SectionTitle />', () => {
  render(<SectionTitle>Cadastrar Cliente</SectionTitle>);

  it('shoud render the text "Cadastrar Cliente"', () => {
    const text = screen.getByText(/Cadastrar Cliente/i);
    expect(text).toBeInTheDocument();
  });
});
