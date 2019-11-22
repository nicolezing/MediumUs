import styled from 'styled-components';
import getColor from '../../staticData/colorSets';
import textBase from './textBaseStyle';

const PlainStyledA = styled.a.attrs(({ href }) => ({ href }))`
  ${textBase};
  text-decoration: none;
  cursor: pointer;
  color: ${props => getColor(props.colorSet).color};
  font-size: ${props => props.fontsize};
  &:hover {
    color: ${props => getColor(props.colorSet).hoverColor};
  }
`;

export default PlainStyledA;
