import styled, { css } from 'styled-components';
import getColor from '../../staticData/colorSets';
import sizeSet from './avatarHaloSizeSets';

const narrowScreen = css`
  @media only screen and (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const AvatarImg = styled.img`
  width: ${props => props.size || '32px'};
  height: ${props => props.size || '32px'};
  border-radius: 50%;
  display: inline-block;
  ${props => props.size === `36px` && narrowScreen}
`;

const narrowScreenHaloWrapper = css`
  @media only screen and (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const Halo = styled.div`
  width: calc(100% + 25px);
  height: calc(100% + 25px);
  justify-content: center;
  align-items: center;
  display: flex;

  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  fill: ${getColor('green').color};
  svg {
    width: ${props => sizeSet[props.size][1]}px;
    height: ${props => sizeSet[props.size][1]}px;
  }
  ${props => props.size === `36px` && narrowScreen}
`;

const HaloWrapper = styled.div`
  width: ${props => props.size};
  height: ${props => props.size};
  position: relative;
  ${props => props.size === `36px` && narrowScreenHaloWrapper}
`;

export { AvatarImg, Halo, HaloWrapper };
