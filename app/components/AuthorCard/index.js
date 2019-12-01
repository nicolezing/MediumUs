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
import StarIcon from '../../staticData/images/starIcon';
import getConfig from './authorCardsConfig';

function AuthorCard(props) {
  const {
    StyledContainer,
    StyledTextContainer,
    StyledA,
    UpTextWrapper,
    DownTextWrapper,
    StyledSpanSpecial,
  } = styledComponents(props.variation);
  const { avatarSize, avatarDisplay, followButton } = getConfig(
    props.variation,
  );
  return (
    <StyledContainer>
      {avatarDisplay && (
        <a href={props.authorLink}>
          <div>
            <Avatar
              src={props.avatarImg}
              alt={`Go to the profile of ${props.name}`}
              size={avatarSize}
              member={props.member}
            />
          </div>
        </a>
      )}
      <StyledTextContainer>
        <UpTextWrapper>
          <StyledA href={props.authorLink} key="name">
            {props.name}
          </StyledA>
          {props.publication && [
            ' in ',
            <StyledA href={props.categoryLink} key="publication">
              {props.publication}
            </StyledA>,
          ]}
          {followButton && (
            <span style={{ marginLeft: '8px' }}>
              <OutlinedButton text="Follow" size="small" type="outlined" />
            </span>
          )}
        </UpTextWrapper>
        <DownTextWrapper>
          <time>{props.date}</time>
          <StyledSpanSpecial>&middot;</StyledSpanSpecial>
          <span>{props.readingTime}</span>
          {props.premium && <StyledSpanSpecial>{StarIcon}</StyledSpanSpecial>}
        </DownTextWrapper>
      </StyledTextContainer>{' '}
    </StyledContainer>
  );
}

AuthorCard.propTypes = {
  variation: PropTypes.oneOf([
    'Home',
    'PublicationHome',
    'TopicHome',
    'ArticleTitle',
  ]).isRequired,
  authorLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readingTime: PropTypes.string.isRequired,
  avatarImg: PropTypes.string.isRequired,
  member: PropTypes.bool.isRequired,
  premium: PropTypes.bool.isRequired,
  categoryLink: PropTypes.string,
  publication: PropTypes.string,
};
export default AuthorCard;
