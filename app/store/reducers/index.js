import createReducer from '../../reducers';
import homePage from './Homepage';
import articlePage from './ArticlePage';

export default createReducer({
  homePage,
  testState: articlePage,
});
