import React, { useRef, useEffect } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticlePoster from '../../../components/ArticlePoster';
import { Wrapper, SidebarWrapper } from './Wrappers';
import {
  NewFromNetwork,
  PopularOnMedium,
  ReadingList,
} from '../Sidebars/index';
import { loadMoreHomelist } from '../../../store/actions';

function HeroList(props) {
  const sectionRef = useRef();
  const dividerPosition = [0, 3, 8, 11, 17, 22];

  const renderIdList = arr =>
    arr.map(id => (
      <ArticlePoster
        variation="HomeList"
        hoverEffect
        id={id}
        key={`articleID${id}`}
      />
    ));

  function unlimitedLoading() {
    const windowHeight = window.innerHeight;
    // eslint-disable-next-line react/no-find-dom-node
    const { bottom } = findDOMNode(sectionRef.current).getBoundingClientRect();
    if (bottom <= windowHeight) {
      props.loadMoreHomelist();
    }
  }

  useEffect(() => {
    unlimitedLoading();
    window.addEventListener('scroll', unlimitedLoading);
    return () => {
      window.removeEventListener('scroll', unlimitedLoading);
    };
  });

  return (
    <Wrapper>
      <section ref={sectionRef}>
        {renderIdList(
          props.articleList.slice(dividerPosition[0], dividerPosition[1]),
        )}
        <SidebarWrapper>
          <NewFromNetwork />
        </SidebarWrapper>
        {renderIdList(
          props.articleList.slice(dividerPosition[1], dividerPosition[2]),
        )}
        <SidebarWrapper>
          <NewFromNetwork />
        </SidebarWrapper>
        {renderIdList(
          props.articleList.slice(dividerPosition[2], dividerPosition[3]),
        )}
        <SidebarWrapper>
          <ReadingList />
        </SidebarWrapper>
        {renderIdList(
          props.articleList.slice(dividerPosition[3], dividerPosition[4]),
        )}
        <SidebarWrapper>
          <PopularOnMedium />
        </SidebarWrapper>
        {renderIdList(props.articleList.slice(dividerPosition[4]))}
      </section>
    </Wrapper>
  );
}
HeroList.propTypes = {
  articleList: PropTypes.array,
  loadMoreHomelist: PropTypes.func,
};

function mapStateToProps(state, ownProps) {
  const { list } = ownProps;
  return {
    articleList: state.testState[list],
  };
}

export default connect(
  mapStateToProps,
  { loadMoreHomelist },
)(HeroList);
