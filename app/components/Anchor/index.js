/**
 *
 * Anchor
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { useHistory } from 'react-router-dom';
import * as Icons from '../../staticData/images/icons';
import IconStyledA from './IconStyledA';
import * as outlineStyles from '../Button/outlineStyle';
import PlainStyledA from './PlainStyledA';
import Wrapper from './Wrapper';
import { AvtStyledImg, haloCompnents } from './avatarStyle';
const { faceOutlineIcon } = Icons;

function IconA(props) {
  return (
    <div>
      <IconStyledA {...props}>{Icons[props.type]}</IconStyledA>
    </div>
  );
}

function OutlinedA(props) {
  const OtlA = styled.a.attrs(({ href }) => ({ href }))`
    ${outlineStyles.base};
    ${outlineStyles[props.size]};
    ${outlineStyles.outlined}
  `;
  return (
    <Wrapper>
      <OtlA {...props}>{props.text}</OtlA>
    </Wrapper>
  );
}

function PlainA(props) {
  return (
    <Wrapper>
      <PlainStyledA {...props}>{props.text}</PlainStyledA>
    </Wrapper>
  );
}

function AvatarImage(props) {
  if (props.member) {
    const { Halo, HaloWrapper } = haloCompnents(props.size);
    return (
      <Wrapper>
        <a href={props.href}>
          <HaloWrapper>
            <Halo>{faceOutlineIcon}</Halo>
            <AvtStyledImg {...props} />
          </HaloWrapper>
        </a>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <a href={props.href}>
        <AvtStyledImg {...props} />
      </a>
    </Wrapper>
  );
}

IconA.propTypes = {
  colorSet: PropTypes.string,
  type: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

OutlinedA.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  colorSet: PropTypes.string,
  href: PropTypes.string.isRequired,
};

PlainA.propTypes = {
  text: PropTypes.string,
  colorSet: PropTypes.string,
  fontsize: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

AvatarImage.propTypes = {
  member: PropTypes.bool,
  size: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
// export { memo(IconButton), memo(IconA)};
export { IconA, OutlinedA, PlainA, AvatarImage };
