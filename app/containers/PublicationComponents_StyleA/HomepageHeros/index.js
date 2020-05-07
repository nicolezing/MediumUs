/*
 * PublicationHomepageHeros
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SectionTitle from './SectionTitle';
import HerosRow from './HerosRow';
import { selectPublicationHeroInfo } from '../../../selectors';

function HeroSections(props) {
  const { heroList: list, pageArrangements, theme } = props;

  let index = 0;

  return pageArrangements.flatMap(({ title, arrangement }) => {
    const section = [<SectionTitle title={title} />];
    let currentRowSize = 0;
    let currentList = [];

    arrangement.forEach(rowSize => {
      if (rowSize !== currentRowSize) {
        if (currentRowSize >= 1 && currentRowSize <= 3) {
          section.push(
            <HerosRow
              rowType={currentRowSize}
              articleList={currentList}
              theme={theme}
            />,
          );
        }
        currentList = [];
        currentRowSize = rowSize;
      }
      currentList.push(...list.slice(index, index + rowSize));
      index += rowSize;
    });

    section.push(
      <HerosRow
        rowType={currentRowSize}
        articleList={currentList}
        theme={theme}
      />,
    );

    return <section>{section}</section>;
  });
}

HeroSections.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  publicationId: PropTypes.string.isRequired,
  heroList: PropTypes.array,
  pageArrangements: PropTypes.array,
  theme: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  const { publicationId } = ownProps;
  const { heroList, pageArrangements, theme } = selectPublicationHeroInfo(
    state,
    publicationId,
  );
  return { heroList, pageArrangements, theme };
}

export default connect(mapStateToProps)(HeroSections);
