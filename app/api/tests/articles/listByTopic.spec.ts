import { expect } from 'chai';
import { authedApp, insertArticles, insertTopicTags } from '../utils';
import { ArticleState, listByTopic } from '../../articles';

const USER = 'tester1';
const TOPIC_1 = 'topic1';
const TAG_1 = 'tag1';
const TAG_2 = 'tag2';
const TAG_3 = 'tag3';
const TAG_4 = 'tag4';
const TAG_5 = 'tag5';
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
  state: ArticleState.PUBLISHED,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const ARTICLE_3 = {
  id: 'article 3',
  author: USER,
  title: 'title 3',
  content: 'content 3',
  tags: [TAG_2],
  state: ArticleState.PUBLISHED,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const ARTICLE_4 = {
  id: 'article 4',
  author: USER,
  title: 'title 4',
  content: 'content 4',
  tags: [TAG_3],
  state: ArticleState.PUBLISHED,
  createdAt: new Date(),
  updatedAt: new Date(),
};
const ARTICLE_5 = {
  id: 'article 5',
  author: 'other',
  title: 'title 5',
  content: 'content 5',
  tags: [TAG_1],
  state: ArticleState.DRAFT,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('articles.listByTopic', () => {
  it('should return all article IDs of the given topic', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [
      ARTICLE_1,
      ARTICLE_2,
      ARTICLE_3,
      ARTICLE_4,
      ARTICLE_5,
    ]);
    await insertTopicTags(db, TOPIC_1, [TAG_1, TAG_2]);

    const articleIds = await listByTopic(TOPIC_1);
    expect(articleIds).to.have.members([
      ARTICLE_1.id,
      ARTICLE_2.id,
      ARTICLE_3.id,
    ]);
  });

  it('should return all article IDs if at list one tag has articles', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [
      ARTICLE_1,
      ARTICLE_2,
      ARTICLE_3,
      ARTICLE_4,
      ARTICLE_5,
    ]);
    await insertTopicTags(db, TOPIC_1, [TAG_3, TAG_4]);

    const articleIds = await listByTopic(TOPIC_1);
    expect(articleIds).to.have.members([ARTICLE_4.id]);
  });

  it('should return an empty list if no tags have articles', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [
      ARTICLE_1,
      ARTICLE_2,
      ARTICLE_3,
      ARTICLE_4,
      ARTICLE_5,
    ]);
    await insertTopicTags(db, TOPIC_1, [TAG_4, TAG_5]);

    const articleIds = await listByTopic(TOPIC_1);
    expect(articleIds).to.be.empty;
  });

  it('should return an empty list if the topic has no tags', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [
      ARTICLE_1,
      ARTICLE_2,
      ARTICLE_3,
      ARTICLE_4,
      ARTICLE_5,
    ]);
    await insertTopicTags(db, TOPIC_1, []);

    const articleIds = await listByTopic(TOPIC_1);
    expect(articleIds).to.be.empty;
  });

  it('should return an empty list if the topic is not found', async () => {
    const db = authedApp({ uid: USER });
    await insertArticles(db, [
      ARTICLE_1,
      ARTICLE_2,
      ARTICLE_3,
      ARTICLE_4,
      ARTICLE_5,
    ]);

    const articleIds = await listByTopic(TOPIC_1);
    expect(articleIds).to.be.empty;
  });
});
