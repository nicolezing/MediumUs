import { expect } from 'chai';
import { authedApp, insertArticles, insertUser } from '../utils';
import { ArticleState, listBookmarked } from '../../articles';

const USER_1 = 'tester1';
const USER_2 = 'tester2';
const ARTICLE_1 = {
  id: 'article 1',
  author: USER_1,
  title: 'title 1',
  content: 'content 1',
  tags: [],
  state: ArticleState.PUBLISHED,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const ARTICLE_2 = {
  id: 'article 2',
  author: USER_2,
  title: 'title 2',
  content: 'content 2',
  tags: [],
  state: ArticleState.DRAFT,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const ARTICLE_3 = {
  id: 'article 3',
  author: 'other',
  title: 'title 3',
  content: 'content 3',
  tags: [],
  state: ArticleState.DRAFT,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('articles.listBookmarked', () => {
  it('should only return article IDs bookmarked by the given user', async () => {
    const db = authedApp({ uid: USER_1 });
    await insertArticles(db, [ARTICLE_1, ARTICLE_2, ARTICLE_3]);
    await insertUser(db, {
      id: USER_1,
      bookmarkedArticles: [ARTICLE_1.id, ARTICLE_3.id],
    });
    await insertUser(db, {
      id: USER_2,
      bookmarkedArticles: [ARTICLE_2.id, ARTICLE_3.id],
    });

    const bookmarkedArticleIds = await listBookmarked(USER_2);
    expect(bookmarkedArticleIds).to.include.members([
      ARTICLE_2.id,
      ARTICLE_3.id,
    ]);
  });

  it('should return empty list if user is not found', async () => {
    const db = authedApp({ uid: USER_1 });
    await insertArticles(db, [ARTICLE_1, ARTICLE_2, ARTICLE_3]);
    await insertUser(db, {
      id: USER_1,
      bookmarkedArticles: [],
    });

    const bookmarkedArticleIds = await listBookmarked(USER_2);
    expect(bookmarkedArticleIds).to.be.empty;
  });
});
