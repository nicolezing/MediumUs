import styled from 'styled-components';

export const PopoverTopArrow = styled.div`
  top: -14px;
  // will-change: transform;
  clip: rect(0 18px 14px -4px);
  left: -2px;
  transform: ${props =>
    `translate(${props.position[0]}px, ${props.position[1]}px)`};
  position: absolute;
  :after {
    box-shadow: -1px -1px 1px -1px rgba(0, 0, 0, 0.54);
    transform: rotate(45deg) translate(6px, 6px);
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    background: ${props => props.color};
  }
`;

export const PopoverBottomArrow = styled.div`
  bottom: -13px;
  // will-change: transform;
  clip: rect(0px 18px 14px -4px);
  left: -2px;
  transform: ${props =>
    `translate(${props.position[0]}px, ${props.position[1]}px)`};
  position: absolute;
  :after {
    box-shadow: 1px 1px 1px -1px rgba(0, 0, 0, 0.54);
    transform: rotate(45deg) translate(-5px, -5px);
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    background: ${props => props.color};
  }
`;
