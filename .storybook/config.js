import { configure } from '@storybook/react';
// import '../app/global-styles';
import 'normalize.css';
import 'sanitize.css';
// import '../app/staticData/fonts/fonts.js';
// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
