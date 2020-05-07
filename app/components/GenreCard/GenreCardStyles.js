import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GenreCardContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 280px;
  height: 280px;
  margin-bottom: 30px;
  margin-left: 15px;
  margin-right: 15px;
  box-sizing: border-box;
  -webkit-box-flex: 0;
  flex: none;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
`;

const GenreCardHeader = styled.div`
  padding-right: 20px;
  padding-left: 20px;
  flex: auto;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: space-between;
`;

const GenreCardTitle = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-size: 22px;
  font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  letter-spacing: 0;
  font-style: normal;
  -webkit-box-flex: 1;
  flex: 0 0 auto;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
`;

const GenreCardImg = styled.div`
  background-origin: border-box;
  background-size: cover;
  height: 180px;
  width: 100%;
  -webkit-box-flex: 0;
  flex: none;
  -webkit-tap-highlight-color: transparent;
  color: inherit;
  background-color: transparent;
  background-image: url(${props => props.genreImg});
  background-position: 50% 50%;
`;

export { GenreCardContainer, GenreCardHeader, GenreCardTitle, GenreCardImg };
