/**
 *
 * Elemental
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { WidthConstrainWrapper } from '../HomePage/Wrappers';
import PublicationHeaderAutoShow from '../PublicationComponents/PublicationHeaderAutoShow';
import PublicationHeaderTypeA from '../PublicationComponents/PublicationHeaderTypeA';
import NavbarTypeA from '../PublicationComponents/NavbarTypeA';
import HeroList from './HeroList';
import Footer from './Footer';
import makeSelectElemental from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Elemental() {
  // useInjectReducer({ key: 'elemental', reducer });
  // useInjectSaga({ key: 'elemental', saga });
  const publication = 'elemental';

  return (
    <div>
      <Helmet>
        <title>Elemental</title>
        <meta name="description" content="Description of Elemental" />
      </Helmet>
      <div>
        <PublicationHeaderAutoShow />
        <WidthConstrainWrapper>
          <PublicationHeaderTypeA topic={publication} />
          <NavbarTypeA topic={publication} />
          <HeroList topic={publication} />
          <Footer />
        </WidthConstrainWrapper>
      </div>
    </div>
  );
}

Elemental.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

// const mapStateToProps = createStructuredSelector({
//   elemental: makeSelectElemental(),
// });

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

// export default compose(withConnect)(Elemental);
