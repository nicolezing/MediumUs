import React from 'react';
import ArticlePoster from '../../../components/ArticlePoster';
import ArrowIcon from '../../../staticData/svgIcons/arrowRight';
import {
  Wrapper,
  HeroWrapper,
  LeftHero,
  MidHero,
  RightHero,
  MidMarginWrapper,
  FooterStyledA,
  StyledSpan,
  Divider,
} from './Wrappers';

function MainHero() {
  return (
    <Wrapper>
      <HeroWrapper>
        <LeftHero>
          <ArticlePoster variation="HomeHeroLeft" hoverEffect id="ID001" />
        </LeftHero>
        <MidHero>
          <MidMarginWrapper>
            <ArticlePoster id="ID001" variation="HomeHeroMid" hoverEffect />
          </MidMarginWrapper>
          <MidMarginWrapper>
            <ArticlePoster id="ID001" variation="HomeHeroMid" hoverEffect />
          </MidMarginWrapper>
          <ArticlePoster id="ID001" variation="HomeHeroMid" hoverEffect />
        </MidHero>
        <RightHero>
          <ArticlePoster id="ID001" variation="HomeHeroRight" hoverEffect />
        </RightHero>
      </HeroWrapper>
      <FooterStyledA href="./">
        <StyledSpan>
          SEE EDITOR&apos;S PICKS
          {ArrowIcon}
        </StyledSpan>
      </FooterStyledA>
      <Divider />
    </Wrapper>
  );
}

export default MainHero;
