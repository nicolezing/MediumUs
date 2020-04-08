import {
  selectUserInfo,
  selectPublicationInfo,
  selectIfFollowingPublication,
  selectIfFollowingAuthor,
} from './index';

export function selectArticleAllInfo(state, id) {
  return state.testState.articles[id];
}

export function selectArticleAbstract(state, id) {
  const {
    author,
    title,
    subtitle,
    link,
    publication,
  } = state.testState.articles[id];
  return { author, title, subtitle, link, publication };
}

export function selectArticleReadingInfo(state, id) {
  const {
    creationDate,
    lastModified,
    wordCount,
    premium,
    bookmarked,
    claps,
  } = state.testState.articles[id];
  return { creationDate, lastModified, wordCount, premium, bookmarked, claps };
}

export function selectArticleResponse(state, id) {
  return state.testState.articles[id].responses;
}

export function selectArticleTags(state, id) {
  return state.testState.articles[id].tags;
}

export function selectArticleCover(state, id) {
  return state.testState.articles[id].cover;
}

export function selectArticleAuthorInfo(state, articleId) {
  const { author: id } = selectArticleAbstract(state, articleId);
  const authorInfo = selectUserInfo(state, id);
  const followed = selectIfFollowingAuthor(state, id);

  return { ...authorInfo, id, followed };
}

export function selectArticlePublicationInfo(state, articleId) {
  const { publication: id } = selectArticleAbstract(state, articleId);
  let publicationInfo = {};
  let followedPublication = {};
  if (id) {
    publicationInfo = selectPublicationInfo(state, id);
    followedPublication = selectIfFollowingPublication(state, id);
  }

  return { ...publicationInfo, id, followed: followedPublication };
}

export function selectArticleSideInfoToggleRefs(state) {
  return state.testState.articlePage;
}
