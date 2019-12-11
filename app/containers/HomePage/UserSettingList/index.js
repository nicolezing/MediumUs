/**
 *
 * UserSettingList
 *
 */

import React from 'react';
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

function UserSettingList(props) {
  const listItems = [
    { key: 'divider1' },
    { key: 'newStory', href: './', innerHtml: 'New story' },
    { key: 'stores', href: './', innerHtml: 'Stories' },
    { key: 'series', href: './', innerHtml: 'Series' },
    { key: 'stats', href: './', innerHtml: 'Stats' },
    { key: 'divider2' },
    { key: 'partnerProgram', href: './', innerHtml: 'Medium Partner Program' },
    { key: 'divider3' },
    { key: 'bookmark', href: './', innerHtml: 'Bookmarks' },
    { key: 'publications', href: './', innerHtml: 'Publications' },
    {
      key: 'customizeInterests',
      href: './',
      innerHtml: 'Customize your interests',
    },
    { key: 'divider4' },
    { key: 'profile', href: './', innerHtml: 'Profile' },
    { key: 'settings', href: './', innerHtml: 'Settings' },
    { key: 'help', href: './', innerHtml: 'Help' },
    { key: 'signOut', href: './', innerHtml: 'SignOut' },
  ];

  function renderList(list) {
    return list.map(item => {
      if (item.href) {
        return (
          <li key={item.key}>
            <A href={item.href}>{item.innerHtml}</A>
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
          <Avatar size="50px" src={props.userAvatar} alt={props.username} />
          <UsernameWrapper>
            <UserDarkStyledA
              href={`${props.domain}/${props.userLinkSuffix}`}
              aria-label={`Go to the profile of ${props.username}`}
            >
              {props.username}
            </UserDarkStyledA>
            <UserColorStyledA href={`${props.domain}/${props.userLinkSuffix}`}>
              {props.userLinkSuffix}
            </UserColorStyledA>
          </UsernameWrapper>
        </UserWrapper>
      </li>
      <li key="becomeAMember">
        <GreenA href="./">Become a member</GreenA>
      </li>
      {renderList(listItems)}
    </UnorderedList>
  );
}

UserSettingList.propTypes = {
  userAvatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userLinkSuffix: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
  // #TODO: will add other links as props
};

export default UserSettingList;
