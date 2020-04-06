// *
// ArticleSideInfo
// *
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  selectTheme,
  selectArticleReadingInfo,
  selectIfBookmarked,
  selectArticlePublicationInfo,
  selectArticleSideInfoVisibility,
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
    <Container visible={props.articleSideInfoVisibility}>
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
  articleSideInfoVisibility: PropTypes.bool,
};

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const theme = selectTheme(state);
  const { claps } = selectArticleReadingInfo(state, id);
  const bookmarked = selectIfBookmarked(state, id);
  const publicationInfo = selectArticlePublicationInfo(state, id);
  const articleSideInfoVisibility = selectArticleSideInfoVisibility(state);

  return {
    theme,
    claps,
    bookmarked,
    publicationInfo,
    articleSideInfoVisibility,
  };
}

export default connect(mapStateToProps)(ArticleSideInfo);
