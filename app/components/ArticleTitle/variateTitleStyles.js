import { css } from 'styled-components';

// Home page
export const HomeHeroLeft = {
  wrapper: css`
    max-height: 135px;
    margin-top: 16px;
    margin-bottom: 16px;
  `,
  h1: css`
    font-size: 24px;
    letter-spacing: -0.42px;
    margin-bottom: 4px;
    -webkit-line-clamp: 3;
    @media screen and (max-width: 767px) {
      font-size: 21px;
      -webkit-line-clamp: 3;
    }
  `,
  sub: css`
    -webkit-line-clamp: 3;
    line-height: 20px;
  `,
};

export const HomeHeroMid = {
  wrapper: css`
    max-height: 50px;
    margin-bottom: 16px;
  `,
  h1: css`
    font-size: 18px;
    -webkit-line-clamp: 2;
    letter-spacing: -0.42px;
    margin-bottom: 4px;
    @media screen and (max-width: 680px) {
      margin-bottom: 2px;
      -webkit-line-clamp: 2;
    }
  `,
  sub: css`
    -webkit-line-clamp: 1;
    @media screen and (max-width: 680px) {
      line-height: 20px;
    }
  `,
};

export const HomeHeroRight = {
  wrapper: css`
    margin-top: 16px;
    margin-bottom: 16px;
  `,
  h1: css`
    font-size: 21px;
    -webkit-line-clamp: 2;
    letter-spacing: -0.42px;
    margin-bottom: 4px;
  `,

  sub: css`
    -webkit-line-clamp: 1;
    line-height: 20px;
  `,
};

export const HomeList = {
  wrapper: css`
    @media screen and (max-width: 767px) {
      max-height: 62px;
    }
    margin-bottom: 12px;
  `,
  h1: css`
    font-size: 24px;
    letter-spacing: -0.42px;
    margin-bottom: 2px;
    -webkit-line-clamp: 3;
    @media screen and (max-width: 767px) {
      font-size: 18px;
      -webkit-line-clamp: 2;
    }
  `,
  sub: css`
    -webkit-line-clamp: 1;
    line-height: 20px;
  `,
};

// Topic Home Page
export const TopicHomepageHero = {
  wrapper: css`
    margin-top: 13px;
    @media screen and (max-width: 728px) {
      margin-top: 21px;
    }
    margin-bottom: 16px;
  `,
  h1: css`
    font-size: 44px;
    line-height: 48px;
    -webkit-line-clamp: 2;
    letter-spacing: -1.25px;
    margin-bottom: 4px;
    @media screen and (max-width: 728px) {
      font-size: 25.2px;
      line-height: 28px;
      letter-spacing: -0.47px;
      -webkit-line-clamp: 2;
    }
  `,
  sub: css`
    font-size: 18px;
    line-height: 24px;
    -webkit-line-clamp: 2;
  `,
};

export const TopicHomepageList = {
  wrapper: css`
    margin-bottom: 12px;
  `,
  h1: css`
    font-size: 21.6px;
    line-height: 24px;
    letter-spacing: -0.32px;
    -webkit-line-clamp: 2;
    margin-bottom: 4px;
    @media screen and (max-width: 855px) {
      margin-bottom: 0px;
    }
  `,
  sub: css`
    font-size: 18px;
    line-height: 24px;
    font-weight: 300;
    -webkit-line-clamp: 2;
  `,
};

// Publication Home page
export const PublicationHomepageHero = {
  wrapper: css`
    margin-top: 7px;
    margin-bottom: 20px;
  `,
  h1: css`
    font-size: 32px;
    -webkit-line-clamp: 4;
    line-height: 1.1;
    @media screen and (max-width: 767px) {
      font-size: 26px;
      margin-top: 15px;
      -webkit-line-clamp: 3;
    }
  `,
  sub: css`
    line-height: 1.2;
    font-size: 20px;
    font-weight: 400;
    -webkit-line-clamp: 3;
  `,
};

export const PublicationHomepageList = {
  wrapper: css`
    margin-top: 20px;
    margin-bottom: 20px;
  `,
  h1: css`
    font-size: 26px;
    -webkit-line-clamp: 3;
    line-height: 1.1;
    margin-bottom: 6px;
  `,
  sub: css`
    line-height: 1.2;
    font-size: 20px;
    font-weight: 400;
    -webkit-line-clamp: 3;
    @media screen and (max-width: 767px) {
      -webkit-line-clamp: 2;
      margin-top: 1px;
    }
  `,
};
export const PublicationHomepageListX2 = PublicationHomepageList;
export const PublicationHomepageListX3 = PublicationHomepageList;

// Article Page
export const ArticlePageTitle = {
  wrapper: css`
    margin-bottom: 20px;
  `,
  h1: css`
    line-height: 48px;
    font-size: 40px;
    font-family: vanilla-fell, medium-content-title-font, Georgia, Cambria,
      'Times New Roman', Times, serif;
    font-weight: 400;
    margin-top: 0.78em;
    margin-bottom: 8px;
    color: rgba(0, 0, 0, 0.84);
    @media screen and (max-width: 728px) {
      font-size: 30px;
      line-height: 40px;
    }
  `,
  sub: css`
    line-height: 32px;
    font-size: 24px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.54);
    font-family: vanilla-sohne, medium-content-title-font, serif;
    @media screen and (max-width: 728px) {
      font-size: 16px;
      line-height: 22px;
    }
  `,
};

export const ArticlePageRecommendation = {
  wrapper: css`
    margin-bottom: 16px;
  `,
  h1: css`
    line-height: 32px;
    font-size: 24px;
    font-family: medium-content-title-font, Georgia, Cambria, 'Times New Roman',
      Times, serif;
    font-weight: 500;
    -webkit-line-clamp: 4;
  `,
  sub: css`
    display: none;
  `,
};

// Homepage sidebar and TopicHomepage Sidebar are same
export const Sidebar = {
  wrapper: css``,
  h1: css`
    font-size: 18px;
    -webkit-line-clamp: 3;
    letter-spacing: -0.17px;
  `,
  sub: css`
    display: none;
  `,
};
