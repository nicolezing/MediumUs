import { expect } from 'chai';
import { authedApp, insertArticles, getArticle, freezeTime } from '../utils';
import { editTags, ArticleState, ERROR_EDITING_CONFLICT } from '../../articles';

const USER = 'tester';
const TAG_1 = 'tag1';
const TAG_2 = 'tag2';
const TAG_3 = 'tag3';
const TAG_4 = 'tag4';

const ARTICLE = {
  id: 'article 1',
  author: USER,
  title: 'title 1',
  content: 'content 1',
  tags: [TAG_1, TAG_2],
  state: ArticleState.PUBLISHED,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('articles.editTags', () => {
  it('should add and remove tags', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE]);

    const { now, restore } = freezeTime();
    await editTags(ARTICLE.id, [TAG_1, TAG_3], [TAG_2, TAG_4]);
    restore();

    const article = await getArticle(db, ARTICLE.id);
    expect(article).to.be.eql({
      ...ARTICLE,
      tags: [TAG_1, TAG_3],
      updatedAt: now,
    });
  });

  it('should do nothing if no changes needed', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE]);

    const { now, restore } = freezeTime();
    await editTags(ARTICLE.id, [TAG_1, TAG_2], [TAG_3, TAG_4]);
    restore();

    const article = await getArticle(db, ARTICLE.id);
    expect(article.tags).to.include.members([TAG_1, TAG_2]);
    expect(article.updatedAt).to.lessThan(now);
  });

  it('should throw if trying to add and remove the same tags', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE]);

    await expect(
      editTags(ARTICLE.id, [TAG_1, TAG_2], [TAG_1, TAG_3]),
    ).to.be.rejectedWith(ERROR_EDITING_CONFLICT);
  });
});
