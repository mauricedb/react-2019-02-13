import React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import Counter from './Counter';

afterEach(cleanup);

test('Can render with default', () => {
  const wrapper = render(<Counter />);
  wrapper.getByText('Count: 1');
});

test('Increments the counter when clicked', () => {
  const wrapper = render(<Counter />);
  fireEvent.click(wrapper.getByText('Increment'));
  wrapper.getByText('Count: 2');
});
