/**
 *
 * AuthorCards
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import { styledComponents } from './AuthorCardsWrappers';
import { OutlinedButton } from '../Button';
import StarIcon from '../../staticData/svgIcons/starIcon';
import getAuthorInfoDisplayPropertiesByVariation from './getAuthorInfoDisplayPropertiesByVariation';
import OverlayTrigger from '../OverlayTrigger';
import PopoverContent from './PopoverContent/index';
import requiredIfAllPresent from '../../utils/requiredIfAllPresent';
import formatDate from './formatDate';
import UpdatedDatePopoverContent from './updatedDatePopoverContent';

function AuthorCard(props) {
  const {
    StyledContainer,
    StyledTextContainer,
    StyledA,
    UpTextWrapper,
    DownTextWrapper,
    StyledSpanSpecial,
  } = styledComponents(props.variation);

  const {
    avatarSize,
    isDisplayAvatar,
    hasFollowButton,
  } = getAuthorInfoDisplayPropertiesByVariation(props.variation);

  const {
    hoverEffect,
    authorLink,
    authorName,
    authorDescription,
    memberJoinedDate = null,
    member,
    avatarImg,
    authorFollowers,
    publicationLink,
    publication,
    publicationDescription,
    publicationLogo,
    publicationFollowers,
    creationDate,
    readingTime,
    premium,
    lastModified,
  } = props;

  function renderAuthor() {
    const ele = (
      <StyledA href={authorLink} key="name">
        {authorName}
      </StyledA>
    );

    if (hoverEffect) {
      const { year, month } = formatDate(memberJoinedDate);
      return (
        <OverlayTrigger
          popoverContent={
            <PopoverContent
              headerLink={authorLink}
              header={authorName}
              subHeader={authorDescription}
              joinedDate={`${month} ${year}`}
              member={member}
              imgLink={avatarImg}
              imgAlt={authorName}
              followersNumber={authorFollowers}
              imgType="avatar"
            />
          }
          trigger="hover"
          placement="top-bottom"
        >
          {ele}
        </OverlayTrigger>
      );
    }
    return ele;
  }

  const renderPublication = () => {
    const ele = (
      <StyledA href={publicationLink} key="publication">
        {publication}
      </StyledA>
    );

    if (hoverEffect) {
      return (
        <OverlayTrigger
          popoverContent={
            <PopoverContent
              headerLink={publicationLink}
              header={publication}
              subHeader={publicationDescription}
              imgLink={publicationLogo}
              imgAlt={publication}
              followersNumber={publicationFollowers}
            />
          }
          trigger="hover"
          placement="top-bottom"
        >
          {ele}
        </OverlayTrigger>
      );
    }
    return ele;
  };

  function renderDateTime() {
    const { month, day } = formatDate(creationDate);
    const ele = (
      <DownTextWrapper>
        <time>{`${month} ${day}`}</time>
        <StyledSpanSpecial>&middot;</StyledSpanSpecial>
        <span>{readingTime}</span>
        {premium && <StyledSpanSpecial>{StarIcon}</StyledSpanSpecial>}
      </DownTextWrapper>
    );
    // if the article is updated and have hover effect on, add hover effect for lastModified
    if (hoverEffect && lastModified) {
      const { month: mon, day: d } = formatDate(lastModified);
      return (
        <OverlayTrigger
          popoverContent={
            <UpdatedDatePopoverContent>
              {`Updated ${mon} ${d}`}
            </UpdatedDatePopoverContent>
          }
          popoverColor="rgb(49, 49, 49)"
          trigger="hover"
          placement="top-bottom"
        >
          {ele}
        </OverlayTrigger>
      );
    }
    return ele;
  }

  return (
    <StyledContainer>
      {isDisplayAvatar && (
        <a href={props.authorLink}>
          <div>
            <Avatar
              src={props.avatarImg}
              alt={`Go to the profile of ${props.authorName}`}
              size={avatarSize}
              member={props.member}
            />
          </div>
        </a>
      )}
      <StyledTextContainer>
        <UpTextWrapper>
          {renderAuthor({ props })}
          {props.publication && <> in {renderPublication()}</>}
          {hasFollowButton && (
            <span>
              <OutlinedButton text="Follow" size="small" type="outlined" />
            </span>
          )}
        </UpTextWrapper>
        {renderDateTime()}
      </StyledTextContainer>
    </StyledContainer>
  );
}

AuthorCard.propTypes = {
  // *
  // author profile related props
  // *
  authorLink: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorFollowers: requiredIfAllPresent(['hoverEffect'], 'number'),
  authorDescription: requiredIfAllPresent(['hoverEffect'], 'string'),
  avatarImg: PropTypes.string.isRequired,
  member: PropTypes.bool.isRequired,
  // if is a member && need hoverEffect, memberJoinedDate: PropTypes.string.isRequired,
  memberJoinedDate: requiredIfAllPresent(['member', 'hoverEffect'], 'string'),

  // *
  // article related props
  // *
  creationDate: PropTypes.string.isRequired,
  lastModified: PropTypes.string,
  readingTime: PropTypes.string.isRequired,
  premium: PropTypes.bool.isRequired,
  // *
  // publication related props
  // *
  publication: PropTypes.string,
  // if belong to a publication, publicationLink: PropTypes.string.isRequired,
  publicationLink: requiredIfAllPresent(['publication'], 'string'),
  // if belong to a publication && need hoverEffect, publicationFollowers: PropTypes.number.isRequired,
  publicationFollowers: requiredIfAllPresent(
    ['publication', 'hoverEffect'],
    'number',
  ),
  publicationLogo: requiredIfAllPresent(
    ['publication', 'hoverEffect'],
    'string',
  ),
  publicationDescription: requiredIfAllPresent(
    ['publication', 'hoverEffect'],
    'string',
  ),
  // *
  // component related props
  // *
  variation: PropTypes.oneOf([
    'Home',
    'PublicationHome',
    'TopicHome',
    'ArticleTitle',
  ]).isRequired,
  hoverEffect: PropTypes.bool,
};
export default AuthorCard;
