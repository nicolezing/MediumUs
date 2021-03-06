import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import * as wrapperStyle from './variationWrapperStyles';

const coverBaseStyle = css`
  background-image: url(${props => props.cover});
  background-position: ${props =>
    props.focusPosition ? `${props.focusPosition.join('% ')}%` : `50% 50%`};
  background-size: cover;
  background-origin: border-box;
`;

const coverBlankImg = css`
  background-color: white;
  background-size: cover;
  background-origin: border-box;
`;

export const Wrapper = styled.div`
  ${props => wrapperStyle[props.variation].wrapperStyle || ``}
`;
export const Cover = styled(Link)`
  ${props => (props.cover.length > 0 ? coverBaseStyle : coverBlankImg)};
  ${props => wrapperStyle[props.variation].coverStyle || ``}
`;
export const InfoWrapper = styled.div`
  ${props => wrapperStyle[props.variation].infoWrapperStyle || ``}
`;
export const AuthorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${props => wrapperStyle[props.variation].authorWrapperStyle || ``};
`;

export const IconWrapper = styled.div`
  align-items: center;
  white-space: nowrap;
  ${props => wrapperStyle[props.variation].iconWrapperStyle || ``}
`;

export const ClapText = styled.span`
  margin-left: 5px;
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.54);
`;
