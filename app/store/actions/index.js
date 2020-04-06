/** Homepage actions */
export const LOAD_MORE_HOMELIST = 'LOAD_MORE_HOMELIST';
export function loadMoreHomelist() {
  return { type: LOAD_MORE_HOMELIST };
}

/** ArtcilePage actions */
/** ArtcilePage sideinfo top controller */
export const ARTICLE_TOP_AVATAR_IN_VIEW = 'ARTICLE_TOP_AVATAR_IN_VIEW';
export const ARTICLE_TOP_AVATAR_OFF_VIEW = 'ARTICLE_TOP_AVATAR_OFF_VIEW';
export function articleTopAvatarInView() {
  return { type: ARTICLE_TOP_AVATAR_IN_VIEW };
}
export function articleTopAvatarOffView() {
  return { type: ARTICLE_TOP_AVATAR_OFF_VIEW };
}

/** ArtcilePage sideinfo bottom controller */
export const ARTICLE_BOTTOM_AVATAR_IN_VIEW = 'ARTICLE_BOTTOM_AVATAR_IN_VIEW';
export const ARTICLE_BOTTOM_AVATAR_OFF_VIEW = 'ARTICLE_BOTTOM_AVATAR_OFF_VIEW';
export function articleBottomAvatarInView() {
  return { type: ARTICLE_BOTTOM_AVATAR_IN_VIEW };
}
export function articleBottomAvatarOffView() {
  return { type: ARTICLE_BOTTOM_AVATAR_OFF_VIEW };
}
