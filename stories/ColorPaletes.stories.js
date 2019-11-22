/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
// import { storysource } from '@storybook/addon-storysource';
import styled from 'styled-components';
import getColor from '../app/staticData/colorSets';

export default {
  title: 'ColorPaletes',
};
function setColor(name) {
  const { color, borderColor, hoverColor } = getColor(name);
  const StyledDiv = styled.div`
    margin: 5px;
    display: inline-block;
    width: 90px;
    height: 50px;
    color: ${color};
    border: 5px solid ${borderColor};
    :hover {
      color: white;
      background: ${hoverColor};
    }
  `;
  return <StyledDiv>{name}</StyledDiv>;
}

export const colorPaletes = function B() {
  return (
    <div>
      <h1>All color sets will be used on the website</h1>
      <div>{'attrs: { color, borderColor, hoverColor }'}</div>
      {setColor('green')}
      {setColor('blue')}
      {setColor('red')}
      {setColor('purple')}
      {setColor('pink')}
      {setColor('black')}
      {setColor('pureBlack')}
      {setColor('gray')}
      {setColor('pureGray')}
      <p>{`it will return green palete as default if you didn't set colorSet in components`}</p>
      {setColor()}
    </div>
  );
};
