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
import roundToThousand from './roundToThousand';

function ArticlePoster(props) {
  const { authorCardVariation } = getAuthorCardType(props.variation);

  function BookmarkButton() {
    return props.articleInfo.bookmarked ? (
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
        return [<BookmarkButton key={props.variation} />];
      case 'HomeList':
        return [
          <BookmarkButton key={props.variation} />,
          <IconButton type="moreIcon" colorSet="black" key="moreIcon" />,
        ];
      case 'ArticlePageTitle':
        return [
          props.articleInfo.twitter && (
            <a href={props.articleInfo.twitter} key="twitter">
              <IconButton type="twitterIcon" colorSet="black" />
            </a>
          ),
          props.articleInfo.linkedIn && (
            <a href={props.articleInfo.linkedIn} key="linkedIn">
              <IconButton type="linkedInIcon" colorSet="black" />
            </a>
          ),
          props.articleInfo.facebook && (
            <a href={props.articleInfo.facebook} key="facebook">
              <IconButton type="facebookSqureIcon" colorSet="black" />
            </a>
          ),
          <BookmarkButton key={props.variation} />,
        ];
      case 'ArticlePageRecommendation':
        return [
          <IconButton
            type="clapSmallIcon"
            colorSet="black"
            key="clapSmallIcon"
          />,
          <ClapText key="claps">
            {roundToThousand(props.articleInfo.claps)}
          </ClapText>,
          <Divider key="divider" />,
          <BookmarkButton key={props.variation} />,
        ];
      default:
        return [];
    }
  }

  return (
    <Wrapper
      variation={props.variation}
      publication={props.authorCardInfo.publication}
      name={props.authorCardInfo.name}
    >
      <Cover
        href={props.articleInfo.articleLink}
        variation={props.variation}
        aria-label={props.articleInfo.title}
        cover={props.articleInfo.articleCover}
        focusPosition={props.articleInfo.focusPosition}
      />
      <InfoWrapper
        variation={props.variation}
        publication={props.authorCardInfo.publication}
        name={props.authorCardInfo.name}
      >
        <ArticleTitle
          articleLink={props.articleInfo.articleLink}
          title={props.articleInfo.title}
          subtitle={props.articleInfo.subtitle}
          variation={props.variation}
        />
        <AuthorWrapper variation={props.variation}>
          <AuthorCard
            {...props.authorCardInfo}
            variation={authorCardVariation}
          />
          <IconWrapper variation={props.variation}>{renderIcons()}</IconWrapper>
        </AuthorWrapper>
      </InfoWrapper>
    </Wrapper>
  );
}

ArticlePoster.propTypes = {
  authorCardInfo: PropTypes.shape({
    authorLink: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarImg: PropTypes.string.isRequired,
    member: PropTypes.bool.isRequired,
    premium: PropTypes.bool.isRequired,
    readingTime: PropTypes.string.isRequired,
    publication: PropTypes.string,
    publicationLink: PropTypes.string,
    date: PropTypes.string.isRequired,
  }).isRequired,
  articleInfo: PropTypes.shape({
    articleLink: PropTypes.string.isRequired,
    articleCover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    twitter: PropTypes.string,
    facebook: PropTypes.string,
    linkedIn: PropTypes.string,
    claps: PropTypes.number,
    focusPosition: PropTypes.array,
  }).isRequired,
  onAddBookmark: PropTypes.func,
  onRemoveBookmark: PropTypes.func,
  variation: PropTypes.oneOf([..._.keys(wrapperStyles)]).isRequired,
};

export default ArticlePoster;
