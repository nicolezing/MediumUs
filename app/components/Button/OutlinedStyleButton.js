import styled from 'styled-components';
import * as outlinedStyles from './outlineStyles';

export default styled.button`
  ${outlinedStyles.base};
  ${props => outlinedStyles[props.size]}
  ${props => outlinedStyles[props.type]}
`;
