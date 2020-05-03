import { expect } from 'chai';
import { omit } from 'lodash';
import { clearForArticle } from '../../clapping';
import { ERROR_NOT_SIGNED_IN } from '../../users';
import { authedApp, getArticleClapping, insertArticleClapping } from '../utils';
import { getTime } from '../../utils';

const ARTICLE_ID = 'article 1';
const USER_1 = 'user 1';
const USER_2 = 'user 2';

describe('claps.clearForArticle', () => {
  it('should do nothing if the user has never clapped for this article', async () => {
    const db = authedApp({ uid: USER_1 });
    const now = getTime();
    const clappings = {
      [USER_2]: {
        lastClappedAt: now,
        clappingNumber: 3,
      },
    };
    await insertArticleClapping(db, ARTICLE_ID, clappings);

    await clearForArticle(ARTICLE_ID);

    expect(await getArticleClapping(db, ARTICLE_ID)).to.eql(clappings);
  });

  it('should clear all clapping if the user has clapped for this article', async () => {
    const db = authedApp({ uid: USER_1 });
    const now = getTime();
    const clappings = {
      [USER_1]: {
        lastClappedAt: now,
        clappingNumber: 2,
      },
      [USER_2]: {
        lastClappedAt: now,
        clappingNumber: 3,
      },
    };
    await insertArticleClapping(db, ARTICLE_ID, clappings);

    await clearForArticle(ARTICLE_ID);

    expect(await getArticleClapping(db, ARTICLE_ID)).to.eql(
      omit(clappings, USER_1),
    );
  });

  it('should throw if the user is not logged in', async () => {
    await expect(clearForArticle(ARTICLE_ID)).to.be.rejectedWith(
      ERROR_NOT_SIGNED_IN,
    );
  });
});
