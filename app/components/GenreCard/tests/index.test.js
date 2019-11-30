import React from 'react';
import { render } from 'react-testing-library';
import GenreCard from '../index';
import { DefaultState, ActiveState } from '../GenreCardButtonStyle';

describe('<GenreCard />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <GenreCard
        genre=""
        genreLink=""
        genreImg=""
        genreState="defaultState"
        onClick={() => {}}
      />,
    );
    expect(spy).not.toHaveBeenCalled();
  });
});

describe('<DefaultState />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<DefaultState />);
    expect(spy).not.toHaveBeenCalled();
  });
});

describe('<ActiveState />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<ActiveState />);
    expect(spy).not.toHaveBeenCalled();
  });
});
