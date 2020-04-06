/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
import produce from 'immer';
import {
  ARTICLE_TOP_AVATAR_IN_VIEW,
  ARTICLE_TOP_AVATAR_OFF_VIEW,
  ARTICLE_BOTTOM_AVATAR_IN_VIEW,
  ARTICLE_BOTTOM_AVATAR_OFF_VIEW,
} from '../../actions';
import { testState } from '../testState';

const initialState = testState();

export default produce((draft, action) => {
  switch (action.type) {
    case ARTICLE_TOP_AVATAR_IN_VIEW:
      draft.articlePage.topAvatarOffView = false;
      break;
    case ARTICLE_TOP_AVATAR_OFF_VIEW:
      draft.articlePage.topAvatarOffView = true;
      break;
    case ARTICLE_BOTTOM_AVATAR_IN_VIEW:
      draft.articlePage.bottomAvatarOffView = false;
      break;
    case ARTICLE_BOTTOM_AVATAR_OFF_VIEW:
      draft.articlePage.bottomAvatarOffView = true;
      break;
  }
}, initialState);
