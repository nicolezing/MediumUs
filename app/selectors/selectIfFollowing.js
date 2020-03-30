import { selectUserInfo } from './selectUserInfo';
import selectCurrentLoginId from './selectCurrentLoginId';

export function selectIfFollowingAuthor(state, authorId) {
  const currentUser = selectCurrentLoginId(state);
  if (currentUser === '') {
    return false;
  }
  const { authorFollowing } = selectUserInfo(state, currentUser);
  return authorFollowing.includes(authorId);
}

export function selectIfFollowingPublication(state, publicationId) {
  const currentUser = selectCurrentLoginId(state);
  if (currentUser === '') {
    return false;
  }
  const { publicationFollowing } = selectUserInfo(state, currentUser);
  return publicationFollowing.includes(publicationId);
}
