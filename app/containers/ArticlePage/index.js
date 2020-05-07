/**
 *
 * ArticlePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import ArticlePageAutoHideHeader from './ArticlePageAutoHideHeader';
import ArticlePageArticleDetail from './ArticlePageArticleDetail';
import ArticlePageUpgradeMask from './ArticlePageUpgradeMask';
import ArticleBottomInfo from './ArticleBottomInfo';
import ArticlePageFooter from './ArticlePageFooter';
import ArticleSideInfo from './ArticleSideInfo';
import {
  selectArticleAbstract,
  selectPublicationMetaInfo,
} from '../../selectors';
// import { compose } from 'redux';

function ArticlePage(props) {
  const { publicationId, articleId, publicationName, icon, title } = props;
  return (
    <>
      <Helmet>
        <title>{`${title} | ${publicationName}`}</title>
        {/* TODO fix below */}
        <meta name="description" content={`${title}`} />
        <link rel="icon" href={icon} />
      </Helmet>
      <ArticlePageAutoHideHeader publicationId={publicationId} />
      <ArticlePageArticleDetail id={articleId} />
      {/* TODO if signed in */}
      <ArticlePageUpgradeMask />
      <ArticleSideInfo id={articleId} />
      <ArticleBottomInfo id={articleId} />
      <ArticlePageFooter />
    </>
  );
}

ArticlePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  articleId: PropTypes.string,
  publicationId: PropTypes.string,
  title: PropTypes.string,
  publicationName: PropTypes.string,
  icon: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  const { publicationId, articleId } = ownProps.match.params;
  const { name: publicationName, icon } = selectPublicationMetaInfo(
    state,
    publicationId,
  );
  const { title } = selectArticleAbstract(state, articleId);
  return {
    publicationId,
    articleId,
    publicationName,
    icon,
    title,
  };
}

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
export default connect(mapStateToProps)(ArticlePage);
