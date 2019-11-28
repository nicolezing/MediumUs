/**
 *
 * ArticleCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import AuthorCard from '../AuthorCard';
import ArticleTitle from '../ArticleTitle';
import {
  Wrapper,
  Cover,
  InfoWrapper,
  TitleWrapper,
  AuthorWrapper,
} from './coverStyledA';
import getConfig from './articleCardConfig';

function ArticlePoster(props) {
  const { authorCardVariation } = getConfig(props.variation);
  const { articleLink, title } = { ...props };

  return (
    <Wrapper>
      <Cover href={articleLink} {...props} aria-label={{ title }} />
      <InfoWrapper>
        <TitleWrapper>
          <ArticleTitle {...props} variation={props.variation} />
        </TitleWrapper>
        <AuthorWrapper>
          <AuthorCard {...props} variation={authorCardVariation} />
        </AuthorWrapper>
      </InfoWrapper>
    </Wrapper>
  );
}

ArticlePoster.propTypes = {
  variation: PropTypes.string,
};

export default ArticlePoster;
