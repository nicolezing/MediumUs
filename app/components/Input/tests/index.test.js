import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Input from '../index';

describe('<Input />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Input placeholderName="Search Medium" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('The button can be clicked', () => {
    const { getByLabelText } = render(
      <Input placeholderName="Search Medium" />,
    );
    const iconButton = getByLabelText('search-button');
    const mockChange = jest.fn();
    iconButton.onClick = mockChange;
    fireEvent.click(iconButton);
  });

  it('It should allow letters to be inputted', () => {
    const { getByLabelText } = render(
      <Input placeholderName="Search Medium" />,
    );
    const searchInput = getByLabelText('search-input');
    const query = 'art';
    const mockChange = jest.fn();
    expect(searchInput.value).toEqual('');
    searchInput.onChange = mockChange;
    fireEvent.change(searchInput, { target: { value: query } });
  });
});
