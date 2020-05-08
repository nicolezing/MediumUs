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
      bookmarked: ['id001'],
      following: ['user003'],
    },
    user002: {
      link: './',
      name: 'Lisa degsgee Armstrong',
      avatar: user001,
      member: false,
      // memberJoinedDate: '03/11/2019',
      description:
        'Web developer. Open source lover. Editor @ Bits and Pieces.',
      followers: 5,
      twitter: './',
      // facebook: './',
      linkedIn: './',
      bookmarked: ['id002'],
      following: ['user001'],
    },
    user003: {
      avatar: N,
      name: 'Nicolezing',
      userLinkSuffix: '@nicolezing',
      link: './',
      member: true,
      bookmarked: ['id002'],
      authorFollowing: [],
      publicationFollowing: [],
      // TODO add free viewed article list
    },
  },
  loggedIn: 'user003',
  articlePage: {
    avatarRefContainer: {},
    imageRefContainer: {},
  },
  theme: 'purple',
  articles: {
    id001: {
      author: 'user001',
      title:
        'Face Filters for Instagram and Snapshot Are the New Frontier of Surrealist Art',
      subtitle:
        'And one last warning about their stupidly popular little brother',
      link: '/publication/elemental/id001',
      focusPosition: [50, 50],
      cover:
        'https://cdn-images-1.medium.com/max/2000/1*mmwGCGBxhypOOOKa98XjKQ.jpeg',

      // "data-position": around | normal | wide | fullWidth
      content: `
  # id001
  When I was young, I always hated being named Dale. This is mostly because my primary image of what Dales looked like was shaped by Dale Gribble from King of the Hill, and also *Dale Earnhardt Jr.*, the **NASCAR driver**.

  ##  header two

  ### header three

  ![Female doctors examining petri dish in laboratory](https://miro.medium.com/max/10136/1*mmwGCGBxhypOOOKa98XjKQ.jpeg {"caption": "Photo: [Cavan Images/Getty Images](./)", "data-position": "wide", "data-preLoad":"data:image/jpeg;base64,/9j/2wCEACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//gBKy0tPDU8dkFBdviljKX4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+P/AABEIACcAPAMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/ANWlpMgDJ4FMMyDGSeenFMkkpKTI9aje5jQ4J5zigFqS0U0OGGQaR5VQZJ+g9aBeQ+kzUaTK44yPY07NC1B6CScpz071WlZWIjIwSeOePxq2KYYkznaKmUblRlYgjbceDx71XlBLAHO4Y6c469K0AgB4FI8SMcsoNNxuhRlyu5Tts5b0zT3/ANZk56YqyEA7UNGrDkZocbxsCnaXMVo+p464xU4oCKvQYp2KIR5VYU5czuPoooqhC0UUUAJQaWkNADTSZpTTaZJ//9k="}) 
 
  Vix posse percipit in. His at illum soleat verear, at eos molestie comprehensam. Duo quem iusto sanctus ne, consetetur intellegam ne vis. 
  
  > blockquote

  ***

  Lorem ipsum dolor sit amet, iuvaret sensibus percipitur eu mel. Voluptua dissentiunt eos cu. Sit mandamus incorrupte appellantur ad, elit eloquentiam cu mei, ancillae democritum in sit. 

  >> double blockquote 
  
  Probo dolor putant ei his.Lorem ipsum dolor sit amet, iuvaret sensibus percipitur eu mel. Voluptua dissentiunt eos cu. Sit mandamus incorrupte appellantur ad, elit eloquentiam cu mei, ancillae democritum in sit. Vix posse percipit in. His at illum soleat verear, at eos molestie comprehensam. Duo quem iusto sanctus ne, consetetur intellegam ne vis. Probo dolor putant ei his.
  
 !(https://www.youtube.com/watch?v=8TQIvdFl4aU)
  `,
      column: 'test',

      publication: 'elemental',
      premium: true,
      creationDate: '11/08/2019 05:23:31',
      lastModified: '12/09/2019 15:45:01',
      wordCount: 1342,
      claps: 4230,

      tags: [
        { name: 'Psychology', link: '' },
        { name: 'Attraction', link: '' },
        { name: 'World Domination', link: '' },
        { name: 'Neuroscience', link: '' },
        { name: 'Humor', link: '' },
      ],

      responses: [''],
    },
    id002: {
      author: 'user002',
      title: 'A New Drug Could Change Food Allergy Treatment for Good',
      subtitle:
        'Palforzia, a new drug for peanut allergies, may open the door to a new era of food allergy treatments',
      link: '/publication/elemental/id002',
      cover:
        'https://cdn-images-1.medium.com/max/800/1*s5o0ZXrtq6cs6LQQFFyqlQ.jpeg',
      focusPosition: [30, 50],
      content: `
![Female doctors examining petri dish in laboratory](https://miro.medium.com/max/4800/1*s5o0ZXrtq6cs6LQQFFyqlQ.jpeg {"caption": "Photo: [Cavan Images/Getty Images](./)", "data-position": "fullWidth", "data-preLoad":"https://miro.medium.com/max/60/1*s5o0ZXrtq6cs6LQQFFyqlQ.jpeg?q=20"}) 

# id002

When I was young, I always hated being named Dale. This is mostly because my primary image of what Dales looked like was shaped by Dale Gribble from King of the Hill, and also *Dale Earnhardt Jr.*, the **NASCAR driver**.

##  header two

### header three


Vix posse percipit in. His at illum soleat verear, at eos molestie comprehensam. Duo quem iusto sanctus ne, consetetur intellegam ne vis. 

> blockquote

***

Lorem ipsum dolor sit amet, iuvaret sensibus percipitur eu mel. Voluptua dissentiunt eos cu. Sit mandamus incorrupte appellantur ad, elit eloquentiam cu mei, ancillae democritum in sit. 

>> double blockquote 

Probo dolor putant ei his.Lorem ipsum dolor sit amet, iuvaret sensibus percipitur eu mel. Voluptua dissentiunt eos cu. Sit mandamus incorrupte appellantur ad, elit eloquentiam cu mei, ancillae democritum in sit. Vix posse percipit in. His at illum soleat verear, at eos molestie comprehensam. Duo quem iusto sanctus ne, consetetur intellegam ne vis. Probo dolor putant ei his.

      `,

      publication: 'elemental',
      premium: false,
      creationDate: '11/08/2019 05:23:31',
      lastModified: '11/08/2019 05:23:31',
      wordCount: 1342,
      claps: 4230,

      tags: [
        { name: 'Test1', link: '' },
        { name: 'Gwjbrwe', link: '' },
        { name: 'Wwertrw Dfgeger', link: '' },
      ],

      responses: ['', ''],
    },
  },

  publications: {
    'one-zero': {
      link: '/publication/one-zero',
      name: 'OneZero',
      logo:
        'https://cdn-images-1.medium.com/fit/c/120/120/1*88Z0O0wD4KOrk6Y5EceZog.png',
      followers: 1432,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    elemental: {
      name: 'Elemental',
      icon:
        'https://miro.medium.com/fit/c/160/160/1*GhG8ZeoE0TGfCHwL9SCrfw.png',
      logo: Elemental,
      logoSmall: ElementalSmall,
      slogan: 'by Medium',
      description: 'Health Articles and News to Live a Healthy Lifestyle',
      link: '/publication/elemental',
      followers: 5324,
      theme: 'pink',
      navbar: [
        { title: 'body', link: '/publication/elemental/body' },
        { title: 'brain', link: './' },
        { title: 'food', link: './' },
        { title: 'life', link: './' },
        { title: 'trends', link: './' },
        { title: 'guide to the flu', link: './' },
      ],
      socialMedia: [
        { media: 'twitter', link: 'https://twitter.com/elemental' },
      ],
      // TODO will change to articles only in this publication
      heroList: [
        'id001',
        'id001',
        'id002',
        'id001',
        'id001',
        'id001',
        'id002',
        'id001',
        'id001',
        'id001',
        'id002',
        'id001',
        'id001',
        'id001',
        'id002',
        'id001',
        'id001',
        'id001',
        'id002',
        'id001',
        'id001',
        'id001',
        'id002',
        'id001',
        'id001',
        'id002',
        'id001',
        'id001',
        'id001',
        'id002',
        'id001',
        'id001',
        'id002',
        'id001',
        'id001',
        'id001',
        'id002',
        'id001',
        'id001',
        'id002',
        'id001',
        'id001',
        'id001',
        'id002',
      ],
      pageArrangements: [
        // each arr item means the number of heros per row;
        { title: '', arrangement: [1] },
        { title: 'Latest', arrangement: [3, 3] },
        { title: 'Exercise is Medicine', arrangement: [1, 3, 3, 1, 3, 2] },
        { title: 'The Nuance', arrangement: [3, 2] },
        { title: 'MORE', arrangement: [1, 3, 3, 3, 3, 3, 3] },
      ],
      footer: [
        { title: 'About Elemental', link: './' },
        { title: 'Latest Stories', link: './' },
        { title: 'Archive', link: './' },
      ],
    },
  },

  topicList: {},
});
