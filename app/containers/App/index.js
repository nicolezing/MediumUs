/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import ElementalPage from 'containers/ElementalPage';
import ArticlePage from 'containers/ArticlePage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  let homeRoute = <Route exact path="/" component={HomePage} />;
  const elementalRoute = (
    <Route exact path="/publication/:publicationId" component={ElementalPage} />
  );
  const articlePageRoute = (
    <Route
      exact
      path="/publication/:publicationId/:articleId"
      component={ArticlePage}
    />
  );
  const notFoundRoute = <Route component={NotFoundPage} />;

  if (process.env.NODE_ENV === 'production') {
    homeRoute = (
      <Route exact path="/">
        <Route path="/" component={HomePage} />
      </Route>
    );
  }

  return (
    <div>
      <Switch>
        {homeRoute}
        {elementalRoute}
        {articlePageRoute}
        {notFoundRoute}
      </Switch>
      <GlobalStyle />
    </div>
  );
}
