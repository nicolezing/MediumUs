import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { OutlinedButton } from '../../../../components/Button';
import Avatar from '../../../../components/Avatar';
import {
  selectArticlePublicationInfo,
  selectArticleAuthorInfo,
} from '../../../../selectors';
import RefContainer from '../../refContainer';
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
  const AuthorAvatar = () => <Avatar size="80px" id={props.writerInfo.id} />;

  const PublicationAvatar = () => {
    const { name, logo } = props.publicationInfo;
    return <PublicationLogo src={logo} alt={name} />;
  };

  const { theme } = props;
  const renderPoster = (infoObj, avatarType) => {
    const { name, link, description, followed } = infoObj;
    return (
      <PosterWrapper>
        <HeaderInfoWrapper>
          <ImageWrapper>
            <a href={link}>
              {avatarType === 'author' ? AuthorAvatar() : PublicationAvatar()}
            </a>
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
    <RefContainer refType="avatarRef" uuid="bottomAvatarRef">
      <OuterWrapper>
        {renderPoster(props.writerInfo, 'author')}
        {props.publicationInfo.name &&
          renderPoster(props.publicationInfo, 'publication')}
      </OuterWrapper>
    </RefContainer>
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
    id: PropTypes.string,
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
  const publicationInfo = selectArticlePublicationInfo(state, id);

  return {
    writerInfo,
    publicationInfo,
  };
}

export default connect(mapStateToProps)(InfoAvatarPoster);
