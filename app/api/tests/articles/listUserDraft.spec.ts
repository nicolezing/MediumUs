import { expect } from 'chai';
import { authedApp, insertArticles } from '../utils';
import { listUserDrafts, ArticleState } from '../../articles';

const USER = 'tester';
const ARTICLE_PUBLISHED = {
  id: 'article 1',
  author: USER,
  title: 'title 1',
  content: 'content 1',
  tags: [],
  state: ArticleState.PUBLISHED,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const ARTICLE_DRAFT = {
  id: 'article 2',
  author: USER,
  title: 'title 2',
  content: 'content 2',
  tags: [],
  state: ArticleState.DRAFT,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const ARTICLE_DRAFT_OTHERS = {
  id: 'article 3',
  author: 'other',
  title: 'title 3',
  content: 'content 3',
  tags: [],
  state: ArticleState.DRAFT,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('articles.listUserDrafts', () => {
  it('should not return non-draft articles', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE_PUBLISHED]);

    const draftIds = await listUserDrafts();
    expect(draftIds).to.be.empty;
  });

  it('should not return drafts of other users', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE_DRAFT, ARTICLE_DRAFT_OTHERS]);

    const draftIds = await listUserDrafts();
    expect(draftIds).to.include.members([ARTICLE_DRAFT.id]);
  });
});
