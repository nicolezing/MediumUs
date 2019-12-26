import { expect } from 'chai';
import {
  authedApp,
  insertArticles,
  insertUser,
  getUser,
  listUserIds,
  freezeTime,
} from '../utils';
import { bookmark, ArticleState } from '../../articles';

const USER = 'tester';
const ARTICLE_1 = {
  id: 'article 1',
  author: USER,
  title: 'title 1',
  content: 'content 1',
  tags: [],
  state: ArticleState.PUBLISHED,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const ARTICLE_2 = {
  id: 'article 2',
  author: USER,
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

describe('articles.bookmark', () => {
  it('should bookmark articles', async () => {
    const db = authedApp({ uid: USER });
    await insertUser(db, { id: USER });
    await insertArticles(db, [ARTICLE_1, ARTICLE_2, ARTICLE_3]);
    const { now, restore } = freezeTime();

    await bookmark(ARTICLE_1.id);
    await bookmark(ARTICLE_3.id);
    const user = await getUser(db, USER);
    expect(user.bookmarkedArticles).to.include.members([
      ARTICLE_1.id,
      ARTICLE_3.id,
    ]);
    expect(user.updatedAt).to.equalDate(now);
    restore();
  });

  it('should do nothing if the article is already bookmarked', async () => {
    const db = authedApp({ uid: USER });
    await insertUser(db, { id: USER });
    await insertArticles(db, [ARTICLE_1]);

    const { now: t1, restore } = freezeTime();
    await bookmark(ARTICLE_1.id);
    restore();
    await bookmark(ARTICLE_1.id);
    const user = await getUser(db, USER);
    expect(user.bookmarkedArticles).to.include.members([ARTICLE_1.id]);
    expect(user.updatedAt).to.equalDate(t1);
  });

  it('should do nothing if the article is deleted', async () => {
    /* not supported by the emulator
    const db = authedApp({ uid: USER });
    await insertUser(db, { id: USER });
    await insertArticles(db, [ARTICLE_1]);

    await bookmark(ARTICLE_1.id);
    await bookmark(ARTICLE_2.id);
    const user = await getUser(db, USER);
    expect(user.bookmarkedArticles).to.include.members([ARTICLE_1.id]);
    */
  });

  it('should do nothing if the user is deleted', async () => {
    /* not supported by the emulator
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE_1]);

    await bookmark(ARTICLE_1.id);
    expect(await listUserIds(db)).to.not.include(USER);
    */
  });
});
