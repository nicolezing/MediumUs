/**
 *
 * Tests for AuthorCards
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import renderWithRedux from '../../../../internals/testing/renderWithRedux';
import 'jest-dom/extend-expect'; // add some helpful assertions
import AuthorCard from '../index';
import getAuthorInfoDisplayPropertiesByVariation from '../getAuthorInfoDisplayPropertiesByVariation';

test('getAuthorInfoDisplayPropertiesByVariation has desired configuration', () => {
  const configuration = getAuthorInfoDisplayPropertiesByVariation('TopicHome');
  expect(configuration).toHaveProperty('avatarSize', '40px');
  expect(configuration).toHaveProperty('isDisplayAvatar', true);
  expect(configuration).toHaveProperty('hasFollowButton', false);
});

describe('<AuthorCard />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderWithRedux(<AuthorCard id="ID001" variation="PublicationHome" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to not log errors in console with hoverEffect', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderWithRedux(
      <AuthorCard id="ID001" variation="PublicationHome" hoverEffect />,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have authorInfo.authorName and authorInfo.Publication in html', () => {
    const { getByText } = renderWithRedux(
      <AuthorCard id="ID001" variation="ArticleTitle" />,
    );
    expect(getByText('Lisa Armstrong')).toBeInTheDocument();
    expect(getByText('OneZero')).toBeInTheDocument();
    expect(getByText('Follow')).toBeInTheDocument();
  });

  it('Should render and match the snapshot', () => {
    const { container } = renderWithRedux(
      <AuthorCard id="ID001" variation="Home" />,
    );
    expect(container).toMatchSnapshot();
  });

  it('Should have in publication on the page', () => {
    const { container } = renderWithRedux(
      <AuthorCard id="ID001" variation="TopicHome" />,
    );
    expect(container.getElementsByTagName('a')[2].innerHTML).toEqual('OneZero');
  });

  it('Expect this to throw error', () => {
    console.error.mockImplementation(() => {});
    expect(() =>
      renderWithRedux(<AuthorCard id="ID001" variation="InvalidVariation" />),
    ).toThrow();
  });

  it('Expect getConfig to throw error with invalid variation', () => {
    expect(() =>
      getAuthorInfoDisplayPropertiesByVariation('InvalidVariation'),
    ).toThrow();
  });
});
