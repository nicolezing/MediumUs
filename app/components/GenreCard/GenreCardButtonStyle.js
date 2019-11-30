import styled, { css } from 'styled-components';
import React from 'react';
import {
  addMediaPlusIcon,
  addCheckboxTickIcon,
} from '../../staticData/images/icons';

const base = css`
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
  :hover,
  :active,
  :focus {
    color: rgba(0, 0, 0, 0.9);
  }

  :active,
  :focus {
    outline: 0;
  }
  :active {
    transition: none;
  }
`;

const ButtonState = styled.span`
  display: inline-block;
  vertical-align: top;
`;

const Default = styled.button`
  ${base}
`;

const Active = styled.button`
  ${base}
  background: rgba(0, 0, 0, 0.54);
  color: #fff;
  :hover,
  :active,
  :focus {
    color: #fff;
    background: rgba(0, 0, 0, 0.68);
  }
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

const DefaultState = () => (
  <ButtonState>
    <SvgIconAddMediaPlus>{addMediaPlusIcon}</SvgIconAddMediaPlus>
  </ButtonState>
);

const ActiveState = () => (
  <ButtonState>
    <SvgIconCheckboxTick>{addCheckboxTickIcon}</SvgIconCheckboxTick>
  </ButtonState>
);

export { Default, Active, DefaultState, ActiveState };
