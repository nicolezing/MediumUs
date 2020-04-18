import { expect, use as chaiUse } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { v4 as uuidv4 } from 'uuid';
import firebaseInit from '../..';
import { listUserIds, createAccount, signOut } from '../../users';
import {
  createDraft,
  publishDraft,
  listBookmarked,
  listByTag,
  bookmark,
  editTags,
  unbookmark,
} from '../../articles';

const USER_EMAIL_1 = `${uuidv4()}@tester.com`;
const USER_EMAIL_2 = `${uuidv4()}@tester.com`;
const USER_PASS_1 = 'strong password 1';
const USER_PASS_2 = 'strong password 2';

const TAG_1 = 'tag 1';
const TAG_2 = 'tag 2';

chaiUse(chaiAsPromised);

describe('Article', () => {
  it('should allow relation editing', async () => {
    await firebaseInit();
    expect(await listUserIds()).to.be.empty;

    const uid1 = await createAccount(USER_EMAIL_1, USER_PASS_1);
    const aid1 = await createDraft({ title: 'unused', content: 'unused' });
    await publishDraft(aid1);
    const aid2 = await createDraft({ title: 'unused', content: 'unused' });
    await publishDraft(aid2);

    expect(await listBookmarked(uid1)).to.be.empty;
    expect(await listBookmarked('user absent')).to.be.empty;
    expect(await listByTag(TAG_1)).to.be.empty;
    expect(await listByTag(TAG_2)).to.be.empty;

    await bookmark(aid1);
    // no-op
    await bookmark(aid1);
    expect(await listBookmarked(uid1)).to.have.members([aid1]);

    await editTags(aid1, [TAG_1], [TAG_2]);
    // no-op
    await editTags(aid1, [TAG_1], []);
    await editTags(aid2, [], [TAG_1, TAG_2]);
    expect(await listByTag(TAG_1)).to.have.members([aid1]);
    expect(await listByTag(TAG_2)).to.be.empty;

    await unbookmark(aid1);
    // no-op
    await unbookmark(aid2);
    await bookmark(aid2);
    expect(await listBookmarked(uid1)).to.have.members([aid2]);

    await signOut();
    const uid2 = await createAccount(USER_EMAIL_2, USER_PASS_2);

    await bookmark(aid1);
    await bookmark(aid2);
    expect(await listBookmarked(uid1)).to.have.members([aid2]);
    expect(await listBookmarked(uid2)).to.have.members([aid1, aid2]);

    await unbookmark(aid2);
    expect(await listBookmarked(uid1)).to.have.members([aid2]);
    expect(await listBookmarked(uid2)).to.have.members([aid1]);

    await expect(editTags(aid1, [TAG_2], [TAG_1])).to.be.rejected;
    expect(await listByTag(TAG_1)).to.have.members([aid1]);
    expect(await listByTag(TAG_2)).to.be.empty;

    await signOut();
    await expect(editTags(aid1, [TAG_2], [TAG_1])).to.be.rejected;
    expect(await listByTag(TAG_1)).to.have.members([aid1]);
    expect(await listByTag(TAG_2)).to.be.empty;
  });
});
