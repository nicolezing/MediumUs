/*
 * HeroList
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticlePoster from '../../../components/ArticlePoster';
import {
  PaddingWrapper,
  MarginWrapper,
  SectionTitle,
  X3Wrapper,
  X2Wrapper,
} from './Wrappers';

function HeroList(props) {
  const main = props.heroList[0];
  const latest = props.heroList.slice(1, 7);
  const mainInExercise = props.heroList.slice(7, 8);
  const listInExercise = props.heroList.slice(8, 14);
  const secondMainInExercise = props.heroList.slice(14, 15);
  const secondListInExercise = props.heroList.slice(15, 18);
  const thirdListInExercise = props.heroList.slice(18, 20);
  const listInNuance = props.heroList.slice(20, 23);
  const secondListInNuance = props.heroList.slice(23, 25);
  const mainInMore = props.heroList.slice(25, 26);
  const listInMore = props.heroList.slice(26);

  const renderX3List = list =>
    list.map(val => (
      <ArticlePoster
        variation="PublicationHomepageListX3"
        hoverEffect
        id={val}
      />
    ));

  const renderX2List = list =>
    list.map(val => (
      <ArticlePoster
        variation="PublicationHomepageListX2"
        hoverEffect
        id={val}
      />
    ));

  return (
    <div>
      <section>
        <PaddingWrapper>
          <ArticlePoster
            variation="PublicationHomepageHero"
            hoverEffect
            id={main}
          />
        </PaddingWrapper>
        <MarginWrapper>
          <SectionTitle>Latest</SectionTitle>
        </MarginWrapper>
        <X3Wrapper>{renderX3List(latest)} </X3Wrapper>
      </section>

      <section>
        <MarginWrapper>
          <SectionTitle>Exercise is Medicine</SectionTitle>
        </MarginWrapper>
        <MarginWrapper>
          <ArticlePoster
            variation="PublicationHomepageHero"
            hoverEffect
            id={mainInExercise}
          />
        </MarginWrapper>
        <X3Wrapper>{renderX3List(listInExercise)} </X3Wrapper>

        <MarginWrapper>
          <ArticlePoster
            variation="PublicationHomepageHero"
            hoverEffect
            id={secondMainInExercise}
          />
        </MarginWrapper>
        <X3Wrapper>{renderX3List(secondListInExercise)} </X3Wrapper>
        <MarginWrapper>
          <X2Wrapper>{renderX2List(thirdListInExercise)} </X2Wrapper>
        </MarginWrapper>
      </section>

      <section>
        <MarginWrapper>
          <SectionTitle>The Nuance</SectionTitle>
        </MarginWrapper>
        <X3Wrapper>{renderX3List(listInNuance)} </X3Wrapper>
        <MarginWrapper>
          <X2Wrapper>{renderX2List(secondListInNuance)} </X2Wrapper>
        </MarginWrapper>
      </section>

      <section>
        <MarginWrapper>
          <SectionTitle>MORE</SectionTitle>
        </MarginWrapper>
        <MarginWrapper>
          <ArticlePoster
            variation="PublicationHomepageHero"
            hoverEffect
            id={mainInMore}
          />
        </MarginWrapper>
        <X3Wrapper>{renderX3List(listInMore)} </X3Wrapper>
      </section>
    </div>
  );
}

HeroList.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  topic: PropTypes.string.isRequired,
  heroList: PropTypes.array,
};

function mapStateToProps(state, ownProps) {
  const { topic } = ownProps;
  const { heroList } = state.testState.topicList[topic];
  return { heroList };
}

export default connect(mapStateToProps)(HeroList);
