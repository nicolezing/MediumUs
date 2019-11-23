import styled from 'styled-components';
import getColor from '../../staticData/colorSets';

const AvtStyledImg = styled.img.attrs(({ src, alt }) => ({
  src,
  alt,
}))`
  width: ${props => props.size || '32px'};
  height: ${props => props.size || '32px'};
  border-radius: 50%;
  display: block;
`;

function haloCompnents(size) {
  const Halo = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    fill: ${getColor('green').color};
    svg {
      width: ${sizeSet[size][1]}px;
      height: ${sizeSet[size][1]}px;
    }
  `;

  const HaloWrapper = styled.div`
    width: ${size};
    height: ${size};
    position: relative;
  `;
  return { Halo, HaloWrapper };
}

const sizeSet = {
  // 'tiny-32': [32, 36],
  // 'small-36': [36, 39],
  // 'middle-40': [40, 49],
  // 'large-48': [48, 57],
  // 'huge-80': [80, 91],
  // 'gigantic-mobi-128': [64, 74],
  // 'gigantic-128': [128, 145],
  '32px': [32, 36],
  '36px': [36, 39],
  '40px': [40, 49],
  '48px': [48, 57],
  '80px': [80, 91],
  '64px': [64, 74],
  '128px': [128, 145],
};

export { AvtStyledImg, haloCompnents };
