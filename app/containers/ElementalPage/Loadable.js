/**
 *
 * Asynchronously loads the component for Elemental
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
