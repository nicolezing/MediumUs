import styled from 'styled-components';

export const UnorderedList = styled.ul`
  padding: 8px 0;
  // margin: 0;
  list-style: none;
  line-height: 1.4;
  white-space: nowrap;
`;

export const DividerList = styled.li`
  border-top: solid 1px rgba(0, 0, 0, 0.05);
  margin: 10px 0px;
`;

export const A = styled.a`
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
  padding: 7px 25px;
  display: inline-block;
`;

export const GreenA = styled(A)`
  color: rgba(28, 153, 99, 1);
`;

export const UserWrapper = styled.div`
  display: flex;
  padding: 8px 20px;
`;

export const UserDarkStyledA = styled.a`
  white-space: normal;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  :hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;
export const UserColorStyledA = styled.a`
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.5);
  :hover {
    text-decoration: underline;
  }
`;
