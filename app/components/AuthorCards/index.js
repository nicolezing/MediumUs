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

function AuthorCards(props) {
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
          <StyledA href={props.authorLink}>{props.name}</StyledA>
          {props.collection && [
            ' in ',
            <StyledA href={props.categoryLink}>{props.collection}</StyledA>,
          ]}
          {followButton && (
            <span style={{ marginLeft: '8px' }}>
              <OutlinedButton text="Follow" size="small" type="outlined" />
            </span>
          )}
        </UpTextWrapper>
        <DownTextWrapper>
          <time>{props.date}</time>
          <StyledSpanSpecial className="middotDividerr">
            &middot;
          </StyledSpanSpecial>
          <span className="readingTime">{props.readingTime}</span>
          {props.premium && <StyledSpanSpecial>{StarIcon}</StyledSpanSpecial>}
        </DownTextWrapper>
      </StyledTextContainer>{' '}
    </StyledContainer>
  );
}

AuthorCards.propTypes = {
  variation: PropTypes.oneOf([
    'CollectionHome',
    'TopicHome',
    'Home',
    'ArticleTitle',
  ]).isRequired,
  authorLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  categoryLink: PropTypes.string,
  collection: PropTypes.string,
  date: PropTypes.string.isRequired,
  readingTime: PropTypes.string.isRequired,
  avatarImg: PropTypes.string.isRequired,
  member: PropTypes.bool.isRequired,
  premium: PropTypes.string.isRequired,
};
export { AuthorCards };
