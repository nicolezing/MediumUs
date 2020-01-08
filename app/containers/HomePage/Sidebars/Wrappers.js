import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 328px;
  flex: none;
  height: fit-content;
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
