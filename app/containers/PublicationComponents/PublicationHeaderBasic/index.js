/*
 * PublicationHeaderBasic
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, ImgWrapper, Img, TextWrapper, H2 } from './Wrappers';

function PublicationHeaderBasic(props) {
  return (
    <Wrapper>
      <ImgWrapper>
        <a href={props.topicLink}>
          <Img src={props.topicLogoImg} alt={props.topic} />
        </a>
      </ImgWrapper>
      <TextWrapper>
        <H2>{props.topicSlogan}</H2>
      </TextWrapper>
    </Wrapper>
  );
}

PublicationHeaderBasic.propTypes = {
  topic: PropTypes.string.isRequired,
  topicLink: PropTypes.string,
  topicLogoImg: PropTypes.string,
  topicSlogan: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  const { topic } = ownProps;
  const { topicLogoImg, topicSlogan, topicLink } = state.testState.topicList[
    topic
  ];
  return {
    topicLogoImg,
    topicSlogan,
    topicLink,
  };
}

export default connect(mapStateToProps)(PublicationHeaderBasic);
