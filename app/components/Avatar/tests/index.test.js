/**
 *
 * Tests for Avatar
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import $ from 'jquery';
import Avatar from '../index';

describe('<Avatar />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Avatar src="" alt="" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Have no wrapper element if non member', () => {
    const {
      container: { firstChild: avatar },
    } = render(<Avatar src="" alt="" />);
    expect($(avatar).prop('tagName')).toEqual('IMG');
  });

  it('Have one svg icon', () => {
    const { container } = render(<Avatar src="" alt="" size="80px" member />);
    expect($(container).find('svg').length).toEqual(1);
  });
});
