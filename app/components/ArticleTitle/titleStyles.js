//  wrapper : css``,
//  h1 : css``,
//  sub : css``,
import { css } from 'styled-components';

// Home page
export const HomeHeroLeft = {
  wrapper: css`
    max-height: 135px;
  `,
  h1: css`
    font-size: 24px;
    letter-spacing: -0.42px;
    margin-bottom: 4px;
    -webkit-line-clamp: 3;
    @media screen and (max-width: 767px) {
      font-size: 21px;
      -webkit-line-clamp: 4;
    }
  `,
  sub: css`
    -webkit-line-clamp: 2;
    line-height: 20px;
  `,
};

export const HomeHeroMid = {
  wrapper: css`
    max-height: 50px;
  `,
  h1: css`
    font-size: 18px;
    -webkit-line-clamp: 2;
    letter-spacing: -0.42px;
    @media screen and (max-width: 680px) {
      margin-bottom: 2px;
      -webkit-line-clamp: 2;
    }
  `,
  sub: css`
    @media screen and (max-width: 680px) {
      -webkit-line-clamp: 1;
      line-height: 20px;
    }
  `,
};

export const HomeHeroRight = {
  wrapper: css``,
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
      max-height: 50px;
    }
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

// Topic Home Page
export const TopicHomepageHero = {
  wrapper: css``,
  h1: css`
    font-size: 44px;
    line-height: 48px;
    -webkit-line-clamp: 2;
    letter-spacing: -1.25px;
    @media screen and (max-width: 728px) {
      font-size: 26px;
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
  wrapper: css``,
  h1: css`
    font-size: 22px;
    line-height: 24px;
    letter-spacing: -0.32px;
    -webkit-line-clamp: 2;
  `,
  sub: css`
    font-size: 18px;
    line-height: 24px;
    font-weight: 300;
    -webkit-line-clamp: 2;
  `,
};

// Collection Home page
export const CollectionHomepageHero = {
  wrapper: css``,
  h1: css`
    font-size: 32px;
    -webkit-line-clamp: 4;
    line-height: 1.1;
  `,
  sub: css`
    line-height: 1.2;
    font-size: 20px;
    font-weight: 400;
    -webkit-line-clamp: 3;
  `,
};

export const CollectionHomepageList = {
  wrapper: css``,
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

// Article Page
export const ArticlePageTitle = {
  wrapper: css``,
  h1: css`
    line-height: 48px;
    font-size: 40px;
    font-family: medium-content-title-font, Georgia, Cambria, 'Times New Roman',
      Times, serif;
    font-weight: 400;
    margin-bottom: 8px;
  `,
  sub: css`
    line-height: 32px;
    font-size: 24px;
    font-weight: 300;
  `,
};

export const ArticlePageRecommend = {
  wrapper: css``,
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
