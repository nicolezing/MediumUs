import styled, { css } from 'styled-components';
import * as sectionStyle from './sectionStyles';

const coverBaseStyle = css`
  background-image: url(${props => props.articleCover});
  background-position: ${props =>
    props.focusPosition ? `${props.focusPosition.join('% ')}%` : `50% 50%`};
  background-size: cover;
  background-origin: border-box;
`;

export const Wrapper = styled.div`
  ${props => sectionStyle[props.variation].wrapperStyle || ``}
`;
export const Cover = styled.a`
  ${coverBaseStyle};
  ${props => sectionStyle[props.variation].coverStyle || ``}
`;
export const InfoWrapper = styled.div`
  ${props => sectionStyle[props.variation].infoWrapperStyle || ``}
`;
export const TitleWrapper = styled.div``;
export const AuthorWrapper = styled.div``;
