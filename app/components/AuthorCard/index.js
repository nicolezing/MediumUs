/**
 *
 * AuthorCards
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import { styledComponents, StyledButtonWrapper } from './AuthorCardsWrappers';
import { OutlinedButton } from '../Button';
import StarIcon from '../../staticData/svgIcons/starIcon';
import getAuthorInfoDisplayPropertiesByVariation from './getAuthorInfoDisplayPropertiesByVariation';
import OverlayTrigger from '../OverlayTrigger';
import PopoverContent from './PopoverContent/index';
import requiredIfAllPresent from '../../utils/requiredIfAllPresent';
import formatDate from './formatDate';
import UpdatedDateStyledSpan from './UpdatedDateStyledSpan';
import calcReadingTime from '../../utils/calcReadingTime';

function AuthorCard(props) {
  const {
    StyledWrapper,
    StyledInfoWrapper,
    StyledA,
    AuthorInfoWrapper,
    ReadingInfoWrapper,
    StyledSpan,
  } = styledComponents(props.variation);

  const {
    avatarSize,
    isDisplayAvatar,
    hasFollowButton,
  } = getAuthorInfoDisplayPropertiesByVariation(props.variation);

  const {
    hoverEffect,
    id,
    authorLink,
    authorName,
    authorDescription,
    memberJoinedDate = null,
    member,
    authorFollowers,
    publicationLink,
    publication,
    publicationDescription,
    publicationLogo,
    publicationFollowers,
    creationDate,
    wordCount,
    isPremium,
    lastModified,
  } = props;

  function renderAuthor() {
    const element = (
      <StyledA href={authorLink} key="name">
        {authorName}
      </StyledA>
    );

    if (hoverEffect) {
      const { year, month } = formatDate(memberJoinedDate);
      const popoverContent = (
        <PopoverContent
          headerLink={authorLink}
          header={authorName}
          subHeader={authorDescription}
          joinedDate={`${month} ${year}`}
          member={member}
          followersNumber={authorFollowers}
          imgType="avatar"
          id={id}
        />
      );
      return (
        <OverlayTrigger
          popoverContent={popoverContent}
          trigger="hover"
          placement="top-bottom"
        >
          {element}
        </OverlayTrigger>
      );
    }
    return element;
  }

  const renderPublication = () => {
    const element = (
      <StyledA href={publicationLink} key="publication">
        {publication}
      </StyledA>
    );

    if (hoverEffect) {
      const popoverContent = (
        <PopoverContent
          headerLink={publicationLink}
          header={publication}
          subHeader={publicationDescription}
          imgLink={publicationLogo}
          imgAlt={publication}
          followersNumber={publicationFollowers}
        />
      );
      return (
        <OverlayTrigger
          popoverContent={popoverContent}
          trigger="hover"
          placement="top-bottom"
        >
          {element}
        </OverlayTrigger>
      );
    }
    return element;
  };

  function renderDateTime() {
    const { month, day } = formatDate(creationDate);
    const element = (
      <ReadingInfoWrapper>
        <time>{`${month} ${day}`}</time>
        <StyledSpan>&middot;</StyledSpan>
        <span>{`${calcReadingTime(wordCount)} min read`}</span>
        {isPremium && <StyledSpan>{StarIcon}</StyledSpan>}
      </ReadingInfoWrapper>
    );
    // if the article is updated and have hover effect on, add hover effect for lastModified
    if (hoverEffect && creationDate !== lastModified) {
      const { month: mon, day: d } = formatDate(lastModified);
      return (
        <OverlayTrigger
          popoverContent={
            <UpdatedDateStyledSpan>
              {`Updated ${mon} ${d}`}
            </UpdatedDateStyledSpan>
          }
          popoverColor="rgb(49, 49, 49)"
          trigger="hover"
          placement="top-bottom"
        >
          {element}
        </OverlayTrigger>
      );
    }
    return element;
  }

  return (
    <StyledWrapper>
      {isDisplayAvatar && (
        <a href={props.authorLink}>
          <div>
            <Avatar
              alt={`Go to the profile of ${props.authorName}`}
              size={avatarSize}
              id={props.id}
            />
          </div>
        </a>
      )}
      <StyledInfoWrapper>
        <AuthorInfoWrapper>
          {renderAuthor()}
          {props.publication && <> in {renderPublication()}</>}
          {hasFollowButton && (
            <StyledButtonWrapper>
              <OutlinedButton text="Follow" size="small" type="outlined" />
            </StyledButtonWrapper>
          )}
        </AuthorInfoWrapper>
        {renderDateTime()}
      </StyledInfoWrapper>
    </StyledWrapper>
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
  member: PropTypes.bool.isRequired,
  memberJoinedDate: requiredIfAllPresent(['member', 'hoverEffect'], 'string'),
  // *
  // article related props
  // *
  creationDate: PropTypes.string.isRequired,
  lastModified: PropTypes.string,
  wordCount: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
  // *
  // publication related props
  // *
  publication: PropTypes.string,
  publicationLink: requiredIfAllPresent(['publication'], 'string'),
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

  variation: PropTypes.oneOf([
    'Home',
    'PublicationHome',
    'TopicHome',
    'ArticleTitle',
  ]).isRequired,
  hoverEffect: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  const { id, hoverEffect } = ownProps;
  const { userInfo, articleInfo } = state.testState[id];
  const componentProps = {
    authorName: userInfo.name,
    authorLink: userInfo.authorLink,
    member: userInfo.member,

    articleLink: articleInfo.articleLink,
    title: articleInfo.title,
    subtitle: articleInfo.subtitle,

    creationDate: articleInfo.creationDate,
    lastModified: articleInfo.lastModified,
    wordCount: articleInfo.wordCount,
    isPremium: articleInfo.premium,
  };

  if (articleInfo.publicationInfo) {
    const { publicationInfo } = articleInfo;
    componentProps.publication = publicationInfo.publication;
    componentProps.publicationLink = publicationInfo.publicationLink;
    componentProps.publicationFollowers = publicationInfo.publicationFollowers;
    componentProps.publicationLogo = publicationInfo.publicationLogo;
    componentProps.publicationDescription =
      publicationInfo.publicationDescription;
  }

  if (hoverEffect) {
    componentProps.authorFollowers = userInfo.authorFollowers;
    componentProps.authorDescription = userInfo.authorDescription;
    if (componentProps.member) {
      componentProps.memberJoinedDate = userInfo.memberJoinedDate;
    }
  }
  return componentProps;
}

export default connect(mapStateToProps)(AuthorCard);
