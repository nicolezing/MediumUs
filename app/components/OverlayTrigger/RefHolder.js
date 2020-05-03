import React from 'react';
import PropTypes from 'prop-types';

class RefHolder extends React.Component {
  render() {
    return this.props.children;
  }
}

RefHolder.propTypes = { children: PropTypes.element.isRequired };

export default RefHolder;
