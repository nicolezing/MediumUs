import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';
import fonts from './fonts/fonts.css';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  ${fonts}

  // html,
  // body {
  //   height: 100%;
  //   width: 100%;
  // }

  // body {
  //   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }

  // body.fontLoaded {
  //   font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }

  // #app {
  //   background-color: #fafafa;
  //   min-height: 100%;
  //   min-width: 100%;
  // }

  // p,
  // label {
  //   font-family: Georgia, Times, 'Times New Roman', serif;
  //   line-height: 1.5em;
  // }
`;

export default GlobalStyle;
