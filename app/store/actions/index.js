/** Homepage actions */
export const LOAD_MORE_HOMELIST = 'LOAD_MORE_HOMELIST';
export function loadMoreHomelist() {
  return { type: LOAD_MORE_HOMELIST };
}

/** ArtcilePage actions */
/** ArticlePage side info avatar refs */
export const ARTICLE_AVATAR_REF = 'ARTICLE_AVATAR_REF';
export function passArticleAvatarRef(node, uuid) {
  return {
    type: ARTICLE_AVATAR_REF,
    node,
    uuid,
  };
}
export const ARTICLE_IMAGE_REF = 'ARTICLE_IMAGE_REF';
export function passArticleImageRef(node, uuid) {
  return {
    type: ARTICLE_IMAGE_REF,
    node,
    uuid,
  };
}
