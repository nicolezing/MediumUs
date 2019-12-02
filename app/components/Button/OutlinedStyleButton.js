import styled from 'styled-components';
import * as outlinedStyles from './outlineStyle';

export default styled.button`
  ${outlinedStyles.base};
  ${props => outlinedStyles[props.size]}
  ${props => outlinedStyles[props.type]}
`;
