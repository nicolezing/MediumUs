/**
 *
 * ArticlePoster
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import AuthorCard from '../AuthorCard';
import ArticleTitle from '../ArticleTitle';
import * as wrapperStyles from './variationWrapperStyles';
import {
  Wrapper,
  Cover,
  InfoWrapper,
  AuthorWrapper,
  IconWrapper,
  ClapText,
} from './styledWrappers';
import Divider from './styledDivider';
import getAuthorCardType from './getAuthorCardType';
import { IconButton } from '../Button';
import BookmarkButton from '../Button/BookmarkedButton';
import roundToThousand from '../../utils/roundToThousand';
import OverlayTrigger from '../OverlayTrigger';
import MoreIconPopoverContent from './MoreIconPopoverContent';
import {
  selectUserInfo,
  selectArticleCover,
  selectArticleAllInfo,
  selectPublicationMetaInfo,
} from '../../selectors';

function ArticlePoster(props) {
  const { authorCardVariation } = getAuthorCardType(props.variation);

  function renderIcons() {
    switch (props.variation) {
      case 'HomeHeroLeft':
      case 'HomeHeroMid':
      case 'TopicHomepageList':
        return <BookmarkButton id={props.id} key={props.id} />;
      case 'HomeList':
        return [
          <BookmarkButton id={props.id} key={props.id} />,
          <div>
            <OverlayTrigger
              trigger="click"
              placement="bottom-top"
              popoverContent={
                <MoreIconPopoverContent title="Dismiss this story">
                  Dismiss this story
                </MoreIconPopoverContent>
              }
              key="moreIcon"
            >
              <IconButton iconName="moreIcon" theme="gray" />
            </OverlayTrigger>
          </div>,
        ];
      case 'ArticlePageTitle':
        return [
          props.twitter && (
            <Link to={props.twitter} key="twitter">
              <IconButton iconName="twitterIcon" theme="black" />
            </Link>
          ),
          props.linkedIn && (
            <Link to={props.linkedIn} key="linkedIn">
              <IconButton iconName="linkedInIcon" theme="black" />
            </Link>
          ),
          props.facebook && (
            <Link to={props.facebook} key="facebook">
              <IconButton iconName="facebookSquareIcon" theme="black" />
            </Link>
          ),
          <BookmarkButton id={props.id} key={props.id} />,
        ];
      case 'ArticlePageRecommendation':
        return [
          <IconButton
            iconName="clapSmallIcon"
            theme="black"
            key="clapSmallIcon"
          />,
          <ClapText key="claps">{roundToThousand(props.claps)}</ClapText>,
          <Divider key="divider" />,
          <BookmarkButton id={props.id} key={props.id} />,
        ];
      default:
        return [];
    }
  }

  return (
    <Wrapper
      variation={props.variation}
      publication={props.publicationName}
      name={props.authorName}
      key={props.title}
    >
      {props.variation === 'ArticlePageTitle' || (
        <Cover
          to={props.articleLink}
          variation={props.variation}
          aria-label={props.title}
          cover={props.articleCover}
          focusPosition={props.focusPosition}
        />
      )}
      <InfoWrapper
        variation={props.variation}
        publication={props.publicationName || null}
        source={props.source || null}
        name={props.authorName}
      >
        <ArticleTitle id={props.id} variation={props.variation} />
        <AuthorWrapper variation={props.variation}>
          <AuthorCard
            id={props.id}
            variation={authorCardVariation}
            hoverEffect={props.hoverEffect}
            theme={props.theme}
          />
          <IconWrapper variation={props.variation}>{renderIcons()}</IconWrapper>
        </AuthorWrapper>
      </InfoWrapper>
    </Wrapper>
  );
}

ArticlePoster.propTypes = {
  theme: PropTypes.string,

  publicationName: PropTypes.string,
  // authorID: PropTypes.string,
  authorName: PropTypes.string,
  articleLink: PropTypes.string,
  articleCover: PropTypes.string,
  title: PropTypes.string,
  twitter: PropTypes.string,
  facebook: PropTypes.string,
  linkedIn: PropTypes.string,
  claps: PropTypes.number,
  focusPosition: PropTypes.array,
  source: PropTypes.string,
  variation: PropTypes.oneOf([..._.keys(wrapperStyles)]).isRequired,
  hoverEffect: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const {
    title,
    author: authorID,
    link: articleLink,
    claps,
    publication: publicationId,
  } = selectArticleAllInfo(state, id);

  const { authorName, twitter, facebook, linkedIn } = selectUserInfo(
    state,
    authorID,
  );
  const { cover: articleCover, focusPosition } = selectArticleCover(state, id);
  let publicationName;
  if (publicationId) {
    ({ name: publicationName } = selectPublicationMetaInfo(
      state,
      publicationId,
    ));
  }
  return {
    publicationName,
    authorName,
    articleLink,
    articleCover,
    title,
    twitter,
    facebook,
    linkedIn,
    claps,
    focusPosition,
  };
}
export default connect(mapStateToProps)(ArticlePoster);
export { ArticlePoster };
