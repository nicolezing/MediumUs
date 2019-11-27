import React from 'react';
import PropTypes from 'prop-types';
import * as ArrowIcon from '../../../staticData/images/navArrowIcon';

function Arrow(props) {
  return (
    <button type="button" onClick={() => props.clicked(props.direction)}>
      <span>
        {props.direction === 'left'
          ? ArrowIcon.leftArrow
          : ArrowIcon.rightArrow}
      </span>
    </button>
  );
}

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Arrow;
