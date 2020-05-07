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
`;

export const PlaceholderWrapper = styled.div`
  position: relative;
  width: 100%;
  display: none;
`;
