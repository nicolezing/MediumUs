import styled, { css } from 'styled-components';
import getColor from '../../staticData/colorSets';

const StyledSpan = styled.span`
  color: ${getColor()};
  font-size: 16px;
  line-height: 1.4;
  padding-left: 10px;
  text-rendering: auto;
`;

export { StyledSpan };
