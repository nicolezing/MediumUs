import { expect, use as chaiUse } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { v4 as uuidv4 } from 'uuid';
import firebaseInit from '../..';
import {
  listUserIds,
  createAccount,
  getFollowerCount,
  listFollowers,
  listFollowings,
  follow,
  unfollow,
  signIn,
  signOut,
} from '../../users';

const USER_EMAIL_1 = `${uuidv4()}@tester.com`;
const USER_EMAIL_2 = `${uuidv4()}@tester.com`;
const USER_EMAIL_3 = `${uuidv4()}@tester.com`;
const USER_PASS_1 = 'strong password 1';
const USER_PASS_2 = 'strong password 2';
const USER_PASS_3 = 'strong password 3';

chaiUse(chaiAsPromised);

describe('User', () => {
  it('should be able to follow other users', async () => {
    await firebaseInit();
    expect(await listUserIds()).to.be.empty;

    const uid1 = await createAccount(USER_EMAIL_1, USER_PASS_1);
    await signOut();
    const uid2 = await createAccount(USER_EMAIL_2, USER_PASS_2);
    await signOut();
    const uid3 = await createAccount(USER_EMAIL_3, USER_PASS_3);
    await signOut();

    expect(() => follow(uid2)).to.throw;
    expect(() => unfollow(uid3)).to.throw;

    expect(await getFollowerCount(uid1)).to.equal(0);
    expect(await listFollowers(uid2)).to.be.empty;
    expect(await listFollowings(uid1)).to.be.empty;

    await signIn(USER_EMAIL_1, USER_PASS_1);
    await follow(uid2);
    await expect(follow(uid1)).to.be.rejected;

    // no-op
    await follow(uid2);
    await unfollow(uid1);
    await unfollow(uid3);

    expect(await getFollowerCount(uid1)).to.equal(0);
    expect(await getFollowerCount(uid2)).to.equal(1);
    expect(await getFollowerCount(uid3)).to.equal(0);
    expect(await listFollowers(uid2)).to.have.members([uid1]);
    expect(await listFollowings(uid1)).to.have.members([uid2]);

    await signOut();
    await signIn(USER_EMAIL_2, USER_PASS_2);
    await follow(uid1);
    await follow(uid3);

    expect(await getFollowerCount(uid1)).to.equal(1);
    expect(await getFollowerCount(uid2)).to.equal(1);
    expect(await getFollowerCount(uid3)).to.equal(1);
    expect(await listFollowers(uid1)).to.have.members([uid2]);
    expect(await listFollowers(uid3)).to.have.members([uid2]);
    expect(await listFollowings(uid2)).to.have.members([uid1, uid3]);

    await unfollow(uid1);
    await unfollow(uid3);

    expect(await getFollowerCount(uid1)).to.equal(0);
    expect(await getFollowerCount(uid2)).to.equal(1);
    expect(await getFollowerCount(uid3)).to.equal(0);
    expect(await listFollowers(uid2)).to.have.members([uid1]);
    expect(await listFollowings(uid1)).to.have.members([uid2]);
  });
});
