import styled from 'styled-components';

export const OuterWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

export const WidthWrapper = styled.div`
  margin: 0 64px;
  max-width: 680px;
  width: 100%;
  min-width: 0;
  @media screen and (max-width: 728px) {
    margin: 0 24px;
  }
`;

export const TagsWrapper = styled.div`
  margin-top: 25px;
`;
export const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;

export const Li = styled.li`
  margin: 0 8px 8px 0;
  list-style-type: none;
  display: inline-block;
`;

export const ListLink = styled.a`
  line-height: 22px;
  color: rgba(0, 0, 0, 0.54);
  background: rgba(0, 0, 0, 0.05);
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 15px;
  text-decoration: none;
  font-weight: 400;
`;

export const MediaWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ClapsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ClapTextWrapper = styled.div`
  margin-top: 5px;
`;

export const ClapText = styled.button`
  margin: 0;
  padding: 0;
  background-color: #fff;
  border: none;
`;

export const MediaListWrapper = styled.ul``;

export const IconLi = styled.li`
  list-style-type: none;
  display: inline-block;
  padding-right: 6px;
`;
