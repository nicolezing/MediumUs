// The unique identifier of an article.
export type ArticleId = string;
export enum ArticleState {
  DRAFT,
  PUBLISHED,
}

export type ArticleData = {
  title: string;
  subtitle?: string;
  content: string;
  cover?: URL; // The URL of the cover photo of the article.
};

export type ArticleMeta = {
  author: UserId;
  state: ArticleState;
  createdAt: Date;
  updatedAt: Date;
  publishedAt?: Date;
};

export type Article = { id: ArticleId } & ArticleData & ArticleMeta;

// Draft operations

/**
 * Creates a new article draft for the current user.
 * Returns the ID of the newly created article draft.
 */
export async function createDraft(request: ArticleData): Promise<ArticleId> {
}

/**
 * Returns IDs of all article drafts for the current user.
 */
export async function listUserDrafts(): Promise<Array<ArticleId>> {
}

export function updateDraft() {}

export function removeDraft() {}

export function publishDraft() {}

// Single article operations

/**
 * Returns the full Article doc for the given ArticleId.
 */
export async function read(id: ArticleId): Promise<Article> {
}

export function unpublish() {}

export function remove() {}

export function bookmark() {}

export function unbookmark() {}

// User-related listing operations

export function listBookmarked() {}

export function listCommented() {}

export function listClapped() {}

// General listing operations

export function search() {}

export function listByUsers() {}

export function listByTags() {}

export function listByTopics() {}

export function listByPublications() {}

export function listHomePageRecommendations() {}

export function listPersonalRecommendations() {}
