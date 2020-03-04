import styled from 'styled-components';

export const AroundFigure = styled.figure`
  // margin-top: 56px;

  width: 75%;
  float: left;
  margin: 56px 30px 16px -150px;
  padding-bottom: 10px;
  border: rgba(255, 255, 255, 1) 2px solid;
  background: rgba(255, 255, 255, 1);

  @media screen and (max-width: 1080px) {
    margin: 0;
    width: 100%;
    float: none;
  }
`;

export const Figure = styled.figure`
  margin: 0;
`;

export const NormalWrapper = styled.div`
  margin-top: 56px;
`;

export const WideWrapper = styled.div`
  --calcMargin: calc(50% - 660px);
  --calcMargin48: calc(50% + 48px - 50vw + 7.5px);
  --calcMargin64: calc(50% + 64px - 50vw + 7.5px);

  margin: 0 var(--calcMargin48);
  @media screen and (max-width: 728px) {
    margin: 0;
  }
  @media screen and (min-width: 1080px) {
    margin: 0 max(var(--calcMargin64), var(--calcMargin));
  }
  margin-top: 32px;
  // & figure {
  //   padding: 5px 0;
  // }
`;

export const FullScreenWrapper = styled.div`
  --calcMargin: calc(340px - 50vw);

  margin: 0 var(--calcMargin);
  @media screen and (max-width: 728px) {
    margin: 0 -24px;
  }
`;
