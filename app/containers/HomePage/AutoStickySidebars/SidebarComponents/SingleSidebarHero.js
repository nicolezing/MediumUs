import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '../../../../components/Avatar';
import OverlayTrigger from '../../../../components/OverlayTrigger';
import PopoverContent from '../../../../components/AuthorCard/PopoverContent';
import { IconButton } from '../../../../components/Button';
import SingleHeroArticleSummary from './SingleHeroArticleSummary';
import { Li, NumWrapper, IconWrapper } from './SidebarHeroWrappers';
import { selectArticleAbstract, selectUserInfo } from '../../../../selectors';

const NewFromNetworkHero = props => {
  const { authorId, authorLink } = props;
  return (
    <Li>
      <div>
        <OverlayTrigger
          trigger="hover"
          placement="top-bottom"
          popoverContent={
            <PopoverContent id={authorId} imgType="avatar" theme="green" />
          }
        >
          <Link to={authorLink}>
            <div>
              <Avatar id={authorId} size="40px" />
            </div>
          </Link>
        </OverlayTrigger>
      </div>
      <SingleHeroArticleSummary {...props} />
    </Li>
  );
};

const PopularOnMediumHero = props => {
  const { index } = props;
  return (
    <Li>
      <NumWrapper>{`0${index + 1}`}</NumWrapper>
      <SingleHeroArticleSummary {...props} />
    </Li>
  );
};

const ReadingListHero = props => (
  <Li>
    <IconWrapper>
      <IconButton
        iconName="bookmarkSmallFilledIcon"
        theme="gray"
        title="Bookmark this story to read later"
      />
    </IconWrapper>
    <SingleHeroArticleSummary {...props} />
  </Li>
);

NewFromNetworkHero.propTypes = {
  authorId: PropTypes.string,
  authorLink: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  articleLink: PropTypes.string.isRequired,
};
PopularOnMediumHero.propTypes = {
  authorId: PropTypes.string,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  articleLink: PropTypes.string.isRequired,
};
ReadingListHero.propTypes = {
  authorId: PropTypes.string,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  articleLink: PropTypes.string.isRequired,
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

export default {
  NewFromNetworkHero: connect(mapStateToProps)(NewFromNetworkHero),
  PopularOnMediumHero: connect(mapStateToProps)(PopularOnMediumHero),
  ReadingListHero: connect(mapStateToProps)(ReadingListHero),
};
