import { LOAD_MORE_HOMELIST } from '../../actions';
import { loadMoreHomelist } from './loadMoreHomelist';
import { testState } from '../testState';

const initialState = testState();

export default (state = initialState, action) => {
  let { homeList } = state;

  switch (action.type) {
    case LOAD_MORE_HOMELIST:
      homeList = homeList.concat(loadMoreHomelist());
      break;
    default:
      return state;
  }
  return { ...state, homeList };
};
