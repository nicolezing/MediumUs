import { expect } from 'chai';
import { authedApp, insertArticles, getArticle, freezeTime } from '../utils';
import {
  unpublish,
  ArticleState,
  ERROR_ARTICLE_NOT_FOUND,
} from '../../articles';

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

describe('articles.unpublish', () => {
  it('should unpublish an article', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE_PUBLISHED]);
    const { now, restore } = freezeTime();

    await unpublish(ARTICLE_PUBLISHED.id);
    const article = await getArticle(db, ARTICLE_PUBLISHED.id);
    expect(article).to.be.eql({
      ...ARTICLE_PUBLISHED,
      state: ArticleState.DRAFT,
      updatedAt: now,
    });
    restore();
  });

  it('should do nothing if the article is already a draft', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE_DRAFT]);

    await unpublish(ARTICLE_DRAFT.id);
    const article = await getArticle(db, ARTICLE_DRAFT.id);
    expect(article).to.be.eql(ARTICLE_DRAFT);
  });

  it('should throw if article not found', async () => {
    authedApp({ uid: USER });

    await expect(unpublish('ID absent')).to.be.rejectedWith(
      ERROR_ARTICLE_NOT_FOUND,
    );
  });
});
