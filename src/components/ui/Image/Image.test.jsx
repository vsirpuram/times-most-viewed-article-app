import React from 'react';
import { render } from '@testing-library/react';
import Image from './Image';

describe('Image component', () => {
  it('renders Image component', () => {
    render(<Image src="test.jpg" alt="Test Image" />);
  });

  it('renders with custom class name', () => {
    const { container } = render(
      <Image src="test.jpg" alt="Test Image" className="custom-class" />,
    );
    const pictureElement = container.querySelector('picture');
    expect(pictureElement).toBeInTheDocument();
  });

  it('renders with custom class name', () => {
    const { container } = render(
      <Image src="test.jpg" alt="Test Image" className="custom-class" />,
    );
    const imgElement = container.querySelector('img');
    expect(imgElement).toHaveClass('custom-class');
  });
});
