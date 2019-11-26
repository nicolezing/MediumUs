import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, ButtonState } from './ButtonStyle';

const SvgIconAddMediaPlus = styled.span`
  fill: rgba(0, 0, 0, 0.84);
  position: relative;
  vertical-align: middle;
  transition: 0.1s background-color, 0.1s border-color, 0.1s color, 0.1s fill;
  line-height: 25px;
  height: 25px;
  display: inline-block;
  top: -2px !important;
`;

const SvgIconCheckboxTick = styled.span`
  fill: rgba(0, 0, 0, 0.84);
  top: -1px;
  position: relative;
  vertical-align: middle;
  transition: 0.1s background-color, 0.1s border-color, 0.1s color, 0.1s fill;
  line-height: 21px;
  height: 21px;
  display: inline-block;
`;

function GenreCardButton(props) {
  return (
    <Button>
      <ButtonState>
        {props.type === 'default' ? (
          <SvgIconAddMediaPlus>
            <svg width="25" height="25">
              <path d="M20 12h-7V5h-1v7H5v1h7v7h1v-7h7" fillRule="evenodd" />
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
  );
}

GenreCardButton.propTypes = {
  type: PropTypes.oneOf(['default', 'active']).isRequired,
};

export default GenreCardButton;
