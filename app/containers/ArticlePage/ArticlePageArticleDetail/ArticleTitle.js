import React from 'react';
import PropTypes from 'prop-types';
import { TitleWrapper } from './Wrappers';
import ArticlePoster from '../../../components/ArticlePoster';

function ArticleTitle(props) {
  const id = props.children[0];

  return (
    <TitleWrapper>
      <ArticlePoster id={id} variation="ArticlePageTitle" />
    </TitleWrapper>
  );
}

ArticleTitle.propTypes = {
  children: PropTypes.array.isRequired,
};

export default ArticleTitle;
