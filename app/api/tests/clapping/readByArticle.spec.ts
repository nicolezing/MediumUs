import { expect } from 'chai';
import { toPairs } from 'lodash';
import { clearForArticle, readByArticle } from '../../clapping';
import { authedApp, insertArticleClapping } from '../utils';
import { getTime } from '../../utils';

const ARTICLE_ID = 'article 1';
const USER_1 = 'user 1';
const USER_2 = 'user 2';

describe('claps.readByArticle', () => {
  it('should return empty list if no one has clapped for this article', async () => {
    const db = authedApp({ uid: USER_1 });
    const now = getTime();
    const clappings = {
      [USER_1]: {
        lastClappedAt: now,
        clappingNumber: 3,
      },
    };
    await insertArticleClapping(db, ARTICLE_ID, clappings);
    await clearForArticle(ARTICLE_ID);

    expect(await readByArticle(ARTICLE_ID)).to.be.empty;
  });

  it('should return all clapping data entries for the article', async () => {
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

    const actual = await readByArticle(ARTICLE_ID);
    console.log('actual', actual);
    console.log(
      'expected',
      toPairs(clappings).map(([uid, data]) => ({ ...data, uid })),
    );

    expect(actual).to.have.deep.members(
      toPairs(clappings).map(([uid, data]) => ({ ...data, uid })),
    );
  });

  it('should return empty list if the article does not exist', async () => {
    const db = authedApp({ uid: USER_1 });

    expect(await readByArticle(ARTICLE_ID)).to.be.empty;
  });
});
