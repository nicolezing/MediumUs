import styled from 'styled-components';
import getColor from '../../../../staticData/colorSets';

export const Wrapper = styled.div`
  padding-top: 25px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Div = styled.div`
  border: 1px solid ${props => getColor(props.theme).borderColor};
  padding: 20px;
  text-align: center;
  border-radius: 4px;
`;

export const Span = styled.span`
  color: ${props => getColor(props.theme).color};
`;
