import React from 'react';
import styled from 'styled-components';
import nextId from 'react-id-generator';
import ArticleTitle from '../ArticleTitle';
import PositionedImage from '../imageComponents/PositionedImage';

const P = styled.p`
  font-size: 21px;
  // margin-bottom: -0.46em;
  margin: 2em 0 0 0;
  font-family: medium-content-serif-font, Georgia, Cambria, 'Times New Roman',
    Times, serif;
  letter-spacing: -0.004em;
  line-height: 1.58;
  word-break: break-word;
  color: rgba(0, 0, 0, 0.84);

  @media screen and (max-width: 728px) and (min-width: 552px) {
    margin-top: 1.56em;
    font-size: 18px;
  }
`;

const H2 = styled.h2`
  letter-spacing: -0.022em;
  line-height: 1.12;
  color: rgba(0, 0, 0, 0.84);
  margin: 1.95em 0 0 0;
  font-size: 34px;
  // margin-bottom: -0.28em;

  @media screen and (max-width: 728px) and (min-width: 552px) {
    margin-top: 1.2em;
    font-size: 30px;
  }
`;

const H3 = styled.h3`
  letter-spacing: -0.022em;
  line-height: 1.18;
  color: rgba(0, 0, 0, 0.84);
  margin: 1.72em 0 0 0;
  font-size: 26px;
  // margin-bottom: -0.31em;

  @media screen and (max-width: 728px) and (min-width: 552px) {
    margin-top: 1.23em;
    font-size: 24px;
  }
`;

const Blockquote = styled.blockquote`
  margin: 0;
  padding: 0;

  p:first-child {
    padding: 0;
    margin-left: -20px;
    padding-left: 23px;
    box-shadow: inset 3px 0 0 0 rgba(0, 0, 0, 0.84);
    font-style: italic;   
    }
  }

  blockquote:first-child {
    p {
      margin: 2.2em 0 0 0;
      padding:0  0 0 30px;
      box-shadow: none;
      line-height: 44px;
      font-size: 30px;
      font-family: medium-content-title-font, Georgia, Cambria, "Times New Roman", Times, serif;
      color: rgba(0, 0, 0, 0.54);
      font-style: normal;
      @media screen and (max-width: 728px) and (min-width: 552px) {
        margin-top: 1.136em;
      }
    }
  }
`;

const A = styled.a`
  color: inherit;
  position: relative;
  :: after {
    content: '';
    border-bottom: 1px solid;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2.5px;
  }
`;
const HR = styled.hr`
  border: none;
  height: auto;
  margin: 0;
  padding: 30px 0 14px 0;
  font-size: 28px;
  text-align: center;
  font-family: medium-content-slab-serif-font, Georgia, Cambria,
    'Times New Roman', Times, serif;
  :before {
    letter-spacing: 0.6em;
    content: '...';
  }
`;

const components = {
  h1: ArticleTitle,
  h2: H2,
  h3: H3,
  p: P,
  blockquote: Blockquote,
  a: A,
  hr: HR,
  img: props => <PositionedImage {...props} uuid={nextId()} />,
};

// TODO: add double quote style and divider section

export default components;
