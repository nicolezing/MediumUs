/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import { Elemental } from 'containers/Elemental';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  let homeRoute = <Route exact path="/" component={HomePage} />;
  const elementalRoute = (
    <Route exact path="/elemental" component={Elemental} />
  );
  // const NotFoundPage = <Route component={NotFoundPage} />;

  if (process.env.NODE_ENV === 'production') {
    homeRoute = (
      <Route exact path="/MediumUs">
        <Route path="/" component={HomePage} />
      </Route>
    );
  }

  return (
    <div>
      <Switch>
        <>
          {homeRoute}
          {elementalRoute}
        </>
      </Switch>
      <GlobalStyle />
    </div>
  );
}
