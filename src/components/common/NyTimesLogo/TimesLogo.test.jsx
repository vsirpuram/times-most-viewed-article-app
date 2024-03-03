import React from 'react';
import { render } from '@testing-library/react';
import TimesLogo from './TimesLogo';

describe('TimesLogo component', () => {
  it('renders TimesLogo const', () => {
    render(<TimesLogo />);
  });

  it('renders with fill color', () => {
    const { container } = render(<TimesLogo fill="red" />);
    const svgElement = container.querySelector('svg');
    expect(svgElement).toHaveAttribute('fill', 'red');
  });
});
