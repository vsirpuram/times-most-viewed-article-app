import React from 'react';
import { render } from '@testing-library/react';
import TextLabel from './TextLabel';

describe('TextLabel component', () => {
  it('renders text correctly', () => {
    const text = 'Hello, World!';
    const { getByText } = render(<TextLabel text={text} />);
    expect(getByText(text)).toBeInTheDocument();
  });

  it('renders with additional class name', () => {
    const text = 'Hello, World!';
    const className = 'additional-class';
    const { container } = render(
      <TextLabel text={text} className={className} />,
    );
    expect(container.firstChild).toHaveClass(className);
  });
});
