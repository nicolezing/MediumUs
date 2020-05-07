import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 680px;
  flex: auto;
  padding-right: 24px;

  @media screen and (max-width: 855px) {
    padding: 0;
    max-width: 100%;
  }
`;

export const SidebarWrapper = styled.div`
  display: none;
  @media screen and (max-width: 855px) {
    display: initial;
  }
`;
