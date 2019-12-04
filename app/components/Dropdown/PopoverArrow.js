import styled from 'styled-components';

export const PopoverArrow = styled.div`
  top: -14px;
  will-change: transform;
  // clip: rect(0 18px 14px -4px);
  left: 155px;
  margin-left: -7px;
  position: absolute;
  :after {
    box-shadow: -1px -1px 1px -1px rgba(0, 0, 0, 0.54);
    transform: rotate(45deg) translate(6px, 6px);
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    background: #fff;
  }
`;
