import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  width: 328px;
  flex: none;
  @media screen and (max-width: 855px) {
    width: 100%;
    display: none;
  }
`;

export const MidWrapper = styled.section`
  margin-bottom: 40px;
  @media screen and (max-width: 855px) {
    margin-bottom: 48px;
  }
`;

export const StickyWrapper = styled.div`
  width: inherit;
  ${props => props.wrapperStyles}
`;
