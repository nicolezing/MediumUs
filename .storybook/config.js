import { configure, addDecorator } from '@storybook/react';
import React from 'react';
import GlobalStyle from '../app/global-styles';
import { Provider } from 'react-redux';
import { testState } from '../app/store/reducers/testState';
import { createStore, combineReducers } from 'redux';

addDecorator(s => (
  <>
    <GlobalStyle />
    <Provider store={createStore(combineReducers({ testState }))}>
      {s()}
    </Provider>
  </>
));

// automatically import all files ending in *.stories.js or *.stories.mdx
configure(require.context('../app', true, /\.stories\.(js|mdx)$/), module);
