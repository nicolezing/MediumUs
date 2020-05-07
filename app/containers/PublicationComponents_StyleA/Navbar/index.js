/*
 * NavbarBasic
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { IconButton, OutlinedButton } from '../../../components/Button';
import {
  Wrapper,
  ListWrapper,
  LinkWrapper,
  A,
  DividerSpan,
  ButtonSpan,
  ButtonWrapper,
} from './Wrappers';
import { selectPublicationNavbarInfo } from '../../../selectors';

function Navbar(props) {
  const { navbar, socialMedia, theme } = props;
  const renderNavbar = () =>
    navbar.map(({ title, link }, index) => {
      if (index !== navbar.length - 1) {
        return (
          <LinkWrapper>
            <A to={link} key={title}>
              {title}
            </A>
          </LinkWrapper>
        );
      }

      return (
        <>
          <DividerSpan />
          <LinkWrapper>
            <A to={link} key={title}>
              {title}
            </A>
          </LinkWrapper>
        </>
      );
    });

  const renderSocialMedia = () =>
    socialMedia.map(({ media, link }) => (
      <ButtonSpan>
        <a href={link} key={media}>
          <IconButton iconName={`${media}Icon`} theme="gray" />
        </a>
      </ButtonSpan>
    ));

  return (
    <Wrapper>
      <ListWrapper>{renderNavbar()}</ListWrapper>
      <ButtonWrapper>
        {Object.keys(socialMedia).length > 0 ? renderSocialMedia() : <></>}
        <OutlinedButton
          text="Follow"
          type="outlined"
          size="small"
          theme={theme}
        />
      </ButtonWrapper>
    </Wrapper>
  );
}

Navbar.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  publicationId: PropTypes.string.isRequired,
  navbar: PropTypes.array,
  socialMedia: PropTypes.array,
  theme: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  const { publicationId } = ownProps;
  const { navbar, socialMedia, theme } = selectPublicationNavbarInfo(
    state,
    publicationId,
  );
  return {
    navbar,
    socialMedia,
    theme,
  };
}

export default connect(mapStateToProps)(Navbar);
