/*
 * PublicationHeader
 */

import React from 'react';
import { IconButton } from '../../../components/Button';
import OverlayTrigger from '../../../components/OverlayTrigger';
import Avatar from '../../../components/Avatar';
import UserSettingList from '../../HomePage/UserSettingList';
import {
  Wrapper,
  FlexStyledWrapper,
  MarginWrapper,
  AutoHiddenStyledA,
} from '../../HomePage/Header/Wrappers';

function PublicationHeader() {
  return (
    <Wrapper>
      <div>
        <a href="./Homepage">
          <IconButton iconName="logoIcon" colorSet="pureBlack" />
        </a>
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

export default PublicationHeader;
