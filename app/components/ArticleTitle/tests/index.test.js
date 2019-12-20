/**
 *
 * Tests for ArticleTitle
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import renderWithRedux from '../../../../internals/testing/renderWithRedux';
import 'jest-dom/extend-expect';
import ArticleTitle from '../index';

describe('<ArticleTitle />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderWithRedux(<ArticleTitle id="ID001" variation="HomeHeroLeft" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderWithRedux(
      <ArticleTitle id="ID001" variation="ArticlePageTitle" />,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('Should have title and subtitle content', () => {
    const { container } = renderWithRedux(
      <ArticleTitle id="ID001" variation="TopicHomepageHero" />,
    );
    expect(container).toHaveTextContent(
      'Face Filters for Instagram and Snapshot Are the New Frontier of Surrealist Art',
    );
    expect(container).toHaveTextContent(
      'And one last warning about their stupidly popular little brother',
    );
  });

  it('Should have no subtitle content', () => {
    const { container } = renderWithRedux(
      <ArticleTitle id="ID001" variation="Sidebar" />,
    );
    expect(container.querySelectorAll('div')[1]).toHaveTextContent('');
  });
});
