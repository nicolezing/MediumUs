/**
 *
 * Sidebar
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SingleSidebarHeroGroup from './SingleSidebarHero';
import {
  Aside,
  AsideSpecial,
  Ol,
  OlSpecial,
  HeaderWrapper,
  NetworkImageHeaderWrapper,
  ReadingListImageHeaderWrapper,
  H2,
  H3,
  Img,
  MidWrapper,
} from './Wrappers';
import { selectHomepageSidebarLists } from '../../../../selectors';

const {
  NewFromNetworkHero,
  PopularOnMediumHero,
  ReadingListHero,
} = SingleSidebarHeroGroup;

const NewFromNetwork = props => {
  const { articleList, header, sourceLink, headerImg } = props.newFromNetwork;
  return (
    <MidWrapper>
      <AsideSpecial>
        <a href={sourceLink}>
          <NetworkImageHeaderWrapper>
            <H2>{header}</H2>
            <Img src={headerImg} alt="background" />
          </NetworkImageHeaderWrapper>
        </a>
        <Ol>
          {articleList.map(id => (
            <NewFromNetworkHero id={id} keu={id} />
          ))}
        </Ol>
      </AsideSpecial>
    </MidWrapper>
  );
};

const PopularOnMedium = props => {
  const { articleList, header, sourceLink } = props.popularOnMedium;
  return (
    <MidWrapper>
      <Aside>
        <a href={sourceLink}>
          <HeaderWrapper>
            <H3>{header}</H3>
          </HeaderWrapper>
        </a>
        <OlSpecial>
          {articleList.map((id, index) => (
            <PopularOnMediumHero id={id} index={index} key={id} />
          ))}
        </OlSpecial>
      </Aside>
    </MidWrapper>
  );
};

const ReadingList = props => {
  const { articleList, header, sourceLink, headerImg } = props.readingList;
  return (
    <MidWrapper>
      <AsideSpecial>
        <a href={sourceLink}>
          <ReadingListImageHeaderWrapper>
            <H2>{header}</H2>
            <Img src={headerImg} alt="background" />
          </ReadingListImageHeaderWrapper>
        </a>
        <Ol>
          {articleList.map(id => (
            <ReadingListHero id={id} key={id} />
          ))}
        </Ol>
      </AsideSpecial>
    </MidWrapper>
  );
};

NewFromNetwork.propTypes = {
  newFromNetwork: PropTypes.shape({
    header: PropTypes.string.isRequired,
    sourceLink: PropTypes.string.isRequired,
    headerImg: PropTypes.string.isRequired,
    articleList: PropTypes.array.isRequired,
  }),
};
PopularOnMedium.propTypes = {
  popularOnMedium: PropTypes.shape({
    header: PropTypes.string.isRequired,
    sourceLink: PropTypes.string.isRequired,
    articleList: PropTypes.array.isRequired,
  }),
};
ReadingList.propTypes = {
  readingList: PropTypes.shape({
    header: PropTypes.string.isRequired,
    sourceLink: PropTypes.string.isRequired,
    headerImg: PropTypes.string.isRequired,
    articleList: PropTypes.array.isRequired,
  }),
};

function mapStateToProps(state) {
  const {
    newFromNetwork,
    popularOnMedium,
    readingList,
  } = selectHomepageSidebarLists(state);

  return {
    newFromNetwork,
    popularOnMedium,
    readingList,
  };
}

export default {
  NewFromNetwork: connect(mapStateToProps)(NewFromNetwork),
  PopularOnMedium: connect(mapStateToProps)(PopularOnMedium),
  ReadingList: connect(mapStateToProps)(ReadingList),
};
