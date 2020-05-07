import React from 'react';
import PropTypes from 'prop-types';
import AuthorCard from '../../../../components/AuthorCard';
import { H2, Wrapper } from './ArticleSummaryWrappers';

const SingleHeroArticleSummary = props => {
  const { articleLink, title, id: articleId } = props;
  return (
    <Wrapper>
      <a href={articleLink}>
        <H2>{title}</H2>
      </a>
      <AuthorCard id={articleId} variation="Home" hoverEffect theme="green" />
    </Wrapper>
  );
};

SingleHeroArticleSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  articleLink: PropTypes.string.isRequired,
};

export default SingleHeroArticleSummary;
