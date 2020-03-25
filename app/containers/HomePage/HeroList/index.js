import React, { useRef, useEffect } from 'react';
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
import unlimitedLoading from '../../../utils/unlimitedLoading';
import { selectHomeRecommendationLists } from '../../../selectors';

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

  // function unlimitedLoading() {
  //   const windowHeight = window.innerHeight;
  //   // eslint-disable-next-line react/no-find-dom-node
  //   const { bottom } = (sectionRef.current).getBoundingClientRect();
  //   if (bottom <= windowHeight) {
  //     props.loadMoreHomelist();
  //   }
  // }
  const unlimitedLoader = unlimitedLoading(
    window,
    sectionRef,
    props.loadMoreHomelist,
  );

  useEffect(() => {
    unlimitedLoading();
    window.addEventListener('scroll', unlimitedLoader);
    return () => {
      window.removeEventListener('scroll', unlimitedLoader);
    };
  });

  return (
    <Wrapper>
      <section ref={sectionRef}>
        {renderIdList(
          props.homeList.slice(dividerPosition[0], dividerPosition[1]),
        )}
        <SidebarWrapper>
          <NewFromNetwork />
        </SidebarWrapper>
        {renderIdList(
          props.homeList.slice(dividerPosition[1], dividerPosition[2]),
        )}
        <SidebarWrapper>
          <NewFromNetwork />
        </SidebarWrapper>
        {renderIdList(
          props.homeList.slice(dividerPosition[2], dividerPosition[3]),
        )}
        <SidebarWrapper>
          <ReadingList />
        </SidebarWrapper>
        {renderIdList(
          props.homeList.slice(dividerPosition[3], dividerPosition[4]),
        )}
        <SidebarWrapper>
          <PopularOnMedium />
        </SidebarWrapper>
        {renderIdList(props.homeList.slice(dividerPosition[4]))}
      </section>
    </Wrapper>
  );
}
HeroList.propTypes = {
  homeList: PropTypes.array,
  loadMoreHomelist: PropTypes.func,
};

function mapStateToProps(state, ownProps) {
  const { list } = ownProps;
  const homeList = selectHomeRecommendationLists(state, list);

  return {
    homeList,
  };
}

export default connect(
  mapStateToProps,
  { loadMoreHomelist },
)(HeroList);
