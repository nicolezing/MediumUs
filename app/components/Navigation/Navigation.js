import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavWrap, NavflexWrap, AllListWrap } from './NavigationStyle';
import Arrow from './Arrow/Arrow';

function NavComponents(props) {
  const [positionClick, setPosition] = useState({ left: true });

  const navClickHandler = direction => {
    if (direction === 'left') {
      setPosition({ left: true });
    } else {
      setPosition({ left: false });
    }
  };

  const ListWrap = styled.li`
    display: inline-block;
    margin-left: 24px;
    color: rgba(0,0,0,.54)!important;
    fill: rgba(0,0,0,.54)!important;
    text-align: -webkit-match-parent;
    white-space: nowrap!important
    overflow: hidden;
  `;

  const navList = props.navs.map(el => (
    <ListWrap key={el.id}>
      {/* <NavLink to={el.navURL} activeStyle={{ textDecoration: 'none' }}>
          {el.navName}
        </NavLink> */}
      {el.navName}
    </ListWrap>
  ));

  return (
    <NavWrap>
      <NavflexWrap>
        <Arrow direction="left" clicked={navClickHandler} />
        <AllListWrap left={positionClick.left}>{navList}</AllListWrap>
        <Arrow direction="right" clicked={navClickHandler} />
      </NavflexWrap>
    </NavWrap>
  );
}

NavComponents.propTypes = {
  navs: PropTypes.array,
};

export default NavComponents;
