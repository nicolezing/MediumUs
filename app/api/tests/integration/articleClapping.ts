import { expect, use as chaiUse } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { v4 as uuidv4 } from 'uuid';
import { omit } from 'lodash';
import firebaseInit from '../..';
import { createAccount, signOut, listUserIds } from '../../users';
import { createDraft, publishDraft } from '../../articles';
import {
  readByArticle,
  increaseForArticle,
  clearForArticle,
  MAX_CLAPPING_PER_USER,
} from '../../clapping';

const USER_EMAIL_1 = `${uuidv4()}@tester.com`;
const USER_EMAIL_2 = `${uuidv4()}@tester.com`;
const USER_EMAIL_3 = `${uuidv4()}@tester.com`;
const USER_PASS_1 = 'strong password 1';
const USER_PASS_2 = 'strong password 2';
const USER_PASS_3 = 'strong password 3';

chaiUse(chaiAsPromised);

describe('Clapping', () => {
  it('should work', async () => {
    await firebaseInit();
    expect(await listUserIds()).to.be.empty;

    const uid1 = await createAccount(USER_EMAIL_1, USER_PASS_1);
    const aid1 = await createDraft({ title: 'unused', content: 'unused' });
    await publishDraft(aid1);

    await signOut();
    const uid2 = await createAccount(USER_EMAIL_2, USER_PASS_2);

    expect(await readByArticle(aid1)).to.be.empty;

    await increaseForArticle(aid1);
    expect(
      (await readByArticle(aid1)).map(c => omit(c, 'lastClappedAt')),
    ).to.have.deep.members([{ uid: uid2, clappingNumber: 1 }]);

    await signOut();
    const uid3 = await createAccount(USER_EMAIL_3, USER_PASS_3);
    for (let i = 0; i < MAX_CLAPPING_PER_USER + 1; i++) {
      await increaseForArticle(aid1);
    }
    expect(
      (await readByArticle(aid1)).map(c => omit(c, 'lastClappedAt')),
    ).to.have.deep.members([
      { uid: uid2, clappingNumber: 1 },
      { uid: uid3, clappingNumber: MAX_CLAPPING_PER_USER },
    ]);

    await clearForArticle(aid1);
    expect(
      (await readByArticle(aid1)).map(c => omit(c, 'lastClappedAt')),
    ).to.have.deep.members([{ uid: uid2, clappingNumber: 1 }]);

    // no-op
    await clearForArticle(aid1);
    expect(
      (await readByArticle(aid1)).map(c => omit(c, 'lastClappedAt')),
    ).to.have.deep.members([{ uid: uid2, clappingNumber: 1 }]);
  });
});
