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
`;

const IconStyledButton = styled.button`
    ${btnBaseStyle}
    fill: ${props => getColor(props.colorSet).color};
    :hover {
      fill: ${props => getColor(props.colorSet).hoverColor};
    }
  `;

export default IconStyledButton;
