import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GenreCardButton from './GenreCardButton/index';

const GenreCardContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1) !important;
  width: 280px !important;
  height: 280px !important;
  margin-bottom: 30px !important;
  margin-left: 15px !important;
  margin-right: 15px !important;
  box-sizing: border-box !important;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  display: flex !important;
  -webkit-box-orient: vertical !important;
  -webkit-box-direction: normal !important;
  flex-direction: column !important;
  -webkit-box-pack: center !important;
  justify-content: center !important;
`;

const GenreCardHeader = styled.div`
  padding-right: 20px !important;
  padding-left: 20px !important;
  flex: 1 1 auto;
  -webkit-box-flex: 1;
  display: flex !important;
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  align-items: center !important;
`;

const GenreCardTitle = styled.a`
  font-weight: 600 !important;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  font-size: 22px !important;
  font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif !important;
  letter-spacing: 0 !important;
  font-style: normal !important;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  -webkit-tap-highlight-color: transparent;
  background-color: transparent;
`;

const GenreCardImg = styled.a`
  background-origin: border-box !important;
  background-size: cover !important;
  height: 180px !important;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  -webkit-tap-highlight-color: transparent;
  color: inherit;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
`;

const GenreCard = props => {
  const GenreCardImgStyle = {
    backgroundImage: `url(${props.GenreImg})`,
    backgroundPosition: '50% 50% !important',
  };
  return (
    <GenreCardContainer>
      <GenreCardHeader>
        <GenreCardTitle href={props.GenreLink}>{props.Genre}</GenreCardTitle>
        <GenreCardButton />
      </GenreCardHeader>
      <GenreCardImg
        href={props.GenreLink}
        style={GenreCardImgStyle}
        aria-label={props.Genre}
        alt={props.Genre}
      />
    </GenreCardContainer>
  );
};

GenreCard.propTypes = {
  Genre: PropTypes.string.isRequired,
  GenreLink: PropTypes.string.isRequired,
  GenreImg: PropTypes.string.isRequired,
};

export default GenreCard;
