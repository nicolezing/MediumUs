/**
 *
 * Avatar
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import avatarHaloIcon from '../../staticData/images/avatarHaloIcon';
import { haloCompnents } from './avatarStyle';

function Avatar(props) {
  if (props.member) {
    const { Halo, HaloWrapper, AvtStyledImg } = haloCompnents(props.size);
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
