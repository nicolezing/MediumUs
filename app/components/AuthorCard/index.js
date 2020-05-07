/**
 *
 * AuthorCards
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
import {
  selectArticleAuthorInfo,
  selectArticleAllInfo,
  selectArticlePublicationInfo,
} from '../../selectors';

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
    authorId,
    authorLink,
    authorName,
    publicationId,
    publicationLink,
    publicationName,
    creationDate,
    wordCount,
    isPremium,
    lastModified,
  } = props;

  const avatarElement = (
    <Link to={authorLink}>
      <div>
        <Avatar
          alt={`Go to the profile of ${authorName}`}
          size={avatarSize}
          id={authorId}
        />
      </div>
    </Link>
  );

  const authorElement = (
    <StyledA to={authorLink} key="name" theme={props.theme}>
      {authorName}
    </StyledA>
  );

  function renderAuthor(element) {
    if (hoverEffect) {
      const popoverContent = (
        <PopoverContent imgType="avatar" id={authorId} theme={props.theme} />
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
      <StyledA to={publicationLink} key="publication" theme={props.theme}>
        {publicationName}
      </StyledA>
    );

    if (hoverEffect) {
      const popoverContent = (
        <PopoverContent
          imgType="publication"
          id={publicationId}
          theme={props.theme}
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
    const { year, month, day } = formatDate(creationDate);
    let time = `${month} ${day}`;
    // #TODO try memo or sth else to call it less times
    if (year < new Date().getFullYear()) {
      time = time.concat(`, ${year}`);
    }
    const readingTime = `${calcReadingTime(wordCount)} min read`;
    const element = (
      <ReadingInfoWrapper>
        <time title={time}>{time}</time>
        <StyledSpan>&middot;</StyledSpan>
        <span title={readingTime}>{readingTime}</span>
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
      {isDisplayAvatar && renderAuthor(avatarElement)}
      <StyledInfoWrapper>
        <AuthorInfoWrapper>
          {renderAuthor(authorElement)}
          {props.publicationId && props.variation !== 'PublicationHome' && (
            <> in {renderPublication()}</>
          )}
          {hasFollowButton && (
            <StyledButtonWrapper>
              <OutlinedButton
                text="Follow"
                size="small"
                type="outlined"
                theme={props.theme}
              />
            </StyledButtonWrapper>
          )}
        </AuthorInfoWrapper>
        <div>{renderDateTime()}</div>
      </StyledInfoWrapper>
    </StyledWrapper>
  );
}

AuthorCard.propTypes = {
  // *
  // author profile related props
  // *
  authorId: PropTypes.string,
  authorLink: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,

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
  publicationId: PropTypes.string,
  publicationName: PropTypes.string,
  publicationLink: requiredIfAllPresent(['publication'], 'string'),

  variation: PropTypes.oneOf([
    'Home',
    'PublicationHome',
    'TopicHome',
    'ArticleTitle',
  ]).isRequired,
  hoverEffect: PropTypes.bool,
  // eslint-disable-next-line react/no-unused-prop-types
  id: PropTypes.string.isRequired,
  theme: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  // const { userInfo, articleInfo } = state.testState[id];
  const { name: authorName, link: authorLink } = selectArticleAuthorInfo(
    state,
    id,
  );
  const {
    author: authorId,
    publication: publicationId,
    link: articleLink,
    creationDate,
    lastModified,
    wordCount,
    premium: isPremium,
  } = selectArticleAllInfo(state, id);

  let publicationName;
  let publicationLink;
  if (publicationId) {
    ({
      name: publicationName,
      link: publicationLink,
    } = selectArticlePublicationInfo(state, id));
  }

  return {
    authorId,
    authorName,
    authorLink,
    articleLink,
    creationDate,
    lastModified,
    wordCount,
    isPremium,
    publicationId,
    publicationName,
    publicationLink,
  };
}

export default connect(mapStateToProps)(AuthorCard);
// example:  <AuthorCard id={articleId} variation="Home" hoverEffect theme="green" />

export { AuthorCard };
