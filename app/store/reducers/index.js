import createReducer from '../../reducers';

const testState = () => ({
  userInfo: {
    userAvatar: '../../../staticData/images/N.png',
    username: 'Nicolezing',
    userLinkSuffix: '@nicolezing',
    domain: './',
  },
  authorInfo: {
    authorLink: './',
    authorName: 'Lisa Armstrong',
    avatarImg: '../../../staticData/images/user-profile001.png',
    member: true,
    memberJoinedDate: '03/11/2019',

    premium: true,
    publicationLink: './',
    publication: 'OneZero',
    publicationLogo:
      'https://cdn-images-1.medium.com/fit/c/120/120/1*88Z0O0wD4KOrk6Y5EceZog.png',
    creationDate: '11/08/2019 05:23:31',
    lastModified: '12/09/2019 15:45:01',
    wordCount: 1342,
    authorDescription:
      'Web developer. Open source lover. Editor @ Bits and Pieces.',
    authorFollowers: 245,

    publicationFollowers: 1432,
    publicationDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  articleInfo: {
    title:
      'Face Filters for Instagram and Snapshot Are the New Frontier of Surrealist Art',
    subtitle:
      'And one last warning about their stupidly popular little brother',
    articleLink: './',
    articleCover:
      'https://cdn-images-1.medium.com/max/2000/1*FK8eDjLTgFGHrEsPo14T4A.jpeg',
    focusPosition: [30, 50],
    bookmarked: false,
    twitter: './',
    facebook: './',
    linkedIn: './',
    claps: 4230,
  },
});

export default createReducer({
  testState,
});
// export default testState;
