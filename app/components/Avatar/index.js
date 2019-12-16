/**
 *
 * Avatar
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import avatarHaloIcon from '../../staticData/svgIcons/avatarHaloIcon';
import { haloComponents, avatarImg } from './avatarStyle';

function Avatar(props) {
  const { AvtStyledImg } = avatarImg(props.size);
  if (props.member) {
    const { Halo, HaloWrapper } = haloComponents(props.size);
    return (
      <HaloWrapper>
        <Halo>{avatarHaloIcon}</Halo>
        <AvtStyledImg {...props} />
      </HaloWrapper>
    );
  }
  return <AvtStyledImg {...props} />;
}

Avatar.propTypes = {
  member: PropTypes.bool,
  size: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Avatar;
