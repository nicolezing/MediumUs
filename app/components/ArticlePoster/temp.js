// HomeHeroLeft
export const Cover = styled.a`
  background-image: url(${props => props.articleCover});
  background-size: cover;
  background-origin: border-box;
  background-position: 59% 53%;
  height: 150px;
  margin-bottom: 16px;
  display: block;
`;

export const InfoWrapper = styled.div`
`;
export const TitleWrapper = styled.div`
  margin-bottom: 16px;
`;
export const AuthorWrapper = styled.div``;

// HomeHeroMid
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const Cover = styled.a`
  background-image: url(${props => props.articleCover});
  background-size: cover;
  background-origin: border-box;
  background-position: 37% 31%;
  height: 100px;
  width: 100px;
  margin-right: 24px;
  flex: 0 0 auto;
`;

export const InfoWrapper = styled.div`
  // maybe useless
  min-width: 0;
`;
export const TitleWrapper = styled.div`
  margin-bottom: 16px;
`;
export const AuthorWrapper = styled.div``;

// HomeHeroRight
export const Wrapper = styled.div``;

export const Cover = styled.a`
  background-image: url(${props => props.articleCover});
  background-size: cover;
  background-origin: border-box;
  height: 150px;
  margin-bottom: 16px;
  display: block;
  // only difference from HomeHeroLeft
  background-position: 26% 23%;
`;

export const InfoWrapper = styled.div``;
export const TitleWrapper = styled.div`
  margin-bottom: 16px;
`;
export const AuthorWrapper = styled.div``;

