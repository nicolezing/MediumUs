/**
*
* Tests for UserSettingList
*
* @see
https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
*
*/

import React from 'react';
import renderWithRedux from '../../../../../internals/testing/renderWithRedux';

// import 'jest-dom/extend-expect'; // add some helpful assertions

import UserSettingList from '../index';
describe('<UserSettingList />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');

    renderWithRedux(<UserSettingList id="loggedIn" />);
    expect(spy).not.toHaveBeenCalled();
  });
});
