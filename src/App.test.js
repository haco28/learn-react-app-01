import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('see hello world statement', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/hello world/i);
  expect(textElement).toBeInTheDocument();
});
