import { expect } from 'chai';
import { increaseForArticle, MAX_CLAPPING_PER_USER } from '../../clapping';
import { ERROR_NOT_SIGNED_IN } from '../../users';
import { authedApp, listClappedArticles, getArticleClapping } from '../utils';

const ARTICLE_ID = 'article 1';
const USER = 'user 1';

describe('claps.increaseForArticle', () => {
  /*
  it('should work for a user who has never clapped for this article', async () => {
    const db = authedApp({ uid: USER });

    await increaseForArticle(ARTICLE_ID);

    expect(await listClappedArticles(db)).to.equal([ARTICLE_ID]);
    expect(await getArticleClapping(db, ARTICLE_ID)).to.eql({ [USER]: 1 });
  });

  it('should work for a user who has clapped for this article', async () => {
    const db = authedApp({ uid: USER });

    await increaseForArticle(ARTICLE_ID);
    await increaseForArticle(ARTICLE_ID);

    expect(await listClappedArticles(db)).to.equal([ARTICLE_ID]);
    expect(await getArticleClapping(db, ARTICLE_ID)).to.eql({ [USER]: 2 });
  });

  it('should not increase beyond clapping cap', async () => {
    const db = authedApp({ uid: USER });

    for (let i = 0; i < MAX_CLAPPING_PER_USER + 1; i++) {
      await increaseForArticle(ARTICLE_ID);
    }

    expect(await listClappedArticles(db)).to.equal([ARTICLE_ID]);
    expect(await getArticleClapping(db, ARTICLE_ID)).to.eql({
      [USER]: MAX_CLAPPING_PER_USER,
    });
  });
  */

  it('should throw if the user is not logged in', async () => {
    await expect(increaseForArticle(ARTICLE_ID)).to.be.rejectedWith(
      ERROR_NOT_SIGNED_IN,
    );
  });
});
