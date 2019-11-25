import styled, { css } from 'styled-components';
import getColor from '../../staticData/colorSets';

const StyledContainer = styled.div`
  display: flex;
  align-items: center !important;
  white-space: nowrap !important;
  text-overflow: ellipsis !important;
`;

const textContainerBaseStyle = css`
  text-rendering: auto;
  flex: 1 1 auto;
`;

const UpTextWrapper = styled.div``;

const downTextWrapperBaseStyle = css`
  color: #0000008a;
  fill: #0000008a;
`;

const aBaseStyle = css`
  color: ${props => getColor(props.color).color};
  :active,
  :hover {
    color: ${props => getColor(props.color).hoverColor};
    outline: 0;
  }

  :hover {
    text-decoration: underline;
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
