import React from 'react';
import PropTypes from 'prop-types';
import {
  GenreCardContainer,
  GenreCardHeader,
  GenreCardTitle,
  GenreCardImg,
} from './GenreCardStyles';
import { DefaultState, ActiveState } from './GenreCardButtonStyle';

const GenreCard = props => (
  <GenreCardContainer>
    <GenreCardHeader>
      <GenreCardTitle href={props.genreLink}>{props.genre}</GenreCardTitle>
      {props.genreState === 'defaultState' ? (
        <DefaultState onClick={props.onClick} />
      ) : (
        <ActiveState onClick={props.onClick} />
      )}
    </GenreCardHeader>
    <GenreCardImg
      {...props}
      href={props.genreLink}
      aria-label={props.genre}
      alt={props.genre}
    />
  </GenreCardContainer>
);

GenreCard.propTypes = {
  genre: PropTypes.string.isRequired,
  genreLink: PropTypes.string.isRequired,
  genreImg: PropTypes.string.isRequired,
  genreState: PropTypes.oneOf(['defaultState', 'activeState']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GenreCard;
