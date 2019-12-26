import { css } from 'styled-components';

export const HomeHeroLeft = {
  coverStyle: css`
    display: block;
    height: 150px;
  `,
  iconWrapperStyle: css`
    align-self: center;
    @media screen and (min-width: 681px) {
      display: none;
    }
  `,
};

// might change the controller display: none here
export const HomeHeroRight = {
  wrapperStyle: css`
    @media screen and (max-width: 1031px) {
      display: none;
    }
  `,
  coverStyle: css`
    ${HomeHeroLeft.coverStyle}
  `,
};

export const HomeHeroMid = {
  wrapperStyle: css`
    display: flex;
    @media screen and (max-width: 680px) {
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  `,
  coverStyle: css`
    flex: none;
    height: 100px;
    width: 100px;
    @media screen and (max-width: 680px) {
      width: 140px;
      height: auto;
    }
    @media screen and (max-width: 504px) {
      width: 80px;
      height: 80px;
    }
  `,
  infoWrapperStyle: css`
    margin-left: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    @media screen and (max-width: 680px) {
      min-width: 0;
      margin-right: 24px;
      margin-left: 0;
    }
  `,
  iconWrapperStyle: css`
    ${HomeHeroLeft.iconWrapperStyle}
  `,
};

const content = ({ source, publication }) =>
  (source || publication || '').toUpperCase();

export const HomeList = {
  wrapperStyle: css`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 48px;
  `,
  coverStyle: css`
    width: 152px;
    @media screen and (max-width: 855px) {
      width: 140px;
    }
    @media screen and (max-width: 504px) {
      width: 80px;
      height: 80px;
    }
    flex: none;
  `,
  infoWrapperStyle: css`
    min-width: 0;
    margin-right: 24px;
    //changed
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    &:before {
      font-size: 15px;
      white-space: nowrap;
      letter-spacing: 0.03em;
      color: rgba(0, 0, 0, 0.54);
      content: '${content}';
      // BASED ON YOUR READING HISTORY/POPULAR ON MEDIUM
    }
  `,
  iconWrapperStyle: css`
    align-self: center;
  `,
};

export const TopicHomepageHero = {
  coverStyle: css`
    display: block;
    height: 382px;
    @media screen and (max-width: 728px) {
      height: 320px;
    }
  `,
};

export const TopicHomepageList = {
  wrapperStyle: css`
    ${HomeList.wrapperStyle}
  `,
  coverStyle: css`
    width: 152px;
    @media screen and (max-width: 855px) {
      width: 77px;
      height: 77px;
    }
    flex: none;
  `,
  infoWrapperStyle: css`
    min-width: 0;
    margin-right: 24px;
  `,
  iconWrapperStyle: css`
    align-self: center;
  `,
};

export const PublicationHomepageListX2 = {
  coverStyle: css`
    display: block;
    height: 272px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    @media screen and (max-width: 767px) {
      height: 170px;
    }
  `,
};

export const PublicationHomepageListX3 = {
  coverStyle: css`
    ${PublicationHomepageListX2.coverStyle}
    height: 172px;
  `,
};

export const PublicationHomepageHero = {
  wrapperStyle: css`
    display: flex;
    @media screen and (max-width: 767px) {
      display: block;
    }
  `,
  coverStyle: css`
    height 350px;
    flex: 2;
    border: 1px solid rgba(0, 0, 0, 0.15);
    @media screen and (max-width: 767px) {
      display: block;
      height: 170px;
    }
  `,
  infoWrapperStyle: css`
    flex: 1;
    margin-left: 24px;
    @media screen and (max-width: 767px) {
      margin-left: 0px;
    }
  `,
};

export const ArticlePageTitle = {
  authorWrapperStyle: css`
    @media screen and (max-width: 728px) {
      flex-direction: column-reverse;
    }
  `,
  iconWrapperStyle: css`
    display: flex;
    align-self: flex-end;
    a {
      margin-right: 8px;
    }
    @media screen and (max-width: 728px) {
      align-self: auto;
      margin-bottom: 30px;
    }
  `,
};

const beforeContent = css`   
        &:before {
          font-size: 16px;
          color: rgba(0, 0, 0, 0.54);
          margin-bottom: 12px;   
          white-space: nowrap; 
          overflow: hidden;
          text-overflow: ellipsis;
          content: 'More from ${props => props.publication || props.name}';
        };`;

export const ArticlePageRecommendation = {
  wrapperStyle: css`
    display: flex;
    flex-direction: column;
    ${beforeContent}
    @media screen and (max-width: 904px) and (min-width: 552px) {
      flex-direction: row-reverse;
      &:before {
        display: none;
      }
    }
  `,
  coverStyle: css`
    padding-bottom: 66.4634%;
    margin-bottom: 16px;
    @media screen and (max-width: 904px) and (min-width: 552px) {
      padding-bottom: 0;
      margin-bottom: 0;
      flex-basis: 50%;
    }
  `,
  infoWrapperStyle: css`
    @media screen and (max-width: 904px) and (min-width: 552px) {
      flex-basis: 50%;
      ${beforeContent}
    }
  `,
  iconWrapperStyle: css`
    display: flex;
  `,
};
