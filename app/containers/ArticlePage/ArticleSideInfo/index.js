/* eslint-disable react/no-find-dom-node */
// *
// ArticleSideInfo
// *
import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  selectTheme,
  selectArticleReadingInfo,
  selectIfBookmarked,
  selectArticlePublicationInfo,
  selectArticleSideInfoToggleRefs,
} from '../../../selectors';
import roundToThousand from '../../../utils/roundToThousand';
import { OutlinedButton, IconButton } from '../../../components/Button';
import {
  Container,
  WidthConstrainWrapper,
  InfoWrapper,
  PublicationWrapper,
  PublicationHeader,
  DescriptionWrapper,
  ClapContainer,
  ClapWrapper,
  ClapNumberButton,
} from './Wrappers';

function ArticleSideInfo(props) {
  const sideInfoRef = useRef();
  const [visibility, setVisibility] = useState(false);

  const getVisibilityFromAvatarRefs = () => {
    const windowHeight = window.innerHeight;
    const { avatarRefContainer: refObj } = props;
    console.log('refObj of avatar ref ', refObj);
    if (Object.keys(refObj).length !== 2) {
      // filter to prevent default visibility = true for the first render
      return false;
    }
    return Object.keys(refObj).reduce((result, key) => {
      const { bottom } = refObj[key].getBoundingClientRect();
      if (bottom - windowHeight >= 0 || bottom <= 0) {
        // avatar not in screen, side info will show, return true && result
        return result;
      }
      // avatar in screen, side info will hide, return false
      return false;
    }, true);
  };

  const getVisibilityFromImageRefs = () => {
    const { top, bottom } = sideInfoRef.current.getBoundingClientRect();
    const { imageRefContainer: refObj } = props;
    console.log('refObj of image ref ', refObj);

    return Object.keys(refObj).reduce((result, key) => {
      if (!refObj[key]) {
        return result;
      }
      // if node != null, get element ClientRect
      const { top: imageElementTop, bottom: imageElementBottom } = refObj[
        key
      ].getBoundingClientRect();
      if (imageElementBottom + 20 < top || imageElementTop - 20 > bottom) {
        // image far from side info, side info will show, return true && result
        return result;
      }
      // side info will hide, return false
      return false;
    }, true);
  };

  const getVisibilityFromRefs = () =>
    setVisibility(
      getVisibilityFromAvatarRefs() && getVisibilityFromImageRefs(),
    );

  useEffect(() => {
    getVisibilityFromRefs();
    window.addEventListener('scroll', getVisibilityFromRefs);
    return () => {
      window.removeEventListener('scroll', getVisibilityFromRefs);
    };
  });

  const renderPublication = () => {
    const { name, link, description, followed } = props.publicationInfo;
    return (
      <PublicationWrapper>
        <a href={link}>
          <PublicationHeader>{name}</PublicationHeader>
        </a>
        <DescriptionWrapper>{description}</DescriptionWrapper>
        <OutlinedButton
          type={followed ? 'filled' : 'outlined'}
          size="middle"
          theme={props.theme}
          text={followed ? 'Following' : 'Follow'}
        />
      </PublicationWrapper>
    );
  };

  const bookmarkIconName = props.bookmarked ? 'bookmarkFilled' : 'bookmark';

  return (
    <Container visible={visibility} ref={sideInfoRef}>
      <WidthConstrainWrapper>
        <InfoWrapper>
          {props.publicationInfo.id ? renderPublication() : ''}
          <ClapContainer>
            <ClapWrapper>
              <IconButton iconName="clapSmallIcon" theme={props.theme} />
            </ClapWrapper>
            <ClapNumberButton>
              {props.claps !== 0 ? `${roundToThousand(props.claps)}` : ''}
            </ClapNumberButton>
          </ClapContainer>
          <IconButton iconName={`${bookmarkIconName}Icon`} theme="black" />
        </InfoWrapper>
      </WidthConstrainWrapper>
    </Container>
  );
}

ArticleSideInfo.propTypes = {
  id: PropTypes.string,
  theme: PropTypes.string,
  claps: PropTypes.number,
  bookmarked: PropTypes.bool,
  publicationInfo: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string,
    logo: PropTypes.string,
    description: PropTypes.string,
    followed: PropTypes.bool,
  }),
  avatarRefContainer: PropTypes.object,
  imageRefContainer: PropTypes.object,
};

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const theme = selectTheme(state);
  const { claps } = selectArticleReadingInfo(state, id);
  const bookmarked = selectIfBookmarked(state, id);
  const publicationInfo = selectArticlePublicationInfo(state, id);
  const {
    avatarRefContainer,
    imageRefContainer,
  } = selectArticleSideInfoToggleRefs(state);
  return {
    theme,
    claps,
    bookmarked,
    publicationInfo,
    avatarRefContainer,
    imageRefContainer,
  };
}

export default connect(mapStateToProps)(ArticleSideInfo);
