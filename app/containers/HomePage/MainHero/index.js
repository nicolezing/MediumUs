import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectHomepageHerosLists } from '../../../selectors';
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
  const { mainHeroList } = props;
  return (
    <Wrapper>
      <HeroWrapper>
        <LeftHero>
          <ArticlePoster
            variation="HomeHeroLeft"
            hoverEffect
            id={mainHeroList[0]}
            theme="green"
          />
        </LeftHero>
        <MidHero>
          <MidMarginWrapper>
            <ArticlePoster
              id={mainHeroList[1]}
              variation="HomeHeroMid"
              theme="green"
              hoverEffect
            />
          </MidMarginWrapper>
          <MidMarginWrapper>
            <ArticlePoster
              id={mainHeroList[2]}
              variation="HomeHeroMid"
              theme="green"
              hoverEffect
            />
          </MidMarginWrapper>
          <ArticlePoster
            id={mainHeroList[3]}
            variation="HomeHeroMid"
            theme="green"
            hoverEffect
          />
        </MidHero>
        <RightHero>
          <ArticlePoster
            id={mainHeroList[4]}
            variation="HomeHeroRight"
            theme="green"
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
  mainHeroList: PropTypes.array,
};

function mapStateToProps(state) {
  const { mainHeros: mainHeroList } = selectHomepageHerosLists(state);

  return {
    mainHeroList,
  };
}

export default connect(mapStateToProps)(MainHero);
