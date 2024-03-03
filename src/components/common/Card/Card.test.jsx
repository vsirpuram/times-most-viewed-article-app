import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
  it('renders children with the provided className', () => {
    const className = 'test-class';
    const text = 'Test Content';

    const { getByText } = render(<Card className={className}>{text}</Card>);
    const cardElement = getByText(text);

    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveClass(className);
  });
});
