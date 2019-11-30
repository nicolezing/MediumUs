import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import GenreCard from '../index';
import {
  DefaultState,
  ActiveState,
  Default,
  Active,
} from '../GenreCardButtonStyle';

describe('<GenreCard />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <GenreCard
        genre=""
        genreLink=""
        genreImg=""
        genreState="defaultState"
        onActiveStateChange={() => {}}
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

describe('<Default/>', () => {
  it('handles clicks', () => {
    const onClickMock = jest.fn();
    const text = 'Click me!';
    const { getByText } = render(
      <Default onClick={onClickMock}> {text} </Default>,
    );

    fireEvent.click(getByText(text));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

describe('<Active/>', () => {
  it('handles clicks', () => {
    const onClickMock = jest.fn();
    const text = 'Click me!';
    const { getByText } = render(
      <Active onClick={onClickMock}> {text} </Active>,
    );

    fireEvent.click(getByText(text));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
