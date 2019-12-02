/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import OutlinedStyleButton from './OutlinedStyleButton';
import IconStyledButton from './IconStyledButton';
import * as Icons from '../../staticData/svgIcons/IconButton_Icons';
import { GlowStyledBtn, Wrapper } from './GlowStyledBtn';

function OutlinedButton(props) {
  return (
    <OutlinedStyleButton {...props}>
      <span>{props.text}</span>
    </OutlinedStyleButton>
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

  // TODO: add more like below in the future
  // title="Bookmark this story to read later"
  // aria-label="Bookmark this story to read later"
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
