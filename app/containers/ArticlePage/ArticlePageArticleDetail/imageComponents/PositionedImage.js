import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import {
  AroundFigure,
  Figure,
  NormalWrapper,
  WideWrapper,
  FullScreenWrapper,
} from './positionWrappers';

function PositionedImage(props) {
  const position = props['data-position'];

  return (
    <>
      {position === 'around' && (
        <div>
          <AroundFigure>
            <Image {...props} />
          </AroundFigure>
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
        <WideWrapper>
          <Figure>
            <Image {...props} />
          </Figure>
        </WideWrapper>
      )}
      {position === 'fullWidth' && (
        <FullScreenWrapper>
          <Figure>
            <Image {...props} />
          </Figure>
        </FullScreenWrapper>
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
};

export default PositionedImage;
