import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
import ArticleResponse from './ArticleResponse';
import {
  selectUserInfo,
  selectArticleTags,
  selectArticleReadingInfo,
  selectArticleAbstract,
  selectIfBookmarked,
  selectTheme,
} from '../../../selectors';

function ArticleBottomInfo(props) {
  const { tags, claps, twitter, facebook, linkedIn, bookmarked, more } = props;

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
  ].map(val => {
    const key = Object.keys(val)[0];
    if (val[key] !== undefined) {
      return (
        <IconLi key={key}>
          <Link to={val[key]}>
            <IconButton iconName={`${key}Icon`} theme="black" />
          </Link>
        </IconLi>
      );
    }
    return '';
  });

  const renderButton = [{ [bookmarkIconName]: true }, { moreHollow: more }].map(
    val => {
      const key = Object.keys(val)[0];
      return (
        <IconLi key={key}>
          <IconButton iconName={`${key}Icon`} theme="black" />
        </IconLi>
      );
    },
  );

  return (
    <OuterWrapper>
      <WidthWrapper>
        <TagsWrapper>
          <Ul>{Tags}</Ul>
        </TagsWrapper>
        <MediaWrapper>
          <ClapsWrapper>
            <GlowIconButton iconName="clapIcon" theme={props.theme} />
            <ClapTextWrapper>
              <ClapText>
                {claps !== 0 ? `${roundToThousand(claps)} claps` : ''}
              </ClapText>
            </ClapTextWrapper>
          </ClapsWrapper>
          <MediaListWrapper>
            {renderMedia}
            {renderButton}
          </MediaListWrapper>
        </MediaWrapper>
        <InfoAvatarPoster id={props.id} theme={props.theme} />
        <ArticleResponse id={props.id} theme={props.theme} />
      </WidthWrapper>
    </OuterWrapper>
  );
}

ArticleBottomInfo.propTypes = {
  theme: PropTypes.string,
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
  const { claps } = selectArticleReadingInfo(state, id);

  const bookmarked = selectIfBookmarked(state, id);
  const theme = selectTheme(state);

  return {
    tags,
    claps,
    twitter,
    facebook,
    linkedIn,
    bookmarked,
    more,
    theme,
  };
}

export default connect(mapStateToProps)(ArticleBottomInfo);
