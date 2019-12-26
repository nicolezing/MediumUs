import { expect } from 'chai';
import { authedApp, insertArticles } from '../utils';
import { ArticleState, listByTag } from '../../articles';

const USER = 'tester1';
const TAG_1 = 'tag1';
const TAG_2 = 'tag2';
const TAG_3 = 'tag3';
const ARTICLE_1 = {
  id: 'article 1',
  author: USER,
  title: 'title 1',
  content: 'content 1',
  tags: [TAG_1, TAG_2],
  state: ArticleState.PUBLISHED,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const ARTICLE_2 = {
  id: 'article 2',
  author: 'other',
  title: 'title 2',
  content: 'content 2',
  tags: [TAG_1],
  state: ArticleState.DRAFT,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const ARTICLE_3 = {
  id: 'article 3',
  author: USER,
  title: 'title 3',
  content: 'content 3',
  tags: [TAG_2],
  state: ArticleState.DRAFT,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('articles.listByTag', () => {
  it('should return all article IDs of the given tag', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE_1, ARTICLE_2, ARTICLE_3]);

    const articleIds = await listByTag(TAG_1);
    expect(articleIds).to.include.members([ARTICLE_1.id, ARTICLE_2.id]);
  });

  it('should return empty list if the tag has no articles', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE_1, ARTICLE_2, ARTICLE_3]);

    const articleIds = await listByTag(TAG_3);
    expect(articleIds).to.be.empty;
  });
});
