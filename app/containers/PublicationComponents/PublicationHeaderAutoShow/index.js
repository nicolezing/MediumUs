/*
 * PublicationHeaderAutoShow
 */

import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectCurrentLoginId } from '../../../selectors';
import { IconButton } from '../../../components/Button';
import OverlayTrigger from '../../../components/OverlayTrigger';
import Avatar from '../../../components/Avatar';
import UserSettingList from '../../HomePage/UserSettingList';
import {
  FlexStyledWrapper,
  MarginWrapper,
  AutoHiddenStyledA,
} from '../../HomePage/Header/Wrappers';
import {
  OuterWrapper,
  WidthConstrainWrapper,
  PlaceholderWrapper,
} from './Wrapper';

let lastPosition = 0;

function PublicationHeader(props) {
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
      navbarRef.current.style.boxShadow = 'none';
      navbarRef.current.style.transform = 'translateY(0)';
      return;
    }

    if (lastPosition - scrollY > 40) {
      lastPosition = scrollY;
      // show navbar
      navbarRef.current.style.position = 'fixed';
      navbarRef.current.style.transform = 'translateY(0)';
      navbarRef.current.style.transition = 'transform 0.2s';
      navbarRef.current.style.boxShadow = '0 2px 2px -2px rgba(0,0,0,.15)';
      placeholderRef.current.style.display = 'block';
      return;
    }

    if (lastPosition - scrollY <= 0 && scrollY > height * 2) {
      lastPosition = scrollY;
      // hide navbar
      navbarRef.current.style.transform = `translateY(-${height}px)`;
      navbarRef.current.style.transition = 'transform 0.2s';
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
          <div>
            <a href="./">
              <IconButton iconName="logoIcon" colorSet="pureBlack" />
            </a>
          </div>
          <FlexStyledWrapper>
            {/* placeholder, should be the input component */}
            <MarginWrapper>
              <IconButton
                iconName="searchIcon"
                colorSet="gray"
                title="Search"
              />
            </MarginWrapper>

            <AutoHiddenStyledA href="./">
              <MarginWrapper>
                <IconButton
                  iconName="bookmarkList"
                  colorSet="gray"
                  title="Bookmarks"
                />
              </MarginWrapper>
            </AutoHiddenStyledA>

            <MarginWrapper>
              <IconButton
                iconName="bellIcon"
                colorSet="gray"
                title="Notifications"
              />
            </MarginWrapper>

            <MarginWrapper>
              <OverlayTrigger
                popoverContent={<UserSettingList id={props.userId} />}
                trigger="click"
                placement="dropdown"
              >
                <Avatar id={props.userId} />
              </OverlayTrigger>
            </MarginWrapper>
          </FlexStyledWrapper>
        </WidthConstrainWrapper>
      </OuterWrapper>
      <PlaceholderWrapper ref={placeholderRef} />
    </>
  );
}

PublicationHeader.propTypes = {
  userId: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  const userId = selectCurrentLoginId(state);
  return { userId };
}

export default connect(mapStateToProps)(PublicationHeader);
