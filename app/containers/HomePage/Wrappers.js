import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1032px;
  min-width: 320px;
  margin: auto;
  padding: 0;
  @media screen and (max-width: 1072px) {
    padding: 0 20px;
  }
  overflow-y: visible;
`;

export const SideWrapper = styled.section`
  display: flex;
  margin: 48px 0 auto;
  justify-content: space-between;
  @media screen and (max-width: 855px) {
    flex-direction: column;
  }
`;
