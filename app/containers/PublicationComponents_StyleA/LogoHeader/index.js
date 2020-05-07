/*
 * PublicationLogoHeaderBasic
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, ImgWrapper, Img, TextWrapper, H2 } from './Wrappers';
import { selectPublicationHeader } from '../../../selectors';

function PublicationLogoHeader(props) {
  return (
    <Wrapper>
      <ImgWrapper>
        <a href={props.link}>
          <Img src={props.logo} alt={props.name} />
        </a>
      </ImgWrapper>
      <TextWrapper>
        <H2>{props.slogan}</H2>
      </TextWrapper>
    </Wrapper>
  );
}

PublicationLogoHeader.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  publicationId: PropTypes.string.isRequired,
  name: PropTypes.string,
  link: PropTypes.string,
  logo: PropTypes.string,
  slogan: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  const { publicationId } = ownProps;
  const { name, logo, slogan, link } = selectPublicationHeader(
    state,
    publicationId,
  );
  return { name, logo, slogan, link };
}

export default connect(mapStateToProps)(PublicationLogoHeader);
