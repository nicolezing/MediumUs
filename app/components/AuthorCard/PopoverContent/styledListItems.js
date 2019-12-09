import styled from 'styled-components';

export const UnorderedList = styled.ul`
  margin: 0;
  padding: 14px;
  list-style: none;
  line-height: 1.4;
  white-space: nowrap;
  width: 288px;
`;

export const Divider = styled.li`
  border-top: solid 1px rgba(0, 0, 0, 0.05);
  margin: 10px 0px;
`;

export const TitleA = styled.a`
  color: rgba(0, 0, 0, 0.84);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
  :hover {
    text-decoration: underline;
  }
`;

export const Subtitle = styled.span`
  font-size: 15px;
  color: rgba(0, 0, 0, 0.54);
  display: block;
  overflow-wrap: break-word;
  white-space: normal;
`;

export const MemberSince = styled.span`
  color: rgba(28, 153, 99, 1);
  line-height: 1;
  font-size: 15px;
  margin-bottom: 7px;
  display: block;
`;

export const Img = styled.img`
  width: 60px;
  height: 60px;
`;

export const FollowerSpan = styled.span`
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.54);
  font-size: 16px;
  line-height: 36px;
  text-align: left;
`;

export const NumSpan = styled.span`
  color: rgba(0, 0, 0, 0.68);
`;
