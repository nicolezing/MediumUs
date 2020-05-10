/* eslint-disable no-param-reassign */
import React, { useRef, useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import SidebarComponents from './SidebarComponents';
import { SidebarWrapper, StickyWrapper } from './Wrappers';
import Footer from '../Footer';

function ScrollListenerMaker() {
  let scrollDistance = 0;
  let scrollDirection = 1;
  let newFixedAt = 0;

  return (sidebarRef, stickyContentRef, setClassName, setCssData) => () => {
    const { scrollY } = window;
    const display = window
      .getComputedStyle(sidebarRef.current)
      .getPropertyValue('display');

    if (display !== 'none') {
      const windowHeight = document.documentElement.clientHeight;
      const navbarHeight = document.getElementById('navbar').clientHeight;
      const { offsetTop } = sidebarRef.current;
      const {
        top,
        bottom,
        height,
      } = stickyContentRef.current.getBoundingClientRect();
      scrollDirection = scrollY - scrollDistance;
      scrollDistance = scrollY;

      if (scrollDirection < 0) {
        if (newFixedAt === 'top') {
          if (scrollY <= offsetTop - navbarHeight) {
            // console.log('will end position adjusting');
            setClassName('initial');
            newFixedAt = 'default';
            return;
          }
          return;
        }
        // console.log('going up');
        if (newFixedAt === 'bottom') {
          // console.log('will relative');
          setCssData(scrollY - offsetTop - height + windowHeight);
          setClassName('moving');
          newFixedAt = '';
          return;
        }
        if (top > navbarHeight && newFixedAt !== 'default') {
          // console.log('will fix at top');
          setCssData(navbarHeight);
          setClassName('fix_at_top');
          newFixedAt = 'top';
          return;
        }
      }

      if (scrollDirection > 0) {
        if (newFixedAt === 'bottom') {
          return;
        }
        // console.log('going down');
        if (newFixedAt === 'top') {
          // console.log('will relative');
          setCssData(scrollY - offsetTop);
          setClassName('moving');
          newFixedAt = '';
          return;
        }

        if (bottom <= windowHeight) {
          // console.log('will fix at bottom');
          setClassName('fix_at_bottom');
          newFixedAt = 'bottom';
        }
      }
    }
  };
}
const makeScrollListener = ScrollListenerMaker();

function AutoStickySidebars() {
  const sidebarRef = useRef();
  const stickyContentRef = useRef();
  const [className, setClassName] = useState('');
  const [cssData, setCssData] = useState(0);

  const adjustSidebarPosition = makeScrollListener(
    sidebarRef,
    stickyContentRef,
    setClassName,
    setCssData,
  );

  useEffect(() => {
    if (window.scrollY !== 0) {
      adjustSidebarPosition();
    }
    window.addEventListener('scroll', adjustSidebarPosition);
    return () => {
      window.removeEventListener('scroll', adjustSidebarPosition);
    };
  });

  const { NewFromNetwork, PopularOnMedium, ReadingList } = SidebarComponents;

  return (
    <SidebarWrapper ref={sidebarRef}>
      <StickyWrapper
        ref={stickyContentRef}
        className={className}
        cssData={cssData}
      >
        <NewFromNetwork />
        <PopularOnMedium />
        <ReadingList />
        <Footer />
      </StickyWrapper>
    </SidebarWrapper>
  );
}

// AutoStickySidebars.propTypes = {};

export default AutoStickySidebars;
