import { expect, use as chaiUse } from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { v4 as uuidv4 } from 'uuid';
import { pick } from 'lodash';
import firebaseInit from '../..';
import { listUserIds, createAccount, signOut } from '../../users';
import {
  createDraft,
  listUserDrafts,
  read,
  ArticleState,
  publishDraft,
  listByAuthor,
  unpublish,
  update,
  remove,
} from '../../articles';

const USER_EMAIL_1 = `${uuidv4()}@tester.com`;
const USER_EMAIL_2 = `${uuidv4()}@tester.com`;
const USER_PASS_1 = 'strong password 1';
const USER_PASS_2 = 'strong password 2';

const ARTICLE_TITLE_1 = 'title 1';
const ARTICLE_CONTENT_1 = 'content 1';
const ARTICLE_TITLE_2 = 'title 2';
const ARTICLE_CONTENT_2 = 'content 2';
const ARTICLE_TITLE_3 = 'title 3';
const ARTICLE_CONTENT_3 = 'content 3';

chaiUse(chaiAsPromised);

describe('Article', () => {
  it('should be editable', async () => {
    await firebaseInit();
    expect(await listUserIds()).to.be.empty;

    const uid1 = await createAccount(USER_EMAIL_1, USER_PASS_1);
    expect(await listUserDrafts()).to.be.empty;
    const aid1 = await createDraft({
      title: ARTICLE_TITLE_1,
      content: ARTICLE_CONTENT_1,
    });
    expect(await listUserDrafts()).to.have.members([aid1]);
    expect(await listByAuthor(uid1)).to.be.empty;

    const expectedDraft1 = {
      title: ARTICLE_TITLE_1,
      content: ARTICLE_CONTENT_1,
      author: uid1,
      state: ArticleState.DRAFT,
    };
    const expectedArticle1 = {
      ...expectedDraft1,
      state: ArticleState.PUBLISHED,
    };
    expect(await read(aid1)).to.include(expectedDraft1);
    await publishDraft(aid1);
    expect(await read(aid1)).to.include(expectedArticle1);

    const aid2 = await createDraft({
      title: ARTICLE_TITLE_2,
      content: ARTICLE_CONTENT_2,
    });
    expect(await listUserDrafts()).to.have.members([aid2]);
    expect(await listByAuthor(uid1)).to.have.members([aid1]);

    const expectedDraft2 = {
      title: ARTICLE_TITLE_3,
      content: ARTICLE_CONTENT_3,
      author: uid1,
      state: ArticleState.DRAFT,
    };
    const expectedArticle2 = {
      ...expectedDraft2,
      state: ArticleState.PUBLISHED,
    };
    await update(aid2, { title: ARTICLE_TITLE_3, content: ARTICLE_CONTENT_3 });
    expect(await read(aid2)).to.include(expectedDraft2);
    await publishDraft(aid2);
    expect(await read(aid2)).to.include(expectedArticle2);
    await unpublish(aid2);
    // no-op
    await unpublish(aid2);
    expect(await read(aid2)).to.include(expectedDraft2);

    await remove(aid1);
    expect(await listUserDrafts()).to.have.members([aid2]);
    expect(await listByAuthor(uid1)).to.be.empty;
    await remove(aid2);
    expect(await listUserDrafts()).to.be.empty;
    expect(await listByAuthor(uid1)).to.be.empty;

    await expect(read(aid1)).to.be.rejected;
    await expect(update(aid1, { title: 'unused' })).to.be.rejected;
    await expect(publishDraft(aid1)).to.be.rejected;
    await expect(unpublish(aid1)).to.be.rejected;

    const aid3 = await createDraft({
      title: ARTICLE_TITLE_3,
      content: ARTICLE_CONTENT_3,
    });
    await publishDraft(aid3);
    await signOut();

    const expectedArticle3 = {
      title: ARTICLE_TITLE_3,
      content: ARTICLE_CONTENT_3,
      author: uid1,
      state: ArticleState.PUBLISHED,
    };
    expect(await read(aid3)).to.include(expectedArticle3);
    expect(await listByAuthor(uid1)).to.have.members([aid3]);

    await expect(update(aid3, { title: 'unused' })).to.be.rejected;
    await expect(unpublish(aid3)).to.be.rejected;

    await createAccount(USER_EMAIL_2, USER_PASS_2);

    expect(await read(aid3)).to.include(expectedArticle3);
    expect(await listByAuthor(uid1)).to.have.members([aid3]);

    await expect(update(aid3, { title: 'unused' })).to.be.rejected;
    await expect(unpublish(aid3)).to.be.rejected;
  });
});
