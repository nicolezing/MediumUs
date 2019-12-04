import styled from 'styled-components';

export const UserWrapper = styled.div`
  display: flex;
  padding: 8px 20px;
`;

export const UsernameWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  overflow: hidden;
`;

export const PopoverInnerWrapper = styled.div`
  max-width: 220px;
  position: relative;
  background: #fff;
  overflow: visible;
`;

export const PopoverOuterWrapper = styled.div`
  z-index: 900;
  position: absolute;
  // will-change: transform;
  top: 10px;
  right: 10px;
  transform: translate(0px, 59px);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 5px;
`;
