import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UnorderedList = styled.ul`
  max-width: 240px;
  min-width: 220px;
  padding: 8px 0;
  list-style: none;
  line-height: 1.4;
  white-space: nowrap;
`;

export const DividedList = styled.li`
  border-top: solid 1px rgba(0, 0, 0, 0.05);
  margin: 10px 0px;
`;

export const A = styled(Link)`
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
  padding: 7px 25px;
  display: inline-block;
  :hover {
    color: rgba(0, 0, 0, 0.9);
  }
`;

export const GreenA = styled(A)`
  color: rgba(28, 153, 99, 1);
  :hover {
    color: rgba(17, 121, 76, 1);
  }
`;

export const UserDarkStyledA = styled(Link)`
  white-space: normal;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  :hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;
export const UserColorStyledA = styled(Link)`
  white-space: nowrap;
  color: rgba(0, 0, 0, 0.5);
  :hover {
    text-decoration: underline;
  }
`;
