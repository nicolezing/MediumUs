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

class RefHolder extends React.Component {
  render() {
    return this.props.children;
  }
}
RefHolder.propTypes = { children: PropTypes.element.isRequired };

function OverlayTrigger(props) {
  const trigger = useRef();
  const popover = useRef();
  const [isVisible, setVisibility] = useState(false);
  const [arrowPosition, setArrowPosition] = useState([0, 0]);
  const [popoverPosition, setPopoverPosition] = useState([0, 0]);
  const [popoverPlacement, setPopoverPlacement] = useState('under');
  let onPopover = false;

  function setPositionStates() {
    const { aX, aY, pX, pY, place } = setPosition(
      findDOMNode(trigger.current).getBoundingClientRect(),
      findDOMNode(popover.current).getBoundingClientRect(),
      props.placement,
    );
    setArrowPosition([aX, aY]);
    setPopoverPosition([pX, pY]);
    setPopoverPlacement(place);
  }

  const handleClickOutside = () => {
    if (findDOMNode(trigger.current) && isVisible) {
      onTriggerHide();
    }
  };

  useEffect(() => {
    if (props.trigger === 'click') {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
    }
    // Unbind the event listener on clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // not sure about the skip is working or not
  }, [isVisible]);

  // declare public timer
  let timer = null;

  const onTriggerShow = () => {
    // clearTimeOut
    clearTimeout(timer);
    // setTimeOut delay
    if (!isVisible) {
      setPositionStates();
      setVisibility(true);
    }
  };

  const onTriggerHide = () => {
    // clearTimeOut
    clearTimeout(timer);
    if (isVisible && !onPopover) {
      // console.log("it's time to invisible");
      setVisibility(false);
    }
  };

  const delayHide = () => {
    clearTimeout(timer);
    timer = setTimeout(onTriggerHide, 800);
  };

  const delayShow = () => {
    // clearTimeOut
    clearTimeout(timer);
    // setTimeOut delay
    timer = setTimeout(onTriggerShow, 800);
  };

  const onPopoverHover = () => {
    if (!onPopover && isVisible) {
      // console.log('will stay visible');
      onPopover = true;
      setVisibility(true);
    }
  };

  const offPopoverHover = event => {
    // if the event is children element or the origin element itself, means the mouse is still on the popover, so just return
    let e = event.toElement || event.relatedTarget;
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
    // if event is neither children element, nor origin element, means the mouse is outside the dropdown
    onPopover = false;
    // only delay hide if off hover when the trigger === 'hover' or 'focus'
    if (props.trigger !== 'click') {
      return delayHide();
    }
    return onPopover;
  };

  function triggerAction() {
    // onfocus is default for all cases for better accessibility
    let actions = { onFocus: delayShow, onBlur: delayHide };
    if (props.trigger === 'click') {
      actions = { onClick: onTriggerShow, ...actions };
    }
    if (props.trigger === 'hover') {
      actions = { onMouseOver: delayShow, onMouseOut: delayHide, ...actions };
    }
    return actions;
  }

  return (
    <OverlayWrapper>
      <RefHolder ref={trigger}>
        {cloneElement(props.children, triggerAction())}
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
