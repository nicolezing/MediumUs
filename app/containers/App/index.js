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
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';
import Navigation from '../../components/Navigation/Navigation';

export default function App() {
  let homeRoute = <Route exact path="/" component={HomePage} />;
  if (process.env.NODE_ENV === 'production') {
    homeRoute = (
      <Route exact path="/MediumUs">
        <Route path="/" component={HomePage} />
      </Route>
    );
  }
  const navItems = [
    { id: '1', navName: 'Home', navURL: '' },
    { id: '2', navName: 'ONEZERO', navURL: '' },
    { id: '3', navName: 'ELEMENTAL', navURL: '' },
    { id: '4', navName: 'GEN', navURL: '' },
    { id: '5', navName: 'ZORA', navURL: '' },
    { id: '6', navName: 'FORGE', navURL: '' },
    { id: '7', navName: 'HUMAN PARTS', navURL: '' },
    { id: '8', navName: 'MARKER', navURL: '' },
    { id: '9', navName: 'SELF', navURL: '' },
    { id: '10', navName: 'TECH', navURL: '' },
    { id: '11', navName: 'HEATED', navURL: '' },
    { id: '12', navName: 'MODUS', navURL: '' },
    { id: '13', navName: 'MORE', navURL: '' },
  ];

  return (
    <div>
      <Navigation navs={navItems} />
      <Switch>
        {homeRoute}
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
