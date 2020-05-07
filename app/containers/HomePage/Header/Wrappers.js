import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 65px;
  @media screen and (max-width: 767px) {
    height: 56px;
  }
`;

export const MainIconStyledA = styled.a`
  display: initial;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const LogoIconStyledA = styled.a`
  display: none;
  @media screen and (max-width: 767px) {
    display: initial;
  }
`;

export const FlexStyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MarginWrapper = styled.div`
  margin-left: 16px;
  @media screen and (max-width: 767px) {
    margin-left: 10px;
  }
`;

export const AutoHiddenStyledA = styled.a`
  transition: 0.1s background-color, 0.1s border-color, 0.1s color, 0.1s fill;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
