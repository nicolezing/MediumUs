/**
 *
 * ArticleCard
 *
 */

import React from 'react';
import { connect } from 'react-redux';
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
import roundToThousand from '../../utils/roundToThousand';
import OverlayTrigger from '../OverlayTrigger';
import MoreIconPopoverContent from './MoreIconPopoverContent';

function ArticlePoster(props) {
  const { authorCardVariation } = getAuthorCardType(props.variation);
  const { bookmarked, onRemoveBookmark, onAddBookmark } = props;

  function BookmarkButton() {
    return bookmarked ? (
      <IconButton
        title="Bookmark this story to read later"
        iconName="bookmarkFilledIcon"
        colorSet="pureBlack"
        onClick={onRemoveBookmark}
      />
    ) : (
      <IconButton
        title="Bookmark this story to read later"
        iconName="bookmarkIcon"
        colorSet="gray"
        onClick={onAddBookmark}
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
              <IconButton iconName="moreIcon" colorSet="gray" />
            </OverlayTrigger>
          </div>,
        ];
      case 'ArticlePageTitle':
        return [
          props.twitter && (
            <a href={props.twitter} key="twitter">
              <IconButton iconName="twitterIcon" colorSet="black" />
            </a>
          ),
          props.linkedIn && (
            <a href={props.linkedIn} key="linkedIn">
              <IconButton iconName="linkedInIcon" colorSet="black" />
            </a>
          ),
          props.facebook && (
            <a href={props.facebook} key="facebook">
              <IconButton iconName="facebookSquareIcon" colorSet="black" />
            </a>
          ),
          <BookmarkButton key={props.variation} />,
        ];
      case 'ArticlePageRecommendation':
        return [
          <IconButton
            iconName="clapSmallIcon"
            colorSet="black"
            key="clapSmallIcon"
          />,
          <ClapText key="claps">{roundToThousand(props.claps)}</ClapText>,
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
      publication={props.publication}
      name={props.authorName}
      key={props.title}
    >
      <Cover
        href={props.articleLink}
        variation={props.variation}
        aria-label={props.title}
        cover={props.articleCover}
        focusPosition={props.focusPosition}
      />
      <InfoWrapper
        variation={props.variation}
        publication={props.publication}
        source={props.source}
        name={props.authorName}
      >
        <ArticleTitle id={props.id} variation={props.variation} />
        <AuthorWrapper variation={props.variation}>
          <AuthorCard
            id={props.id}
            variation={authorCardVariation}
            hoverEffect={props.hoverEffect}
          />
          <IconWrapper variation={props.variation}>{renderIcons()}</IconWrapper>
        </AuthorWrapper>
      </InfoWrapper>
    </Wrapper>
  );
}

ArticlePoster.propTypes = {
  publication: PropTypes.string,
  authorName: PropTypes.string.isRequired,
  articleLink: PropTypes.string.isRequired,
  articleCover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bookmarked: PropTypes.bool,
  twitter: PropTypes.string,
  facebook: PropTypes.string,
  linkedIn: PropTypes.string,
  claps: PropTypes.number,
  focusPosition: PropTypes.array,
  source: PropTypes.string,
  onAddBookmark: PropTypes.func,
  onRemoveBookmark: PropTypes.func,
  variation: PropTypes.oneOf([..._.keys(wrapperStyles)]).isRequired,
  hoverEffect: PropTypes.bool,
  id: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const { userInfo, articleInfo } = state.testState[id];
  const componentProps = {
    userInfo,
    authorName: articleInfo.authorName,
    articleLink: articleInfo.articleLink,
    articleCover: articleInfo.articleCover,
    title: articleInfo.title,
    bookmarked: articleInfo.bookmarked,
    twitter: userInfo.twitter,
    facebook: userInfo.facebook,
    linkedIn: userInfo.linkedIn,
    claps: articleInfo.claps,
    source: articleInfo.source,
  };
  if (articleInfo.focusPosition) {
    componentProps.focusPosition = articleInfo.focusPosition;
  }
  if (articleInfo.publicationInfo) {
    const { publicationInfo } = articleInfo;
    componentProps.publication = publicationInfo.publication;
  }
  return componentProps;
}
export default connect(mapStateToProps)(ArticlePoster);
export { ArticlePoster };
