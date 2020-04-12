import { expect, config as chaiConfig } from 'chai';
import { v4 as uuidv4 } from 'uuid';
import firebaseInit, { getAuth } from '../..';
import {
  createAccount,
  signIn,
  signOut,
  listUserIds,
  readProfile,
  updateProfile,
} from '../../users';

const USER_EMAIL_1 = `${uuidv4()}@tester.com`;
const USER_EMAIL_2 = `${uuidv4()}@tester.com`;
const USER_PASS_1 = 'strong password 1';
const USER_PASS_2 = 'strong password 2';
const USER_NAME_1 = 'good name 1';
const USER_NAME_2 = 'good name 2';

describe('User', () => {
  it('should be able to update own profile and read others profiles', async () => {
    await firebaseInit();
    expect(await listUserIds()).to.be.empty;

    // Signing in non-existent accounts throws.
    expect(async () => await signIn(USER_EMAIL_1, USER_PASS_1)).to.throw;
    expect(getAuth().currentUser).to.be.null;

    // Signing out out when signed out is no-op.
    await signOut();
    expect(getAuth().currentUser).to.be.null;

    // Accounts are ready to use right after creation.
    const uid1 = await createAccount(USER_EMAIL_1, USER_PASS_1);
    expect(await listUserIds()).to.have.members([uid1]);
    await signIn(USER_EMAIL_1, USER_PASS_1);
    expect(getAuth().currentUser!.uid).to.equal(uid1);

    expect((await readProfile(uid1)).name).to.equal(USER_EMAIL_1);
    await updateProfile({ name: USER_NAME_1 });
    expect((await readProfile(uid1)).name).to.equal(USER_NAME_1);

    // Must sign out before creating accounts.
    expect(async () => await createAccount(USER_EMAIL_2, USER_PASS_2)).to.throw;
    expect(await listUserIds()).to.have.members([uid1]);

    await signOut();
    expect(getAuth().currentUser).to.be.null;
    expect(async () => await updateProfile({ name: USER_NAME_2 })).to.throw;
    expect((await readProfile(uid1)).name).to.equal(USER_NAME_1);

    // Email must be unique.
    expect(async () => await createAccount(USER_EMAIL_1, USER_PASS_2)).to.throw;
    expect(await listUserIds()).to.have.members([uid1]);

    const uid2 = await createAccount(USER_EMAIL_2, USER_PASS_2);
    expect(await listUserIds()).to.have.members([uid1, uid2]);
    await signIn(USER_EMAIL_2, USER_PASS_2);
    expect(getAuth().currentUser!.uid).to.equal(uid2);

    await updateProfile({ name: USER_NAME_2 });
    expect((await readProfile(uid1)).name).to.equal(USER_NAME_1);
    expect((await readProfile(uid2)).name).to.equal(USER_NAME_2);

    // Must sign out before signing in.
    expect(async () => await signIn(USER_EMAIL_1, USER_PASS_1)).to.throw;
    expect(getAuth().currentUser!.uid).to.equal(uid2);
  });
});
