/**
 *
 * Dropdown
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import {
  UnorderedList,
  DividerList,
  A,
  GreenA,
  UserDarkStyledA,
  UserColorStyledA,
} from './styledListItems';

import {
  UserWrapper,
  UsernameWrapper,
  PopoverInnerWrapper,
  PopoverOuterWrapper,
} from './styledWrapper';
import { PopoverArrow } from './PopoverArrow';

function Dropdown(props) {
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
    { key: 'profile', href: './', innerHtml: 'Become a Profile' },
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
      return <DividerList key={item.key} />;
    });
  }

  return (
    <PopoverOuterWrapper>
      <PopoverInnerWrapper>
        <UnorderedList>
          <li key="username">
            <UserWrapper>
              <Avatar size="50px" src={props.userAvatar} alt={props.username} />
              <UsernameWrapper>
                <UserDarkStyledA
                  href={props.userLink}
                  aria-label={`Go to the profile of ${props.username}`}
                >
                  {props.username}
                </UserDarkStyledA>
                <UserColorStyledA href={props.userLink}>
                  {`@${props.username.toLowerCase()}`}
                </UserColorStyledA>
              </UsernameWrapper>
            </UserWrapper>
          </li>
          <li key="becomeAMember">
            <GreenA href="./">Become a member</GreenA>
          </li>
          {renderList(listItems)}
        </UnorderedList>
      </PopoverInnerWrapper>
      <PopoverArrow />
    </PopoverOuterWrapper>
  );
}

Dropdown.propTypes = {
  userAvatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  userLink: PropTypes.string.isRequired,
};

export default Dropdown;
