/* eslint-disable react/no-find-dom-node */
import React, { useRef, useEffect, useState } from 'react';
import { findDOMNode } from 'react-dom';
import Sidebar from '../../../components/Sidebar';
import { SidebarWrapper, MidWrapper, StickyWrapper } from './Wrappers';
import Footer from '../Footer';

export const NewFromNetwork = () => (
  <MidWrapper>
    <Sidebar recommendationSource="newFromNetwork" />
  </MidWrapper>
);

export const PopularOnMedium = () => (
  <MidWrapper>
    <Sidebar recommendationSource="popularOnMedium" />
  </MidWrapper>
);

export const ReadingList = () => (
  <MidWrapper>
    <Sidebar recommendationSource="readingList" />
  </MidWrapper>
);

function ScrollListenerMaker() {
  let scrollDistance = 0;
  let scrollDirection = 1;
  let newFixedAt = 0;

  return (setStyles, sidebarRef, stickyContentRef) => () => {
    const { scrollY } = window;
    const display = window
      .getComputedStyle(sidebarRef.current)
      .getPropertyValue('display');

    if (display !== 'none') {
      const windowHeight = document.documentElement.clientHeight;
      const navbarHeight = document.getElementById('navbar').clientHeight;
      const { offsetTop } = findDOMNode(sidebarRef.current);
      const { top, bottom, height } = findDOMNode(
        stickyContentRef.current,
      ).getBoundingClientRect();
      scrollDirection = scrollY - scrollDistance;
      scrollDistance = scrollY;

      if (scrollDirection < 0) {
        if (newFixedAt === 'top') {
          if (scrollY <= offsetTop - navbarHeight) {
            // console.log('will end position adjusting');
            setStyles(() => ({
              position: 'relative',
              transform: 'translateY(0)',
              top: 0,
            }));
            newFixedAt = 'default';
            return;
          }
          return;
        }
        // console.log('going up');
        if (newFixedAt === 'bottom') {
          // console.log('will relative');
          setStyles(() => ({
            position: 'relative',
            transform: `translateY(${scrollY -
              offsetTop -
              height +
              windowHeight}px)`,
            top: 'auto',
          }));
          newFixedAt = '';
          return;
        }
        if (top > navbarHeight && newFixedAt !== 'default') {
          // console.log('will fix at top');
          setStyles(() => ({
            position: 'fixed',
            transform: 'translateY(0)',
            top: `${navbarHeight}px`,
          }));
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
          setStyles(() => ({
            position: 'relative',
            top: 'auto',
            transform: `translateY(${scrollY - offsetTop}px)`,
          }));
          newFixedAt = '';
          return;
        }

        if (bottom <= windowHeight) {
          // console.log('will fix at bottom');
          setStyles(() => ({
            position: 'fixed',
            transform: 'translateY(0)',
            top: 'auto',
            bottom: 0,
          }));
          newFixedAt = 'bottom';
        }
      }
    }
  };
}

const makeScrollListener = ScrollListenerMaker();

function Sidebars() {
  const sidebarRef = useRef();
  const stickyContentRef = useRef();
  const [styles, setStyles] = useState();

  const adjustSidebarPosition = makeScrollListener(
    setStyles,
    sidebarRef,
    stickyContentRef,
  );
  useEffect(() => {
    window.addEventListener('scroll', adjustSidebarPosition);
    return () => {
      window.removeEventListener('scroll', adjustSidebarPosition);
    };
  });

  return (
    <SidebarWrapper ref={sidebarRef}>
      <StickyWrapper ref={stickyContentRef} wrapperStyles={styles}>
        <NewFromNetwork />
        <PopularOnMedium />
        <ReadingList />
        <Footer />
      </StickyWrapper>
    </SidebarWrapper>
  );
}

export default Sidebars;
