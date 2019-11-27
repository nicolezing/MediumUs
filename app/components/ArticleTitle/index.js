/**
 *
 * ArticleTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { TitleWrapper, StyledTitle, StyledSubtitle } from './StyledText';
function ArticleTitle(props) {
  return (
    <TitleWrapper>
      <a href={props.articleLink}>
        <StyledTitle>{props.title}</StyledTitle>
      </a>
      <a href={props.articleLink}>
        <StyledSubtitle>{props.subtitle}</StyledSubtitle>
      </a>
    </TitleWrapper>
  );
}

ArticleTitle.propTypes = {
  articleLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default ArticleTitle;
