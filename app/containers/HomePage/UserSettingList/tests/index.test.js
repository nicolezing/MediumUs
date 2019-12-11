/**
*
* Tests for UserSettingList
*
* @see
https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
*
*/

import React from 'react';
import { render } from 'react-testing-library';

// import 'jest-dom/extend-expect'; // add some helpful assertions

import UserSettingList from '../index';
const dropdownInfo = {
  userAvatar: './',
  username: 'Nicolezing',
  userLinkSuffix: '@nicolezing',
  domain: './',
};
describe('<UserSettingList />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');

    render(<UserSettingList {...dropdownInfo} />);
    expect(spy).not.toHaveBeenCalled();
  });
});
