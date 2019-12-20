/**
 *
 * Tests for Avatar
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import $ from 'jquery';
import renderWithRedux from '../../../../internals/testing/renderWithRedux';
import Avatar from '../index';

describe('<Avatar />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderWithRedux(<Avatar id="ID002" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Have one svg halo if is a member', () => {
    const { container } = renderWithRedux(<Avatar id="ID001" size="36px" />);
    expect($(container).find('svg').length).toEqual(1);
  });

  it('Have no wrapper element if data user is not a member', () => {
    const { container } = renderWithRedux(<Avatar id="ID002" />);
    expect($(container).find('svg').length).toEqual(0);
  });

  it('Have no wrapper element if data user is a member but size is not provided', () => {
    const { container } = renderWithRedux(<Avatar id="ID001" />);
    expect($(container).find('svg').length).toEqual(0);
  });
});
