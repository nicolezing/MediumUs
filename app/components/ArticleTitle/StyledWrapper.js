import styled from 'styled-components';
import * as variateTitleStyles from './variateTitleStyles';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  word-wrap: break-word;
  overflow: hidden;
  ${props => variateTitleStyles[props.variation].wrapper}
`;

const StyledTitle = styled.h1`
  font-weight: 600;
  color: rgba(0, 0, 0, 0.84);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  margin: 0;
  ${props => variateTitleStyles[props.variation].h1}
`;

const StyledSubtitle = styled.div`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  color: rgba(0, 0, 0, 0.54);
  ${props => variateTitleStyles[props.variation].sub}
`;

export const PublicationColumn = styled.h2`
  margin-top: 30px;
  margin-bottom: -20px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.54);
`;

export { Wrapper, StyledTitle, StyledSubtitle };
