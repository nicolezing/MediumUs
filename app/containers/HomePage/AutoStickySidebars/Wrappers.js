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
`;
