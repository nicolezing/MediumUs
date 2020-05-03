import { expect } from 'chai';
import { authedApp, insertArticles } from '../utils';
import { ArticleState, listByAuthor } from '../../articles';

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
  author: 'other',
  title: 'title 2',
  content: 'content 2',
  tags: [],
  state: ArticleState.DRAFT,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const ARTICLE_3 = {
  id: 'article 3',
  author: USER_1,
  title: 'title 3',
  content: 'content 3',
  tags: [],
  state: ArticleState.DRAFT,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('articles.listByAuthor', () => {
  it('should return all article IDs authored by the given user', async () => {
    const db = authedApp({ uid: USER_1 });
    await insertArticles(db, [ARTICLE_1, ARTICLE_2, ARTICLE_3]);

    const authoredArticleIds = await listByAuthor(USER_1);
    expect(authoredArticleIds).to.have.members([ARTICLE_1.id]);
  });

  it('should return empty list if the user has no articles', async () => {
    const db = authedApp({ uid: USER_1 });
    await insertArticles(db, [ARTICLE_1, ARTICLE_2, ARTICLE_3]);

    const authoredArticleIds = await listByAuthor(USER_2);
    expect(authoredArticleIds).to.be.empty;
  });
});
