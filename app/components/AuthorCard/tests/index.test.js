/**
 *
 * Tests for AuthorCards
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect'; // add some helpful assertions
import AuthorCard from '../index';
import getAuthorInfoDisplayPropertiesByVariation from '../getAuthorInfoDisplayPropertiesByVariation';
import authorInfo from '../stories/exampleData';

const authorCardInfo = {
  authorLink: './',
  authorName: 'Lisa Armstrong',
  avatarImg: './',
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

test('AuthorInfo has desired props', () => {
  expect(authorInfo).toHaveProperty('authorName');
  expect(authorInfo).toHaveProperty('authorLink');
  expect(authorInfo).toHaveProperty('creationDate');
});

test('getAuthorInfoDisplayPropertiesByVariation has desired configuration', () => {
  const configuration = getAuthorInfoDisplayPropertiesByVariation('TopicHome');
  expect(configuration).toHaveProperty('avatarSize', '40px');
  expect(configuration).toHaveProperty('isDisplayAvatar', true);
  expect(configuration).toHaveProperty('hasFollowButton', false);
});

describe('<AuthorCard />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<AuthorCard {...authorInfo} variation="PublicationHome" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to not log errors in console with hoverEffect', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <AuthorCard
        {...authorCardInfo}
        variation="PublicationHome"
        hoverEffect
      />,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have authorInfo.authorName and authorInfo.Publication in html', () => {
    const { getByText } = render(
      <AuthorCard {...authorInfo} variation="ArticleTitle" />,
    );
    expect(getByText(authorInfo.authorName)).toBeInTheDocument();
    expect(getByText(authorInfo.publication)).toBeInTheDocument();
    expect(getByText('Follow')).toBeInTheDocument();
  });

  it('Should render and match the snapshot', () => {
    const { container } = render(
      <AuthorCard {...authorInfo} variation="Home" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should have in publication on the page', () => {
    const { container } = render(
      <AuthorCard {...authorInfo} variation="TopicHome" />,
    );
    expect(container.getElementsByTagName('a')[2].innerHTML).toEqual(
      authorInfo.publication,
    );
  });

  it('Expect this to throw error', () => {
    console.error.mockImplementation(() => {});
    expect(() =>
      render(<AuthorCard {...authorInfo} variation="InvalidVariation" />),
    ).toThrow();
  });

  it('Expect getConfig to throw error with invalid variation', () => {
    expect(() =>
      getAuthorInfoDisplayPropertiesByVariation('InvalidVariation'),
    ).toThrow();
  });
});
