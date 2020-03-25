import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { IconButton } from '.';
import hasBookmarked from '../../selectors/hasBookmarked';

function BookmarkButton(props) {
  return props.bookmarked ? (
    <IconButton
      title="Bookmark this story to read later"
      iconName="bookmarkFilledIcon"
      colorSet="pureBlack"
      // onClick={onRemoveBookmark}
    />
  ) : (
    <IconButton
      title="Bookmark this story to read later"
      iconName="bookmarkIcon"
      colorSet="gray"
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
  const bookmarked = hasBookmarked(state, id);
  return { bookmarked };
}

export default connect(mapStateToProps)(BookmarkButton);
