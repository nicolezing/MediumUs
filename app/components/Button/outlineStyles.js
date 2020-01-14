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
  transition: 0.1s background-color, 0.1s border-color, 0.1s color, 0.1s fill;
  line-height: 19px;
  padding: 0 10px;
  font-size: 15px;

  :focus {
    outline: none;
  }
`;

const small = css`
  height: 19px;
  span {
    line-height: 19px;
  }
`;

const middle = css`
  font-size: 15px;
  height: 32px;
  line-height: 32px;
  padding: 0px 14px;
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
  :hover {
    color: ${props => getColor(props.colorSet).hoverColor};
    border-color: ${props => getColor(props.colorSet).hoverColor};
  }
`;

export { base, small, middle, large, outlined, filled };
