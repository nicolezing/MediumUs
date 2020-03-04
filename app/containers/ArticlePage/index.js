/**
 *
 * ArticlePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ArticlePageAutoHideHeader from './ArticlePageAutoHideHeader';
import ArticlePageArticleDetail from './ArticlePageArticleDetail';
// import { compose } from 'redux';

export function ArticlePage() {
  return (
    <>
      <ArticlePageAutoHideHeader topic="elemental" />
      <ArticlePageArticleDetail id="ID001" />
    </>
  );
}

ArticlePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

// const withConnect = connect(
//   null,
//   mapDispatchToProps,
// );

// export default compose(withConnect)(ArticlePage);
