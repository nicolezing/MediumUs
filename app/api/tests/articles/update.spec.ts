import { expect } from 'chai';
import { authedApp, insertArticles, getArticle, freezeTime } from '../utils';
import { update, ArticleState, ERROR_ARTICLE_NOT_FOUND } from '../../articles';

const USER = 'tester';
const NEW_TITLE = 'title 2';
const ARTICLE = {
  id: 'article 1',
  author: USER,
  title: 'title 1',
  content: 'content 1',
  tags: [],
  state: ArticleState.PUBLISHED,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('articles.update', () => {
  it('should update only requested fields', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE]);
    const { now, restore } = freezeTime();

    await update(ARTICLE.id, { title: NEW_TITLE });
    const article = await getArticle(db, ARTICLE.id);
    expect(article).to.be.eql({
      ...ARTICLE,
      title: NEW_TITLE,
      updatedAt: now,
    });
    restore();
  });

  it('should do nothing if no update', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE]);

    await update(ARTICLE.id, {});
    const article = await getArticle(db, ARTICLE.id);
    expect(article).to.be.eql(ARTICLE);
  });

  it('should throw if article not found', async () => {
    authedApp({ uid: USER });

    await expect(update('ID absent', { title: NEW_TITLE })).to.be.rejectedWith(
      ERROR_ARTICLE_NOT_FOUND,
    );
  });
});
