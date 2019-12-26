import N from '../../staticData/images/N.png';
import user001 from '../../staticData/images/user-profile001.png';

export const testState = () => ({
  loggedIn: {
    userInfo: {
      avatarImg: N,
      name: 'Nicolezing',
      userLinkSuffix: '@nicolezing',
      domain: './',
      member: true,
    },
  },
  ID001: {
    userInfo: {
      name: 'Lisa Armstrong',
      authorLink: './',
      avatarImg: user001,
      member: true,
      memberJoinedDate: '03/11/2019',
      authorDescription:
        'Web developer. Open source lover. Editor @ Bits and Pieces.',
      authorFollowers: 245,
      twitter: './',
      facebook: './',
      linkedIn: './',
    },
    articleInfo: {
      authorName: 'Lisa Armstrong',
      title:
        'Face Filters for Instagram and Snapshot Are the New Frontier of Surrealist Art',
      subtitle:
        'And one last warning about their stupidly popular little brother',
      articleLink: './',
      articleCover:
        'https://cdn-images-1.medium.com/max/2000/1*FK8eDjLTgFGHrEsPo14T4A.jpeg',
      focusPosition: [30, 50],
      creationDate: '11/08/2019 05:23:31',
      lastModified: '12/09/2019 15:45:01',
      wordCount: 1342,
      premium: true,
      bookmarked: false,
      claps: 4230,
      publicationInfo: {
        publicationLink: './',
        publication: 'OneZero',
        publicationLogo:
          'https://cdn-images-1.medium.com/fit/c/120/120/1*88Z0O0wD4KOrk6Y5EceZog.png',
        publicationFollowers: 1432,
        publicationDescription:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
    },
  },
  ID002: {
    userInfo: {
      authorLink: './',
      name: 'Lisa degsgee Armstrong',
      avatarImg: user001,
      member: false,
      // memberJoinedDate: '03/11/2019',
      authorDescription:
        'Web developer. Open source lover. Editor @ Bits and Pieces.',
      authorFollowers: 245,
      twitter: './',
      // facebook: './',
      linkedIn: './',
    },
    articleInfo: {
      authorName: 'Lisa degsgee Armstrong',
      title: 'Instagram and Snapshot Art',
      subtitle: 'And one last warning',
      articleLink: './',
      articleCover:
        'https://cdn-images-1.medium.com/max/2000/1*FK8eDjLTgFGHrEsPo14T4A.jpeg',
      // focusPosition: [30, 50],
      bookmarked: false,
      premium: false,
      creationDate: '11/08/2019 05:23:31',
      lastModified: '11/08/2019 05:23:31',
      wordCount: 1342,
      claps: 4230,
    },
  },
  newFromNetwork: {
    sourceLink: './',
    headerImg:
      'https://cdn-images-1.medium.com/proxy/1*K3oqw1Ed_6VMaql4HojuDg.png',
    articleList: ['ID001', 'ID001', 'ID002', 'ID001'],
  },
  popularOnMedium: {
    sourceLink: './',
    articleList: ['ID001', 'ID001', 'ID002', 'ID001'],
  },
  readingList: {
    sourceLink: './',
    headerImg:
      'https://cdn-images-1.medium.com/proxy/1*NECcaIHz7dKuAGfrlWYp5A.png',
    articleList: ['ID001', 'ID001', 'ID002', 'ID001'],
  },
  homeList: [
    'ID001',
    'ID001',
    'ID002',
    'ID001',
    'ID001',
    'ID001',
    'ID002',
    'ID001',
    'ID001',
    'ID001',
    'ID002',
    'ID001',
    'ID001',
    'ID001',
    'ID002',
    'ID001',
    'ID001',
    'ID001',
    'ID002',
    'ID001',
    'ID001',
    'ID001',
    'ID002',
    'ID001',
  ],
});
