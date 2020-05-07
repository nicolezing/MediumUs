import styled, { css } from 'styled-components';

export const mediaWidth = css`
  margin: 0 48px;
  @media screen and (max-width: 728px) {
    margin: 0 24px;
  }
  @media screen and (min-width: 1080px) {
    margin: 0 64px;
  }
`;

export const WidthConstrainWrapper = styled.div`
  max-width: 680px;
  min-width: 0;
  ${mediaWidth}

  div:first-child {
    figure:first-child {
      margin-top: 0;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 40px;
`;
