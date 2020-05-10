/*
 * PublicationHeaderAutoShow
 */

import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
  const [className, setClassName] = useState('');
  const [height, setHeight] = useState(0);

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

    if (lastPosition - scrollY <= 0 && scrollY > height * 2) {
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
          <div>
            <Link to="/">
              <IconButton iconName="logoIcon" theme="pureBlack" />
            </Link>
          </div>
          <FlexStyledWrapper>
            {/* placeholder, should be the input component */}
            <MarginWrapper>
              <IconButton iconName="searchIcon" theme="gray" title="Search" />
            </MarginWrapper>

            <AutoHiddenStyledA to="./">
              <MarginWrapper>
                <IconButton
                  iconName="bookmarkList"
                  theme="gray"
                  title="Bookmarks"
                />
              </MarginWrapper>
            </AutoHiddenStyledA>

            <MarginWrapper>
              <IconButton
                iconName="bellIcon"
                theme="gray"
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
      <PlaceholderWrapper
        ref={placeholderRef}
        height={height}
        className={className}
      />
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
