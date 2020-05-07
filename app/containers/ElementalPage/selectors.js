import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the elemental state domain
 */

const selectElementalDomain = state => state.elemental || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Elemental
 */

const makeSelectElemental = () =>
  createSelector(
    selectElementalDomain,
    substate => substate,
  );

export default makeSelectElemental;
export { selectElementalDomain };
