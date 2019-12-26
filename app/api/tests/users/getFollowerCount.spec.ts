import { expect } from 'chai';
import { authedApp, insertUser } from '../utils';
import { getFollowerCount } from '../../users';

const USER_1 = 'tester1';
const USER_2 = 'tester2';
const USER_3 = 'tester3';

describe('users.getFollowerCount', () => {
  it('should count followers', async () => {
    const db = authedApp({ uid: USER_1 });
    await insertUser(db, { id: USER_1, followedUsers: [] });
    await insertUser(db, { id: USER_2, followedUsers: [USER_1] });
    await insertUser(db, { id: USER_3, followedUsers: [USER_1] });

    const followerCount = await getFollowerCount(USER_1);
    expect(followerCount).to.equal(2);
  });

  it('should handle zero follower case', async () => {
    const db = authedApp({ uid: USER_1 });
    await insertUser(db, { id: USER_1, followedUsers: [] });

    const followerCount = await getFollowerCount(USER_1);
    expect(followerCount).to.equal(0);
  });
});
