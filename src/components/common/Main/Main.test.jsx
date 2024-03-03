import React from 'react';
import { render } from '@testing-library/react';
import Main from './Main';

describe('Main component', () => {
  it('renders Main component', () => {
    render(<Main />);
  });

  it('renders children correctly', () => {
    const { getByText } = render(<Main>Test Main</Main>);
    expect(getByText('Test Main')).toBeInTheDocument();
  });
});
