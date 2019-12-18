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

// #TODO: add more like below in the future
// title="Bookmark this story to read later"
// aria-label="Bookmark this story to read later"
function OutlinedButton(props) {
  return (
    <OutlinedStyleButton {...props} onClick={props.onBtnClick}>
      <span>{props.text}</span>
    </OutlinedStyleButton>
  );
}

function IconButton(props) {
  return (
    <IconStyledButton {...props} onClick={props.onBtnClick}>
      {Icons[props.iconName]}
    </IconStyledButton>
  );
}

function GlowIconButton(props) {
  return (
    <Wrapper>
      <GlowStyledBtn {...props} onClick={props.onBtnClick}>
        {Icons[props.iconName]}
      </GlowStyledBtn>
    </Wrapper>
  );
}

OutlinedButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['outlined', 'filled']).isRequired,
  size: PropTypes.oneOf(['small', 'middle', 'large']).isRequired,
  colorSet: PropTypes.string,
  onBtnClick: PropTypes.func,
};

IconButton.propTypes = {
  iconName: PropTypes.oneOf([..._.keys(Icons)]).isRequired,
  colorSet: PropTypes.string,
  onBtnClick: PropTypes.func,
};

GlowIconButton.propTypes = {
  iconName: PropTypes.oneOf([..._.keys(Icons)]).isRequired,
  colorSet: PropTypes.string,
  onBtnClick: PropTypes.func,
};

export { OutlinedButton, IconButton, GlowIconButton };
