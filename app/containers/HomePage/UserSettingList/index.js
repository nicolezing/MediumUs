/**
 *
 * UserSettingList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  UnorderedList,
  DividedList,
  A,
  GreenA,
  UserDarkStyledA,
  UserColorStyledA,
} from './styledListItems';
import { UserWrapper, UsernameWrapper } from './styledWrappers';
import Avatar from '../../../components/Avatar';
import { selectUserInfo } from '../../../selectors';

function UserSettingList(props) {
  const listItems = [
    { key: 'divider1' },
    { key: 'newStory', href: './', text: 'New story' },
    { key: 'stores', href: './', text: 'Stories' },
    { key: 'series', href: './', text: 'Series' },
    { key: 'stats', href: './', text: 'Stats' },
    { key: 'divider2' },
    { key: 'partnerProgram', href: './', text: 'Medium Partner Program' },
    { key: 'divider3' },
    { key: 'bookmark', href: './', text: 'Bookmarks' },
    { key: 'publications', href: './', text: 'Publications' },
    {
      key: 'customizeInterests',
      href: './',
      text: 'Customize your interests',
    },
    { key: 'divider4' },
    { key: 'profile', href: './', text: 'Profile' },
    { key: 'settings', href: './', text: 'Settings' },
    { key: 'help', href: './', text: 'Help' },
    { key: 'signOut', href: './', text: 'SignOut' },
  ];

  function renderList(list) {
    return list.map(item => {
      if (item.href) {
        return (
          <li key={item.key}>
            <A to={item.href}>{item.text}</A>
          </li>
        );
      }
      return <DividedList key={item.key} />;
    });
  }

  return (
    <UnorderedList>
      <li key="username">
        <UserWrapper>
          <Avatar size="50px" id={props.id} />
          <UsernameWrapper>
            <UserDarkStyledA
              to={`${props.domain}/${props.userLinkSuffix}`}
              aria-label={`Go to the profile of ${props.username}`}
            >
              {props.username}
            </UserDarkStyledA>
            <UserColorStyledA to={`${props.domain}/${props.userLinkSuffix}`}>
              {props.userLinkSuffix}
            </UserColorStyledA>
          </UsernameWrapper>
        </UserWrapper>
      </li>
      <li key="becomeAMember">
        <GreenA to="./">Become a member</GreenA>
      </li>
      {renderList(listItems)}
    </UnorderedList>
  );
}

UserSettingList.propTypes = {
  username: PropTypes.string.isRequired,
  userLinkSuffix: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  // #TODO: will add other links as props
};

function mapStateToProps(state, ownProps) {
  const { id: userId } = ownProps;
  const { name: username, userLinkSuffix, link: domain } = selectUserInfo(
    state,
    userId,
  );
  return {
    username,
    userLinkSuffix,
    domain,
  };
}
export default connect(mapStateToProps)(UserSettingList);
