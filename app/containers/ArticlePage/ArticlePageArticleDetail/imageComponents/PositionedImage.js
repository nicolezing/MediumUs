import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from './Image';
import {
  AroundFigure,
  Figure,
  NormalWrapper,
  WideWrapper,
  FullScreenWrapper,
} from './positionWrappers';
import RefContainer from '../../refContainer';

function PositionedImage(props) {
  const position = props['data-position'];

  return (
    <>
      {position === 'around' && (
        <div>
          <RefContainer refType="imageRef" uuid={props.uuid}>
            <AroundFigure>
              <Image {...props} />
            </AroundFigure>
          </RefContainer>
        </div>
      )}
      {position === 'normal' && (
        <NormalWrapper>
          <Figure>
            <Image {...props} />
          </Figure>
        </NormalWrapper>
      )}
      {position === 'wide' && (
        <RefContainer refType="imageRef" uuid={props.uuid}>
          <WideWrapper>
            <Figure>
              <Image {...props} />
            </Figure>
          </WideWrapper>
        </RefContainer>
      )}
      {position === 'fullWidth' && (
        <RefContainer refType="imageRef" uuid={props.uuid}>
          <FullScreenWrapper>
            <Figure>
              <Image {...props} />
            </Figure>
          </FullScreenWrapper>
        </RefContainer>
      )}
    </>
  );
}

PositionedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  children: PropTypes.array,
  'data-preLoad': PropTypes.string,
  'data-position': PropTypes.oneOf(['around', 'normal', 'wide', 'fullWidth']),
  uuid: PropTypes.string.isRequired,
};

export default connect(null)(PositionedImage);
