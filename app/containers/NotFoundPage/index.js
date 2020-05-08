/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import messages from './messages';

export default function NotFound() {
  return (
    <h1>
      <FormattedMessage {...messages.header} />
      <div />
      <li>
        <Link to="/">Home Page</Link>
      </li>
      <li>
        <Link to="/publication/elemental">Elemental</Link>
      </li>
      <li>
        <Link to="/publication/elemental/id001">Example Article 1</Link>
      </li>
      <li>
        <Link to="/publication/elemental/id002">Example Article 2</Link>
      </li>
    </h1>
  );
}
