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
        onActiveStateChange={() => {}}
      />,
    );
    expect(spy).not.toHaveBeenCalled();
  });
  // it('handles clicks', () => {
  //   const onClickMock = jest.fn();
  //   const text = 'Click me!';
  //   const { getByText } = render(
  //     <Default onClick={onClickMock}> {text} </Default>,
  //   );

  //   const test = jest.spyOn(fireEvent.click(getByText(text)));
  //   expect(test).toHaveBeenCalled();
  // });
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
