import { expect } from 'chai';
import { authedApp, insertUser, getUser, freezeTime } from '../utils';
import { unfollow } from '../../users';

const USER_1 = 'tester1';
const USER_2 = 'tester2';

describe('users.unfollow', () => {
  it('should unfollow users', async () => {
    const db = authedApp({ uid: USER_1 });
    await insertUser(db, { id: USER_1, followedUsers: [USER_2] });

    const { now, restore } = freezeTime();
    await unfollow(USER_2);
    restore();

    const user = await getUser(db, USER_1);
    expect(user.followedUsers).to.be.empty;
    expect(user.updatedAt).to.equalDate(now);
  });

  it('should do nothing if the user is already unfollowed', async () => {
    const db = authedApp({ uid: USER_1 });
    await insertUser(db, { id: USER_1, followedUsers: [USER_2] });

    const { now: t1, restore } = freezeTime();
    await unfollow(USER_2);
    restore();
    await unfollow(USER_2);

    const user = await getUser(db, USER_1);
    expect(user.followedUsers).to.be.empty;
    expect(user.updatedAt).to.equalDate(t1);
  });
});
