/* eslint-disable default-case */
import produce from 'immer';
import { LOAD_MORE_HOMELIST } from '../../actions';
import { loadMoreHomelist } from './loadMoreHomelist';

const initialState = {
  mainHeros: ['id001', 'id001', 'id002', 'id001', 'id001'],
  newFromNetwork: {
    header: 'New from your network',
    sourceLink: './',
    headerImg:
      'https://cdn-images-1.medium.com/proxy/1*K3oqw1Ed_6VMaql4HojuDg.png',
    articleList: ['id001', 'id001', 'id002', 'id001'],
  },
  popularOnMedium: {
    header: 'Popular On Medium',
    sourceLink: './',
    articleList: ['id001', 'id001', 'id002', 'id001'],
  },
  readingList: {
    header: 'Reading list',
    sourceLink: './',
    headerImg:
      'https://cdn-images-1.medium.com/proxy/1*NECcaIHz7dKuAGfrlWYp5A.png',
    articleList: ['id001', 'id001', 'id002', 'id001'],
  },

  homeList: [
    { source: '', id: 'id001' },
    { source: 'popular on medium', id: 'id002' },
    { source: 'based on your reading history', id: 'id001' },
    { source: 'based on your reading history', id: 'id001' },
    { source: 'based on your reading history', id: 'id001' },
    { source: 'based on your reading history', id: 'id002' },
    { source: 'based on your reading history', id: 'id001' },
    { source: 'based on your reading history', id: 'id001' },
    { source: 'popular on medium', id: 'id001' },
    { source: 'popular on medium', id: 'id001' },
    { source: 'popular on medium', id: 'id002' },
    { source: 'based on your reading history', id: 'id001' },
    { source: 'based on your reading history', id: 'id002' },
    { source: 'popular on medium', id: 'id001' },
    { source: 'based on your reading history', id: 'id001' },
    { source: 'popular on medium', id: 'id001' },
    { source: 'popular on medium', id: 'id001' },
    { source: 'based on your reading history', id: 'id001' },
    { source: 'popular on medium', id: 'id002' },
    { source: 'based on your reading history', id: 'id002' },
    { source: '', id: 'id001' },
    { source: 'based on your reading history', id: 'id001' },
    { source: 'based on your reading history', id: 'id001' },
    { source: 'popular on medium', id: 'id001' },
    { source: 'popular on medium', id: 'id001' },
    { source: 'popular on medium', id: 'id002' },
  ],

  navbarList: [
    'HOME',
    'ONEZERO',
    'ELEMENTAL',
    'GEN',
    'ZORA',
    'FORGE',
    'HUMAN PARTS',
    'MARKER',
    'LEVEL',
    'HEATED',
    'MODUS',
    'MORE',
  ],
  footerList: [
    { title: 'Help', link: './' },
    { title: 'Status', link: './' },
    { title: 'Writers', link: './' },
    { title: 'Blog', link: './' },
    { title: 'Careers', link: './' },
    { title: 'Privacy', link: './' },
    { title: 'Terms', link: './' },
    { title: 'About', link: './' },
  ],
};

export default produce((draft, action) => {
  switch (action.type) {
    case LOAD_MORE_HOMELIST:
      draft.homeList.push(...loadMoreHomelist());
      break;
  }
}, initialState);
