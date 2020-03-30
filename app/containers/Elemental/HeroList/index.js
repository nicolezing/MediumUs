/*
 * HeroList
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import mapDetailListFromArrangement from '../../PublicationComponents/utils/mapDetailListFromArrangement';
import renderListInSection from '../../PublicationComponents/utils/renderListInSection';
import { PaddingWrapper } from './Wrappers';
import { selectTopicInfo } from '../../../selectors';

function HeroList(props) {
  const detailList = mapDetailListFromArrangement(
    props.heroList,
    props.pageArrangement,
  );

  const renderSection = renderListInSection(detailList);

  return (
    <div>
      <section>
        <PaddingWrapper>{renderSection('default', props.theme)}</PaddingWrapper>
        {renderSection('Latest', props.theme)}
      </section>

      <section>{renderSection('Exercise is Medicine', props.theme)}</section>

      <section>{renderSection('The Nuance', props.theme)}</section>

      <section>{renderSection('MORE', props.theme)}</section>
    </div>
  );
}

HeroList.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  topic: PropTypes.string.isRequired,
  heroList: PropTypes.array,
  pageArrangement: PropTypes.object,
  theme: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  const { topic } = ownProps;
  const { heroList, pageArrangement } = selectTopicInfo(state, topic);
  return { heroList, pageArrangement };
}

export default connect(mapStateToProps)(HeroList);
