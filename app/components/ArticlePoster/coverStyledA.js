import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  max-width: 680px;
  overflow: hidden;
  white-space: nowrap;
`;

export const Cover = styled.a`
  background-image: url(${props => props.articleCover});
  background-size: cover;
  background-origin: border-box;
  width: 152px;
  @media screen and (max-width: 855px) {
    width: 140px;
  }
  background-position: 50% 50%;
  flex: 0 0 auto;
`;

export const InfoWrapper = styled.div`
  min-width: 0;
  margin-right: 24px;
  // ::before {
  //   content: 'BASED ON YOUR READING HISTORY';
  //   color: rgba(0, 0, 0, 0.54);
  //   letter-spacing: 0.03em;
  //   font-size: 15px;
  //   text-overflow: ellipsis;
  // }
`;
export const TitleWrapper = styled.div`
  margin-bottom: 16px;
`;
export const AuthorWrapper = styled.div``;
