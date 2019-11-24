import styled from 'styled-components';
import getDisplay from './getDisplay';

const SearchStyleInput = styled.input`
  transition: width 0.2s, padding 0.2s;
  display: inline-block;
  vertical-align: middle;
  height: 37px;
  border: none;
  box-sizing: border-box;
  box-shadow: none;
  color: #000000d6;
  border-radius: 999em;
  padding: 0 5px;
  font-size: 16px;
  outline: 0;
  font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
  margin: 0;
  width: ${props => getDisplay[props.inputStyles].width};
  padding-left: ${props => getDisplay[props.inputStyles].paddingLeft};
  padding-right: ${props => getDisplay[props.inputStyles].paddingRight};
  cursor: ${props => getDisplay[props.inputStyles].cursor};
  opacity: ${props => getDisplay[props.inputStyles].opacity};
`;

export default SearchStyleInput;
