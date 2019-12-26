/*
 * Header
 */

import React from 'react';
import { IconButton, OutlinedButton } from '../../../components/Button';
import OverlayTrigger from '../../../components/OverlayTrigger';
import Avatar from '../../../components/Avatar';
import UserSettingList from '../UserSettingList';
import {
  Wrapper,
  MainIconStyledA,
  LogoIconStyledA,
  GridStyledWrapper,
  AutoHiddenStyledA,
} from './Wrappers';

function Header() {
  return (
    <Wrapper>
      <div>
        <MainIconStyledA href="./Homepage">
          <IconButton iconName="mainIcon" colorSet="pureBlack" />
        </MainIconStyledA>
        <LogoIconStyledA href="./Homepage">
          <IconButton iconName="logoIcon" colorSet="pureBlack" />
        </LogoIconStyledA>
      </div>
      <GridStyledWrapper>
        {/* placeholder, should be the input component */}
        <IconButton iconName="searchIcon" colorSet="gray" title="Search" />
        <IconButton iconName="bellIcon" colorSet="gray" title="Notifications" />
        <AutoHiddenStyledA href="./">
          <OutlinedButton
            text="Upgrade"
            type="outlined"
            size="middle"
            colorSet="black"
          />
        </AutoHiddenStyledA>
        <OverlayTrigger
          popoverContent={<UserSettingList id="loggedIn" />}
          trigger="click"
          placement="dropdown"
        >
          <Avatar id="loggedIn" />
        </OverlayTrigger>
      </GridStyledWrapper>
    </Wrapper>
  );
}

export default Header;
