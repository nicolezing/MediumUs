import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthorCard from '../AuthorCard';
import Avatar from '../Avatar';
import OverlayTrigger from '../OverlayTrigger';
import PopoverContent from '../AuthorCard/PopoverContent';
import { IconButton } from '../Button';
import { Li, H2, Wrapper, NumWrapper, IconWrapper } from './ListWrappers';
import { selectArticleAbstract, selectUserInfo } from '../../selectors';

const RecommendationList = props => {
  const leftSide = () => {
    let ele;
    if (props.type === 'newFromNetwork') {
      ele = (
        <div>
          <OverlayTrigger
            trigger="hover"
            placement="top-bottom"
            popoverContent={
              <PopoverContent
                id={props.authorId}
                imgType="avatar"
                theme={props.theme}
              />
            }
          >
            <a href={props.authorLink}>
              <div>
                <Avatar id={props.authorId} size="40px" />
              </div>
            </a>
          </OverlayTrigger>
        </div>
      );
    } else if (props.type === 'popularOnMedium') {
      ele = <NumWrapper>{`0${props.index + 1}`}</NumWrapper>;
    } else if (props.type === 'readingList') {
      ele = (
        <IconWrapper>
          <IconButton
            iconName="bookmarkSmallFilledIcon"
            theme="gray"
            title="Bookmark this story to read later"
          />
        </IconWrapper>
      );
    }
    return ele;
  };

  return (
    <Li>
      {leftSide()}
      <Wrapper>
        <a href={props.articleLink}>
          <H2>{props.title}</H2>
        </a>
        <AuthorCard
          id={props.id}
          variation="Home"
          hoverEffect
          theme={props.theme}
        />
      </Wrapper>
    </Li>
  );
};

RecommendationList.propTypes = {
  theme: PropTypes.string,
  authorId: PropTypes.string,
  authorLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  articleLink: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number,
  type: PropTypes.string.isRequired,
};

function mapStateToProps(state, ownProps) {
  const { id: articleId } = ownProps;
  const { author: authorId, title, link: articleLink } = selectArticleAbstract(
    state,
    articleId,
  );
  const { link: authorLink } = selectUserInfo(state, authorId);
  return {
    authorId,
    authorLink,
    title,
    articleLink,
  };
}
export default connect(mapStateToProps)(RecommendationList);
