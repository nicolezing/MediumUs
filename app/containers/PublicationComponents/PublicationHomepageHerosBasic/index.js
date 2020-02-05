/*
 * PublicationHomepageHerosBasic
 */

import React from 'react';
import ArticlePoster from '../../../components/ArticlePoster';
import { MarginWrapper, X2Wrapper, X3Wrapper, SectionTitle } from './Wrappers';

const renderX3List = list =>
  list.map(val => (
    <ArticlePoster variation="PublicationHomepageListX3" hoverEffect id={val} />
  ));

const renderX2List = list =>
  list.map(val => (
    <ArticlePoster variation="PublicationHomepageListX2" hoverEffect id={val} />
  ));

const renderList = ([listType, list]) => {
  if (listType === 2) {
    return (
      <MarginWrapper>
        <X2Wrapper>{renderX2List(list)}</X2Wrapper>
      </MarginWrapper>
    );
  }
  if (listType === 3) {
    return <X3Wrapper>{renderX3List(list)}</X3Wrapper>;
  }
  return (
    <MarginWrapper>
      <ArticlePoster
        variation="PublicationHomepageHero"
        hoverEffect
        id={list}
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
