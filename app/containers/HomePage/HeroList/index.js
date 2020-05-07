import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticlePoster from '../../../components/ArticlePoster';
import SidebarComponents from '../AutoStickySidebars/SidebarComponents';
import { Wrapper, SidebarWrapper } from './Wrappers';
import { loadMoreHomelist } from '../../../store/actions';
import unlimitedLoading from '../../../utils/unlimitedLoading';
import { selectHomepageHerosLists } from '../../../selectors';

function HeroList(props) {
  const sectionRef = useRef();
  const dividerPosition = [0, 3, 8, 11, 17, 22];

  const renderIdList = arr =>
    arr.map(({ source, id }) => (
      <ArticlePoster
        variation="HomeList"
        hoverEffect
        id={id}
        key={id}
        theme="green"
        source={source}
      />
    ));

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

  const { NewFromNetwork, PopularOnMedium, ReadingList } = SidebarComponents;
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

function mapStateToProps(state) {
  const { homeList } = selectHomepageHerosLists(state);

  return {
    homeList,
  };
}

export default connect(
  mapStateToProps,
  { loadMoreHomelist },
)(HeroList);
