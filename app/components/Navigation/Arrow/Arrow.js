import React from 'react';
import PropTypes from 'prop-types';
import * as ArrowIcon from '../../../staticData/images/navArrowIcon';
import { ArrowStyle, Button, Span } from './ArrowStyle';

function Arrow(props) {
  return (
    <ArrowStyle>
      <Button type="button" onClick={() => props.clicked(props.direction)}>
        <Span>
          {props.direction === 'left'
            ? ArrowIcon.leftArrow
            : ArrowIcon.rightArrow}
        </Span>
      </Button>
    </ArrowStyle>
  );
}

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Arrow;
