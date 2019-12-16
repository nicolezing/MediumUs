/**
*
* Tests for Dropdown
*
* @see
https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
*
*/

import React from 'react';
import { render } from 'react-testing-library';

// import 'jest-dom/extend-expect'; // add some helpful assertions

import PopoverBox from '../index';

describe('<PopoverBox />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');

    render(
      <PopoverBox
        renderPlace="above"
        arrowPosition={[0, 0]}
        popoverPosition={[0, 0]}
        isVisible={false}
        onMouseOver={() => {}}
        onFocus={() => {}}
        onMouseOut={() => {}}
        onBlur={() => {}}
        popoverContent={<div />}
      />,
    );
    expect(spy).not.toHaveBeenCalled();
  });
});
