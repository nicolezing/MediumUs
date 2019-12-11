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
import { getEventHandler } from '../getEventHandler';
import waitForExpect from 'wait-for-expect';

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
    const { container, getByText } = render(
      <div>
        <OverlayTrigger
          placement="dropdown"
          trigger="click"
          popoverContent={<UserSettingList {...dropdownInfo} />}
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
    ).toEqual('normal');

    getByText('New story').focus();
    expect(
      getComputedStyle(
        container.querySelector('div div :nth-child(2)'),
      ).getPropertyValue('visibility'),
    ).toEqual('normal');

    getByText('New story').blur();
    fireEvent.mouseDown(getByText('Outside'));
    expect(
      getComputedStyle(
        container.querySelector('div div :nth-child(2)'),
      ).getPropertyValue('visibility'),
    ).toEqual('hidden');
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to HoverIn visible with mock hover', async () => {
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
        <div>Outside</div>
      </div>,
    );
    const popoverEleVisibility = getComputedStyle(
      container.querySelector('div div :nth-child(2)'),
    ).getPropertyValue('visibility');
    const waitForExpect = require('wait-for-expect');
    const sleep = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

    fireEvent.mouseOver(getByText('HoverIn'));
    console.log('want hidden : ', popoverEleVisibility);
    setTimeout(() => console.log('want normal : ', popoverEleVisibility), 850);
    await waitForExpect(async () => {
      await sleep(10);
      expect(popoverEleVisibility).toEqual('normal');
    });
    setTimeout(() => fireEvent.mouseOver(getByText('HoverMe')), 900);
    setTimeout(() => console.log('want normal : ', popoverEleVisibility), 1800);
    setTimeout(() => fireEvent.mouseOver(getByText('Outside')), 2700);
    setTimeout(() => console.log('want normal: ', popoverEleVisibility), 2900);
    setTimeout(
      () => console.log('want hidden 003: ', popoverEleVisibility),
      3600,
    );
    // setTimeout(() => expect(popoverEleVisibility).toEqual('hidden'), 1000);
    // expect(
    //   getComputedStyle(
    //     container.querySelector('div div :nth-child(2)'),
    //   ).getPropertyValue('visibility'),
    // ).toEqual('normal');

    // fireEvent.mouseOver(getByText('HoverIn'));
    // console.log(
    //   'should log',
    //   getComputedStyle(container.querySelector('div div :nth-child(2)')),
    // );
    expect(spy).not.toHaveBeenCalled();

    // console.log(getByText('HoverIn'));
    // expect(getByText('HoverIn')).toHaveStyle(`visibility: normal`);
  });
});
