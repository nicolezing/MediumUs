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
    publicationLink,
    publication,
    creationDate,
    wordCount,
    isPremium,
    lastModified,
  } = props;

  const avatarElement = (
    <a href={authorLink}>
      <div>
        <Avatar
          alt={`Go to the profile of ${authorName}`}
          size={avatarSize}
          id={id}
        />
      </div>
    </a>
  );

  const authorElement = (
    <StyledA href={authorLink} key="name">
      {authorName}
    </StyledA>
  );

  function renderAuthor(element) {
    if (hoverEffect) {
      const popoverContent = <PopoverContent imgType="avatar" id={id} />;
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
        <PopoverContent imgType="publication" id={props.id} />
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
          {props.publication && props.variation !== 'PublicationHome' && (
            <> in {renderPublication()}</>
          )}
          {hasFollowButton && (
            <StyledButtonWrapper>
              <OutlinedButton text="Follow" size="small" type="outlined" />
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
  publication: PropTypes.string,
  publicationLink: requiredIfAllPresent(['publication'], 'string'),

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
  const { id } = ownProps;
  const { userInfo, articleInfo } = state.testState[id];
  const componentProps = {
    authorName: userInfo.name,
    authorLink: userInfo.authorLink,
    articleLink: articleInfo.articleLink,
    creationDate: articleInfo.creationDate,
    lastModified: articleInfo.lastModified,
    wordCount: articleInfo.wordCount,
    isPremium: articleInfo.premium,
  };

  if (articleInfo.publicationInfo) {
    const { publicationInfo } = articleInfo;
    componentProps.publication = publicationInfo.publication;
    componentProps.publicationLink = publicationInfo.publicationLink;
  }

  return componentProps;
}

export default connect(mapStateToProps)(AuthorCard);
export { AuthorCard };
