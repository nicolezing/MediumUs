import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 12px;
  line-height: 37px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
export const ListWrapper = styled.div`
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 1px;
`;

export const LinkWrapper = styled.span`
  line-height: 36px;
  margin-right: 22px;
  font-size: 15px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.54);
`;

export const A = styled.a`
  color: rgba(0, 0, 0, 0.54);
  vertical-align: middle;
`;

export const DividerSpan = styled.div`
  display: inline-block;
  border-left: 1px solid;
  padding-left: 22px;
  height: 24px;
  vertical-align: middle;
`;

export const ButtonWrapper = styled.div`
  margin-left: 18px;
  white-space: nowrap;
`;

export const ButtonSpan = styled.span`
  margin-right: 8px;
`;
