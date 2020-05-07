import styled from 'styled-components';
import { mediaWidth } from '../ArticlePageArticleDetail/Wrappers';

export const Container = styled.div`
  width: 100%;
  z-index: -999;
  justify-content: center;
  transition: opacity 200ms;
  position: fixed;
  //TODO will change:
  top: 200px;
  display: flex;
  opacity: ${props => (props.visible ? 1 : 0)};

  @media screen and (max-width: 1199px) {
    display: none;
  }
`;

export const WidthConstrainWrapper = styled.div`
  ${mediaWidth}
  width: 100%;
  max-width: 1192px;
  z-index: -99;
`;

export const InfoWrapper = styled.div`
  width: 131px;
`;

export const PublicationWrapper = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 28px;
`;

export const PublicationHeader = styled.h2`
  font-size: 18px;
  line-height: 20px;
  margin: 0;
`;

export const DescriptionWrapper = styled.p`
  margin: 0;
  padding-top: 2px;
  padding-bottom: 20px;
  -webkit-line-clamp: 6;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 120px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.54);
  line-height: 20px;
`;

export const ClapContainer = styled.div`
  margin-left: -3px;
  margin-bottom: 19px;
  padding-top: 28px;
`;

export const ClapWrapper = styled.span`
  margin-right: 5px;
`;

export const ClapNumberButton = styled.button`
  display: inline-block;
  border: none;
  padding: 0;
  margin-top: 5px;
  vertical-align: middle;
  color: rgba(0, 0, 0, 0.54);
  : hover {
    color: rgba(0, 0, 0, 0.9);
  }
`;

// export const Container = styled.div``;
// export const Container = styled.div``;
// export const Container = styled.div``;
// export const Container = styled.div``;
