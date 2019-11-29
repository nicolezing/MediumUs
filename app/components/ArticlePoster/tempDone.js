//HomeHeroLeft
export const Cover = styled.a`
${coverBaseStyle};
  height: 150px;
  margin-bottom: 16px;
  display: block;
`;

export const InfoWrapper = styled.div`
`;
export const TitleWrapper = styled.div`
`;
export const AuthorWrapper = styled.div``;

//HomeHeroRight
export const Wrapper = styled.div``;

export const Cover = styled.a`
${coverBaseStyle};
  height: 150px;
  margin-bottom: 16px;
  display: block;
  
`;

export const InfoWrapper = styled.div``;
export const TitleWrapper = styled.div`
`;
export const AuthorWrapper = styled.div``;

//TopicHomepageHero
export const Wrapper = styled.div``;
export const Cover = styled.a`
${coverBaseStyle};
  display: block;
  height: 382px;
  @media screen and (max-width: 728px) {
    height: 320px;
  }
`;
export const InfoWrapper = styled.div``;
export const TitleWrapper = styled.div``;
export const AuthorWrapper = styled.div``;

//CollectionHomepageList
export const Cover = styled.a`
${coverBaseStyle};
  display: block;
  height: 272px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 767px) {
    height: 170px;
  }
`;



// HomeHeroMid
//row
export const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 680px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const Cover = styled.a`
  ${coverBaseStyle};
  flex: none;
  height: 100px;
  width: 100px;
  @media screen and (max-width: 680px) {
    width: 140px;
    height: auto;
  }
`;

export const InfoWrapper = styled.div`
  margin-left: 24px;
  @media screen and (max-width: 680px) {
    min-width: 0;
    margin-right: 24px;
    margin-left: 0;
  }
`;
export const TitleWrapper = styled.div``;
export const AuthorWrapper = styled.div``;



//HomeList
//row reverse && need to add things at before TitleWrapper and after authorCard
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  // max-width: 680px;
  justify-content: space-between;

`;
export const Cover = styled.a`
 ${coverBaseStyle};
  flex: none;
  width: 152px;
  @media screen and (max-width: 855px) {
    width: 140px;
  }
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
export const TitleWrapper = styled.div``;
export const AuthorWrapper = styled.div``;


//TopicHomepageList
//row reverse && add icon after authorcard
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;
export const Cover = styled.a`
 ${coverBaseStyle};
  flex: none;
  width: 152px;
  @media screen and (max-width: 855px) {
    width: 77px;
    height: 77px;
  }
`;
export const InfoWrapper = styled.div`
  min-width: 0;
  margin-right: 24px;
`;
export const TitleWrapper = styled.div``;
export const AuthorWrapper = styled.div``;

//CollectionHomepageHero
export const Wrapper = styled.div`
  display: flex;
  // max-width: 1032px;
`;
export const Cover = styled.a`
${coverBaseStyle};
  height 350px;
  flex: 2;
`;
export const InfoWrapper = styled.div`
  flex: 1;
margin-left: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const TitleWrapper = styled.div``;
export const AuthorWrapper = styled.div``;

//CollectionHomepageHero
export const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: 767px) {
    display: block;
  }
`;
export const Cover = styled.a`
${coverBaseStyle};
  height 350px;
  flex: 2;
  @media screen and (max-width: 767px) {
    display: block;
    height: 170px;
  }
`;
export const InfoWrapper = styled.div`
  flex: 1;
  margin-left: 24px;
  @media screen and (max-width: 767px) {
    margin-left: 0px;
  }
`;
export const TitleWrapper = styled.div``;
export const AuthorWrapper = styled.div``;