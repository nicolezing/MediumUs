import React from 'react';
import { render } from 'react-testing-library';
// import $ from 'jquery';
import GenreCard from '../index';

describe('<GenreCard />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<GenreCard Genre="" GenreLink="" GenreImg="" />);
    expect(spy).not.toHaveBeenCalled();
  });
});
