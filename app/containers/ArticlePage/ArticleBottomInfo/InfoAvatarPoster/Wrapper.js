import styled from 'styled-components';

export const OuterWrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 32px;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const PosterWrapper = styled.div`
  margin-bottom: 32px;
  min-height: 80px;
`;

export const HeaderInfoWrapper = styled.span`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 728px) {
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  @media screen and (max-width: 728px) {
    position: relative;
  }
`;

export const WriterInfoWrapper = styled.div`
  padding-left: 102px;
  width: 100%;
  @media screen and (max-width: 728px) {
    padding-left: 22px;
  }
`;

export const P = styled.p`
  letter-spacing: 0.05em;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.54);
  line-height: 20px;
  margin: 0;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;
export const NameHeader = styled.h2`
  line-height: 36px;
  font-size: 28px;
  color: rgba(0, 0, 0, 0.84);
  margin: 0;
`;

export const DetailInfoWrapper = styled.div`
  padding-left: 102px;
  @media screen and (max-width: 728px) {
    padding-left: 0px;
    margin-top: 24px;
    max-width: 555px;
  }
`;
export const DescriptionWrapper = styled.div`
  max-width: 450px;
  @media screen and (max-width: 728px) {
    margin-bottom: 24px;
  }
`;

export const Description = styled.h4`
  line-height: 24px;
  font-size: 18px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.54);
  margin: 0;
`;

export const PublicationLogo = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 4px;
`;

export const RowButtonWrapper = styled.div`
  @media screen and (max-width: 728px) {
    display: none;
  }
`;

export const ColumnButtonWrapper = styled.div`
  @media screen and (min-width: 728px) {
    display: none;
  }
`;
