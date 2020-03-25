import N from '../../staticData/images/N.png';
import user001 from '../../staticData/images/user-profile001.png';
import Elemental from '../../staticData/images/Elemental.png';
import ElementalSmall from '../../staticData/images/ElementalSmall.png';

export const testState = () => ({
  users: {
    user001: {
      name: 'Lisa Armstrong',
      link: './',
      avatar: user001,
      member: true,
      memberJoinedDate: '03/11/2019',
      description:
        'Web developer. Open source lover. Editor @ Bits and Pieces.',
      followers: 245,
      twitter: './',
      facebook: './',
      linkedIn: './',
      bookmarked: ['ID001'],
    },
    user002: {
      link: './',
      name: 'Lisa degsgee Armstrong',
      avatar: user001,
      member: false,
      // memberJoinedDate: '03/11/2019',
      description:
        'Web developer. Open source lover. Editor @ Bits and Pieces.',
      followers: 245,
      twitter: './',
      // facebook: './',
      linkedIn: './',
      bookmarked: ['ID002'],
    },
    user003: {
      avatar: N,
      name: 'Nicolezing',
      userLinkSuffix: '@nicolezing',
      link: './',
      member: true,
      bookmarked: ['ID002'],
    },
  },
  loggedIn: 'user003',
  articles: {
    ID001: {
      author: 'user001',
      title:
        'Face Filters for Instagram and Snapshot Are the New Frontier of Surrealist Art',
      subtitle:
        'And one last warning about their stupidly popular little brother',
      link: './',
      cover: {
        focusPosition: [50, 50],
        coverSmall:
          'data:image/jpeg;base64,/9j/2wCEACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//gBKy0tPDU8dkFBdviljKX4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+P/AABEIACcAPAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/ANWlpMgDJ4FMMyDGSeenFMkkpKTI9aje5jQ4J5zigFqS0U0OGGQaR5VQZJ+g9aBeQ+kzUaTK44yPY07NC1B6CScpz071WlZWIjIwSeOePxq2KYYkznaKmUblRlYgjbceDx71XlBLAHO4Y6c469K0AgB4FI8SMcsoNNxuhRlyu5Tts5b0zT3/ANZk56YqyEA7UNGrDkZocbxsCnaXMVo+p464xU4oCKvQYp2KIR5VYU5czuPoooqhC0UUUAJQaWkNADTSZpTTaZJ//9k=',
        coverMiddle:
          'https://cdn-images-1.medium.com/max/2000/1*mmwGCGBxhypOOOKa98XjKQ.jpeg',
        coverLarge:
          'https://miro.medium.com/max/10136/1*mmwGCGBxhypOOOKa98XjKQ.jpeg',
        figcaption: 'Photo: Cavan Images/Getty Images',
        description: 'Female doctors examining petri dish in laboratory',
      },

      publication: 'publication001',

      creationDate: '11/08/2019 05:23:31',
      lastModified: '12/09/2019 15:45:01',
      wordCount: 1342,
      premium: true,
      claps: 4230,

      tags: [
        { name: 'Psychology', link: '' },
        { name: 'Attraction', link: '' },
        { name: 'World Domination', link: '' },
        { name: 'Neuroscience', link: '' },
        { name: 'Humor', link: '' },
      ],

      response: [],
    },
    ID002: {
      author: 'user002',
      title: 'A New Drug Could Change Food Allergy Treatment for Good',
      subtitle:
        'Palforzia, a new drug for peanut allergies, may open the door to a new era of food allergy treatments',
      link: './',
      cover: {
        coverLarge:
          'https://miro.medium.com/max/4800/1*s5o0ZXrtq6cs6LQQFFyqlQ.jpeg',
        coverMiddle:
          'https://cdn-images-1.medium.com/max/800/1*s5o0ZXrtq6cs6LQQFFyqlQ.jpeg',
        coverSmall:
          'https://miro.medium.com/max/60/1*s5o0ZXrtq6cs6LQQFFyqlQ.jpeg?q=20',
        figcaption: 'Photo: Cavan Images/Getty Images',
        description: 'Female doctors examining petri dish in laboratory',
        // focusPosition: [30, 50],
      },
      premium: false,
      creationDate: '11/08/2019 05:23:31',
      lastModified: '11/08/2019 05:23:31',
      wordCount: 1342,
      claps: 4230,
    },
  },

  publications: {
    publication001: {
      link: './',
      name: 'OneZero',
      logo:
        'https://cdn-images-1.medium.com/fit/c/120/120/1*88Z0O0wD4KOrk6Y5EceZog.png',
      followers: 1432,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  },
  Homepage: {
    newFromNetwork: {
      header: 'New from your network',
      sourceLink: './',
      headerImg:
        'https://cdn-images-1.medium.com/proxy/1*K3oqw1Ed_6VMaql4HojuDg.png',
      articleList: ['ID001', 'ID001', 'ID002', 'ID001'],
    },
    popularOnMedium: {
      header: 'Popular On Medium',
      sourceLink: './',
      articleList: ['ID001', 'ID001', 'ID002', 'ID001'],
    },
    readingList: {
      header: 'Reading list',
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
  },

  topicList: {
    elemental: {
      logo: Elemental,
      logoSmall: ElementalSmall,
      slogan: 'by Medium',
      link: './elemental',
      latest: './',
      about: './',
      nav: [
        { navItem: 'body', itemLink: './' },
        { navItem: 'brain', itemLink: './' },
        { navItem: 'food', itemLink: './' },
        { navItem: 'life', itemLink: './' },
        { navItem: 'trends', itemLink: './' },
        { navItem: 'guide to the flu', itemLink: './' },
      ],
      socialMedia: { twitter: './' },
      heroList: [
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
        'ID001',
        'ID002',
        'ID001',
        'ID001',
        'ID001',
        'ID002',
        'ID001',
        'ID001',
        'ID002',
        'ID001',
        'ID001',
        'ID001',
        'ID002',
        'ID001',
        'ID001',
        'ID002',
        'ID001',
        'ID001',
        'ID001',
        'ID002',
      ],
      pageArrangement: {
        // for each smallest arr, arr[0] is hero per row, arr[1] is total number of heros;
        default: [[1, 1]],
        Latest: [[3, 6]],
        'Exercise is Medicine': [[1, 1], [3, 6], [1, 1], [3, 3], [2, 2]],
        'The Nuance': [[3, 3], [2, 2]],
        MORE: [[1, 1], [3, 18]],
      },
    },
  },
});
