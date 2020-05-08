/* eslint-disable no-param-reassign */
/* eslint-disable default-case */
import produce from 'immer';
import { ARTICLE_AVATAR_REF, ARTICLE_IMAGE_REF } from '../../actions';
import { testState } from '../testState';

const initialState = testState();

export default produce((draft, action) => {
  switch (action.type) {
    case ARTICLE_AVATAR_REF:
      draft.articlePage.avatarRefContainer[action.uuid] = action.node;
      break;
    case ARTICLE_IMAGE_REF:
      draft.articlePage.imageRefContainer[action.uuid] = action.node;
      break;
  }
}, initialState);
