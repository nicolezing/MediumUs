import React from 'react';
import $ from 'jquery';
import { render } from 'react-testing-library';
import { OutlinedButton, IconButton } from '../index';

describe('OutlinedButton', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<OutlinedButton text="test" type="outlined" size="middle" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Have no wrapper elements', () => {
    const {
      container: { firstChild: button },
    } = render(<OutlinedButton text="test" type="filled" size="small" />);
    expect($(button).prop('tagName')).toEqual('BUTTON');
  });
});

describe('IconButton', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<IconButton text="test" type="clapIcon" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Have wrapper when glows', () => {
    const {
      container: { firstChild: button },
    } = render(<IconButton text="test" type="clapIcon" effect="glow" />);
    expect($(button).prop('tagName')).toEqual('DIV');
  });
});
