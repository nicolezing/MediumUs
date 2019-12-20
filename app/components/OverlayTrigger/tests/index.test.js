/**
*
* Tests for OverlayTrigger
*
* @see
https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
*
*/

import React from 'react';
import { render, fireEvent, act } from 'react-testing-library';
import renderWithRedux from '../../../../internals/testing/renderWithRedux';
import 'jest-dom/extend-expect';
import UserSettingList from '../../../containers/HomePage/UserSettingList';
import setPosition from '../setPopoverPosition';
import OverlayTrigger from '../index';
import { getEventHandler } from '../getEventHandler';

describe('getEventHandler', () => {
  it('Expect to return eventHandler object with onMouseDown', () => {
    const obj = getEventHandler('click', () => true, () => true, () => {});
    expect(obj.onMouseDown()).toBe(true);
  });
});

describe('setPosition', () => {
  const triggerSize = { left: 10, top: 10, width: 32, height: 32 };
  const popoverSize = { width: 300, height: 400 };
  const windowWidth = 700;
  const scrollX = 0;
  const scrollY = 0;
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    setPosition(
      triggerSize,
      popoverSize,
      windowWidth,
      scrollX,
      scrollY,
      'dropdown',
    );
    expect(spy).not.toHaveBeenCalled();
  });
  it('Expect render to right and below, output equal as expect', () => {
    const position = setPosition(
      triggerSize,
      popoverSize,
      windowWidth,
      scrollX,
      scrollY,
      'dropdown',
    );
    expect(position).toEqual({
      aX: 15,
      aY: 0,
      pX: 4,
      pY: 49,
      place: 'below',
    });
  });
  it('Expect render to middle and above, output equal as expect', () => {
    const tSize = { left: 200, top: 500, width: 32, height: 32 };
    const position = setPosition(
      tSize,
      popoverSize,
      windowWidth,
      scrollX,
      200,
      'top-bottom',
    );
    expect(position).toEqual({
      aX: 143,
      aY: 0,
      pX: 66,
      pY: 282,
      place: 'above',
    });
  });
  it('Expect render to right and below, output equal as expect', () => {
    const tSize = { left: 600, top: 300, width: 32, height: 32 };
    const position = setPosition(
      tSize,
      popoverSize,
      windowWidth,
      scrollX,
      scrollY,
      'top-bottom',
    );
    expect(position).toEqual({
      aX: 213,
      aY: 0,
      pX: 396,
      pY: 339,
      place: 'below',
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
    renderWithRedux(
      <OverlayTrigger
        placement="dropdown"
        trigger="click"
        popoverContent={<UserSettingList id="loggedIn" />}
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

  it('Expect to have desired visibility with mock click', () => {
    const spy = jest.spyOn(global.console, 'error');
    const { container, getByText } = renderWithRedux(
      <div>
        <OverlayTrigger
          placement="dropdown"
          trigger="click"
          popoverContent={<UserSettingList id="loggedIn" />}
        >
          <div>Clicker</div>
        </OverlayTrigger>
        <div>Outside</div>
      </div>,
    );

    fireEvent.mouseDown(getByText('Clicker'));
    expect(
      getComputedStyle(
        container.querySelector('div div :nth-child(2)'),
      ).getPropertyValue('visibility'),
    ).toEqual('visible');

    act(() => {
      getByText('New story').focus();
    });
    expect(
      getComputedStyle(
        container.querySelector('div div :nth-child(2)'),
      ).getPropertyValue('visibility'),
    ).toEqual('visible');

    act(() => {
      getByText('New story').blur();
      fireEvent.mouseDown(getByText('Outside'));
    });
    expect(
      getComputedStyle(
        container.querySelector('div div :nth-child(2)'),
      ).getPropertyValue('visibility'),
    ).toEqual('hidden');
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to HoverIn visible with mock hover', () => {
    const { container, getByText } = render(
      <div style={{ marginLeft: '500px', marginTop: '100px' }}>
        <OverlayTrigger
          placement="top-bottom"
          trigger="hover"
          popoverContent={
            <div style={{ padding: '20px 30px', whiteSpace: 'nowrap' }}>
              <div>HoverIn</div>
              <div>HoverInStill</div>
            </div>
          }
        >
          <div style={{ padding: '10px', border: '1px solid' }}>HoverMe</div>
        </OverlayTrigger>
        <div>Outside</div>
      </div>,
    );

    const getVisibility = () =>
      getComputedStyle(
        container.querySelector('div div :nth-child(2)'),
      ).getPropertyValue('visibility');
    jest.useFakeTimers();

    act(() => {
      fireEvent.mouseOver(getByText('HoverMe'));
      jest.runAllTimers();
    });
    expect(getVisibility()).toEqual('visible');

    act(() => {
      fireEvent.mouseOut(getByText('HoverMe'));
      fireEvent.mouseOver(getByText('HoverIn'));
      jest.runAllTimers();
    });
    expect(getVisibility()).toEqual('visible');

    act(() => {
      fireEvent.mouseOut(getByText('HoverIn'));
      fireEvent.mouseOver(getByText('HoverInStill'));
      jest.runAllTimers();
    });
    expect(getVisibility()).toEqual('visible');

    act(() => {
      fireEvent.mouseOut(getByText('HoverInStill'));
      fireEvent.mouseOver(getByText('Outside'));
      jest.runAllTimers();
    });
    expect(getVisibility()).toEqual('hidden');
  });
});
