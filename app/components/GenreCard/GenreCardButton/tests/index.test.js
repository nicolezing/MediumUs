import React from 'react';
import { render } from 'react-testing-library';
// import $ from 'jquery';
import GenreCardButton from '../index';

describe('<GenreCardButton />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<GenreCardButton type="default" />);
    expect(spy).not.toHaveBeenCalled();
  });
});
