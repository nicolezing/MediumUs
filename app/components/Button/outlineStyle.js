import { css } from 'styled-components';
import getColor from '../../staticData/colorSets';

const base = css`
  display: inline-block;
  position: relative;
  margin: 0;
  background: #fff;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  // user-select: none;
  box-sizing: border-box;

  border-width: 1px;
  border-style: solid;
  border-radius: 4px;

  // -webkit-transition: 0.1s background-color, 0.1s border-color, 0.1s color,
  //   0.1s fill;
  transition: 0.1s background-color, 0.1s border-color, 0.1s color, 0.1s fill;

  // -webkit-tap-highlight-color: transparent ;

  line-height: 19px;
  padding: 0 10px;
  font-size: 15px;
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

const large = css`
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

export { base, small, middle, large, outlined, filled };
