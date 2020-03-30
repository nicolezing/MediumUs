import { selectUserInfo } from './selectUserInfo';
import selectCurrentLoginId from './selectCurrentLoginId';

export default function(state, articleId) {
  const currentUser = selectCurrentLoginId(state);
  if (currentUser === '') {
    return false;
  }
  const { bookmarked } = selectUserInfo(state, currentUser);
  return bookmarked.includes(articleId);
}
