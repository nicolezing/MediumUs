/**
 *
 * Tests for ArticleCard
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import ArticlePoster from '../index';
import authorInfo from '../../AuthorCard/stories/exampleData';
import articleInfo from '../stories/exampleData';
import kFormatter from '../kFormatter';
import getAuthorCardType from '../getAuthorCardType';

describe('<ArticleCard />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <ArticlePoster
        {...authorInfo}
        {...articleInfo}
        variation="HomeHeroLeft"
      />,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have title content', () => {
    const { container } = render(
      <ArticlePoster
        {...authorInfo}
        {...articleInfo}
        variation="TopicHomepageList"
      />,
    );
    expect(container).toHaveTextContent(articleInfo.title);
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <ArticlePoster
        {...authorInfo}
        {...articleInfo}
        variation="ArticlePageTitle"
      />,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('Expect to have subtitle content', () => {
    const { container } = render(
      <ArticlePoster
        {...authorInfo}
        {...articleInfo}
        variation="TopicHomepageHero"
      />,
    );
    expect(container).toHaveTextContent(articleInfo.subtitle);
  });

  it('Expect second div to have autor name', () => {
    const { container } = render(
      <ArticlePoster {...authorInfo} {...articleInfo} variation="HomeList" />,
    );
    expect(container.querySelectorAll('div')[1]).toHaveTextContent(
      authorInfo.name,
    );
  });

  it('Expect to have subtitle content', () => {
    const { container } = render(
      <ArticlePoster
        {...authorInfo}
        {...articleInfo}
        variation="PublicationHomepageHero"
      />,
    );
    expect(container).toHaveTextContent(articleInfo.subtitle);
  });

  it('Expect to have content 4.2K clpas', () => {
    const { container } = render(
      <ArticlePoster
        {...authorInfo}
        {...articleInfo}
        variation="ArticlePageRecommendation"
      />,
    );
    expect(container).toHaveTextContent('4.2K');
  });

  it('Expect to return K formatted number', () => {
    const num = kFormatter(3200);
    expect(num).toEqual('3.2K');
    const n = kFormatter(-32);
    expect(n).toEqual('-32');
  });

  it('Expect default value to be null', () => {
    const type = getAuthorCardType('');
    expect(type).toBe(null);
  });

  it('Expect to have position 50% 50%', () => {
    const article = {
      title:
        'Face Filters for Instagram and Snapchat Are the New Frontier of Surrealist Art',
      subtitle:
        'And one last warning about their stupidly popular little brother',
      articleLink: './',
      articleCover: './',
      bookmarked: true,
      twitter: './',
      facebook: './',
      linkedIn: './',
      claps: 4230,
    };

    const author = {
      authorLink: './',
      name: 'Lisa Armstrong',
      categoryLink: './',
      date: 'Nov 21',
      readingTime: '13 min read',
      avatarImg: './',
      member: true,
      premium: true,
    };
    const { container } = render(
      <ArticlePoster
        {...author}
        {...article}
        variation="ArticlePageRecommendation"
      />,
    );
    expect(container.querySelector('a')).toHaveStyle(
      `background-position: 50% 50%`,
    );
  });
});
