import { css } from 'styled-components';

const outlinedStyle = css`
  display: inline-block;
  position: relative;
  margin: 0;
  // background: rgba(0, 0, 0, 0);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  vertical-align: bottom;
  white-space: nowrap;
  text-rendering: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: 'liga' on;
  display: inline-block;
  vertical-align: middle;

  border: 1px solid rgba(0, 0, 0, 0.15);
  -webkit-border-radius: 4px;
  border-radius: 4px;

  // -webkit-transition: 0.1s background-color, 0.1s border-color, 0.1s color,
  //   0.1s fill;
  // transition: 0.1s background-color, 0.1s border-color, 0.1s color, 0.1s fill;

  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
  -webkit-tap-highlight-color: transparent !important;

  line-height: 19px;
  padding: 0 10px;
  font-size: 15px;

  &:focus {
    outline: none;
  }
  &:last-child {
    margin-right: 0;
  }
`;

const sm = css`
  height: 19px;
  span {
    line-height: 19px;
  }
`;

const tall = css`
  font-size: 15.8px;
  line-height: 20px;
  padding: 4px 12px;
`;

export { outlinedStyle, sm, tall };
