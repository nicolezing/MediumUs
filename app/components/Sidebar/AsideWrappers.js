import styled, { css } from 'styled-components';

export const NoChangeStyledAside = styled.aside`
  display: flex;
  flex-direction: column;
`;

export const Aside = styled(NoChangeStyledAside)`
  @media screen and (min-width: 503px) and (max-width: 855px) {
    flex-direction: row;
  }
`;
export const Ol = styled.ol`
  padding: 32px 32px 8px 32px;
  background: ${({ source }) =>
    source === 'popularOnMedium' ? 'white' : '#fafafa'};
  margin: 0;
  @media screen and (max-width: 855px) {
    padding: ${({ source }) => (source === 'popularOnMedium' ? '0' : '')}};
  }
`;

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  letter-spacing: -0.42px;
  margin: 32px 32px 0px 32px;
  padding-bottom: 16px;
  @media screen and (max-width: 855px) {
    margin: 32px 0 32px 0;
  }
`;

export const H3 = styled.h3`
  letter-spacing: -0.42px;
  margin: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
`;

export const H2 = styled.h2`
  margin: 0;
  padding: 16px 24px 16px 16px;
  letter-spacing: -0.42px;
  @media screen and (min-width: 503px) and (max-width: 855px) {
    padding: 0;
  }
`;

export const Img = styled.img`
  width: 135px;
`;

export const baseImageHeaderStyle = css`
  display: flex;
  align-items: flex-end;
  padding: 8px;
  height: 100%;
  min-height: 100px;
  justify-content: space-around;
  background-color: ${({ source }) =>
    source === 'newFromNetwork' ? '#d7efee' : '#FBF9E0'};
`;

export const NetworkImageHeaderWrapper = styled.div`
  ${baseImageHeaderStyle};
  @media screen and (min-width: 503px) and (max-width: 855px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    text-align: end;
    padding: 24px;
  }
`;

export const ReadingListImageHeaderWrapper = styled.div`
  ${baseImageHeaderStyle};
  @media screen and (min-width: 503px) and (max-width: 855px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    padding: 24px;
  }
`;
