import styled from 'styled-components';
import getColor from '../../staticData/colorSets';

const IconStyledA = styled.a.attrs(({ href }) => ({ href }))`
  border: 0;
  text-decoration: none;
  font-size: 0px;
  fill: ${props => getColor(props.colorSet).color};
  &:hover {
    fill: ${props => getColor(props.colorSet).hoverColor};
  }
`;
export default IconStyledA;
