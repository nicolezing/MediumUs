/**
 *
 * Button
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// eslint-disable-next-line no-unused-vars
import { outlinedStyle, sm, tall } from './outlinedStyle';

function foregroundColor({ type, color }) {
  return type === 'outlined' ? color : 'white';
}

function backgrounudColor({ type, color }) {
  return type === 'outlined' ? 'white' : color;
}

function getSize({ size }) {
  if (size === 'tall') {
    return tall;
  }
  return sm;
}
function Button(props) {
  const Btn = styled.button`
    color: ${foregroundColor(props)};
    border-color: ${foregroundColor(props)} !important;
    background: ${backgrounudColor(props)} !important;
    ${outlinedStyle};
    ${getSize(props)}
  `;

  return (
    <Btn type="button" onClick={props.onClick}>
      {/* {props.text} */}
      <span>{props.text}</span>
    </Btn>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  type: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  size: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default memo(Button);
