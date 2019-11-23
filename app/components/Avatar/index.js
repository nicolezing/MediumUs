/**
 *
 * Avatar
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import avatarHaloIcon from '../../staticData/images/avatarHaloIcon';
import { AvtStyledImg, haloCompnents } from './avatarStyle';

function Avatar(props) {
  if (props.member) {
    const { Halo, HaloWrapper } = haloCompnents(props.size);
    const Wrapper = styled.div`
      display: inline-block;
    `;
    return (
      <Wrapper>
        <HaloWrapper>
          <Halo>{avatarHaloIcon}</Halo>
          <AvtStyledImg {...props} />
        </HaloWrapper>
      </Wrapper>
    );
  }
  return <AvtStyledImg {...props} />;
}

Avatar.propTypes = {
  member: PropTypes.bool,
  size: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Avatar;
