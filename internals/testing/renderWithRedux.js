import React from 'react';
import { render } from 'react-testing-library';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { testState } from '../../app/store/reducers/testState';

export default function(
  ui,
  store = createStore(combineReducers({ testState })),
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
}
