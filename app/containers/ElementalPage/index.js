/**
 *
 * Elemental
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { createStructuredSelector } from 'reselect';
// import { compose } from 'redux';

// import { useInjectSaga } from 'utils/injectSaga';
// import { useInjectReducer } from 'utils/injectReducer';
import { WidthConstrainWrapper } from '../HomePage/Wrappers';
import HeaderAutoShow from '../PublicationComponents_StyleA/HeaderAutoShow';
import LogoHeader from '../PublicationComponents_StyleA/LogoHeader';
import Navbar from '../PublicationComponents_StyleA/Navbar';
import HomepageHeros from '../PublicationComponents_StyleA/HomepageHeros';
import Footer from '../PublicationComponents_StyleA/Footer';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import { selectPublicationMetaInfo } from '../../selectors';

// import makeSelectElemental from './selectors';
// import reducer from './reducer';
// import saga from './saga';

function ElementalPage(props) {
  // useInjectReducer({ key: 'elemental', reducer });
  // useInjectSaga({ key: 'elemental', saga });
  const { name, description, icon, publicationId } = props;
  return (
    <div>
      <Helmet>
        <title>{`${capitalizeFirstLetter(name)}-${description}`}</title>
        {/* TODO fix below */}
        <meta
          name="description"
          content={`${capitalizeFirstLetter(
            name,
          )} is a publication produced by Medium`}
        />
        <link rel="icon" href={icon} />
      </Helmet>
      <div>
        <HeaderAutoShow />
        <WidthConstrainWrapper>
          <LogoHeader publicationId={publicationId} />
          <Navbar publicationId={publicationId} />
          <HomepageHeros publicationId={publicationId} />
          <Footer publicationId={publicationId} />
        </WidthConstrainWrapper>
      </div>
    </div>
  );
}

ElementalPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  publicationId: PropTypes.string.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
};

// const mapStateToProps = createStructuredSelector({
//   elemental: makeSelectElemental(),
// });

function mapStateToProps(state, ownProps) {
  const { publicationId } = ownProps.match.params;
  const { name, description, icon } = selectPublicationMetaInfo(
    state,
    publicationId,
  );
  return {
    name,
    description,
    icon,
    publicationId,
  };
}

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

export default connect(mapStateToProps)(ElementalPage);
