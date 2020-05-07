import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 328px;
  display: flex;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  padding: 10px 0 25px 0;
  flex-wrap: wrap;
`;

export const A = styled(Link)`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.54);
  margin-right: 16px;
  :hover {
    text-decoration: underline;
  }
`;
