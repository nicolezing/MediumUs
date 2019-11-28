import styled from 'styled-components';

const ArrowStyle = styled.div`
  padding-right: 10px !important;
  -webkit-box-flex: 0;
  -webkit-flex: 0 0 auto;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
`;

const Button = styled.button`
  -webkit-appearance: button;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: buttontext;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  background-color: buttonface;
  box-sizing: border-box;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-color: buttonface;
  border-image: initial;

  overflow: visible;

  text-transform: none;

  display: inline-block;
  position: relative;
  color: rgba(0, 0, 0, 0.54);
  background: rgba(0, 0, 0, 0);
  font-size: 16px;
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

  transition: 0.1s background-color, 0.1s border-color, 0.1s color, 0.1s fill;

  &--link {
    border-width: 0;
    padding: 0;
    text-align: left;
    vertical-align: baseline;
    white-space: normal;
  }
  &[disabled]:active,
  &[disabled]:hover {
    pointer-events: none;
    opacity: 0.25;
    cursor: default;
  }
`;

const Span = styled.span`
  top: -1px;
  position: relative;
  fill: rgba(0, 0, 0, 0.54);
  vertical-align: middle;
  transition: 0.1s background-color, 0.1s border-color, 0.1s color, 0.1s fill;
  display: inline-block;
`;

export { ArrowStyle, Button, Span };
