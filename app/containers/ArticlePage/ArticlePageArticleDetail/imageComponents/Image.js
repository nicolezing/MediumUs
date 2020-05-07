import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  ImgSmall,
  ImgLarge,
  PreImgWrapper,
  Figcaption,
  Dialog,
} from './imgWrappers';

function Image(props) {
  const enlargeRef = useRef();
  const [cursorClassName, setCursorClassName] = useState('zoom-in');
  const [largeImageLoaded, setLargeImageLoaded] = useState(false);
  const [enlargeState, setEnlargeState] = useState(false);
  const [transformConfig, setTransformConfig] = useState([0, 0, 0]);

  const zoom = () => {
    if (cursorClassName === 'zoom-in') {
      const { height, width, y } = enlargeRef.current.getBoundingClientRect();
      const { innerHeight, innerWidth } = window;
      const scale = Math.min(innerWidth / width, innerHeight / height);
      const transformY = (innerHeight / 2 - y - height / 2) / scale;
      setTransformConfig([scale, transformY]);
      setEnlargeState(true);
      setCursorClassName('zoom-out');
    }
  };

  const deEnlarge = () => {
    if (cursorClassName === 'zoom-out') {
      // delay this state change to avoid {zoom} triggered at same time when click PreImgWrapper
      setTimeout(() => {
        setEnlargeState(false);
        setCursorClassName('zoom-in');
      }, 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', deEnlarge);
    window.addEventListener('mouseup', deEnlarge);

    return () => {
      window.removeEventListener('scroll', deEnlarge);
      window.removeEventListener('mouseup', deEnlarge);
    };
  });

  return (
    <Dialog {...{ enlargeState }}>
      <PreImgWrapper
        onClick={zoom}
        ref={enlargeRef}
        {...{ enlargeState, transformConfig }}
      >
        {!largeImageLoaded && (
          <ImgSmall
            src={props['data-preLoad']}
            alt={props.alt}
            className={cursorClassName}
          />
        )}
        <ImgLarge
          src={props.src}
          alt={props.alt}
          className={`${cursorClassName} ${
            largeImageLoaded ? 'loaded' : 'unloaded'
          }`}
          onLoad={() => {
            setLargeImageLoaded(true);
          }}
        />
      </PreImgWrapper>

      {props.children && <Figcaption>{props.children}</Figcaption>}
    </Dialog>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  children: PropTypes.array,
  'data-preLoad': PropTypes.string.isRequired,
  // 'data-position': PropTypes.oneOf(['around', 'normal', 'wide', 'fullWidth']),
};

export default Image;
