import styled, { css } from 'styled-components';
import getColor from '../../staticData/colorSets';

const StyledContainer = styled.div`
  display: flex;
  align-items: cente;
`;

const textContainerBaseStyle = css`
  text-rendering: auto;
  flex: 1 1 auto;
  overflow: hidden;
  white-space: nowrap;
`;

const UpTextWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const downTextWrapperBaseStyle = css`
  color: #0000008a;
  fill: #0000008a;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const aBaseStyle = css`
  color: ${getColor('black').color};
  :active,
  :hover {
    color: ${getColor('black').hoverColor};
    outline: 0;
  }
`;

const spanSpecialBaseStyle = css`
  vertical-align: 1px;
`;

function conditionallyStyledComponents(variation) {
  switch (variation) {
    case 'CollectionHome':
      return {
        StyledTextContainer: styled.div`
          ${textContainerBaseStyle}
          font-size: 15px;
          margin: 0 0 0 10px;
          line-height: 1.4;
        `,
        DownTextWrapper: styled.div`
          ${downTextWrapperBaseStyle}
        `,
        StyledA: styled.a`
          ${aBaseStyle}
          font-size: 16px;
          @media only screen and (max-width: 768px) {
            font-size: 15px;
          }
        `,
        StyledSpanSpecial: styled.span`
          ${spanSpecialBaseStyle}
          padding: 0 4.5px;
        `,
      };
    case 'TopicHome':
      return {
        StyledTextContainer: styled.div`
          ${textContainerBaseStyle}
          font-size: 15.8px;
          margin-left: 16px;
          line-height: 20px;
        `,
        DownTextWrapper: styled.div`
          ${downTextWrapperBaseStyle}
          line-height: 20px;
          margin-top: 3px;
        `,
        StyledA: styled.a`
          ${aBaseStyle}
        `,
        StyledSpanSpecial: styled.span`
          ${spanSpecialBaseStyle}
          padding: 0 4px;
        `,
      };
    case 'Home':
      return {
        StyledTextContainer: styled.div`
          ${textContainerBaseStyle}
          font-size: 15px;
          line-height: 1.4;
        `,
        DownTextWrapper: styled.div`
          ${downTextWrapperBaseStyle}
        `,
        StyledA: styled.a`
          ${aBaseStyle}
        `,
        StyledSpanSpecial: styled.span`
          ${spanSpecialBaseStyle}
          padding: 0 4.8px;
        `,
      };
    case 'ArticleTitle':
      return {
        StyledTextContainer: styled.div`
          ${textContainerBaseStyle}
          font-size: 16px;
          margin-left: 12px;
          line-height: 20px;
        `,
        DownTextWrapper: styled.div`
          ${downTextWrapperBaseStyle}
          margin-top: 2px;
        `,
        StyledA: styled.a`
          ${aBaseStyle}
        `,
        StyledSpanSpecial: styled.span`
          ${spanSpecialBaseStyle}
          padding: 0 4px;
        `,
      };
    default:
      throw new Error(`Unknown variantion: ${variation}`);
  }
}

export function styledComponents(variation) {
  return {
    StyledContainer,
    UpTextWrapper,
    ...conditionallyStyledComponents(variation),
  };
}
