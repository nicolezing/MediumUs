/*
 * ArticlePageAutoHideHeader
 */

import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Header from '../../HomePage/Header';
import ArticlePageNavbar from './ArticlePageNavbar';
import {
  OuterWrapper,
  MiddleDivider,
  PlaceholderWrapper,
  WidthConstrainWrapper,
} from './Wrapper';

let lastPosition = 0;

function ArticlePageAutoHideHeader(props) {
  const navbarRef = useRef();
  const placeholderRef = useRef();
  const [height, setHeight] = useState(0);
  const [className, setClassName] = useState('');

  const autoShowNavbar = () => {
    const { scrollY } = window;
    setHeight(navbarRef.current.getBoundingClientRect().height);

    if (scrollY === 0) {
      lastPosition = scrollY;
      // back to top
      setClassName('to_top');
      return;
    }

    if (lastPosition - scrollY > 40) {
      lastPosition = scrollY;
      // show navbar
      setClassName('show_nav');
      return;
    }

    if (lastPosition - scrollY <= 0 && scrollY > 24) {
      lastPosition = scrollY;
      // hide navbar
      setClassName('hide_nav');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', autoShowNavbar);
    return () => {
      window.removeEventListener('scroll', autoShowNavbar);
    };
  });

  return (
    <>
      <OuterWrapper ref={navbarRef} className={className} height={height}>
        <WidthConstrainWrapper>
          <Header logoType="icon" />
        </WidthConstrainWrapper>
        <MiddleDivider>
          <WidthConstrainWrapper>
            {props.publicationId && (
              <ArticlePageNavbar publicationId={props.publicationId} />
            )}
          </WidthConstrainWrapper>
        </MiddleDivider>
      </OuterWrapper>
      <PlaceholderWrapper
        ref={placeholderRef}
        height={height}
        className={className}
      />
    </>
  );
}

ArticlePageAutoHideHeader.propTypes = {
  publicationId: PropTypes.string.isRequired,
};

export default ArticlePageAutoHideHeader;
