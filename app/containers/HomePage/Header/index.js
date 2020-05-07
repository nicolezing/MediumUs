/*
 * Header
 */

import React from 'react';
import { connect } from 'react-redux';
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
import selectCurrentLoginId from '../../../selectors/selectCurrentLoginId';

function Header(props) {
  const renderLogo = () => {
    if (props.logoType === 'icon') {
      return (
        <div>
          <a href="/MediumUs">
            <IconButton iconName="logoIcon" theme="pureBlack" />
          </a>
        </div>
      );
    }
    return (
      <div>
        <MainIconStyledA href="/MediumUs">
          <IconButton iconName="mainLogoIcon" theme="pureBlack" />
        </MainIconStyledA>
        <LogoIconStyledA href="/MediumUs">
          <IconButton iconName="logoIcon" theme="pureBlack" />
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
          <IconButton iconName="searchIcon" theme="gray" title="Search" />
        </MarginWrapper>

        <AutoHiddenStyledA href="./">
          <MarginWrapper>
            <IconButton
              iconName="bookmarkList"
              theme="gray"
              title="Bookmarks"
            />
          </MarginWrapper>
        </AutoHiddenStyledA>

        <MarginWrapper>
          <IconButton iconName="bellIcon" theme="gray" title="Notifications" />
        </MarginWrapper>

        <AutoHiddenStyledA href="./">
          <MarginWrapper>
            <OutlinedButton
              text="Upgrade"
              type="outlined"
              size="middle"
              theme="black"
            />
          </MarginWrapper>
        </AutoHiddenStyledA>
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
    </Wrapper>
  );
}

Header.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  logoType: PropTypes.string,
  userId: PropTypes.string,
};

function mapStateToProps(state) {
  const userId = selectCurrentLoginId(state);
  return { userId };
}

export default connect(mapStateToProps)(Header);
