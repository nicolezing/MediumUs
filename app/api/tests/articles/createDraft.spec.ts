import { expect } from 'chai';
import { authedApp, freezeTime, getArticle, listArticleIds } from '../utils';
import { createDraft, ArticleState } from '../../articles';

const ARTICLE_TITLE = 'title';
const ARTICLE_SUBTITLE = 'subtitle';
const ARTICLE_CONTENT = 'content';
const ARTICLE_COVER = new URL('http://example.com');
const USER = 'tester';

describe('articles.createDraft', () => {
  it('should create only requested draft', async () => {
    const db = authedApp({ uid: USER });
    const [articleId1, articleId2] = await Promise.all([
      createDraft({
        title: ARTICLE_TITLE,
        content: ARTICLE_CONTENT,
      }),
      createDraft({
        title: ARTICLE_TITLE,
        content: ARTICLE_CONTENT,
      }),
    ]);

    const articleIds = await listArticleIds(db);
    expect(articleIds).to.include.members([articleId1, articleId2]);
  });

  it('should forward article data', async () => {
    const db = authedApp({ uid: USER });
    const articleId = await createDraft({
      title: ARTICLE_TITLE,
      subtitle: ARTICLE_SUBTITLE,
      content: ARTICLE_CONTENT,
      cover: ARTICLE_COVER,
    });

    const article = await getArticle(db, articleId);
    expect(article.title).to.equal(ARTICLE_TITLE);
    expect(article.subtitle).to.equal(ARTICLE_SUBTITLE);
    expect(article.content).to.equal(ARTICLE_CONTENT);
    expect(article.cover).to.equal(ARTICLE_COVER.href);
  });

  it('should generate metadata', async () => {
    const { now, restore } = freezeTime();
    const db = authedApp({ uid: USER });
    const articleId = await createDraft({
      title: ARTICLE_TITLE,
      content: ARTICLE_CONTENT,
    });

    const article = await getArticle(db, articleId);
    expect(article.author).to.equal(USER);
    expect(article.state).to.equal(ArticleState.DRAFT);
    expect(article.createdAt).to.equalDate(now);
    expect(article.updatedAt).to.equalDate(now);
    restore();
  });
});
