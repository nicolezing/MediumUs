import React from 'react';
import PropTypes from 'prop-types';

import ArticlePoster from '../../../components/ArticlePoster';
import ArrowIcon from '../../../staticData/svgIcons/arrowRight';
import {
  Wrapper,
  HeroWrapper,
  LeftHero,
  MidHero,
  RightHero,
  MidMarginWrapper,
  A,
  Span,
  Divider,
} from './Wrappers';

function MainHero(props) {
  return (
    <Wrapper>
      <HeroWrapper>
        <LeftHero>
          <ArticlePoster
            variation="HomeHeroLeft"
            hoverEffect
            id="ID001"
            theme={props.theme}
          />
        </LeftHero>
        <MidHero>
          <MidMarginWrapper>
            <ArticlePoster
              id="ID001"
              variation="HomeHeroMid"
              theme={props.theme}
              hoverEffect
            />
          </MidMarginWrapper>
          <MidMarginWrapper>
            <ArticlePoster
              id="ID001"
              variation="HomeHeroMid"
              theme={props.theme}
              hoverEffect
            />
          </MidMarginWrapper>
          <ArticlePoster
            id="ID001"
            variation="HomeHeroMid"
            theme={props.theme}
            hoverEffect
          />
        </MidHero>
        <RightHero>
          <ArticlePoster
            id="ID001"
            variation="HomeHeroRight"
            theme={props.theme}
            hoverEffect
          />
        </RightHero>
      </HeroWrapper>
      <A href="./">
        <Span>
          SEE EDITOR&apos;S PICKS
          {ArrowIcon}
        </Span>
      </A>
      <Divider />
    </Wrapper>
  );
}

MainHero.propTypes = {
  theme: PropTypes.string,
};

export default MainHero;
