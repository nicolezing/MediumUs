import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  OuterWrapper,
  WidthWrapper,
  TagsWrapper,
  Ul,
  Li,
  ListLink,
  MediaWrapper,
  ClapsWrapper,
  ClapTextWrapper,
  ClapText,
  MediaListWrapper,
  IconLi,
} from './Wrappers';
import { GlowIconButton, IconButton } from '../../../components/Button';
import roundToThousand from '../../../utils/roundToThousand';
import InfoAvatarPoster from './InfoAvatarPoster';
import {
  selectUserInfo,
  selectPublicationInfo,
  selectArticleTags,
  selectArticleReadingInfo,
  selectArticleAbstract,
  selectArticleResponse,
} from '../../../selectors';
import hasBookmarked from '../../../selectors/hasBookmarked';

function ArticleBottomInfo(props) {
  const {
    tags,
    claps,
    twitter,
    facebook,
    linkedIn,
    bookmarked,
    more,
    publicationInfo,
    response,
  } = props;

  const Tags = tags.map(val => (
    <Li key={val.name}>
      <ListLink a={val.link}>{val.name}</ListLink>
    </Li>
  ));

  const bookmarkIconName = bookmarked ? 'bookmarkFilled' : 'bookmark';
  const renderMedia = [
    { twitter },
    { linkedIn },
    { facebookSquare: facebook },
    { [bookmarkIconName]: true },
    { moreHollow: more },
  ].map(val => {
    const key = Object.keys(val)[0];
    if (val[key] !== undefined) {
      return (
        <IconLi key={key}>
          <a href={val[key]}>
            <IconButton iconName={`${key}Icon`} colorSet="black" />
          </a>
        </IconLi>
      );
    }
    return '';
  });

  return (
    <OuterWrapper>
      <WidthWrapper>
        <TagsWrapper>
          <Ul>{Tags}</Ul>
        </TagsWrapper>
        <MediaWrapper>
          <ClapsWrapper>
            <GlowIconButton iconName="clapIcon" colorSet="blue" />
            <ClapTextWrapper>
              <ClapText>
                {claps !== 0 ? `${roundToThousand(claps)} claps` : ''}
              </ClapText>
            </ClapTextWrapper>
          </ClapsWrapper>
          <MediaListWrapper>{renderMedia}</MediaListWrapper>
        </MediaWrapper>
        <InfoAvatarPoster id={props.id} />
      </WidthWrapper>
    </OuterWrapper>
  );
}

ArticleBottomInfo.propTypes = {
  id: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.object),
  claps: PropTypes.number,
  twitter: PropTypes.string,
  linkedIn: PropTypes.string,
  facebook: PropTypes.string,
  more: PropTypes.string,
  bookmarked: PropTypes.bool,
};

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  // TODO: give more a value
  const more = './';
  const { author: authorId } = selectArticleAbstract(state, id);
  const tags = selectArticleTags(state, id);
  const { twitter, facebook, linkedIn } = selectUserInfo(state, authorId);
  const publicationInfo = selectPublicationInfo(state, id);
  const { claps } = selectArticleReadingInfo(state, id);
  console.log('!!!!!!!!!11', hasBookmarked);
  const bookmarked = hasBookmarked(state, id);
  console.log('???????', bookmarked);
  return {
    tags,
    claps,
    twitter,
    facebook,
    linkedIn,
    bookmarked,
    more,
    publicationInfo,
  };
}

export default connect(mapStateToProps)(ArticleBottomInfo);
