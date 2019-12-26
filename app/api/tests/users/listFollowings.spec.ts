import { expect } from 'chai';
import { authedApp, insertUser } from '../utils';
import { listFollowings } from '../../users';

const USER_1 = 'tester1';
const USER_2 = 'tester2';
const USER_3 = 'tester3';

describe('users.listFollowings', () => {
  it('should list all followed users', async () => {
    const db = authedApp({ uid: USER_1 });
    await insertUser(db, { id: USER_1, followedUsers: [USER_2, USER_3] });

    const followings = await listFollowings(USER_1);
    expect(followings).to.include.members([USER_2, USER_3]);
  });

  it("should return empty list if hasn't followed anyone", async () => {
    const db = authedApp({ uid: USER_1 });
    await insertUser(db, { id: USER_1, followedUsers: [] });

    const followings = await listFollowings(USER_1);
    expect(followings).to.be.empty;
  });
});
