import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  OuterWrapper,
  WriterPosterWrapper,
  WriterInfoWrapper,
  P,
} from './Wrapper';
import Avatar from '../../../../components/Avatar';
import {
  selectArticleAbstract,
  selectPublicationInfo,
  selectArticleResponse,
} from '../../../../selectors';
import { selectArticleAuthorInfo } from '../../../../selectors/selectArticleInfo';

function InfoAvatarPoster(props) {
  return (
    <OuterWrapper>
      <WriterPosterWrapper>
        <Avatar size="80px" id={props.authorId} />
        <WriterInfoWrapper>
          <P>WRITTEN BY</P>
        </WriterInfoWrapper>
      </WriterPosterWrapper>
    </OuterWrapper>
  );
}

InfoAvatarPoster.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  id: PropTypes.string,
  authorId: PropTypes.string,
  writerInfo: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    avatar: PropTypes.string,
    description: PropTypes.string,
    followers: PropTypes.string,
  }),
  publicationInfo: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    logo: PropTypes.string,
    description: PropTypes.string,
    followers: PropTypes.string,
  }),
  // response: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const writerInfo = selectArticleAuthorInfo(state, id);
  const { author: authorId } = selectArticleAbstract(state, id);
  const response = selectArticleResponse(state, id);
  const publicationInfo = selectPublicationInfo(state, id);
  return { writerInfo, authorId, publicationInfo, response };
}

export default connect(mapStateToProps)(InfoAvatarPoster);
