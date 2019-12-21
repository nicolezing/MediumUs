import { expect } from 'chai';
import { authedApp, insertArticles, listArticleIds } from '../utils';
import { remove, ArticleState, ERROR_ARTICLE_NOT_FOUND } from '../../articles';

const USER = 'tester';
const ARTICLE_1 = {
  id: 'article 1',
  author: USER,
  title: 'title 1',
  content: 'content 1',
  state: ArticleState.PUBLISHED,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const ARTICLE_2 = {
  id: 'article 2',
  author: USER,
  title: 'title 2',
  content: 'content 2',
  state: ArticleState.PUBLISHED,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('articles.remove', () => {
  it('should remove requested article', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE_1, ARTICLE_2]);

    await remove(ARTICLE_1.id);
    const articleIds = await listArticleIds(db);
    expect(articleIds).to.include.members([ARTICLE_2.id]);
  });

  it('should succeed if article not found', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE_1, ARTICLE_2]);

    await remove('ID absent');
    const articleIds = await listArticleIds(db);
    expect(articleIds).to.include.members([ARTICLE_1.id, ARTICLE_2.id]);
  });
});
