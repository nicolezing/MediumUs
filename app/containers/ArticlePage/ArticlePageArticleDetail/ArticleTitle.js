import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TitleWrapper } from './Wrappers';
import ArticlePoster from '../../../components/ArticlePoster';
import { selectTheme } from '../../../selectors';
import RefContainer from '../refContainer';

function ArticleTitle(props) {
  const id = props.children[0];
  console.log('top avatar render');
  return (
    <RefContainer refType="avatarRef" uuid="topAvatarRef">
      <TitleWrapper>
        <ArticlePoster
          id={id}
          variation="ArticlePageTitle"
          theme={props.theme}
        />
      </TitleWrapper>
    </RefContainer>
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
