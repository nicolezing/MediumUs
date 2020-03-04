import styled, { css } from 'styled-components';

export const ImgLarge = styled.img`
  width: 100%;
  transition: visibility 0ms ease 400ms;
`;

export const ImgSmall = styled(ImgLarge)`
  filter: blur(20px);
  transform: scale(1.1);
`;

export const Figcaption = styled.figcaption`
  &,
  a {
    font-size: 16px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.54);
  }
  text-align: center;
  margin: 10px auto 0 auto;
  line-height: 1.4;
  max-width: 728px;

  & a {
    text-decoration: underline;
  }
`;

const dialogCss = css`
  content: '';
  position: absolute;
  z-index: 899;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  background-color: rgba(255, 255, 255, 0.95);
`;

export const Dialog = styled.div`
  ::before {
    ${props => props.enlargeState && dialogCss}
  }
`;

const enlarge = ([scale, y]) => css`
  transform: scale(${scale}) translateY(${y}px);
  transition: transform 300ms cubic-bezier(0.2, 0, 0.2, 1);
  z-index: 900;
  position: relative;
  overflow: visible;
`;

export const PreImgWrapper = styled.div`
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.05);

  ${props => (props.enlargeState ? enlarge(props.transformConfig) : ``)}

  .loaded {
    display: initial;
  }

  .unloaded {
    display: none;
  }

  .zoom-in {
    :hover {
      cursor: zoom-in;
    }
  }

  .zoom-out {
    :hover {
      cursor: zoom-out;
    }
  }
`;
