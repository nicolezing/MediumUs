import React from 'react';
import PropTypes from 'prop-types';
import ArticlePoster from '../../../components/ArticlePoster';
import { MarginWrapper, X2Wrapper, X3Wrapper } from './Wrappers';

function HerosRow(props) {
  const { rowType, articleList, theme } = props;

  switch (rowType) {
    case 1:
      return (
        <MarginWrapper>
          {articleList.map(id => (
            <ArticlePoster
              variation="PublicationHomepageHero"
              hoverEffect
              id={id}
              theme={theme}
              key={id}
            />
          ))}
        </MarginWrapper>
      );
    case 2:
      return (
        <MarginWrapper>
          <X2Wrapper>
            {articleList.map(id => (
              <ArticlePoster
                variation="PublicationHomepageListX2"
                hoverEffect
                id={id}
                theme={theme}
                key={id}
              />
            ))}
          </X2Wrapper>
        </MarginWrapper>
      );
    case 3:
      return (
        <X3Wrapper>
          {articleList.map(id => (
            <ArticlePoster
              variation="PublicationHomepageListX3"
              hoverEffect
              id={id}
              theme={theme}
              key={id}
            />
          ))}
        </X3Wrapper>
      );
    default:
      return <></>;
  }
}

HerosRow.propTypes = {
  rowType: PropTypes.number.isRequired,
  articleList: PropTypes.array.isRequired,
  theme: PropTypes.string,
};

export default HerosRow;
