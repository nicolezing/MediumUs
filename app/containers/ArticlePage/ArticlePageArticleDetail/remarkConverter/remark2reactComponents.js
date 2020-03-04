import styled from 'styled-components';
import ArticleTitle from '../ArticleTitle';
import PositionedImage from '../imageComponents/PositionedImage';

const P = styled.p`
  font-size: 21px;
  // margin-bottom: -0.46em;
  margin-top: 2em;
  margin-bottom: 2em;
  font-family: medium-content-serif-font, Georgia, Cambria, 'Times New Roman',
    Times, serif;
  letter-spacing: -0.004em;
  line-height: 1.58;
  word-break: break-word;
  color: rgba(0, 0, 0, 0.84);
`;

const H2 = styled.h2`
  letter-spacing: -0.022em;
  line-height: 1.12;
  color: rgba(0, 0, 0, 0.84);
  margin-top: 1.95em;
  font-size: 34px;
  // margin-bottom: -0.28em;
`;

const H3 = styled.h3`
  letter-spacing: -0.022em;
  line-height: 1.18;
  color: rgba(0, 0, 0, 0.84);
  margin-top: 1.72em;
  font-size: 26px;
  // margin-bottom: -0.31em;
`;

const Blockquote = styled.blockquote`
  padding: 0;
  margin-left: -20px;
  padding-left: 23px;
  box-shadow: inset 3px 0 0 0 rgba(0, 0, 0, 0.84);
  * {
    margin: 0;
    padding: 0;
    font-style: italic;
  }
`;

const components = {
  h1: ArticleTitle,
  h2: H2,
  h3: H3,
  p: P,
  blockquote: Blockquote,
  img: PositionedImage,
};

export default components;
