import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  width: 328px;
  flex: none;
  @media screen and (max-width: 855px) {
    width: 100%;
    display: none;
  }
`;

export const StickyWrapper = styled.div`
  width: inherit;
  overscroll-behavior: none;

  &.initial {
    position: relative;
    transform: translateY(0);
    top: 0;
  }

  &.moving {
    position: relative;
    transform: translateY(${props => props.cssData}px);
    top: auto;
  }

  &.fix_at_top {
    position: fixed;
    transform: translateY(0);
    top: ${props => props.cssData}px;
  }

  &.fix_at_bottom {
    position: fixed;
    transform: translateY(0);
    top: auto;
    bottom: 0;
  }
`;
