import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  it('renders Footer component', () => {
    render(<Footer />);
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Footer>Test Footer</Footer>);
    expect(getByText('Test Footer')).toBeInTheDocument();
  });
});
