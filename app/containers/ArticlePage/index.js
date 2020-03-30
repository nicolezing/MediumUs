/**
 *
 * ArticlePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import ArticlePageAutoHideHeader from './ArticlePageAutoHideHeader';
import ArticlePageArticleDetail from './ArticlePageArticleDetail';
import ArticlePageUpgradeMask from './ArticlePageUpgradeMask';
import ArticleBottomInfo from './ArticleBottomInfo';
// import { compose } from 'redux';

export function ArticlePage() {
  const id = 'ID001';
  return (
    <>
      <ArticlePageAutoHideHeader topic="elemental" />
      <ArticlePageArticleDetail id={id} />
      {/* if signed in */}
      <ArticlePageUpgradeMask />
      <ArticleBottomInfo id={id} />
    </>
  );
}

ArticlePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // theme: PropTypes.string,
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
