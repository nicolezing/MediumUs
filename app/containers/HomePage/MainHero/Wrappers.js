import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeroWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 350px;
  max-width: 1208px;
  margin: 12px auto 0 auto;
  @media screen and (max-width: 680px) {
    flex-direction: column;
    height: auto;
  }
`;

export const LeftHero = styled.div`
  flex: 0 1 auto;
  margin-right: 24px;
  max-width: 360px;
  @media screen and (max-width: 680px) {
    max-width: 100%;
    min-width: 0;
    margin: 0 0 40px 0;
  }

  @media screen and (max-width: 1031px) {
    min-width: 50%;
  }
`;

export const MidHero = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 389px;
  margin-right: 24px;
  @media screen and (max-width: 680px) {
    max-width: 100%;
    min-width: 0;
    margin: 0 0 40px 0;
  }
  @media screen and (max-width: 1031px) and (min-width: 681px) {
    max-width: 50%;
    margin: 0;
  }
`;
export const MidMarginWrapper = styled.div`
  margin-bottom: 24px;
`;

export const RightHero = styled.div`
  flex: 0 1 auto;
  max-width: 323px;
`;

export const A = styled.a`
  color: #03a87c;
  font-size: 15px;
  margin-top: 8px;
  align-self: flex-start;
  @media screen and (min-width: 1030px) {
    align-self: flex-end;
    margin-top: 0;
  }
`;
export const Span = styled.span`
  display: flex;
  align-items: flex-end;
`;

export const Divider = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  width: 100%;
  margin: 24px auto;
  @media screen and (max-width: 680px) {
    display: none;
  }
`;
