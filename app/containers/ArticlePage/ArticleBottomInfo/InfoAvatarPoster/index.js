import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { OutlinedButton } from '../../../../components/Button';
import Avatar from '../../../../components/Avatar';
import {
  selectArticleAbstract,
  selectArticlePublicationInfo,
  selectArticleAuthorInfo,
  selectIfFollowingAuthor,
  selectIfFollowingPublication,
} from '../../../../selectors';
import {
  OuterWrapper,
  PosterWrapper,
  DetailInfoWrapper,
  P,
  RowButtonWrapper,
  ColumnButtonWrapper,
  NameHeader,
  NameWrapper,
  ImageWrapper,
  WriterInfoWrapper,
  DescriptionWrapper,
  Description,
  PublicationLogo,
  HeaderInfoWrapper,
} from './Wrapper';

function InfoAvatarPoster(props) {
  const renderAuthorAvatar = () => (
    <Avatar size="80px" id={props.writerInfo.authorId} />
  );

  const renderPublicationAvatar = () => {
    const { name, link, logo } = props.publicationInfo;
    return (
      <a href={link}>
        <PublicationLogo src={logo} alt={name} />
      </a>
    );
  };

  const { theme } = props;
  const renderPoster = (infoObj, avatarType) => {
    const { name, link, description, followed } = infoObj;
    return (
      <PosterWrapper>
        <HeaderInfoWrapper>
          <ImageWrapper>
            {avatarType === 'author'
              ? renderAuthorAvatar()
              : renderPublicationAvatar()}
          </ImageWrapper>
          <WriterInfoWrapper>
            {avatarType === 'author' ? <P>WRITTEN BY</P> : ''}
            <NameWrapper>
              <NameHeader>
                <a href={link}>{name}</a>
              </NameHeader>
              <RowButtonWrapper>
                <OutlinedButton
                  type={followed ? 'filled' : 'outlined'}
                  size="middle"
                  theme={theme}
                  text={followed ? 'Following' : 'Follow'}
                />
              </RowButtonWrapper>
            </NameWrapper>
          </WriterInfoWrapper>
        </HeaderInfoWrapper>
        <DetailInfoWrapper>
          <DescriptionWrapper>
            <Description>{description}</Description>
          </DescriptionWrapper>
          <ColumnButtonWrapper>
            <OutlinedButton
              type={followed ? 'filled' : 'outlined'}
              size="middle"
              theme={theme}
              text={followed ? 'Following' : 'Follow'}
            />
          </ColumnButtonWrapper>
        </DetailInfoWrapper>
      </PosterWrapper>
    );
  };

  return (
    <OuterWrapper>
      {renderPoster(props.writerInfo, 'author')}
      {props.publicationInfo.name
        ? renderPoster(props.publicationInfo, 'publication')
        : ''}
    </OuterWrapper>
  );
}

InfoAvatarPoster.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  id: PropTypes.string,
  theme: PropTypes.string,
  writerInfo: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    followed: PropTypes.bool,
    authorId: PropTypes.string,
  }),
  publicationInfo: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    logo: PropTypes.string,
    description: PropTypes.string,
    followed: PropTypes.bool,
  }),
  // response: PropTypes.string,
};

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const writerInfo = selectArticleAuthorInfo(state, id);
  const {
    author: authorId,
    publication: publicationId,
  } = selectArticleAbstract(state, id);
  const publicationInfo = selectArticlePublicationInfo(state, id);
  const followedAuthor = selectIfFollowingAuthor(state, authorId);
  const followedPublication = selectIfFollowingPublication(
    state,
    publicationId,
  );
  return {
    writerInfo: { ...writerInfo, followed: followedAuthor, authorId },

    publicationInfo: { ...publicationInfo, followed: followedPublication },
  };
}

export default connect(mapStateToProps)(InfoAvatarPoster);
