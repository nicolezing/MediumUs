/*
 * PublicationLogoHeaderBasic
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, ImgWrapper, Img, TextWrapper, H2 } from './Wrappers';
import { selectTopicInfo } from '../../../selectors';

function PublicationLogoHeaderBasic(props) {
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

PublicationLogoHeaderBasic.propTypes = {
  topic: PropTypes.string.isRequired,
  topicLink: PropTypes.string,
  topicLogoImg: PropTypes.string,
  topicSlogan: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  const { topic } = ownProps;
  const {
    logo: topicLogoImg,
    slogan: topicSlogan,
    link: topicLink,
  } = selectTopicInfo(state, topic);
  return {
    topicLogoImg,
    topicSlogan,
    topicLink,
  };
}

export default connect(mapStateToProps)(PublicationLogoHeaderBasic);
