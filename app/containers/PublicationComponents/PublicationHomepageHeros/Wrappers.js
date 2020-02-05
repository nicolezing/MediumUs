import styled from 'styled-components';

export const X3Wrapper = styled.div`
  padding-bottom: 45px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 75px 24px;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 40px 0px;
    padding-bottom: 0px;
    margin-bottom: 25px;
  }
`;

export const X2Wrapper = styled.div`
  padding-bottom: 45px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 75px 24px;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 40px 0px;
    margin-bottom: 25px;
    padding-bottom: 0px;
  }
`;

export const MarginWrapper = styled.section`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const SectionTitle = styled.h3`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.68);
  line-height: 1.2;
  font-size: 20px;
  height: 36px;
  margin: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;
