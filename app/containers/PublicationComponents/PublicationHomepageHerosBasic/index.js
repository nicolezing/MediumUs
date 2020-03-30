/*
 * PublicationHomepageHerosBasic
 */

import React from 'react';
import ArticlePoster from '../../../components/ArticlePoster';
import { MarginWrapper, X2Wrapper, X3Wrapper, SectionTitle } from './Wrappers';

const renderX3List = (list, theme) =>
  list.map(val => (
    <ArticlePoster
      variation="PublicationHomepageListX3"
      hoverEffect
      id={val}
      theme={theme}
    />
  ));

const renderX2List = (list, theme) =>
  list.map(val => (
    <ArticlePoster
      variation="PublicationHomepageListX2"
      hoverEffect
      id={val}
      theme={theme}
    />
  ));

const renderList = ([listType, list], theme) => {
  if (listType === 2) {
    return (
      <MarginWrapper>
        <X2Wrapper>{renderX2List(list, theme)}</X2Wrapper>
      </MarginWrapper>
    );
  }
  if (listType === 3) {
    return <X3Wrapper>{renderX3List(list, theme)}</X3Wrapper>;
  }
  return (
    <MarginWrapper>
      <ArticlePoster
        variation="PublicationHomepageHero"
        hoverEffect
        id={list[0]}
        theme={theme}
      />
    </MarginWrapper>
  );
};

const renderSectionTitle = title => (
  <MarginWrapper>
    <SectionTitle>{title}</SectionTitle>
  </MarginWrapper>
);

export { renderList, renderSectionTitle };
