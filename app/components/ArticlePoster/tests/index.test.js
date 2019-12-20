/**
 *
 * Tests for ArticleCard
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import renderWithRedux from '../../../../internals/testing/renderWithRedux';
import 'jest-dom/extend-expect';
import ArticlePoster from '../index';
import getAuthorCardType from '../getAuthorCardType';
import { testState } from '../../../store/reducers/testState';

describe('<ArticlePoster />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderWithRedux(<ArticlePoster id="ID001" variation="HomeHeroLeft" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have title content', () => {
    const { container } = renderWithRedux(
      <ArticlePoster id="ID002" variation="TopicHomepageList" />,
    );
    expect(container).toHaveTextContent(testState().ID002.articleInfo.title);
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderWithRedux(
      <ArticlePoster id="ID001" variation="ArticlePageTitle" />,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('Expect to have subtitle content', () => {
    const { container } = renderWithRedux(
      <ArticlePoster id="ID002" variation="TopicHomepageHero" />,
    );
    expect(container).toHaveTextContent(testState().ID002.articleInfo.subtitle);
  });

  it('Expect second div to have author name', () => {
    const { container } = renderWithRedux(
      <ArticlePoster id="ID002" variation="HomeList" />,
    );
    expect(container.querySelectorAll('div')[1]).toHaveTextContent(
      testState().ID002.userInfo.name,
    );
  });

  it('Expect to have content 4.2K claps', () => {
    const { container } = renderWithRedux(
      <ArticlePoster id="ID001" variation="ArticlePageRecommendation" />,
    );
    expect(container).toHaveTextContent('4.2K');
  });

  it('Expect default value to be null', () => {
    const type = getAuthorCardType('');
    expect(type).toBe(null);
  });

  it('Expect to have position 50% 50% if no focusPosition is provided', () => {
    const { container } = renderWithRedux(
      <ArticlePoster id="ID002" variation="ArticlePageRecommendation" />,
    );
    expect(container.querySelector('a')).toHaveStyle(
      `background-position: 50% 50%`,
    );
  });

  it('Should render More from author if no publication is provided, but this test could query pseudo element, so expect no errors logged in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderWithRedux(
      <ArticlePoster id="ID002" variation="ArticlePageRecommendation" />,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to not log errors in console with hoverEffect', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderWithRedux(
      <ArticlePoster id="ID002" variation="HomeList" hoverEffect />,
    );
    expect(spy).not.toHaveBeenCalled();
  });
});
