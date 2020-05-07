import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectHomepageLinkList } from '../../../selectors';

import { Wrapper, A } from './Wrappers';

function Footer(props) {
  const { footerList } = props;

  return (
    <Wrapper>
      {footerList.map(({ title, link }) => (
        <A to={link} key={title}>
          {title}
        </A>
      ))}
    </Wrapper>
  );
}

Footer.propTypes = {
  footerList: PropTypes.array,
};

function mapStateToProps(state) {
  const { footerList } = selectHomepageLinkList(state);

  return {
    footerList,
  };
}

export default connect(mapStateToProps)(Footer);
