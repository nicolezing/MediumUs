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
import getAuthorCardType from '../getAuthorCardType';
import {
  authorCardInfo as overlayAuthorCardInfo,
  articleInfo as overlayArticleInfo,
} from '../../OverlayTrigger/stories/exampleData';

const authorCardInfo = {
  authorLink: './',
  authorName: 'Lisa Armstrong',
  avatarImg: 'app/staticData/images/user-profile001.png',
  member: true,
  memberJoinedDate: '03/11/2019',
  premium: true,
  publicationLink: './',
  publication: 'OneZero',
  publicationLogo:
    'https://cdn-images-1.medium.com/fit/c/120/120/1*88Z0O0wD4KOrk6Y5EceZog.png',
  creationDate: '11/08/2019 05:23:31',
  lastModified: '12/09/2019 15:45:01',
  readingTime: '13 min read',
  authorDescription:
    'Web developer. Open source lover. Editor @ Bits and Pieces.',
  authorFollowers: 245,

  publicationFollowers: 1432,
  publicationDescription:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
};
const articleInfo = {
  title:
    'Face Filters for Instagram and Snapchat Are the New Frontier of Surrealist Art',
  subtitle: 'And one last warning about their stupidly popular little brother',
  articleLink: './',
  articleCover:
    'https://cdn-images-1.medium.com/max/2000/1*FK8eDjLTgFGHrEsPo14T4A.jpeg',
  focusPosition: [30, 50],
  bookmarked: false,
  twitter: './',
  facebook: './',
  linkedIn: './',
  claps: 4230,
};

describe('<ArticlePoster />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <ArticlePoster
        authorCardInfo={authorCardInfo}
        articleInfo={articleInfo}
        variation="HomeHeroLeft"
      />,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have title content', () => {
    const { container } = render(
      <ArticlePoster
        authorCardInfo={authorCardInfo}
        articleInfo={{ ...articleInfo, title: 'Title Test' }}
        variation="TopicHomepageList"
      />,
    );
    expect(container).toHaveTextContent('Title Test');
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <ArticlePoster
        authorCardInfo={authorCardInfo}
        articleInfo={articleInfo}
        variation="ArticlePageTitle"
      />,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('Expect to have subtitle content', () => {
    const { container } = render(
      <ArticlePoster
        authorCardInfo={authorCardInfo}
        articleInfo={{ ...articleInfo, subtitle: 'Subtitle test' }}
        variation="TopicHomepageHero"
      />,
    );
    expect(container).toHaveTextContent('Subtitle test');
  });

  it('Expect second div to have author name', () => {
    const { container } = render(
      <ArticlePoster
        authorCardInfo={authorCardInfo}
        articleInfo={articleInfo}
        variation="HomeList"
      />,
    );
    expect(container.querySelectorAll('div')[1]).toHaveTextContent(
      authorCardInfo.authorName,
    );
  });

  it('Expect to have author name', () => {
    const { container } = render(
      <ArticlePoster
        authorCardInfo={{ ...authorCardInfo, authorName: 'Nicole' }}
        articleInfo={articleInfo}
        variation="PublicationHomepageHero"
      />,
    );
    expect(container).toHaveTextContent('Nicole');
  });

  it('Expect to have content 4.2K claps', () => {
    const { container } = render(
      <ArticlePoster
        authorCardInfo={authorCardInfo}
        articleInfo={{ ...articleInfo, claps: 5211 }}
        variation="ArticlePageRecommendation"
      />,
    );
    expect(container).toHaveTextContent('5.2K');
  });

  it('Expect default value to be null', () => {
    const type = getAuthorCardType('');
    expect(type).toBe(null);
  });

  it('Expect to have position 50% 50% if no focusPosition is provided', () => {
    const articleInfoTest = {
      title:
        'Face Filters for Instagram and Snapchat Are the New Frontier of Surrealist Art',
      subtitle:
        'And one last warning about their stupidly popular little brother',
      articleLink: './',
      articleCover: './',
      bookmarked: true,
      twitter: './',
      facebook: './',
      claps: 4230,
    };

    const { container } = render(
      <ArticlePoster
        authorCardInfo={authorCardInfo}
        articleInfo={articleInfoTest}
        variation="ArticlePageRecommendation"
      />,
    );
    expect(container.querySelector('a')).toHaveStyle(
      `background-position: 50% 50%`,
    );
  });
  it('Should render More from Nicole if no publication is provided, but this test could query pseudo element, so expect no errors logged in console', () => {
    const authorCardInfoTest = {
      authorLink: './',
      authorName: 'Nicole',
      avatarImg: 'app/staticData/images/user-profile001.png',
      member: true,
      premium: true,
      creationDate: '11/08/2019 05:23:31',
      readingTime: '13 min read',
    };
    const spy = jest.spyOn(global.console, 'error');
    render(
      <ArticlePoster
        authorCardInfo={authorCardInfoTest}
        articleInfo={articleInfo}
        variation="ArticlePageRecommendation"
      />,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to not log errors in console with hoverEffect', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <ArticlePoster
        authorCardInfo={overlayAuthorCardInfo}
        articleInfo={overlayArticleInfo}
        variation="HomeList"
        hoverEffect
      />,
    );
    expect(spy).not.toHaveBeenCalled();
  });
});
