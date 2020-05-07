import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { IconButton } from '.';
import { selectIfBookmarked } from '../../selectors';

function BookmarkButton(props) {
  return props.bookmarked ? (
    <IconButton
      title="Bookmark this story to read later"
      iconName="bookmarkFilledIcon"
      theme="pureBlack"
      // onClick={onRemoveBookmark}
    />
  ) : (
    <IconButton
      title="Bookmark this story to read later"
      iconName="bookmarkIcon"
      theme="gray"
      // onClick={onAddBookmark}
    />
  );
}

BookmarkButton.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  id: PropTypes.string,
  bookmarked: PropTypes.bool,
};

function mapStateToProps(state, ownProps) {
  const { id } = ownProps;
  const bookmarked = selectIfBookmarked(state, id);
  return { bookmarked };
}

export default connect(mapStateToProps)(BookmarkButton);
