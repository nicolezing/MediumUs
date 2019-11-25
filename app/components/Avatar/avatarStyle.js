import styled from 'styled-components';
import getColor from '../../staticData/colorSets';

function haloCompnents(size) {
  const narrowStyle =
    size === '36px'
      ? `
  @media only screen and (max-width: 768px) {
    width: 32px;
    height: 32px;
  }`
      : '';
  const narrowHaloStyle =
    size === '36px'
      ? `
    @media only screen and (max-width: 768px) {
      width: 36px;
      height: 36px;
    }`
      : '';
  const AvtStyledImg = styled.img`
    width: ${size || '32px'};
    height: ${size || '32px'};
    border-radius: 50%;
    display: block;
    ${narrowStyle}
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
      width: ${sizeSet[size][1]}px;
      height: ${sizeSet[size][1]}px;
    }
    ${narrowHaloStyle}
  `;

  const HaloWrapper = styled.div`
    width: ${size};
    height: ${size};
    position: relative;
    ${narrowStyle}
  `;
  return { Halo, HaloWrapper, AvtStyledImg };
}

const sizeSet = {
  '32px': [32, 36],
  '36px': [36, 43],
  '40px': [40, 49],
  '48px': [48, 57],
  '80px': [80, 91],
  '64px': [64, 74],
  '128px': [128, 145],
};

export { haloCompnents };
