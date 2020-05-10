import styled from 'styled-components';
import { Wrapper } from '../../HomePage/Header/Wrappers';

export const WidthConstrainWrapper = styled(Wrapper)`
  max-width: 1032px;
  min-width: 320px;
  margin: auto;
  padding: 0;
  @media screen and (max-width: 1072px) {
    padding: 0 20px;
  }
  overflow-y: visible;
`;

export const OuterWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  z-index: 9;
  box-shadow: none;
  position: relative;
  transform: translateY(0);

  &.show_nav {
    position: fixed;
    transition: transform 0.2s;
    box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.15);
  }

  &.hide_nav {
    transform: ${props => `translateY(-${props.height}px)`};
    transition: transform 0.2s;
  }
`;

export const PlaceholderWrapper = styled.div`
  position: relative;
  width: 100%;
  display: none;
  height: ${props => props.height}px;

  &.show_nav {
    display: block;
  }
`;
