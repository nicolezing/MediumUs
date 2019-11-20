import { configure } from '@storybook/react';
import '../app/global-styles';
// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
