import { configure } from '@storybook/react';
import React from 'react';
import GlobalStyle from '../app/global-styles';
import { addDecorator } from '@storybook/react';

addDecorator(s => (
  <>
    <GlobalStyle />
    {s()}
  </>
));
// automatically import all files ending in *.stories.js or *.stories.mdx
configure(require.context('../app', true, /\.stories\.(js|mdx)$/), module);
