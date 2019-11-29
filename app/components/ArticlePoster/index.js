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
import * as sectionStyles from './sectionStyles';
import { Wrapper, Cover, InfoWrapper, MoreFromText } from './coverStyledA';
import getConfig from './articleCardConfig';
import { small } from '../Button/outlineStyle';

function ArticlePoster(props) {
  const { authorCardVariation } = getConfig(props.variation);
  const { articleLink, title } = { ...props };

  return (
    <Wrapper {...props}>
      <Cover href={articleLink} {...props} aria-label={{ title }} />
      <InfoWrapper {...props}>
        {/* <TitleWrapper> */}
        {/* add text */}
        <ArticleTitle {...props} variation={props.variation} />
        {/* </TitleWrapper>
        <AuthorWrapper> */}
        <AuthorCard {...props} variation={authorCardVariation} />
        {/* </AuthorWrapper> */}
        {/* add icons */}
      </InfoWrapper>
    </Wrapper>
  );
}

ArticlePoster.propTypes = {
  variation: PropTypes.oneOf([..._.keys(sectionStyles)]).isRequired,
  authorLink: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  readingTime: PropTypes.string.isRequired,
  avatarImg: PropTypes.string.isRequired,
  member: PropTypes.bool.isRequired,
  premium: PropTypes.bool.isRequired,
  categoryLink: PropTypes.string,
  collection: PropTypes.string,
  articleLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default ArticlePoster;

//need Icons
// HomeHeroLeft, HomeHeroMid  when small bookmark
// HomeList bookmark+more
// TopicHomepageList bookmark
// ArticlePageTitle (tw,lkin,fbsq)+bookmark
// ArticlePageRecommendation  clap + number + bookmark

//homesidebar X 2
//topic sidebar
