import { expect } from 'chai';
import { authedApp, insertUser } from '../utils';
import { listFollowers } from '../../users';

const USER_1 = 'tester1';
const USER_2 = 'tester2';
const USER_3 = 'tester3';

describe('users.listFollowers', () => {
  it('should list all followers', async () => {
    const db = authedApp({ uid: USER_1 });
    await insertUser(db, { id: USER_1, followedUsers: [] });
    await insertUser(db, { id: USER_2, followedUsers: [USER_1] });
    await insertUser(db, { id: USER_3, followedUsers: [USER_1] });

    const followers = await listFollowers(USER_1);
    expect(followers).to.include.members([USER_2, USER_3]);
  });

  it('should an empty list if no follower', async () => {
    const db = authedApp({ uid: USER_1 });
    await insertUser(db, { id: USER_1, followedUsers: [] });

    const followers = await listFollowers(USER_1);
    expect(followers).to.be.empty;
  });
});
