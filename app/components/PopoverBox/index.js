/**
 *
 * Dropdown
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { PopoverInnerWrapper, PopoverOuterWrapper } from './styledWrapper';
import { PopoverTopArrow, PopoverBottomArrow } from './PopoverArrow';

function PopoverBox(props) {
  return (
    <PopoverOuterWrapper
      position={props.popoverPosition}
      visibility={props.isVisible ? 'normal' : 'hidden'}
      onMouseOver={props.onMouseOver}
      onFocus={props.onFocus}
      onMouseOut={props.onMouseOut}
      onBlur={props.onBlur}
      color={props.popoverColor}
    >
      <PopoverInnerWrapper>{props.popoverContent}</PopoverInnerWrapper>
      {props.renderPlace === 'above' ? (
        <PopoverBottomArrow
          position={props.arrowPosition}
          color={props.popoverColor}
        />
      ) : (
        <PopoverTopArrow
          position={props.arrowPosition}
          color={props.popoverColor}
        />
      )}
    </PopoverOuterWrapper>
  );
}

PopoverBox.propTypes = {
  renderPlace: PropTypes.oneOf(['above', 'below']).isRequired,
  arrowPosition: PropTypes.array.isRequired,
  popoverPosition: PropTypes.array.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onMouseOut: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  popoverContent: PropTypes.element.isRequired,
  popoverColor: PropTypes.string,
};

PopoverBox.defaultProps = {
  popoverColor: '#fff',
};

export default PopoverBox;
