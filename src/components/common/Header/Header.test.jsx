import { render, screen } from '@testing-library/react';
import React from 'react';
import Header from './Header';

describe('Header tests', () => {
  it('should contain the Hello world text', () => {
    render(<Header />);
    const heading = screen.getByText(/Hello World/);
    expect(heading).toBeInTheDocument();
  });
});
