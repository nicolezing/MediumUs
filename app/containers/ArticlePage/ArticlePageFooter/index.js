// *
// ArticlePageFooter
// *
import React from 'react';
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
    footerNav.map(({ title, link }) => (
      <a href={link} key={title}>
        {title}
      </a>
    ));

  return (
    <Container>
      <SectionWrapper>
        <ListContainer>
          <ListWrapper>{renderList()}</ListWrapper>
        </ListContainer>
        <FooterWrapper>
          <a href={footerList[0].link}>
            <MainLogoWrapper>{mainLogoIcon}</MainLogoWrapper>
            <LogoWrapper>{logoIcon}</LogoWrapper>
          </a>
          <NavWrapper>{renderNav()}</NavWrapper>
        </FooterWrapper>
      </SectionWrapper>
    </Container>
  );
}

export default ArticlePageFooter;
