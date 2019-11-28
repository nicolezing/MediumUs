/**
 *
 * ArticleTitle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { TitleWrapper, StyledTitle, StyledSubtitle } from './StyledWrapper';
import * as titleStyles from './titleStyles';

function ArticleTitle(props) {
  return (
    <TitleWrapper {...props}>
      <a href={props.articleLink}>
        <StyledTitle {...props}>{props.title} </StyledTitle>
      </a>
      <a href={props.articleLink}>
        <StyledSubtitle {...props}>{props.subtitle}</StyledSubtitle>
      </a>
    </TitleWrapper>
  );
}

ArticleTitle.propTypes = {
  articleLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  type: PropTypes.oneOf([..._.keys(titleStyles)]).isRequired,
  // type: PropTypes.string.isRequired,
};

export default ArticleTitle;
