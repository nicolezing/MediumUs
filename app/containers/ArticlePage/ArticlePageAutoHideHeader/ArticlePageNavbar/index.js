/*
 * ArticlePageNavbar
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { A } from '../../../PublicationComponents/NavbarBasic/Wrappers';
import {
  Wrapper,
  ImgWrapper,
  Img,
  LinkWrapper,
  ListWrapper,
  DividerSpan,
} from './Wrappers';

function ArticlePageNavbar(props) {
  const { topicNav } = props;
  const renderNavbar = () =>
    topicNav.map((cur, index) => {
      if (index !== topicNav.length - 1) {
        return (
          <LinkWrapper key={cur.navItem}>
            <A to={cur.itemLink}>{cur.navItem}</A>
          </LinkWrapper>
        );
      }

      return (
        <>
          <DividerSpan />
          <LinkWrapper key={cur.navItem}>
            <A to={cur.itemLink}>{cur.navItem}</A>
          </LinkWrapper>
        </>
      );
    });

  return (
    <Wrapper>
      <ImgWrapper>
        <a href={props.topicLink}>
          <Img src={props.topicLogoImgSmall} alt={props.topic} />
        </a>
      </ImgWrapper>
      <ListWrapper>{renderNavbar()}</ListWrapper>
    </Wrapper>
  );
}

ArticlePageNavbar.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  topic: PropTypes.string.isRequired,
  topicLogoImgSmall: PropTypes.string,
  topicLink: PropTypes.string,
  topicNav: PropTypes.array,
};

function mapStateToProps(state, ownProps) {
  const { topic } = ownProps;
  const { topicLogoImgSmall, topicNav, topicLink } = state.testState.topicList[
    topic
  ];
  return { topicLogoImgSmall, topicNav, topicLink };
}

export default connect(mapStateToProps)(ArticlePageNavbar);
