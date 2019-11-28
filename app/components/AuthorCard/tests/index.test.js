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
import getConfig from '../authorCardsConfig';
import authorInfo from '../stories/exampleData';

test('AuthorInfo has desired props', () => {
  expect(authorInfo).toHaveProperty('name');
  expect(authorInfo).toHaveProperty('authorLink');
  expect(authorInfo).toHaveProperty('date');
});

test('authorCardsConfig has desired configuration', () => {
  const authorCardsConfig = getConfig('TopicHome');
  expect(authorCardsConfig).toHaveProperty('avatarSize', '40px');
  expect(authorCardsConfig).toHaveProperty('avatarDisplay', true);
  expect(authorCardsConfig).toHaveProperty('followButton', false);
});

describe('<AuthorCard />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<AuthorCard {...authorInfo} variation="CollectionHome" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have authorInfo.name and authorInfo.collection in html', () => {
    const { getByText } = render(
      <AuthorCard {...authorInfo} variation="ArticleTitle" />,
    );
    expect(getByText(authorInfo.name)).toBeInTheDocument();
    expect(getByText(authorInfo.collection)).toBeInTheDocument();
    expect(getByText('Follow')).toBeInTheDocument();
  });

  it('Should render and match the snapshot', () => {
    const { container } = render(
      <AuthorCard {...authorInfo} variation="Home" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should have in collection on the page', () => {
    const { container } = render(
      <AuthorCard {...authorInfo} variation="TopicHome" />,
    );
    expect(container.getElementsByTagName('a')[2].innerHTML).toEqual(
      authorInfo.collection,
    );
  });
});
