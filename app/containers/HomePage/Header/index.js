/*
 * Header
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, OutlinedButton } from '../../../components/Button';
import OverlayTrigger from '../../../components/OverlayTrigger';
import Avatar from '../../../components/Avatar';
import UserSettingList from '../UserSettingList';
import {
  Wrapper,
  MainIconStyledA,
  LogoIconStyledA,
  FlexStyledWrapper,
  MarginWrapper,
  AutoHiddenStyledA,
} from './Wrappers';

function Header(props) {
  const renderLogo = () => {
    if (props.logoType === 'icon') {
      return (
        <div>
          <a href="./">
            <IconButton iconName="logoIcon" colorSet="pureBlack" />
          </a>
        </div>
      );
    }
    return (
      <div>
        <MainIconStyledA href="./">
          <IconButton iconName="mainIcon" colorSet="pureBlack" />
        </MainIconStyledA>
        <LogoIconStyledA href="./">
          <IconButton iconName="logoIcon" colorSet="pureBlack" />
        </LogoIconStyledA>
      </div>
    );
  };

  return (
    <Wrapper>
      {renderLogo()}
      <FlexStyledWrapper>
        {/* placeholder, should be the input component */}
        <MarginWrapper>
          <IconButton iconName="searchIcon" colorSet="gray" title="Search" />
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

        <AutoHiddenStyledA href="./">
          <MarginWrapper>
            <OutlinedButton
              text="Upgrade"
              type="outlined"
              size="middle"
              colorSet="black"
            />
          </MarginWrapper>
        </AutoHiddenStyledA>
        <MarginWrapper>
          <OverlayTrigger
            popoverContent={<UserSettingList id="loggedIn" />}
            trigger="click"
            placement="dropdown"
          >
            <Avatar id="loggedIn" />
          </OverlayTrigger>
        </MarginWrapper>
      </FlexStyledWrapper>
    </Wrapper>
  );
}

Header.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  logoType: PropTypes.string,
};

export default Header;
