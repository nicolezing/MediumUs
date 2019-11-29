//columnStructure
//HomeHeroLeft, HomeHeroRight,TopicHomepageHero, CollectionHomepageList X2 X3
const columnStructureCoverBaseStyle = css`
  display: block;

  //HomeHeroLeft, HomeHeroRight,
  height: 150px;

  //TopicHomepageHero
  height: 382px;
  @media screen and (max-width: 728px) {
    height: 320px;
  }

  //CollectionHomepageList X2
  height: 272px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 767px) {
    height: 170px;
  }
  //CollectionHomepageList X3
  height: 172px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 767px) {
    height: 170px;
  }
`;
const columStructureInfoWrapperBaseStyle = css`
  overflow: hidden;
  text-overflow: ellipsis;
`;
//row HomeHeroMid, CollectionHomepageHero
//rowverse HomeList, TopicHomepageList
const rowStructureWrapperBaseStyle = css`
  //all row
  //all row-reverse
  display: flex;

  //row-reverse
  //HomeList, TopicHomepageList
  flex-direction: row-reverse;
  justify-content: space-between;

  //row  HomeHeroMid
  @media screen and (max-width: 680px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  //CollectionHomepageHero
  @media screen and (max-width: 767px) {
    display: block;
  }
`;
const rowStructureCoverBaseStyle = css`
  ${coverBaseStyle}
  //HomeHeroMid
  flex: none;
  height: 100px;
  width: 100px;
  @media screen and (max-width: 680px) {
    width: 140px;
    height: auto;
  }

  //HomeList
  width: 152px;
  @media screen and (max-width: 855px) {
    width: 140px;
  }
  flex: none;

  //TopicHomepageList
  width: 152px;
  @media screen and (max-width: 855px) {
    width: 77px;
    height: 77px;
  }
  flex: none;

  //CollectionHomepageHero
  height 350px;
  flex: 2;
  @media screen and (max-width: 767px) {
    display: block;
    height: 170px;
  }
`;

const rowStructureInfoWrapperBaseStyle = css`
  //HomeHeroMid
  margin-left: 24px;
  @media screen and (max-width: 680px) {
    min-width: 0;
    margin-right: 24px;
    margin-left: 0;
  }

  //HomeList, TopicHomepageList
  min-width: 0;
  margin-right: 24px;

  //CollectionHomepageHero
  flex: 1;
  margin-left: 24px;
  @media screen and (max-width: 767px) {
    margin-left: 0px;
  }
`;
