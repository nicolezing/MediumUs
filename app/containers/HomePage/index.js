/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import messages from './messages';
// import OverlayTrigger from '../../components/OverlayTrigger';
import ArticlePoster from '../../components/ArticlePoster';

function HomePage(props) {
  return (
    <div>
      <h2>
        <FormattedMessage {...messages.header} />
      </h1>

      <ArticlePoster
        authorCardInfo={props.authorCardInfo}
        articleInfo={props.articleInfo}
        variation="HomeHeroLeft"
        hoverEffect
      />
    </div>
  );
}

function mapStateToProps(state) {
  const { testState } = state;
  return {
    authorCardInfo: testState.authorInfo,
    articleInfo: testState.articleInfo,
  };
}
export default connect(mapStateToProps)(HomePage);
