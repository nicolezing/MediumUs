import styled, { css } from 'styled-components';
import * as wrapperStyle from './variationWrapperStyles';

const coverBaseStyle = css`
  background-image: url(${props => props.articleCover});
  background-position: ${props =>
    props.focusPosition ? `${props.focusPosition.join('% ')}%` : `50% 50%`};
  background-size: cover;
  background-origin: border-box;
`;

export const Wrapper = styled.div`
  ${props => wrapperStyle[props.variation].wrapperStyle || ``}
`;
export const Cover = styled.a`
  ${coverBaseStyle};
  ${props => wrapperStyle[props.variation].coverStyle || ``}
`;
export const InfoWrapper = styled.div`
  ${props => wrapperStyle[props.variation].infoWrapperStyle || ``}
`;
export const TitleWrapper = styled.div``;
export const AuthorWrapper = styled.div``;
