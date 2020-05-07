/**
 *
 * Navbar
 *
 */

import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectHomepageLinkList } from '../../../selectors';
import { IconButton } from '../../../components/Button';
import convertToUrlString from '../../../utils/convertToUrl';
import {
  OuterWrapper,
  InnerWrapper,
  ListContainer,
  FirstA,
  A,
  FirstLinkWrapper,
  LinkWrapper,
} from './Wrappers';

function Navbar(props) {
  const containerRef = useRef();
  const [firstRender, setFirstRender] = useState(true);
  const [arrowDisableHandler, setArrowDisableHandler] = useState([true, true]);

  const { navbarList } = props;
  const renderMenu = () =>
    navbarList.map((title, index) => {
      if (index > 0) {
        return (
          <LinkWrapper key={title}>
            <A to={`/publication${convertToUrlString(title)}`}>{title}</A>
          </LinkWrapper>
        );
      }
      return (
        <FirstLinkWrapper key={title}>
          <FirstA to={`/publication${convertToUrlString(title)}`}>
            {title}
          </FirstA>
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
          theme="gray"
          onBtnClick={scrollToLeft}
          disabled={arrowDisableHandler[0]}
        />
        <ListContainer ref={containerRef}>
          <div>{renderMenu()} </div>
        </ListContainer>
        <IconButton
          iconName="arrowRight"
          theme="pureGray"
          onBtnClick={scrollToRight}
          disabled={arrowDisableHandler[1]}
        />
      </InnerWrapper>
    </OuterWrapper>
  );
}

Navbar.propTypes = {
  navbarList: PropTypes.array,
};

function mapStateToProps(state) {
  const { navbarList } = selectHomepageLinkList(state);

  return { navbarList };
}

export default connect(mapStateToProps)(Navbar);
