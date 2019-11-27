/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';
import * as outlinedStyle from './outlineStyle';
import { IconStyledButton } from './IconStyledButton';
import * as Icons from '../../staticData/images/icons';
import { GlowStyledBtn, Wrapper } from './GlowStyledBtn';

function OutlinedButton(props) {
  const Btn = styled.button`
    ${outlinedStyle.base};
    ${outlinedStyle[props.size]}
    ${outlinedStyle[props.type]}
  `;
  return (
    <Btn {...props}>
      <span>{props.text}</span>
    </Btn>
  );
}

function IconButton(props) {
  if (props.effect === 'glow') {
    return (
      <Wrapper>
        <GlowStyledBtn {...props}>{Icons[props.type]}</GlowStyledBtn>
      </Wrapper>
    );
  }

  return <IconStyledButton {...props}>{Icons[props.type]}</IconStyledButton>;
}

OutlinedButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['outlined', 'filled']).isRequired,
  size: PropTypes.oneOf(['small', 'middle', 'large']).isRequired,
  colorSet: PropTypes.string,
  onClick: PropTypes.func,
};

IconButton.propTypes = {
  type: PropTypes.oneOf([..._.keys(Icons)]).isRequired,
  effect: PropTypes.oneOf(['glow']),
  colorSet: PropTypes.string,
};

export { OutlinedButton, IconButton };
