import React from 'react';
import PropTypes from 'prop-types';
import {
  GenreCardContainer,
  GenreCardHeader,
  GenreCardTitle,
  GenreCardImg,
} from './GenreCardStyles';
import {
  Button,
  ButtonState,
  SvgIconAddMediaPlus,
  SvgIconCheckboxTick,
} from './GenreCardButtonStyle';

const GenreCard = props => {
  const GenreCardImgStyle = {
    backgroundImage: `url(${props.GenreImg})`,
    backgroundPosition: '50% 50% !important',
  };
  return (
    <GenreCardContainer>
      <GenreCardHeader>
        <GenreCardTitle href={props.GenreLink}>{props.Genre}</GenreCardTitle>
        <Button>
          <ButtonState>
            {props.GenreState === 'default' ? (
              <SvgIconAddMediaPlus>
                <svg width="25" height="25">
                  <path
                    d="M20 12h-7V5h-1v7H5v1h7v7h1v-7h7"
                    fillRule="evenodd"
                  />
                </svg>
              </SvgIconAddMediaPlus>
            ) : (
              <SvgIconCheckboxTick>
                <svg width="21" height="21">
                  <path
                    d="M5.5 7.854L3.379 9.975l5.82 5.82 8.675-8.675-2.121-2.121-6.554 6.553z"
                    fillRule="evenodd"
                  />
                </svg>
              </SvgIconCheckboxTick>
            )}
          </ButtonState>
        </Button>
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
  GenreState: PropTypes.oneOf(['default', 'active']).isRequired,
};

export default GenreCard;
