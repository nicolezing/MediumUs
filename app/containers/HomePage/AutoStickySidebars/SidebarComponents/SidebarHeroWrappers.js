import styled from 'styled-components';

export const Li = styled.li`
  list-style-type: none;
  display: flex;
  padding: 0;
`;
export const H2 = styled.h2`
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  margin: 0 0 4px 0;
  max-height: 60px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export const Wrapper = styled.div`
  margin: 0 0 24px 16px;
  overflow: hidden;
`;

export const NumWrapper = styled.div`
  font-size: 34px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.15);
  margin-top: 4px;
  white-space: nowrap;
`;

export const IconWrapper = styled.div`
  flex: none;
  border-radius: 999em;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: white;
  width: 32px;
  height: 32px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
