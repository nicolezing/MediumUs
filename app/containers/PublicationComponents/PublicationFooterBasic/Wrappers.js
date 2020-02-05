import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding: 10px 0 30px 0;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export const A = styled.a`
  font-size: 16px;
  font-weight: 400;
  line-height: 35px;
  text-transform: capitalize;
  color: rgba(0, 0, 0, 0.54);
  :hover {
    color: rgba(0, 0, 0, 0.68);
  }
`;

export const MarginWrapper = styled.span`
  margin-top: 10px;
`;

export const Span = styled.span`
  vertical-align: 1px;
  padding: 0 4.8px;
`;
