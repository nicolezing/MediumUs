import { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';
import fonts from './staticData/fonts/fonts.css';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  ${fonts}

  body{
    font-family: medium-content-sans-serif-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif;
    letter-spacing: 0;
    font-weight: 400;
    font-style: normal;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: "liga" on;
  }

  a, 
  button{
    text-decoration: none;
    cursor: pointer;
    // &:focus {
    //   outline: none;
    // }
  }

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
