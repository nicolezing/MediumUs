import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import getColor from '../../staticData/colorSets';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
`;

const AuthorInfoWrapper = styled.div`
  display: initial;
`;

export const StyledButtonWrapper = styled.span`
  margin-left: 8px;
`;

const infoWrapperBaseStyle = css`
  flex: auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const redingInfoWrapperBaseStyle = css`
  color: #0000008a;
  fill: #0000008a;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const aBaseStyle = css`
  color: ${getColor('black').color};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  :active,
  :hover {
    color: ${getColor('black').hoverColor};
    text-decoration: underline;
    outline: 0;
  }
`;

const spanBaseStyle = css`
  vertical-align: 1px;
`;

function conditionallyStyledComponents(variation) {
  switch (variation) {
    case 'PublicationHome':
      return {
        StyledInfoWrapper: styled.div`
          ${infoWrapperBaseStyle}
          font-size: 15px;
          margin: 0 0 0 10px;
          line-height: 1.4;
          vertical-align: center;
        `,
        ReadingInfoWrapper: styled.div`
          ${redingInfoWrapperBaseStyle}
        `,
        StyledA: styled(Link)`
          ${aBaseStyle}
          font-size: 16px;
          @media only screen and (max-width: 768px) {
            font-size: 15px;
          }
          color: ${props => getColor(props.theme).color};
        `,
        StyledSpan: styled.span`
          ${spanBaseStyle}
          padding: 0 4.5px;
        `,
      };
    case 'TopicHome':
      return {
        StyledInfoWrapper: styled.div`
          ${infoWrapperBaseStyle}
          font-size: 15.8px;
          margin-left: 16px;
          line-height: 20px;
          margin-top: -1px;
        `,
        ReadingInfoWrapper: styled.div`
          ${redingInfoWrapperBaseStyle}
          line-height: 20px;
        `,
        StyledA: styled(Link)`
          ${aBaseStyle}
        `,
        StyledSpan: styled.span`
          ${spanBaseStyle}
          padding: 0 4px;
        `,
      };
    case 'Home':
      return {
        StyledInfoWrapper: styled.div`
          ${infoWrapperBaseStyle}
          font-size: 15px;
          line-height: 1.4;
        `,
        ReadingInfoWrapper: styled.div`
          ${redingInfoWrapperBaseStyle}
        `,
        StyledA: styled(Link)`
          ${aBaseStyle}
        `,
        StyledSpan: styled.span`
          ${spanBaseStyle}
          padding: 0 4.8px;
        `,
      };
    case 'ArticleTitle':
      return {
        StyledInfoWrapper: styled.div`
          ${infoWrapperBaseStyle}
          font-size: 16px;
          margin-left: 12px;
          line-height: 20px;
        `,
        ReadingInfoWrapper: styled.div`
          ${redingInfoWrapperBaseStyle}
          margin-top: 4px;
        `,
        StyledA: styled(Link)`
          ${aBaseStyle}
        `,
        StyledSpan: styled.span`
          ${spanBaseStyle}
          padding: 0 4px;
        `,
      };
    default:
      throw new Error(`Unknown variation: ${variation}`);
  }
}

export function styledComponents(variation) {
  return {
    StyledWrapper,
    AuthorInfoWrapper,
    ...conditionallyStyledComponents(variation),
  };
}
