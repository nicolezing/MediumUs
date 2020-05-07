// *
// ArticlePageFooter
// *
import React from 'react';
import { Link } from 'react-router-dom';
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
import { footerList, footerNav } from './articleFooterContent';

function ArticlePageFooter() {
  const renderList = () =>
    footerList.map(itemObj => (
      <ItemWrapper key={itemObj.header}>
        <HeaderWrapper>
          <Link to={itemObj.link}>
            <Header>{itemObj.header}</Header>
          </Link>
        </HeaderWrapper>
        <Detail>
          {itemObj.detail} <Mark to={itemObj.link}>{itemObj.mark}</Mark>
        </Detail>
      </ItemWrapper>
    ));

  const renderNav = () =>
    footerNav.map(({ title, link }) => (
      <Link to={link} key={title}>
        {title}
      </Link>
    ));

  return (
    <Container>
      <SectionWrapper>
        <ListContainer>
          <ListWrapper>{renderList()}</ListWrapper>
        </ListContainer>
        <FooterWrapper>
          <Link to={footerList[0].link}>
            <MainLogoWrapper>{mainLogoIcon}</MainLogoWrapper>
            <LogoWrapper>{logoIcon}</LogoWrapper>
          </Link>
          <NavWrapper>{renderNav()}</NavWrapper>
        </FooterWrapper>
      </SectionWrapper>
    </Container>
  );
}

export default ArticlePageFooter;
