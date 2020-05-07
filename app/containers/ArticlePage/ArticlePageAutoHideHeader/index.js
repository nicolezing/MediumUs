/*
 * ArticlePageAutoHideHeader
 */

import React, { useRef, useEffect } from 'react';
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

  const autoShowNavbar = () => {
    const { scrollY } = window;
    const { height } = navbarRef.current.getBoundingClientRect();

    placeholderRef.current.style.height = `${height}px`;

    if (scrollY === 0) {
      lastPosition = scrollY;
      // back to top
      placeholderRef.current.style.display = 'none';
      navbarRef.current.style.position = 'relative';
      navbarRef.current.style.transform = 'translateY(0)';
      return;
    }

    if (lastPosition - scrollY > 40) {
      lastPosition = scrollY;
      // show navbar
      navbarRef.current.style.position = 'fixed';
      navbarRef.current.style.transform = 'translateY(0)';
      navbarRef.current.style.transition = 'transform 0.3s';
      placeholderRef.current.style.display = 'block';
      return;
    }

    if (lastPosition - scrollY <= 0 && scrollY > 24) {
      lastPosition = scrollY;
      // hide navbar
      navbarRef.current.style.transform = `translateY(-${height}px)`;
      navbarRef.current.style.transition = 'transform 0.3s';
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
      <OuterWrapper ref={navbarRef}>
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
      <PlaceholderWrapper ref={placeholderRef} />
    </>
  );
}

ArticlePageAutoHideHeader.propTypes = {
  publicationId: PropTypes.string.isRequired,
};

export default ArticlePageAutoHideHeader;
