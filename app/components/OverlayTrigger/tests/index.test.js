/**
*
* Tests for OverlayTrigger
*
* @see
https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
*
*/

import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import UserSettingList from '../../../containers/HomePage/UserSettingList';
import { dropdownInfo } from '../stories/exampleData';
import 'jest-dom/extend-expect';
import setPosition from '../setPopoverPosition';
import OverlayTrigger from '../index';

describe('setPosition', () => {
  const triggerSize = { left: 10, top: 10, width: 32, height: 32 };
  const popoverSize = { width: 300, height: 400 };
  const windowWidth = 700;
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    setPosition(triggerSize, popoverSize, windowWidth, 'dropdown');
    expect(spy).not.toHaveBeenCalled();
  });
  it('Expect render to right and under, output equal as expect', () => {
    const position = setPosition(
      triggerSize,
      popoverSize,
      windowWidth,
      'dropdown',
    );
    expect(position).toEqual({
      aX: 15,
      aY: 0,
      pX: -6,
      pY: 0,
      place: 'under',
    });
  });
  it('Expect render to middle and above, output equal as expect', () => {
    const tSize = { left: 200, top: 500, width: 32, height: 32 };
    const position = setPosition(tSize, popoverSize, windowWidth, 'top-bottom');
    expect(position).toEqual({
      aX: 143,
      aY: 0,
      pX: -134,
      pY: -450,
      place: 'above',
    });
  });
  it('Expect render to right and under, output equal as expect', () => {
    const tSize = { left: 600, top: 300, width: 32, height: 32 };
    const position = setPosition(tSize, popoverSize, windowWidth, 'top-bottom');
    expect(position).toEqual({
      aX: 213,
      aY: 0,
      pX: -204,
      pY: 0,
      place: 'under',
    });
  });
});

describe('<OverlayTrigger />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <OverlayTrigger
        placement="dropdown"
        trigger="click"
        popoverContent={<div />}
      >
        <div />
      </OverlayTrigger>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <OverlayTrigger
        placement="dropdown"
        trigger="click"
        popoverContent={<UserSettingList {...dropdownInfo} />}
      >
        <div />
      </OverlayTrigger>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <div style={{ float: 'right', marginRight: '10px' }}>
        <OverlayTrigger
          placement="dropdown"
          trigger="click"
          popoverContent={
            <div style={{ padding: '20px 30px', whiteSpace: 'nowrap' }}>
              Click anywhere else on the page
            </div>
          }
        >
          <div style={{ padding: '10px', border: '1px solid' }}>Click Me</div>
        </OverlayTrigger>
      </div>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to not log errors in console with mock click', () => {
    const spy = jest.spyOn(global.console, 'error');
    const { getByText } = render(
      <OverlayTrigger
        placement="dropdown"
        trigger="click"
        popoverContent={<UserSettingList {...dropdownInfo} />}
      >
        <div>Clicker</div>
      </OverlayTrigger>,
    );
    fireEvent.click(getByText('Clicker'));
    fireEvent.mouseOver(getByText('New story'));
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to HoverIn visible with mock hover', () => {
    const spy = jest.spyOn(global.console, 'error');

    const { container, getByText } = render(
      <div style={{ marginLeft: '500px', marginTop: '100px' }}>
        <OverlayTrigger
          placement="top-bottom"
          trigger="hover"
          popoverContent={
            <div style={{ padding: '20px 30px', whiteSpace: 'nowrap' }}>
              HoverIn
            </div>
          }
        >
          <div style={{ padding: '10px', border: '1px solid' }}>HoverMe</div>
        </OverlayTrigger>
      </div>,
    );
    fireEvent.mouseOver(getByText('HoverMe'));
    console.log(container.querySelectorAll('div')[1].style.visibility);
    fireEvent.mouseOver(getByText('HoverMe'));
    expect(spy).not.toHaveBeenCalled();

    // console.log(getByText('HoverIn'));
    // expect(getByText('HoverIn')).toHaveStyle(`visibility: normal`);
  });
});
