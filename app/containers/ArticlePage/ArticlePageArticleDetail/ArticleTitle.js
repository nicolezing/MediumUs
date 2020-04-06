import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TitleWrapper } from './Wrappers';
import ArticlePoster from '../../../components/ArticlePoster';
import { selectTheme } from '../../../selectors';
import {
  articleTopAvatarInView,
  articleTopAvatarOffView,
} from '../../../store/actions';

function ArticleTitle(props) {
  const titleRef = useRef();

  const sideInfoToggler = () => {
    const { bottom } = titleRef.current.getBoundingClientRect();
    if (bottom <= 0) {
      props.articleTopAvatarOffView();
    } else {
      props.articleTopAvatarInView();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', sideInfoToggler);
    return () => {
      window.removeEventListener('scroll', sideInfoToggler);
    };
  });

  const id = props.children[0];
  return (
    <TitleWrapper ref={titleRef}>
      <ArticlePoster id={id} variation="ArticlePageTitle" theme={props.theme} />
    </TitleWrapper>
  );
}

ArticleTitle.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.array.isRequired,
  articleTopAvatarInView: PropTypes.func,
  articleTopAvatarOffView: PropTypes.func,
};

function mapStateToProps(state) {
  const theme = selectTheme(state);

  return { theme };
}

export default connect(
  mapStateToProps,
  { articleTopAvatarInView, articleTopAvatarOffView },
)(ArticleTitle);
