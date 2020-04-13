import { expect, use as chaiUse } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
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

chaiUse(chaiAsPromised);

describe('User', () => {
  it('should be able to update own profile and read others profiles', async () => {
    await firebaseInit();
    expect(await listUserIds()).to.be.empty;

    // Signing in non-existent accounts throws.
    await expect(signIn(USER_EMAIL_1, USER_PASS_1)).to.be.rejected;
    expect(getAuth().currentUser).to.be.null;

    // Signing out out when signed out is no-op.
    await signOut();
    expect(getAuth().currentUser).to.be.null;

    // Accounts are ready to use right after creation.
    const uid1 = await createAccount(USER_EMAIL_1, USER_PASS_1);
    expect(await listUserIds()).to.have.members([uid1]);
    // createAccount auto signs in the new account.
    expect(getAuth().currentUser!.uid).to.equal(uid1);

    expect((await readProfile(uid1)).name).to.equal(USER_EMAIL_1);
    await updateProfile({ name: USER_NAME_1 });
    expect((await readProfile(uid1)).name).to.equal(USER_NAME_1);

    // Must sign out before creating accounts.
    await expect(createAccount(USER_EMAIL_2, USER_PASS_2)).to.be.rejected;
    expect(await listUserIds()).to.have.members([uid1]);

    await signOut();
    expect(getAuth().currentUser).to.be.null;
    await expect(updateProfile({ name: USER_NAME_2 })).to.be.rejected;
    expect((await readProfile(uid1)).name).to.equal(USER_NAME_1);

    // Email must be unique.
    await expect(createAccount(USER_EMAIL_1, USER_PASS_2)).to.be.rejected;
    expect(await listUserIds()).to.have.members([uid1]);

    const uid2 = await createAccount(USER_EMAIL_2, USER_PASS_2);
    expect(await listUserIds()).to.have.members([uid1, uid2]);
    expect(getAuth().currentUser!.uid).to.equal(uid2);

    // Must sign out before signing in.
    await expect(signIn(USER_EMAIL_1, USER_PASS_1)).to.be.rejected;

    await updateProfile({ name: USER_NAME_2 });
    expect((await readProfile(uid1)).name).to.equal(USER_NAME_1);
    expect((await readProfile(uid2)).name).to.equal(USER_NAME_2);

    // Must sign out before signing in.
    await expect(signIn(USER_EMAIL_1, USER_PASS_1)).to.be.rejected;
    expect(getAuth().currentUser!.uid).to.equal(uid2);
  });
});
