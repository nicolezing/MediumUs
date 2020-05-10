import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const OuterWrapper = styled.div`
  width: 100%;
  background: #fff;
  position: sticky;
  top: 0;
  margin: auto;
  z-index: 10;
  :stuck {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  &.show_border {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  }

  &.hide_border {
    border-bottom: none;
  }
`;

export const InnerWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 855px) {
    height: 39px;
  }
  max-width: 1032px;
  min-width: 0;
  margin: auto;
  @media screen and (max-width: 1072px) {
    margin: 0 20px;
  }
`;

export const ListContainer = styled.div`
  width: auto;
  overflow: hidden;
  white-space: nowrap;
  margin: auto 10px;
  transition: all 200ms ease 0s;
`;

export const A = styled(Link)`
  color: rgba(0, 0, 0, 0.54);
`;

export const FirstA = styled(Link)`
  color: rgba(0, 0, 0, 0.84);
`;
const baseLinkWrapper = css`
  height: 100%;
  display: inline-block;
  font-size: 15px;
`;

export const FirstLinkWrapper = styled.div`
  ${baseLinkWrapper};
  color: rgba(0, 0, 0, 0.84);
`;

export const LinkWrapper = styled.div`
  ${baseLinkWrapper};
  margin-left: 24px;
`;
