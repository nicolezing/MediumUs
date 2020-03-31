// *
// ArticlePageFooter
// *
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectArticleFooters } from '../../../selectors';
import {
  Container,
  SectionWrapper,
  ListContainer,
  ListWrapper,
  FooterWrapper,
  MainLogoWrapper,
  LogoWrapper,
  NavWrapper,
  ItemWrapper,
  HeaderWrapper,
  Header,
  Detail,
  Mark,
} from './Wrappers';
import {
  mainLogoIcon,
  logoIcon,
} from '../../../staticData/svgIcons/IconButton_Icons';

function ArticlePageFooter(props) {
  const renderList = () =>
    props.footerList.map(itemObj => (
      <ItemWrapper key={itemObj.header}>
        <HeaderWrapper>
          <a href={itemObj.link}>
            <Header>{itemObj.header}</Header>
          </a>
        </HeaderWrapper>
        <Detail>
          {itemObj.detail} <Mark href={itemObj.link}>{itemObj.mark}</Mark>
        </Detail>
      </ItemWrapper>
    ));

  const renderNav = () =>
    Object.keys(props.nav).map(key => (
      <a href={props.nav.key} key={key}>
        {key}
      </a>
    ));

  return (
    <Container>
      <SectionWrapper>
        <ListContainer>
          <ListWrapper>{renderList()}</ListWrapper>
        </ListContainer>
        <FooterWrapper>
          <a href={props.footerList[0].link}>
            <MainLogoWrapper>{mainLogoIcon}</MainLogoWrapper>
            <LogoWrapper>{logoIcon}</LogoWrapper>
          </a>
          <NavWrapper>{renderNav()}</NavWrapper>
        </FooterWrapper>
      </SectionWrapper>
    </Container>
  );
}

ArticlePageFooter.propTypes = {
  footerList: PropTypes.arrayOf(
    PropTypes.exact({
      header: PropTypes.string,
      link: PropTypes.string,
      detail: PropTypes.string,
      mark: PropTypes.string,
    }),
  ),
  nav: PropTypes.object,
};

function mapStateToProps(state) {
  const { footerList, footerNav: nav } = selectArticleFooters(state);
  return { footerList, nav };
}

export default connect(mapStateToProps)(ArticlePageFooter);
