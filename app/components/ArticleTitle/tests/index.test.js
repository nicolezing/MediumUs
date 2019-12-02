/**
 *
 * Tests for ArticleTitle
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import articleInfo from '../stories/exampleData';
import ArticleTitle from '../index';

describe('<ArticleTitle />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<ArticleTitle {...articleInfo} variation="HomeHeroLeft" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<ArticleTitle {...articleInfo} variation="ArticlePageTitle" />);
    expect(firstChild).toMatchSnapshot();
  });

  it('Should have title and subtitle content', () => {
    const { container } = render(
      <ArticleTitle {...articleInfo} variation="TopicHomepageHero" />,
    );
    expect(container).toHaveTextContent(articleInfo.title);
    expect(container).toHaveTextContent(articleInfo.subtitle);
  });

  it('Should have no subtitle content', () => {
    const { container } = render(
      <ArticleTitle {...articleInfo} variation="Sidebar" />,
    );
    expect(container.querySelectorAll('div')[1]).toHaveTextContent('');
  });
});
