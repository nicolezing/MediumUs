import { configure } from '@storybook/react';

import 'normalize.css';
import 'sanitize.css';

// automatically import all files ending in *.stories.js or *.stories.mdx
configure(require.context('../app', true, /\.stories\.(js|mdx)$/), module);
