import { selectUserInfo } from './selectUserInfo';
import selectPublicationInfo from './selectPublicationInfo';

export function selectArticleAllInfo(state, id) {
  return state.testState.articles[id];
}

export function selectArticleAbstract(state, id) {
  const { author, title, subtitle, link } = state.testState.articles[id];
  return { author, title, subtitle, link };
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

export function selectArticleAuthorInfo(state, id) {
  return selectUserInfo(state, state.testState.articles[id].author);
}

export function selectArticlePublicationInfo(state, id) {
  const publicationId = state.testState.articles[id].publication;
  if (publicationId) {
    return selectPublicationInfo(state, publicationId);
  }
  return {};
}
// export const selectArticleInfo = {
//   selectArticleReadingInfo,
//   selectArticleResponse,
//   selectArticleTags,
// };
