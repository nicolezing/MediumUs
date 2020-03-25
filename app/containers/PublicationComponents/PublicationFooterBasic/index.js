/*
 * PublicationFooterBasic
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Wrapper, A, MarginWrapper, Span } from './Wrappers';
import { selectTopicInfo } from '../../../selectors';

function PublicationFooterBasic(props) {
  const footerList = {
    [`about ${props.topic}`]: props.about,
    'latest stories': props.latest,
    Archive: './',
    'About Medium': './',
    Terms: './',
    Privacy: './',
  };

  const renderFooterListItem = arr =>
    arr.map((key, index) => {
      if (index < arr.length - 1) {
        return (
          <MarginWrapper>
            <A href={footerList.key} key={key}>
              {key}
            </A>
            <Span>&middot;</Span>
          </MarginWrapper>
        );
      }
      return (
        <MarginWrapper>
          <A href={footerList.key} key={key}>
            {key}
          </A>
        </MarginWrapper>
      );
    });

  return <Wrapper>{renderFooterListItem(Object.keys(footerList))}</Wrapper>;
}

PublicationFooterBasic.propTypes = {
  topic: PropTypes.string.isRequired,
  about: PropTypes.string,
  latest: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  const { topic } = ownProps;
  const { about, latest } = selectTopicInfo(state, topic);
  return { about, latest };
}

export default connect(mapStateToProps)(PublicationFooterBasic);
