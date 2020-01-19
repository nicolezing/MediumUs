/**
 *
 * Navbar
 *
 */

import React, { useRef, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { IconButton } from '../../../components/Button';
import {
  OuterWrapper,
  InnerWrapper,
  ListContainer,
  FirstA,
  A,
  FirstLinkWrapper,
  LinkWrapper,
} from './Wrappers';

function Navbar() {
  const containerRef = useRef();
  const [firstRender, setFirstRender] = useState(true);
  const [arrowDisableHandler, setArrowDisableHandler] = useState([true, true]);

  const navbarList = [
    {
      menuItem: 'HOME',
      link: './',
    },
    {
      menuItem: 'ONEZERO',
      link: './',
    },
    {
      menuItem: 'ELEMENTAL',
      link: './',
    },
    {
      menuItem: 'GEN',
      link: './',
    },
    {
      menuItem: 'ZORA',
      link: './',
    },
    {
      menuItem: 'FORGE',
      link: './',
    },
    {
      menuItem: 'HUMAN PARTS',
      link: './',
    },
    {
      menuItem: 'MARKER',
      link: './',
    },
    {
      menuItem: 'LEVEL',
      link: './',
    },
    {
      menuItem: 'HEATED',
      link: './',
    },
    {
      menuItem: 'MODUS',
      link: './',
    },
    {
      menuItem: 'MORE',
      link: './',
    },
  ];

  const renderMenu = () =>
    navbarList.map((itemSet, index) => {
      if (index > 0) {
        return (
          <LinkWrapper key={itemSet.menuItem}>
            <A href={itemSet.link}>{itemSet.menuItem}</A>
          </LinkWrapper>
        );
      }
      return (
        <FirstLinkWrapper key={itemSet.menuItem}>
          <FirstA href={itemSet.link}>{itemSet.menuItem}</FirstA>
        </FirstLinkWrapper>
      );
    });

  const scrollAnimation = distance => {
    const step = distance / 40;
    const timer = setInterval(() => {
      const prev = containerRef.current.scrollLeft;
      containerRef.current.scrollLeft += step;
      if (prev === containerRef.current.scrollLeft) {
        clearInterval(timer);
        setArrowDisableState();
      }
    }, 20);
  };

  const scrollToLeft = () => {
    scrollAnimation(-containerRef.current.offsetWidth);
  };

  const scrollToRight = () => {
    scrollAnimation(containerRef.current.offsetWidth);
  };

  const setArrowDisableState = () => {
    let leftDisable;
    let rightDisable;
    const { offsetWidth, scrollLeft, scrollWidth } = containerRef.current;
    if (scrollLeft > 0) {
      leftDisable = 0;
    } else leftDisable = true;
    if (offsetWidth < scrollWidth && scrollLeft + offsetWidth < scrollWidth) {
      rightDisable = 0;
    } else {
      rightDisable = true;
    }
    setArrowDisableHandler([leftDisable, rightDisable]);
  };

  const setNavbarBottomBorder = () => {
    const { top } = document.getElementById('navbar').getBoundingClientRect();
    if (top <= 0) {
      document.getElementById('navbar').style.borderBottom =
        '1px solid rgba(0, 0, 0, 0.05)';
      return;
    }
    if (document.getElementById('navbar').style.borderBottom) {
      document.getElementById('navbar').style.borderBottom = 'none';
    }
  };

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      setArrowDisableState();
      setNavbarBottomBorder();
    }
    window.addEventListener('resize', setArrowDisableState);
    window.addEventListener('scroll', setNavbarBottomBorder);
    return () => {
      window.removeEventListener('resize', setArrowDisableState);
      window.removeEventListener('scroll', setNavbarBottomBorder);
    };
  });

  return (
    <OuterWrapper id="navbar">
      <InnerWrapper>
        <IconButton
          iconName="arrowLeft"
          colorSet="gray"
          onBtnClick={scrollToLeft}
          disabled={arrowDisableHandler[0]}
        />
        <ListContainer ref={containerRef}>
          <div>{renderMenu()} </div>
        </ListContainer>
        <IconButton
          iconName="arrowRight"
          colorSet="pureGray"
          onBtnClick={scrollToRight}
          disabled={arrowDisableHandler[1]}
        />
      </InnerWrapper>
    </OuterWrapper>
  );
}

// Navbar.propTypes = {};

export default Navbar;
