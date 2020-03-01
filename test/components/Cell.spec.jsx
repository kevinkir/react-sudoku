import { shallow } from 'enzyme';
import React from 'react';

import { Cell } from '../../src/components/cell/Cell';

test('Cell input value reflects the value prop', () => {
  const value = 5;
  const cell = shallow(
    <Cell
      onChange={jest.fn()}
      value={value}
    />
  );

  const input = cell.find('input').at(0);

  expect(input.prop('value')).toEqual(value);
});

test('Cell onChange prop is called with the new value', () => {
  const onChange = jest.fn();
  const cell = shallow(
    <Cell
      onChange={onChange}
      value={5}
    />
  );

  const input = cell.find('input').at(0);
  input.simulate('change', { target: { value: 50 } });

  expect(onChange).toHaveBeenCalledWith(50);
});