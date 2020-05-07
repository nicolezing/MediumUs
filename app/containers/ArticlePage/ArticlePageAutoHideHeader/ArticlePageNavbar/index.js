/*
 * ArticlePageNavbar
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectPublicationNavbarInfo } from '../../../../selectors';
import { A } from '../../../PublicationComponents_StyleA/Navbar/Wrappers';
import {
  Wrapper,
  ImgWrapper,
  Img,
  LinkWrapper,
  ListWrapper,
  DividerSpan,
} from './Wrappers';

function ArticlePageNavbar(props) {
  const { name, logoSmall, navbar, link } = props;
  const renderNavbar = () =>
    navbar.map(({ title, link: navLink }, index) => {
      if (index !== navbar.length - 1) {
        return (
          <LinkWrapper key={title}>
            <A to={navLink}>{title}</A>
          </LinkWrapper>
        );
      }
      // last list item will have a divider in front
      return (
        <>
          <DividerSpan />
          <LinkWrapper key={title}>
            <A to={navLink}>{title}</A>
          </LinkWrapper>
        </>
      );
    });

  return (
    <Wrapper>
      <ImgWrapper>
        <a href={link}>
          <Img src={logoSmall} alt={name} />
        </a>
      </ImgWrapper>
      <ListWrapper>{renderNavbar()}</ListWrapper>
    </Wrapper>
  );
}

ArticlePageNavbar.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  publicationId: PropTypes.string.isRequired,
  name: PropTypes.string,
  logoSmall: PropTypes.string,
  link: PropTypes.string,
  navbar: PropTypes.array,
};

function mapStateToProps(state, ownProps) {
  const { publicationId } = ownProps;
  const { name, logoSmall, navbar, link } = selectPublicationNavbarInfo(
    state,
    publicationId,
  );
  return { name, logoSmall, navbar, link };
}

export default connect(mapStateToProps)(ArticlePageNavbar);
