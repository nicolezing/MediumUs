import { expect } from 'chai';
import { authedApp, insertArticles } from '../utils';
import { read, ArticleState, ERROR_ARTICLE_NOT_FOUND } from '../../articles';

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

describe('articles.read', () => {
  it('should read the whole doc', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE_PUBLISHED]);

    const article = await read(ARTICLE_PUBLISHED.id);
    expect(article).to.be.eql(ARTICLE_PUBLISHED);
  });

  it('should throw if ID is not found', async () => {
    authedApp({ uid: USER });

    await expect(read(ARTICLE_DRAFT.id)).to.be.rejectedWith(
      ERROR_ARTICLE_NOT_FOUND,
    );
  });
});
