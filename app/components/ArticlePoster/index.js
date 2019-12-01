/**
 *
 * ArticleCard
 *
 */

import React from 'react';
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
import kFormatter from './kFormatter';

function ArticlePoster(props) {
  const { authorCardVariation } = getAuthorCardType(props.variation);
  const { articleLink, title } = { ...props };

  function BookmarkButton() {
    return props.bookmarked ? (
      <IconButton
        type="bookmarkFilledIcon"
        colorSet="pureBlack"
        onClick={props.onRemoveBookmark}
      />
    ) : (
        <IconButton
          type="bookmarkIcon"
          colorSet="black"
          onClick={props.onAddBookmark}
        />
      );
  }

  function renderIcons() {
    switch (props.variation) {
      case 'HomeHeroLeft':
      case 'HomeHeroMid':
      case 'TopicHomepageList':
        return <BookmarkButton />;
      case 'HomeList':
        return [
          <BookmarkButton />,
          <IconButton type="moreIcon" colorSet="black" />,
        ];
      case 'ArticlePageTitle':
        return [
          props.twitter && (
            <a href={props.twitter} key="twitter">
              <IconButton type="twitterIcon" colorSet="black" />
            </a>
          ),
          props.linkedIn && (
            <a href={props.linkedIn} key="linkedIn">
              <IconButton type="linkedInIcon" colorSet="black" />
            </a>
          ),
          props.facebook && (
            <a href={props.facebook} key="facebook">
              <IconButton type="facebookSqureIcon" colorSet="black" />
            </a>
          ),
          <BookmarkButton />,
        ];
      case 'ArticlePageRecommendation':
        return [
          <IconButton type="clapSmallIcon" colorSet="black" />,
          <ClapText>{kFormatter(props.claps)}</ClapText>,
          <Divider />,
          <BookmarkButton />,
        ];
      default:
        return '';
    }
  }

  return (
    <Wrapper {...props}>
      <Cover href={articleLink} {...props} aria-label={{ title }} />
      <InfoWrapper {...props}>
        <ArticleTitle {...props} variation={props.variation} />
        <AuthorWrapper {...props}>
          <AuthorCard {...props} variation={authorCardVariation} />
          <IconWrapper {...props}>{renderIcons()}</IconWrapper>
        </AuthorWrapper>
      </InfoWrapper>
    </Wrapper>
  );
}

ArticlePoster.propTypes = {
  variation: PropTypes.oneOf([..._.keys(wrapperStyles)]).isRequired,
  authorLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readingTime: PropTypes.string.isRequired,
  avatarImg: PropTypes.string.isRequired,
  member: PropTypes.bool.isRequired,
  premium: PropTypes.bool.isRequired,
  categoryLink: PropTypes.string,
  publication: PropTypes.string,
  articleLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  bookmarked: PropTypes.bool.isRequired,
  onAddBookmark: PropTypes.func,
  onRemoveBookmark: PropTypes.func,
  twitter: PropTypes.string,
  facebook: PropTypes.string,
  linkedIn: PropTypes.string,
  claps: PropTypes.number,
  focusPostion: PropTypes.array,
};

export default ArticlePoster;
