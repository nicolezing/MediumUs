import styled from 'styled-components';

export const PopoverInnerWrapper = styled.div`
  position: relative;
  overflow: visible;
`;
export const PopoverOuterWrapper = styled.div`
  z-index: 900;
  margin-top: 9px;
  position: absolute;
  background: ${props => props.color};
  transform: ${props =>
    `translate(${props.position[0]}px, ${props.position[1]}px)`};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  visibility: ${props => props.visibility};
`;
