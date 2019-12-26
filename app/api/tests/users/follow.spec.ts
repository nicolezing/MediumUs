import { expect } from 'chai';
import { authedApp, insertUser, getUser, freezeTime } from '../utils';
import { follow } from '../../users';

const USER_1 = 'tester1';
const USER_2 = 'tester2';

describe('users.follow', () => {
  it('should follow users', async () => {
    const db = authedApp({ uid: USER_1 });
    await insertUser(db, { id: USER_1, followedUsers: [] });

    const { now, restore } = freezeTime();
    await follow(USER_2);
    restore();

    const user = await getUser(db, USER_1);
    expect(user.followedUsers).to.include.members([USER_2]);
    expect(user.updatedAt).to.equalDate(now);
  });

  it('should do nothing if the user is already followed', async () => {
    const db = authedApp({ uid: USER_1 });
    await insertUser(db, { id: USER_1, followedUsers: [] });

    const { now: t1, restore } = freezeTime();
    await follow(USER_2);
    restore();
    await follow(USER_2);

    const user = await getUser(db, USER_1);
    expect(user.followedUsers).to.include.members([USER_2]);
    expect(user.updatedAt).to.equalDate(t1);
  });
});
