import React from 'react';
import { shallow } from 'enzyme';
import { Counter } from './Counter';

test('Can render with default', () => {
  const wrapper = shallow(<Counter />);
  expect(wrapper.find('div.count').text()).toBe('Count: 1');
});
