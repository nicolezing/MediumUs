import React from 'react';
import PropTypes from 'prop-types';
import {
  GenreCardContainer,
  GenreCardHeader,
  GenreCardTitle,
  GenreCardImg,
} from './GenreCardStyles';
import {
  DefaultState,
  ActiveState,
  Default,
  Active,
} from './GenreCardButtonStyle';

const GenreCard = props => (
  <GenreCardContainer>
    <GenreCardHeader>
      <GenreCardTitle href={props.genreLink}>{props.genre}</GenreCardTitle>
      {props.genreState === 'defaultState' ? (
        <Default onClick={props.onActiveStateChange}>
          <DefaultState />
        </Default>
      ) : (
        <Active onClick={props.onActiveStateChange}>
          <ActiveState />
        </Active>
      )}
    </GenreCardHeader>
    <a href={props.genreLink}>
      <GenreCardImg
        genreImg={props.genreImg}
        aria-label={props.genre}
        alt={props.genre}
      />
    </a>
  </GenreCardContainer>
);

GenreCard.propTypes = {
  genre: PropTypes.string.isRequired,
  genreLink: PropTypes.string.isRequired,
  genreImg: PropTypes.string.isRequired,
  genreState: PropTypes.oneOf(['defaultState', 'activeState']).isRequired,
  onActiveStateChange: PropTypes.func.isRequired,
};

export default GenreCard;
