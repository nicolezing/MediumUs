import React from 'react';
import { render } from 'react-testing-library';
import { OutlinedButton } from '../index';

describe('<Button />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<OutlinedButton text="test" type="outlined" size="middle" />);
    expect(spy).not.toHaveBeenCalled();
  });
});
