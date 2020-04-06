import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { OutlinedButton } from '../../../../components/Button';
import Avatar from '../../../../components/Avatar';
import {
  selectArticlePublicationInfo,
  selectArticleAuthorInfo,
} from '../../../../selectors';
import {
  articleBottomAvatarInView,
  articleBottomAvatarOffView,
} from '../../../../store/actions';
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
  const authorRef = useRef();

  const sideInfoToggler = () => {
    const { bottom } = authorRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const bottomPosition = windowHeight - bottom;

    if (bottomPosition <= 0) {
      props.articleBottomAvatarOffView();
    } else {
      props.articleBottomAvatarInView();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', sideInfoToggler);
    return () => {
      window.removeEventListener('scroll', sideInfoToggler);
    };
  });

  const renderAuthorAvatar = () => (
    <Avatar size="80px" id={props.writerInfo.id} />
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
          <ImageWrapper ref={authorRef}>
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
    id: PropTypes.string,
  }),
  publicationInfo: PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
    logo: PropTypes.string,
    description: PropTypes.string,
    followed: PropTypes.bool,
  }),
  articleBottomAvatarInView: PropTypes.func,
  articleBottomAvatarOffView: PropTypes.func,
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

export default connect(
  mapStateToProps,
  { articleBottomAvatarInView, articleBottomAvatarOffView },
)(InfoAvatarPoster);
