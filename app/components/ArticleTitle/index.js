/**
 *
 * ArticleTitle
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {
  Wrapper,
  StyledTitle,
  StyledSubtitle,
  PublicationColumn,
} from './StyledWrapper';
import * as variations from './variateTitleStyles';
import { selectArticleAllInfo } from '../../selectors';

function ArticleTitle(props) {
  const styledTitles = (
    <>
      <StyledTitle variation={props.variation}>{props.title}</StyledTitle>
      <StyledSubtitle variation={props.variation}>
        {props.subtitle}
      </StyledSubtitle>
    </>
  );

  return (
    <Wrapper variation={props.variation}>
      {props.variation === 'ArticlePageTitle' ? (
        <>
          {props.publicationColumn && (
            // TODO
            <Link to="./" key={props.publicationColumn}>
              <PublicationColumn>{props.publicationColumn}</PublicationColumn>
            </Link>
          )}
          {styledTitles}
        </>
      ) : (
        <Link to={props.articleLink}>{styledTitles}</Link>
      )}
    </Wrapper>
  );
}

ArticleTitle.propTypes = {
  articleLink: PropTypes.string.isRequired,
  publicationColumn: PropTypes.string,
  // TODO (not critical): add publication column link and page
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  variation: PropTypes.oneOf([..._.keys(variations)]).isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  id: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const {
    link: articleLink,
    title,
    subtitle,
    column: publicationColumn,
  } = selectArticleAllInfo(state, id);
  return {
    articleLink,
    title,
    subtitle,
    publicationColumn,
  };
}
export default connect(mapStateToProps)(ArticleTitle);
export { ArticleTitle };
