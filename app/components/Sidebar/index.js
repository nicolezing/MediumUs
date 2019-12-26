/**
 *
 * Sidebar
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RecommendationList from './RecommendationList';
import {
  NoChangeStyledAside,
  Aside,
  Ol,
  HeaderWrapper,
  NetworkImageHeaderWrapper,
  ReadingListImageHeaderWrapper,
  H2,
  H3,
  Img,
} from './AsideWrappers';

function Sidebar(props) {
  const StyledAside =
    props.recommendationSource === 'popularOnMedium'
      ? NoChangeStyledAside
      : Aside;

  const StyledImageHeaderWrapper =
    props.recommendationSource === 'readingList'
      ? ReadingListImageHeaderWrapper
      : NetworkImageHeaderWrapper;

  const { sourceHeader, recommendationSource, headerImg } = props;
  const renderHeader = () => {
    if (recommendationSource === 'popularOnMedium') {
      return (
        <HeaderWrapper>
          <H3>{sourceHeader}</H3>
        </HeaderWrapper>
      );
    }
    return (
      <StyledImageHeaderWrapper source={recommendationSource}>
        <H2>{sourceHeader}</H2>
        {headerImg ? <Img src={headerImg} alt="background" /> : ''}
      </StyledImageHeaderWrapper>
    );
  };

  return (
    <div>
      <StyledAside>
        <a href={props.sourceLink}>{renderHeader()}</a>
        <Ol source={props.recommendationSource}>
          {props.articleList.map((id, index) => (
            <RecommendationList
              id={id}
              index={index}
              type={props.recommendationSource}
              key={`${id}`}
            />
          ))}
        </Ol>
      </StyledAside>
    </div>
  );
}

Sidebar.propTypes = {
  sourceHeader: PropTypes.string.isRequired,
  sourceLink: PropTypes.string.isRequired,
  headerImg: PropTypes.string,
  articleList: PropTypes.array.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  recommendationSource: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  const { recommendationSource } = ownProps;
  const { sourceLink, articleList, headerImg } = state.testState[
    recommendationSource
  ];
  const componentProps = {
    articleList,
    sourceLink,
  };
  if (recommendationSource === 'newFromNetwork') {
    componentProps.sourceHeader = 'New from your network';
    componentProps.headerImg = headerImg;
  } else if (recommendationSource === 'popularOnMedium') {
    componentProps.sourceHeader = 'Popular On Medium';
  } else if (recommendationSource === 'readingList') {
    componentProps.sourceHeader = 'Reading list';
    componentProps.headerImg = headerImg;
  }
  return componentProps;
}

export default connect(mapStateToProps)(Sidebar);
export { Sidebar };
