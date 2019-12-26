import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ArticlePoster from '../../../components/ArticlePoster';
import { Wrapper, SidebarWrapper } from './Wrappers';
import { NewFromNetwork, PopularOnMedium, ReadingList } from '../Sidebars';

function HeroList(props) {
  const renderList = id => (
    <ArticlePoster
      variation="HomeList"
      hoverEffect
      id={id}
      key={`articleID${id}`}
    />
  );

  return (
    <Wrapper>
      <section>
        {props.articleList.slice(0, 3).map(id => renderList(id))}
        <SidebarWrapper>
          <NewFromNetwork />
        </SidebarWrapper>
        {props.articleList.slice(3, 8).map(id => renderList(id))}
        <SidebarWrapper>
          <NewFromNetwork />
        </SidebarWrapper>
        {props.articleList.slice(8, 11).map(id => renderList(id))}
        <SidebarWrapper>
          <ReadingList />
        </SidebarWrapper>
        {props.articleList.slice(11, 17).map(id => renderList(id))}
        <SidebarWrapper>
          <PopularOnMedium />
        </SidebarWrapper>
        {props.articleList.slice(17).map(id => renderList(id))}
      </section>
    </Wrapper>
  );
}
HeroList.propTypes = {
  articleList: PropTypes.array,
};

function mapStateToProps(state, ownProps) {
  const { list } = ownProps;
  return {
    articleList: state.testState[list],
  };
}

export default connect(mapStateToProps)(HeroList);
