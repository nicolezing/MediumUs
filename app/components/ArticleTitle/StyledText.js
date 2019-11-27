import styled from 'styled-components';

const TitleWrapper = styled.div`
  max-height: 135px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 16px;

  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 4px;

  letter-spacing: -0.42px;
  color: rgba(0, 0, 0, 0.84);
  -webkit-line-clamp: 3;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  @media screen and (max-width: 767px) {
    font-size: 21px;
    -webkit-line-clamp: 4;
  }
`;

const StyledSubtitle = styled.div`
  overflow: hidden;
  // max-height: 60px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.54);
`;

export { TitleWrapper, StyledTitle, StyledSubtitle };
