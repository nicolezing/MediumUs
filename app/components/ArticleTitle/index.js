/**
 *
 * ArticleTitle
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Wrapper, StyledTitle, StyledSubtitle } from './StyledWrapper';
import * as variations from './variateTitleStyles';
import { selectArticleAbstract } from '../../selectors';

function ArticleTitle(props) {
  return (
    <Wrapper variation={props.variation}>
      <a href={props.articleLink}>
        <StyledTitle variation={props.variation}>{props.title} </StyledTitle>
      </a>
      <a href={props.articleLink}>
        <StyledSubtitle variation={props.variation}>
          {props.subtitle}
        </StyledSubtitle>
      </a>
    </Wrapper>
  );
}

ArticleTitle.propTypes = {
  articleLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  variation: PropTypes.oneOf([..._.keys(variations)]).isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  id: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const { link: articleLink, title, subtitle } = selectArticleAbstract(
    state,
    id,
  );
  return {
    articleLink,
    title,
    subtitle,
  };
}
export default connect(mapStateToProps)(ArticleTitle);
export { ArticleTitle };
