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
  FlexStyledWrapper,
  MarginWrapper,
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

export default Header;
