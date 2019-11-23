import { css } from 'styled-components';
import getColor from '../../staticData/colorSets';

const base = css`
  display: inline-block;
  position: relative;
  margin: 0;
  background: #fff;
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
  vertical-align: middle;

  // border: 1px solid rgba(0, 0, 0, 0.15);
  border-width: 1px;
  border-style: solid;

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
  // &:last-child {
  //   margin-right: 0;
  // }
`;

const small = css`
  height: 19px;
  span {
    line-height: 19px;
  }
`;

const middle = css`
  font-size: 15.8px;
  line-height: 20px;
  padding: 4px 12px;
`;

const tall = css`
  font-size: 16px;
  line-height: 37px;
  padding: 0 16px;
`;
const filled = css`
  color: white;
  border-color: ${props => getColor(props.colorSet).borderColor};
  background: ${props => getColor(props.colorSet).borderColor};
  :hover {
    border-color: ${props => getColor(props.colorSet).color};
    background: ${props => getColor(props.colorSet).hoverColor};
  }
`;
const outlined = css`
  color: ${props => getColor(props.colorSet).color};
  border-color: ${props => getColor(props.colorSet).borderColor};
  // background: white;
  :hover {
    color: ${props => getColor(props.colorSet).hoverColor};
    border-color: ${props => getColor(props.colorSet).hoverColor};
  }
`;

export { base, small, middle, tall, outlined, filled };
