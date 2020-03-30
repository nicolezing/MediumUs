import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { TitleWrapper } from './Wrappers';
import ArticlePoster from '../../../components/ArticlePoster';
import { selectTheme } from '../../../selectors';

function ArticleTitle(props) {
  const id = props.children[0];

  return (
    <TitleWrapper>
      <ArticlePoster id={id} variation="ArticlePageTitle" theme={props.theme} />
    </TitleWrapper>
  );
}

ArticleTitle.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  const theme = selectTheme(state);
  return { theme };
}

export default connect(mapStateToProps)(ArticleTitle);
