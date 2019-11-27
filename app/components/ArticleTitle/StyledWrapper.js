import styled from 'styled-components';
import * as titleStyles from './titleStyles';

const TitleWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  word-wrap: break-word;
  ${props => titleStyles[props.type].wrapper}
`;

const StyledTitle = styled.h1`
  font-weight: 600;
  color: rgba(0, 0, 0, 0.84);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin: 0;
  ${props => titleStyles[props.type].h1}
`;

const StyledSubtitle = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: rgba(0, 0, 0, 0.54);
  ${props => titleStyles[props.type].sub}
`;

export { TitleWrapper, StyledTitle, StyledSubtitle };
