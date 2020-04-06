/* eslint-disable default-case */
import produce from 'immer';
import { LOAD_MORE_HOMELIST } from '../../actions';
import { loadMoreHomelist } from './loadMoreHomelist';

const initialState = {
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
};

// export default (state = initialState, action) => {
//   let { homeList } = state;

//   switch (action.type) {
//     case LOAD_MORE_HOMELIST:
//       homeList = homeList.concat(loadMoreHomelist());
//       break;
//     default:
//       return state;
//   }
//   return { ...state, homeList };
// };

export default produce((draft, action) => {
  switch (action.type) {
    case LOAD_MORE_HOMELIST:
      draft.homeList.push(...loadMoreHomelist());
      break;
  }
}, initialState);
