import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  color: rgba(0, 0, 0, 0.84);
  padding: 0;
  width: 37px;
  text-align: center;
  border-radius: 100%;
  height: 37px;
  line-height: 37px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  transition: 0.1s background-color, 0.1s border-color, 0.1s color, 0.1s fill;
  display: inline-block;
  position: relative;
  background: rgba(0, 0, 0, 0);
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  vertical-align: bottom;
  white-space: nowrap;
  box-sizing: border-box;
  font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  font-style: normal;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  border-color: rgba(0, 0, 0, 0.54) !important;
  -webkit-box-flex: 0;
  flex: 0 0 auto;
  user-select: none !important;
  -webkit-tap-highlight-color: transparent !important;
  -webkit-appearance: button;
  text-transform: none;
  overflow: visible;
  font: inherit;
  margin: 0;

  &:hover,
  &:active,
  &:focus {
    color: rgba(0, 0, 0, 0.9);
  }

  &:active,
  &:focus {
    outline: 0;
  }

  &:active {
    transition: none;
  }

  &.isActive {
    background: rgba(0, 0, 0, 0.54);
    color: #fff;
  }

  &.isActive:hover,
  &.isActive:active,
  &.isActive:focus {
    background: rgba(0, 0, 0, 0.68);
  }
`;

const ButtonState = styled.span`
  display: inline-block;
  vertical-align: top;
`;

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

function GenreCardButton() {
  const [isActive, setIsActive] = useState(true);
  const btnRef = useRef();
  const stateChangeHandler = () => {
    setIsActive(prevState => !prevState);
    btnRef.current.blur();
  };
  return (
    <Button
      ref={btnRef}
      className={!isActive && 'isActive'}
      onClick={stateChangeHandler}
    >
      {isActive === true ? (
        <ButtonState>
          <SvgIconAddMediaPlus>
            <svg width="25" height="25">
              <path d="M20 12h-7V5h-1v7H5v1h7v7h1v-7h7" fillRule="evenodd" />
            </svg>
          </SvgIconAddMediaPlus>
        </ButtonState>
      ) : (
        <ButtonState>
          <SvgIconCheckboxTick>
            <svg width="21" height="21">
              <path
                d="M5.5 7.854L3.379 9.975l5.82 5.82 8.675-8.675-2.121-2.121-6.554 6.553z"
                fillRule="evenodd"
              />
            </svg>
          </SvgIconCheckboxTick>
        </ButtonState>
      )}
    </Button>
  );
}

export default GenreCardButton;
