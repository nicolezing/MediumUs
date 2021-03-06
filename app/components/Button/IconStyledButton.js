import styled, { css } from 'styled-components';
import getColor from '../../staticData/colorSets';

const btnBaseStyle = css`
  border: 0;
  text-decoration: none;
  font-size: 0px;
  padding: 0;
  cursor: pointer;
  :focus {
    outline: none;
  }
  vertical-align: middle;
  :disabled {
    cursor: default;
  }
`;

const IconStyledButton = styled.button`
  ${btnBaseStyle}
  background: #fff;
  fill: ${props => getColor(props.theme).color};
  :hover {
    fill: ${props => getColor(props.theme).hoverColor};
  }
`;

export default IconStyledButton;
