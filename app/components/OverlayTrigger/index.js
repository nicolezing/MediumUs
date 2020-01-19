/* eslint-disable react/no-find-dom-node */
/**
 *
 * OverlayTrigger
 *
 */

import React, { useRef, useState, useEffect, cloneElement } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import setPosition from './setPopoverPosition';
import PopoverBox from './PopoverBox';
import { OverlayWrapper, PopoverWrapper } from './OverlayWrapper';
import RefHolder from './RefHolder';
import { getEventHandler } from './getEventHandler';

function OverlayTrigger(props) {
  const trigger = useRef();
  const popover = useRef();
  const [isVisible, setVisibility] = useState(false);
  const [arrowPosition, setArrowPosition] = useState([0, 0]);
  const [popoverPosition, setPopoverPosition] = useState([0, 0]);
  const [popoverPlacement, setPopoverPlacement] = useState('below');
  let mouseOnPopover = false;

  function setPositionStates() {
    const { aX, aY, pX, pY, place } = setPosition(
      findDOMNode(trigger.current).getBoundingClientRect(),
      findDOMNode(popover.current).getBoundingClientRect(),
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
      props.placement,
    );
    setArrowPosition([aX, aY]);
    setPopoverPosition([pX, pY]);
    setPopoverPlacement(place);
  }

  const handleClickOutsideTrigger = () => {
    if (findDOMNode(trigger.current) && isVisible) {
      onTriggerHide();
    }
  };

  useEffect(() => {
    if (props.trigger === 'click') {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutsideTrigger);
    }
    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideTrigger);
    };
  });

  const handleResize = () => {
    if (isVisible) {
      setPositionStates();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleResize);
    };
  });
  // declare public timer
  let timer = null;

  const onTriggerShow = () => {
    clearTimeout(timer);
    if (!isVisible) {
      setPositionStates();
      setVisibility(true);
    }
  };

  const onTriggerHide = () => {
    clearTimeout(timer);
    if (isVisible && !mouseOnPopover) {
      // if current state is visible, and mouse is not on popover, it's time to invisible
      setVisibility(false);
    }
  };

  const delayAction = fn => () => {
    clearTimeout(timer);
    timer = setTimeout(fn, 800);
  };

  const onPopoverHover = () => {
    // if mouse is on popover and current state is visible
    if (!mouseOnPopover && isVisible) {
      // change mouseOnPopover to true, and popover will stay visible;
      mouseOnPopover = true;
    }
  };

  const offPopoverHover = event => {
    let e = event.toElement || event.relatedTarget;
    // if the event is children element or the origin element itself, means the mouse is still on the popover, no action will be made
    while (e && e.parentNode && e.parentNode !== window) {
      if (
        e.parentNode === findDOMNode(popover.current) ||
        e === findDOMNode(popover.current)
      ) {
        return;
      }
      e = e.parentNode;
    }
    // if event is not any element of popover, means the mouse is outside the popover, change the state, and trigger hide
    mouseOnPopover = false;
    // only delay hide when off hover if the trigger type is 'hover' or 'focus'
    if (props.trigger !== 'click') {
      delayAction(onTriggerHide)();
    }
  };
  return (
    <OverlayWrapper>
      <RefHolder ref={trigger}>
        {cloneElement(
          props.children,
          getEventHandler(
            props.trigger,
            onTriggerShow,
            onTriggerHide,
            delayAction,
          ),
        )}
      </RefHolder>
      <PopoverWrapper>
        <RefHolder ref={popover}>
          <PopoverBox
            popoverContent={props.popoverContent}
            popoverColor={props.popoverColor}
            renderPlace={popoverPlacement}
            arrowPosition={arrowPosition}
            popoverPosition={popoverPosition}
            isVisible={isVisible}
            // if onTriggerShow && mouse on popover, stay visible
            onMouseOver={onPopoverHover}
            onFocus={onPopoverHover}
            // if onTriggerHide && mouse off popover, change to invisible
            onMouseOut={offPopoverHover}
            onBlur={offPopoverHover}
          />
        </RefHolder>
      </PopoverWrapper>
    </OverlayWrapper>
  );
}

OverlayTrigger.propTypes = {
  trigger: PropTypes.oneOf(['click', 'hover', 'focus']).isRequired,
  placement: PropTypes.oneOf(['dropdown', 'top-bottom', 'bottom-top'])
    .isRequired,
  popoverContent: PropTypes.element.isRequired,
  popoverColor: PropTypes.string,
  children: PropTypes.element.isRequired,
};

export default OverlayTrigger;
