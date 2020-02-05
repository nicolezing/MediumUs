/*
 * HeroList
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import mapDetailListFromArrangement from '../../PublicationComponents/utils/mapDetailListFromArrangement';
import renderListInSection from '../../PublicationComponents/utils/renderListInSection';
import { PaddingWrapper } from './Wrappers';

function HeroList(props) {
  const detailList = mapDetailListFromArrangement(
    props.heroList,
    props.pageArrangement,
  );

  const renderSection = renderListInSection(detailList);

  return (
    <div>
      <section>
        <PaddingWrapper>{renderSection('default')}</PaddingWrapper>
        {renderSection('Latest')}
      </section>

      <section>{renderSection('Exercise is Medicine')}</section>

      <section>{renderSection('The Nuance')}</section>

      <section>{renderSection('MORE')}</section>
    </div>
  );
}

HeroList.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  topic: PropTypes.string.isRequired,
  heroList: PropTypes.array,
  pageArrangement: PropTypes.object,
};

function mapStateToProps(state, ownProps) {
  const { topic } = ownProps;
  const { heroList, pageArrangement } = state.testState.topicList[topic];
  return { heroList, pageArrangement };
}

export default connect(mapStateToProps)(HeroList);
