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
import PopoverBox from '../PopoverBox';
import OverlayWrapper from './OverlayWrapper';
import RefHolder from './RefHolder';
import { getTriggerAction } from './getTriggerAction';

function OverlayTrigger(props) {
  const trigger = useRef();
  const popover = useRef();
  const [isVisible, setVisibility] = useState(false);
  const [arrowPosition, setArrowPosition] = useState([0, 0]);
  const [popoverPosition, setPopoverPosition] = useState([0, 0]);
  const [popoverPlacement, setPopoverPlacement] = useState('under');
  let mouseOnPopover = false;

  function setPositionStates() {
    const { aX, aY, pX, pY, place } = setPosition(
      findDOMNode(trigger.current).getBoundingClientRect(),
      findDOMNode(popover.current).getBoundingClientRect(),
      window.innerWidth,
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
      console.log('add handleclikcoutsidetrigger');
      document.addEventListener('mousedown', handleClickOutsideTrigger);
    }
    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideTrigger);
    };
    // #TODO not sure about the skip is working or not
  }, [isVisible]);

  // declare public timer
  let timer = null;

  const onTriggerShow = () => {
    // clearTimeOut
    clearTimeout(timer);
    // setTimeOut delay
    console.log('in trigger show');
    if (!isVisible) {
      console.log("it's time to show");

      setPositionStates();
      setVisibility(true);
    }
  };

  const onTriggerHide = () => {
    // clearTimeOut
    console.log('in trigger hide');
    clearTimeout(timer);
    console.log(isVisible, !mouseOnPopover, `in trigger hide`);
    if (isVisible && !mouseOnPopover) {
      console.log("it's time to hide");

      // if current state is visible, and mouse is not on popover, it's time to invisible
      setVisibility(false);
    }
  };

  const delayAction = fn => () => {
    clearTimeout(timer);
    // setTimeOut delay
    console.log('start delay timer');
    timer = setTimeout(fn, 800);
  };

  const onPopoverHover = () => {
    // if mouse is on popover and current state is visible
    console.log('in popoverHover');

    if (!mouseOnPopover && isVisible) {
      console.log('on popover, stay visible');
      // change mouseOnPopover to true, and popover will stay visible;
      mouseOnPopover = true;
      //????
      setVisibility(true);
    }
  };

  const offPopoverHover = event => {
    // if the event is children element or the origin element itself, means the mouse is on the popover, so just return
    let e = event.toElement || event.relatedTarget;
    console.log('in offPopoverHover');
    while (e && e.parentNode && e.parentNode !== window) {
      if (
        e.parentNode === findDOMNode(popover.current) ||
        e === findDOMNode(popover.current)
      ) {
        if (e.preventDefault) {
          e.preventDefault();
        }
        return false;
      }
      e = e.parentNode;
    }
    // if event is not any element of popover, means the mouse is outside the popover
    mouseOnPopover = false;
    // only delay hide when off hover if the trigger type is 'hover' or 'focus'
    if (props.trigger !== 'click') {
      console.log('mouse off, its not a  click, start delay hide');
      // return delayHide();
      return delayAction(onTriggerHide)();
    }
    console.log('its a click, return');
    return mouseOnPopover;
  };
  const eventListeners = getTriggerAction(
    props.trigger,
    onTriggerShow,
    onTriggerHide,
    delayAction,
  );
  return (
    <OverlayWrapper>
      <RefHolder ref={trigger}>
        {cloneElement(props.children, eventListeners)}
      </RefHolder>
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
    </OverlayWrapper>
  );
}

OverlayTrigger.propTypes = {
  trigger: PropTypes.oneOf(['click', 'hover', 'focus']).isRequired,
  placement: PropTypes.oneOf(['dropdown', 'top-bottom']).isRequired,
  popoverContent: PropTypes.element.isRequired,
  popoverColor: PropTypes.string,
  // children element needs to be an element or class component, not a functional component
  children: PropTypes.element.isRequired,
};

export default OverlayTrigger;
