import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  height: 54px;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  margin-right: 40px;
`;

export const Img = styled.img`
  max-width: 142px;
  max-height: 36px;
`;

export const ListWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 1px;
  @media screen and (max-width: 728px) {
    display: none;
  }
`;

export const DividerSpan = styled.div`
  display: inline-block;
  border-left: 1px solid rgba(0, 0, 0, 0.34);
  padding-left: 15px;
  height: 20px;
  vertical-align: middle;
`;

export const LinkWrapper = styled.span`
  line-height: 36px;
  margin-right: 15px;
  font-size: 15px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.54);
`;
