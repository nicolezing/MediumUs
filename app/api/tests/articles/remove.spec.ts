import { expect } from 'chai';
import {
  authedApp,
  insertArticles,
  insertUser,
  freezeTime,
  getUser,
} from '../utils';
import {
  remove,
  ArticleState,
  ERROR_ARTICLE_NOT_FOUND,
  listByAuthor,
} from '../../articles';

const USER = 'tester';
const USER_2 = 'tester2';
const USER_3 = 'tester3';
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
  state: ArticleState.PUBLISHED,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('articles.remove', () => {
  it('should remove requested article', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE_1, ARTICLE_2]);

    await remove(ARTICLE_1.id);
    const articleIds = await listByAuthor(USER);
    expect(articleIds).to.have.members([ARTICLE_2.id]);
  });

  it('should succeed if article not found', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE_1, ARTICLE_2]);

    await remove('ID absent');
    const articleIds = await listByAuthor(USER);
    expect(articleIds).to.have.members([ARTICLE_1.id, ARTICLE_2.id]);
  });

  /* TODO: implement
  it('should clean up user bookmarks', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [ARTICLE_1, ARTICLE_2]);
    await insertUser(db, {
      id: USER_2,
      bookmarkedArticles: [ARTICLE_1.id, ARTICLE_2.id],
    });
    await insertUser(db, {
      id: USER_3,
      bookmarkedArticles: [ARTICLE_1.id, ARTICLE_2.id],
    });

    const { now, restore } = freezeTime();
    await remove(ARTICLE_1.id);
    restore();

    const user2 = await getUser(db, USER_2);
    expect(user2.bookmarkedArticles).to.have.members([ARTICLE_2.id]);
    expect(user2.updatedAt).to.equalDate(now);

    const user3 = await getUser(db, USER_3);
    expect(user3.bookmarkedArticles).to.have.members([ARTICLE_2.id]);
    expect(user3.updatedAt).to.equalDate(now);
  });
  */
});
